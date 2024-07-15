import { Component,OnInit } from '@angular/core';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { log } from 'node:console';
import { register } from 'node:module';
import { LoginComponent } from '../loginEntrepreneur/login.component';


@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [
    MatButton,
    MatButtonModule,
    MatIconButton,
    MatIconButton,
    MatToolbarModule,
    MatToolbarRow,
    

    
    

  ],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent implements OnInit {

  showLogout = false;
  
  constructor(){}
  ngOnInit(): void {
    
  }


}
