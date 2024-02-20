import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentsService {
  private readonly isMobile$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
}
