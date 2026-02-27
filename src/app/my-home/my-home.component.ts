import { Component } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent {
  MYNAME = "KUMAR OJJA";
  myRole = "AI AGENTS & MULTI-PLATFORM FULL STACK DEVELOPER";
  professionaltab = false;

  skills = [
    { name: 'Angular / React / Vite', percentage: 90 },
    { name: 'Node.js / Express / Koa', percentage: 90 },
    { name: 'Capacitor (Android/iOS)', percentage: 85 },
    { name: 'AI Agents / RAG / Prompt Engineering', percentage: 85 },
    { name: 'JavaScript / TypeScript', percentage: 90 },
    { name: 'HTML5 / CSS / Bootstrap', percentage: 90 },
    { name: 'MongoDB / Oracle / SQL', percentage: 80 },
    { name: 'DevOps (EC2, S3, CloudFront, PM2)', percentage: 85 },
    { name: 'Rx.js', percentage: 90 },
    { name: 'Python / Selenium', percentage: 70 }
  ];

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/kumarOjja.pdf';
    link.download = 'kumarOjja.pdf';
    link.click();
  }
}
