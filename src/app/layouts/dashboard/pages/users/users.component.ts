import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormComponent } from '../../../../components/reactive-form/reactive-form.component';
import { FormDataService } from '../../pages/form-data.service';
import { Iusuario } from '../../../../Models/usuario.models';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'userLastName', 'userEmail', 'userCity', 'userProvince', 'userAddress', 'actions'];  
  users: Iusuario[] = [
    {
      id: 1,
      userName: 'prueba 1',
      userLastName: 'string',
      userEmail: 'string',
      userCity: 'string',
      userProvince: 'string',
      userAddress: 'string',
      inputZip: 'string',
      userPassword: 'string',
      role: 'ADMIN',
      createdAt: new Date(),
      actions: []
    },
    {
      id: 2,
      userName: 'prueba 2',
      userLastName: 'string',
      userEmail: 'string',
      userCity: 'string',
      userProvince: 'string',
      userAddress: 'string',
      inputZip: 'string',
      userPassword: 'string',
      role: 'ADMIN',
      createdAt: new Date(),
      actions: []
    }
  ];

  constructor(
    private formDataService: FormDataService,
    private dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
      data: {}
    });
  }

  ngOnInit(): void {
    this.formDataService.formData$.subscribe(data => {
      if (data) {
        // verificaciones internas para corroborar el flujo del formulario
        console.log('Datos recibidos (data) en users.component:', data);
        console.log('Datos antes (this.users) en users.component:', this.users);
        this.users = this.users.concat(data);
        console.log('Datos recibidos (this.users) en users.component:', this.users);
      }
    });
  }

  
  editUser(user: Iusuario): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: { user },
    });
  
    dialogRef.afterClosed().subscribe(updatedUser => {
      if (updatedUser) {
        // Actualizo el usuario en la lista de usuarios
        this.users = this.users.map(u => u.id === updatedUser.id ? updatedUser : u);
      }
    });
  }
  
  deleteUser(userId: number): void {
    if (confirm('¿Está seguro?')) {
      this.users = this.users.filter(u => u.id !== userId);
    }
  }
}