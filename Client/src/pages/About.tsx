// client/src/pages/About.tsx
import React from 'react';
import './About.scss';

const teamMembers = [
  {
    name: 'אריאל כהן',
    role: 'מייסד ומנכ"ל',
    image: '/images/Team/ArielCohen.png',
    imageStyle: { transform: 'scale(1)', objectPosition: '90% center' },
  },
  {
    name: 'מיכל לוי',
    role: 'מנהלת שירות לקוחות',
    image: '/images/Team/MichalLevi.png',
    imageStyle: { transform: 'scale(1)', objectPosition: 'center center' },
  },
  {
    name: 'יוסי אברהם',
    role: 'מומחה טכני',
    image: '/images/Team/YosiAvraham.png',
    imageStyle: { transform: 'scale(1)', objectPosition: '55% center' },
  },
];

const milestones = [
  { year: '2018', title: 'הקמת החברה', description: 'IDigitaly נוסדה עם חזון להנגיש מוצרי Apple לכל ישראל' },
  { year: '2020', title: 'משווק מורשה', description: 'קיבלנו את התואר היוקרתי של משווק מורשה של Apple' },
  { year: '2022', title: '10,000 לקוחות', description: 'חצינו את רף 10,000 לקוחות מרוצים' },
  { year: '2024', title: 'הרחבה ארצית', description: 'פתיחת מרכזי שירות בכל רחבי הארץ' },
];

const values = [
  {
    icon: '🎯',
    title: 'מצוינות',
    description: 'אנחנו שואפים למצוינות בכל מה שאנחנו עושים, מהמוצרים שאנחנו מוכרים ועד לשירות שאנחנו נותנים.',
  },
  {
    icon: '🤝',
    title: 'אמינות',
    description: 'כמשווק מורשה של Apple, אנחנו מחויבים לספק רק מוצרים מקוריים עם אחריות מלאה.',
  },
  {
    icon: '💡',
    title: 'חדשנות',
    description: 'אנחנו תמיד בחזית הטכנולוגיה, מביאים לכם את המוצרים החדשים והמתקדמים ביותר.',
  },
  {
    icon: '❤️',
    title: 'שירות',
    description: 'הלקוח במרכז. צוות המומחים שלנו זמין לעזור בכל שאלה ובכל בעיה.',
  },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <span className="about-hero__badge">משווק מורשה של Apple</span>
            <h1 className="about-hero__title">אודות IDigitaly</h1>
            <p className="about-hero__subtitle">
              אנחנו מאמינים שטכנולוגיה צריכה להיות נגישה לכולם.
              כמשווק מורשה של Apple בישראל, אנחנו מביאים לכם את הטוב ביותר.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__content">
              <h2 className="about-story__title">הסיפור שלנו</h2>
              <p className="about-story__text">
                IDigitaly נוסדה מתוך אהבה אמיתית לטכנולוגיה ולמוצרי Apple.
                החזון שלנו היה פשוט: להנגיש את מוצרי Apple האיכותיים ביותר
                לכל אדם בישראל, עם שירות אישי ומקצועי.
              </p>
              <p className="about-story__text">
                היום, לאחר שנים של פעילות, אנחנו גאים להיות אחד המשווקים
                המורשים המובילים של Apple בישראל. עם אלפי לקוחות מרוצים
                וצוות מומחים מסור, אנחנו ממשיכים להוביל את התחום.
              </p>
            </div>
            <div className="about-story__map">
              <iframe
                src="https://maps.google.com/maps?q=Kiryat+Atidim,+Tel+Aviv,+Israel&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מיקום המשרד"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">הערכים שלנו</h2>
            <p className="section-subtitle">העקרונות שמנחים אותנו בכל יום</p>
          </div>
          <div className="about-values__grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">הדרך שלנו</h2>
            <p className="section-subtitle">אבני דרך חשובות בהיסטוריה שלנו</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__year">{milestone.year}</div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{milestone.title}</h3>
                  <p className="timeline__description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">הצוות שלנו</h2>
            <p className="section-subtitle">האנשים שעומדים מאחורי ההצלחה</p>
          </div>
          <div className="about-team__grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card__image">
                  <img src={member.image} alt={member.name} style={member.imageStyle} />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__content">
            <h2 className="about-cta__title">מוכנים להתחיל?</h2>
            <p className="about-cta__description">
              גלו את מגוון מוצרי Apple שלנו והצטרפו לאלפי לקוחות מרוצים
            </p>
            <div className="about-cta__buttons">
              <a href="/#products" className="about-cta__btn about-cta__btn--primary">
                צפה במוצרים
              </a>
              <a href="/contact" className="about-cta__btn about-cta__btn--secondary">
                צור קשר
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
