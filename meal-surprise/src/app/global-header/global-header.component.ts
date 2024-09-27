import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss'
})
export class GlobalHeaderComponent {

  public constructor(private router:Router){
  }

  navMainPage(){
    this.router.navigate([''])
  }
}
