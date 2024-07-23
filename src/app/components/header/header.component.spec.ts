import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {

    // Mocking methods which are not implemented in JSDOM :: => https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply theme preference', () => {
    localStorage.setItem('theme', 'dark');
    component.applyThemePreference();
    expect(component.darkMode).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    localStorage.setItem('theme', 'light');
    component.applyThemePreference();
    expect(component.darkMode).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should toggle dark mode', () => {
    component.darkMode = false;
    component.toggleDarkMode();
    expect(component.darkMode).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    component.toggleDarkMode();
    expect(component.darkMode).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should initialize with correct theme', () => {
    const applyThemePreferenceSpy = jest.spyOn(component, 'applyThemePreference');
    component.ngOnInit();
    expect(applyThemePreferenceSpy).toHaveBeenCalled();
  });
});
