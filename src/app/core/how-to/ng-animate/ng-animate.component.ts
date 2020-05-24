import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { codeBlocks as ngAnimateCodeBlock } from './ng-animate.codes';
import { AnimateService } from 'src/app/shared/service/animate.service';

@Component({
  selector: 'app-ng-animate',
  templateUrl: './ng-animate.component.html',
  styleUrls: ['./ng-animate.component.css'],
  animations: [
    AnimateService.TfadeDownGate,
    AnimateService.TfadeUpGate,
  ],
})
export class NgAnimateComponent implements OnInit {

  // Foundations code blocks
  public ngAnimateCodeMap;
  public ngAnimateCodeKeys: any[];

  constructor(public router: Router, public activeRoute: ActivatedRoute) {
    // Foundations code blocks
    this.ngAnimateCodeMap = new Map(ngAnimateCodeBlock.map(obj => [obj.name, obj.code]));
    // let foundationCodeKeys = Array.from( this.foundationCodeMap.keys() );
    this.ngAnimateCodeKeys =[ ...this.ngAnimateCodeMap.keys() ];
    console.log(this.ngAnimateCodeKeys);
    console.log(this.ngAnimateCodeKeys.toString());
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
