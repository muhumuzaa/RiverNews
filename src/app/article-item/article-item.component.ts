import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../fake.data';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article| undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
