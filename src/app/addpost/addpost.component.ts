import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

  constructor(private fb:FormBuilder,private api:ApiService,private toastr:ToastrService){

  }


  postForm =  this.fb.group({

    posttitle:'',
    posttext:'',
    postimg:''



  })

  handlePosting(){
    console.log(this.postForm.value)
    this.api.createBlog(this.postForm.value).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("Blog successfully published")
        this.postForm.reset()


      },error:(err)=>{
        this.toastr.warning("Enter valid details")
        console.log(err)

      }
    })


  }

}
