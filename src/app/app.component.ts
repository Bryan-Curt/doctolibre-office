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
    service.putAppointment('{\n' +
      '    "resourceType": "Patient",\n' +
      '    "active": true,\n' +
      '    "name": [\n' +
      '        {\n' +
      '            "use": "official",\n' +
      '            "family": "Cryan",\n' +
      '            "given": [\n' +
      '                "Burt",\n' +
      '                "Albert"\n' +
      '            ]\n' +
      '        }\n' +
      '    ]\n' +
      '}').then(
      patients => {
        console.log(patients);
      });
  }
}
