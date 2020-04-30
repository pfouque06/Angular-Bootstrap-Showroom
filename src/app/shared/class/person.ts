import { Injectable } from '@angular/core';

export class Person {


  private static _count: number = 0;
  private _id: number;
  private _nom: string;
  private _prenom: string;
  private _type: string;
  private static _types: string[] = [
    "Dummy",
    "Lemming",
    "Noob",
    "Really Smart",
    "Super Flexible",
    "Super Hot",
    "Time Jumper",
    "Weather Changer",
    "Lycanthrope",
  ];

  constructor( prenom?: string, nom?: string, type?: string) {
    this._nom = nom;
    this._prenom = prenom;
    this._type = Person._types[0];
    if ( type ) {
      this._type = type;
    }
    // this._type = ( type ? Person._types[0] : type );
    // this._type = ( type ? Person._types.slice().pop() : type );
    if (this._nom && this._prenom) {
      this._id = ++Person._count;
    }
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(_nom: string) {
    this._nom = _nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(_prenom: string) {
    this._prenom = _prenom;
  }

  get type(): string {
    return this._type;
  }

  set type(_type: string) {
    this._type = _type;
  }

  public static get types(): string[] {
    return Person._types;
  }
}
