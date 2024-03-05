import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-suggestion-component',
  templateUrl: './mobile-suggestion.component.html',
  styleUrls: ['./mobile-suggestion.component.scss'],
})
export class MobileSuggestionComponent implements OnInit {
  @Input() gradient!: string;

  constructor() { }

  public ngOnInit() {
  }

}
