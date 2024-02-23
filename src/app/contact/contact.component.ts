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
  public email: string = '246szdkrc@mozmail.com';
  public buttons: Array<Button> = [
    {
      imageSrc: 'https://vectorified.com/images/email-icon-white-transparent-35.png',
      hasBorder: false,
      url: 'mailto:246szdkrc@mozmail.com',
      name: '<email-me/>',
    },
    {
      imageSrc: '../../assets/images/white-linkedin-icon.jpg',
      hasBorder: true,
      url: 'https://www.linkedin.com/in/brock-mortenson-webdev/',
      name: '<linkedin/>',
    },
    {
      imageSrc: '../../assets/images/github-icon-png-white.png',
      hasBorder: false,
      url: 'https://github.com/brockmortenson',
      name: '<github/>',
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

  public sendEmail(): void {
    // window.location.href = 
    // mailto
  }
  
}
