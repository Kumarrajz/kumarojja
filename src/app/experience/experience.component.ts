import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'Jun 2026 - Present',
      title: 'Consultant & Lead',
      description: 'Working at Vedic Systems (Vedic Mobitech / Pigeon-tech). Leading a team. Researching and orchestrating AI Agents, Coding Agents, and RAG systems. Implementing multi-platform applications using React, Vite, Capacitor (Android/iOS/Web), and Node.js with MongoDB. Handling Full Stack and Prompt Engineering utilizing Antigravity and AI to optimize processes. Managing deployments using EC2 for servers, S3 with CloudFront for web apps & assets, and PM2 for Node.'
    },
    {
      date: 'Nov 2024 - May 2025',
      title: 'Senior Developer & DevOps',
      description: 'Worked at Sharvi Info Tech. Handled direct client requirements, designed architectures, and led a 7-member development team. Managed full DevOps pipelines and server administration.'
    },
    {
      date: 'May 2022 - Present',
      title: 'MEAN Stack Developer',
      description: 'Working as MEAN stack developer, Design dynamic interfaces with Angular and integrate RESTful APIs with Node.js, Express, Sequelize, and JavaScript. Managing Linux environments with NGINX and PM2. Handling database technologies including MongoDB, Oracle, and SQL.'
    },
    {
      date: 'Dec 2022 - Apr 2022',
      title: 'Junior Engineer',
      description: 'Written Pytest, hybrid framework with Python selenium.'
    }
  ];
}
