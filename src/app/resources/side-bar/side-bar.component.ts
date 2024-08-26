import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],  
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public userService: UserService) { }
  
  ngOnInit(): void {
    
  }
}
