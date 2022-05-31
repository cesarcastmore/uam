import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {};

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.profile = this.activedRoute.snapshot.data['profile'];

   /* this.auth.is_active.subscribe(value => {

      if (value) {
        let token: string | null = this.auth.token;

        this.http.get<any>('https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/profile').subscribe(value => {
            this.profile = value;
          })
      }


    });*/



  }

}
