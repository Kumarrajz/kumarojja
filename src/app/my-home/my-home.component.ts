import { Component } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent {
  MYNAME = "KUMAR OJJA";
  myRole = "MEAN STACK & WEB DEVELOPER";
  professionaltab = false;

  skills = [
    { name: 'JavaScript', percentage: 80},
    { name: 'Angular', percentage: 70},
    { name: 'Node.js', percentage: 90}
  ];
  // experinceTab = false;

  downloadPDF(){
    const link = document.createElement('a');
    link.href = 'assets/kumarOjja.pdf'; 
    link.download = 'kumarOjja.pdf';
    link.click();
  }

}
