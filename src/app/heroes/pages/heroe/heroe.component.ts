import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/hereoes.interface';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`img{width:100%; border-radius:10px;}`]
})
export class HeroeComponent implements OnInit {
  panelOpenState = false;
  heroe!: Heroe;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)), tap(console.log))
      .subscribe(heroe => this.heroe = heroe);
  }
  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
