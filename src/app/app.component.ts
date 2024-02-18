import { KeyValue } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Routes } from 'src/shared/routes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'portfolio';
  public gradient: string = '';
  public shouldReset: boolean = false;
  public routes: Routes = new Routes();
  public currentUrl: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      ).subscribe((event: any) => {
        this.currentUrl = event.url;
        this.setBackgroundGradient(event.url);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public routeTo(url: string): void {
    this.shouldReset = true;
  
    setTimeout(() => {
      this.router.navigate([url]);
      this.shouldReset = false;
    }, 100);
  }

  public unsorted(a: any, b: any): number {
    return 0;
  }
  
  private setBackgroundGradient(url: string): void {
    switch (url) {
      case this.routes.home.url:
        this.gradient = 'orange-red';
        break;
      case this.routes.aboutMe.url:
        this.gradient = 'blue-light-blue';
        break;
      case this.routes.projects.url:
        this.gradient = 'pink-orange';
        break;
      case this.routes.contact.url:
        this.gradient = 'green';
        break;
      default:
        this.gradient = 'orange-red';
        break;
    }
  }
}
