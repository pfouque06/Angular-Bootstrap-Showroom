import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import codes from './codeBlocks.json';
import { IDisplayData, displaysList } from './codeBlocks';
// import fs  from 'fs';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

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
  public lastPieceOfCode;

  fileCodecontent: string = "";

  constructor() {

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

    // ## node fs attemps :
    // ## Type `npm i @types/node` and then add `node` to the types field in your tsconfig.json file in compilerOptions section
    // "types": [ "node" ]
    // ## or 'npm i -D @types/node' and in typeroots section :
    // "typeRoots": [
    //   "node_modules/@types",
    //   "node_modules/@types/node"
    // ],
    this.filePath = this.pathName + "" + this.fileName;
    // const fs = require('fs');
    // fs.readFileSync(this.path),'utf8', function(err, data) {
    //   if (err) throw err;
    //   console.log("Asynchronous read: " + data.toString());
    //   this.lastPieceOfCode = data.toString();
    // }
    // readFileSync(this.path),'utf8', function(err, data) {
    //   if (err) throw err;
    //   console.log("Asynchronous read: " + data.toString());
    //   this.lastPieceOfCode = data.toString();
    // }
  }

  ngOnInit(): void {
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
}
