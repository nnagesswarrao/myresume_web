import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  activeSection: string = '';

  
  menuItems: MenuItem[] = [
    { id: 'summary', label: 'Summary', icon: 'fas fa-user-tie' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-laptop-code' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-tools' },
    { id: 'personal', label: 'Personal Info', icon: 'fas fa-address-card' }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkActiveSection();
  }

  getIconForItem(id: string): string {
    const menuItem = this.menuItems.find(item => item.id === id);
    return menuItem?.icon || 'fas fa-circle';
  }

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  private checkActiveSection() {
    const sections = this.menuItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = this.menuItems[index].id;
        }
      }
    });
  }
}
