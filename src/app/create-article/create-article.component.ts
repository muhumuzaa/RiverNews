import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from '../services/articleService.service';
import { Article } from '../fake.data';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {


  constructor(
    private router: Router,
    private articlesService: ArticleServiceService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit({author, title, description, urlToImage, publishedAt}: { author: string, title: string, description: string, urlToImage: string, publishedAt: string }): void{
    this.articlesService.createArticle(author, title, description, urlToImage, publishedAt).subscribe(
      ()=>{
        this.router.navigateByUrl('/my-articles');
      }
    );
 
  }
  
  

}
