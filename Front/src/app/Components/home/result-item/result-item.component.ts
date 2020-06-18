import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() respuesta:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.respuesta)
  }

  verDetalle(){
    this.router.navigateByUrl(`/detalle/${this.respuesta._id}`)
  }

}
