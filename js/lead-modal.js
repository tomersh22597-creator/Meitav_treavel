const leadModalHTML = `
<div id="leadModalOverlay" class="form-overlay">
    <div class="form-container-box">
        <button type="button" class="form-close-btn" onclick="closeLeadModal()">&times;</button>
        
        <div id="formContentArea">
            <div class="form-header">
                <span class="eyebrow" style="color: #D96C4A; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">תכנון אישי ללא פשרות</span>
                <h2>בואו נתחיל לבנות את הטיול שלכם</h2>
                <p>השאירו פרטים ומיטב יחזור אליכם בהקדם עם הצעה מדויקת.</p>
            </div>

            <form id="siteLeadForm">
                <div class="form-group">
                    <label for="modalName">שם מלא *</label>
                    <input type="text" id="modalName" name="fullName" class="form-control" required placeholder="למשל: תומר שטרנגלז">
                </div>

                <div class="form-group">
                    <label for="modalPhone">מספר טלפון / וואטסאפ *</label>
                    <input type="tel" id="modalPhone" name="phone" class="form-control" required placeholder="למשל: 050-0000000">
                </div>

                <div class="form-group">
                    <label for="modalEmail">כתובת אימייל</label>
                    <input type="email" id="modalEmail" name="email" class="form-control" placeholder="למשל: myname@gmail.com">
                </div>

                <div class="form-group">
                    <label for="modalDestination">יעד מועדף לטיול *</label>
                    <input type="text" id="modalDestination" name="destination" class="form-control" required placeholder="למשל: סקוטלנד, יוון, או כל יעד אחר...">
                </div>

                <div class="form-group">
                    <label for="modalNotes">הערות, הרכב נוסעים או בקשות מיוחדות</label>
                    <textarea id="modalNotes" name="notes" class="form-control" placeholder="טיול זוגי, משפחתי, כמה ימים וכו'..."></textarea>
                </div>

                <button type="submit" class="submit-lead-btn">שליחת פרטים למיטב</button>
            </form>
        </div>

        <div id="formSuccessArea" class="form-success-message">
            <h3>הפרטים התקבלו בהצלחה!</h3>
            <p>תודה רבה. מיטב קיבל את הפנייה ויחזור אליך בהקדם האפשרי.</p>
        </div>
    </div>
</div>
`;

// הזרקה אוטומטית של הפופ-אפ לכל דף שטוען את הקובץ
document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML('beforeend', leadModalHTML);

    const overlay = document.getElementById('leadModalOverlay');
    const form = document.getElementById('siteLeadForm');

    // סגירה בלחיצה על הרקע הכהה
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLeadModal();
    });

    // טיפול בשליחת הטופס (מצב הדגמה מקומי)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('formContentArea').style.display = 'none';
        document.getElementById('formSuccessArea').style.display = 'block';

        setTimeout(() => {
            closeLeadModal();
            form.reset();
            document.getElementById('formContentArea').style.display = 'block';
            document.getElementById('formSuccessArea').style.display = 'none';
        }, 3000);
    });
});

// פונקציות גלובליות שכל כפתור באתר יכול לקרוא להן
function openLeadModal(defaultDestination = '') {
    const overlay = document.getElementById('leadModalOverlay');
    const destInput = document.getElementById('modalDestination');
    if (destInput) destInput.value = defaultDestination || '';
    if (overlay) overlay.classList.add('active');
}

function closeLeadModal() {
    const overlay = document.getElementById('leadModalOverlay');
    if (overlay) overlay.classList.remove('active');
}