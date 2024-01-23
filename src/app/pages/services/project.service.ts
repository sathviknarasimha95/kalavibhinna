import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../../components/image-grid/image-grid.model';

@Injectable()
export class ProjectService {

  currentProject$ = new Subject<Project>();
  currentProjectUpdated = this.currentProject$.asObservable();

  constructor() { }

  getCurrentProject(): Observable<Project> {
    return this.currentProjectUpdated
  }

  setCurrentProject(project: Project) {
    this.currentProject$.next(project);
  }
}
