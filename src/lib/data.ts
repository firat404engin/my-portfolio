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
  intro: `I'm a recent Computer Engineering graduate with a passion for building robust, scalable backend systems. My journey into software development began during my university years, where I discovered the elegance of .NET and fell in love with creating clean, efficient solutions.`,
  
  journey: `Throughout my academic career and internships, I've honed my skills in C#, ASP.NET Core, and SQL Server. I believe in writing code that not only works but is also maintainable and well-documented. My goal is to contribute to projects that make a real impact while continuously growing as a developer.`,
  
  current: `Currently, I'm focused on deepening my expertise in cloud technologies, particularly Azure, and exploring microservices architecture. I'm excited about the intersection of backend development and modern DevOps practices, and I'm always eager to learn new technologies that can help me build better software.`,
};
