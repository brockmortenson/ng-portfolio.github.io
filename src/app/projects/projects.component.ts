import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public test = null;
  
  constructor() { }

  public ngOnInit() {
  }

}
