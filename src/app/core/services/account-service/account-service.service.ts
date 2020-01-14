import { Injectable } from '@angular/core';
import {Account} from '../../models/account'

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private currentAccount : Account = new Account (); //atributo do AccountServiceService

  constructor() { } //construtor do AccountServiceService

  //Dois metodos, um que verifica se esta autenticado; outro que faz o login caso nao esteja autenticad
  public isAuthenticated(): boolean {
    console.log (this.currentAccount);
    if (this.currentAccount.id) {
      return true;
    } else {
      return false;
    }
  }

  public login (account: Account) { //metodo recebe uma variavel account do tipo Account
    account.id = 1;
    account.name = 'joana';
    if (account.email) {
      this.currentAccount = account; //significa que o currentAccount sera um Account com id 1,nome joana e email e password que vem do formulario
    }
  }
public getCurrentName () : string {
  return this.currentAccount.name;
}
}
