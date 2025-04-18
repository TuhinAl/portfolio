import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  title = 'Welcome to the Coaching Center Management System';
  toggleSidebar() {
    const sidebar = document.querySelector('[data-sidebar]');
    sidebar?.classList.toggle('active');
  }

  // Add this function if it doesn't already exist
  loadPage(page: string): void {
    const articles = document.querySelectorAll('article[data-page]');
    articles.forEach(article => {
      if (article.getAttribute('data-page') === page) {
        article.classList.add('active');
      } else {
        article.classList.remove('active');
      }
    });
  }
}