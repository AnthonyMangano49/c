import { Component, OnInit } from '@angular/core';
import { IMenu, IMenuItem } from './menu';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  menu: IMenu;
  currentRoute: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.setMenu();
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(route => this.currentRoute = route['url']);
  }

  setMenu() {
    //todo menu from config
    this.menu = {
      logoPath: 'assets/logo.png',
      menuSections: [{
        header: 'navigation',
        menuItems: [{
          title: 'dashboard',
          icon: 'fa fa-home',
          route: '/dashboard'
        }, {
          title: 'feature management',
          icon: 'fa fa-bolt',
          isToggled: false,
          submenu: [{
            title: 'view / edit accounts',
            route: '/feature/search'
          }, {
            title: 'global settings',
            route: '/feature/global'
          }] //submenu
        }, {
          title: 'admin management', 
          icon: 'fa fa-user'
        }, {
          title: 'group management',
          icon: 'fa fa-users'
        }, {
          title: 'document management', 
          icon: 'fa fa-briefcase'
        }, {
          title: 'admin tools', 
          icon: 'fa fa-wrench'
        }] //menu items
      }, {
        header: 'account',
        menuItems: [{
          title: 'my profile', 
          icon: 'fa fa-star'
        }, {
          title: 'FAQs',
          icon: 'fa fa-question-circle'
        }, {
          title: 'member support',
          icon: 'fa fa-phone'
        }]
      }] //menu sections
    } //menu
  }

  itemClicked(input: IMenuItem) {
    if(input.submenu)
      this.toggleMenu(input);
    else{
      this.navigate(input.route);
    }
  }

  toggleMenu(input: IMenuItem) {
    input.isToggled = !input.isToggled;
  }

  //todo utility
  navigate(route) {
    this.router.navigate([route]);
  }

  setHighlights(menuItem: IMenuItem) {
    if(menuItem.route === this.currentRoute)
      return 'sidebar-highlight';
    if(menuItem.submenu) {
      for(let item in menuItem.submenu){
        if(menuItem.submenu[item].route === this.currentRoute)
          return 'sidebar-highlight';
      }
    }
  }
}
