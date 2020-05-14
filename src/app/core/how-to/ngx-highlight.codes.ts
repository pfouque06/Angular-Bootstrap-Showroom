export interface ICodeBlock {name: string; code: string;}
export const codeBlocks: ICodeBlock[] = [
{
name: 'install_codebloc_01',
code:
`  sudo npm install ngx-highlightjs`,
},
{
name: 'install_codebloc_02',
code:
`  import { HighlightModule } from 'ngx-highlightjs';

   const SHARED_MODULES = [
     (..)
     HighlightModule,
   ]
    `,
},
{
  name: 'install_codebloc_03',
  code:
`  (..),
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    }
   ]
  })`,
},
{
  name: 'install_codebloc_04',
  code:
`  (..)
  "styles": [
    (..)
    "./node_modules/highlight.js/styles/grayscale.css",
    "styles.css",
  ]`,
},
{
  name: 'install_codebloc_05',
  code:
` @import '~highlight.js/styles/grayscale.css';`,
},
{
  name: 'usage_codebloc_01',
  code:
`  export class SandboxComponent implements OnInit {

    codeDiag: HighlightResult;

    codeSample = \`
  <!-- <app-header></app-header> -->
  <app-header [title]="title"></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>\`;

    pieceOfCode = [
\`  function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello there!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }\`,
\`  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }\`
    ]

    onHighlight(e) {
      this.codeDiag = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }`,
},
{
  name: 'usage_codebloc_02',
  code:
`  <pre class="border"><code [highlight]="codeSample" (highlighted)="onHighlight($event)" [lineNumbers]="true"></code></pre>

   <h4>Highlight response</h4>
   <pre>{{ codeDiag | json }}</pre>

   <h4>Some piece of code samples</h4>
   <div *ngFor="let someCode of pieceOfCode; index as i">
     <pre class="border"><code [highlight]="someCode" [lineNumbers]="true"></code></pre>
   </div>`,
},
{
  name: 'option_codebloc_01',
  code:
`import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}`,
},
{
  name: 'option_codebloc_02',
  code:
`import { HighlightPlusModule } from 'ngx-highlightjs/plus';

@NgModule({
  imports: [
    HighlightPlusModule
  ]
})
export class AppModule {
}`,
},
{
  name: 'option_codebloc_03',
  code:
`<pre [gist]="gistId" (gistLoaded)="gist = $event">
  <code [highlight]="gist | gistContent: 'main.js'"></code>
</pre>`,
},
{
  name: 'option_codebloc_04',
  code:
`<ng-container [gist]="gistId" (gistLoaded)="gist = $event">
  <pre *ngFor="let file of gist?.files | keyvalue">
    <code [highlight]="gist | gistContent: file.key"></code>
  </pre>
</ng-container>
`,
},
{
  name: 'option_codebloc_05',
  code:
`<pre>
  <code [highlight]="codeUrl | codeFromUrl | async"></code>
</pre>`,
},
{
  name: 'option_codebloc_06',
  code:
`    "resolveJsonModule": true,
    "esModuleInterop": true`,
},
{
  name: 'option_codebloc_07',
  code:
`  import codes from './codeBlocks.json';

  export class SandboxComponent implements OnInit {
    public nextPieceOfCode;
   	constructor() {
   	  console.log(codes);
   	    this.nextPieceOfCode = codes;
   	}
  }`,
},
];
