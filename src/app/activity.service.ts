import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from './activities';
import { Observable } from 'rxjs';
import {OptionalString} from './utils'

@Injectable({
  providedIn: 'root'
})

export class ActivityService {
  private baseUrl = "http://localhost:3000"
  private activitiesEndpoint = "/activities"
  private randomActivityEndpoint = "/activity"
  private insertRandomActivityEndpoint = "/placeRandomActivity"

  constructor(private httpClient: HttpClient) { }

  addActivity(activity: Activity) {
  }

  getActivities() {
    return this.httpClient.get<Activity[]>(this.baseUrl + this.activitiesEndpoint)
  }

  getActivitiesByType(type: OptionalString) {
    return this.httpClient.get<Activity[]>(this.baseUrl + this.activitiesEndpoint + "/" + type)
  }

  clearActivities() {
  }

  getRandomActivity() {
    return this.httpClient.get<Activity>(this.baseUrl + this.randomActivityEndpoint)
  }

  insertRandomActivity() {
   //initial faceam asta:  return this.httpClient.post<Activity>(this.baseUrl + this.insertRandomActivityEndpoint, {})
    return this.httpClient.post<Activity>(this.baseUrl + this.insertRandomActivityEndpoint, {})
  }

}
