import { Component, OnInit } from '@angular/core';
import { AnimateService } from 'src/app/shared/service/animate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    AnimateService.TrubberBand01,
    AnimateService.TflipYGate,
    AnimateService.TflipXGate,
    // AnimateService.TzoomGate,
    // AnimateService.TfadeGate,
  ],
})
export class HomeComponent implements OnInit {

  // button toggle animation
  public firstToggle = false;
  public secondToggle = false;
  public thirdToggle = false;
  public allToggle = false;
  public xAllToggle = false;

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

  public XAll() {
    this.isFirstCollapsed = ! this.isFirstCollapsed;
    this.isSecondCollapsed = ! this.isSecondCollapsed;
    this.isThirdCollapsed = ! this.isThirdCollapsed;
  }
}
