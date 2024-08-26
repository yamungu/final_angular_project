import { Component,OnInit } from '@angular/core';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { log } from 'node:console';
import { register } from 'node:module';
import { LoginComponent } from '../login/login.component';


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

  // showLogout = false;
  
  // constructor(){}
  // ngOnInit(): void {
    
  // }

  currentIndex = 0;
  texts = [
    "Welcome to our shop",
    "Best Service",
    "Your Satisfaction, Our Priority", "Promotional Sales",
    "Discounted Products",
  ];
  currentText = this.texts[this.currentIndex];

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    const images = document.querySelectorAll('.slide');

    setInterval(() => {
      images[this.currentIndex].classList.remove('show');
      this.currentIndex = (this.currentIndex + 1) % images.length;
      images[this.currentIndex].classList.add('show');
      this.currentText = this.texts[this.currentIndex];
    }, 6000); // Change every 3 seconds
  }
}




