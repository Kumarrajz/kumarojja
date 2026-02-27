import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myPortfolio';
  MYNAME = "KUMAR OJJA";
  myRole = "AI AGENTS & MULTI-PLATFORM FULL STACK DEVELOPER";

  home = true;
  professional = false;
  expience = false;
  project = false;
  contact = false;

  activeTab: string = 'home';
  navOpen = false;
  isScrolled = false;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if necessary
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth >= 992) {
      this.navOpen = false;
    }
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  MyHome() {
    this.home = true;
    this.professional = false;
    this.expience = false;
    this.project = false;
    this.contact = false;
    this.activeTab = "home";
    this.navOpen = false; // Close mobile nav
  }

  professionaltab() {
    this.professional = true;
    this.home = false;
    this.expience = false;
    this.project = false;
    this.contact = false;
    this.activeTab = 'professional';
    this.navOpen = false;
  }

  experinceTab() {
    this.expience = true;
    this.home = false;
    this.professional = false;
    this.project = false;
    this.contact = false;
    this.activeTab = 'experience';
    this.navOpen = false;
  }

  projectTab() {
    this.project = true;
    this.expience = false;
    this.professional = false;
    this.contact = false;
    this.home = false;
    this.activeTab = 'project';
    this.navOpen = false;
  }

  contactTab() {
    this.contact = true;
    this.project = false;
    this.expience = false;
    this.professional = false;
    this.home = false;
    this.activeTab = 'contact';
    this.navOpen = false;
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/kumarOjja.pdf';
    link.download = 'kumarOjja.pdf';
    link.click();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
