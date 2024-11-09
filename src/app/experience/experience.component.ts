import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'may 2022 - Present',
      title: 'MEAN Stack Developer',
      description: 'Working as MEAN stack developer, Design dynamic interface with Angular and integration and written restful api with Node js express js and Java script, Sequalize, NGINX, PM2 LINUX operating System and the database technologies MongoDB, Oracle, SQL.'
    },
    
    {
      date: 'Dec 2022 - apr 2022',
      title: 'Junior Engineer',
      description: 'Written Pytest, hybrid framework with Python selenium..'
    }
  ];

}
