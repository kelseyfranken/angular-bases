import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string > = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //To Do: Emitir el ID del personaje
    if (id) {
    this.onDelete.emit(id)
    console.log({id})
    }
  }

}
