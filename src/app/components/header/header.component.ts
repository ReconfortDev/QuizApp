import { Component, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  darkMode = false;

  ngOnInit() {
    this.applyThemePreference();
  }

  applyThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.darkMode = true;
      this.updateDarkModeClass(true);
    } else {
      this.darkMode = false;
      this.updateDarkModeClass(false);
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.updateDarkModeClass(this.darkMode);
  }

  private updateDarkModeClass(isDarkMode: boolean) {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
