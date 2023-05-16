import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 5000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 20
  }];

  public onNewChar(char: Character): void {
    this.characters.push({
      id: uuid(),
      ...char
    })

    /* this.characters.push({
      name: char.name,
      power: char.power
    }) */
  }

 /*  public onDeleteCharacter(char_index: number): void {
    this.characters.splice(char_index, 1)
  } */

  deleteCharById(id: string) {
    if (id) {
    this.characters = this.characters.filter(character => character.id !== id);
    }
  }



  constructor() { }

}
