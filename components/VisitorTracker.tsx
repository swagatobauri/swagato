'use client';

import { useEffect } from 'react';

export function VisitorTracker() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    // Use sessionStorage so we only notify you ONCE per user session, 
    // rather than every single time they click a new page.
    const hasNotified = sessionStorage.getItem('portfolio_visited');

    if (!hasNotified) {
      // Send the notification to your secret ntfy topic
      fetch('https://ntfy.sh/swagato_portfolio_alerts_9921', {
        method: 'POST',
        body: 'Someone is looking at your portfolio right now! 👀',
        headers: {
          'Title': 'New Portfolio Visitor!',
          'Tags': 'tada,eyes',
        }
      })
      .then(() => {
        sessionStorage.setItem('portfolio_visited', 'true');
      })
      .catch(console.error);
    }
  }, []);

  return null; // This component doesn't render anything visually
}
