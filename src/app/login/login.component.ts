import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../core/services/account-service/account-service.service';
import { Account } from '../core/models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public account : Account = new Account ();

  constructor(
    private accountService : AccountServiceService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  public login () {
    this.accountService.login (this.account); //neste caso este metodo login e do accountService
    this.router.navigate (['/']); //ou seja, depois de fazer o login, ele reencaminha para a pagina Main que esta dentro do layout
  }

}
