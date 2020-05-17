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
  public static Tbounce = trigger('Tbounce', [transition('* => *', useAnimation(bounce))]);
  public static Tflash = trigger('Tflash', [transition('* => *', useAnimation(flash))]);
  public static Tpulse = trigger('Tpulse', [transition('* => *', useAnimation(pulse))]);
  public static TrubberBand = trigger('TrubberBand', [transition('* => *', useAnimation(rubberBand))]);
  public static Tshake = trigger('Tshake', [transition('* => *', useAnimation(shake))]);
  public static Tswing = trigger('Tswing', [transition('* => *', useAnimation(swing))]);
  public static Ttada = trigger('Ttada', [transition('* => *', useAnimation(tada))]);
  public static Twobble = trigger('Twobble', [transition('* => *', useAnimation(wobble))]);
  public static Tjello = trigger('Tjello', [transition('* => *', useAnimation(jello))]);
  public static Tflip = trigger('Tflip', [transition('* => *', useAnimation(flip))]);
  public static TjackInTheBox = trigger('TjackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]);


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
