import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationFormComponent } from '../../resources/registration-form/registration-form.component';
import { LoginComponent } from '../../login/login.component';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatDialogModule, MatCardModule, MatMenuModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
// loginDialog2() {
//   this.dialog.closeAll();
//     this.dialog.open(LoginSupplierComponent);
// }

  constructor(private dialog: MatDialog) {}

  loginDialog() {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent);
  }

  registerDialog() {
    this.dialog.closeAll();
    this.dialog.open(RegistrationFormComponent, {
      data: {
        hiddenFields: ['not'],
        isEntrepreneur: false
      }
    });
  }

}
