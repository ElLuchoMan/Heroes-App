import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`img{width:100%; border-radius:10px; height:100%} .container{margin-right: 20px},mat-grid-tile {background: lightblue;}`]
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login().subscribe(resp=>{
      console.log(resp);
      if(resp.id){
        this.router.navigate(['./heroes']);
      }
    });
    
  }
}
