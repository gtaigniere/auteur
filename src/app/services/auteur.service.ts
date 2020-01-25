import { Injectable } from '@angular/core';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor() { }

  private auteurs: Auteur[] = [
    { id: 1, prenom: 'Pierre', age: 55 },
    { id: 2, prenom: 'Paul', age: 48 },
    { id: 3, prenom: 'Jacques', age: 41 }
  ]
    getAll(): Auteur[] {
      return this.auteurs;
  }

  getOne(id: number): Auteur {
    for (const auteur of this.auteurs) {
      if (auteur.id === id) {
        return auteur;
      }
    }
    return null;
  }

}
