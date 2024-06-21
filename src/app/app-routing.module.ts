import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { LoginComponent } from './login/login.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full',},
  {path: 'home', component: HomeComponent},
  {path: 'article/:id', component: ArticleDetailsComponent},
  {path: 'edit-article/:id', component: EditArticleComponent},
  {path: 'my-articles', component: MyArticlesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-article', component: CreateArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
