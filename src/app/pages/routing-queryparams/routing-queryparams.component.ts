import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-routing-queryparams',
  templateUrl: './routing-queryparams.component.html',
  styleUrls: ['./routing-queryparams.component.css']
})
export class RoutingQueryparamsComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let category: string = this.activedRoute.snapshot.queryParams['category'];
    console.log(category);
  }

}
