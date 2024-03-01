import { Component, Input, OnInit } from '@angular/core';
import { Skill, SkillAttribute } from 'src/shared/models/skills-list.model';

@Component({
  selector: 'skill-analysis-component',
  templateUrl: './skill-analysis.component.html',
  styleUrls: ['./skill-analysis.component.scss'],
})
export class SkillAnalysisComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skill!: Skill;

  constructor() { }

  public ngOnInit() {
  }

  public filterSkillAttributes(isPercentGraph: boolean): Array<SkillAttribute> {
    let attributes = [];
    if (isPercentGraph) {
      attributes = this.skill.skillAttributes.filter((x) => x.graphAsPercent);
      return attributes;
    } else {
      attributes =  this.skill.skillAttributes.filter((x) => !x.graphAsPercent);
      return attributes;
    }
  }

}
