import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Activity } from '../activities';
import { ActivityService } from '../activity.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-activities-type',
  templateUrl: './activities-type.component.html',
  styleUrls: ['./activities-type.component.css']
})
export class ActivitiesTypeComponent implements OnInit {
  activities: Observable<Activity[]> = new Observable()
  checkoutForm = this.formBuilder.group({
    type: ''
  });

  constructor(private formBuilder: FormBuilder,
              private activityService: ActivityService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const input = this.checkoutForm.value.type
    if (input) {
      this.activities = this.activityService.getActivitiesByType(input)
      return 
    }
    alert('You must enter a valid type')
  }

}
