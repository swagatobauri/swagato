'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Trophy, Code2 } from 'lucide-react';
import clsx from 'clsx';

// Types for the detailed API response
type LeetCodeData = {
  username: string;
  stats: {
    solved: { all: number; easy: number; medium: number; hard: number };
    total: { all: number; easy: number; medium: number; hard: number };
  };
  calendar: Record<string, number>;
  badges: Array<{ id: string; displayName: string; icon: string; creationDate: string }>;
  ranking: number;
  contest: {
    rating: number;
    globalRanking: number;
    attended: number;
    topPercentage: number;
  } | null;
};

type DayData = { date: Date; count: number };

export function LeetCodePanel() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/leetcode');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Compute 52-week Heatmap Data
  const WEEKS_TO_SHOW = 52;
  const weeks: DayData[][] = [];
  let totalActiveDays = 0;
  let maxStreak = 0;
  let currentStreak = 0;
  let submissionsPastYear = 0;
  
  if (data || loading) {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (today.getDay()) - ((WEEKS_TO_SHOW - 1) * 7));
    startDate.setHours(0, 0, 0, 0);

    const currentDate = new Date(startDate);
    
    // Parse calendar safely
    const calendarEntries = data?.calendar ? Object.entries(data.calendar) : [];
    
    for (let w = 0; w < WEEKS_TO_SHOW; w++) {
      const week: DayData[] = [];
      for (let d = 0; d < 7; d++) {
        let count = 0;
        
        if (data && data.calendar) {
          const dayStart = new Date(currentDate);
          dayStart.setHours(0,0,0,0);
          const dayEnd = new Date(currentDate);
          dayEnd.setHours(23,59,59,999);
          
          // Fix timezone matching by comparing UTC dates directly if needed
          // But since the API returns timestamps in UTC, comparing local day ranges is safe
          for (const [timestampStr, submissions] of calendarEntries) {
            const timestampMs = parseInt(timestampStr) * 1000;
            if (timestampMs >= dayStart.getTime() && timestampMs <= dayEnd.getTime()) {
              count += submissions;
            }
          }
        }
        
        if (currentDate <= today) {
          week.push({ date: new Date(currentDate), count });
          submissionsPastYear += count;
          if (count > 0) {
            totalActiveDays++;
            currentStreak++;
            if (currentStreak > maxStreak) maxStreak = currentStreak;
          } else {
            currentStreak = 0;
          }
        } else {
          week.push({ date: new Date(currentDate), count: -1 }); // Future
        }
        
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
    }
  }

  // Exact LeetCode colors
  const getColorClass = (count: number) => {
    if (count === -1) return 'bg-transparent'; 
    if (count === 0) return 'bg-[#383838]';
    if (count <= 1) return 'bg-[#004400]'; 
    if (count <= 3) return 'bg-[#006600]'; 
    if (count <= 5) return 'bg-[#009900]';
    return 'bg-[#00cc00]'; 
  };

  const username = data?.username || 'leetcode';
  const profileUrl = `https://leetcode.com/${username}`;

  if (error) {
    return (
      <div className="w-full min-h-[400px] border border-border rounded-3xl p-8 flex items-center justify-center bg-[#1A1A1A]">
         <a href={profileUrl} className="text-muted hover:text-white transition-colors">View LeetCode Profile</a>
      </div>
    );
  }

  // Calculate SVG stroke dashes for the donut chart
  const solved = data?.stats?.solved?.all || 0;
  const total = data?.stats?.total?.all || 1;
  const percentage = (solved / total) * 100;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full flex flex-col gap-4 font-sans">
      
      {/* Header Row */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Code2 className="w-6 h-6 text-orange-400" />
          <h2 className="text-xl font-bold text-foreground font-heading">LeetCode Dashboard</h2>
        </div>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors font-mono">
          @{username} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Panel 1: Stats & Donut */}
        <div className="col-span-1 lg:col-span-4 bg-[#282828] rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-white/5">
          {loading ? <div className="animate-pulse w-full h-32 bg-white/5 rounded-xl" /> : (
            <div className="flex items-center justify-between w-full">
              {/* Donut Chart */}
              <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r={radius} stroke="#383838" strokeWidth="8" fill="none" />
                  <circle 
                    cx="64" cy="64" r={radius} 
                    stroke="#FFA116" // LeetCode Yellow/Orange
                    strokeWidth="8" fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-white tracking-tight">{solved}</span>
                  <span className="text-[10px] text-white/50 border-t border-white/10 pt-0.5 mt-0.5 w-12">Solved</span>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="flex flex-col gap-2 w-full max-w-[140px]">
                <div className="flex flex-col p-2 rounded-lg bg-[#383838]/50">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#00b8a3] font-medium">Easy</span>
                    <span className="text-white/80 font-mono">{data.stats.solved.easy}<span className="text-white/30 text-[10px]">/{data.stats.total.easy}</span></span>
                  </div>
                </div>
                <div className="flex flex-col p-2 rounded-lg bg-[#383838]/50">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#ffc01e] font-medium">Med.</span>
                    <span className="text-white/80 font-mono">{data.stats.solved.medium}<span className="text-white/30 text-[10px]">/{data.stats.total.medium}</span></span>
                  </div>
                </div>
                <div className="flex flex-col p-2 rounded-lg bg-[#383838]/50">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#ff375f] font-medium">Hard</span>
                    <span className="text-white/80 font-mono">{data.stats.solved.hard}<span className="text-white/30 text-[10px]">/{data.stats.total.hard}</span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Panel 2: Badges & Rankings */}
        <div className="col-span-1 lg:col-span-8 bg-[#282828] rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-white/5">
          {loading ? <div className="animate-pulse w-full h-32 bg-white/5 rounded-xl" /> : (
            <div className="flex flex-col md:flex-row gap-8 w-full h-full">
              
              {/* Badges */}
              <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-white/50 font-medium">Badges</span>
                  <span className="text-xl font-bold text-white leading-none">{data.badges.length}</span>
                </div>
                <div className="flex gap-2 items-end">
                  {data.badges.slice(0, 3).map((badge, idx) => (
                    <div key={badge.id} className="relative group flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={badge.icon} alt={badge.displayName} className={`w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md ${idx === 0 ? 'scale-110 z-10' : 'opacity-80 grayscale-[20%]'}`} />
                    </div>
                  ))}
                </div>
                {data.badges.length > 0 && (
                  <div className="mt-4 flex flex-col">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">Most Recent</span>
                    <span className="text-sm text-white/90 font-medium truncate">{data.badges[0].displayName}</span>
                  </div>
                )}
              </div>

              {/* Ratings */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-white/50 font-medium flex items-center gap-2"><Trophy className="w-3 h-3 text-yellow-500" /> Contest Rating</span>
                  {data.contest && (
                    <span className="text-sm font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">Top {data.contest.topPercentage}%</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-white tracking-tight">{data.contest?.rating || 'N/A'}</span>
                  <span className="text-xs text-white/50">Global Ranking: <strong className="text-white/80">{data.contest?.globalRanking?.toLocaleString() || 'N/A'}</strong></span>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Panel 3: Heatmap */}
        <div className="col-span-1 lg:col-span-12 bg-[#282828] rounded-2xl p-6 shadow-xl flex flex-col gap-6 border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg text-white font-medium flex items-baseline gap-2">
              <span className="text-2xl font-bold">{submissionsPastYear}</span> 
              <span className="text-sm text-white/50">submissions in the past year</span>
            </h3>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Total active days: <strong className="text-white">{totalActiveDays}</strong></span>
              <span>Max streak: <strong className="text-white">{maxStreak}</strong></span>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            {loading ? (
              <div className="w-full h-[120px] bg-white/5 animate-pulse rounded-xl" />
            ) : (
              <div className="flex gap-[3px] min-w-[800px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px] flex-1">
                    {week.map((day, dIdx) => (
                      <div 
                        key={`${wIdx}-${dIdx}`} 
                        className={clsx(
                          "w-full aspect-square rounded-[2px] transition-colors duration-300",
                          getColorClass(day.count)
                        )}
                        title={day.count >= 0 ? `${day.count} submissions on ${day.date.toLocaleDateString()}` : undefined}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
