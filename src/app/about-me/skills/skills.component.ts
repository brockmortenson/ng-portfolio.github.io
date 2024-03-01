import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill, SkillsList } from 'src/shared/models/skills-list.model';

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

  constructor(private cdr: ChangeDetectorRef) { }

  public ngOnInit() {
  }

  public toggleSkills(): void {
    this.toggleSkillsEvent.emit(true);
  }

  public setCurrentSkill(skill: Skill): void {
    if (this.currentSkill === skill) {
      return;
    }

    this.currentSkill = null; // <-- Required for
    this.cdr.detectChanges(); // graph animation -->

    this.currentSkill = skill;
  }

}
