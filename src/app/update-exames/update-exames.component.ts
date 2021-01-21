import { Component, OnInit } from '@angular/core';
import { Exames } from '../exames';
import { ExamesService } from '../exames.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-exames',
  templateUrl: './update-exames.component.html',
  styleUrls: ['./update-exames.component.css']
})
export class UpdateExamesComponent implements OnInit {

  id: number;
  exames: Exames;
  constructor(private route: ActivatedRoute, private router: Router,
    private examesService: ExamesService) { }

  ngOnInit(){
    this.exames = new Exames();
    this.id = this.route.snapshot.params['id'];

    this.examesService.getExames(this.id)
    .subscribe(data => {
      console.log(data)
      this.exames = data;
    }, error => console.log(error));
  }

  updateExames(){
    this.examesService.updateExames(this.id, this.exames)
    .subscribe(data =>{
      console.log(data);
      this.exames = new Exames();
      this.gotoList();
    },error => console.log(error));
  }

  onSubmit(){
    this.updateExames();
  }

  gotoList(){
    this.router.navigate(['/exames']);
  }
}
