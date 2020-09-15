import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-rdv',
  templateUrl: './info-rdv.component.html',
  styleUrls: ['./info-rdv.component.css']
})
export class InfoRdvComponent implements OnInit {

  rdvList: any = [
    {id:1, date:"2 septembre 2020", heure: "16:00", medecin:"Dr. Chauvet", statut:"refuse"},
    {id:2, date:"15 septembre 2020", heure: "14:00", medecin:"Dr. Moistrel", statut:"valide"},
    {id:3, date:"27 septembre 2020", heure: "11:30", medecin:"Dr. Chauvet", statut:"encours"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
