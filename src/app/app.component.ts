import { Component } from '@angular/core';

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

  constructor(){
  
    window.addEventListener('scroll', function() {
      let scrollPosition = window.scrollY;
    
      if (scrollPosition < 500) {
        document.body.style.backgroundImage = "url('assets/2.jpg')";
        document.body.style.backgroundSize = "100% auto";
      } else if (scrollPosition >= 500 && scrollPosition < 1000) {
        document.body.style.backgroundImage = "url('assets/blue.jpg')";
        document.body.style.backgroundSize = "100% auto";
      } else {
        document.body.style.backgroundImage = "url('assets/end.jpg')";
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
MyHome(){
  this.home = true
  this.activeTab = "home";
}
professionaltab(){
  this.professional = true
  this.activeTab = 'professional'
}
experinceTab(){
 this.expience = true;
 this.activeTab = 'experience'
}
projectTab(){
  this.project = true;
   this.activeTab = 'project'
}
contactTab(){
this.contact = true;
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
