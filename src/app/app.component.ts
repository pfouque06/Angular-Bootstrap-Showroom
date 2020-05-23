import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { AnimateService } from 'src/app/shared/service/animate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    AnimateService.TfadeUpGate,
    AnimateService.TfadeDownGate,
    AnimateService.TslideDownGate,
  ],
})
export class AppComponent {
  public title: string = 'Angular Bootstrap Showroom';


  public isScrollUpVisible: boolean;

  // Declare height and width variables
  displayHeight:any;
  displayWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.displayHeight = window.innerHeight;
    this.displayWidth = window.innerWidth;
    // console.log("app.getScreenSize(): ["+this.displayHeight, this.displayWidth +"]");
    // process ScrollUp button visibility
    this.toggleScrollUp();
  }

  // toptag relative position
  toptagTop:any;
  @ViewChild('toptag', {read: ElementRef}) toptag: ElementRef;
  @HostListener('window:scroll', ['$event'])
  getTopPositionOnScroll(event?) {
    if ( this.toptag != null) {
      this.toptagTop = this.toptag.nativeElement.getBoundingClientRect().top;
      // console.log("getTopPositionOnScroll(): " + this.toptagTop);
      // process ScrollUp button visibility
      this.toggleScrollUp();
    }
  }

  toggleScrollUp() {
    if (this.displayHeight < 400)  { this.isScrollUpVisible = false;}
    else { // display bug enough to handle scrollup nav button
      if (this.toptagTop < -200) { this.isScrollUpVisible = true;}
      else { this.isScrollUpVisible = false;}
    }
    // console.debug("toggleScrollUp("+this.isScrollUpVisible+")");
  }

  constructor(private animateScrollService: NgAnimateScrollService) {
    // get dynamic screen size and process to ScrollUp button visibility logic
    this.getScreenSize();
    this.getTopPositionOnScroll();
  }

  public scrollToElement(element: any, duration?:number) {
    this.animateScrollService.scrollToElement(element, duration ? duration : 300);
  }
}
