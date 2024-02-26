import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/shared/skills-list.model';

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

}
