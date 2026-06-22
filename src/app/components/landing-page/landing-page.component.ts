import { Component } from '@angular/core';

type PortfolioCategory = 'system design' | 'cloud' | 'devops' | 'backend engineering';
type PortfolioFilter = 'all' | PortfolioCategory;

interface ProjectTechStack {
  backend: string[];
  frontend: string[];
  database: string[];
  infra: string[];
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

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Welcome to the Coaching Center Management System';
  currentYear = new Date().getFullYear();
  activePage: 'home' | 'about' | 'portfolio' | 'blog' | 'contact' = 'home';
  activePortfolioFilter: PortfolioFilter = 'all';
  activeBlogFilter: 'all' | 'system design' | 'backend' | 'database' | 'cloud' | 'devops' = 'all';
  selectedProject: ProjectItem | null = null;

  projects: ProjectItem[] = [


    {
      id: 3,
      title: 'Fundo',
      images: ['project-3.jpg'],
      category: 'system design',
      description: 'A domain-centric platform designed with scalable boundaries, event-driven communication, and reliable data consistency patterns.',
      modulesWorked: ['Service boundary design', 'Event workflow design', 'Performance optimization'],
      techStack: {
        backend: ['Spring Boot', 'Microservices'],
        frontend: ['Angular'],
        database: ['PostgreSQL', 'Redis'],
        infra: ['AWS EC2', 'Nginx']
      },
      toolsUsed: ['Draw.io', 'JIRA', 'GitHub'],
      role: 'Software Engineer'
    },
    {
      id: 4,
      title: 'Brawlhalla',
      images: ['project-4.png'],
      category: 'cloud',
      description: 'A cloud-oriented deployment architecture with environment isolation, monitoring, and cost-aware scaling strategies.',
      modulesWorked: ['Cloud environment setup', 'Deployment pipeline', 'Monitoring baseline'],
      techStack: {
        backend: ['Spring Boot'],
        frontend: ['Angular'],
        database: ['RDS'],
        infra: ['AWS VPC', 'AWS EC2', 'AWS IAM']
      },
      toolsUsed: ['CloudFormation', 'Jenkins', 'Grafana'],
      role: 'Cloud and Backend Engineer'
    },
    {
      id: 5,
      title: 'DSM.',
      images: ['project-5.png'],
      category: 'system design',
      description: 'A workflow platform optimized for maintainability with clear module decomposition and production-ready architecture patterns.',
      modulesWorked: ['Architecture planning', 'Service contracts', 'Data flow mapping'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['PostgreSQL'],
        infra: ['Docker', 'Linux']
      },
      toolsUsed: ['JIRA', 'GitLab', 'SonarQube'],
      role: 'Software Engineer'
    },
    {
      id: 6,
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
      id: 8,
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
    {
      id: 10,
      title: 'Muslim El',
      images: ['projects/muslim-el.png'],
      category: 'backend engineering',
      description: 'Muslim El is a community communication platform for Muslims in Finland, originally developed by the Dhaka-based company Sweet iTech.',
      modulesWorked: ['Admin panel'],
      techStack: {
        backend: ['Java', 'Spring Boot', 'REST API'],
        frontend: ['Angular'],
        database: ['MySQL'],
        infra: ['Docker']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API'],
      role: 'Backend Software Engineer'
    },
    {
      id: 11,
      title: 'SwostiMFI',
      images: ['projects/mfi.png', 'projects/mfi-features.png'],
      category: 'backend engineering',
      description: 'SwostiMFI is a digital microfinance platform used by local NGOs in Bangladesh to manage loan disbursement, EMI-based weekly and monthly collections, and community savings operations for rural members.',
      modulesWorked: ['Loan management', 'Savings and group collection', 'Repayment scheduling and tracking', 'Digital reporting'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Vue.js'],
        database: ['PostgreSQL'],
        infra: ['AWS']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API'],
      role: 'Backend Software Engineer'
    },
    {
      id: 12,
      title: 'BGB Hospital HMIS Application',
      images: ['projects/somch.png'],
      category: 'backend engineering',
      description: 'A hospital management platform for Border Guard Bangladesh (BGB) to manage patient workflows, prescriptions, pharmacy, OPD, and IPD across five hospitals, including border and central paramilitary facilities.',
      modulesWorked: ['Patient management', 'Prescription and pharmacy flow', 'OPD and IPD services', 'Doctor workflow support'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['PostgreSQL'],
        infra: ['Docker', 'Kubernetes', 'Jenkins']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API', 'Angular'],
      role: 'Backend Software Engineer'
    },
    {
      id: 13,
      title: 'MAG Osmani Hospital HMIS Application',
      images: ['projects/somch.png'],
      category: 'backend engineering',
      description: 'Developed a comprehensive HMIS solution integrated with the national NID gateway for digital patient registration, including OPD, IPD, prescription, and pharmacy modules. The solution is in pilot rollout at MAG Osmani Medical College Hospital with expansion planned for government hospitals nationwide.',
      modulesWorked: ['NID gateway integration', 'Patient registration and identity flow', 'OPD and IPD modules', 'Prescription and pharmacy modules'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['PostgreSQL'],
        infra: ['Docker', 'Kubernetes', 'Jenkins']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API', 'Angular'],
      role: 'Backend Software Engineer'
    },
    {
      id: 14,
      title: 'Pocketalk Ventana Console',
      images: ['projects/pocketalk.png'],
      category: 'backend engineering',
      description: 'Pocketalk Ventana Console is an operational platform used to manage translation devices through location tracking, device settings, usage history, and data import/export workflows for education and travel use cases in Japan.',
      modulesWorked: ['Device management API', 'Settings and policy management', 'Usage history and reporting', 'Data import/export service'],
      techStack: {
        backend: ['Java', 'Spring Boot'],
        frontend: ['Angular'],
        database: ['MySQL'],
        infra: ['Docker', 'Kubernetes', 'Jenkins', 'GCP']
      },
      toolsUsed: ['Java', 'Spring Boot', 'REST API'],
      role: 'Backend Software Engineer'
    }
  ];

  getProjectPrimaryImage(project: ProjectItem): string {
    return project.images[0] || 'project-1.jpg';
  }

  getProjectImagePath(imageName: string): string {
    return `./assets/images/${imageName}`;
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

  openProjectModal(project: ProjectItem, event?: Event): void {
    event?.preventDefault();
    this.selectedProject = project;
  }

  closeProjectModal(): void {
    this.selectedProject = null;
  }

  setBlogFilter(filter: 'all' | 'system design' | 'backend' | 'database' | 'cloud' | 'devops'): void {
    this.activeBlogFilter = filter;
  }

  isBlogCategoryVisible(category: 'system design' | 'backend' | 'database' | 'cloud' | 'devops'): boolean {
    return this.activeBlogFilter === 'all' || this.activeBlogFilter === category;
  }
}