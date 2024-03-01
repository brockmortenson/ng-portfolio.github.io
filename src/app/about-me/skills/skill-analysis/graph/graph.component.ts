import { Component, Input, OnInit } from '@angular/core';
import { SkillAttribute } from 'src/shared/models/skills-list.model';

@Component({
  selector: 'graph-component',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skillAttributes: Array<SkillAttribute> = [];
  @Input() public isPercentGraph!: boolean;
  @Input() public skillColor!: string;

  constructor() { }

  public ngOnInit() {
  }

}
