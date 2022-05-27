import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {};

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {

   /* this.auth.is_active.subscribe(value => {

      if (value) {*/
        let token: string | null = this.auth.token;
        let httpHeaders: HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token);

        this.http.get<any>('https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/profile',
          { headers: httpHeaders }).subscribe(value => {
            this.profile = value;
          })
     /* }


    });*/



  }

}
