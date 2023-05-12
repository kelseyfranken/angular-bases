import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter: {{counter}}</h2>

<button (click)="increaseBy(-1)" >-1</button>
<button (click)="increaseBy(1)" >+1</button>

<button (click)="resetCounter()"> Reset </button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  public counter: number = 10;

  // esto es publico por defecto
    increaseBy(value: number): void {
      this.counter += value
    }

    resetCounter(): void {
      this.counter = 10
    }

  ngOnInit() { }
}
