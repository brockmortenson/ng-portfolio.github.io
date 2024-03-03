import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, debounceTime, filter, fromEvent, tap } from 'rxjs';
import { CurrentsService } from 'src/services/currents.service';
import { Routes } from 'src/shared/models/routes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'portfolio';
  public gradient: string = '';
  public dampenGradientOpacity: boolean = false;
  public routes: Routes = new Routes();
  public currentUrl: string = '';
  public isMobile: boolean = false;
  public toggled: boolean = false;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(private router: Router,
    private currentsService: CurrentsService) { }

  public ngOnInit(): void {
    this.listenToWindowResize();

    this.subscriptions.add(this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      ).subscribe((event: any) => {
        this.setCurrentUrl(event.url)
        this.setBackgroundGradient(this.currentUrl);
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public routeTo(url: string): void {
    if (url === this.currentUrl) {
      return;
    }

    this.toggled ? this.toggleNav() : null;
    this.dampenGradientOpacity = true;
  
    setTimeout(() => {
      this.router.navigate([url]);
      this.dampenGradientOpacity = false;
    }, 100);
  }

  public unsorted(a: any, b: any): number {
    return 0;
  }

  public toggleNav(): void {
    this.toggled = !this.toggled;
  }

  private setCurrentUrl(url: string): void {
    if (url === '/') {
      this.currentUrl = '/home'
    } else {
      this.currentUrl = url;
    }
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
        this.gradient = 'blue-yellow';
        break;
      default:
        this.gradient = 'orange-red';
        break;
    }
  }

  private listenToWindowResize(): void {
    localStorage.clear();
    this.mobileSuggestionSubscription();
    this.isMobileSubscription();
    this.setIsMobile(window.innerWidth);

    fromEvent(window, 'resize').pipe(
      debounceTime(50),
      tap((event: any) => {
        const width = event.target['innerWidth'];
        this.setIsMobile(width);
      }),
    ).subscribe();
  }

  private setIsMobile(width: number): void {
    if (width > 850) {
      this.currentsService.setIsMobile(false);
    } else {
      this.currentsService.setIsMobile(true);
    }
  }

  private isMobileSubscription(): void {
    this.subscriptions.add(this.currentsService.getIsMobile().subscribe((bool) => {
      this.isMobile = bool;
      !this.isMobile ? this.toggled = false : null;
      this.mobileSuggestion();
    }));
  }

  private mobileSuggestion(): void {
    if (!this.isMobile) {
      this.currentsService.handleMobileSuggestion();
    } else {
      this.currentsService.setMobileSuggestion(false);
    }
  }

  private mobileSuggestionSubscription(): void {
    this.subscriptions.add(this.currentsService.getMobileSuggestion().subscribe((bool) => {
      // console.log(bool);
    }));
  }
}
