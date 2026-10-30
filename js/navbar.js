// ==========================================
// Dynamic Navigation Bar Injector (Smart Path)
// ==========================================
const isNested = window.location.pathname.includes('/destinations/');
const prefix = isNested ? '../' : '';

const navbarHTML = `
    <div class="nav-container">
        <a href="${prefix}index.html" class="logo">
            <img src="${prefix}images/logo.png" alt="מיטב הטיולים" class="logo-img">
        </a>
        
        <ul class="nav-links">
            <li><a href="${prefix}index.html#concept">הרעיון</a></li>
            <li><a href="${prefix}index.html#included">מה כלול</a></li>
            <li><a href="${prefix}index.html#destinations">מסלולים</a></li>
            <li><a href="${prefix}index.html#services">השירותים</a></li>
            <li><a href="${prefix}index.html#about">עליי</a></li>
            <li><a href="${prefix}index.html#faq">שאלות נפוצות</a></li>
        </ul>
        
        <a href="javascript:void(0);" onclick="openLeadModal('כללי / התאמה אישית')" class="nav-btn">מתחילים לתכנן</a>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.innerHTML = navbarHTML;
    }
});