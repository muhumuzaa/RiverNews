import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { HomeComponent } from './home/home.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { ArticleDataFormComponent } from './article-data-form/article-data-form.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    ArticleComponent,
     ArticleDetailsComponent,
     EditArticleComponent,
     HomeComponent,
     MyArticlesComponent,
     HeaderComponent,
     LoginComponent,
     ArticleItemComponent,
     CreateArticleComponent,
     ArticleDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
