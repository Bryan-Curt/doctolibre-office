import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ServiceService} from '../service.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {
  practitioners = [];
  horaireHeure = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];
  constructor(private service: ServiceService) {
    service.getPractitioners().then(practitioners => {
      for (const p of practitioners){
        this.practitioners.push(p.name[0]);
      }
      console.log(this.practitioners);
    });
  }
  infoReservation = new FormGroup({
    lastName : new FormControl('curt', Validators.required),
    firstName : new FormControl('bryan', Validators.required),
    phone : new FormControl('6763867859', Validators.required),
    birthdate : new FormControl('', Validators.required),

    medecin : new FormControl(this.practitioners, Validators.required),
    jour : new FormControl('', Validators.required),
    heure : new FormControl('', Validators.required)
  });


  onSubmit() {
  }
  ngOnInit(): void {

  console.log(this.infoReservation);

  }

}
