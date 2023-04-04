import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // para que un valor pueda ser renderizado debe ser publico y no es necesario especificarlo
  name = 'Centinela';
  age = 18;
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ArKQ5AIUqacA-5ofQ5nfPevwR0RtI7PBtg&usqp=CAU';

  btnDesable = true;
  person = {
    name: 'Centinela',
    age: 18,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0xKoXUryp0JZ1Sxp-99eQiQcFrmA1M1qbQ&usqp=CAU'
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  products: Product[] = [
    {
      name: 'Consola Nintendo',
      price: 1200,
      image: './assets/images/nintendo.jpg',
      category: 'Consolas',
    },
    {
      name: 'Consola Super Nintendo',
      price: 1500,
      image: './assets/images/supernintendo.jpg'
    },
    {
      name: 'Consola Nintendo 64',
      price: 800,
      image: './assets/images/nintendo64.jpg'
    },
    {
      name: 'Game Cube Nintendo',
      price: 900,
      image: './assets/images/gamecube.jpg'
    },
    {
      name: 'Game Cube Nintendo',
      price: 1100,
      image: './assets/images/wii.jpg'
    },
  ]






  toggleButton() {
    this.btnDesable = !this.btnDesable;
  }

  increaseAge() {
    this.person.age += 1;
  }

  dicreaseAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    if (this.newName !== '') {
      this.names.push(this.newName);
      this.newName = '';
    }
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
