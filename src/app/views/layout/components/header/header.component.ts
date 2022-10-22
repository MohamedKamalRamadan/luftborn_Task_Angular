import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() sideNavToggle = new EventEmitter<boolean>();

MenuStatus:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  SideNavToggle()
  {
    this.MenuStatus =!this.MenuStatus;
    this.sideNavToggle.emit(this.MenuStatus);
  }

}
