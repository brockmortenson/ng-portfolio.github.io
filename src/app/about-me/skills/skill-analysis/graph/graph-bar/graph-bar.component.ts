import { Component, Input, OnInit } from '@angular/core';
import { SkillAttribute } from 'src/shared/skills-list.model';

@Component({
  selector: 'graph-bar-component',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.scss'],
})
export class GraphBarComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public skillAttribute!: SkillAttribute;
  @Input() public skillColor!: string;

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
