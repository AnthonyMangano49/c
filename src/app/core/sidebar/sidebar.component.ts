import { Component, OnInit } from '@angular/core';
import { IMenu } from './menu';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: IMenu;
  
  constructor() { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.setMenu();
  }

  setMenu(){
    //todo menu from config
    this.menu = {
      logoPath: 'assets/logo.png',
      menuSections: [{
        header: 'navigation',
        menuItems: [{
          title: 'dashboard',
          icon: 'fa fa-home',
          route: 'todo'
        }, {
          title: 'feature management',
          icon: 'fa fa-bolt',
          isToggled: false,
          submenu: [{
            title: 'view / edit accounts',
            route: 'todo'
          }, {
            title: 'global settings',
            route: 'todo'
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



}
