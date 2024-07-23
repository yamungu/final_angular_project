import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { EntrepreneurComponent } from '../entrepreneur/entrepreneur.component';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../services/feedback/feedback';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ MatInputModule,
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,MatTableModule ,],
  
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  feedbackList: any[] = [];
  displayedColumns: string[] = ['id','entrepreneur','message', 'date'];
  showForm: boolean = false;
  feedbacks: any[] = [];
  

  constructor(private fb: FormBuilder, private FeedbackService: FeedbackService) {
    this.feedbackForm = this.fb.group({
      message: ['', Validators.required],
      // entrepreneur: ['', Validators.required],
      // lastName: ['', Validators.required],
      // serviceQuality: ['', Validators.required],
      // suggestions: ['']
    });
  }

  ngOnInit(): void { 
    this.getFeedbacks();
    
  }
  getFeedbacks() {
    this.FeedbackService.getAllFeedbacks().subscribe({
      next: res => {
        console.log(res);
        this.feedbacks = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }


  onSubmit() {
    if (this.feedbackForm.valid) {
      const feedback = {
        ...this.feedbackForm.value,
        date: new Date()
      };
      this.feedbackList.push(feedback);
      this.feedbackForm.reset();
      this.showForm = false;
    }
  }

  onCancel() {
    this.feedbackForm.reset();
    this.showForm = false;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}

  








