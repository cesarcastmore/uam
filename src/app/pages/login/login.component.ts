import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formItem: FormGroup = new FormGroup({
    username: new FormControl('cesar.cast.more@gmail.com', [Validators.nullValidator, Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.nullValidator, Validators.required]),
    remember: new FormControl(false)
  })


  is_valid_username$: Observable<string> |undefined;
  is_valid_password$: Observable<string> |undefined;

  constructor( private router: Router, private authService: AuthService) {

  }


  ngOnInit() {

    if(this.formItem !== null){

    this.formItem.get('remember')!.valueChanges.subscribe(value => {

      if (value) {

        this.formItem.patchValue({
          username: 'cesar.cast.more@gmail.com',
          password: 'cesar.cast.more'
        });

      } else {

        this.formItem.patchValue({
          username: null,
          password: null
        });
      }

    });

    this.is_valid_password$ = this.formItem.get('password')!.statusChanges;
    this.is_valid_username$ = this.formItem.get('username')!.statusChanges;
  }






  }


  async login() {

    let errors = this.formItem.get('username')!.errors;

    if (this.formItem.valid) {

      try {
        let form = this.formItem.value;
        let result = await this.authService.login(form.username, form.password).toPromise();
        
        
        if(result.success){
          this.router.navigate(['/profile']);
        }else {
          //practica, colocar el notificador de rojo que esta en el componente de carrito
        }

      } catch (error) {

        //this.alert =error;

      }

    } else {

      //Lanzar y renderizar los errores en la platilla
    }

  }

  cancel() {
    this.formItem.reset();
  }

}