import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  server = 'https://fhir.eole-consulting.io/';
  currentPatient: any;

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private setHeaders(): HttpHeaders{
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  // Récupérer la liste des patients (fonctionnel)
  getPatients(): Promise<any> {
    return this.http.get(this.server + 'api/patient/')
      .toPromise().catch(this.handleError);
  }

  // Récupérer un patient selon son identifiant unique (fonctionnel)
  getPatient(id: string): Promise<any>{
    this.currentPatient = this.http.get(this.server + 'api/patient/' + id)
      .toPromise().catch(this.handleError);
    return this.currentPatient;
  }

  // Récupérer la liste des practitioners (fonctionnel)
  getPractitioners(): Promise<any>{
    return this.http.get(this.server + 'api/practitioner/')
      .toPromise().catch(this.handleError);
  }

  // Récupérer un practitioner selon son identifiant unique (fonctionnel)
  getPractitioner(id: string): Promise<any>{
    return this.http.get( this.server + 'api/practitioner/' + id)
      .toPromise().catch(this.handleError);
  }

  // Récupérer la liste des Appointment Responses pour un patient donné (fonctionnel)
  getAppointmentResponses(id: string): Promise<any>{
    return this.http.get( this.server + 'api/appointment-response?actor.reference=Patient/' + id)
      .toPromise().catch(this.handleError);
  }
  // Récupérer un AppointmentResponse avec son identifiant unique
  getAppointmentResponse(id: string): Promise<any>{
    return this.http.get( this.server + 'api/appointment-response/' + id)
      .toPromise().catch(this.handleError);
  }

  // Récupérer la liste des Schedules d'un médecin donné (fonctionnel)
  getSchedule(id: string): Promise<any>{
    return this.http.get( this.server + 'api/schedule?actor.reference=Patient/' + id)
      .toPromise().catch(this.handleError);
  }

  // Envoyer un Appointment
  putAppointment(datas: any): Promise<any>{
    return this.http.put(this.server + 'api/appointment/', datas, {
      headers : this.setHeaders()
    })
      .toPromise().then().catch(this.handleError);
  }
}
