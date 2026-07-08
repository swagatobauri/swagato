'use client';

import { useEffect } from 'react';

export function VisitorTracker() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    // Use sessionStorage so we only notify you ONCE per user session
    const hasNotified = sessionStorage.getItem('portfolio_visited');

    if (!hasNotified) {
      const getVisitorDataAndNotify = async () => {
        try {
          // 1. Get Location Data
          let location = "an unknown location";
          try {
            const res = await fetch('https://ipapi.co/json/');
            if (res.ok) {
              const data = await res.json();
              if (data && data.city && data.country_name) {
                location = `${data.city}, ${data.country_name}`;
              }
            }
          } catch (e) {
            console.log("Could not fetch location data");
          }

          // 2. Get Device Type
          const ua = navigator.userAgent;
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
          const device = isMobile ? 'Mobile' : 'Desktop';

          // 3. Get Referrer (Where they came from)
          let referrer = 'Direct Link';
          if (document.referrer) {
            try {
              referrer = new URL(document.referrer).hostname;
            } catch (e) {
              referrer = document.referrer;
            }
          }

          // Construct the detailed message
          const message = `Someone on a ${device} from ${location} is looking at your portfolio! 👀\n\nArrived from: ${referrer}`;

          // Send the notification to your secret ntfy topic
          await fetch('https://ntfy.sh/swagato_portfolio_alerts_9921', {
            method: 'POST',
            body: message,
            headers: {
              'Title': 'New Portfolio Visitor!',
              'Tags': 'tada,eyes',
            }
          });

          // Mark as notified in this session
          sessionStorage.setItem('portfolio_visited', 'true');
        } catch (error) {
          console.error("Failed to send notification:", error);
        }
      };

      getVisitorDataAndNotify();
    }
  }, []);

  return null; // This component doesn't render anything visually
}
