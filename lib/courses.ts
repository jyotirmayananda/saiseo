export type CourseCategory = "diploma" | "programming" | "professional";

export interface Course {
  id: string;
  name: string;
  fullName: string;
  category: CourseCategory;
  duration: string;
  level: string;
  description: string;
  highlights: string[];
  syllabus: string[];
  career: string[];
}

export const diplomaCourses: Course[] = [
  {
    id: "pgdca",
    name: "PGDCA",
    fullName: "Post Graduate Diploma in Computer Applications",
    category: "diploma",
    duration: "1 Year",
    level: "Post Graduate",
    description:
      "PGDCA is our flagship diploma for graduates who want a strong foundation in computer applications, software development, and office automation. The program covers programming, databases, web technologies, and practical project work — ideal for government jobs, private sector IT roles, and further studies.",
    highlights: [
      "Structured curriculum aligned with industry needs",
      "Hands-on lab sessions with experienced faculty",
      "Project-based learning and viva preparation",
      "Certificate on successful completion",
    ],
    syllabus: [
      "Fundamentals of Computers & Operating Systems",
      "MS Office (Word, Excel, PowerPoint, Access)",
      "Programming in C & C++",
      "Data Structures & Database Management (DBMS/SQL)",
      "Web Design (HTML, CSS, JavaScript basics)",
      "Accounting with Tally / Financial Applications",
      "Internet, Email & Cyber Security basics",
      "Mini Project & Practical Examination",
    ],
    career: [
      "Computer Operator / Data Entry Operator",
      "Office Assistant with IT skills",
      "Junior Programmer / Web Assistant",
      "Banking & SSC computer-based exams",
      "Further study in MCA or specialized IT courses",
    ],
  },
  {
    id: "dca",
    name: "DCA",
    fullName: "Diploma in Computer Applications",
    category: "diploma",
    duration: "6 Months – 1 Year",
    level: "Intermediate",
    description:
      "DCA is designed for students after 10th or 12th who want practical computer skills for jobs and daily professional work. You learn office software, basic programming, internet applications, and accounting tools in a step-by-step, beginner-friendly format.",
    highlights: [
      "No prior programming experience required",
      "Focus on job-ready office & computer skills",
      "Affordable fees with flexible batch timings",
      "Suitable for students and working professionals",
    ],
    syllabus: [
      "Computer Fundamentals & Windows OS",
      "MS Word, Excel, PowerPoint",
      "Internet, Email & Online Services",
      "Introduction to Programming (C / Python basics)",
      "Database & SQL fundamentals",
      "Tally ERP / Accounting basics",
      "Typing speed & office documentation",
      "Practical tests & final project",
    ],
    career: [
      "Receptionist / Front Office with computer skills",
      "Account Assistant (with Tally knowledge)",
      "Shop billing & inventory management",
      "Freelance data entry & document work",
      "Foundation for advanced programming courses",
    ],
  },
  {
    id: "cca",
    name: "CCA",
    fullName: "Certificate in Computer Applications",
    category: "diploma",
    duration: "3 – 6 Months",
    level: "Beginner",
    description:
      "CCA is a short certificate program for anyone new to computers — school students, homemakers, shop owners, or job seekers. Learn typing, MS Office, internet usage, and basic software skills to become confident with computers in weeks, not years.",
    highlights: [
      "Fast-track beginner-friendly course",
      "Small batch sizes for personal attention",
      "Certificate useful for job applications",
      "Morning & evening batches available",
    ],
    syllabus: [
      "Introduction to Computer Hardware & Software",
      "Windows basics, files & folders",
      "MS Word — letters, resumes, reports",
      "MS Excel — tables, formulas, charts",
      "MS PowerPoint — presentations",
      "Internet browsing, email & UPI/digital payments",
      "Photo editing & basic printing",
      "Practical assessment",
    ],
    career: [
      "Basic computer operator roles",
      "Small business billing & record keeping",
      "School/college project preparation",
      "Stepping stone to DCA or programming courses",
    ],
  },
];

export const programmingCourses: Course[] = [
  {
    id: "python",
    name: "Python",
    fullName: "Python Programming",
    category: "programming",
    duration: "2 – 3 Months",
    level: "Beginner to Intermediate",
    description:
      "Python is one of the most popular programming languages worldwide — known for simple syntax and wide applications. At Sai SEO Solution, you learn Python from scratch: variables, loops, functions, file handling, and real mini-projects. Python is used in web development, data analysis, automation, AI/ML, and scripting.",
    highlights: [
      "Easy to learn — best first language for beginners",
      "Build calculators, games & automation scripts",
      "Intro to libraries (NumPy, Pandas overview)",
      "Strong demand in IT jobs & freelancing",
    ],
    syllabus: [
      "Python setup, IDE & first program",
      "Variables, data types & operators",
      "Conditional statements & loops",
      "Functions, modules & packages",
      "Lists, tuples, dictionaries & sets",
      "File handling & exception handling",
      "Object-Oriented Programming (OOP) basics",
      "Mini projects: student record, quiz app, file manager",
    ],
    career: [
      "Python Developer (Junior)",
      "Data Analyst / Data Science entry roles",
      "Automation & scripting for businesses",
      "Django/Flask web development (advanced track)",
      "Freelance Python projects",
    ],
  },
  {
    id: "java",
    name: "Java",
    fullName: "Java Programming",
    category: "programming",
    duration: "3 – 4 Months",
    level: "Intermediate",
    description:
      "Java is a powerful object-oriented language used in enterprise software, Android apps, banking systems, and large-scale applications. Our Java course covers core Java (JSE) with OOP concepts, collections, exception handling, and GUI basics — preparing you for OCP-style fundamentals and Android development.",
    highlights: [
      "Industry-standard OOP language",
      "Platform independent (Write Once, Run Anywhere)",
      "Foundation for Android app development",
      "Widely used in MNCs and government IT projects",
    ],
    syllabus: [
      "Java fundamentals & JVM architecture",
      "Classes, objects & inheritance",
      "Interfaces, packages & access modifiers",
      "Arrays, strings & collections framework",
      "Exception handling & multithreading intro",
      "File I/O & serialization basics",
      "Swing / AWT GUI applications",
      "Mini project: Library Management / Billing System",
    ],
    career: [
      "Java Developer (Backend)",
      "Android App Developer (with further training)",
      "Software Engineer in IT companies",
      "Spring Boot / enterprise track (advanced)",
    ],
  },
  {
    id: "c",
    name: "C",
    fullName: "C Programming",
    category: "programming",
    duration: "2 Months",
    level: "Beginner",
    description:
      "C is the mother of modern programming languages. Learning C builds strong logic, memory understanding, and problem-solving skills. Essential for engineering students, competitive programming, and as a base before C++, Java, or embedded systems. Our course focuses on hands-on coding from day one.",
    highlights: [
      "Builds strong programming logic",
      "Required for B.Tech / diploma engineering students",
      "Foundation for C++, Java & system programming",
      "Excellent for university exam preparation",
    ],
    syllabus: [
      "History of C & program structure",
      "Data types, operators & input/output",
      "Control flow: if-else, switch, loops",
      "Functions & recursion",
      "Arrays & strings",
      "Pointers & memory management",
      "Structures & file handling",
      "Pattern programs & exam-style problems",
    ],
    career: [
      "Embedded systems & firmware (with advanced study)",
      "System programming foundation",
      "Competitive coding & GATE CSE preparation",
      "Stepping stone to C++ and Java",
    ],
  },
  {
    id: "cpp",
    name: "C++",
    fullName: "C++ Programming",
    category: "programming",
    duration: "2 – 3 Months",
    level: "Intermediate",
    description:
      "C++ extends C with Object-Oriented Programming and is used in game development, high-performance software, competitive programming, and system tools. Learn classes, inheritance, polymorphism, STL (Standard Template Library), and build practical applications.",
    highlights: [
      "Fast, efficient language for system-level code",
      "Widely used in game engines (Unreal) & competitive programming",
      "STL containers: vector, map, set, algorithm",
      "Ideal after completing C programming",
    ],
    syllabus: [
      "C++ basics & differences from C",
      "Classes, objects & constructors",
      "Inheritance, polymorphism & encapsulation",
      "Operator overloading & friend functions",
      "Templates & STL containers",
      "File handling & exception handling",
      "Introduction to data structures in C++",
      "Project: Student Result System / Inventory Manager",
    ],
    career: [
      "C++ Developer",
      "Game development (with Unreal/Unity track)",
      "Competitive programming & coding contests",
      "High-performance backend systems",
    ],
  },
  {
    id: "php",
    name: "PHP",
    fullName: "PHP Web Development",
    category: "programming",
    duration: "2 – 3 Months",
    level: "Beginner to Intermediate",
    description:
      "PHP powers millions of websites including WordPress, Laravel apps, and e-commerce platforms. Learn server-side web development: HTML forms, PHP syntax, MySQL database integration, sessions, and building dynamic websites from scratch.",
    highlights: [
      "Build live dynamic websites & admin panels",
      "MySQL database integration included",
      "Popular for freelancing web projects",
      "WordPress & CMS customization skills",
    ],
    syllabus: [
      "HTML, CSS & form handling recap",
      "PHP syntax, variables & control structures",
      "Functions, arrays & superglobals ($_GET, $_POST)",
      "MySQL: CRUD operations & joins",
      "Sessions, cookies & user authentication",
      "File upload & email sending basics",
      "MVC concept & simple framework intro",
      "Project: Login system, CRUD app, small business website",
    ],
    career: [
      "PHP Web Developer",
      "WordPress / CMS Developer",
      "Freelance website builder",
      "Laravel / CodeIgniter (advanced track)",
    ],
  },
  {
    id: "dotnet",
    name: ".NET",
    fullName: ".NET / C# Development",
    category: "programming",
    duration: "3 – 4 Months",
    level: "Intermediate",
    description:
      "Microsoft .NET with C# is used to build Windows desktop apps, web APIs, and enterprise business software. Learn C# syntax, OOP, Windows Forms, ADO.NET database connectivity, and ASP.NET basics for modern application development.",
    highlights: [
      "Microsoft ecosystem — strong in enterprise IT",
      "C# is modern, type-safe & in high demand",
      "Desktop + web application development",
      "SQL Server integration",
    ],
    syllabus: [
      "Introduction to .NET Framework & C#",
      "Variables, control flow & methods",
      "OOP: classes, inheritance & interfaces",
      "Windows Forms UI design",
      "ADO.NET & SQL Server connectivity",
      "Collections, LINQ & exception handling",
      "ASP.NET Web Forms / MVC introduction",
      "Project: Billing Software / Student Management System",
    ],
    career: [
      ".NET Developer",
      "C# Backend Developer",
      "Enterprise software in banking & insurance",
      "ASP.NET Core (advanced track)",
    ],
  },
  {
    id: "vb",
    name: "Visual Basic",
    fullName: "Visual Basic (.NET)",
    category: "programming",
    duration: "2 Months",
    level: "Beginner",
    description:
      "Visual Basic (VB.NET) is ideal for quickly building Windows desktop applications with drag-and-drop forms, buttons, and database connections. Popular among small businesses for billing, inventory, and office automation tools.",
    highlights: [
      "Rapid Windows app development",
      "Visual form designer — easy for beginners",
      "Database-connected desktop software",
      "Useful for local business automation",
    ],
    syllabus: [
      "VB.NET IDE & form controls",
      "Variables, conditions & loops",
      "Procedures, functions & modules",
      "Working with menus, dialogs & toolbars",
      "Database connectivity (Access / SQL Server)",
      "Reports & printing",
      "Error handling & debugging",
      "Project: Shop Billing / Attendance Register app",
    ],
    career: [
      "Desktop application developer",
      "Office automation specialist",
      "Small business software solutions",
      "Transition to C# / .NET development",
    ],
  },
];

export const professionalCourses: Course[] = [
  {
    id: "oracle",
    name: "Oracle",
    fullName: "Oracle Database & SQL",
    category: "professional",
    duration: "2 – 3 Months",
    level: "Intermediate",
    description:
      "Oracle is the world's leading enterprise database used by banks, telecom, and large corporations. Learn SQL queries, PL/SQL programming, database design, normalization, and administration basics to work with professional database systems.",
    highlights: [
      "Industry-standard RDBMS skills",
      "SQL + PL/SQL stored procedures",
      "Database design & normalization",
      "Useful for DBA and backend developer roles",
    ],
    syllabus: [
      "Relational database concepts & ER diagrams",
      "SQL: SELECT, INSERT, UPDATE, DELETE",
      "Joins, subqueries & aggregate functions",
      "Constraints, indexes & views",
      "PL/SQL: procedures, functions & cursors",
      "Triggers & packages",
      "Backup, recovery & user management intro",
      "Practical lab exercises & case studies",
    ],
    career: [
      "Database Administrator (Junior)",
      "SQL Developer",
      "Backend developer with Oracle skills",
      "ERP & enterprise IT roles",
    ],
  },
  {
    id: "tally",
    name: "Tally",
    fullName: "Tally ERP 9 / Prime",
    category: "professional",
    duration: "1 – 2 Months",
    level: "Beginner",
    description:
      "Tally is India's most widely used accounting and GST software. Learn company creation, ledger management, voucher entry, GST billing, inventory, payroll, and financial reports — essential skills for accountants, shop owners, and commerce students.",
    highlights: [
      "GST-compliant billing & returns",
      "Practical accounting with real scenarios",
      "High demand in CA firms & businesses",
      "Certificate adds value to commerce profiles",
    ],
    syllabus: [
      "Accounting fundamentals & golden rules",
      "Company creation & chart of accounts",
      "Voucher types: payment, receipt, sales, purchase",
      "GST setup, invoicing & returns overview",
      "Inventory management & stock items",
      "Bank reconciliation & payroll basics",
      "Financial reports: balance sheet, P&L",
      "Tally Prime features & data backup",
    ],
    career: [
      "Accountant / Account Assistant",
      "Billing executive in shops & firms",
      "Tax consultant office support",
      "Own business GST & accounting management",
    ],
  },
  {
    id: "autocad",
    name: "AutoCAD",
    fullName: "AutoCAD Drafting & Design",
    category: "professional",
    duration: "2 – 3 Months",
    level: "Beginner to Intermediate",
    description:
      "AutoCAD is the industry standard for 2D drafting and 3D design in civil, mechanical, electrical, and architecture fields. Learn drawing tools, layers, dimensions, blocks, and plotting to create professional technical drawings.",
    highlights: [
      "Essential for civil & mechanical diploma students",
      "2D drafting from basic to advanced",
      "3D modeling introduction",
      "Portfolio-ready project drawings",
    ],
    syllabus: [
      "AutoCAD interface & drawing setup",
      "Lines, circles, arcs & modify tools",
      "Layers, blocks & annotations",
      "Dimensioning & text styles",
      "Hatching & plotting/printing",
      "Isometric & 3D basics",
      "Architectural & mechanical drawing practice",
      "Final project: floor plan / machine component",
    ],
    career: [
      "Draftsman / CAD Operator",
      "Civil & architectural drawing jobs",
      "Mechanical design support roles",
      "Interior design & construction firms",
    ],
  },
  {
    id: "internet",
    name: "Internet",
    fullName: "Internet & Computer Basics",
    category: "professional",
    duration: "1 Month",
    level: "Beginner",
    description:
      "A practical course for complete beginners covering how to use a computer, browse the internet safely, send emails, use UPI and online services, social media basics, and protect yourself from online fraud. Perfect for first-time computer users.",
    highlights: [
      "No experience needed",
      "Digital literacy for daily life",
      "Online safety & fraud awareness",
      "Government exam computer awareness prep",
    ],
    syllabus: [
      "Computer parts & how to start/shutdown",
      "Keyboard, mouse & typing practice",
      "File management & basic settings",
      "Web browsers & search engines",
      "Email creation & attachments",
      "UPI, online banking & e-governance portals",
      "Social media & video calls (WhatsApp, Zoom)",
      "Cyber safety, passwords & phishing awareness",
    ],
    career: [
      "Confident computer user for any office role",
      "Digital services & online form filling",
      "Foundation for MS Office & other courses",
    ],
  },
];

export const allCourses: Course[] = [
  ...diplomaCourses,
  ...programmingCourses,
  ...professionalCourses,
];

/** Flat list of course names for admin forms & result lookup */
export const ALL_COURSE_NAMES = allCourses.map((c) => c.name);

export const categoryLabels: Record<CourseCategory, string> = {
  diploma: "Diploma Programs",
  programming: "Programming Languages",
  professional: "Professional & Skill Courses",
};

export const categoryDescriptions: Record<CourseCategory, string> = {
  diploma:
    "Full diploma programs with structured syllabus, practical exams, and certificates — ideal for career-focused students.",
  programming:
    "Learn to code from scratch. Each language course includes theory, daily practice, mini projects, and job-oriented skills.",
  professional:
    "Specialized skill courses in accounting, design, and databases for commerce, engineering, and IT professionals.",
};
