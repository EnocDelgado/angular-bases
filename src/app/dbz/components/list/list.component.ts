import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[
    {
      name: 'Trunk',
      power: 5000
    }
  ];

  // Emit an Index
  // onDelte = Index value: number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter( id: string  ): void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
