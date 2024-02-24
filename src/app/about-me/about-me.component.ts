import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentsService } from 'src/services/currents.service';

@Component({
  selector: 'about-me-component',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;

  private mobileSubscription: Subscription = new Subscription();

  constructor(private currentsService: CurrentsService) { }

  public ngOnInit() {
    this.mobileSubscription = this.currentsService.getIsMobile().subscribe((bool) => {
      this.isMobile = bool;
    });
  }

  public ngOnDestroy(): void {
    this.mobileSubscription.unsubscribe();
  }

}
