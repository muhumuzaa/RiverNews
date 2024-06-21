import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, articles } from '../fake.data';
import { ArticleServiceService } from '../services/articleService.service';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  blog: Article|undefined;
  errorMessage: string ='';

  constructor(
    private route: ActivatedRoute, private router: Router,
    private articleService: ArticleServiceService
  ) { }

  ngOnInit(): void {
    const articleId =this.route.snapshot.paramMap.get('id')!;
    this.articleService.getArticleById(articleId).subscribe(article =>this.blog = article);
  }
  

  handleSubmit({author, title, description, urlToImage, publishedAt}: { author: string, title: string, description: string, urlToImage: string, publishedAt: string }): void{
    if(this.blog){
    this.articleService.editArticle(this.blog?.id, author, title, description,urlToImage, publishedAt).subscribe(
      ()=>{this.router.navigateByUrl('/my-listings')}
    );
  }else this.errorMessage ="Article loading or not found";
    
  }

}
