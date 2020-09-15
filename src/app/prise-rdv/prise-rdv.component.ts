import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {
  
  constructor() { }
  infoReservation = new FormGroup({
    lastName : new FormControl('curt', Validators.required),
    firstName : new FormControl('bryan', Validators.required),
    phone : new FormControl('6763867859', Validators.required),
    birthdate : new FormControl('', Validators.required),

    medecin : new FormControl('', Validators.required),
    jour : new FormControl('', Validators.required),
    heure : new FormControl('', Validators.required)
  })




  onSubmit() {
  }
  ngOnInit(): void {
    
  console.log(this.infoReservation);
    
  }

}
