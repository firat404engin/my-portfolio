import { GitHubRepo, Project } from "@/types";

// GitHub credentials from environment variables
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "firat404engin";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Manuel proje listesi - Kendi projeleriniz
export const manualProjects: Project[] = [
  {
    id: "ecommerce",
    name: {
      tr: "E-Ticaret Web Sitesi",
      en: "E-Commerce Website",
    },
    description: {
      tr: "Müşteri için ürün yönetimi, sepet sistemi ve güvenli ödeme entegrasyonu özelliklerine sahip, tamamen işlevsel ve duyarlı bir e-ticaret web sitesi.",
      en: "A fully functional and responsive e-commerce website with product management, shopping cart system, and secure payment integration features.",
    },
    longDescription: {
      tr: "Bu proje, küçük ve orta ölçekli işletmeler için tasarlanmış kapsamlı bir e-ticaret çözümüdür. Kullanıcılar ürünleri kategorilere göre filtreleyebilir, sepetlerine ekleyebilir ve güvenli ödeme yapabilirler. Admin paneli sayesinde ürün, sipariş ve kullanıcı yönetimi kolayca yapılabilmektedir.",
      en: "This project is a comprehensive e-commerce solution designed for small and medium-sized businesses. Users can filter products by categories, add them to their cart, and make secure payments. The admin panel allows easy management of products, orders, and users.",
    },
    language: "C#",
    tags: ["ASP.NET", "SQL Server", "Bootstrap"],
    githubUrl: "https://github.com/firat404engin/ecommerce",
    liveUrl: "https://mainticaret.vercel.app/",
    category: "web",
    featured: true,
    year: "2024",
    features: {
      tr: [
        "Ürün yönetimi ve kategorilendirme",
        "Alışveriş sepeti sistemi",
        "Güvenli ödeme entegrasyonu",
        "Admin paneli",
        "Responsive tasarım",
        "Kullanıcı hesap yönetimi",
      ],
      en: [
        "Product management and categorization",
        "Shopping cart system",
        "Secure payment integration",
        "Admin panel",
        "Responsive design",
        "User account management",
      ],
    },
    challenges: {
      tr: "En büyük zorluk, güvenli ödeme sistemini entegre etmek ve stok yönetimini gerçek zamanlı olarak senkronize etmekti.",
      en: "The biggest challenge was integrating the secure payment system and synchronizing inventory management in real-time.",
    },
  },
  {
    id: "vizyoner-bakis",
    name: {
      tr: "Vizyoner Bakış Danışmanlık",
      en: "Vizyoner Bakış Consulting",
    },
    description: {
      tr: "Hizmet arama, randevu rezervasyonu ve güvenli iletişim formları içeren, tamamen duyarlı danışmanlık web sitesi.",
      en: "A fully responsive consulting website featuring service search, appointment booking, and secure contact forms.",
    },
    longDescription: {
      tr: "Vizyoner Bakış Danışmanlık firması için geliştirilen kurumsal web sitesi. Modern ve profesyonel bir tasarıma sahip olan site, firmanın hizmetlerini sergiliyor ve potansiyel müşterilerle iletişim kurmasını sağlıyor.",
      en: "Corporate website developed for Vizyoner Bakış Consulting firm. The site has a modern and professional design, showcasing the company's services and enabling communication with potential clients.",
    },
    language: "TypeScript",
    tags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/firat404engin/vizyoner-website",
    liveUrl: "https://www.vizyonerbakis.com.tr/",
    category: "web",
    featured: true,
    year: "2024",
    features: {
      tr: [
        "Modern ve responsive tasarım",
        "Hizmet sayfaları",
        "İletişim formu",
        "SEO optimizasyonu",
        "Hızlı sayfa yükleme",
        "Animasyonlar ve geçişler",
      ],
      en: [
        "Modern and responsive design",
        "Service pages",
        "Contact form",
        "SEO optimization",
        "Fast page loading",
        "Animations and transitions",
      ],
    },
    challenges: {
      tr: "Müşterinin kurumsal kimliğine uygun, hem profesyonel hem de modern bir tasarım oluşturmak ve SEO performansını optimize etmek.",
      en: "Creating a professional yet modern design that matches the client's corporate identity and optimizing SEO performance.",
    },
  },
  {
    id: "deprem-izleyici",
    name: {
      tr: "Gerçek Zamanlı Deprem İzleyici",
      en: "Real-Time Earthquake Tracker",
    },
    description: {
      tr: "Türkiye'deki gerçek zamanlı deprem verilerini görselleştiren, kullanıcı dostu arayüze sahip, tamamen duyarlı bir web uygulaması.",
      en: "A fully responsive web application that visualizes real-time earthquake data in Turkey with a user-friendly interface.",
    },
    longDescription: {
      tr: "Bu uygulama, Kandilli Rasathanesi ve AFAD'dan alınan verileri kullanarak Türkiye'deki depremleri gerçek zamanlı olarak harita üzerinde göstermektedir. Kullanıcılar büyüklük, tarih ve lokasyona göre filtreleme yapabilirler.",
      en: "This application displays earthquakes in Turkey in real-time on a map using data from Kandilli Observatory and AFAD. Users can filter by magnitude, date, and location.",
    },
    language: "JavaScript",
    tags: ["React", "Leaflet", "API"],
    githubUrl: "https://github.com/firat404engin/earthquake",
    liveUrl: "https://earthquaketurkiye.vercel.app/",
    category: "web",
    featured: true,
    year: "2024",
    features: {
      tr: [
        "Gerçek zamanlı deprem verileri",
        "İnteraktif harita görünümü",
        "Büyüklük ve tarih filtreleme",
        "Deprem detayları",
        "Mobil uyumlu tasarım",
        "Otomatik veri güncelleme",
      ],
      en: [
        "Real-time earthquake data",
        "Interactive map view",
        "Magnitude and date filtering",
        "Earthquake details",
        "Mobile-friendly design",
        "Automatic data refresh",
      ],
    },
    challenges: {
      tr: "API'lerden gelen verileri düzgün bir şekilde işlemek ve harita üzerinde performanslı bir şekilde görselleştirmek.",
      en: "Processing data from APIs properly and visualizing them on the map with good performance.",
    },
  },
  {
    id: "portfolio",
    name: {
      tr: "Kişisel Portföy",
      en: "Personal Portfolio",
    },
    description: {
      tr: "İnteraktif proje bölümleri ve kusursuz bir iletişim deneyimi sunan modern, mobil uyumlu kişisel portföy web sitesi.",
      en: "A modern, mobile-friendly personal portfolio website featuring interactive project sections and a seamless contact experience.",
    },
    longDescription: {
      tr: "Bu portföy sitesi, projelerimi, deneyimlerimi ve becerilerimi sergilemek için tasarlandı. Modern teknolojiler kullanılarak oluşturulmuş, smooth animasyonlar ve dark tema ile göz yormayan bir kullanıcı deneyimi sunuyor.",
      en: "This portfolio site was designed to showcase my projects, experiences, and skills. Built with modern technologies, it offers a pleasant user experience with smooth animations and a dark theme.",
    },
    language: "TypeScript",
    tags: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/firat404engin/firatportfolio",
    liveUrl: "https://firatengin-henna.vercel.app/",
    category: "web",
    featured: true,
    year: "2025",
    features: {
      tr: [
        "Modern ve minimal tasarım",
        "Smooth scroll animasyonları",
        "Dark tema",
        "Çoklu dil desteği (TR/EN)",
        "GitHub API entegrasyonu",
        "Responsive tasarım",
        "Custom cursor efekti",
      ],
      en: [
        "Modern and minimal design",
        "Smooth scroll animations",
        "Dark theme",
        "Multi-language support (TR/EN)",
        "GitHub API integration",
        "Responsive design",
        "Custom cursor effect",
      ],
    },
    challenges: {
      tr: "Performansı koruyarak zengin animasyonlar eklemek ve çoklu dil desteğini sorunsuz bir şekilde entegre etmek.",
      en: "Adding rich animations while maintaining performance and seamlessly integrating multi-language support.",
    },
  },
];

// Proje ID'sine göre proje getir
export function getProjectById(id: string): Project | undefined {
  return manualProjects.find((project) => project.id === id);
}

// GitHub GraphQL API ile pinned repo'ları çek
export async function fetchPinnedRepos(): Promise<GitHubRepo[]> {
  if (!GITHUB_TOKEN) {
    console.warn("GitHub token not found, skipping pinned repos fetch");
    return [];
  }

  try {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                homepageUrl
                primaryLanguage {
                  name
                }
                stargazerCount
                forkCount
                repositoryTopics(first: 5) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                updatedAt
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return [];
    }

    const pinnedItems = data.data?.user?.pinnedItems?.nodes || [];

    return pinnedItems.map((repo: {
      id: string;
      name: string;
      description: string | null;
      url: string;
      homepageUrl: string | null;
      primaryLanguage: { name: string } | null;
      stargazerCount: number;
      forkCount: number;
      repositoryTopics: { nodes: { topic: { name: string } }[] };
      updatedAt: string;
    }, index: number) => ({
      id: index,
      name: repo.name,
      full_name: `${GITHUB_USERNAME}/${repo.name}`,
      description: repo.description,
      html_url: repo.url,
      homepage: repo.homepageUrl,
      language: repo.primaryLanguage?.name || null,
      stargazers_count: repo.stargazerCount,
      forks_count: repo.forkCount,
      topics: repo.repositoryTopics.nodes.map((t: { topic: { name: string } }) => t.topic.name),
      updated_at: repo.updatedAt,
    }));
  } catch (error) {
    console.error("Failed to fetch pinned repos:", error);
    return [];
  }
}

// Eski REST API fonksiyonu (yedek olarak)
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers,
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export function formatRepoName(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function truncateDescription(
  description: string | null,
  maxLength: number = 100
): string {
  if (!description) return "Açıklama mevcut değil";
  if (description.length <= maxLength) return description;
  return description.slice(0, maxLength).trim() + "...";
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    "C#": "#178600",
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    HTML: "#e34c26",
    CSS: "#563d7c",
    SCSS: "#c6538c",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
  };
  return colors[language || ""] || "#6b7280";
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    web: "Web",
    mobile: "Mobil",
    desktop: "Masaüstü",
    api: "API",
  };
  return labels[category] || category;
}
