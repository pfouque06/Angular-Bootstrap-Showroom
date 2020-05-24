import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { Router, ActivatedRoute } from '@angular/router';
import codes from './codeBlocks.json';
import { IDisplayData, displaysList } from './codeBlocks';

@Component({
  selector: 'app-code-renderer',
  templateUrl: './code-renderer.component.html',
  styleUrls: ['./code-renderer.component.css']
})
export class CodeRendererComponent implements OnInit {

  public codeDiag: HighlightResult;
  public codeSample =
`<html>
  <!-- <app-header></app-header> -->
  <app-header [title]="title"></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
</html>`;

  public pieceOfCode =
[`function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`,
`.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}`]

  public nextPieceOfCode;

  public anotherPieceOfCode = new Map();
  public anotherPieceOfCodeKeys: any[];

  public codeUrlForm: string = "https://raw.githubusercontent.com/angular/angularfire2/master/src/database/database.ts";
  public codeUrl: string;

  public pathName: string =".";
  public fileName: string ="file1.txt";
  public filePath: string

  private lastPieceFile: File;
  private lastPieceFileReader: FileReader = new FileReader();
  public lastPieceOfCode;
  public lastPieceNumbering: boolean = false;

  fileCodecontent: string = "";
  constructor(public router: Router, public route: ActivatedRoute) {

        // ## import json files :
    // ## in ts onfig.json add in compilerOptions section :
    // "resolveJsonModule": true,
    // "esModuleInterop": true
    // ## import files :
    // import codes from './codeBlocks.json';
    console.log(codes);
    this.nextPieceOfCode = codes;

    // from an exported array (codeblock.ts)
    var codeMap = displaysList;
    this.anotherPieceOfCode = new Map(codeMap.map(obj => [obj.name, obj.code]));
    // let codeMapKeys = Array.from( this.anotherPieceOfCode.keys() );
    this.anotherPieceOfCodeKeys =[ ...this.anotherPieceOfCode.keys() ];
    console.log(this.anotherPieceOfCodeKeys);
    console.log(this.anotherPieceOfCodeKeys.toString());


    var filename;
    filename = 'file1.txt';
    fetch('file:../file1.txt')
    .then(response => response.text())
    .then(text => console.log(text));

    filename = 'file1.txt';
    this.loadText('file:./file1.txt');

    // ## node fs attemps : forbidden avec angular !!!
  }

  ngOnInit(): void {
  }

  public navigateToFragment(route: string, fragment: string) {
    console.log("navigateToFragment("+route+"#"+fragment+")");
    this.router.navigate([route]).then(()=>{
      window.location.hash=fragment;
    });
  }

  onHighlight(e) {
    this.codeDiag = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

  async loadText(url) {
    var text = await fetch(url);
    //awaits for text.text() prop
    //and then sends it to readText()
    this.readText(await text.text());
  }

  readText(filename){
      //here you can continue with your JS normal logic
      console.log(filename);
  }

  public loadRawUrl() {
    this.codeUrl = this.codeUrlForm;
  }

  public loadUserFile(fileList: FileList): void {
    let self = this;
//     let file = fileList[0];
//     let fileReader: FileReader = new FileReader();
//       self.lastPieceOfCode = fileReader.result;
//     }
//     fileReader.onloadend = function(x) {
//     fileReader.readAsText(file);
    this.lastPieceFile = fileList[0];
    this.lastPieceFileReader.onloadend = function(x) {
      self.lastPieceOfCode = self.lastPieceFileReader.result;
    }
    this.lastPieceFileReader.readAsText(this.lastPieceFile);
//     console.log(this.lastPieceOfCode);
  }

  public lineNumberingToggle(): void {
    this.lastPieceNumbering = ! this.lastPieceNumbering;
    this.lastPieceOfCode = "";
    this.lastPieceFileReader.readAsText(this.lastPieceFile);
//     console.log("lastPieceNumbering:" + this.lastPieceNumbering);
//     console.log(this.lastPieceOfCode);
  }
}
