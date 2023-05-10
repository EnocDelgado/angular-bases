import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Thor', 'Captain America', 'Ironman', 'Hulk', 'She Hulk', 'Ant-Man']
  public deleteHero?: string;

  removeLastHero() {
    // pop remove last hero and return it
    this.deleteHero = this.heroNames.pop();
  }
}
