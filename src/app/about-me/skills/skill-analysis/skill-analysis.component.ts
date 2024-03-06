import { Component, Input, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Skill, SkillAttribute } from 'src/shared/models/skills-list.model';

@Component({
  selector: 'skill-analysis-component',
  templateUrl: './skill-analysis.component.html',
  styleUrls: ['./skill-analysis.component.scss'],
})
export class SkillAnalysisComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public selection = new SelectionModel<Skill>(true, []);

  constructor() { }

  public ngOnInit() {
  }

  public filterSkillAttributes(skill: Skill, isPercentGraph: boolean): Array<SkillAttribute> {
    let attributes = [];
    if (isPercentGraph) {
      attributes = skill.skillAttributes.filter((x) => x.graphAsPercent);
      return attributes;
    } else {
      attributes =  skill.skillAttributes.filter((x) => !x.graphAsPercent);
      return attributes;
    }
  }

}
