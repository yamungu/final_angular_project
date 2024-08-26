import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
// import { IProduct } from '../../interfaces/product';
// import { AddProductComponent } from '../../resources/add-product/add-product.component';
// import { RegistrationFormComponent } from '../../resources/registration-form/registration-form.component';
// import { ProductService } from '../../services/products/product.service';
// import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-entrepreneur',
  standalone: true,
  imports: [  MatCardModule,
    ToastrModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatLabel,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    CommonModule,
    FormsModule,
    
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
  
    MatTooltipModule,
    GoogleMapsModule,
    SidebarModule,
    ButtonModule,HttpClientModule
  ],
  templateUrl: './entrepreneur.component.html',
  styleUrl: './entrepreneur.component.css'
})
export class EntrepreneurComponent {
displayLocation(_t118: any) {
throw new Error('Method not implemented.');
}
  
 


  private toastr = inject(ToastrService);
  showProductRegistrationForm: boolean = false;
  productForm?: FormGroup;
  products: IProduct[] = []; // This should be typed properly in a real application
  displayedColumns: string[] = [
    'productImage',
    'Id',
    'productName',
    'price',
    // 'quantity',
    'location',
    'longitude',
    'latitude',
    // 'description',
    'actions',
  ];
sidebarVisible2: any;

  constructor(
    // private http:HttpClient,
    private fb?: FormBuilder,
    private productService?: ProductService,
    private dialog?: MatDialog,
    
  ) {
    this.productForm = this.fb?.group({
      // product_id: [''], // Include this if you want to edit products
      // product_image: ['', Validators.required],
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      // quantity: ['', Validators.required],
      // location: ['', Validators.required],
      // description: ['', Validators.required]
    });
  }

  // get all products
  getAllProducts(): void {
    this.productService?.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
      },
      error: (err) => console.log(err),
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }


  showProductResults() {
    this.showProductRegistrationForm = false;
  }



  


  // Map Section
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555,
  };
  zoom = 6;

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }




}
 



