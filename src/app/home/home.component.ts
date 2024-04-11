import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  blogsArray:any=[]

  constructor(private api:ApiService){

  }


  ngOnInit() {
    this.getAllBlogs()

    
    
  }
getAllBlogs(){

    this.api.getAllBlog().subscribe({
      next:(res:any)=>{
        console.log(res,"allblogs")
        this.blogsArray = res
        console.log(this.blogsArray,"array")

      },error:(err:any)=>{
        console.log(err)
      }
    })

  }

}
