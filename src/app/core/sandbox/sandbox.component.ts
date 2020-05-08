import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  public basicNavActive: number = 1;
  public PillsNavActive: string;
  public rowNavActive: string = 'middle';

  constructor() { }

  ngOnInit(): void {
  }
}
