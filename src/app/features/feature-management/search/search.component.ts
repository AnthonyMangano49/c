import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { INotification } from '../../dashboard/notification';
import { DashboardService } from '../../dashboard/dashboard.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputPlaceholder = "Search all, market, group, sub-group, product, plan";
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