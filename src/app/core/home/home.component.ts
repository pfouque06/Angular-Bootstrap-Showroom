import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isFirstCollapsed = true;
  public isSecondCollapsed = true;
  public isThirdCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
