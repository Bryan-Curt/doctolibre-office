import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {
  medecins = ['un', 'deux', 'trois']
  horaireDate = ['16 sept', '17 sept', '19 sept']
  horaireHeure = ['10:30', '14:15', '16:00']
  constructor() { }
  infoReservation = new FormGroup({
    lastName : new FormControl('curt', Validators.required),
    firstName : new FormControl('bryan', Validators.required),
    phone : new FormControl('6763867859', Validators.required),
    birthdate : new FormControl('', Validators.required),

    medecin : new FormControl(this.medecins, Validators.required),
    jour : new FormControl('', Validators.required),
    heure : new FormControl('', Validators.required)
  })

  
  onSubmit() {
  }
  ngOnInit(): void {
    
  console.log(this.infoReservation);
    
  }

}
