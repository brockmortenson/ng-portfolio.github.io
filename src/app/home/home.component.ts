import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentsService } from 'src/services/currents.service';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
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
