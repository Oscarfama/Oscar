import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Client} from "../../Models/Client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationResponse} from "../../Models/ValidationResponse";
import {AngularFireDatabase} from "@angular/fire/database";
import * as firebase from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  client : Client;
  formValidator: FormGroup;
  genders: string[] = ['Mujer','Hombre','Otro'];
  products: string[]=[
    'Blizzard','Cono','Pastel','Bebidas','Otros'
  ];
  sucursales: string[]=[
    'Altaria','Aguascalientes Norte','Aguascalientes Sur','DQ Adana'
  ];
  calificacion: number[]=[1,2,3,4,5,6,7,8,9,10];
  validation_messages = ValidationResponse.validation_Response;
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder, public afd: AngularFireDatabase) {
    this.client = new Client();

    this.formValidator = this.formBuilder.group({
      NameForm:['', Validators.required,],
      genderForm: ['', Validators.required],
      AgeForm: ['', Validators.required],
    });
  }
  btnClickAction(client: Client): void {
    console.log(this.client);
    firebase.database().ref('/Clientes').push(this.client);
  }

}
