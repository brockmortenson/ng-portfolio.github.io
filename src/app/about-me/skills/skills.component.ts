import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill, SkillsList } from 'src/shared/skills-list.model';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Output() toggleSkillsEvent = new EventEmitter<boolean>();
  @Input() public isMobile: boolean = false;

  public skillsList: SkillsList = new SkillsList();
  public currentSkill: Skill | null = null;

  constructor() { }

  public ngOnInit() {
  }

  public toggleSkills(): void {
    this.toggleSkillsEvent.emit(true);
  }

  public setCurrentSkill(skill: Skill): void {
    if (this.currentSkill === skill) {
      return;
    }

    this.currentSkill = skill;
  }

}
