import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Estudiante } from '../../Models/estudiante';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const estudiantePrueba = new Estudiante(9999999999999,'NombrePrueba','ApellidoPrueba','testing@testing.com','Buenos Aires','Buenos Aires','Avenida 1234','1111','password1',"USER") 
    this.sharedService.setEstudiante(estudiantePrueba);
    this.username = estudiantePrueba.userName;
  }
  toggleSidenav(): void {

  }

}