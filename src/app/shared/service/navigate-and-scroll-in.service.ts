import { Injectable, HostListener, ElementRef, Directive, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { fromEvent } from 'rxjs';

///////////////////////////////////////////////////////////////////////////////
// Navigateand scrollin service - based onf ng-animate-scroll for fluidity
/////////////////////////////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class NavigateAndScrollInService {

  public isScrollUpVisible: boolean;
  public VisibilityThreshold: number = -200; // minimum display position threshold to raise ScrollUp visibility - default is -200
  public DisableThreshold: number = 400; // minimum windows size to always disable ScrollUp - default is 400

  // Screen height and width
  // @HostListener('window:resize', ['$event']) => not operational in @injectable()
  displayHeight:any;
  displayWidth:any;
  getScreenSize(event?) {
    this.displayHeight = window.innerHeight;
    this.displayWidth = window.innerWidth;
    console.log("window.getScreenSize(): ["+this.displayHeight, this.displayWidth +"]");
    this.toggleScrollUp();
  }

  // baseTag Directive relative position
  // @ViewChild('base', {read: ElementRef}) baseTag: ElementRef; => not operational in @injectable()
  // @HostListener('window:scroll', ['$event']) => not operational in @injectable()
  baseTag: ElementRef;
  baseTagName: string; // default name of roof's Id element -> next step to transrom in directive !
  baseTagPosition:any;
  getTopPositionOnScroll(event?) {
    if ( ! this.isBaseDirectivePresent() ) { return; }
    this.baseTagPosition = this.baseTag.nativeElement.getBoundingClientRect();
    console.log("["+this.baseTagName+"].getTopPositionOnScroll(): " + this.baseTagPosition.top);
    this.toggleScrollUp();
  }

  // visibility process
  toggleScrollUp() {
    if ( ! this.isBaseDirectivePresent() ) { return; }
    if (this.displayHeight < this.DisableThreshold)  { this.isScrollUpVisible = false;}
    else { // display is ug enough to handle scrollup nav button
      if (this.baseTagPosition.top < this.VisibilityThreshold) { this.isScrollUpVisible = true;}
      else { this.isScrollUpVisible = false;}
    }
    // console.debug("toggleScrollUp("+this.isScrollUpVisible+")");
  }

  constructor(public router: Router, private animateScrollService: NgAnimateScrollService) {
    // subscribe to window.resize event
    fromEvent(window, 'resize').subscribe((event) => {
      this.getScreenSize(event);
    });
    // subscribe to window.scroll event
    fromEvent(window, 'scroll').subscribe((event) => {
      this.getTopPositionOnScroll(event);
    });
  }

  // get name and @viewchild('base'): ElementRef basetag from component
  public setbaseTag(name: string, elementRef: ElementRef) {
    this.baseTag = elementRef;
    this.baseTagName = name;
  }

  // Scroll'In to provided Element
  public scrollToElement(element: any, duration?:number) {
    console.log("scrollUp.scrollToElement()");
    this.animateScrollService.scrollToElement(element, duration ? duration : 300);
  }

  // scrollUp to roof ...
  public scrollUp(duration?:number) {
    console.log("scrollUp.scrollUp()");
    if ( ! this.isBaseDirectivePresent() ) { return; }
    this.animateScrollService.scrollToElement(this.baseTagName, duration ? duration : 300);
  }

  // navigat'In
  public navigateTo(route: string, fragment?: string) {
    console.log("navigateTo("+route+"#"+fragment+")");
    this.router.navigate([route]).then(()=>{
      window.location.hash=fragment;
    });
  }

  isBaseDirectivePresent(): boolean {
    if ( ! this.baseTag ) {
      this.baseDirectiveNotFoundError()
      return false;
    }
    return true;
  }

  baseDirectiveNotFoundError() {
    console.log("ScrollUp ERROR : <div "+this.baseTagName+"></div> directive is not present yet on DOM.");
  }
}


///////////////////////////////////////////////////////////////////////////////
// CUSTOM DIRECTIVES --- not usefull for the moment
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// CUSTOM base directive for roof markup
@Directive({ selector: '[base]'})
export class MyBaseDirective { constructor() {} } // Empty directive -< just a "roof" marker for scrollUp like : <div base></div>

/////////////////////////////////////////////////////////////////////////////////
// CUSTOM scrollup directive for scrollUp button
@Directive({ selector: '[my-scroll-up]'})
export class MyScrollUpDirective {

  currentBackgroundColor: string;
  @Input() HoverColor: string = 'yellow';
  @Input() duration: number;

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('button:: ', btn);
    //NavAndScrollInService.scrollUp(duration ? duration)
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.currentBackgroundColor = this.elementRef.nativeElement.style.backgroundColor;
    this.elementRef.nativeElement.style.backgroundColor = this.HoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = this.currentBackgroundColor;
  }
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    // elementRef.nativeElement.style.background = 'red';
    renderer.addClass(elementRef.nativeElement, 'container', );
    renderer.addClass(elementRef.nativeElement, 'fixed-bottom', );
    renderer.addClass(elementRef.nativeElement, 'd-flex', );
    renderer.addClass(elementRef.nativeElement, 'justify-content-end', );
    renderer.addClass(elementRef.nativeElement, 'mb-5', );
    renderer.addClass(elementRef.nativeElement, 'btn', );
    renderer.addClass(elementRef.nativeElement, 'btn-sm', );
    renderer.addClass(elementRef.nativeElement, 'btn-secondary', );
    renderer.addClass(elementRef.nativeElement, 'text-light', );
    renderer.addClass(elementRef.nativeElement, 'shadow-lg', );
  }
}

