import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillsList } from 'src/shared/skills-list.model';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Output() toggleSkillsEvent = new EventEmitter<boolean>();

  public skillsList: SkillsList = new SkillsList();

  constructor() { }

  public ngOnInit() {
  }

  public toggleSkills(): void {
    this.toggleSkillsEvent.emit(true);
  }

}
