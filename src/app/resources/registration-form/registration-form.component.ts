import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationService } from '../../services/registration/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';
import { LoginComponent } from '../../loginEntrepreneur/login.component';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [MatFormField,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    CommonModule,
    MatLabel,
    MatButton,
    MatSelectModule,
    MatCard,
    MatCheckboxModule,
    MatRadioButton,
    MatRadioGroup],

  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
  isEntrepreneur: boolean = true;
  message: any;
  header: any;

  success = true;

  register() {
    console.log(this.registerForm.value);



    this.#regService.registerSupplier(this.registerForm.value).subscribe({
      next: () => {
        this.#dialog.closeAll();
        setTimeout(() => this.#dialog.closeAll(), 1000);
      },
      error: error => console.log(error)
    });

    // if (this.registerForm.valid) {
    //   this.#dialog.closeAll();
    // }

  }

  openloginDialog(){
    this.#dialog.closeAll();
    this.#dialog.open(LoginComponent);
  }
  

  #dialog: MatDialog = inject(MatDialog);

  constructor() { }
  registerForm!: FormGroup<any>;
  #regService: RegistrationService = inject(RegistrationService);

  createFormGroup(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.createFormGroup();
  }
}
