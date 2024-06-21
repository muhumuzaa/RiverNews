import { Injectable } from '@angular/core';
import { Article, articles } from '../fake.data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

constructor(private httpClient: HttpClient) { }

geArticles(): Observable<Article[]>{
  return this.httpClient.get<Article[]>('/api/articles');
}

getArticleById(id: string): Observable<Article>{
  return this.httpClient.get<Article>(`/api/articles/${id}`);
};

addViewToArticle(id:string): Observable<Article>{
  return this.httpClient.post<Article>(`/api/articles/${id}/add-view`, 
    {},
    httpOptions,
  )
}

getArticlesForUser(): Observable<Article[]>{
  return this.httpClient.get<Article[]>('/api/users/1234/articles');
}

deleteArticle(id: string): Observable<any>{
  return this.httpClient.delete(`/api/articles/${id}`);
}

createArticle(author: string,title: string,description: string,urlToImage: string,publishedAt: string): Observable<Article>{
  return this.httpClient.post<Article>(
    '/api/articles',
    {author, title, description, urlToImage, publishedAt},
    httpOptions,
  );
}

editArticle(id: string, author: string,title: string,description: string,urlToImage: string,publishedAt: string): Observable<Article>{
  return this.httpClient.post<Article>(
    `/api/articles/${id}`,
    {author, title, description, urlToImage, publishedAt},
    httpOptions,
  );
}

}
