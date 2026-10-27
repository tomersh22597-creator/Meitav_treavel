// ==========================================
// Google Analytics - Dynamic Injection
// ==========================================
const GA_MEASUREMENT_ID = 'G-Q4JVSSQ8TE';

// 1. יצירה והזרקה של הסקריפט החיצוני של גוגל לתוך הדף
const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(gtagScript);

// 2. אתחול מערכת המעקב של גוגל
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', GA_MEASUREMENT_ID);

console.log("✅ Google Analytics loaded dynamically!");