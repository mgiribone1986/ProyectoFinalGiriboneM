import { Component,  EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Estudiante } from '../../Models/estudiante'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormDataService } from '../../layouts/dashboard/pages/form-data.service'; // Ajusta la ruta según tu estructura
import { Iusuario} from '../../Models/usuario.models';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})

export class ReactiveFormComponent {
  @Output() formDataSubmitted = new EventEmitter<Estudiante>();
  /* 
  *  Entidades que manipulan los formularios de angular
  *  FormGroup - Agrupar otros controles y definir un objeto
  *  FormControl - Manipular las entradas (imputs, selects, checkbox, textarea)
  *  FormArray - Manejar arrays de otros controles
  * Modelo de formulario
  * {
  * name:
  * lastname:
  * email: 
  * ...
  * }
  */
  userForm: FormGroup;

  // variable para validar formulario

  mostrarExito: boolean = false; 
  
  provincias: string[] = [
   'Ciudad Autónoma de Buenos Aires',
   'Buenos Aires',
   'Catamarca',
   'Chaco',
   'Chubut',
   'Córdoba',
   'Corrientes',
   'Entre Ríos',
   'Formosa',
   'Jujuy',
   'La Pampa',
   'La Rioja',
   'Mendoza',
   'Misiones',
   'Neuquen',
   'Río Negro',
   'Salta',
   'San Juan',
   'San Luis',
   'Santa Cruz',
   'Santa Fe',
   'Santiago del Estero',
   'Tierra del Fuego',
   'Tucúman'
  ]


  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
    public dialogRef: MatDialogRef<ReactiveFormComponent>
    ){ 
    this.userForm = this.formBuilder.group({
      userName: 
      ['', 
      [
      Validators.required,
      Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
      ]],
      userLastName: 
      [
        '',
        [
        Validators.required, 
        Validators.pattern("^[a-zA-ZÁÉÍÓÚáéíóúñÑ' -]+$"),
        ]
      ],
      userEmail: 
      [
        '', 
        [Validators.required, 
        Validators.email
        ]
      ],
    userAddress: 
      ['',Validators.required],
      userProvince: ['', Validators.required],
      userCity: ['', Validators.required],
      userPassword: ['', Validators.required],
      password2: ['', Validators.required] 
    }, { validator: this.passwordMatchValidator });
  }

  // Función de validación de password
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('userPassword')?.value;
    const confirmPassword = formGroup.get('password2')?.value;

    if (password !== confirmPassword) {
      formGroup.get('password2')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('password2')?.setErrors(null);
    }
  }

  // genero el Id de usuario
  generateId(): number {
    return Math.floor(1000000000 + Math.random() * 9000000000);
  }

  // evito que se repitan los datos 

  isSubmitting: boolean = false;
  onSubmit() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      const formData = this.userForm.value as Iusuario;
      formData.id = this.generateId();
      console.log('Datos desde formulario:', formData);
      this.formDataService.sendFormData(formData);
      this.dialogRef.close();
    }
  }
}
