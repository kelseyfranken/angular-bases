import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public character: Character = {
    name: '',
    power: 0
  }

  @Output()
  public onNewChar: EventEmitter<Character> = new EventEmitter();

  emitChar(): void {
    console.log(this.character)
    if (this.character.name.length === 0) return;
    this.onNewChar.emit(this.character);
    this.character.name = ""
    this.character.power = 0
  }

}
