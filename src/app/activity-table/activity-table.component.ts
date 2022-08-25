import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, defaultActivities } from '../activities';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements OnInit {
  activities!: Observable<Activity[]>

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activities = this.activityService.getActivities()
    console.warn(this.activityService.getActivities())
  }

}
