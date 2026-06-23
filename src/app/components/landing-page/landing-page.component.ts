import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environemnts/environment';

type PortfolioCategory = 'system design' | 'cloud' | 'devops' | 'backend engineering';
type PortfolioFilter = 'all' | PortfolioCategory;
type BlogCategory = 'system design' | 'backend' | 'database' | 'cloud' | 'devops';
type BlogFilter = 'all' | BlogCategory;

interface ProjectTechStack {
  backend: string[];
  frontend: string[];
  database: string[];
  infra?: string[];
  architecture?: string[];
}

interface ProjectItem {
  id: number;
  title: string;
  images: string[];
  category: PortfolioCategory;
  description: string;
  modulesWorked: string[];
  techStack: ProjectTechStack;
  toolsUsed: string[];
  role: string;
}

interface BlogPost {
  id: number;
  category: BlogCategory;
  categoryLabel: string;
  image: string;
  alt: string;
  datetime: string;
  displayDate: string;
  tag: string[];
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  private apiKey: string = environment.weatherAppKey;
  title = 'Welcome to the Coaching Center Management System';
  currentYear = new Date().getFullYear();
  activePage: 'home' | 'about' | 'portfolio' | 'blog' | 'contact' = 'home';
  activePortfolioFilter: PortfolioFilter = 'all';
  activeBlogFilter: BlogFilter = 'all';
  selectedProject: ProjectItem | null = null;
  activeProjectImage: string | null = null;
  bangladeshTime = '--:--:-- --';
  bangladeshDate = '';
  weatherTemperatureC: number | null = null;
  weatherFeelsLikeC: number | null = null;
  weatherCondition = 'Loading weather...';
  weatherIconName = 'partly-sunny-outline';
  seasonName = 'Summer';
  weatherError: string | null = null;
  private bangladeshClockIntervalId: ReturnType<typeof setInterval> | null = null;
  private weatherRefreshIntervalId: ReturnType<typeof setInterval> | null = null;

  projects: ProjectItem[] = [
{
      id: 1,
      title: 'BGB Hospital HMIS Application',
      images: ['projects/bgb.png'],
      category: 'backend engineering',
      description: 'A fully paperless Hospital Management System (HMS) actively deployed across five Border Guard Bangladesh (BGB) hospitals. This platform digitizes end-to-end healthcare operations—including OPD, IPD, pharmacy, and patient management—streamlining medical care across all five locations.',
      modulesWorked: ['Implemented REST APIs', 'Integrated REST API with Frontend', 'PDF generation using JasperReports', 'Functional testing and bug fixing', 'Unit test, Integration test and happy path testing'],
      techStack: {
        backend: ['Java', 'Spring Boot', 'REST API', 'JasperReports'],
        frontend: ['Angular', 'Typescript'],
        database: ['PostgreSQL', 'SQL'],
        infra: ['Docker', 'Kubernetes', 'Jenkins', 'Bare Metal Server'],
        architecture: ['Monolithic']
      },
      toolsUsed: ['pgAdmin', 'postman', 'git', 'Jasper Studio'],
      role: 'Full Stack Software Engineer'
    },
    {
      id: 2,
      title: 'MAG Osmani Hospital HMIS Application',
      images: ['projects/somch.png'],
      category: 'backend engineering',
      description: 'Developed a comprehensive HMIS solution integrated with the national NID gateway for digital patient registration, including OPD, IPD, prescription, and pharmacy modules. The solution is in pilot rollout at MAG Osmani Medical College Hospital, Sylhet with expansion planned for government hospitals nationwide.',
      modulesWorked: ['Implemented REST APIs', 'Integrated REST API with Frontend', 'Database Entity design', 'PDF generation using JasperReports', 'Functional testing and bug fixing', 'Unit test, Integration test and happy path testing'],
      techStack: {
        backend: ['Java', 'Spring Boot', 'REST API', 'JasperReports'],
        frontend: ['Angular', 'Typescript'],
        database: ['PostgreSQL', 'QueryDSL'],
        infra: ['Docker', 'Kubernetes', 'Jenkins', 'Bare Metal Server'],
        architecture: ['Microservices- total 12 services']
      },
      toolsUsed: ['pgAdmin', 'postman', 'git', 'Jasper Studio'],
      role: 'Backend Software Engineer'
    },
    {
      id: 3,
      title: 'Pocketalk Ventana Console',
      images: ['projects/pocketalk.png'],
      category: 'backend engineering',
      description: 'Pocketalk Ventana Console is an operational platform used to manage translation devices through location tracking, device settings, usage history, and data import/export workflows for education and travel use cases in Japan.',
      modulesWorked: ['Device management API', 'Settings and policy management', 'Usage history and reporting', 'Data import/export service'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['MySQL'],
        infra: ['Docker', 'Kubernetes', 'Jenkins', 'GCP'],
        architecture: ['Monolithic']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API'],
      role: 'Backend Software Engineer'
    },
 {
      id: 4,
      title: 'SwostiMFI',
      images: ['projects/mfi.png', 'projects/mfi-features.png'],
      category: 'backend engineering',
      description: 'SwostiMFI is a digital microfinance platform used by local NGOs in Bangladesh to manage loan disbursement, EMI-based weekly and monthly collections, and community savings operations for rural members.',
      modulesWorked: ['Loan management', 'Savings and group collection', 'Repayment scheduling and tracking', 'Digital reporting'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Vue.js'],
        database: ['PostgreSQL'],
        infra: ['AWS'],
        architecture: ['Monolithic']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API'],
      role: 'Backend Software Engineer'
    },
    {
      id: 5,
      title: 'Muslim El',
      images: ['projects/muslim-el.png'],
      category: 'backend engineering',
      description: 'Muslim El is a community communication platform for Muslims in Finland, originally developed by the Dhaka-based company Sweet iTech.',
      modulesWorked: ['Admin panel'],
      techStack: {
        backend: ['Java', 'Spring Boot', 'REST API'],
        frontend: ['Angular'],
        database: ['MySQL'],
        infra: ['Docker'],
        architecture: ['Monolithic']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API'],
      role: 'Backend Software Engineer'
    },
    {
      id: 6,
      title: 'Fundo',
      images: ['project-3.jpg'],
      category: 'system design',
      description: 'A domain-centric platform designed with scalable boundaries, event-driven communication, and reliable data consistency patterns.',
      modulesWorked: ['Service boundary design', 'Event workflow design', 'Performance optimization'],
      techStack: {
        backend: ['Spring Boot', 'Microservices'],
        frontend: ['Angular'],
        database: ['PostgreSQL', 'Redis'],
        infra: ['AWS EC2', 'Nginx'],
        architecture: ['Microservices- total 12 services']
      },
      toolsUsed: ['Draw.io', 'JIRA', 'GitHub'],
      role: 'Software Engineer'
    },
    {
      id: 7,
      title: 'Brawlhalla',
      images: ['project-4.png'],
      category: 'cloud',
      description: 'A cloud-oriented deployment architecture with environment isolation, monitoring, and cost-aware scaling strategies.',
      modulesWorked: ['Cloud environment setup', 'Deployment pipeline', 'Monitoring baseline'],
      techStack: {
        backend: ['Spring Boot'],
        frontend: ['Angular'],
        database: ['RDS'],
        infra: ['AWS VPC', 'AWS EC2', 'AWS IAM'],
        architecture: ['Cloud-Native']
      },
      toolsUsed: ['CloudFormation', 'Jenkins', 'Grafana'],
      role: 'Cloud and Backend Engineer'
    },
    {
      id: 8,
      title: 'DSM.',
      images: ['project-5.png'],
      category: 'system design',
      description: 'A workflow platform optimized for maintainability with clear module decomposition and production-ready architecture patterns.',
      modulesWorked: ['Architecture planning', 'Service contracts', 'Data flow mapping'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['PostgreSQL'],
        infra: ['Docker', 'Linux'],
        architecture: ['Monolithic']
      },
      toolsUsed: ['JIRA', 'GitLab', 'SonarQube'],
      role: 'Software Engineer'
    },
    {
      id: 9,
      title: 'MetaSpark',
      images: ['project-6.png'],
      category: 'system design',
      description: 'An enterprise-grade application where I contributed to scalable design decisions and robust API orchestration.',
      modulesWorked: ['API orchestration', 'Caching strategy', 'Design reviews'],
      techStack: {
        backend: ['Spring Boot', 'Kafka'],
        frontend: ['Angular'],
        database: ['MySQL', 'Redis'],
        infra: ['Docker', 'Kubernetes']
      },
      toolsUsed: ['Jenkins', 'Prometheus', 'Grafana'],
      role: 'Backend Software Engineer'
    },
    {
      id: 10,
      title: 'Task Manager',
      images: ['project-8.jpg'],
      category: 'devops',
      description: 'A delivery-focused project where I worked on CI/CD automation, deployment reliability, and operational visibility.',
      modulesWorked: ['CI/CD pipeline', 'Containerized deployment', 'Runtime monitoring'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['MySQL'],
        infra: ['Jenkins', 'Docker', 'Kubernetes']
      },
      toolsUsed: ['Prometheus', 'Grafana', 'Linux'],
      role: 'DevOps and Backend Engineer'
    },
    
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'system design',
      categoryLabel: 'System Design',
      image: 'blog-1.jpg',
      alt: 'Design conferences in 2022',
      datetime: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      tag: ['Kubernetes'],
      title: 'Design conferences in 2022',
      description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      id: 2,
      category: 'backend',
      categoryLabel: 'Backend',
      image: 'blog-2.jpg',
      alt: 'Best fonts every designer',
      datetime: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      tag: ['Kubernetes'],
      title: 'Best fonts every designer',
      description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      id: 3,
      category: 'database',
      categoryLabel: 'Database',
      image: 'blog-3.jpg',
      alt: 'Design digest #80',
      datetime: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      tag: ['Kubernetes'],
      title: 'Design digest #80',
      description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
      id: 4,
      category: 'cloud',
      categoryLabel: 'Cloud',
      image: 'blog-4.jpg',
      alt: 'UI interactions of the week',
      datetime: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      tag: ['Kubernetes'],
      title: 'UI interactions of the week',
      description: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
      id: 5,
      category: 'devops',
      categoryLabel: 'DevOps',
      image: 'blog-5.jpg',
      alt: 'The forgotten art of spacing',
      datetime: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      tag: ['Kubernetes'],
      title: 'The forgotten art of spacing',
      description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 6,
      category: 'backend',
      categoryLabel: 'Backend',
      image: 'blog-6.jpg',
      alt: 'Design digest #79',
      datetime: '2022-02-23',
      displayDate: 'Fab 23, 2022',
      tag: ['Kubernetes'],
      title: 'Design digest #79',
      description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
  ];

  get sortedProjects(): ProjectItem[] {
    return [...this.projects].sort((a, b) => a.id - b.id);
  }

  get filteredBlogPosts(): BlogPost[] {
    return this.blogPosts.filter((post) => this.isBlogCategoryVisible(post.category));
  }

  getProjectPrimaryImage(project: ProjectItem): string {
    return project.images[0] || 'project-1.jpg';
  }

  getProjectImagePath(imageName: string): string {
    return `./assets/images/${imageName}`;
  }

  getBlogImagePath(imageName: string): string {
    return `./assets/images/${imageName}`;
  }

  ngOnInit(): void {
    this.updateBangladeshDateTime();
    this.bangladeshClockIntervalId = setInterval(() => this.updateBangladeshDateTime(), 1000);

    this.seasonName = this.getSeasonName(new Date());
    void this.fetchDhakaWeather();
    this.weatherRefreshIntervalId = setInterval(() => {
      void this.fetchDhakaWeather();
    }, 10 * 60 * 1000);
  }

  ngOnDestroy(): void {
    if (this.bangladeshClockIntervalId) {
      clearInterval(this.bangladeshClockIntervalId);
    }

    if (this.weatherRefreshIntervalId) {
      clearInterval(this.weatherRefreshIntervalId);
    }
  }

  toggleSidebar() {
    const sidebar = document.querySelector('[data-sidebar]');
    sidebar?.classList.toggle('active');
  }

  showPage(page: 'home' | 'about' | 'portfolio' | 'blog' | 'contact'): void {
    this.activePage = page;
  }

  setPortfolioFilter(filter: PortfolioFilter): void {
    this.activePortfolioFilter = filter;
  }

  isPortfolioCategoryVisible(category: PortfolioCategory): boolean {
    return this.activePortfolioFilter === 'all' || this.activePortfolioFilter === category;
  }

  openProjectModal(project: ProjectItem): void {
    this.selectedProject = project;
    this.activeProjectImage = this.getProjectPrimaryImage(project);
  }

  closeProjectModal(): void {
    this.selectedProject = null;
    this.activeProjectImage = null;
  }

  setActiveProjectImage(imageName: string): void {
    this.activeProjectImage = imageName;
  }

  getActiveProjectImage(project: ProjectItem): string {
    return this.activeProjectImage || this.getProjectPrimaryImage(project);
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.selectedProject) {
      this.closeProjectModal();
    }
  }

  setBlogFilter(filter: BlogFilter): void {
    this.activeBlogFilter = filter;
  }

  isBlogCategoryVisible(category: BlogCategory): boolean {
    return this.activeBlogFilter === 'all' || this.activeBlogFilter === category;
  }

  private updateBangladeshDateTime(): void {
    const now = new Date();
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Dhaka',
      weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    this.bangladeshTime = timeFormatter.format(now);
    this.bangladeshDate = dateFormatter.format(now);
    this.seasonName = this.getSeasonName(now);
  }

  private async fetchDhakaWeather(): Promise<void> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka,bd&appid=${this.apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Weather request failed with status ${response.status}`);
      }

      const data = await response.json() as {
        weather?: Array<{
          main?: string;
          description?: string;
          icon?: string;
        }>;
        main?: {
          temp?: number;
          feels_like?: number;
        };
      };

      const temperature = data.main?.temp;
      const feelsLike = data.main?.feels_like;
      const weatherMain = data.weather?.[0]?.main;
      const weatherDescription = data.weather?.[0]?.description;
      const weatherIconCode = data.weather?.[0]?.icon;

      if (typeof temperature === 'number') {
        this.weatherTemperatureC = this.toCelsiusFromKelvin(temperature);
      }

      if (typeof feelsLike === 'number') {
        this.weatherFeelsLikeC = this.toCelsiusFromKelvin(feelsLike);
      }

      if (weatherMain || weatherDescription || weatherIconCode) {
        const weatherInfo = this.mapOpenWeatherCondition(weatherMain, weatherDescription, weatherIconCode);
        this.weatherCondition = weatherInfo.label;
        this.weatherIconName = weatherInfo.icon;
      }

      this.weatherError = null;
    } catch (error) {
      console.error('Failed to load Dhaka weather data.', error);
      this.weatherTemperatureC = null;
      this.weatherFeelsLikeC = null;
      this.weatherError = 'Weather data is temporarily unavailable.';
      this.weatherCondition = 'Unknown condition';
      this.weatherIconName = 'cloudy-outline';
    }
  }

  private toCelsiusFromKelvin(kelvin: number): number {
    return kelvin - 273.15;
  }

  private mapOpenWeatherCondition(
    weatherMain?: string,
    weatherDescription?: string,
    weatherIconCode?: string
  ): { label: string; icon: string } {
    const normalizedMain = (weatherMain || '').toLowerCase();
    const normalizedDescription = (weatherDescription || '').toLowerCase();
    const isDay = weatherIconCode?.endsWith('d') ?? true;

    if (normalizedMain === 'thunderstorm') {
      return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Thunderstorm'), icon: 'thunderstorm-outline' };
    }

    if (normalizedMain === 'drizzle' || normalizedMain === 'rain') {
      return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Raining'), icon: 'rainy-outline' };
    }

    if (normalizedMain === 'snow') {
      return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Snow'), icon: 'snow-outline' };
    }

    if (normalizedMain === 'mist' || normalizedMain === 'smoke' || normalizedMain === 'haze' || normalizedMain === 'fog') {
      return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Foggy'), icon: 'cloudy-outline' };
    }

    if (normalizedMain === 'clear') {
      return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Sunny'), icon: isDay ? 'sunny-outline' : 'moon-outline' };
    }

    if (normalizedMain === 'clouds' || normalizedDescription.includes('cloud')) {
      return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Cloudy'), icon: isDay ? 'partly-sunny-outline' : 'cloudy-night-outline' };
    }

    return { label: this.toDisplayLabel(weatherDescription || weatherMain || 'Cloudy'), icon: 'cloudy-outline' };
  }

  private toDisplayLabel(text: string): string {
    return text
      .split(' ')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ');
  }

  private getSeasonName(date: Date): string {
    const monthInDhaka = Number(
      new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dhaka', month: 'numeric' }).format(date)
    );

    if (monthInDhaka >= 3 && monthInDhaka <= 5) {
      return 'Summer';
    }

    if (monthInDhaka >= 6 && monthInDhaka <= 9) {
      return 'Monsoon';
    }

    if (monthInDhaka >= 10 && monthInDhaka <= 11) {
      return 'Autumn';
    }

    return 'Winter';
  }
}