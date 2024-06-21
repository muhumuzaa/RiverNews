import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, articles } from '../fake.data';
import { ArticleServiceService } from '../services/articleService.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  isLoading: boolean = true;
  blog: Article| undefined;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticleServiceService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.articlesService.getArticleById(id).subscribe(
      article =>{
        this.blog = article;
        this.isLoading = false;
      }
    );
    this.articlesService.addViewToArticle(id).subscribe(
      ()=> console.log('Views updated')
    );
  }

}
