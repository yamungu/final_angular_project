
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from '../resources/registration-form/registration-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationService } from '../services/registration/registration.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-supplier',
  standalone: true,
  imports: [MatCardModule, ToastrModule, MatFormField, ReactiveFormsModule, MatInput, MatLabel, MatButton, MatIconButton, MatIconModule, CommonModule, FormsModule, RegistrationFormComponent, MatDialogModule, MatToolbarModule,],
  templateUrl: './login-supplier.component.html',
  styleUrl: './login-supplier.component.css'
})
export class LoginSupplierComponent implements OnInit{

  showPassword: boolean = false;
  registered = false;

  showMessage(): void {
    this.registered = true;

    // setTimeout(() => { }, 3000);
    // this.registered = false;
  }

  passwordHash() {
    this.showPassword = !this.showPassword;
  }

  constructor(private _formBuilder: FormBuilder, private router: Router) { }
  #dialog: MatDialog = inject(MatDialog);
  private toastr = inject(ToastrService);

  login() {
    this.#dialog.closeAll();
    this.toastr.success('Success!', 'Welcome Back!');
    this.router.navigate(['dashboard']);
  }

  openRegisterDialog() {
    this.#dialog.closeAll();
    this.#dialog.open(RegistrationFormComponent);
  }
  openloginDialog() {
    this.#dialog.closeAll();
    this.#dialog.open(LoginSupplierComponent);
  }

  formData: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {

    // window.alert('asdsadsadasasd');
    // this.name = prompt('Enter your name: ');
  }

  showLogin: boolean = false;

  registerThis() {
    this.#dialog.closeAll();
    // this.showLogin = false;
    this.#dialog.open(RegistrationFormComponent);
  }
}



