import { Injectable } from '@angular/core';
import { INotification } from './notification';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DashboardService {

  constructor() { }

  fetchNotifications = (): Observable<INotification[]> => Observable.of(mockData);
  
}
const mockData: INotification[] = [
  {notification: 'Test notification 1'},
  {notification: 'Test notification 2, this one has more length.'},
  {notification: 'Test notification 3- even more length. Here we have an extra long notification. This should be forcing the row to grow in height.'},
  {notification: 'Test notification 4'}
];