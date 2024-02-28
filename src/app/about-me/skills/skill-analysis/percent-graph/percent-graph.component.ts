import { Component, Input, OnInit } from '@angular/core';
import { Skill, SkillAttribute } from 'src/shared/skills-list.model';

@Component({
  selector: 'percent-graph-component',
  templateUrl: './percent-graph.component.html',
  styleUrls: ['./percent-graph.component.scss'],
})
export class PercentGraphComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skill!: Skill;

  public skillAttributes: Array<SkillAttribute> = [];

  constructor() { }

  public ngOnInit() {
    this.skillAttributes = this.skill.skillAttributes.filter((x) => x.graphAsPercent);
  }

}
