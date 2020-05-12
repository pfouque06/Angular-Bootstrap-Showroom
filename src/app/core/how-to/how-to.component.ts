import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HighlightResult } from 'ngx-highlightjs';
import { codeBlocks as foundationCodeBlock } from './foundations.codes';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent implements OnInit {

  public codeDiag: HighlightResult;
  public codeMap;
  public codeKeys: any[];

  constructor(public router: Router, public activeRoute: ActivatedRoute) {
    // var codeMap = codeBlocks;
    this.codeMap = new Map(foundationCodeBlock.map(obj => [obj.name, obj.code]));
    // let codeMapKeys = Array.from( this.anotherPieceOfCode.keys() );
    this.codeKeys =[ ...this.codeMap.keys() ];
    console.log(this.codeKeys);
    console.log(this.codeKeys.toString());
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
