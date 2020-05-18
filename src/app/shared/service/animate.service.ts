import { Injectable } from '@angular/core';

// import { animation, animateChild, group, animate, style, query } from '@angular/animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip, bounce, flash, pulse, rubberBand, shake, swing, tada, wobble, jello, jackInTheBox} from 'ng-animate';
import {
  fadeIn, fadeOut, fadeInUp, fadeOutDown, fadeInDown, fadeOutUp,
  zoomIn, zoomOut, flipInX, flipOutX, flipInY, flipOutY,
  bounceIn, bounceOut, rotateIn, rotateOut, rollIn, rollOut } from 'ng-animate';


@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  // Toggle Triggers
  public static Tbounce = trigger('Tbounce', [transition('* => *', useAnimation(bounce, { params: { timing: 0.4 }}))]);
  public static Tflash = trigger('Tflash', [transition('* => *', useAnimation(flash, { params: { timing: 0.4 }}))]);
  public static Tpulse01 = trigger('Tpulse01', [transition('* => *', useAnimation(pulse, { params: { timing: 0.1 }}))]);
  public static Tpulse02 = trigger('Tpulse02', [transition('* => *', useAnimation(pulse, { params: { timing: 0.2 }}))]);
  public static TrubberBand01 = trigger('TrubberBand01', [transition('* => *', useAnimation(rubberBand, { params: { timing: 0.1 }}))]);
  public static TrubberBand02 = trigger('TrubberBand02', [transition('* => *', useAnimation(rubberBand, { params: { timing: 0.2 }}))]);
  public static Tshake = trigger('Tshake', [transition('* => *', useAnimation(shake, { params: { timing: 0.4 }}))]);
  public static Tswing = trigger('Tswing', [transition('* => *', useAnimation(swing, { params: { timing: 0.4 }}))]);
  public static Ttada = trigger('Ttada', [transition('* => *', useAnimation(tada, { params: { timing: 0.4 }}))]);
  public static Twobble = trigger('Twobble', [transition('* => *', useAnimation(wobble, { params: { timing: 0.4 }}))]);
  public static Tjello = trigger('Tjello', [transition('* => *', useAnimation(jello, { params: { timing: 0.4 }}))]);
  public static Tflip01 = trigger('Tflip01', [transition('* => *', useAnimation(flip), { params: { timing: 0.1 }})]);
  public static Tflip02 = trigger('Tflip02', [transition('* => *', useAnimation(flip), { params: { timing: 0.2 }})]);
  public static Tflip04 = trigger('Tflip04', [transition('* => *', useAnimation(flip), { params: { timing: 0.4 }})]);
  public static TjackInTheBox = trigger('TjackInTheBox', [transition('* => *', useAnimation(jackInTheBox, { params: { timing: 0.4 }}))]);


  // Gate Triggers : 'in' <-> 'out' transition commuting
  public static TzoomGate = trigger('TzoomGate', [
    transition('out => in', useAnimation(zoomIn, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(zoomOut, { params: { timing: 0.4 }})),
  ]);
  public static TfadeGate = trigger('TfadeGate', [
    transition('out => in', useAnimation(fadeIn, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(fadeOut, { params: { timing: 0.4 }})),
  ]);
  public static TfadeDownGate = trigger('TfadeDownGate', [
    transition('out => in', useAnimation(fadeInUp, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(fadeOutDown, { params: { timing: 0.4 }})),
  ]);
  public static TfadeUpGate = trigger('TfadeUpGate', [
    transition('out => in', useAnimation(fadeInDown, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(fadeOutUp, { params: { timing: 0.4 }})),
  ]);
  public static TflipXGate = trigger('TflipXGate', [
    transition('out => in', useAnimation(flipInX, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(flipOutX, { params: { timing: 0.4 }})),
  ]);
  public static TflipYGate = trigger('TflipYGate', [
    transition('out => in', useAnimation(flipInY, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(flipOutY, { params: { timing: 0.4 }})),
  ]);
  public static TbounceGate = trigger('TbounceGate', [
    transition('out => in', useAnimation(bounceIn, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(bounceOut, { params: { timing: 0.4 }})),
  ]);
  public static TrotateGate = trigger('TrotateGate', [
    transition('out => in', useAnimation(rotateIn, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(rotateOut, { params: { timing: 0.4 }})),
  ]);
  public static TrollGate = trigger('TrotateGate', [
    transition('out => in', useAnimation(rollIn, { params: { timing: 0.4 }})),
    transition('in => out', useAnimation(rollOut, { params: { timing: 0.4 }})),
  ]);

  constructor() { }
}
