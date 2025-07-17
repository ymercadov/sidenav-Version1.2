import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  innerWidth: any;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onresize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  getClass(): string {
    return this.innerWidth < 925 ? 'row-md' : 'row';
  }
}
