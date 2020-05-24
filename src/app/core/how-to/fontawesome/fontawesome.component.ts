import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { codeBlocks as fontawesomeCodeBlock } from './fontawesome.codes';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-fontawesome',
  templateUrl: './fontawesome.component.html',
  styleUrls: ['./fontawesome.component.css']
})
export class FontawesomeComponent implements OnInit {

  // Foundations code blocks
  public fontawesomeCodeMap;
  public fontawesomeCodeKeys: any[];

  constructor(public router: Router, public activeRoute: ActivatedRoute, private animateScrollService: NgAnimateScrollService) {

    // Fontawesome code blocks
    this.fontawesomeCodeMap = new Map(fontawesomeCodeBlock.map(obj => [obj.name, obj.code]));
    // let foundationCodeKeys = Array.from( this.foundationCodeMap.keys() );
    this.fontawesomeCodeKeys =[ ...this.fontawesomeCodeMap.keys() ];
    console.log(this.fontawesomeCodeKeys);
    console.log(this.fontawesomeCodeKeys.toString());
  }

  ngOnInit(): void {
  }

  public navigateToFragment(route: string, fragment: string) {
    console.log("navigateToFragment("+route+"#"+fragment+")");
    this.router.navigate([route]).then(()=>{
      window.location.hash=fragment;
    });
  }

  public scrollToElement(element: any, duration?:number) {
    console.log("scrollToElement("+element+", "+duration+")");
    console.log("activeRoute:"+this.activeRoute.toString());
    console.log("parent:"+this.activeRoute.parent);
    this.activeRoute.url.subscribe(url => {console.log("before url:"+url);});
    this.activeRoute.fragment.subscribe(fragment => {console.log("before fragment:"+fragment);});
    this.animateScrollService.scrollToElement(element, duration);
    this.activeRoute.url.subscribe(url => {console.log("after url:"+url);});
    this.activeRoute.fragment.subscribe(fragment => {console.log("after fragment:"+fragment);});
  }

}
