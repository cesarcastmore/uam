import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-routing-queryparams',
  templateUrl: './routing-queryparams.component.html',
  styleUrls: ['./routing-queryparams.component.css']
})
export class RoutingQueryparamsComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit(): void {

    let category: string = this.activedRoute.snapshot.queryParams['category'];
    console.log(category);

    let categories$: Observable<any>= this.categoryService.getAllCategories();

    categories$.subscribe(categories=> {
      console.log(categories);
    })


  }

}
