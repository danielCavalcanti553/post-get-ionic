import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../model/categoria';
import { CategoriaService } from '../../services/catagoria.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias : Categoria[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService : CategoriaService) {
    
  }

  ionViewDidLoad() {
    this.categoriaService.getCategorias()
    .subscribe(response => {
      this.categorias = response;
      console.log(this.categorias);
    });
  }

}
