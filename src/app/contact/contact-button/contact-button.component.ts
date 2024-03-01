import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/shared/models/button.interface';

@Component({
  selector: 'contact-button-component',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
})
export class ContactButtonComponent implements OnInit {
  @Input() public isMobile: boolean = false;
  @Input() public button!: Button;

  constructor() { }

  public ngOnInit() {
  }

  public route(url: string): void {
    window.open(url, '_blank');
  }

}
