import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article, articles } from '../fake.data';
import { ArticleServiceService } from '../services/articleService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() toArticle= new EventEmitter<Array<Article>>();
  blogs: Article[] =[];

  constructor(private articleSService: ArticleServiceService) { }

  ngOnInit(): void {
    this.articleSService.geArticles().subscribe(articles => this.blogs = articles);
  }

  onGoToArticle(): void{
    this.toArticle.emit(this.blogs)
  }

}
