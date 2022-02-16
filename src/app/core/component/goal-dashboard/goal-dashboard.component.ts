import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http'

import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-dashboard',
  templateUrl: './goal-dashboard.component.html',
  styleUrls: ['./goal-dashboard.component.scss']
})


export class GoalDashboardComponent implements OnInit {

//  url!: string;
//  goalDetails : GoalDetails | undefined;



  constructor() { 


    // // this.url = route.url.split('/')[0];

    // console.log(route.url)

  }

  ngOnInit(): void {
  }

}
