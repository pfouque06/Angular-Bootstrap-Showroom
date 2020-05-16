import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
import { codeBlocks as ngxHighLightjsCodeBlock } from './ngx-highlightjs.codes'

@Component({
  selector: 'app-ngx-highlightjs',
  templateUrl: './ngx-highlightjs.component.html',
  styleUrls: ['./ngx-highlightjs.component.css']
})
export class NgxHighlightjsComponent implements OnInit {


  // ngx-highlightjs code blocks
  public ngxHighlightjsCodeMap;
  public ngxHighlightjsCodeKeys: any[];
  public codeDiag: HighlightResult;

  constructor(public router: Router, public activeRoute: ActivatedRoute) {
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
