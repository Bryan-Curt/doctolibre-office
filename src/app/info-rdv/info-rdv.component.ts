import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DateStartPipe } from '../date-start.pipe';
@Component({
  selector: 'app-info-rdv',
  templateUrl: './info-rdv.component.html',
  styleUrls: ['./info-rdv.component.css']
})
export class InfoRdvComponent implements OnInit {

  appointmentsResponse = [];
  practitioner = '';
  constructor(public service: ServiceService) {
    service.getAppointmentResponses('5f5f8f733ef92800151f13aa').then(appointmentsResponse => {
      this.appointmentsResponse = appointmentsResponse;
      console.log('appt response', this.appointmentsResponse);
      this.appointmentsResponse.forEach( apptResponse => {
        console.log(apptResponse);
        this.service.getReference(apptResponse.appointment.reference).then(apt => {
          apptResponse.datestart = (new Date(apt.start).toDateString());
          apptResponse.dateend = (new Date(apt.end).toDateString());
          console.log('datestart', apptResponse.datestart);
          console.log('dateend', apptResponse.dateend);
        });
      });
    });
  }
    ngOnInit(): void {}
}
