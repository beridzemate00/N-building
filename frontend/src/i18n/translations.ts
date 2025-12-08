import { BRAND } from "../config/brand";

export type Lang = "en" | "ka" | "ru";

export const LANG_LABEL: Record<Lang, string> = {
  en: "EN",
  ka: "KA",
  ru: "RU"
};

export const tdict: Record<Lang, any> = {
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    },
    buttons: {
      quote: "Get a quote",
      viewServices: "View services",
      requestQuote: "Request a quote",
      send: "Send request",
      sending: "Sending...",
      admin: "Admin"
    },
    hero: {
      pill: BRAND.subtitle,
      title: "Clean finishing, safe repairs, and fast interior upgrades",
      text:
        "N-building provides painting, plastering, wall modifications, door repairs, electrical, and plumbing — with attention to detail and a tidy job site.",
      cards: [
        ["Reliable timing", "Clear schedules"],
        ["Clean work", "Careful finishing"],
        ["One team", "Multi-service"]
      ],
      mini: {
        label: "Light 3D preview",
        title: "Interior transformations & essential repairs"
      }
    },
    services: {
      label: "Services",
      title: "Renovation & home services in one trusted team",
      text:
        "From fresh paint to layout improvements and essential repairs — we focus on safety, clean work, and consistent quality.",
      items: [
        {
          title: "Painting",
          desc: "Interior & exterior painting with clean prep, smooth finish, and durable materials.",
          bullets: ["Walls & ceilings", "Trim & doors", "Color matching"]
        },
        {
          title: "Plastering & Surface Repair",
          desc: "Leveling, smoothing, and restoring surfaces before final finishing.",
          bullets: ["Plaster & skim coat", "Crack repair", "Wall straightening"]
        },
        {
          title: "Wall Removal & Layout Changes",
          desc: "Safe interior reconfiguration to open space or improve room flow.",
          bullets: ["Partitions & openings", "Doorway adjustments", "Tidy cleanup"]
        },
        {
          title: "Door Repairs",
          desc: "Fixing, adjusting, and upgrading doors and hardware for smooth everyday use.",
          bullets: ["Hinges & locks", "Alignment fixes", "Handles & seals"]
        },
        {
          title: "Electrical",
          desc: "Reliable electrical repairs and upgrades for homes and small offices.",
          bullets: ["Sockets & switches", "Lighting install", "Fault diagnosis"]
        },
        {
          title: "Plumbing",
          desc: "Efficient plumbing repair and replacements with clean finishing.",
          bullets: ["Leak repairs", "Faucets & toilets", "Pipe replacement"]
        }
      ]
    },
    projects: {
      label: "Projects",
      title: "Recent renovation work",
      text: "Filter by service type and replace these demo items with real case studies.",
      filterAll: "All"
    },
    about: {
      label: "About",
      title: "A practical team for everyday renovation needs",
      p1:
        "N-building focuses on high-quality interior improvements and essential home services. Whether you need a fresh paint job, smooth plaster work, safer electrical fixes, or clean plumbing repair — we deliver with care.",
      p2:
        "Our approach is simple: clear communication, realistic timelines, tidy workspaces, and results that last.",
      cards: [
        ["Transparent quotes", "No surprise steps"],
        ["Clean finishing", "Attention to detail"],
        ["Safe workflow", "Responsible execution"],
        ["Flexible scope", "Small fixes to full refresh"]
      ]
    },
    contact: {
      label: "Contact",
      title: "Request a quote",
      text:
        "Tell us what you need — painting, plastering, wall changes, door repairs, electrical, or plumbing. We'll respond with a clear plan and estimate.",
      typicalTitle: "Typical response",
      typicalText: "Within 24–48 hours (business days)",
      scopeLabel: "Scope",
      scopeValue: "Small to medium jobs",
      areaLabel: "Area",
      areaValue: "See service cities",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone (optional)",
        message: "What do you need?",
        namePh: "Your name",
        emailPh: "you@email.com",
        phonePh: "+995...",
        msgPh: "Example: repaint living room + fix door + check leaking sink..."
      },
      ok: "Your request was sent. We'll contact you soon.",
      errFallback: "Invalid form or server unavailable.",
      demoNote: "This demo stores messages in-memory. Connect a database and email service for production."
    },
    admin: {
      title: "Admin inbox",
      subtitle: "View contact requests (demo token required).",
      tokenLabel: "Admin token",
      tokenPh: "Enter token",
      load: "Load messages",
      loading: "Loading...",
      empty: "No messages yet."
    },
    footer: {
      text:
        "Painting, plastering, wall changes, door repairs, electrical, and plumbing — clean finishing and reliable timelines."
    }
  },

  ka: {
    nav: {
      services: "სერვისები",
      projects: "პროექტები",
      about: "ჩვენ შესახებ",
      contact: "კონტაქტი"
    },
    buttons: {
      quote: "ფასის მოთხოვნა",
      viewServices: "სერვისების ნახვა",
      requestQuote: "შეთავაზების მიღება",
      send: "გაგზავნა",
      sending: "იგზავნება...",
      admin: "ადმინი"
    },
    hero: {
      pill: BRAND.subtitle,
      title: "სუფთა დასრულება, უსაფრთხო შეკეთება და სწრაფი ინტერიერის განახლება",
      text:
        "N-building გთავაზობთ შეღებვას, შპაკლსა და ზედაპირის აღდგენას, კედლის ცვლილებებს, კარების შეკეთებას, ელექტრო და სანტექნიკურ მომსახურებას — სიზუსტითა და სისუფთავით.",
      cards: [
        ["დროული შესრულება", "ნათელი გრაფიკი"],
        ["სუფთა სამუშაო", "დეტალებზე ყურადღება"],
        ["ერთი გუნდი", "მრავალსერვისიანი"]
      ],
      mini: {
        label: "მარტივი 3D პრევიუ",
        title: "ინტერიერის გარდაქმნა და აუცილებელი შეკეთებები"
      }
    },
    services: {
      label: "სერვისები",
      title: "რემონტსა და საშინაო სერვისებში სანდო გუნდი",
      text:
        "განახლებიდან აუცილებელ შეკეთებამდე — ვმოძრაობთ უსაფრთხოებით, სისუფთავით და ხარისხით.",
      items: [
        {
          title: "შეღებვა",
          desc: "შიდა და გარე შეღებვა კარგი მომზადებითა და გამძლე ფერებით.",
          bullets: ["კედლები და ჭერი", "კარები და დეტალები", "ფერის შერჩევა"]
        },
        {
          title: "შპაკლი და ზედაპირის აღდგენა",
          desc: "გასწორება, გლუვი ზედაპირი და ბზარების გამაგრება დასრულებამდე.",
          bullets: ["შპაკლი/სკიმ-ქოუტი", "ბზარების შეკეთება", "კედლის გასწორება"]
        },
        {
          title: "კედლის დემონტაჟი და დაგეგმარება",
          desc: "უსაფრთხო გადაგეგმარება სივრცის გასახსნელად ან ფუნქციის გასაუმჯობესებლად.",
          bullets: ["გადატიხვრის ცვლილება", "კარების ღიობები", "სისუფთავე ადგილზე"]
        },
        {
          title: "კარების შეკეთება",
          desc: "კარის მექანიზმების, საკეტების და რეგულირების გასწორება.",
          bullets: ["სახსრები და საკეტები", "გასწორება", "სახელურები და რეზინები"]
        },
        {
          title: "ელექტრო სამუშაოები",
          desc: "უსაფრთხო და თანამედროვე ელექტრო შეკეთება და განახლება.",
          bullets: ["როზეტები და ჩამრთველები", "განათების მონტაჟი", "ხარვეზების დიაგნოსტიკა"]
        },
        {
          title: "სანტექნიკა",
          desc: "სანდო სანტექნიკური შეკეთება და ჩანაცვლება სუფთა დასრულებით.",
          bullets: ["გაჟონვის შეკეთება", "სანიტარული მოწყობილობები", "მილების შეცვლა"]
        }
      ]
    },
    projects: {
      label: "პროექტები",
      title: "ბოლო სამუშაოები",
      text: "გაფილტრეთ სერვისის მიხედვით და ჩაანაცვლეთ ეს დემო რეალური ქეისებით.",
      filterAll: "ყველა"
    },
    about: {
      label: "ჩვენ შესახებ",
      title: "პრაქტიკული გუნდი ყოველდღიური რემონტისთვის",
      p1:
        "N-building ორიენტირებულია ხარისხიან ინტერიერის გაუმჯობესებასა და აუცილებელ საშინაო სერვისებზე. იქნება ეს შეღებვა, შპაკლი, ელექტრო თუ სანტექნიკა — საქმეს ვასრულებთ ზუსტად.",
      p2:
        "ჩვენი მიდგომა მარტივია: ნათელი კომუნიკაცია, რეალისტური ვადები, სუფთა სამუშაო ადგილი და გამძლე შედეგი.",
      cards: [
        ["გამჭვირვალე ფასები", "სიურპრიზის გარეშე"],
        ["სუფთა დასრულება", "დეტალები მნიშვნელოვანია"],
        ["უსაფრთხო პროცესი", "პასუხისმგებელი მიდგომა"],
        ["მოქნილი მასშტაბი", "პატარა თუ დიდი სამუშაო"]
      ]
    },
    contact: {
      label: "კონტაქტი",
      title: "ფასის მოთხოვნა",
      text:
        "მოგვწერეთ რა გჭირდებათ — შეღებვა, შპაკლი, კედლის ცვლილება, კარის შეკეთება, ელექტრო ან სანტექნიკა. გიპასუხებთ გეგმითა და შეფასებით.",
      typicalTitle: "პასუხის დრო",
      typicalText: "24–48 საათში (სამუშაო დღეებში)",
      scopeLabel: "მასშტაბი",
      scopeValue: "პატარა და საშუალო სამუშაოები",
      areaLabel: "ზონა",
      areaValue: "მომსახურების ქალაქები",
      form: {
        name: "სახელი და გვარი",
        email: "ელფოსტა",
        phone: "ტელეფონი (სურვილით)",
        message: "რას საჭიროებთ?",
        namePh: "თქვენი სახელი",
        emailPh: "you@email.com",
        phonePh: "+995...",
        msgPh: "მაგ.: მისაღების შეღებვა + კარის შეკეთება + ნიჟარის გაჟონვა..."
      },
      ok: "თქვენი მოთხოვნა გაიგზავნა. მალე დაგიკავშირდებით.",
      errFallback: "ფორმა არასწორია ან სერვერი მიუწვდომელია.",
      demoNote: "დემო ვერსია ინახავს შეტყობინებებს მხოლოდ სერვერის მუშაობის დროს."
    },
    admin: {
      title: "ადმინის ინბოქსი",
      subtitle: "კონტაქტის შეტყობინებები (დემო ტოკენი საჭიროა).",
      tokenLabel: "ადმინის ტოკენი",
      tokenPh: "შეიყვანეთ ტოკენი",
      load: "შეტყობინებების ჩატვირთვა",
      loading: "იტვირთება...",
      empty: "შეტყობინებები ჯერ არ არის."
    },
    footer: {
      text:
        "შეღებვა, შპაკლი, კედლის ცვლილება, კარის შეკეთება, ელექტრო და სანტექნიკა — სუფთა დასრულება და სანდო ვადები."
    }
  },

  ru: {
    nav: {
      services: "Услуги",
      projects: "Проекты",
      about: "О нас",
      contact: "Контакты"
    },
    buttons: {
      quote: "Запросить цену",
      viewServices: "Смотреть услуги",
      requestQuote: "Получить смету",
      send: "Отправить",
      sending: "Отправка...",
      admin: "Админ"
    },
    hero: {
      pill: BRAND.subtitle,
      title: "Чистая отделка, безопасные ремонты и быстрые обновления интерьера",
      text:
        "N-building выполняет покраску, штукатурку и восстановление поверхностей, изменения стен, ремонт дверей, электрику и сантехнику — аккуратно и надежно.",
      cards: [
        ["Сроки", "Понятный план"],
        ["Чистая работа", "Качественная отделка"],
        ["Одна команда", "Мультисервис"]
      ],
      mini: {
        label: "Лёгкий 3D-превью",
        title: "Преображение интерьера и важные ремонты"
      }
    },
    services: {
      label: "Услуги",
      title: "Ремонт и домашние услуги одной надежной командой",
      text:
        "От свежей покраски до обязательных ремонтов — безопасность, чистота и стабильное качество.",
      items: [
        {
          title: "Покраска",
          desc: "Внутренняя и внешняя покраска с хорошей подготовкой и долговечными материалами.",
          bullets: ["Стены и потолки", "Плинтуса и двери", "Подбор цвета"]
        },
        {
          title: "Штукатурка и ремонт поверхностей",
          desc: "Выравнивание, сглаживание и восстановление стен перед финишем.",
          bullets: ["Штукатурка/шпаклёвка", "Ремонт трещин", "Выравнивание стен"]
        },
        {
          title: "Демонтаж стен и перепланировка",
          desc: "Безопасные изменения планировки для более удобного пространства.",
          bullets: ["Перегородки и проёмы", "Коррекция дверных проёмов", "Чистая уборка"]
        },
        {
          title: "Ремонт дверей",
          desc: "Настройка, ремонт и обновление дверей и фурнитуры.",
          bullets: ["Петли и замки", "Исправление геометрии", "Ручки и уплотнители"]
        },
        {
          title: "Электрика",
          desc: "Надёжный ремонт и обновление электрики для дома и офиса.",
          bullets: ["Розетки и выключатели", "Монтаж света", "Диагностика"]
        },
        {
          title: "Сантехника",
          desc: "Оперативные сантехнические ремонты и замены с аккуратной отделкой.",
          bullets: ["Устранение протечек", "Смесители и санузлы", "Замена труб"]
        }
      ]
    },
    projects: {
      label: "Проекты",
      title: "Последние работы",
      text: "Фильтруйте по типу услуг и замените демо на реальные кейсы.",
      filterAll: "Все"
    },
    about: {
      label: "О нас",
      title: "Практичная команда для ежедневных задач ремонта",
      p1:
        "N-building специализируется на качественных обновлениях интерьера и важных домашних услугах. Покраска, штукатурка, электрика или сантехника — выполняем аккуратно.",
      p2:
        "Наш подход простой: прозрачная коммуникация, реалистичные сроки, чистое рабочее место и долговечный результат.",
      cards: [
        ["Прозрачные сметы", "Без сюрпризов"],
        ["Чистая отделка", "Внимание к деталям"],
        ["Безопасный процесс", "Ответственный подход"],
        ["Гибкий формат", "От мелких до больших работ"]
      ]
    },
    contact: {
      label: "Контакты",
      title: "Запросить смету",
      text:
        "Опишите задачу — покраска, штукатурка, изменения стен, ремонт дверей, электрика или сантехника. Ответим планом и оценкой.",
      typicalTitle: "Обычно отвечаем",
      typicalText: "В течение 24–48 часов (рабочие дни)",
      scopeLabel: "Объём",
      scopeValue: "Малые и средние проекты",
      areaLabel: "Зона",
      areaValue: "Города обслуживания",
      form: {
        name: "Имя и фамилия",
        email: "Email",
        phone: "Телефон (необязательно)",
        message: "Что нужно сделать?",
        namePh: "Ваше имя",
        emailPh: "you@email.com",
        phonePh: "+995...",
        msgPh: "Напр.: покрасить комнату + починить дверь + устранить протечку..."
      },
      ok: "Запрос отправлен. Мы свяжемся с вами скоро.",
      errFallback: "Форма неверная или сервер недоступен.",
      demoNote: "Демо-версия хранит сообщения только пока работает сервер."
    },
    admin: {
      title: "Админ-почта",
      subtitle: "Заявки с формы (нужен демо-токен).",
      tokenLabel: "Админ токен",
      tokenPh: "Введите токен",
      load: "Загрузить заявки",
      loading: "Загрузка...",
      empty: "Пока нет заявок."
    },
    footer: {
      text:
        "Покраска, штукатурка, изменения стен, ремонт дверей, электрика и сантехника — чистая отделка и надежные сроки."
    }
  }
};
