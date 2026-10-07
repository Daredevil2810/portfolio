/* Single source of truth for all projects.
   To add a project: copy one object, change the fields, save. Both the home page and the detail page update.
   Optional: add screenshots with  images: ["images/projects/my-shot.webp"]  */
window.PROJECTS = [
  {
    slug: "invoicepro",
    title: "InvoicePro",
    type: "web",
    status: "Live",
    tagline: "Multi-tenant GST invoice generator where many companies share one system.",
    overview: "InvoicePro is a SaaS-style web application for creating GST-compliant invoices. Several companies can use the same deployment, each with its own customers, products and invoices. It was built and deployed entirely on free-tier hosting and database services.",
    features: [
      "Invoice generation with automatic CGST, SGST and IGST tax logic",
      "Customer and product management for each company",
      "Dashboard with an overview of business activity",
      "Multi-tenant design: multiple companies on a single system",
      "Demo user access so visitors can try it without signing up"
    ],
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap", "Render"],
    learned: "Backend development, database design, SaaS architecture, deployment, and modelling a real business workflow (GST rules) in code.",
    links: [{ label: "Open live app", url: "https://invoicegeneratorpro-web.onrender.com", primary: true }]
  },
  {
    slug: "pixshrink",
    title: "PixShrink",
    type: "android",
    status: "Google Play",
    tagline: "Android app that compresses images and PDFs offline, then shares them.",
    overview: "PixShrink reduces the size of images and PDF files directly on the device, with no upload to any server. I handled the full release myself: development, store listing, privacy policy and the Google Play data-safety declaration.",
    features: [
      "Image and PDF compression that works offline",
      "Built-in file sharing after compression",
      "No ads",
      "No data collected or shared (declared in the Play data-safety form)"
    ],
    stack: ["Kotlin", "Android Studio", "Google Play Console"],
    learned: "Taking an app from code to a public store release, including policy requirements and the review process.",
    links: [{ label: "View on Google Play", url: "https://play.google.com/store/apps/details?id=com.devanshu.pixshrink", primary: true }]
  },
  {
    slug: "pythondsa-notes",
    title: "PythonDSA Notes",
    type: "web",
    status: "Live",
    tagline: "Free, no-login study site for Python and data structures & algorithms.",
    overview: "A learning website for anyone preparing for Python and DSA interviews. It has no login, no ads and no tracking. Every lesson follows the same 12-step format so learners always know where to look.",
    features: [
      "17 Python lessons",
      "91 interview programs with dry runs",
      "A 6-level DSA roadmap",
      "120 interview questions and 30 coding problems",
      "Lesson format covers concept, real-life example, dry run, time/space complexity and common mistakes",
      "Progress saved in the browser, so no account is needed"
    ],
    stack: ["HTML", "CSS", "JavaScript", "GitHub", "Render"],
    learned: "Structuring a large body of content, designing a consistent lesson format, and deploying automatically from GitHub.",
    links: [{ label: "Open live site", url: "https://pythondsanotes.onrender.com/", primary: true }]
  },
  {
    slug: "newshub-web",
    title: "NewsHub (Web)",
    type: "web",
    status: "Live",
    tagline: "Django news aggregator with live headlines, search and categories.",
    overview: "NewsHub fetches live articles from the NewsAPI and presents them in a clean, searchable interface. Built to practise REST API integration and cloud deployment.",
    features: [
      "Live news from the NewsAPI",
      "Category filtering and search",
      "User authentication",
      "PostgreSQL database, deployed on Render"
    ],
    stack: ["Python", "Django", "NewsAPI", "PostgreSQL", "Render"],
    learned: "Consuming third-party REST APIs, handling user accounts, and deploying a Django app with a cloud database.",
    links: [{ label: "Open live site", url: "https://newshub-website.onrender.com/", primary: true }]
  },
  {
    slug: "yournotes",
    title: "YourNotes",
    type: "android",
    status: "Open source",
    tagline: "Kotlin notes app with reminders, themes, pinning and text-to-speech.",
    overview: "A full-featured notes application for Android. Notes can be created, edited, deleted and pinned, with reminders to bring them back at the right time.",
    features: [
      "Add, edit, delete and view notes",
      "Reminders",
      "Multiple themes",
      "Pin important notes",
      "Text-to-speech to read notes aloud"
    ],
    stack: ["Kotlin", "Android SDK", "Android Studio"],
    learned: "Android app structure, local data storage, notifications and theming.",
    links: [{ label: "View source on GitHub", url: "https://github.com/Daredevil2810/YourNotes-APK", primary: true }]
  },
  {
    slug: "newshub-android",
    title: "NewsHub (Android)",
    type: "android",
    status: "Open source",
    tagline: "Android news reader that loads real-time headlines with Retrofit.",
    overview: "The Android counterpart to the NewsHub web app. It fetches real-time news over the network and shows it in a smooth, scrollable list.",
    features: [
      "Real-time news fetched with Retrofit",
      "Articles displayed in a RecyclerView list"
    ],
    stack: ["Kotlin", "Retrofit", "RecyclerView", "Android Studio"],
    learned: "Networking on Android, parsing API responses, and building list-based interfaces.",
    links: [{ label: "View source on GitHub", url: "https://github.com/Daredevil2810/NewsHub", primary: true }]
  },
  {
    slug: "watch-world",
    title: "Watch World",
    type: "web",
    status: "Open source",
    tagline: "E-commerce website with admin product management and a shopping cart.",
    overview: "My BCA final-year project: a simple online watch store built with Python and Django. Admins manage the catalogue, and customers browse products and use a cart.",
    features: [
      "Admin side: add and delete products and upload product images",
      "Customer side: add and remove products from the cart"
    ],
    stack: ["Python", "Django", "HTML", "CSS"],
    learned: "Django models, admin workflows and the basics of an e-commerce flow.",
    links: [{ label: "View source on GitHub", url: "https://github.com/Daredevil2810/WatchShop---Ecommerce-website-", primary: true }]
  }
];
