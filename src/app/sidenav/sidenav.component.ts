import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';
import { fadeInOut, INavbarData } from './helper';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
   fadeInOut,
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset:'0'}),
            style({transform: 'rotate(2turn)', offset:'1'}),
          ])
        )
      ])
    ])

  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navDta = navbarData;
  multiple: boolean = true;
  @HostListener('window:resize', ['$event'])
 
  OnResize(event: any)
  {
     this.screenWidth = window.innerWidth;
     if(this.screenWidth <= 768){
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth})
     }
  }
 constructor(public router: Router ){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    console.log("ngOnInit ",this.collapsed);
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;    
    console.log("toggleCollapse ",this.collapsed);
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth})
  }

  closeSidenav(): void{
    this.collapsed = false;
		console.log("closeSidenav ",this.collapsed);										   
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth:this.screenWidth})
	
  }

  handleClick(item: INavbarData): void{
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string{
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData):void{
        if(!this.multiple){
      for(let modelItem of this.navDta){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
  }
}
