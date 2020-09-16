import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-info-rdv',
  templateUrl: './info-rdv.component.html',
  styleUrls: ['./info-rdv.component.css']
})
export class InfoRdvComponent implements OnInit {

  appointments = [];
  practitioner = '';
  constructor(private service: ServiceService) {
    service.getAppointmentResponses('5f5f8f733ef92800151f13aa').then(appointments => {
      this.appointments = appointments;
      console.log(this.appointments);
    });
  }

  // tslint:disable-next-line:typedef
  setPractitionerName(id: string){
    let name = '';
    let apt: any = '';
    this.service.getAppointmentResponse(id).then(appoint => {
      apt = appoint;
    });
    return name;
  }
    ngOnInit(): void {}
}
