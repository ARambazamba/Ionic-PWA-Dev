import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Person } from "src/app/shared/model";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.page.html",
  styleUrls: ["./reactive-form.page.scss"]
})
export class ReactiveFormPage implements OnInit {
  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: [this.person.name],
      age: [this.person.age],
      gender: [this.person.gender],
      dob: [this.person.dob],
      married: [this.person.married],
      wealth: [this.person.wealth]
    });
  }

  personForm: FormGroup;

  person: Person = <Person>{
    name: "Heinz",
    gender: "male",
    age: 12,
    email: "derschoeneheinz@xyz.at",
    wealth: "poor"
  };

  wealth = ["poor", "rich", "middle class"];

  savePerson(form) {
    console.log("Form:", form);
    console.log("Person:", this.person);
  }

  ngOnInit() {}
}
