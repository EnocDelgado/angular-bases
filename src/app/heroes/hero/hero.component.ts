import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Superman';
  }

  changeAge() {
    this.age = 37;
  }

  resetForm() {
    // this.name = 'ironman';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(
      element => {
        element.innerHTML = '<H1>From Angular</h1>';
      }
    )
  }
}
