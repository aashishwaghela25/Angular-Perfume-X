import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  menuOpen = false;
  accountOpen = false;
  openDropdown: string | null = null;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
    this.accountOpen = false;
    if (!this.menuOpen) this.openDropdown = null;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    this.openDropdown = null;
    document.body.style.overflow = '';
  }

  toggleDropdown(name: string) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  toggleAccount(event: Event) {
    event.stopPropagation();
    this.accountOpen = !this.accountOpen;
  }

  // click anywhere else closes the account menu
  @HostListener('document:click')
  onDocumentClick() {
    this.accountOpen = false;
  }

  // reset sidebar when resizing up to desktop
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 992 && this.menuOpen) this.closeMenu();
  }

  logout() {
    this.accountOpen = false;
    this.closeMenu();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
