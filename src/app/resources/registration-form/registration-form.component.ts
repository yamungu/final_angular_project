import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RegistrationService } from '../../services/registration/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';
import { LoginComponent } from '../../login/login.component';
import { EntrepreneurService } from '../../services/entrepreneur/entrepreneur.service';
import { ToastrService } from 'ngx-toastr';

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
    FormsModule,
    MatRadioButton,
    MatRadioGroup],

  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
  @Input() isEntrepreneur: boolean = true;
  message: any;
  header: any;

  success = true;
  entrepreneur: string = '';
  supplier: string = '';

  toastr = inject(ToastrService);

  register() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      if (this.isEntrepreneur) {
        this.#entrepreneurService.registerSupplier(this.registerForm.value).subscribe({
          next: () => {
            this.#dialog.closeAll();
            this.toastr.success('Success!', 'Entrepreneur Registered');
          },
          error: error => {
            console.log(error);
            this.toastr.error('Failed to Register', 'Error!');
          }
        });
      } else {
        this.#regService.registerSupplier(this.registerForm.value).subscribe({
          next: () => {
            this.#dialog.closeAll();
            this.toastr.success('Success!', 'Supplier Registered!');
          },
          error: error => {
            console.log(error);
            this.toastr.error('Failed to Register', 'Error!');
          }
        });
      }
    } else {
      this.toastr.error('Fill all the required feilds (*)', 'Invalid!');
    }
    // if (this.registerForm.valid) {
    //   this.#dialog.closeAll();
    // }

  }

  openloginDialog() {
    this.#dialog.closeAll();
    this.#dialog.open(LoginComponent);
  }


  #dialog: MatDialog = inject(MatDialog);
  @Input() hiddentFields: string[] = ['field'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.hiddentFields = data.hiddenFields || [];
    this.isEntrepreneur = data.isEntrepreneur;
  }

  isFieldHidden(field: string): boolean {
    return this.hiddentFields.includes(field);
  }
  registerForm!: FormGroup<any>;
  #regService: RegistrationService = inject(RegistrationService);
  #entrepreneurService = inject(EntrepreneurService);

  createFormGroup(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      company: new FormControl(''),
      country: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.createFormGroup();
  }
}
