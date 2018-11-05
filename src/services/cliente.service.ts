import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Cliente } from "../model/cliente";


@Injectable()
export class ClienteService{
    constructor(private http: HttpClient) { }
    
    getClientes() : Observable<Cliente[]>{
        return this.http.get<Cliente[]>(
            `https://tcc-lojavirtual.herokuapp.com/clientes`);
    }

    cadastrar(cliente : Cliente) {
        return this.http.post(
            `https://tcc-lojavirtual.herokuapp.com/clientes`,cliente,
                {
                observe: 'response',
                responseType: 'text'
                }
        );
     }
}