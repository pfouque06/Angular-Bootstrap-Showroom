import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { codeBlocks as fontawesomeCodeBlock } from './fontawesome.codes';

@Component({
  selector: 'app-fontawesome',
  templateUrl: './fontawesome.component.html',
  styleUrls: ['./fontawesome.component.css']
})
export class FontawesomeComponent implements OnInit {

  // Foundations code blocks
  public fontawesomeCodeMap;
  public fontawesomeCodeKeys: any[];

  constructor(public router: Router, public activeRoute: ActivatedRoute) {

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

}
