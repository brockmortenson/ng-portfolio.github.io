import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentsService } from 'src/services/currents.service';
import { Button, Buttons } from 'src/shared/button.interface';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;
  public email: string = '246szdkrc@mozmail.com';
  public contactButtons: Buttons = new Buttons();

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

  public sendEmail(): void {
    // window.location.href = 
    // mailto
  }
  
}
