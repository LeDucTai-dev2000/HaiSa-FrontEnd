import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../../model/feedback.model';
import {FeedbackService} from '../../../../service/admin-service/feedback/feedback.service';
import { error } from 'jquery';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {
  public feedbacks: Feedback[] = [];
  p: number = 1;
  totalRecord:string;
  constructor(
    private FeedbackService : FeedbackService
  ) { }

  ngOnInit(): void {
    this.loadAllFeedback();
  }

  loadAllFeedback():void{
    this.FeedbackService.getAllFeedback().subscribe(
      (data) =>{
        this.feedbacks = data.data;
        
  
      },
      (error) =>{
        console.log(error);
      }
    )

  }

}
