import { Component, OnInit } from '@angular/core';
import { Article, articles } from '../fake.data';
import { ArticleServiceService } from '../services/articleService.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  myArticles: Article[] =[];
  constructor(
    private articleService: ArticleServiceService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticlesForUser().subscribe(articles =>this.myArticles =articles);
  }

  onDeleteArticle(articleId: string): void{
    this.articleService.deleteArticle(articleId).subscribe(()=>{
      this.myArticles = this.myArticles.filter(article => article.id !== articleId);
    })
  }

}
