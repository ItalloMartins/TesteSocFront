import { Component, OnInit } from '@angular/core';
import { Exames } from '../exames';
import { ExamesService } from '../exames.service';
import { ExamesListComponent } from '../exames-list/exames-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exames-detalhes',
  templateUrl: './exames-detalhes.component.html',
  styleUrls: ['./exames-detalhes.component.css']
})
export class ExamesDetalhesComponent implements OnInit {

  id: number;
  exames: Exames;
  constructor(private route: ActivatedRoute, private router: Router, 
    private examesService: ExamesService) { }

  ngOnInit(){
    this.exames = new Exames();

    this.id = this.route.snapshot.params['id'];

    this.examesService.getExames(this.id)
    .subscribe(data =>{
      console.log(data)
      this.exames = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['exames']);
  }


}
