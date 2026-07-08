import { NextResponse } from 'next/server';

export const revalidate = 14400; // Cache for 4 hours (14400 seconds)

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';
const USERNAME = 'swagatobauri';

const query = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      submissionCalendar
      badges {
        id
        displayName
        icon
        creationDate
      }
      profile {
        ranking
      }
    }
    userContestRanking(username: $username) {
      rating
      globalRanking
      attendedContestsCount
      topPercentage
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch(LEETCODE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username: USERNAME },
      }),
      next: { revalidate: 14400 },
    });

    if (!response.ok) {
      throw new Error(`LeetCode API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0]?.message || 'GraphQL Error');
    }

    const matchedUser = data.data?.matchedUser;
    const allQuestionsCount = data.data?.allQuestionsCount || [];
    const contestRanking = data.data?.userContestRanking;

    if (!matchedUser) {
      throw new Error('User not found');
    }

    // Parse the submissionCalendar JSON string
    const calendarStr = matchedUser.submissionCalendar;
    let calendar = {};
    if (calendarStr) {
      try {
        calendar = JSON.parse(calendarStr);
      } catch (e) {
        console.error('Failed to parse submission calendar');
      }
    }

    // Extract stats
    const acStats = matchedUser.submitStats?.acSubmissionNum || [];
    
    const extractCount = (arr: any[], diff: string) => arr.find((stat: any) => stat.difficulty === diff)?.count || 0;

    const stats = {
      solved: {
        all: extractCount(acStats, 'All'),
        easy: extractCount(acStats, 'Easy'),
        medium: extractCount(acStats, 'Medium'),
        hard: extractCount(acStats, 'Hard'),
      },
      total: {
        all: extractCount(allQuestionsCount, 'All'),
        easy: extractCount(allQuestionsCount, 'Easy'),
        medium: extractCount(allQuestionsCount, 'Medium'),
        hard: extractCount(allQuestionsCount, 'Hard'),
      },
    };

    // Extract badges
    let badges = matchedUser.badges || [];
    // Ensure badge icons have absolute URLs if they are relative
    badges = badges.map((badge: any) => ({
      ...badge,
      icon: badge.icon.startsWith('/') ? `https://leetcode.com${badge.icon}` : badge.icon
    }));

    return NextResponse.json({
      username: USERNAME,
      stats,
      calendar,
      badges,
      ranking: matchedUser.profile?.ranking,
      contest: contestRanking ? {
        rating: Math.round(contestRanking.rating),
        globalRanking: contestRanking.globalRanking,
        attended: contestRanking.attendedContestsCount,
        topPercentage: contestRanking.topPercentage
      } : null
    });

  } catch (error: any) {
    console.error('LeetCode API Proxy Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch LeetCode data' },
      { status: 500 }
    );
  }
}
