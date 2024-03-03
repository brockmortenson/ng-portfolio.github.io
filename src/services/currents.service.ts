import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first, takeLast, takeUntil, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentsService {
  private readonly isMobile$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly mobileSuggestion$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly HasShownSuggestionConst: string = 'SUGGESTION_SHOWN';

  constructor() { }

  /**
   * Gets the current value for isMobile.
   * Subscribe to be notified of changes.
   */
  public getIsMobile(): Observable<boolean> {
    return this.isMobile$.asObservable();
  }

  /**
   * Sets the current value for isMobile.
   * @param bool The value to set isMobile to.
   */
  public setIsMobile(bool: boolean): void {
    this.isMobile$.next(bool);
  }

  /**
   * Gets the current value for mobileSuggestion.
   * Subscribe to be notified of changes.
   */
  public getMobileSuggestion(): Observable<boolean> {
    return this.mobileSuggestion$.asObservable();
  }

  /**
   * Sets the current value for mobileSuggestion.
   * @param bool The value to set mobileSuggestion to.
   */
  public setMobileSuggestion(bool: boolean): void {
    this.mobileSuggestion$.next(bool);
  }

  public handleMobileSuggestion(): void {
    const hasShownSuggestion = this.getHasShownSuggestion();

    if (!hasShownSuggestion) {
      timer(3000).pipe(
        first(),
        tap(() => {
          this.setMobileSuggestion(true)
          this.setHasShownMobileSuggestion();
        }),
      ).subscribe();
    }
  }

  private setHasShownMobileSuggestion(): void {
    localStorage.setItem(this.HasShownSuggestionConst, 'true');
  }

  private getHasShownSuggestion(): string {
    const suggestion = localStorage.getItem(this.HasShownSuggestionConst);
    return suggestion ?? '';
  }
}
