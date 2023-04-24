import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    { name: "Pretinha", type: "Dog", age: 8},
    { name: "Tom", type: "Cat", age: 5},
    { name: "Frida", type: "Snake", age: 10},
    { name: "Bob", type: "Horse", age: 3}
  ]

  animalDetails = "";

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
