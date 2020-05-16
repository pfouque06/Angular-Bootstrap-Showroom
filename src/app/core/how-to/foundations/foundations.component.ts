import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { codeBlocks as foundationCodeBlock } from './foundations.codes';

@Component({
  selector: 'app-foundations',
  templateUrl: './foundations.component.html',
  styleUrls: ['./foundations.component.css']
})
export class FoundationsComponent implements OnInit {

  // Foundations code blocks
  public foundationCodeMap;
  public foundationCodeKeys: any[];

  constructor(public router: Router, public activeRoute: ActivatedRoute) {
    // Foundations code blocks
    this.foundationCodeMap = new Map(foundationCodeBlock.map(obj => [obj.name, obj.code]));
    // let foundationCodeKeys = Array.from( this.foundationCodeMap.keys() );
    this.foundationCodeKeys =[ ...this.foundationCodeMap.keys() ];
    console.log(this.foundationCodeKeys);
    console.log(this.foundationCodeKeys.toString());
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
