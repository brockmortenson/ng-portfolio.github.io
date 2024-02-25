import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Output() toggleSkillsEvent = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit() {
  }

  public toggleSkills(): void {
    this.toggleSkillsEvent.emit(true);
  }

}
