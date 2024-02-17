import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public size: number = 12;
  public clicks: number = 0;
  public hidden: boolean = false;

  constructor() { }

  public ngOnInit() {
  }

  public increaseSize(): void {
    this.clicks++;
    if (this.clicks === 10) {
      this.size = 12;
      this.hidden = true;
      return;
    }
    
    this.size += 8;
  }

}
