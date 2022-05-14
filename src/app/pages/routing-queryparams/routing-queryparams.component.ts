import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-routing-queryparams',
  templateUrl: './routing-queryparams.component.html',
  styleUrls: ['./routing-queryparams.component.css']
})
export class RoutingQueryparamsComponent implements OnInit {

  categories: any[]=[];
  products: any[]=[];



  constructor(private activedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {

    let category: string = this.activedRoute.snapshot.queryParams['category'];
    console.log(category);

    let categories$: Observable<any>= this.categoryService.getAllCategories();

    categories$.subscribe(result=> {
      this.categories = result.result.category;
    });

    let querParams$: Observable<any> = this.activedRoute.queryParams;
    querParams$.subscribe(params=> {
      let products$: Observable<any> = this.productService.getProductsByCategoryId(params.category);
      products$.subscribe(result=> {
        this.products = result.result.product;
      });

    })



  }

}
