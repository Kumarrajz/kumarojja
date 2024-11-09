import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  // professionaltab = false;
  // experinceTab = false;
  MYNAME = "KUMAR OJJA";
  myRole = "MEAN STACK & WEB DEVELOPER";
  home = true;
  selection: any;
  professional: boolean = false;
  contact: boolean= false;
  expience = false;
  activeTab: string = 'home';
  project=  false;
  navOpen = false;

  constructor(){
  
    window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY;
    
      if (scrollPosition < 500) {
        document.body.style.backgroundImage = "url('assets/2.jpg')";
        document.body.style.backgroundSize = "100% auto";
      } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        document.body.style.backgroundColor = "black";
        // document.body.style.backgroundImage = "url('assets/blue.jpg')";
        document.body.style.backgroundSize = "100% auto";
      } else {
        // document.body.style.backgroundImage = "url('assets/end.jpg')";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundSize = "100% auto";
      }
    });

  
    
  }
  

ngOnInit(): void{
  document.getElementById('one')?.addEventListener('click', function() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('two')?.addEventListener('click', function() {
    document.getElementById('skill')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('three')?.addEventListener('click', function() {
    document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('four')?.addEventListener('click', function() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }); 

}
toggleNav() {
  console.log("sdfgjk")
  this.navOpen = !this.navOpen;
}
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  if (window.innerWidth >= 992) {  // Bootstrap breakpoint for medium screens (md)
    this.navOpen = false;  // Close the menu on desktop view
  }
}
MyHome(){
  this.home = true,
  this.professional = false
  this.expience = false;
  this.project = false;
  this.contact = false;
  this.activeTab = "home";
}
professionaltab(){
  this.professional = true,
  this.home = false,
  this.expience = false;
  this.project = false;
  this.contact = false;
  this.activeTab = 'professional'
}
experinceTab(){
  this.expience = true;
  this.home = false;
  this.professional = false;
  this.project = false;
  this.contact = false;
 this.activeTab = 'experience'
}
projectTab(){
  this.project = true;
  this.expience = false;
  this.professional = false
  this.contact = false;
  this.home = false,
   this.activeTab = 'project'
}
contactTab(){
this.contact = true;
this.project = false;
this.expience = false;
this.professional = false;
this.home = false,
  this.activeTab = 'contact'
}
downloadPDF(){
  const link = document.createElement('a');
  link.href = 'assets/kumarOjja.pdf'; 
  link.download = 'kumarOjja.pdf';
  link.click();
}
setActiveTab(tab: string) {
  this.activeTab = tab;
}

}
