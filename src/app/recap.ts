const username: string = 'rvaldez';

const sum = (a: number, b: number) => {
  return 'a'
}
sum(1,2);

class Person {
  // No es necesario
  // age: number;
  // lastName: string;

  // y solo definiendola en el constructor como public no es necesario inicializarla
  constructor(public age: number, public lastName: string) {}
}

// instaciamos la clase Person
const cbx = new Person(23, 'Valdez');
