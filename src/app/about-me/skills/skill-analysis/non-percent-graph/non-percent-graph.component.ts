import { Component, Input, OnInit } from '@angular/core';
import { Skill, SkillAttribute } from 'src/shared/skills-list.model';

@Component({
  selector: 'non-percent-graph-component',
  templateUrl: './non-percent-graph.component.html',
  styleUrls: ['./non-percent-graph.component.scss'],
})
export class NonPercentGraphComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skill!: Skill;

  public skillAttributes: Array<SkillAttribute> = [];

  constructor() { }

  public ngOnInit() {
    this.skillAttributes = this.skill.skillAttributes.filter((x) => !x.graphAsPercent);
  }

}
