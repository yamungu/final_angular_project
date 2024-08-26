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
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 
import {UserAuthService} from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, ToastrModule, MatFormField, ReactiveFormsModule, MatInput, MatLabel, MatButton, MatIconButton, MatIconModule, CommonModule, FormsModule, RegistrationFormComponent, MatDialogModule, MatToolbarModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    showPassword = false;

  registered = false;

  constructor(private _formBuilder: FormBuilder, private router: Router, private userService: UserService,private fb: FormBuilder,
    private userAuthService: UserAuthService,
   
    ) {
      this.loginForm = this.fb.group({
        userName: ['', Validators.required],
        userPassword: ['', Validators.required]
    });
     }
  #dialog: MatDialog = inject(MatDialog);
  private toastr = inject(ToastrService);

login(loginForm: NgForm) {
  this.userService.login(loginForm.value).subscribe(
    (response: any) => {
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;
      if (role === 'Admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
      this.#dialog.closeAll();
    },
    (error: any) => {
      console.log('Error during login:', error);
      this.toastr.error('incorrect username or password', 'Error');
    }
  );

}





  openRegisterDialog() {
    this.#dialog.closeAll();
    this.#dialog.open(RegistrationFormComponent, {
      data: {
        hiddenFields: ['not'],
        isEntrepreneur: true
      }
    });
  }
  openloginDialog() {
    this.#dialog.closeAll();
    this.#dialog.open(LoginComponent);
  }

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
