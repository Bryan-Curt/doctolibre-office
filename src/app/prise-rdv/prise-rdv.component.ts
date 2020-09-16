import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ServiceService} from '../service.service';
import { FormsModule }   from '@angular/forms';
import {Data} from '../data';
import { Reference } from '../data';
import {Participants} from '../data';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.css']
})
export class PriseRdvComponent implements OnInit {
  practitioners = [];
  horaireHeure = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  data = new Data() ;
  pracRef = new Reference() ;
  patRef = new Reference();
  prac = new Participants();
  pat = new Participants();
  constructor(private service: ServiceService) {
    service.getPractitioners().then(practitioners => {
      for (const p of practitioners){
        this.practitioners.push(p);
      }
    });
  }
  infoReservation = new FormGroup({
    lastName : new FormControl('curt', Validators.required),
    firstName : new FormControl('bryan', Validators.required),
    phone : new FormControl('6763867859', Validators.required),
    birthdate : new FormControl(''),

    medecin : new FormControl(this.practitioners, Validators.required),
    jour : new FormControl('', ),
    heure : new FormControl('', )
  });


  onSubmit() {
    let med: any;
    for (const p of this.practitioners){
      if (p.name[0].family == this.infoReservation.value.medecin){
          med = p;
      }
    }
    const dateStart = new Date(this.infoReservation.value.jour + ' ' + this.infoReservation.value.heure + ':00');
    const dateEnd = dateStart;
    dateEnd.setHours(dateEnd.getHours() + 1);
    console.log(dateEnd);
    this.patRef.reference = 'Patient/5f5f8f733ef92800151f13aa';
    this.pracRef.reference = 'Practitioner/' + med.id;
    this.pat.actor = this.patRef;
    this.prac.actor = this.pracRef;
    this.pat.status = 'accepted';
    this.prac.status = 'accepted';
    this.data.status = 'pending';
    this.data.participant = [this.pat, this.prac];
    this.data.start = dateStart.toISOString();
    this.data.end = dateEnd.toISOString();
    console.log(this.data);

    this.service.insertAppointment(this.data);
  }
  ngOnInit(): void {


  }

}
