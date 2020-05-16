import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fontawesome',
  templateUrl: './fontawesome.component.html',
  styleUrls: ['./fontawesome.component.css']
})
export class FontawesomeComponent implements OnInit {

  public iconSelector: string =
`<fa-icon icon="hand-peace"></fa-icon>
<fa-icon [icon]="['fas', 'user']"></fa-icon>
<fa-icon [icon]="['far', 'user']"></fa-icon>
<fa-icon [icon]="['fab', 'github']"></fa-icon>`;

  public coloring: string =
`<fa-icon [icon]="['fas', 'camera']" class="text-success"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" class="text-warning"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" class="text-danger"></fa-icon>`;

  public sizing: string =
`<fa-icon [icon]="['fas', 'camera']" size="xs" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="sm" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="lg" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="2x" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="3x" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="5x" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="7x" class="text-info"></fa-icon>
<fa-icon [icon]="['fas', 'camera']" size="10x" class="text-info"></fa-icon>`;

  public fixedWidthCode: string =
`<div style="font-size: 2rem;">
  <div><fa-icon icon="skating" [fixedWidth]='true' class="text-info"></fa-icon> Skating</div>
  <div><fa-icon icon="skiing" [fixedWidth]='true' class="text-primary"></fa-icon> Skiing</div>
  <div><fa-icon icon="skiing-nordic" [fixedWidth]='true' class="text-info"></fa-icon> Nordic Skiing</div>
  <div><fa-icon icon="snowboarding" [fixedWidth]='true' class="text-primary"></fa-icon> Snowboarding</div>
  <div><fa-icon icon="hockey-puck" [fixedWidth]='true' class="text-info"></fa-icon> Hockey</div>
  <div><fa-icon icon="snowman" [fixedWidth]='true' class="text-primary"></fa-icon> Snowman</div>
</div>`;

  public listedIcons: string =
`<ul class="fa-ul">
  <li><span class="fa-li"><fa-icon [icon]="['far', 'check-square']"></fa-icon></span>List item checked</li>
  <li><span class="fa-li"><fa-icon [icon]="['far', 'square']"></fa-icon></span>List item unchecked</li>
  <li><span class="fa-li"><fa-icon [icon]="['far', 'check-square']"></fa-icon></span>List icons checked</li>
</ul>`;

  public rotateAndFlip: string =
`<div class="fa-4x">
  <fa-icon icon="snowboarding" ></fa-icon>
  <fa-icon icon="snowboarding" rotate="90"></fa-icon>
  <fa-icon icon="snowboarding" rotate="180"></fa-icon>
  <fa-icon icon="snowboarding" rotate="270"></fa-icon>
</div>
<br>
<div class="fa-4x">
  <fa-icon icon="snowboarding" ></fa-icon>
  <fa-icon icon="snowboarding" flip="horizontal"></fa-icon>
  <fa-icon icon="snowboarding" flip="vertical"></fa-icon>
  <fa-icon icon="snowboarding" flip="both"></fa-icon>
</div>`;

  public animating: string =
`<div class="fa-4x">
  <fa-icon icon="spinner" [spin]="true" ></fa-icon>
  <fa-icon icon="circle-notch" [spin]="true"></fa-icon>
  <fa-icon icon="sync" [spin]="true"></fa-icon>
  <fa-icon icon="cog" [spin]="true"></fa-icon>
</div>
<div class="fa-4x">
  <fa-icon icon="spinner" [pulse]="true" ></fa-icon>
  <fa-icon icon="circle-notch" [pulse]="true"></fa-icon>
  <fa-icon icon="sync" [pulse]="true"></fa-icon>
  <fa-icon icon="cog" [pulse]="true"></fa-icon>
</div>`;

  public pulling: string =
`<p><fa-icon icon="quote-left" pull='left' size="2x"></fa-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec dapibus ligula lectus, nec eleifend est malesuada id. Mauris tristique euismod odio, nec tempor massa aliquam quis.
Sed aliquet rutrum consectetur. Phasellus viverra congue lacinia. Integer lacus sem, ullamcorper at tempor luctus, aliquam ac justo.
Nulla sed mauris arcu. Duis sagittis lobortis felis, sit amet interdum mauris lobortis ut. Vivamus vitae sapien justo.
In hac habitasse platea dictumst. Aliquam luctus augue neque. Morbi maximus facilisis placerat.</p>
<br>
<p><fa-icon icon="arrow-right" pull='right' [border]='true' size="2x"></fa-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec dapibus ligula lectus, nec eleifend est malesuada id. Mauris tristique euismod odio, nec tempor massa aliquam quis.
  Sed aliquet rutrum consectetur. Phasellus viverra congue lacinia. Integer lacus sem, ullamcorper at tempor luctus, aliquam ac justo.
  Nulla sed mauris arcu. Duis sagittis lobortis felis, sit amet interdum mauris lobortis ut. Vivamus vitae sapien justo.
  In hac habitasse platea dictumst. Aliquam luctus augue neque. Morbi maximus facilisis placerat.</p>`;

  public iconStacking: string =
`<fa-stack size="3x">
  <fa-icon icon="square" stackItemSize="2x"></fa-icon>
  <fa-icon icon="terminal" stackItemSize="1x" [inverse]="true"></fa-icon>
</fa-stack>
<fa-stack size="3x">
  <fa-icon icon="camera" stackItemSize="1x"></fa-icon>
  <fa-icon icon="ban" stackItemSize="2x" class="text-danger"></fa-icon>
</fa-stack>`

  public power01: string =
`<div class="fa-4x">
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info"></fa-icon>;
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="grow-8"></fa-icon>
</div>`;

  public power02: string =
`<div class="fa-4x">
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8 up-6"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8 right-6"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8 down-6"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8 left-6"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8 up-6 left-6"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="shrink-8 down-6 up-6"></fa-icon>
</div>`;

  public power03: string =
`<div class="fa-4x">
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="rotate-30"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="rotate-45"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="rotate-60"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="rotate--45"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="flip-v"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="flip-h"></fa-icon>
  <fa-icon [icon]="['fas', 'seedling']" class="bg-info" transform="flip-v flip-h"></fa-icon>
</div>`;

  public masking: string =
`<div class="fa-4x">
  <fa-icon [icon]="['fas', 'pen']" transform="shrink-10 up-0.5" [mask]="['fas', 'comment']" class="bg-info" ></fa-icon>
  <fa-icon [icon]="['fab', 'facebook-f']" transform="shrink-3.5 down-1.6 right-1.25" [mask]="['fas', 'circle']" class="bg-info" ></fa-icon>
  <fa-icon [icon]="['fas', 'headphones']" transform="shrink-6" [mask]="['fas', 'square']" class="bg-info" ></fa-icon>
  <fa-icon [icon]="['fas', 'mask']" transform="shrink-3 up-1" [mask]="['fas', 'circle']" class="bg-info" ></fa-icon>
</div>`;

  public layering: string =
`<div class="fa-4x">
  <fa-layers [fixedWidth]="true" class="bg-info">
    <fa-icon [icon]="['fas', 'square']"></fa-icon>
    <fa-icon [icon]="['fas', 'spinner']" [inverse]="true" transform="shrink-6" [spin]="true"></fa-icon>
  </fa-layers>
  <fa-layers [fixedWidth]="true" class="bg-info">
    <fa-icon [icon]="['fas', 'square']"></fa-icon>
    <fa-layers-text content="Yo" class="text-info" transform="shrink-4"></fa-layers-text>
  </fa-layers>
  <fa-layers [fixedWidth]="true" class="bg-info">
    <fa-icon [icon]="['fas', 'envelope']"></fa-icon>
    <fa-layers-counter content="99+"></fa-layers-counter>
  </fa-layers>
  <fa-layers [fixedWidth]="true" class="bg-info">
    <fa-icon [icon]="['fas', 'calendar']"></fa-icon>
    <fa-layers-text content="27" [inverse]="true" class="font-weight-bold" transform="shrink-8 down-3"></fa-layers-text>
  </fa-layers>
  <fa-layers [fixedWidth]="true" class="bg-info">
    <fa-icon [icon]="['fas', 'certificate']"></fa-icon>
    <fa-layers-text content="NEW" [inverse]="true" class="font-weight-bold" transform="shrink-11.5 rotate--30"></fa-layers-text>
  </fa-layers>
  <fa-layers [fixedWidth]="true" class="bg-info">
    <fa-icon [icon]="['fas', 'play']" transform="rotate--90 grow-2"></fa-icon>
    <fa-icon [icon]="['fas', 'sun']" class="text-warning" transform="shrink-10 up-2"></fa-icon>
    <fa-icon [icon]="['fas', 'moon']" [inverse]="true" transform="shrink-11 down-4.2 left-4"></fa-icon>
    <fa-icon [icon]="['fas', 'star']" class="text-danger" transform="shrink-11 down-4.2 right-4"></fa-icon>
  </fa-layers>
</div>`;

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
