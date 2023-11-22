import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-counter',
  templateUrl: './notification-counter.component.html',
  styleUrls: ['./notification-counter.component.scss']
})
export class NotificationCounterComponent {
  @Input() count: number = 0;
}
