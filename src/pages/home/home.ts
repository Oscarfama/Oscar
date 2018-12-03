import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Client} from "../../Models/Client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationResponse} from "../../Models/ValidationResponse";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  client : Client;
  formValidator: FormGroup;
  genders = [
    {
      value: 'M',
      name: 'Mujer'
    },
    {
      value: 'H',
      name: 'Hombre'
    },
    {
      value: 'N',
      name: 'Otros'
    }
  ];
  products: string[]=[
    'Blizzard','Cono','Pastel','Bebidas','Otros'
  ];
  validation_messages = ValidationResponse.validation_Response;
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {
    this.formValidator = this.formBuilder.group({
      NameForm:['', Validators.required,],
      genderForm: ['', Validators.required],
      AgeForm: ['', Validators.required],
    });
    this.client = new Client();
  }
  btnClickAction(){

  }

}
