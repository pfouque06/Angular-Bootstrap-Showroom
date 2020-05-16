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
  public isAllCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  public All() {
    // console.log("All()");
    // console.log(this.isFirstCollapsed +"|"+ this.isSecondCollapsed +"|"+ this.isThirdCollapsed);
    this.isAllCollapsed = ! (this.isFirstCollapsed ||this.isSecondCollapsed || this.isThirdCollapsed );
    this.isFirstCollapsed = this.isAllCollapsed;
    this.isSecondCollapsed = this.isAllCollapsed;
    this.isThirdCollapsed = this.isAllCollapsed;
    // console.log(this.isFirstCollapsed +"|"+ this.isSecondCollapsed +"|"+ this.isThirdCollapsed);
  }

}
