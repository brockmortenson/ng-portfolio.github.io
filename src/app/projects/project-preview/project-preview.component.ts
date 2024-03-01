import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectType } from 'src/shared/models/project.interface';

@Component({
  selector: 'project-preview-component',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent implements OnInit {
  @Input() public isMobile!: boolean;
  @Input() public project!: Project;

  public ProjectType = ProjectType;

  constructor() { }

  public ngOnInit() {
  }

}
