import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputPlaceholder = "Search all, market, group, sub-group, product, plan";


  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.init();
  }

  init() {}

  navigate() {
    this.router.navigate(['feature/edit']);
  }

}