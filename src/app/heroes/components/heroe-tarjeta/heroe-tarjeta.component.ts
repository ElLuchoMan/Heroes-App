import { Component, Input} from '@angular/core';
import { Heroe } from '../../interfaces/hereoes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent  {

@Input()heroe!:Heroe;
}
