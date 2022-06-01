import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  is_loading$: Observable<boolean> | undefined;

  constructor(private store: Store<{is_loading: boolean;}>) {

    this.is_loading$= this.store.select('is_loading');

   }

  ngOnInit(): void {
  }

}
