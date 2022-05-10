import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input() type: string= 'danger';
  @Input() title: string= '';


  constructor() { }

  ngOnInit(): void {
  }

}
