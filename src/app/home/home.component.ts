import { Component,OnInit} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../resources/header/header.component';
import { SideBarComponent } from '../resources/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }
}
