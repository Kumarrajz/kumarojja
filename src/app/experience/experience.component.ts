import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'January 2020 - Present',
      title: 'Senior Software Engineer',
      description: 'Developing scalable solutions and managing teams in the tech industry.'
    },
    {
      date: 'June 2017 - December 2019',
      title: 'Software Engineer',
      description: 'Worked on various software projects, focusing on performance and scalability.'
    },
    {
      date: 'July 2015 - May 2017',
      title: 'Junior Developer',
      description: 'Gained foundational skills in web and software development.'
    },
    {
      date: 'August 2013 - June 2015',
      title: 'Intern',
      description: 'First experience in the tech industry, working with experienced developers.'
    }
  ];

}
