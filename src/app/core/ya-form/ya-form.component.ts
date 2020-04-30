import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ya-form',
  templateUrl: './ya-form.component.html',
  styleUrls: ['./ya-form.component.css']
})
export class YaFormComponent implements OnInit {

  public nom: string = "";
  public prenom: string = "";
  public result: string = "";

  constructor() { }

  ngOnInit(): void {
}

  direBonjour() {
    this.result = this.prenom + " " + this.nom;
    /* console.log("Bonjour"); */
  }

}
