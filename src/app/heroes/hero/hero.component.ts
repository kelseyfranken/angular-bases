import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: string = '45';

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'wonder woman'
  }

  changeAge(): void {
    this.age = '30'
  }

  resetHeroAndAge(): void {
    this.name = 'ironman'
    this.age = '45'
  }

}
