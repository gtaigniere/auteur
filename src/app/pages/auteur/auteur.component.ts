import { Component, OnInit } from '@angular/core';
import { Auteur } from '../../models/auteur';
import { AuteurService } from '../../services/auteur.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {

  auteur: Auteur;

  constructor(private auteurService: AuteurService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.auteur = this.auteurService.getOne(id);
  }

}
