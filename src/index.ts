interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "eunchong",
  age: 23,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!!`;
};

console.log(sayHi(person));

export {};
