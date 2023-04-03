import { Component } from '@angular/core';

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
}
