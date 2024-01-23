import { Component } from '@angular/core';
import { Project } from '../../components/image-grid/image-grid.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor() {
    
  }
  ongoingProjects: Project[] = [
    {
      projectId: 1,
      projectName: 'Anup Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-1.jpg'
    },
    {
      projectId: 2,
      projectName: 'Ronel Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-2.jpg'
    },
    {
      projectId: 3,
      projectName: 'Alpine School',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-3.jpg'
    },
    {
      projectId: 4,
      projectName: 'Ranganath Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-4.jpg'
    },
    {
      projectId: 5,
      projectName: 'Ranganath Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-4.jpg'
    }
  ]

  completedProjects: Project[] = [
    {
      projectId: 6,
      projectName: 'Anup Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-5.jpg'
    },
    {
      projectId: 7,
      projectName: 'Ronel Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-6.jpg'
    },
    {
      projectId: 8,
      projectName: 'Alpine School',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-7.jpg'
    },
    {
      projectId: 9,
      projectName: 'Ranganath Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-8.jpg'
    },
    {
      projectId: 10,
      projectName: 'Ranganath Residence',
      projectDesc: '',
      projectDisplayImage: 'assets/projects-8.jpg'
    }
  ]
}
