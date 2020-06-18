import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:any;
  resultados:any[];
  url:string = "https://formweb.herokuapp.com"

  constructor(private http: HttpClient, private router:Router) { }

  grabarCliente(obj:any) : Observable<any>{
    return this.http.post( this.url+'/api/create', obj)
  }

  login(obj:any): Observable<any>{
    return this.http.post(this.url+'/api/login', obj)
  }

  autenticar(){
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigateByUrl('/login')
    } else{
      this.user = jwtDecode(token);
    }
  }

  getUsuario(){
    return this.user
  }

  postResultado(obj: any): Observable<any>{
    return this.http.post(this.url+'/result/add', obj)
  }

  getResultados(id:string): Observable<any>{
    return this.http.get(this.url+`/result/${id}`)
  }

  getDetalle(id:string){
    return this.resultados.filter(res=>{
      return res._id === id
    });
  }


}
