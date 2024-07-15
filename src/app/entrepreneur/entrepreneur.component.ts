import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { RegistrationFormComponent } from '../resources/registration-form/registration-form.component';

@Component({
  selector: 'app-entrepreneur',
  standalone: true,
  imports: [MatCardModule, ToastrModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatLabel, MatButton, MatIconButton,
    MatIconModule, CommonModule, FormsModule, RegistrationFormComponent, MatDialogModule, 
    MatToolbarModule, MatTableModule],
  templateUrl: './entrepreneur.component.html',
  styleUrl: './entrepreneur.component.css'
})
export class EntrepreneurComponent {
  showProductRegistrationForm: boolean = false;
  productForm!: FormGroup;
  products: any[] = []; // This should be typed properly in a real application
  displayedColumns: string[] = ['productImage', 'Id', 'productName', 'price', 'quantity', 'location', 'description', 'actions'];




}
