import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public basicNavActive: number = 1;
  public PillsNavActive: string;
  public rowNavActive: string = 'middle';

  constructor() { }

  ngOnInit(): void {
  }

}
