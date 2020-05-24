import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { AnimateService } from 'src/app/shared/service/animate.service';
import { NavigateAndScrollInService } from './shared/service/navigate-and-scroll-in.service';

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
export class AppComponent implements OnInit {
  public title: string = 'Angular Bootstrap Showroom';


  public isScrollUpVisible: boolean;

  @ViewChild('base', {read: ElementRef}) baseTag: ElementRef;

  constructor(public scrollService: NavigateAndScrollInService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.scrollService.setbaseTag('base', this.baseTag);
  }
}
