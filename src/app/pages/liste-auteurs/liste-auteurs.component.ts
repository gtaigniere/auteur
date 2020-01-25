import { Component, OnInit } from '@angular/core';
import { Auteur } from '../../models/auteur';
import { AuteurService } from '../../services/auteur.service'

@Component({
  selector: 'app-liste-auteurs',
  templateUrl: './liste-auteurs.component.html',
  styleUrls: ['./liste-auteurs.component.css']
})

export class ListeAuteursComponent implements OnInit {

  auteurs: Auteur[];

  constructor(private auteurService: AuteurService) { }

  ngOnInit() {
    this.auteurs = this.auteurService.getAll();
  }

}
