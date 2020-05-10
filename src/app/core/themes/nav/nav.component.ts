import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public basicNavActive: number = 1;
  public PillsNavActive: string;
  public rowNavActive: string = 'middle';

  constructor(public router: Router, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public navigateToFragment(route: string, fragment: string) {
    console.log("navigateToFragment("+route+"#"+fragment+")");
    this.router.navigate([route]).then(()=>{
      window.location.hash=fragment;
    });
  }
}
