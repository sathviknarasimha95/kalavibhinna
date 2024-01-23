import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from './image-grid.model';
import { Paginator } from './image-grid-paginator';

@Component({
  selector: 'kv-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss'
})
export class ImageGridComponent implements OnInit {
    @Input() projects: Project[] = []
    @Output() onClick: EventEmitter<Project> | undefined;
    paginator: Paginator | undefined;
    public currentPageItems: Project[] | undefined = []

    ngOnInit(): void {
      this.paginator = new Paginator(this.projects, 4);
      this.currentPageItems = this.paginator.getCurrentPageData();
    }

    public onNextClick() {
      this.currentPageItems = this.paginator?.nextPage();
    }

    public onPreviousClick(): void {
      this.currentPageItems = this.paginator?.prevPage()
    }

    public onImageClick(project: Project) {
      this.onClick?.emit(project);
    }

}
