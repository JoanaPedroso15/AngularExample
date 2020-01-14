import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/core/services/account-service/account-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;

  constructor(
    private accountService : AccountServiceService //no proprio construtor do header vamos criar um metodo que vai buscar o nome do utilizador; desta forma nao e obrigatorio usar this.
  ) { 
    this.name = accountService.getCurrentName();
  }

  ngOnInit() {
  }

}
