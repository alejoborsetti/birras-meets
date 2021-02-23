import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('${this.BASE_URL}/appointments')
  }

  createAppointment(appointmentDate: string, name: string, email: string): Observable<Appointment> {
    return this.http.post<Appointment>('${this.BASE_URL}/appointments',
    { appointmentDate, name, email });
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete('${this.BASE_URL}/appointments/${id}');
  }

}
