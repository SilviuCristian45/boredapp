import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../activities';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activity!: Observable<Activity>
  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activity = this.activityService.getRandomActivity()
  }

}
