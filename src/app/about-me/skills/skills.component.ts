import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
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
  public isComparing: boolean = false;
  public selection = new SelectionModel<Skill>(true, []);

  constructor() { }

  public ngOnInit() {
  }

  public toggleSkills(): void {
    this.toggleSkillsEvent.emit(true);
  }

  public toggleIsComparing(): void {
    this.isComparing ? this.selection.clear() : null;
    this.isComparing = !this.isComparing;
  }

  public selectionHandler(skill: Skill): void {
    if (this.isComparing) {
      this.selection.toggle(skill);

    } else {
      this.selection.clear();
      this.selection.toggle(skill);
    }
  }

  public findSelected(skill: Skill): boolean {
    const selected = this.selection.selected.indexOf(skill);
    if (selected >= 0) {
      return true;
    }

    return false;
  }

}
