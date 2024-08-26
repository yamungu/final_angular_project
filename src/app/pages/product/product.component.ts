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
import { IProduct } from '../../interfaces/product';
import { AddProductComponent } from '../../resources/add-product/add-product.component';
import { RegistrationFormComponent } from '../../resources/registration-form/registration-form.component';
import { ProductService } from '../../services/products/product.service';
// import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCardModule,
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
    RegistrationFormComponent,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    AddProductComponent,
    MatTooltipModule,
    GoogleMapsModule,
    SidebarModule,
    ButtonModule,HttpClientModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {

  // image
  // selectedFile: File | null = null;
  //image

  sidebarVisible2: boolean = false;

  displayLocation(_t94: any) {
    this.sidebarVisible2 = true
  }
  private toastr = inject(ToastrService);
  showProductRegistrationForm: boolean = false;
  productForm?: FormGroup;
  products: IProduct[] = []; // This should be typed properly in a real application
  displayedColumns: string[] = [
    // 'productImage',
    'Id',
    'productName',
    'price',
    // 'quantity',
    'product_location',
    'longitude',
    'latitude',
    // 'description',
    'actions',
  ];

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

  showRegistrationForm() {
    // this.showProductRegistrationForm = true;
    this.dialog
      ?.open(AddProductComponent)
      .afterClosed()
      .subscribe({
        next: (res) => this.getAllProducts(),
        error: (error) => console.log(error),
      });
  }

  showProductResults() {
    this.showProductRegistrationForm = false;
  }

  onSubmit() {
    if (this.productForm?.valid) {
      const product = this.productForm.value;
      this.productService?.addProduct(product).subscribe({
        next: (res) => {
          this.getAllProducts();
          this.toastr.success('Product Successfully Added', 'Success');
        },
        error: (err) => {
          this.toastr.error(
            'Could not add new product, please try again',
            'Failed'
          );
        },
      });
      // if (product.Id) {
      //   const index = this.products.findIndex(p => p.product_id === product.product_id);
      //   this.products[index] = product;
      // } else {
      //   product.Id = this.products.length + 1; // Simple ID assignment logic
      //   this.products.push(product);
      // }
      this.productForm.reset();
      this.showProductResults();
    }
  }

  editProduct(product: any) {
    this.productForm?.patchValue({
      product_name: product.product_name,
      price: product.price,
      product_location: product.product_location,
      longitude: product.longitude,
      latitude: product.latitude
    });
    this.showRegistrationForm();
  }
  


  deleteProduct(id: any) {
    // this.products = this.products.filter(p => p !== product);
    this.productService?.deleteProduct(id).subscribe({
      next: (res) => {
        this.getAllProducts();
        this.toastr.success('Product Successfully deletd', 'Success');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error<any>('Unable to remove product', 'Error!');
      },
    });
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
 
  // image

  //  constructor(private http: HttpClient) { }

//    onFileSelected(event: any) {
//        this.selectedFile = event.target.files[0];
//    }

//    onUpload(event: Event) {
//        event.preventDefault();

//        if (this.selectedFile) {
//            const uploadData = new FormData();
//            uploadData.append('image', this.selectedFile, this.selectedFile.name);

//            this.http.post('http://localhost:8080/api/products/upload', uploadData)
//                .subscribe(response => {
//                    console.log(response);
//                });
//        }
//    }
// }

// image



//   productForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.productForm = this.fb.group({
//       productImage: ['', Validators.required],
//       productName: ['', Validators.required],
//       price: ['', [Validators.required, Validators.min(0)]],
//       quantity: ['', [Validators.required, Validators.min(0)]],
//       location: ['', Validators.required],
//       description: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.productForm.valid) {
//       console.log('Product registered:', this.productForm.value);
//       // Handle form submission logic here
//     } else {
//       console.log('Form is invalid');
//     }
//   }

// //table results
// displayedColumns: string[] = ['Id','productImage', 'productName', 'price', 'quantity', 'location', 'description','actions'];
// }
