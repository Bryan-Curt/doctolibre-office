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
  patient : any;

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
    service.getPatient('5f5f8f733ef92800151f13aa').then(p =>{ this.patient =p;
      this.lastName.setValue(this.patient.name[0].family)
      this.firstName.setValue(this.patient.name[0].given[0])
      this.idU.setValue(this.patient.id)
      console.log(this.patient)
    })
     
  }
  
  lastName = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  idU = new FormControl('',Validators.required)

  medecin = new FormControl(this.practitioners, Validators.required);
  jour = new FormControl('',Validators.required );
  heure = new FormControl('', Validators.required);
  comment = new FormControl('', );

  infoReservation = new FormGroup({
    lastName : this.lastName,
    firstName : this.firstName,
    idU : this.idU,

    medecin : this.medecin,
    jour : this.jour,
    heure : this.heure,
    comment : this.comment
  });


  onSubmit() {
    let med: any;
    for (const p of this.practitioners){
      if (p.name[0].family == this.infoReservation.value.medecin){
          med = p;
      }
    }
    const dateStart = new Date(this.infoReservation.value.jour + ' ' + this.infoReservation.value.heure + ':00');
    this.patRef.reference = 'Patient/5f5f8f733ef92800151f13aa';
    this.pracRef.reference = 'Practitioner/' + med.id;
    this.pat.actor = this.patRef;
    this.prac.actor = this.pracRef;
    this.pat.status = 'accepted';
    this.prac.status = 'accepted';
    this.data.status = 'pending';
    this.data.participant = [this.pat, this.prac];
    this.data.start = dateStart.toISOString();
    this.data.comment = this.infoReservation.value.comment;
    const dateEnd = dateStart;
    dateEnd.setHours(dateEnd.getHours() + 1);
    console.log(dateEnd);
    this.data.end = dateEnd.toISOString();
    console.log(this.data);

    // this.service.insertAppointment(this.data);
  }
  ngOnInit(): void {

    
    
  }

}
