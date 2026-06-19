import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-content">
          <img src="/logo.png" className="logo" alt="مقطع" />
          <h1 className="app-name">مقطع</h1>
          <p className="tagline">تعلّم الهجاء والإملاء العربي بطريقة تفاعلية</p>
          <a href="#download" className="download-btn">حمّل التطبيق</a>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-content">
          <h2>ما هو مقطع؟</h2>
          <p>
            تطبيق <strong>مقطع</strong> هو تطبيق تعليمي مخصص لتعليم الهجاء والإملاء العربي
            للأطفال بالخصوص. يمكن للمستخدم استعراض وسماع النص نفسه في 3 أشكال:
            الجملة، الكلمة، والمقطع الهجائي.
          </p>
          <p>
            عصب التطبيق هو قدرته على استقبال النصوص وتقسيمها إلى مقاطع هجائية صوتية
            حسب قواعد اللغة، ما يمكن الطفل من سماع تهجئة الكلمة ثم الكلمة نفسها ثم
            الكلمة في إطار الجملة الكاملة.
          </p>
        </div>
      </section>

      <section className="section alt" id="levels">
        <div className="section-content">
          <h2>مستويات الإملاء</h2>
          <div className="cards">
            <div className="card">
              <div className="card-number">١</div>
              <h3>إكمال المقطع الناقص</h3>
              <p>يسمع الطفل الكلمة ويختار الحرف الناقص من كتابتها</p>
            </div>
            <div className="card">
              <div className="card-number">٢</div>
              <h3>اختيار الحركة الصحيحة</h3>
              <p>يختار الطفل الحركة الصحيحة للحرف الناقص بعد سماع الكلمة</p>
            </div>
            <div className="card">
              <div className="card-number">٣</div>
              <h3>كتابة الكلمة كاملة</h3>
              <p>يكتب الطفل الكلمة مع حركاتها بعد سماعها</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="problem">
        <div className="section-content">
          <h2>المشكلة</h2>
          <p>
            مع الاكتظاظ السائد في المدارس، يعاني المعلمون من عجزهم عن جعل كافة الأطفال
            يقرأون النصوص. كما أن الهجاء ليس موضوعاً يمكن إعطاء التلميذ فيه تمارين
            منزلية يؤديها دون مساعدة. جاء هذا التطبيق لإراحة المعلم والأهل من جهد جهيد.
          </p>
        </div>
      </section>

      <section className="section alt" id="why">
        <div className="section-content">
          <h2>لماذا مقطع؟</h2>
          <div className="features">
            <div className="feature">
              <h3>لا توجد بدائل</h3>
              <p>
                المشكلة ليست في عدم وجود حل، بل في عسر إيجاد حل تقني يقرأ المقاطع
                الهجائية المنفصلة بصورة صحيحة. معظم أدوات قراءة النصوص تفشل في نطق
                المقاطع الهجائية المنفصلة عكس الكلمات والجمل.
              </p>
            </div>
            <div className="feature">
              <h3>يعمل دون إنترنت</h3>
              <p>
                بمجرد تفعيل التطبيق وتحميل حزمة اللغة المناسبة، يعمل التطبيق بالكامل
                دون الحاجة إلى اتصال بالإنترنت.
              </p>
            </div>
            <div className="feature">
              <h3>تعلم مستقل</h3>
              <p>
                يمكّن الطفل من ممارسة وتعلم الهجاء والإملاء بشكل مستقل تماماً دون
                أي مساعدة من المعلم أو الأهل.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="audience">
        <div className="section-content">
          <h2>لمن هذا التطبيق؟</h2>
          <p>
            أولياء أمور تلاميذ المراحل الابتدائية الذين يستمعون إلى معاناة أطفالهم
            مع الهجاء والإملاء ويريدون حلاً عملياً وفعالاً.
          </p>
        </div>
      </section>

      <section className="section alt" id="download">
        <div className="section-content">
          <h2>حمّل التطبيق الآن</h2>
          <p className="download-text">
            ابدأ رحلة التعلم مع طفلك اليوم
          </p>
          <div className="store-badges">
            <a href="#" className="store-btn google-play">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Google Play
            </a>
            <a href="#" className="store-btn app-store">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 مقطع. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  )
}

export default App
