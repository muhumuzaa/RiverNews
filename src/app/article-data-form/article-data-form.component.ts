import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../fake.data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-data-form',
  templateUrl: './article-data-form.component.html',
  styleUrls: ['./article-data-form.component.css']
})
export class ArticleDataFormComponent implements OnInit {

  @Input() buttonText!: string;
  @Output() onSubmit = new EventEmitter<Article>();

  @Input() curr_id: string ='';
  @Input() curr_author: string='';
  @Input() curr_title: string ='';
  @Input() curr_description: string ='';
  @Input() curr_urlToImage: string ='';
  @Input() curr_publishedAt: string ='';

  articleForm!: FormGroup;


  id: string ='';
  author: string ='';
  title: string ='';
  description: string ='';
  urlToImage: string ='';
  publishedAt: string ='';

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      id: [this.curr_author],
      author: [this.curr_author, Validators.required],
      title: [this.curr_title, Validators.required],
      description: [this.curr_description, Validators.required],
      urlToImage: [this.curr_urlToImage, Validators.required],
      publishedAt: [this.curr_publishedAt, Validators.required],
      views: [0]
    })
  }

  onButtonClick(): void{
    if(this.articleForm.valid){
      this.onSubmit.emit(this.articleForm.value);
    }
  }

}
