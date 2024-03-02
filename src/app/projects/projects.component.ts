import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project, ProjectList, ProjectType } from 'src/shared/models/project.interface';
import { CurrentsService } from 'src/services/currents.service';

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;
  public projectList: ProjectList = new ProjectList();
  public projectNumbers: Array<number> = [];
  public currentProject: Project = {
    embed: '',
    name: '',
    description: '',
    projectType: ProjectType.Personal,
    readMore: false,
  };

  private subscription: Subscription = new Subscription();
  
  constructor(private currentsService: CurrentsService) { }

  public ngOnInit() {
    this.subscription = this.currentsService.getIsMobile().subscribe((bool) => {
      this.isMobile = bool;
      this.handleProjectMobileView(0);
    });

    this.setProjectNumber();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public handleProjectMobileView(index: number): void {
    if (this.isMobile) {
      this.currentProject = this.projectList.projects[index];
    }
  }

  public next(): void {
    let index = this.getIndex();

    if (index >= 0) {
      if (index === this.projectList.projects.length - 1) {
        index = -1;
      }

      this.currentProject = this.projectList.projects[index + 1];
    }
  }

  public back(): void {
    let index = this.getIndex();

    if (index >= 0) {
      if (index === 0) {
        index = this.projectList.projects.length;
      }

      this.currentProject = this.projectList.projects[index - 1];
    }
  }

  public goToProject(index: number): void {
    this.currentProject = this.projectList.projects[index - 1];
  }

  public currentProjectIsCurrentIndex(index: number): boolean {
    const projectIndex = this.projectList.projects.indexOf(this.currentProject);

    if (projectIndex >= 0 && projectIndex === (index - 1)) {
      return true;
    }

    return false;
  }

  private getIndex(): number {
    return this.projectList.projects.indexOf(this.currentProject);
  }

  private setProjectNumber(): void {
    this.projectList.projects.forEach((x, i) => {
      this.projectNumbers.push(i + 1);
    });
  }

}
