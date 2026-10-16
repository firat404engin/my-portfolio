import { NavLink, SocialLink, TechStackItem, Testimonial } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hakkımda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "Kariyer", href: "#timeline" },
  { label: "Referanslar", href: "#testimonials" },
  { label: "İletişim", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/firat404engin",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/firatengin404",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/firatengin404/",
    icon: "instagram",
  },
  {
    name: "Medium",
    url: "https://medium.com/@fengin7373",
    icon: "medium",
  },
  {
    name: "Email",
    url: "mailto:fengin7321@gmail.com",
    icon: "email",
  },
];

export const techStack: TechStackItem[] = [
  // Production & Business Systems
  { name: "Mikro Fly ERP", icon: "erp", category: "tools" },
  { name: "Prosis MES", icon: "mes", category: "tools" },
  { name: "SQL Reporting", icon: "reporting", category: "tools" },

  // Backend & Programming
  { name: "C#", icon: "csharp", category: "backend" },
  { name: "ASP.NET MVC5", icon: "aspnet", category: "backend" },
  { name: ".NET Framework", icon: "dotnet", category: "backend" },
  { name: "Entity Framework", icon: "ef", category: "backend" },
  
  // Database
  { name: "MS SQL Server", icon: "sqlserver", category: "database" },
  { name: "Oracle SQL", icon: "oracle", category: "database" },
  
  // Frontend & Web
  { name: "HTML5", icon: "html", category: "frontend" },
  { name: "CSS3", icon: "css", category: "frontend" },
  { name: "Bootstrap", icon: "bootstrap", category: "frontend" },
  
  // DevOps & Tools
  { name: "Git & GitHub", icon: "git", category: "devops" },
  { name: "Windows Server", icon: "windows", category: "devops" },
  { name: "Active Directory", icon: "ad", category: "devops" },
  
  // IT & Network
  { name: "DHCP / DNS", icon: "network", category: "it" },
  { name: "Group Policy", icon: "policy", category: "it" },
  { name: "Donanım Kurulumu", icon: "hardware", category: "it" },
];

export const testimonials: Testimonial[] = [
  {
    id: 2,
    quote:
      "Working with Fırat was a pleasure. He brought fresh ideas to our team and wasn't afraid to tackle challenging backend problems. His dedication to learning and improving his craft is evident in everything he does. I highly recommend him for any .NET development role.",
    author: "Elif Kaya",
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
  },
  {
    id: 3,
    quote:
      "Fırat's internship project exceeded our expectations. He built a robust API system that we're still using in production today. His attention to detail, combined with his enthusiasm for modern development practices, makes him a valuable asset to any team.",
    author: "Mehmet Demir",
    role: "Engineering Manager",
    company: "Digital Innovations Ltd.",
  },
];

export const aboutMe = {
  intro: "I am a Computer Engineering graduate working as a Systems Engineer at System Handle since July 2026, focusing on digitizing, managing and improving production processes.",
  journey: "I analyze work orders, production operations, inventory movements and data flows with Mikro Fly ERP, Prosis MES and SQL Server. I create SQL queries and reports, resolve operational issues and support system integration and users.",
  current: "I am developing my own MES application to make production monitoring more modern, user-friendly and efficient.",
};
