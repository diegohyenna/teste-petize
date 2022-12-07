import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAlert } from 'src/app/interfaces/alert.interface';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
})
export class AlertComponent implements OnInit, OnChanges {
  alert!: IAlert;

  constructor(private alertService: AlertService) {
    this.alertService.subject.subscribe((result) => {
      this.alert = result;
      setTimeout(() => {
        this.alert.message = '';
      }, 3000);
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // this.alert = this.alertService.getAlert();
  }
}
