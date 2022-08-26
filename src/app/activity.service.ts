import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from './activities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private baseUrl = "http://localhost:3000"
  private activitiesEndpoint = "/activities"
  private randomActivityEndpoint = "/activity"

  constructor(private httpClient: HttpClient) { }

  addActivity(activity: Activity) {
  }

  getActivities() {
    return this.httpClient.get<Activity[]>(this.baseUrl + this.activitiesEndpoint)
  }

  clearActivities() {
  }

  getRandomActivity() {
    return this.httpClient.get<Activity>(this.baseUrl + this.randomActivityEndpoint)
  }
}
