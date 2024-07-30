import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductComponent } from '../../pages/product/product.component';
import { ProductService } from '../../services/products/product.service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatCardModule, ToastrModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatLabel, MatButtonModule, MatIconButton,
    MatIconModule, CommonModule, FormsModule, RegistrationFormComponent, MatDialogModule,
    MatToolbarModule, MatTableModule, ProductComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  closeDialog() {
    this.dialog.closeAll();
  }

  @Input({ required: true }) addProduct = new EventEmitter<void>();
  productForm!: FormGroup;
  private toastr = inject(ToastrService);
  constructor(private fb: FormBuilder, private productService: ProductService, private dialog: MatDialog) {
    this.productForm = this.fb.group({
      // product_id: [''], // Include this if you want to edit products
      // product_image: ['', Validators.required],
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required]
      // quantity: ['', Validators.required],
      // location: ['', Validators.required],
      // description: ['', Validators.required]
    });
  }

  getAllProducts(): void {
    this.productService?.getAllProducts().subscribe({
      next: res => {
        console.log(res);
        // this.products = res;
      },
      error: err => console.log(err)
    });
  }


  onSubmit() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.addProduct(product).subscribe({
        next: res => {
          this.addProduct.emit();
          this.toastr.success('Product Successfully Added', 'Success');
          // new ProductComponent().getAllProducts();
          this.getAllProducts();
          this.dialog.closeAll();
        },
        error: err => {
          this.toastr.error('Could not add new product, please try again', 'Failed')
        }
      });
      // if (product.Id) {
      //   const index = this.products.findIndex(p => p.product_id === product.product_id);
      //   this.products[index] = product;
      // } else {
      //   product.Id = this.products.length + 1; // Simple ID assignment logic
      //   this.products.push(product);
      // }
      this.productForm.reset();
      // this.showProductResults();
    }

  }

}
