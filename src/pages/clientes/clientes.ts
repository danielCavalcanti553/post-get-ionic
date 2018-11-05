import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes : Cliente[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteService : ClienteService) {
    
  }

  ionViewDidLoad() {
    this.clienteService.getClientes()
    .subscribe(response => {
      this.clientes = response;
      console.log(this.clientes);
    });
  }

}
