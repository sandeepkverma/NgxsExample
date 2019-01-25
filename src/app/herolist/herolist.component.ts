import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import { HeroState } from './hero.state';
import { Observable } from 'rxjs';
import { AddHero } from './hero.action';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit {

  constructor(private store:Store) { }

  name:string;

  @Select(HeroState.herolist) herolist:Observable<string[]>;

  ngOnInit() {
  }

  AddHero(){
    if(this.name && this.name.trim()){
      this.store.dispatch(new AddHero(this.name.trim()));
    }
    
  }

}
