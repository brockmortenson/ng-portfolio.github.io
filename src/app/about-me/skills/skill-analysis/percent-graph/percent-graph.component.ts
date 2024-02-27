import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/shared/skills-list.model';

@Component({
  selector: 'percent-graph-component',
  templateUrl: './percent-graph.component.html',
  styleUrls: ['./percent-graph.component.scss'],
})
export class PercentGraphComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skill!: Skill;

  constructor() { }

  public ngOnInit() {
  }

}
