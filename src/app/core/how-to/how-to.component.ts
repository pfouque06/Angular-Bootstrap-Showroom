import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
import { codeBlocks as foundationCodeBlock } from './foundations.codes';
import { codeBlocks as ngxHighLightjsCodeBlock } from './ngx-highlight.codes'

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent implements OnInit {

  public codeDiag: HighlightResult;

  // Foundations code blocks
  public foundationCodeMap;
  public foundationCodeKeys: any[];

  // ngx-highlightjs code blocks
  public ngxHighlightjsCodeMap;
  public ngxHighlightjsCodeKeys: any[];

  constructor(public router: Router, public activeRoute: ActivatedRoute) {

    // Foundations code blocks
    this.foundationCodeMap = new Map(foundationCodeBlock.map(obj => [obj.name, obj.code]));
    // let foundationCodeKeys = Array.from( this.foundationCodeMap.keys() );
    this.foundationCodeKeys =[ ...this.foundationCodeMap.keys() ];
    console.log(this.foundationCodeKeys);
    console.log(this.foundationCodeKeys.toString());

    // ngx-highlightjs code blocks
    this.ngxHighlightjsCodeMap = new Map(ngxHighLightjsCodeBlock.map(obj => [obj.name, obj.code]));
    // let foundationCodeKeys = Array.from( this.foundationCodeMap.keys() );
    this.ngxHighlightjsCodeKeys =[ ...this.ngxHighlightjsCodeMap.keys() ];
    console.log(this.ngxHighlightjsCodeKeys);
    console.log(this.ngxHighlightjsCodeKeys.toString());
  }

  ngOnInit(): void {
  }

  public navigateToFragment(route: string, fragment: string) {
    console.log("navigateToFragment("+route+"#"+fragment+")");
    this.router.navigate([route]).then(()=>{
      window.location.hash=fragment;
    });
  }
}
