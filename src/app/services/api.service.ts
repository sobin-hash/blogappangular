import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  BASE_URL="http://localhost:3000"
  constructor(private http:HttpClient) { }

  userRegister(data:any){
    return this.http.post(`${this.BASE_URL}/register-user`,data)

  }

  userLogin(data:any){
    return this.http.post(`${this.BASE_URL}/login-user`,data)

  }
  adminLogin(data:any){
    return this.http.post(`${this.BASE_URL}/login-admin`,data)

  }

  createBlog(data:any){
    return this.http.post(`${this.BASE_URL}/postblog`,data,this.appendTokenToHeader())

  }

  getAllBlog(){
    return this.http.get(`${this.BASE_URL}/getallblogs`,this.appendTokenToHeader())

  }

  appendTokenToHeader(){
    const token = sessionStorage.getItem("token")
    // console.log(JSON.parse(token),"from service")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`) //to avoid ""
    }
    return {headers}       //directly making it as object to avoid this --//headers:this.appendTokenHeader()


  }




}
