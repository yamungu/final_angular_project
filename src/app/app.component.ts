import { Component, NgModule, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './loginEntrepreneur/login.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegistrationFormComponent } from './resources/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './resources/side-bar/side-bar.component';
import { HeaderComponent } from './resources/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { FeedbackComponent } from './feedback/feedback.component';
// import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './pages/product/product.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    LoginComponent,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    HeaderComponent,
    SideBarComponent,MatTableModule,FeedbackComponent,AppComponent,ProductComponent,EntrepreneurComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'EnterpreneurLink-App';
  showLogin: boolean = false;

  #dialog: MatDialog = inject(MatDialog);

  registerThis() {
    this.#dialog.closeAll();
    // this.showLogin = false;
    this.#dialog.open(RegistrationFormComponent);
  }

}
