import { Component, NgZone, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {CrudService} from './../../service/crud.service'
import {FormGroup,FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  getId:any;
  updateForm:FormGroup;



  constructor(
    public formBuilder:FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRouter: ActivatedRoute,
    private crudService: CrudService

  ) { 
    this.getId = this.activatedRouter.snapshot.paramMap.get('id');
    this.crudService.GetBook(this.getId).subscribe(res=>{
      this.updateForm.setValue({
        story:res['story'],
        term:res['term'],
        year:res['year'],
        address:res['address'],
        tel:res['tel'],
        description:res['description']
      })
    })

    this.updateForm = this.formBuilder.group({
      story:[''],
      term:[''],
      year:[''],
      address:[''],
      tel:[''],
      description:['']

    })

  }

  ngOnInit(): void {
  }


  onUpdate():any{
    this.crudService.updateBook(this.getId,this.updateForm.value).subscribe(()=>{
    console.log('Data updated successfully');
    this.ngZone.run(()=> this.router.navigateByUrl('/books-list'))

    },(err)=>{
      console.log(err)
      }
    )
  }

}
