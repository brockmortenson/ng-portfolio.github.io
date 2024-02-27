import { Component, Input, OnInit } from '@angular/core';
import { SkillAttribute } from 'src/shared/skills-list.model';

@Component({
  selector: 'skill-graph-component',
  templateUrl: './skill-graph.component.html',
  styleUrls: ['./skill-graph.component.scss'],
})
export class SkillGraphComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skillAttribute!: SkillAttribute;

  constructor() { }

  public ngOnInit() {
    this.setDocumentStyles();
  }

  public changeAttributeToPercent(): string {
    return !this.skillAttribute.graphAsPercent ? `${this.skillAttribute.level}0%` : `${this.skillAttribute.level}%`;
  }

  private setDocumentStyles(): void {
    const attribute = !this.skillAttribute.graphAsPercent ? `${this.skillAttribute.level}0%` : `${this.skillAttribute.level}%`;
    document.documentElement.style.setProperty(this.skillAttribute.name, attribute);
  }

}
