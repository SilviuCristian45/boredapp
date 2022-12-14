import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
  }

  insertRandomActivity() {
    this.activityService.insertRandomActivity().subscribe()
    setTimeout( () => location.reload(), 1000)
  }

}
