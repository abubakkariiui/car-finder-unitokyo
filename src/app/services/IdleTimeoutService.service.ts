import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class IdleTimeoutService {
  private _count: number = 0;
  private _serviceId: string =
    'idleTimeoutSvc-' + Math.floor(Math.random() * 10000);
  private _timeoutSeconds: number = 5;
  private timerSubscription: Subscription;
  private timer: Observable<number>;
  private resetOnTrigger: boolean = false;
  public timeoutExpired: Subject<number> = new Subject<number>();

  constructor() {
    console.log('Constructed idleTimeoutService ' + this._serviceId);

    this.timeoutExpired.subscribe((n) => {
      console.log('timeoutExpired subject next.. ' + n.toString());
    });

    this.startTimer();
  }
  ngOnInit() {
    this.startCounter();
    this._idleTimerSubscription = this.idleTimeoutSvc.timeoutExpired.subscribe(
      (res) => {
        var modalPromise = this.dialogSvc.open(
          'Session Expiring!',
          'Your session is about to expire. Do you need more time?',
          true,
          'Yes',
          'No'
        );
        var newObservable = Observable.fromPromise(modalPromise);
        newObservable.subscribe(
          (res) => {
            if (res === true) {
              console.log('Extending session...');
              this._status = 'Session was extended.';
              this.idleTimeoutSvc.resetTimer();
              this.startCounter();
              this.changeRef.markForCheck();
            } else {
              console.log('Not extending session...');
              this._status = 'Session was not extended.';
              this.changeRef.markForCheck();
            }
          },
          (reason) => {
            console.log('Dismissed ' + reason);
            this._status = 'Session was not extended.';
            this.changeRef.markForCheck();
          }
        );
      }
    );
  }

  public startTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timer = Observable.timer(this._timeoutSeconds * 1000);
    this.timerSubscription = this.timer.subscribe((n) => {
      this.timerComplete(n);
    });
  }

  public stopTimer() {
    this.timerSubscription.unsubscribe();
  }

  public resetTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timer = Observable.timer(this._timeoutSeconds * 1000);
    this.timerSubscription = this._timer.subscribe((n) => {
      this.timerComplete(n);
    });
  }
  private timerComplete(n: number) {
    this.timeoutExpired.next(++this._count);

    if (this.resetOnTrigger) {
      this.startTimer();
    }
  }
}
