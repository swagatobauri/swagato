'use client';

export function SocialBento() {
  return (
    <div className="w-full h-full bg-background border border-border rounded-2xl p-6 flex flex-col relative shadow-sm overflow-hidden group hover:border-foreground/50 transition-colors">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50 shrink-0">
        <h3 className="font-heading font-bold text-bodySm flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          Recent Activity
        </h3>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Live LinkedIn Feed</span>
      </div>

      <div className="flex-1 w-full bg-white rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
          
          <iframe 
            src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25710168"
            frameBorder="0" 
            width="100%" 
            height="1000" 
            className="w-full min-h-[800px]"
            title="LinkedIn Profile Posts"
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}
