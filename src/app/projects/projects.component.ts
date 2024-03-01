import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectList } from 'src/shared/models/project.interface';
import { CurrentsService } from 'src/services/currents.service';

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;
  public projectList: ProjectList = new ProjectList();

  private subscription: Subscription = new Subscription();
  
  constructor(private currentsService: CurrentsService) { }

  public ngOnInit() {
    this.subscription = this.currentsService.getIsMobile().subscribe((bool) => {
      this.isMobile = bool;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
