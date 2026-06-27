import React from "react";
import {
  BarChart3,
  Cpu,
  Droplets,
  Factory,
  Gauge,
  PackageCheck,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

export const img = (path: string) => `/uploads/${path}`;

export const showcaseImages = {
  pithPlatform: img("2026/06/pith-coiiot.jpeg"),
  mobileApp: img("2026/06/coiiot-img-mobile-app.jpeg"),
};

export type Solution = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  heroImage: string;
  icon: React.ComponentType<{ size?: number }>;
  bullets: string[];
  cards: { title: string; text: string; image: string }[];
};

export type ProductDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  screenshots: { src: string; alt: string }[];
};

export const expertiseDropdown = [
  { label: "Production Tracking", sub: "Live pith & bale counts", href: "#production-tracking", Icon: PackageCheck },
  { label: "Machine Monitoring", sub: "Overload & runtime alerts", href: "#machine-tracker", Icon: Gauge },
  { label: "Resource Management", sub: "EB & water usage", href: "#resource-management", Icon: Droplets },
  { label: "IoT Monitoring", sub: "Connected factory overview", href: "#iot-monitoring", Icon: Cpu },
  { label: "BI Reports", sub: "Shift reports & insights", href: "#reports", Icon: BarChart3 },
  { label: "Labours Management", sub: "Payroll & attendance", href: "#labours-management", Icon: Users },
];

export const productsDropdown = {
  main: [
    { label: "CoiioT Pulse", sub: "Coir industry monitoring system", href: "#coiiot-pulse" },
    { label: "CoiioT Books", sub: "ERP records and factory management", href: "#coiiot-books" },
  ],
  pulse: [
    { label: "Pith CoiioT", sub: "Pith loads, blocks, EB, water", href: "#pith-coiiot", image: img("2026/06/pith-coiiot-dashboard-1.png") },
    { label: "Fibre CoiioT", sub: "Bale production and weight", href: "#fibre-coiiot", image: img("2026/06/fibre-coiiot-dashboard-1.png") },
    { label: "Growbag CoiioT", sub: "Growbag output monitoring", href: "#growbag-coiiot", image: img("2026/06/growbag-coiiot-dashboard.png") },
  ],
  addons: { title: "Add-Ons", desc: "Additional Value Added Features", href: "#pricing" },
};

export const stats = [
  ["300+", "Business days"],
  ["1GB+", "Production data"],
  ["20+", "Successful clients"],
  ["24/7", "Support rhythm"],
];

export const solutions: Solution[] = [
  {
    slug: "production-tracking",
    title: "Production Tracking",
    eyebrow: "Optimize - boost - improve",
    summary:
      "Track pith loads, pith blocks, fibre bales, and shift-wise coir production data in real time.",
    heroImage: img("2026/06/pith-coiiot.jpeg"),
    icon: PackageCheck,
    bullets: [
      "Live pith load and block production counts",
      "Instant mobile dashboard updates for every shift",
      "Fibre bale tracking with production and weight visibility",
    ],
    cards: [
      {
        title: "Pith loads",
        text: "Track cubic-foot pith loads with EB usage and clear daily production reports.",
        image: img("2026/04/Screenshot-2026-03-17-111524.png"),
      },
      {
        title: "Pith blocks",
        text: "See pith block output instantly and reduce manual counting errors.",
        image: img("2026/04/Screenshot-2026-04-14-105408.png"),
      },
      {
        title: "Fibre bales",
        text: "Monitor fibre bales produced and weighed for better dispatch planning.",
        image: img("2026/04/Screenshot-2026-04-14-115728.png"),
      },
    ],
  },
  {
    slug: "machine-tracker",
    title: "Machine Monitoring",
    eyebrow: "Prevention - protection - production",
    summary:
      "Protect machines from overload, monitor run-time, identify idle time, and improve equipment efficiency.",
    heroImage: img("2026/04/a83fa0e2-ce65-432d-a576-afb863b929e7-1.png"),
    icon: Gauge,
    bullets: [
      "Machine on, off, idle, and overload status tracking",
      "Runtime analytics to improve machine utilization",
      "Early alerts to reduce downtime and equipment damage",
    ],
    cards: [
      {
        title: "Overload protection",
        text: "Detect stress and overloaded conditions instantly to keep equipment safe.",
        image: img("2026/04/ChatGPT-Image-Apr-20-2026-04_13_25-PM.png"),
      },
      {
        title: "Idle time",
        text: "Understand inactive equipment gaps and reduce production losses.",
        image: img("2026/04/ChatGPT-Image-Apr-20-2026-04_08_59-PM.png"),
      },
      {
        title: "Efficiency",
        text: "Measure machine performance and output with accurate real-time data.",
        image: img("2026/04/ChatGPT-Image-Apr-20-2026-04_22_08-PM.png"),
      },
    ],
  },
  {
    slug: "resource-management",
    title: "Resource Management",
    eyebrow: "Monitor - limit - grow",
    summary:
      "Track EB units, water level, and water consumption so factories reduce wastage and operate sustainably.",
    heroImage: img("2026/04/ChatGPT-Image-Apr-20-2026-05_22_05-PM.png"),
    icon: Droplets,
    bullets: [
      "Real-time EB consumption monitoring",
      "Live sump and overhead tank level alerts",
      "Water usage reports for better resource control",
    ],
    cards: [
      {
        title: "EB consumption",
        text: "Identify high energy usage areas and reduce unnecessary power costs.",
        image: img("2026/04/Screenshot-2026-04-14-125214.png"),
      },
      {
        title: "Water levels",
        text: "Avoid shortages and overflow issues with continuous level tracking.",
        image: img("2026/04/Screenshot-2026-04-13-171629.png"),
      },
      {
        title: "Water usage",
        text: "Measure water use across processes and support sustainable operations.",
        image: img("2026/04/5112bb28-d6ca-47a7-b945-1ce6c8ef75ef.png"),
      },
    ],
  },
  {
    slug: "labours-management",
    title: "Labours Management",
    eyebrow: "Workforce clarity",
    summary:
      "Manage task allocation, shift attendance, productivity, and payroll from a clean operations dashboard.",
    heroImage: img("2026/04/Screenshot-2026-04-21-095103.png"),
    icon: Users,
    bullets: [
      "Worker-wise task allocation and productivity tracking",
      "Shift, attendance, and overtime records",
      "Automated wage and salary calculation",
    ],
    cards: [
      {
        title: "Task allocation",
        text: "Assign workers by shift and track productivity across daily operations.",
        image: img("2026/04/Screenshot-2026-04-21-094652-1.png"),
      },
      {
        title: "Attendance",
        text: "Generate daily and monthly attendance reports with instant updates.",
        image: img("2026/04/Screenshot-2026-04-21-094624.png"),
      },
      {
        title: "Payroll",
        text: "Reduce manual errors with wage calculation connected to real work data.",
        image: img("2026/04/Screenshot-2026-04-21-094535.png"),
      },
    ],
  },
  {
    slug: "reports",
    title: "Data-driven BI Reports",
    eyebrow: "Insight engine",
    summary:
      "Visualize production, compare shifts, generate summaries, and make decisions with reliable factory data.",
    heroImage: img("2026/04/ChatGPT-Image-Apr-21-2026-09_21_02-AM.png"),
    icon: BarChart3,
    bullets: [
      "Live coir production dashboards",
      "Auto-generated shift and resource reports",
      "Profit, expense, and operational insights",
    ],
    cards: [
      {
        title: "Visualization",
        text: "See production trends and performance comparisons at a glance.",
        image: img("2022/09/business-task-completion.jpg"),
      },
      {
        title: "Reports",
        text: "Create shift-wise production data and expense summaries automatically.",
        image: img("2026/04/ChatGPT-Image-Apr-21-2026-09_30_11-AM.png"),
      },
      {
        title: "Decisions",
        text: "Turn resource patterns into smart operational decisions.",
        image: img("2026/04/ChatGPT-Image-Apr-21-2026-09_32_05-AM.png"),
      },
    ],
  },
  {
    slug: "iot-monitoring",
    title: "IoT Based Monitoring",
    eyebrow: "Connected factory",
    summary:
      "Connect production, machines, EB, water, and reports in one scalable IoT monitoring platform.",
    heroImage: img("2026/04/ChatGPT-Image-Apr-20-2026-09_57_03-PM.png"),
    icon: Cpu,
    bullets: [
      "Track production lines from one IoT dashboard",
      "Maintain machine health and active states",
      "Monitor EB and water resources efficiently",
    ],
    cards: [
      {
        title: "Machine states",
        text: "Monitor idle, off, efficient, and overloaded machine conditions.",
        image: img("2026/04/a83fa0e2-ce65-432d-a576-afb863b929e7-1.png"),
      },
      {
        title: "Production",
        text: "Increase production with live pith loads, block, and bale monitoring.",
        image: img("2026/04/Screenshot-2026-04-13-164642.png"),
      },
      {
        title: "Resources",
        text: "Minimize EB consumption and manage live sump and OHT water levels.",
        image: img("2022/09/ChatGPT-Image-Apr-20-2026-09_38_56-PM.png"),
      },
    ],
  },
];

export const pricing = [
  { name: "Basic", device: "Rs.25,000", support: "Rs.5,000 / year", items: ["Pith production", "Power consumption"] },
  {
    name: "Standard",
    device: "Rs.55,000",
    support: "Rs.10,000 / year",
    items: ["Pith production", "Bale counter", "Pith counter", "Power consumption"],
  },
  {
    name: "Advanced",
    device: "Rs.75,000",
    support: "Rs.15,000 / month",
    items: ["Pith production", "Bale and pith counter", "Power consumption", "Water meter", "Tank level"],
  },
  {
    name: "Premium",
    device: "Rs.1,50,000",
    support: "Rs.20,000 / month",
    items: ["Pith production", "Bale and pith counter", "Power consumption", "Water meter", "Tank level", "Pith measurement"],
  },
];

export const testimonials = [
  {
    name: "Hariprasath",
    company: "HP Cocos",
    text: "CoiioT brings complete visibility to fibre, pith, and block production with accurate resource usage data.",
  },
  {
    name: "Ramesh",
    company: "Ramesh Coirs",
    text: "The system minimizes manual errors and improves production planning with real-time tracking.",
  },
  {
    name: "Jagadeewaran",
    company: "Alam Cocos",
    text: "Pith blocks, fibre bales, loads, and resource usage are now monitored in one connected system.",
  },
];

export const featureHighlights: { label: string; Icon: React.ComponentType<{ size?: number }> }[] = [
  { label: "Experienced IoT team", Icon: Factory },
  { label: "Data-driven reports", Icon: BarChart3 },
  { label: "Digital solutions", Icon: Cpu },
  { label: "Customer support", Icon: ShieldCheck },
];

export const homeHighlights: { title: string; text: string; Icon: React.ComponentType<{ size?: number }> }[] = [
  { title: "experienced team", text: "Coir IoT developers", Icon: Users },
  { title: "digital solutions", text: "Live factory reports", Icon: BarChart3 },
  { title: "24/7 support", text: "Fast customer support", Icon: Phone },
  { title: "applicable areas", text: "Coir production units", Icon: Factory },
];

export const productFamilies = [
  {
    name: "CoiioT Pulse",
    href: "#coiiot-pulse",
    tagline: "Real-time insights for production, machine health, EB, water, and output tracking.",
    image: img("2026/06/pith-coiiot.jpeg"),
    items: ["Pith CoiioT", "Fibre CoiioT", "Growbag CoiioT", "Resource Tracker"],
  },
  {
    name: "CoiioT Books",
    href: "#coiiot-books",
    tagline: "Digital ERP support for records, expenses, labour, payroll, and factory management.",
    image: img("2026/06/coiiot-img-mobile-app.jpeg"),
    items: ["Attendance", "Shift reports", "Salary records", "Expense summaries"],
  },
  {
    name: "Add-On Modules",
    href: "#pricing",
    tagline: "Extra monitoring modules that can be added as factories scale their operations.",
    image: img("2026/04/Screenshot-2026-04-13-164642.png"),
    items: ["Water meter", "Tank levels", "Machine overload", "BI dashboards"],
  },
];

export const productDetails: ProductDetail[] = [
  {
    slug: "coiiot-pulse",
    name: "CoiioT Pulse",
    eyebrow: "Coir industry monitoring system",
    summary:
      "CoiioT Pulse connects coir production, machine states, EB, water, labour, expenses, and reports into one live monitoring layer.",
    heroImage: showcaseImages.pithPlatform,
    overview:
      "Built specifically for coir factories, CoiioT Pulse helps owners move from delayed manual entries to live operational clarity.",
    highlights: [
      "Designed for pith, fibre, and growbag production workflows",
      "Live dashboards for production, resource usage, and machine health",
      "Modular setup that can start small and scale by factory requirement",
    ],
    screenshots: [
      { src: img("2026/06/pith-coiiot-dashboard-1.png"), alt: "CoiioT Pulse pith production dashboard" },
      { src: img("2026/06/fibre-coiiot-dashboard-1.png"), alt: "CoiioT Pulse fibre production dashboard" },
      { src: img("2026/06/growbag-coiiot-dashboard.png"), alt: "CoiioT Pulse growbag monitoring dashboard" },
    ],
  },
  {
    slug: "pith-coiiot",
    name: "Pith CoiioT",
    eyebrow: "Pith industry monitoring",
    summary:
      "Pith CoiioT monitors pith loads, pith blocks, water consumption, EB price, salary, expenses, and machine states for pith-based coir units.",
    heroImage: img("2026/06/pith-coiiot-dashboard-1.png"),
    overview:
      "It gives pith factory teams a single dashboard for daily production and cost visibility, reducing manual count errors and late reports.",
    highlights: [
      "Track pith CFT, fibre bales, pith blocks, water consumed, water availability, and expenses",
      "Compare expected vs actual production across shifts and months",
      "Monitor efficient, idle, overload, off, and shutdown machine states",
    ],
    screenshots: [
      { src: img("2026/06/pith-coiiot-dashboard-1.png"), alt: "Pith CoiioT dashboard overview" },
      { src: img("2026/06/pith-coiiot-dashboard-2.png"), alt: "Pith CoiioT production charts" },
    ],
  },
  {
    slug: "fibre-coiiot",
    name: "Fibre CoiioT",
    eyebrow: "Fibre bale monitoring",
    summary:
      "Fibre CoiioT tracks fibre bales produced, weighed, EB price, shift performance, salary, and expenses for fibre-focused coir factories.",
    heroImage: img("2026/06/fibre-coiiot-dashboard-1.png"),
    overview:
      "It helps fibre units understand daily and monthly bale production, weight, and cost data without depending on scattered manual sheets.",
    highlights: [
      "Monitor bales produced and weighed across shifts",
      "Review bale weight, average weight, and EB price trends",
      "Use clean production summaries for dispatch and planning",
    ],
    screenshots: [
      { src: img("2026/06/fibre-coiiot-dashboard-1.png"), alt: "Fibre CoiioT monthly bale production dashboard" },
      { src: img("2026/06/fibre-coiiot-dashboard-2.png"), alt: "Fibre CoiioT EB price and weight dashboard" },
    ],
  },
  {
    slug: "growbag-coiiot",
    name: "Growbag CoiioT",
    eyebrow: "Growbag production monitoring",
    summary:
      "Growbag CoiioT monitors growbag production output and related factory records for growbag-based coir operations.",
    heroImage: img("2026/06/growbag-coiiot-dashboard.png"),
    overview:
      "It is a focused production view for growbag units that need quick visibility into output and operating records.",
    highlights: [
      "Track hourly growbag production output",
      "Keep salary and expense status visible with production views",
      "Support simple daily review for growbag factory teams",
    ],
    screenshots: [
      { src: img("2026/06/growbag-coiiot-dashboard.png"), alt: "Growbag CoiioT hourly production dashboard" },
    ],
  },
  {
    slug: "coiiot-books",
    name: "CoiioT Books",
    eyebrow: "Factory ERP records",
    summary:
      "CoiioT Books helps coir businesses manage records, attendance, salary, expenses, reports, and operational documentation.",
    heroImage: showcaseImages.mobileApp,
    overview:
      "It works as the management layer beside CoiioT Pulse, keeping daily factory records organized and easier to review.",
    highlights: [
      "Attendance, salary, and expense record management",
      "Factory reports and operational summaries",
      "No sub-products: one focused business records module",
    ],
    screenshots: [
      { src: showcaseImages.mobileApp, alt: "CoiioT Books mobile records preview" },
    ],
  },
];

export const comparisonRows = [
  ["Pith production", "Yes", "Yes", "Yes", "Yes"],
  ["Bale counter", "-", "Yes", "Yes", "Yes"],
  ["Pith counter", "-", "Yes", "Yes", "Yes"],
  ["Power consumption", "Yes", "Yes", "Yes", "Yes"],
  ["Water meter", "-", "-", "Yes", "Yes"],
  ["Tank level", "-", "-", "Yes", "Yes"],
  ["Pith measurement", "-", "-", "-", "Yes"],
];

export const faqs = [
  ["How long does installation take-", "Most sites can begin with a site study, sensor installation, and dashboard setup with minimal disruption to production."],
  ["Will pricing change by factory size-", "Yes. Final pricing can vary based on machine count, sensors, wiring distance, and modules selected."],
  ["Does CoiioT support mobile monitoring-", "Yes. Production, machine, EB, water, and reports can be monitored from dashboard and mobile views."],
];

export const solutionNarrative: Record<string, { problem: string[]; workflow: string[]; benefits: string[] }> = {
  "production-tracking": {
    problem: ["Manual production counts are delayed and error-prone.", "Shift-wise pith, block, and bale numbers are hard to verify.", "Managers lose visibility when they are away from the factory."],
    workflow: ["Sensors capture production events at the machine.", "Counts are updated to the CoiioT dashboard and mobile view.", "Reports summarize production by shift, product, and time period."],
    benefits: ["Reduce manual counting work", "Improve production accuracy", "Spot low-output shifts faster"],
  },
  "machine-tracker": {
    problem: ["Machines can run idle or overloaded without early warning.", "Runtime is often estimated instead of measured.", "Breakdowns affect production planning and equipment life."],
    workflow: ["Machine state is monitored continuously.", "Idle, off, efficient, and overloaded states are flagged.", "Runtime history helps teams plan maintenance and utilization."],
    benefits: ["Protect machines", "Reduce downtime", "Improve utilization"],
  },
  "resource-management": {
    problem: ["EB and water consumption are difficult to control manually.", "Tank shortages or overflow can affect production.", "Resource wastage increases operating cost."],
    workflow: ["EB meters and water sensors capture live usage.", "Sump and overhead tank levels are visible in dashboards.", "Consumption summaries help identify wastage and abnormal usage."],
    benefits: ["Control power cost", "Prevent water issues", "Support sustainable operations"],
  },
  "labours-management": {
    problem: ["Attendance, overtime, and wages can become scattered across notebooks.", "Worker productivity is difficult to compare by shift.", "Payroll errors consume admin time."],
    workflow: ["Worker attendance and shift data are recorded digitally.", "Tasks and productivity can be tracked worker-wise.", "Salary and wage reports are generated from real records."],
    benefits: ["Cleaner payroll", "Better workforce control", "Transparent attendance"],
  },
  reports: {
    problem: ["Production and expense data are often available too late.", "Managers need simple summaries, not raw scattered numbers.", "Manual reports slow down decisions."],
    workflow: ["Production, resource, labour, and machine data flows into BI views.", "Dashboards compare shifts, trends, and performance.", "Auto summaries help owners review factory health quickly."],
    benefits: ["Faster decisions", "Clear performance trends", "Better resource planning"],
  },
  "iot-monitoring": {
    problem: ["Production, machines, resources, and reports sit in separate systems.", "Owners need one view of factory activity.", "Scaling monitoring is hard without a connected platform."],
    workflow: ["IoT sensors connect machines, production lines, EB, water, and dashboards.", "CoiioT brings live data into a single monitoring layer.", "Modules can be expanded as the factory adds requirements."],
    benefits: ["One connected factory view", "Scalable monitoring", "Less manual dependency"],
  },
};

