import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.css']
})
export class MenuSideComponent implements OnInit {
  
  @Input() sideNavStatus:boolean =false;

List=[
  {
    number:'1',
    name:'Home',
    icon:'fa fa-home',
    link:'/home'
  },
  {
    number:'2',
    name:'Invoices',
    icon:'fa fa-file',
    link:'/invoice/invlist'
  },
  {
    number:'3',
    name:'Create Invoice',
    icon:'fa fa-plus',
    link:'/invoice/createinv'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
