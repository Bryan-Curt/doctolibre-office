export class Data {
    resourceType = "Appointment";
       status?: string;
       start? : string;
       end? : string;
       participant? : Participants[];
      
  };
export class Participants{
    actor? : Reference;
    status : string;
}
export class Reference{
    reference : string
}