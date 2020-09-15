import { Component } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctolibre-office';

  constructor(private service: ServiceService) {
    service.insertAppointment({
      resourceType: 'Appointment',
      status: 'noshow',
      participant: [
        {
          actor: {
            reference: 'Patient/5f5f8f733ef92800151f13aa'
          },
          status: 'accepted'
        }
      ]
    }).then(
      patients => {
        console.log(patients);
      });
  }
}
