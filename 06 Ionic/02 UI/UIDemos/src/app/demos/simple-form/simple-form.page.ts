import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/shared/model";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.page.html",
  styleUrls: ["./simple-form.page.scss"]
})
export class SimpleFormPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  person: Person = <Person>{
    name: "Heinz",
    gender: "male",
    age: 12,
    email: "derschoeneheinz@xyz.at",
    wealth: "poor",
    dob: new Date(2001, 11, 22)
  };

  wealth = ["poor", "rich", "middle class"];

  ionViewDidLoad() {
    console.log("ionViewDidLoad SimpleFormPage");
  }

  savePerson(evt) {
    console.log("Event:", evt);
    console.log("Person:", this.person);
  }
}
