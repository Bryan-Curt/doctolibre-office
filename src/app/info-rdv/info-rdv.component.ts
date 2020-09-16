import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DateStartPipe } from '../date-start.pipe';
@Component({
  selector: 'app-info-rdv',
  templateUrl: './info-rdv.component.html',
  styleUrls: ['./info-rdv.component.css']
})
export class InfoRdvComponent implements OnInit {

  appointments = [];
  practitioner = '';
  constructor(public service: ServiceService) {
    service.getAppointmentResponses('5f5f8f733ef92800151f13aa').then(appointments => {
      this.appointments = appointments;
      console.log(this.appointments);
    });
  }
    ngOnInit(): void {}
}
