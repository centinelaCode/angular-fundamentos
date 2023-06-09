import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // para que un valor pueda ser renderizado debe ser publico y no es necesario especificarlo
  widthImg = 50;
  name = 'Centinela';
  age = 18;
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ArKQ5AIUqacA-5ofQ5nfPevwR0RtI7PBtg&usqp=CAU';

  btnDesable = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Centinela',
    age: 18,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0xKoXUryp0JZ1Sxp-99eQiQcFrmA1M1qbQ&usqp=CAU'
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products: Product[] = [
    {
      name: 'Silla',
      price: 1200,
      image: './assets/images/sillas.png',
      category: 'Consolas',
    },
    {
      name: 'Cubre Bocas',
      price: 1500,
      image: './assets/images/cubre_bocas.png'
    },
    {
      name: 'Pants Woman',
      price: 800,
      image: './assets/images/pants_woman.png'
    },
    {
      name: 'Phones',
      price: 900,
      image: './assets/images/phone.png'
    },
    {
      name: 'Toys',
      price: 1100,
      image: './assets/images/toys.png'
    },
    {
      name: 'Box',
      price: 1100,
      image: './assets/images/box.png'
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

  onRegister() {
    console.log(this.register);
  }
}
