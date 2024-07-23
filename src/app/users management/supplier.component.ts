import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EntrepreneurComponent } from '../entrepreneur/entrepreneur.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegistrationFormComponent } from '../resources/registration-form/registration-form.component';
import { EntrepreneurService } from '../services/user-management/entrepreneur';
import { error } from 'console';
import { SupplierService } from '../services/user-management/supplier';
import { ISupplier } from '../interfaces/supplier';
import { ToastrService } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [
    MatDialogModule,
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule,
    EntrepreneurComponent,
    MatTabsModule,
  ],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent implements OnInit {



  
  showEntrepreneurTable: any;
  showSupplierTable: any;
  showSuppliers() {
    throw new Error('Method not implemented.');
  }
  showEntrepreneurs() {
    throw new Error('Method not implemented.');
  }

  deleteEntrepreneur(id: any) {
    // this.products = this.products.filter(p => p !== product);
    this.entreService?.deleteEntrepreneur(id).subscribe({
      next: (res) => {
        this.getEntrepreneurs();
        this.toastr.success('Entrepreneur Successfully deleted', 'Success');
      },
      error: err => {
        console.log(err);
        this.toastr.error('Unable to remove Entrepreneur', 'Error!')
      },
    });
  }


  editEntrepreneur(_entrepreneur: any) {
    this.entrepreneurForm?.patchValue(_entrepreneur);
    // this.showRegistrationForm();
  }


  entrepreneurForm!: FormGroup<any>;


  suppliers: ISupplier[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'username', 'phoneNumber', 'company', 'country', 'actions'];
  displayedColumns2: string[] = ['id', 'firstName', 'lastName', 'email', 'username', 'phoneNumber', 'actions'];
  showForm: boolean = false;
  supplierForm: FormGroup;
  entrepreneurs: any;

  constructor(private fb: FormBuilder, private entreService: EntrepreneurService, private supplierService: SupplierService, private toastr: ToastrService) {
    this.supplierForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      username: [''],
      phoneNumber: [''],
      company: [''],
      country: [''],
      password: ['']
    });
  }

  ngOnInit(): void { 
    this.getEntrepreneurs();
    this.getSuppliers();
  }

  getEntrepreneurs(): void {
    this.entreService.getAllEntrepreneurs().subscribe({
      next: res => {
        console.log(res);
        this.entrepreneurs = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }


  getSuppliers(): void {
    this.supplierService.getAllSupplier().subscribe({
      next: res => {
        console.log(res);
        this.suppliers = res;
      },
      error:err => {
        console.log(err);
      }
    })
  } 

  private dialog = inject(MatDialog);

  openAddSupplierForm(choice: boolean): void {
    this.dialog.open(RegistrationFormComponent, {
      data: {
        hiddenFields: ['field2', 'field1'],
        isEntrepreneur: choice
      }
    });
  }

  onSubmit(): void {
    if (this.supplierForm.valid) {
      this.suppliers.push(this.supplierForm.value);
      this.showForm = false;
      this.supplierForm.reset();
    }
  }

  cancel(): void {
    this.showForm = false;
  }

  editSupplier(supplier: any) {
    this.supplierForm.patchValue(supplier);
    this.showForm = true;
  }

  deleteSupplier(id: any)  {
    this.supplierService?.deleteSupplier(id).subscribe({
      next:(res)=>{
        // this.deleteSupplier(id);
        this.getSuppliers();
        this.toastr.success('Supplier Successfully deleted', 'Success')
      },
      error: err => {
        console.log(err);
        this.toastr.error('Unable to remove Supplier', 'Error!')
      },

    })
  }
}


// entrepreneur.component.ts

interface IEntrepreneur {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber: string;
  password: string;
}

// supplier form

interface Supplier {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phoneNumber: string;
  company: string;
  country: string;
  password: string;
}

