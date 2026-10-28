// ==========================================
// Dynamic Navigation Bar Injector
// ==========================================
const navbarHTML = `
    <div class="nav-container">
        <a href="index.html" class="logo">
            <img src="images/logo.png" alt="מיטב הטיולים" class="logo-img">
        </a>
        
        <ul class="nav-links">
            <li><a href="index.html#concept">הרעיון</a></li>
            <li><a href="index.html#included">מה כלול</a></li>
            <li><a href="index.html#destinations">מסלולים</a></li>
            <li><a href="index.html#services">השירותים</a></li>
            <li><a href="index.html#about">עליי</a></li>
            <li><a href="index.html#faq">שאלות נפוצות</a></li>
        </ul>
        
        <a href="https://wa.me/972000000000?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%99%D7%98%D7%91,%20%D7%A9%D7%9E%D7%99%20____%20%D7%95%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%AA%D7%9B%D7%A0%D7%95%D7%9F%20%D7%98%D7%99%D7%95%D7%9C" target="_blank" rel="noopener noreferrer" class="nav-btn">מתחילים לתכנן</a>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.innerHTML = navbarHTML;
    }
});