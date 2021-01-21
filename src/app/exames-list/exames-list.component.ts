import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs";
import {ExamesService} from "../exames.service"
import {Exames} from "../exames";
import {Router} from "@angular/router";
import {ExamesDetalhesComponent} from '../exames-detalhes/exames-detalhes.component';

@Component({
  selector: 'app-exames-list',
  templateUrl: './exames-list-component.html',
  styleUrls: ['./exames-list.component.css']
})
export class ExamesListComponent implements OnInit {
  exames: Observable<Exames[]>;

  constructor(private examesService: ExamesService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.exames = this.examesService.getExamesList();
  }

  exameDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }

  updateExames(id: number){
    this.router.navigate(['update', id]);
  }

  deleteExame(id:number){
    this.examesService.deleteExame(id)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      }, error => console.log(error)
    );
  }
}
