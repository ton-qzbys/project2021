import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-list-approve',
  templateUrl: './list-approve.component.html',
  styleUrls: ['./list-approve.component.css']
})
export class ListApproveComponent implements OnInit {

  Books:any

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res =>{
      console.log(res);
      this.Books=res;})
  }


  delete(id:any, i:any){
    console.log(id)
    if (window.confirm('Do you want to go ahead?')){
      this.crudService.deleteBook(id).subscribe((res)=>{
        this.Books.splice(i,1)
      })


    }

  }

}
