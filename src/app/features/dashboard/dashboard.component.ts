import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { INotification } from './notification';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  displayedColumns = ['notifications', 'clear'];
  notifications: MatTableDataSource<INotification>;

  constructor(private service: DashboardService) {}
  
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.service.fetchNotifications().subscribe(response => {
      this.populateNotifications(response);
    })
  }

  populateNotifications(notifications: Array<INotification>){
    this.notifications = new MatTableDataSource(notifications);
  }
    
}