import { Component, OnInit } from '@angular/core';
import {CrudService} from './../../service/crud.service'
import {FormGroup,FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  Books:any



  constructor(
    public fromBuilder:FormBuilder,
    private crudService:CrudService
  ) { 
    this.Books = this.fromBuilder.group({
      story:[''],
      term:[''],
      year:[''],
      address:[''],
      tel:[''],
      description:[''],
      actionTeacher:[''],
      studentID:['']
    })
  }

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

  onSubmit2(){
    this.crudService.AddBook2(this.Books.value)
    .subscribe(()=>{
      console.log("Data added successfully");

    },(err)=>{
      console.log(err);
    })
  }


}
