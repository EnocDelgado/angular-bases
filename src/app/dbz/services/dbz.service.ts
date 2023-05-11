import { Injectable } from '@angular/core';
import { v4 as uuid  }from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name:'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 7900
    }
  ];

  // Add new Character from Form
  addCharacter( character: Character): void {
    // add an id when add a new character
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push( newCharacter );
  }

  // Remove a character from the list
  // onDeleteCharacter( index: number ): void {
    // this.characters.splice( index, 1 );

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );

  }

}
