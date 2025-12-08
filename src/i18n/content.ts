export type Lang = "en" | "ka" | "ru";
export type CategoryKey = "residential" | "commercial" | "industrial";

// small helper types (clean & reusable)
export type NavItem = { id: string; label: string };
export type StatItem = { label: string; value: string };
export type ServiceItem = { title: string; text: string; bullets: string[] };
export type ProjectItem = { name: string; category: CategoryKey; note: string };
export type TestimonialItem = { name: string; role: string; text: string };
export type ProcessStep = { title: string; text: string };
export type SectionBlock = { eyebrow: string; title: string; subtitle: string };

export type Content = {
  brand: {
    name: string;
    subtitle: string;
    tagline: string;
    locationShort: string;
  };

  nav: NavItem[];

  hero: {
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    safetyTitle: string;
    safetyText: string;
    hint3d: string;
  };

  stats: StatItem[];

  sections: {
    services: SectionBlock;
    projects: SectionBlock;
    testimonials: SectionBlock;
    about: SectionBlock;
    process: SectionBlock;
    contact: SectionBlock;
  };

  services: ServiceItem[];

  categories: {
    all: string;
    residential: string;
    commercial: string;
    industrial: string;
  };

  projects: ProjectItem[];
  testimonials: TestimonialItem[];

  about: {
    p1: string;
    p2: string;
    bullets: string[];
  };

  process: ProcessStep[];

  contact: {
    phone: string;
    email: string;
    address: string;
    placeholders: {
      name: string;
      contact: string;
      desc: string;
    };
    projectTypes: string[];
    demoNote: string;
    mapNote: string;
  };

  footer: {
    contactLabel: string;
    rights: string;
  };

  quoteModal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    placeholders: {
      name: string;
      contact: string;
      desc: string;
    };
    projectTypeLabel: string;
    budgetLabel: string;
    budgets: string[];
    submit: string;
    demoNote: string;
  };
};

// ---------------- EN ----------------
const EN: Content = {
  brand: {
    name: "N-building",
    subtitle: "CONSTRUCTION",
    tagline: "Modern construction. Reliable results.",
    locationShort: "Georgia • Residential & Commercial",
  },

  nav: [
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Clients" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    headline: "Build smarter with",
    description:
      "Blueprints to handover — we deliver durable, modern spaces with clear timelines, transparent budgets, and a safety-first culture.",
    primaryCta: "Request quote",
    secondaryCta: "Our services",
    safetyTitle: "Safety & QA first",
    safetyText: "Standards-driven site management",
    hint3d: "3D preview (drag to rotate)",
  },

  stats: [
    { label: "Years experience", value: "10+" },
    { label: "Projects delivered", value: "120+" },
    { label: "Quality focus", value: "High" },
  ],

  sections: {
    services: {
      eyebrow: "What we do",
      title: "Construction services built for quality",
      subtitle:
        "A flexible service line for private homes, multi-unit buildings, retail spaces, and industrial sites.",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Selected work & concepts",
      subtitle:
        "A structured gallery with filters for a premium, real-company feel.",
    },
    testimonials: {
      eyebrow: "Clients",
      title: "Trusted by people who value quality",
      subtitle:
        "Short, confidence-building feedback that strengthens credibility.",
    },
    about: {
      eyebrow: "Who we are",
      title: "A pragmatic, quality-first builder",
      subtitle:
        "Add your real story, certifications and team photos when ready — this space is designed for trust.",
    },
    process: {
      eyebrow: "How we work",
      title: "A simple, reliable delivery pipeline",
      subtitle:
        "Clear steps help clients understand scope, timing, and quality control.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build your next project",
      subtitle:
        "Frontend-only demo with real WhatsApp + EmailJS wiring available.",
    },
  },

  services: [
    {
      title: "Residential projects",
      text:
        "Villas, apartments, renovations, premium finishes, energy-smart upgrades.",
      bullets: ["Turnkey delivery", "Cost control", "Modern aesthetics"],
    },
    {
      title: "Commercial & retail",
      text:
        "Stores, offices, hospitality. We align design, permitting, and build phases.",
      bullets: [
        "Fast track options",
        "Brand-aligned fitout",
        "Minimal downtime",
      ],
    },
    {
      title: "Industrial & civil",
      text:
        "Warehouses, structural works, site infrastructure with strong safety governance.",
      bullets: ["Engineering-led", "Compliance focus", "Lifecycle thinking"],
    },
  ],

  categories: {
    all: "All",
    residential: "Residential",
    commercial: "Commercial",
    industrial: "Industrial",
  },

  projects: [
    {
      name: "Coastal Residence",
      category: "residential",
      note: "Modern villa concept with durable materials and clean geometry.",
    },
    {
      name: "City Retail Fitout",
      category: "commercial",
      note: "Brand-first interior layout optimized for customer flow.",
    },
    {
      name: "Logistics Hub",
      category: "industrial",
      note: "Structural + infrastructure planning for long-term performance.",
    },
  ],

  testimonials: [
    {
      name: "Private Client",
      role: "Residential build",
      text:
        "Clear communication, strong site discipline, and excellent finishing quality.",
    },
    {
      name: "Retail Owner",
      role: "Store fit-out",
      text:
        "Fast delivery and clean execution without disrupting daily business.",
    },
    {
      name: "Operations Manager",
      role: "Industrial project",
      text:
        "Reliable timelines and a safety-first approach we could trust.",
    },
  ],

  about: {
    p1:
      "N-building focuses on reliable execution, modern standards, and transparent communication.",
    p2:
      "Add your father’s real company story here: timeline, signature projects, and specialties.",
    bullets: [
      "Clear scope & milestones",
      "Quality control checkpoints",
      "Safety and compliance culture",
      "Long-term durability mindset",
      "Modern architecture-friendly execution",
    ],
  },

  process: [
    { title: "Consultation", text: "Goals, budget, feasibility, timeline." },
    { title: "Design & Planning", text: "Concept, estimates, materials, permits." },
    { title: "Build", text: "Site execution with QA and reporting." },
    { title: "Handover", text: "Final checks, documentation, warranty." },
  ],

  contact: {
    phone: "+995 5XX XX XX XX",
    email: "info@n-building.com",
    address: "Batumi / Tbilisi (add exact address)",
    placeholders: {
      name: "Your name",
      contact: "Phone or email",
      desc: "Tell us about your project",
    },
    projectTypes: ["Residential", "Commercial", "Industrial", "Renovation"],
    demoNote: "Demo only — no backend connected yet.",
    mapNote: "Placeholder for map embed",
  },

  footer: {
    contactLabel: "Contact",
    rights: "All rights reserved.",
  },

  quoteModal: {
    eyebrow: "Request a quote",
    title: "Tell us about your project",
    subtitle: "Frontend demo — you can connect this to backend later.",
    placeholders: {
      name: "Your name",
      contact: "Phone or email",
      desc: "Short description, size, location, timeline...",
    },
    projectTypeLabel: "Project type",
    budgetLabel: "Budget range",
    budgets: ["Flexible", "Mid", "Premium"],
    submit: "Send request",
    demoNote: "Demo UI only — no data is sent.",
  },
};

// ---------------- KA ----------------
const KA: Content = {
  brand: {
    name: "N-building",
    subtitle: "მშენებლობა",
    tagline: "თანამედროვე მშენებლობა. სანდო შედეგი.",
    locationShort: "საქართველო • საცხოვრებელი და კომერციული",
  },

  nav: [
    { id: "services", label: "სერვისები" },
    { id: "projects", label: "პროექტები" },
    { id: "testimonials", label: "კლიენტები" },
    { id: "about", label: "ჩვენ შესახებ" },
    { id: "process", label: "პროცესი" },
    { id: "contact", label: "კონტაქტი" },
  ],

  hero: {
    headline: "ააშენე ჭკვიანურად",
    description:
      "ესკიზიდან ჩაბარებამდე — ვქმნით გამძლე და თანამედროვე სივრცეებს მკაფიო ვადებით, გამჭვირვალე ბიუჯეტით და უსაფრთხოების პრიორიტეტით.",
    primaryCta: "შეთავაზების მოთხოვნა",
    secondaryCta: "ჩვენი სერვისები",
    safetyTitle: "უსაფრთხოება და ხარისხი",
    safetyText: "სტანდარტებზე დაფუძნებული მართვა",
    hint3d: "3D ხედვა (გადმოატრიალე)",
  },

  stats: [
    { label: "გამოცდილების წლები", value: "10+" },
    { label: "ჩაბარებული პროექტები", value: "120+" },
    { label: "ხარისხის ფოკუსი", value: "მაღალი" },
  ],

  sections: {
    services: {
      eyebrow: "რას ვაკეთებთ",
      title: "ხარისხზე ორიენტირებული სერვისები",
      subtitle:
        "მოქნილი სერვისები საცხოვრებელი, მრავალბინიანი, კომერციული და სამრეწველო პროექტებისთვის.",
    },
    projects: {
      eyebrow: "პორტფოლიო",
      title: "შერჩეული სამუშაოები და კონცეპტები",
      subtitle:
        "ფილტრებით ორგანიზებული გალერეა პრემიუმ ბრენდის შეგრძნებისთვის.",
    },
    testimonials: {
      eyebrow: "კლიენტები",
      title: "სანდო პარტნიორი ხარისხის მოყვარულთათვის",
      subtitle:
        "მოკლე შეფასებები, რომლებიც ამყარებს რეალურობას და ნდობას.",
    },
    about: {
      eyebrow: "ვინ ვართ",
      title: "პრაქტიკული და ხარისხზე ორიენტირებული გუნდი",
      subtitle:
        "აქ დაამატე კომპანიის რეალური ისტორია, სერთიფიკატები და გუნდის ფოტოები.",
    },
    process: {
      eyebrow: "როგორ ვმუშაობთ",
      title: "მარტივი და სანდო ეტაპები",
      subtitle:
        "გასაგები პროცესი ეხმარება კლიენტს ვადების, ბიუჯეტისა და ხარისხის ხედვაში.",
    },
    contact: {
      eyebrow: "კონტაქტი",
      title: "დავიწყოთ თქვენი პროექტი",
      subtitle: "ფრონტენდი + WhatsApp/EmailJS — ბექენდი სურვილისამებრ.",
    },
  },

  services: [
    {
      title: "საცხოვრებელი პროექტები",
      text:
        "ვილები, ბინები, რემონტი, პრემიუმ დასრულება და ენერგოეფექტური განახლება.",
      bullets: ["Turnkey ჩაბარება", "ხარჯების კონტროლი", "თანამედროვე სტილი"],
    },
    {
      title: "კომერციული და საცალო",
      text:
        "მაღაზიები, ოფისები, ჰოსპიტალითი — დიზაინი, ნებართვები და მშენებლობა ერთიანად.",
      bullets: ["სწრაფი გრაფიკი", "ბრენდის შესაბამისი სივრცე", "მინიმალური შეჩერება"],
    },
    {
      title: "სამრეწველო და სამოქალაქო",
      text:
        "საწყობები, კონსტრუქციები და ინფრასტრუქტურა უსაფრთხოების ძლიერი კონტროლით.",
      bullets: ["ინჟინერული მართვა", "კომპლაიანსი", "ციკლური ხედვა"],
    },
  ],

  categories: {
    all: "ყველა",
    residential: "საცხოვრებელი",
    commercial: "კომერციული",
    industrial: "სამრეწველო",
  },

  projects: [
    {
      name: "სანაპირო რეზიდენცია",
      category: "residential",
      note: "თანამედროვე ვილის კონცეპტი გამძლე მასალებით და სუფთა გეომეტრიით.",
    },
    {
      name: "ქალაქის რითეილი",
      category: "commercial",
      note: "ბრენდისთვის მორგებული განლაგება და მომხმარებლის ნაკადები.",
    },
    {
      name: "ლოგისტიკური ჰაბი",
      category: "industrial",
      note:
        "კონსტრუქციული და ინფრასტრუქტურული გადაწყვეტები ხანგრძლივი გამოყენებისთვის.",
    },
  ],

  testimonials: [
    {
      name: "კერძო კლიენტი",
      role: "საცხოვრებელი პროექტი",
      text:
        "კარგი კომუნიკაცია, წესრიგიანი ობიექტი და მაღალი ხარისხის დასრულება.",
    },
    {
      name: "მაღაზიის მფლობელი",
      role: "ფიტ-აუთი",
      text:
        "სწრაფი შესრულება და სუფთა პროცესი ბიზნესის მინიმალური შეჩერებით.",
    },
    {
      name: "ოპერაციების მენეჯერი",
      role: "სამრეწველო პროექტი",
      text:
        "სანდო ვადები და უსაფრთხოებაზე ორიენტირებული მიდგომა.",
    },
  ],

  about: {
    p1:
      "N-building ორიენტირებულია სანდო შესრულებაზე, თანამედროვე სტანდარტებზე და გამჭვირვალე კომუნიკაციაზე.",
    p2:
      "აქ დაამატე კომპანიის რეალური ისტორია, გამოცდილება და ძირითადი მიმართულებები.",
    bullets: [
      "მკაფიო მოცულობა და ეტაპები",
      "ხარისხის კონტროლის წერტილები",
      "უსაფრთხოებისა და წესების კულტურა",
      "გრძელვადიანი გამძლეობა",
      "თანამედროვე არქიტექტურასთან თავსებადობა",
    ],
  },

  process: [
    { title: "კონსულტაცია", text: "მიზნები, ბიუჯეტი, რეალიზაცია, ვადები." },
    { title: "დიზაინი და დაგეგმვა", text: "კონცეპტი, შეფასება, მასალები, ნებართვები." },
    { title: "მშენებლობა", text: "ობიექტის შესრულება QA და რეპორტინგით." },
    { title: "ჩაბარება", text: "საბოლოო შემოწმება, დოკუმენტაცია, გარანტია." },
  ],

  contact: {
    phone: "+995 5XX XX XX XX",
    email: "info@n-building.com",
    address: "ბათუმი / თბილისი (დაამატე ზუსტი მისამართი)",
    placeholders: {
      name: "სახელი",
      contact: "ტელეფონი ან ელ-ფოსტა",
      desc: "მოგვიყევი პროექტის შესახებ",
    },
    projectTypes: ["საცხოვრებელი", "კომერციული", "სამრეწველო", "რემონტი"],
    demoNote: "დემო ფორმა — ბექენდი ჯერ არ არის დაკავშირებული.",
    mapNote: "რუკის ადგილი",
  },

  footer: {
    contactLabel: "კონტაქტი",
    rights: "ყველა უფლება დაცულია.",
  },

  quoteModal: {
    eyebrow: "შეთავაზების მოთხოვნა",
    title: "მოგვიყევი პროექტის შესახებ",
    subtitle: "დემო — შემდეგ მარტივად დაუკავშირებ ბექენდს.",
    placeholders: {
      name: "სახელი",
      contact: "ტელეფონი ან ელ-ფოსტა",
      desc: "მოკლე აღწერა, ზომა, ლოკაცია, ვადები...",
    },
    projectTypeLabel: "პროექტის ტიპი",
    budgetLabel: "ბიუჯეტის დონე",
    budgets: ["მოქნილი", "საშუალო", "პრემიუმ"],
    submit: "გაგზავნა",
    demoNote: "დემო UI — მონაცემები არ იგზავნება.",
  },
};

// ---------------- RU ----------------
const RU: Content = {
  brand: {
    name: "N-building",
    subtitle: "СТРОИТЕЛЬСТВО",
    tagline: "Современное строительство. Надёжный результат.",
    locationShort: "Грузия • Жилые и коммерческие объекты",
  },

  nav: [
    { id: "services", label: "Услуги" },
    { id: "projects", label: "Проекты" },
    { id: "testimonials", label: "Клиенты" },
    { id: "about", label: "О нас" },
    { id: "process", label: "Процесс" },
    { id: "contact", label: "Контакты" },
  ],

  hero: {
    headline: "Строй умнее с",
    description:
      "От чертежа до сдачи — создаём прочные и современные пространства с понятными сроками, прозрачным бюджетом и приоритетом безопасности.",
    primaryCta: "Запросить расчёт",
    secondaryCta: "Наши услуги",
    safetyTitle: "Безопасность и качество",
    safetyText: "Управление объектом по стандартам",
    hint3d: "3D просмотр (перетащи)",
  },

  stats: [
    { label: "Лет опыта", value: "10+" },
    { label: "Сдано проектов", value: "120+" },
    { label: "Фокус на качестве", value: "Высокий" },
  ],

  sections: {
    services: {
      eyebrow: "Что мы делаем",
      title: "Строительные услуги с акцентом на качество",
      subtitle:
        "Гибкая линейка услуг для частных домов, коммерческих и промышленных объектов.",
    },
    projects: {
      eyebrow: "Портфолио",
      title: "Избранные работы и концепты",
      subtitle:
        "Структурированная галерея с фильтрами для премиального восприятия.",
    },
    testimonials: {
      eyebrow: "Клиенты",
      title: "Нам доверяют те, кто ценит качество",
      subtitle:
        "Короткие отзывы, которые повышают доверие к бренду.",
    },
    about: {
      eyebrow: "Кто мы",
      title: "Практичная команда, ориентированная на результат",
      subtitle:
        "Добавьте реальную историю компании, сертификаты и фото команды.",
    },
    process: {
      eyebrow: "Как мы работаем",
      title: "Простой и надёжный цикл реализации",
      subtitle:
        "Понятные шаги по срокам, бюджету и контролю качества.",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Давайте обсудим ваш проект",
      subtitle: "Фронтенд + WhatsApp/EmailJS — бэкенд при необходимости.",
    },
  },

  services: [
    {
      title: "Жилые проекты",
      text:
        "Виллы, квартиры, ремонты, премиальные отделки, энергоэффективные улучшения.",
      bullets: ["Под ключ", "Контроль расходов", "Современный стиль"],
    },
    {
      title: "Коммерция и ритейл",
      text:
        "Магазины, офисы, гостиницы. Синхронизируем дизайн, разрешения и стройку.",
      bullets: ["Ускоренные сроки", "Под бренд", "Минимум простоя"],
    },
    {
      title: "Промышленные объекты",
      text:
        "Склады, конструкции, инфраструктура с сильным контролем безопасности.",
      bullets: ["Инженерный подход", "Соответствие нормам", "Долгий срок службы"],
    },
  ],

  categories: {
    all: "Все",
    residential: "Жилые",
    commercial: "Коммерческие",
    industrial: "Промышленные",
  },

  projects: [
    {
      name: "Прибрежная резиденция",
      category: "residential",
      note:
        "Концепт современной виллы с прочными материалами и чистой геометрией.",
    },
    {
      name: "Городской ритейл",
      category: "commercial",
      note: "Интерьеры, ориентированные на поток клиентов и бренд.",
    },
    {
      name: "Логистический хаб",
      category: "industrial",
      note: "Конструкции и инфраструктура для стабильной эксплуатации.",
    },
  ],

  testimonials: [
    {
      name: "Частный клиент",
      role: "Жилой объект",
      text:
        "Понятная коммуникация, дисциплина на объекте и отличная отделка.",
    },
    {
      name: "Владелец магазина",
      role: "Фит-аут",
      text:
        "Быстро и аккуратно, без лишних остановок бизнеса.",
    },
    {
      name: "Операционный менеджер",
      role: "Промышленный проект",
      text:
        "Надёжные сроки и принципиальный подход к безопасности.",
    },
  ],

  about: {
    p1:
      "N-building делает ставку на надёжное выполнение, современные стандарты и прозрачность.",
    p2:
      "Добавьте здесь реальную историю компании и специализацию вашего отца.",
    bullets: [
      "Чёткий объём и этапы",
      "Контроль качества",
      "Культура безопасности",
      "Долговечность",
      "Современная архитектурная эстетика",
    ],
  },

  process: [
    { title: "Консультация", text: "Цели, бюджет, оценка, сроки." },
    { title: "Проектирование", text: "Концепт, сметы, материалы, разрешения." },
    { title: "Строительство", text: "Исполнение с QA и отчётностью." },
    { title: "Сдача", text: "Финальные проверки, документы, гарантия." },
  ],

  contact: {
    phone: "+995 5XX XX XX XX",
    email: "info@n-building.com",
    address: "Батуми / Тбилиси (добавьте точный адрес)",
    placeholders: {
      name: "Ваше имя",
      contact: "Телефон или email",
      desc: "Расскажите о проекте",
    },
    projectTypes: ["Жилой", "Коммерческий", "Промышленный", "Ремонт"],
    demoNote: "Демо — бэкенд пока не подключён.",
    mapNote: "Место для карты",
  },

  footer: {
    contactLabel: "Контакты",
    rights: "Все права защищены.",
  },

  quoteModal: {
    eyebrow: "Запросить расчёт",
    title: "Расскажите о проекте",
    subtitle: "Демо — позже легко подключить бэкенд.",
    placeholders: {
      name: "Ваше имя",
      contact: "Телефон или email",
      desc: "Кратко: площадь, локация, сроки...",
    },
    projectTypeLabel: "Тип проекта",
    budgetLabel: "Бюджет",
    budgets: ["Гибкий", "Средний", "Премиум"],
    submit: "Отправить",
    demoNote: "Демо UI — данные не отправляются.",
  },
};

export const CONTENT: Record<Lang, Content> = {
  en: EN,
  ka: KA,
  ru: RU,
};
