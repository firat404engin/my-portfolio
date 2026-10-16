import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firatengin.dev"),
  title: {
    default: "Fırat Engin | Systems Engineer & .NET Developer",
    template: "%s | Fırat Engin",
  },
  description:
    "Portfolio of Fırat Engin - Systems Engineer at System Handle, improving production processes with Mikro Fly ERP, Prosis MES and SQL Server.",
  keywords: [
    ".NET Developer",
    "Computer Engineer",
    "C#",
    "Backend Developer",
    "Full Stack",
    "Mikro Fly ERP",
    "Prosis MES",
    "Production Systems",
    "SQL Server",
    "ASP.NET",
    "Software Engineer",
    "Turkey",
    "Istanbul",
  ],
  authors: [{ name: "Fırat Engin", url: "https://firatengin.dev" }],
  creator: "Fırat Engin",
  publisher: "Fırat Engin",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://firatengin.dev",
    siteName: "Fırat Engin Portfolio",
    title: "Fırat Engin | Systems Engineer & .NET Developer",
    description:
      "Systems Engineer at System Handle, improving production processes with Mikro Fly ERP, Prosis MES and SQL Server.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fırat Engin - Systems Engineer & .NET Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fırat Engin | Systems Engineer & .NET Developer",
    description:
      "Systems Engineer at System Handle, improving production processes with Mikro Fly ERP, Prosis MES and SQL Server.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fırat Engin",
  url: "https://firatengin.dev",
  image: "https://firatengin.dev/og-image.png",
  sameAs: [
    "https://github.com/firat404engin",
    "https://linkedin.com/in/firatengin404",
    "https://www.instagram.com/firatengin404/",
    "https://medium.com/@fengin7373",
  ],
  jobTitle: "Systems Engineer & .NET Developer",
  worksFor: {
    "@type": "Organization",
    name: "System Handle",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Namık Kemal University",
  },
  knowsAbout: [
    "C#",
    ".NET Framework",
    "ASP.NET MVC",
    "SQL Server",
    "Entity Framework",
    "Mikro Fly ERP",
    "Prosis MES",
    "Production Monitoring",
    "System Integration",
    "Web Development",
    "Backend Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
