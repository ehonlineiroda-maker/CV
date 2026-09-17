/* ==========================================================================
   HANZSÉROS ESZTER — BEMUTATKOZÓ OLDAL — script.js
   ========================================================================== */

/* ------------------------------------------------------------------------
   1) MOBIL MENÜ
   ------------------------------------------------------------------------ */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ------------------------------------------------------------------------
   2) NYELVVÁLTÁS — Magyar / Német
   Minden szöveg a "translations" szótárban van; a HTML elemeken lévő
   data-i18n="kulcs" attribútum alapján cserélődik a textContent,
   a data-i18n-html="kulcs" attribútum alapján pedig az innerHTML
   (ez utóbbi a formázott, több bekezdéses szövegeknél kell).
   ------------------------------------------------------------------------ */
const translations = {
  hu: {
    "nav.brand": "Hanzséros Eszter",
    "nav.about": "Rólam",
    "nav.expertise": "Szakértelem",
    "nav.projects": "Projektek",
    "nav.skills": "Képességek",
    "nav.contact": "Kapcsolat",

    "hero.eyebrow": "Vállalkozástámogató & Digitális Szakember",
    "hero.title1": "Üzleti gondolkodás.",
    "hero.title2": "Digitális megoldások.",
    "hero.title3": "Valódi eredmények.",
    "hero.lede": "Gazdasági és digitális szemléletű szakemberként webes, e-kereskedelmi és logisztikai megoldások megvalósításában veszek részt, melyek egyszerűbbé, hatékonyabbá teszik a működést.",
    "hero.ctaContact": "Kapcsolatfelvétel",
    "hero.ctaCv": "Önéletrajz PDF",

    "intro.text": "Gazdasági, logisztikai és digitális háttérből érkezem — ezért a technológiát nem önmagában, hanem üzleti célok szolgálatában használom.",

    "about.eyebrow": "Rólam",
    "about.body": `
      <p>Tanulmányaim során gazdasági, kereskedelmi és logisztikai területen szereztem alapokat. 
      <br>Diplomámat a veszprémi Pannon Egyetemen, idegenforgalmi menedzsment és közgazdaságtan szakon szereztem. Ezt követően logisztikai menedzser képesítést is szereztem, amely meghatározó alapot adott későbbi pályámhoz. </p>
      <p>A főiskola után több évet dolgoztam Ausztriában, elsősorban logisztikai és operatív területeken, ahol nagyfokú precizitást, rendszerezést és hatékony kommunikációt igénylő feladatokat láttam el.</p>
      <p>2018-ban fordultam a digitális megoldások és az e-kereskedelem világa felé. Azóta folyamatosan képzem magam webdesign, webfejlesztés és online marketing témákban, és mára olyan komplex szemléletet alakítottam ki, amelyben a logisztika, az üzleti adminisztráció és a digitális rendszerek egymást erősítve működnek.</p>
      <p>Fő erősségem, hogy átlátom az üzleti folyamatokat, képes vagyok azokat hatékony digitális megoldásokkal támogatni, és a megvalósítást az elejétől a végéig kézben tartani.</p>
      <p>Projektjeim során weboldalakat és webáruházakat építek, online rendszereket állítok fel, adminisztrációs és asszisztensi hátteret tartok kézben, foglalási és e-commerce feladatokat szervezek, valamint marketing- és közösségi média kommunikációt kezelek.</p>

    `,
    "about.studiesEyebrow": "Tanulmányok",
    "about.studiesList": `
      <li><span class="timeline__year">2003–2008</span> Pannon Egyetem – Veszprém<br>Idegenforgalmi Menedzsment és Közgazdaságtan (BA)</li>
      <li><span class="timeline__year">2009–2010</span> Griff Szakképzés – Győr<br>Logisztikai Menedzsment</li>
      <li><span class="timeline__year">2018–2019</span> Webler Informatika – Budapest<br>Webfejlesztő</li>
      <li><span class="timeline__year">2021</span> WIFI Wien – Bécs, Ausztria<br>E-Commerce Expertin</li>
      <li><span class="timeline__year">2022</span> Universität Graz – Bécs, Ausztria<br>Business Management</li>
      <li><span class="timeline__year">2022–2023</span> Werbe Akademie Wien – Ausztria<br>Mediendesign Diplomlehrgang</li>
    `,
    "about.pillar1Title": "Gazdasági szemlélet",
    "about.pillar1Text": "Üzleti folyamatok átlátása, elemzése és hatékonyságnövelése digitális eszközökkel.",
    "about.pillar2Title": "E-kereskedelmi szakértelem",
    "about.pillar2Text": "Webshopok felépítése, működtetése és optimalizálása a felhasználói élményért és az eladások növeléséért.",
    "about.pillar3Title": "Web & digitális megoldások",
    "about.pillar3Text": "Modern, reszponzív weboldalak és rendszerek fejlesztése WordPress és WooCommerce alapokon, egyedi funkciókkal.",
    "about.pillar4Title": "Folyamatok & rendszerek",
    "about.pillar4Text": "Üzleti folyamatok digitalizálása, automatizálása és integrált rendszerek kialakítása.",

    "expertise.eyebrow": "Szakértelem",
    "expertise.title": "Komplex szemlélet. Gyakorlati megoldások.",
    "expertise.card1Title": "Adminisztráció & asszisztencia",
    "expertise.card1Text": "Hatékony ügyviteli háttér, adatkezelés, dokumentáció, folyamatok rendszerezése és logisztikai támogatás.",
    "expertise.card2Title": "Operatív támogatás, adatbázis-kezelés",
    "expertise.card2Text": "Megbízható ügyviteli háttér, adatkezelés és rendszerezett, átlátható folyamatok kialakítása.",
    "expertise.card3Title": "Weboldalak & webshopok",
    "expertise.card3Text": "Egyedi, reszponzív weboldalak és webáruházak tervezése, fejlesztése WordPress, WooCommerce és egyedi kódolású alapokon.",
    "expertise.card4Title": "Foglalási rendszerek",
    "expertise.card4Text": "Időpontfoglaló és foglalási megoldások kialakítása, integrációk és automatizált folyamatok.",
    "expertise.card5Title": "Marketing & kommunikáció",
    "expertise.card5Text": "Online marketing, hírlevelek, közösségi média kezelése, hirdetések és tartalomgyártás.",

    "projects.eyebrow": "Projektjeim",
    "projects.title": "Valós projektek. Valódi eredmények.",
    "projects.lede": "Válogatás a megvalósított weboldalak és webáruházak közül — kattintson egy elemre a megtekintéshez.",
    "projects.p1desc": "Kaputechnika & ipari elektronika webshop",
    "projects.p2desc": "Használt autóalkatrész webáruház",
    "projects.p3desc": "Foglalási rendszerrel ellátott szálláshely-oldal",
    "projects.p4desc": "Könyvelési folymatok támogatása potnos, naprakész adminisztráció biztosításával",
    "projects.p5desc": "Esemény- és landing oldalak vállalkozásoknak és magánszemélyeknek",

    "skills.eyebrow": "Képességek",
    "skills.title": "Eszköztáram a hatékony munkához",
    "skills.lede": "Folyamatosan tanulok és fejlesztem magam, mert fontos számomra, hogy mindazoknak, akikkel együtt dolgozom, valódi értéket teremtő, modern megoldásokat nyújtsak.",
    "skills.col1": "Üzlet & adminisztráció",
    "skills.col1item7": "Ügyviteli rendszerek",
    "skills.col1item8": "Pénzügyi & Számlázási rendszerek",
    "skills.col1item9": "Kommunikációs rendszerek",
    "skills.col2": "Web & technológia",
    "skills.col2item5": "Automatizáció",
    "skills.col2item6": "Foglalási rendszerek",
    "skills.col3": "Marketing & design",
    "skills.col3item6": "Canva, Figma",
    "skills.col1item10": "Hírlevelek",
    "skills.col1item11": "Tartalomgyártás",   
    "skills.col4": "Nyelvek",
    "skills.langHu": "Magyar — anyanyelv",
    "skills.langDe": "Német — felsőfok",
    "skills.langEn": "Angol — középfok",

    "contact.eyebrow": "Kapcsolat",
    "contact.title": "Nyitott vagyok új lehetőségekre és együttműködésre!",
    "contact.lede": "Ha egy megbízható, precíz és digitálisan gondolkodó szakembert keres, aki átlátja az üzleti folyamatokat és valódi megoldásokat kínál — örömmel dolgozom együtt Önnel.",
    "contact.formName": "Név",
    "contact.formEmail": "E-mail cím",
    "contact.formPhone": "Telefonszám (opcionális)",
    "contact.formSubject": "Tárgy",
    "contact.formMessage": "Üzenet",
    "contact.formSubmit": "Üzenet küldése",
    "contact.sending": "Küldés folyamatban…",
    "contact.success": "Köszönöm az üzenetet! Hamarosan válaszolok.",
    "contact.error": "Hiba történt a küldés során. Kérem, próbálja újra, vagy írjon közvetlenül e-mailt.",
    "contact.invalid": "Kérem, töltse ki a kötelező mezőket.",

    "footer.tagline": "Online Iroda",
    "footer.copy": "© 2026 Hanzséros Eszter — Minden jog fenntartva.",
    "footer.impressum": "Impresszum",
    "footer.privacy": "Adatkezelési tájékoztató",
  },

  de: {
    "nav.brand": "Hanzséros Eszter",
    "nav.about": "Über mich",
    "nav.expertise": "Expertise",
    "nav.projects": "Projekte",
    "nav.skills": "Fähigkeiten",
    "nav.contact": "Kontakt",

    "hero.eyebrow": "Business- & Digitalberaterin",
    "hero.title1": "Unternehmerisches Denken.",
    "hero.title2": "Digitale Lösungen.",
    "hero.title3": "Echte Ergebnisse.",
    "hero.lede": "Als Fachfrau mit wirtschaftlichem und digitalem Blick begleite ich Web-, E-Commerce- und Logistiklösungen, die Abläufe einfacher und effizienter machen.",
    "hero.ctaContact": "Kontakt aufnehmen",
    "hero.ctaCv": "Lebenslauf (PDF)",

    "intro.text": "Ich komme aus der Wirtschaft, Logistik und digitalen Welt — deshalb setze ich Technologie nie als Selbstzweck ein, sondern immer im Dienst unternehmerischer Ziele.",

    "about.eyebrow": "Über mich",
    "about.body": `
      <p>Während meines Studiums habe ich mir Grundlagen in Wirtschaft, Handel und Logistik angeeignet. Meinen Abschluss habe ich an der Pannon Universität Veszprém im Bereich Tourismusmanagement und Volkswirtschaftslehre erworben.</p>
      <p>Anschließend erwarb ich eine Qualifikation als Logistikmanagerin, die eine wichtige Grundlage für meinen weiteren Werdegang bildete. Nach dem Studium arbeitete ich mehrere Jahre in Österreich, vor allem im Logistik- und Operativbereich, wo ich Aufgaben mit hoher Präzision, Systematik und effektiver Kommunikation übernahm.</p>
      <p>2018 wandte ich mich der Welt der digitalen Lösungen und des E-Commerce zu. Seitdem bilde ich mich laufend in Webdesign, Webentwicklung und Online-Marketing weiter und habe eine ganzheitliche Herangehensweise entwickelt, bei der sich Logistik, Unternehmensadministration und digitale Systeme gegenseitig stärken.</p>
      <p>Meine größte Stärke ist es, Geschäftsprozesse zu durchdringen, sie mit wirksamen digitalen Lösungen zu unterstützen und die Umsetzung von Anfang bis Ende selbst in der Hand zu behalten.</p>
      <p>Im Rahmen meiner Projekte baue ich Websites und Onlineshops auf, richte Onlinesysteme ein, übernehme die administrative und assistierende Betreuung, koordiniere Buchungs- und E-Commerce-Prozesse und steuere die Marketing- und Social-Media-Kommunikation.</p>

    `,
    "about.studiesEyebrow": "Ausbildung",
    "about.studiesList": `
      <li><span class="timeline__year">2003–2008</span> Universität Pannonia – Veszprém<br>Tourismusmanagement und Volkswirtschaftslehre (BA)</li>
      <li><span class="timeline__year">2009–2010</span> Griff Fachausbildung – Győr<br>Logistikmanagement</li>
      <li><span class="timeline__year">2018–2019</span> Webler Informatika – Budapest<br>Webentwicklerin</li>
      <li><span class="timeline__year">2021</span> WIFI Wien – Wien, Österreich<br>E-Commerce Expertin</li>
      <li><span class="timeline__year">2022</span> Universität Graz – Wien, Österreich<br>Business Management</li>
      <li><span class="timeline__year">2022–2023</span> Werbe Akademie Wien – Österreich<br>Mediendesign Diplomlehrgang</li>
    `,
    "about.pillar1Title": "Wirtschaftliches Denken",
    "about.pillar1Text": "Geschäftsprozesse erfassen, analysieren und mit digitalen Werkzeugen effizienter gestalten.",
    "about.pillar2Title": "E-Commerce-Expertise",
    "about.pillar2Text": "Aufbau, Betrieb und Optimierung von Webshops für ein besseres Nutzererlebnis und mehr Umsatz.",
    "about.pillar3Title": "Web- & Digitallösungen",
    "about.pillar3Text": "Entwicklung moderner, responsiver Websites und Systeme auf Basis von WordPress und WooCommerce mit individuellen Funktionen.",
    "about.pillar4Title": "Prozesse & Systeme",
    "about.pillar4Text": "Digitalisierung von Geschäftsprozessen, Automatisierung und Aufbau integrierter Systeme.",

    "expertise.eyebrow": "Expertise",
    "expertise.title": "Ganzheitlicher Blick. Praxisnahe Lösungen.",
    "expertise.card1Title": "Administration & Assistenz",
    "expertise.card1Text": "Effizienter administrativer Hintergrund, Datenpflege, Dokumentation, Prozessorganisation und logistische Unterstützung.",
    "expertise.card2Title": "Operative Unterstützung, Datenbankpflege",
    "expertise.card2Text": "Zuverlässiger administrativer Hintergrund, Datenpflege und Aufbau strukturierter, transparenter Abläufe.",
    "expertise.card3Title": "Websites & Onlineshops",
    "expertise.card3Text": "Design und Entwicklung maßgeschneiderter, responsiver Websites und Onlineshops auf Basis von WordPress und individuellem Code.",
    "expertise.card4Title": "Buchungssysteme",
    "expertise.card4Text": "Aufbau von Termin- und Buchungslösungen, Integrationen und automatisierte Abläufe.",
    "expertise.card5Title": "Marketing & Kommunikation",
    "expertise.card5Text": "Online-Marketing, Newsletter, Social-Media-Betreuung, Anzeigen und Content-Erstellung.",

    "projects.eyebrow": "Meine Projekte",
    "projects.title": "Reale Projekte. Echte Ergebnisse.",
    "projects.lede": "Eine Auswahl umgesetzter Websites und Onlineshops — klicken Sie auf ein Projekt, um es sich anzusehen.",
    "projects.p1desc": "Onlineshop für Torantriebstechnik & Industrieelektronik",
    "projects.p2desc": "Onlineshop für gebrauchte Autoersatzteile",
    "projects.p3desc": "Unterkunfts-Website mit Buchungssystem",
    "projects.p4desc": "Unterstützung von Buchhaltungsprozessen durch Gewährleistung einer präzisen, aktuellen Administration.",
    "projects.p5desc": "Event- und Landingpages für Privatpersonen und Unternehmen",

    "skills.eyebrow": "Fähigkeiten",
    "skills.title": "Mein Werkzeugkasten für effizientes Arbeiten",
    "skills.lede": "Ich bilde mich laufend weiter, denn es ist mir wichtig, allen, mit denen ich zusammenarbeite, moderne Lösungen mit echtem Mehrwert zu bieten.",
    "skills.col1": "Business & Administration",
    "skills.col1item7": "Warenwirtschaftssysteme",
    "skills.col1item8": "Finanz- & Abrechnungssysteme",
    "skills.col1item9": "Kommunikationssysteme",
    "skills.col2": "Web & Technologie",
    "skills.col2item5": "Automatisierung",
    "skills.col2item6": "Buchungssysteme",
    "skills.col3": "Marketing & Design",
    "skills.col3item6": "Canva, Figma",
    "skills.col3item10": "Newsletter",
    "skills.col3item11": "Content Marketing",
    "skills.col4": "Sprachen",
    "skills.langHu": "Ungarisch — Muttersprache",
    "skills.langDe": "Deutsch — verhandlungssicher",
    "skills.langEn": "Englisch — gute Kenntnisse",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Ich freue mich auf neue Möglichkeiten und Zusammenarbeit!",
    "contact.lede": "Wenn Sie eine zuverlässige, präzise und digital denkende Fachkraft suchen, die Geschäftsprozesse durchdringt und echte Lösungen bietet — ich arbeite gerne mit Ihnen zusammen.",
    "contact.formName": "Name",
    "contact.formEmail": "E-Mail-Adresse",
    "contact.formPhone": "Telefonnummer (optional)",
    "contact.formSubject": "Betreff",
    "contact.formMessage": "Nachricht",
    "contact.formSubmit": "Nachricht senden",
    "contact.sending": "Wird gesendet…",
    "contact.success": "Vielen Dank für Ihre Nachricht! Ich melde mich in Kürze.",
    "contact.error": "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt eine E-Mail.",
    "contact.invalid": "Bitte füllen Sie die Pflichtfelder aus.",

    "footer.tagline": "Online Büro",
    "footer.copy": "© 2026 Hanzséros Eszter — Alle Rechte vorbehalten.",
    "footer.impressum": "Impressum",
    "footer.privacy": "Datenschutzerklärung",
  },

  en: {
    "nav.brand": "Hanzséros Eszter",
    "nav.about": "About",
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Business & Digital Consultant",
    "hero.title1": "Business thinking.",
    "hero.title2": "Digital solutions.",
    "hero.title3": "Real results.",
    "hero.lede": "As a specialist with an economic and digital mindset, I help build web, e-commerce and logistics solutions that make operations simpler and more efficient.",
    "hero.ctaContact": "Get in touch",
    "hero.ctaCv": "Download CV (PDF)",

    "intro.text": "I come from a background in economics, logistics and digital work — which is why I never use technology for its own sake, only in service of real business goals.",

    "about.eyebrow": "About me",
    "about.body": `
      <p>During my studies I built a foundation in economics, trade and logistics. I earned my degree at the University of Pannonia in Veszprém, in Tourism Management and Economics.</p>
      <p>I later completed a logistics management qualification, which became a defining foundation for my later career. After college I spent several years working in Austria, mainly in logistics and operations, handling tasks that demanded precision, structure and effective communication.</p>
      <p>In 2018 I turned toward digital solutions and e-commerce. Since then I have continuously trained myself in web design, web development and online marketing, and I've developed a holistic approach in which logistics, business administration and digital systems reinforce one another.</p>
      <p>My core strength is that I understand business processes end to end, can support them with effective digital solutions, and can own the implementation from start to finish.</p>
      <p>In my projects, I build websites and online stores, set up online systems, oversee administrative and assistant operations, manage booking and e-commerce workflows, and handle marketing and social media communication.</p>

    `,
    "about.studiesEyebrow": "Education",
    "about.studiesList": `
      <li><span class="timeline__year">2003–2008</span> University of Pannonia – Veszprém<br>Tourism Management and Economics (BA)</li>
      <li><span class="timeline__year">2009–2010</span> Griff Vocational Training – Győr<br>Logistics Management</li>
      <li><span class="timeline__year">2018–2019</span> Webler Informatika – Budapest<br>Web Development</li>
      <li><span class="timeline__year">2021</span> WIFI Wien – Vienna, Austria<br>E-Commerce Expert</li>
      <li><span class="timeline__year">2022</span> University of Graz – Vienna, Austria<br>Business Management</li>
      <li><span class="timeline__year">2022–2023</span> Werbe Akademie Wien – Austria<br>Media Design Diploma Programme</li>
    `,
    "about.pillar1Title": "Business mindset",
    "about.pillar1Text": "Understanding, analysing and improving business processes with digital tools.",
    "about.pillar2Title": "E-commerce expertise",
    "about.pillar2Text": "Building, running and optimising webshops for a better user experience and higher sales.",
    "about.pillar3Title": "Web & digital solutions",
    "about.pillar3Text": "Development of modern, responsive websites and systems on WordPress and WooCommerce, with custom features.",
    "about.pillar4Title": "Processes & systems",
    "about.pillar4Text": "Digitalising business processes, automation, and building integrated systems.",

    "expertise.eyebrow": "Expertise",
    "expertise.title": "A complex approach. Practical solutions.",
    "expertise.card1Title": "Administration & assistance",
    "expertise.card1Text": "Efficient administrative support, data management, documentation, process organisation and logistics support.",
    "expertise.card2Title": "Operational support, database management",
    "expertise.card2Text": "Reliable administrative backing, data management, and clear, well-structured processes.",
    "expertise.card3Title": "Websites & webshops",
    "expertise.card3Text": "Design and development of custom, responsive websites and webshops based on WordPress, WooCommerce and custom-coded foundations.",
    "expertise.card4Title": "Booking systems",
    "expertise.card4Text": "Building appointment and booking solutions, integrations and automated workflows.",
    "expertise.card5Title": "Marketing & communication",
    "expertise.card5Text": "Online marketing, newsletters, social media management, ads and content creation.",

    "projects.eyebrow": "My projects",
    "projects.title": "Real projects. Real results.",
    "projects.lede": "A selection of websites and webshops I've built — click a project to view it.",
    "projects.p1desc": "Webshop for gate automation & industrial electronics",
    "projects.p2desc": "Webshop for used car parts",
    "projects.p3desc": "Accommodation website with a booking system",
    "projects.p4desc": "Supporting accounting processes by ensuring accurate, up-to-date administration.",
    "projects.p5desc": "Event and landing pages for individuals and businesses",

    "skills.eyebrow": "Skills",
    "skills.title": "My toolkit for effective work",
    "skills.lede": "I keep learning and developing my skills, because it matters to me to offer everyone I work with modern solutions that create real value.",
    "skills.col1": "Business & administration",
    "skills.col1item7": "Business management systems",
    "skills.col1item8": "Financial & Billing Systems",
    "skills.col1item9": "Communication Systems",
    "skills.col2": "Web & technology",
    "skills.col2item5": "Automation",
    "skills.col2item6": "Booking systems",
    "skills.col3": "Marketing & design",
    "skills.col3item6": "Canva, Figma",
    "skills.col3item10": "Newsletters",
    "skills.col3item11": "Content Creation",
    "skills.col4": "Languages",
    "skills.langHu": "Hungarian — native",
    "skills.langDe": "German — advanced",
    "skills.langEn": "English — intermediate",

    "contact.eyebrow": "Contact",
    "contact.title": "I'm open to new opportunities and collaborations!",
    "contact.lede": "If you're looking for a reliable, precise and digitally minded specialist who understands business processes and delivers real solutions — I'd be glad to work with you.",
    "contact.formName": "Name",
    "contact.formEmail": "Email address",
    "contact.formPhone": "Phone number (optional)",
    "contact.formSubject": "Subject",
    "contact.formMessage": "Message",
    "contact.formSubmit": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "Thank you for your message! I'll get back to you soon.",
    "contact.error": "Something went wrong while sending. Please try again, or email me directly.",
    "contact.invalid": "Please fill in the required fields.",

    "footer.tagline": "Online Office",
    "footer.copy": "© 2026 Hanzséros Eszter — All rights reserved.",
    "footer.impressum": "Imprint",
    "footer.privacy": "Privacy policy",
  },
};

let currentLang = "hu";

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-flag").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  // --- PDF link dinamikus cseréje a nyelv alapján ---
  const cvBtn = document.getElementById('cv-download-btn');
  if (cvBtn) {
    if (lang === 'de') {
      cvBtn.href = 'assets/lebensl.pdf'; // Cseréld ki a fájlnevére, ha más
      cvBtn.setAttribute('download', 'Hanzseros_Eszter_Lebenslauf.pdf');
    } else if (lang === 'en') {
      cvBtn.href = 'assets/lebensl.pdf';
      cvBtn.setAttribute('download', 'Hanzseros_Eszter_CV.pdf');
    } else {
      cvBtn.href = 'assets/onelet.pdf';
    }
  }
}
document.querySelectorAll(".lang-flag").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

/* ------------------------------------------------------------------------
   3) KAPCSOLATFELVÉTELI ŰRLAP
   Az űrlap beküldéskor JSON-t POST-ol a Make.com webhookra.
   ------------------------------------------------------------------------ */

// ==> MAKE.COM: illessze be ide a "Webhooks -> Custom webhook" modul URL-jét.
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/YOUR_WEBHOOK_ID_HERE";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const formSubmit = document.getElementById("formSubmit");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: contactForm.name.value.trim(),
    email: contactForm.email.value.trim(),
    phone: contactForm.phone.value.trim(),
    subject: contactForm.subject.value.trim(),
    message: contactForm.message.value.trim(),
    language: currentLang,
    source: "hanzseroseszter.hu landing page",
  };

  if (!data.name || !data.email || !data.subject || !data.message) {
    formStatus.textContent = translations[currentLang]["contact.invalid"];
    formStatus.className = "form-status is-error";
    return;
  }

  formSubmit.disabled = true;
  formStatus.textContent = translations[currentLang]["contact.sending"];
  formStatus.className = "form-status";

  try {
    // Ha a MAKE_WEBHOOK_URL még nincs kitöltve, csak szimulálja a sikeres küldést.
    if (MAKE_WEBHOOK_URL.includes("YOUR_WEBHOOK_ID_HERE")) {
      throw new Error("NO_WEBHOOK_CONFIGURED");
    }

    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("REQUEST_FAILED");

    formStatus.textContent = translations[currentLang]["contact.success"];
    formStatus.className = "form-status is-success";
    contactForm.reset();
  } catch (err) {
    // Amíg a Make.com webhook nincs beállítva, ez az ág fut le -
    // erre való a mailto: fallback linkje a fejlesztő számára.
    console.warn("Kapcsolati űrlap: a Make.com webhook URL nincs beállítva a script.js fájlban.", err);
    formStatus.textContent = translations[currentLang]["contact.error"];
    formStatus.className = "form-status is-error";
  } finally {
    formSubmit.disabled = false;
  }
});

/* ------------------------------------------------------------------------
   4) Induláskor magyar nyelv beállítása
   ------------------------------------------------------------------------ */
applyLanguage("hu");
