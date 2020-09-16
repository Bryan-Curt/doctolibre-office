import { Pipe, PipeTransform } from '@angular/core';
import { ServiceService } from './service.service';

@Pipe({
  name: 'dateStart'
})
export class DateStartPipe implements PipeTransform {
  constructor(private service: ServiceService) { }
  transform(id: string): any {
    console.log(id);
    let appt: any = '';


  }

}
