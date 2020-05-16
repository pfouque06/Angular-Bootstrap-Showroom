import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  public isCollapsed = true;
  public isFirstCollapsed = true;
  public isSecondCollapsed = true;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public navigateToFragment(route: string, fragment: string) {
    console.log("navigateToFragment("+route+"#"+fragment+")");
    this.router.navigate([route]).then(()=>{
      window.location.hash=fragment;
    });
  }
}
