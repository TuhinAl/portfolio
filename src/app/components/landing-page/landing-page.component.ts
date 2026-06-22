import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Welcome to the Coaching Center Management System';
  currentYear = new Date().getFullYear();
  activePage: 'home' | 'about' | 'portfolio' | 'blog' | 'contact' = 'home';
  activePortfolioFilter: 'all' | 'system design' | 'cloud' | 'devops' | 'backend engineering' = 'all';
  activeBlogFilter: 'all' | 'system design' | 'backend' | 'database' | 'cloud' | 'devops' = 'all';

  toggleSidebar() {
    const sidebar = document.querySelector('[data-sidebar]');
    sidebar?.classList.toggle('active');
  }

  showPage(page: 'home' | 'about' | 'portfolio' | 'blog' | 'contact'): void {
    this.activePage = page;
  }

  setPortfolioFilter(filter: 'all' | 'system design' | 'cloud' | 'devops' | 'backend engineering'): void {
    this.activePortfolioFilter = filter;
  }

  isPortfolioCategoryVisible(category: 'system design' | 'cloud' | 'devops' | 'backend engineering'): boolean {
    return this.activePortfolioFilter === 'all' || this.activePortfolioFilter === category;
  }

  setBlogFilter(filter: 'all' | 'system design' | 'backend' | 'database' | 'cloud' | 'devops'): void {
    this.activeBlogFilter = filter;
  }

  isBlogCategoryVisible(category: 'system design' | 'backend' | 'database' | 'cloud' | 'devops'): boolean {
    return this.activeBlogFilter === 'all' || this.activeBlogFilter === category;
  }
}