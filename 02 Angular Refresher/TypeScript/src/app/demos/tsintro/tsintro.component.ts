import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-tsintro",
  templateUrl: "./tsintro.component.html",
  styleUrls: ["./tsintro.component.css"]
})
export class TsintroComponent implements OnInit {
  constructor() {}

  url = "/assets/vouchers.json";

  ngOnInit() {}

  basicVariables() {
    debugger;

    var myname: string = "alex";

    //Numbers
    var age: number;
    var weight: number = 83.12;
    var dogWeight = 25.4;
    // dogWeight = "heavy"
    var rand = Math.random();

    var numbers: number[] = [];
    var myNumArray: Array<number> = new Array();

    numbers[0] = 1;
    // numbers.push("two"); // compile-time error

    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean

    var isCustomer: boolean = false;
    var finished = false;

    //strings
    var dogName: string = "Giro";
    var otherDogName = "Soi";
    var myString = "ten";

    var strings: Array<string> = ["hubert", "Sam"];
    strings.push("Hans");
    //strings[1] = 1337; // compile time error

    // Function returning never must have unreachable end point
    function error(message: string): never {
      throw new Error(message);
    }

    // Not much else we can assign to these variables!
    var u: undefined = undefined;
    var n: null = null;
  }

  useLetConst() {
    debugger;

    var index: number = 0;
    var array = ["a", "b", "c"];
    for (let index: number = 0; index < array.length; index++) {
      console.log("Inside for ..." + index);
      console.log("Inside for ..." + array[index]);
    }
    console.log(index); // 0
    const pi = 3.14;
    //pi = 2;

    const person = { name: "john", age: 22 };
    person.name = "franz";
  }

  functionParameters() {
    debugger;

    //optional param
    function buildName(firstName: string, lastName?: string) {
      if (lastName) return firstName + " " + lastName;
      else return firstName;
    }

    console.log(buildName("Bob"));
    console.log(buildName("Giro", "Galgohead"));

    //default param
    function getAddress(street: string, city: string = "Vienna") {
      return `${street}, ${city}`;
    }

    console.log(getAddress("Neuwaldegger Straße"));
    console.log(getAddress("Seestraße", "Idolsberg"));
  }

  objectsBasics() {
    debugger;

    // Plain old JavaScript
    var myPerson = new Object();
    // myPerson.smile = function(){...}

    var otherPerson = <any>{};
    otherPerson.smile = function() {};

    let person: any = { Id: 1, Name: "Alexander" };
    person.walk = () => console.log(`I am ${person.Name} and I'm walking`);

    person.walk();
  }

  classesConstructor() {
    debugger;

    class Person {
      name: string; //public by default
      alive: boolean;

      constructor(Name: string, Alive: boolean) {
        this.name = Name;
        this.alive = Alive;
      }
    }

    let jim = new Person("Jim", true);
    console.log(jim.name + " is alive: " + jim.alive);

    class Invoice {
      text: string;
      paid: boolean;

      constructor(Text: string = "", Paid: boolean = false) {
        this.text = Text;
        this.paid = Paid;
      }
    }

    var b1: Invoice = new Invoice("Car Purchase");
    var b2: Invoice = new Invoice("Rösti für Freundin", true);

    console.log("b1 with Text: " + b1.text + " was " + b1.paid);
    console.log("b2 with Text: " + b2.text + " was " + b2.paid);

    class Dog {
      constructor(private name: string, public breed: string) {}
      barkName() {
        return "Wuff, my name is " + this.name + ", I am a " + this.breed;
      }
      sayName() {
        return "Wuff, my name is " + name; // Wuff, my name is
      }
    }

    let dog = new Dog("Soi", "Whippet");
    console.log(dog.barkName());
    console.log(dog.sayName());
    console.log(dog.breed);
  }

  usingjQueryWithPromise() {
    debugger;

    //promise based
    $.ajax({
      type: "GET",
      url: this.url,
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    })
      .then(data => console.log("Data received from jQuery: ", data))
      .catch(err => console.log("Error received from jQuery: ", err));
  }

  logPipe = (msg: string, data: any) => {
    console.log(`logPipe() - ${msg}:`, data);
  };

  usingFetchAwait() {
    debugger;
    async function getAllVouchers() {
      let response = await fetch("/assets/vouchers.json");
      let voucher = await response.json();
      console.log("Data received using fetch - await");
      console.log(voucher);
    }

    getAllVouchers();
  }
}
