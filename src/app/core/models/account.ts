export class Account {
     'id': number;
     'name' : string;
     'email' : string;
     'password': string;

    constructor (data?: any) { //ponto interrogacao significa que nao e obrigatorio,se nao tiver nada, cria um com defaults
    Object.assign (this, data);
    }
    
}


