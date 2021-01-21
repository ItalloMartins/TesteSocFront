import { Component, OnInit } from '@angular/core';
import { ExamesService } from '../exames.service';
import { Exames } from '../exames';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exames',
  templateUrl: './create-exames.component.html',
  styleUrls: ['./create-exames.component.css']
})
export class CreateExamesComponent implements OnInit {
  exames: Exames = new Exames();
  submitted = false;

  constructor(private examesService: ExamesService, private router: Router) { }

  ngOnInit(): void {
  }

  newExames(): void{
    this.submitted = false;
    this.exames = new Exames();
  }

  save(){
    this.examesService.createExames(this.exames).subscribe(data => {
      console.log(data)
      this.exames = new Exames();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/exames']);
  }
}
