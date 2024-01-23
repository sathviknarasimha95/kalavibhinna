import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { ConactUsComponent } from './conact-us/conact-us.component';
import { ProjectService } from './services/project.service';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'about-us', component: AboutComponent
  },
  {
    path: 'projects', component: ProjectsComponent 
  },
  {
    path: 'project', component: ProjectComponent
  },
  {
    path: 'contact-us', component: ConactUsComponent
  }
]

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectComponent,
    ConactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  providers: [
    ProjectService
  ]
})
export class PagesModule { }
