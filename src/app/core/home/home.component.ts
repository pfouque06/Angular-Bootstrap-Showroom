import { Component, OnInit } from '@angular/core';
import { AnimateService } from 'src/app/shared/service/animate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    AnimateService.TbounceGate,
    AnimateService.TflipYGate,
    AnimateService.TflipXGate,
  ],
})
export class HomeComponent implements OnInit {

  // collapsing playground
  public isFirstCollapsed = true;
  public isSecondCollapsed = true;
  public isThirdCollapsed = true;
  public isAllCollapsed: boolean;

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
