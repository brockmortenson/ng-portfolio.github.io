import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentsService } from 'src/services/currents.service';
import { Button } from 'src/shared/button.interface';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  public isMobile: boolean = false;
  public buttons: Array<Button> = [
    {
      imageSrc: '../../assets/images/github-icon-png-white.png',
      hasBorder: false,
      url: 'https://github.com/brockmortenson',
      name: '<github/>',
    },
    {
      imageSrc: '../../assets/images/white-linkedin-icon.jpg',
      hasBorder: true,
      url: 'https://www.linkedin.com/in/brock-mortenson-webdev/',
      name: '<linkedin/>',
    },
  ];

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
