import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlert } from '../interfaces/alert.interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert!: IAlert;
  subject = new Subject<IAlert>();

  constructor() {}

  getAlert() {
    return this.alert;
  }

  setAlert(alert: IAlert) {
    this.alert = alert;
    this.subject.next(this.alert);
  }
}
