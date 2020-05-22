import { Injectable } from '@angular/core';

// import { animation, animateChild, group, animate, style, query } from '@angular/animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flip, bounce, flash, pulse, rubberBand, shake, swing, tada, wobble, jello, jackInTheBox} from 'ng-animate';
import {
  zoomIn, zoomOut, fadeIn, fadeOut, fadeInUp, fadeOutDown, fadeInDown, fadeOutUp,
  slideInUp, slideOutDown, slideInDown, slideOutUp, flipInX, flipOutX, flipInY, flipOutY,
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


  // Gate Triggers : '*' <-> 'void' transition commuting
  public static TzoomGate = trigger('TzoomGate', [
    transition('void => *', useAnimation(zoomIn, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(zoomOut, { params: { timing: 0.4 }})),
  ]);
  public static TslideUpGate = trigger('TslideUpGate', [
    transition('void => *', useAnimation(slideInUp, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(slideOutDown, { params: { timing: 0.4 }})),
  ]);
  public static TslideDownGate = trigger('TslideDownGate', [
    transition('void => *', useAnimation(slideInDown, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(slideOutUp, { params: { timing: 0.4 }})),
  ]);
  public static TslideDownGate10 = trigger('TslideDownGate10', [
    transition('void => *', useAnimation(slideInDown, { params: { timing: 1 }})),
    transition('* => void', useAnimation(slideOutUp, { params: { timing: 1 }})),
  ]);
  public static TfadeGate = trigger('TfadeGate', [
    transition('void => *', useAnimation(fadeIn, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(fadeOut, { params: { timing: 0.4 }})),
  ]);
  public static TfadeUpGate = trigger('TfadeUpGate', [
    transition('void => *', useAnimation(fadeInUp, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(fadeOutDown, { params: { timing: 0.4 }})),
  ]);
  public static TfadeDownGate = trigger('TfadeDownGate', [
    transition('void => *', useAnimation(fadeInDown, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(fadeOutUp, { params: { timing: 0.4 }})),
  ]);
  public static TfadeDownGate10 = trigger('TfadeDownGate10', [
    transition('void => *', useAnimation(fadeInDown, { params: { timing: 1 }})),
    transition('* => void', useAnimation(fadeOutUp, { params: { timing: 1 }})),
  ]);
  public static TfadeUpGate04 = trigger('TfadeUpGate04', [
    transition('void => *', useAnimation(fadeInDown, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(fadeOutUp, { params: { timing: 0.4 }})),
  ]);
  public static TflipXGate = trigger('TflipXGate', [
    transition('void => *', useAnimation(flipInX, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(flipOutX, { params: { timing: 0.4 }})),
  ]);
  public static TflipXGate10 = trigger('TflipXGate10', [
    transition('* => void', useAnimation(flipOutX, { params: { timing: 1 }})),
    transition('void => *', useAnimation(flipInX, { params: { timing: 1 }})),
  ]);
  public static TflipYGate = trigger('TflipYGate', [
    transition('void => *', useAnimation(flipInY, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(flipOutY, { params: { timing: 0.4 }})),
  ]);
  public static TbounceGate = trigger('TbounceGate', [
    transition('void => *', useAnimation(bounceIn, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(bounceOut, { params: { timing: 0.4 }})),
  ]);
  public static TrotateGate = trigger('TrotateGate', [
    transition('void => *', useAnimation(rotateIn, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(rotateOut, { params: { timing: 0.4 }})),
  ]);
  public static TrollGate = trigger('TrotateGate', [
    transition('void => *', useAnimation(rollIn, { params: { timing: 0.4 }})),
    transition('* => void', useAnimation(rollOut, { params: { timing: 0.4 }})),
  ]);

  constructor() { }
}
