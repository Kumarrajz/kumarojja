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
    { name: 'HTML5', percentage: 90},
    { name: 'CSS', percentage: 90},
    { name: 'Bootstrap 3,4,5', percentage: 90},
    { name: 'Node.js', percentage: 90},
    { name: 'Express.js', percentage: 90},
    { name: 'Koa.js', percentage: 90},
    { name: 'Rx.js', percentage: 90},
    { name: 'MongoDb', percentage: 80},
    { name: 'mySql', percentage: 70},
    { name: 'Oracle', percentage: 70},

  ];
  // experinceTab = false;

  downloadPDF(){
    const link = document.createElement('a');
    link.href = 'assets/kumarOjja.pdf'; 
    link.download = 'kumarOjja.pdf';
    link.click();
  }

}
