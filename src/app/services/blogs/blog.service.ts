import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blogModel } from './blog.model';
import { TokenStorageService } from '../auth/token-storage.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  rootURL = environment.rootURL;

  getBlogList(): Observable<blogModel[]> {
    return this.http.get<blogModel[]>(this.rootURL + `/GetBlogs`, {});
  }

  getLatestBlogList(): Observable<blogModel[]> {
    return this.http.get<blogModel[]>(this.rootURL + `/GetBlogs`, {});
  }

  getBlogCategory(): Observable<blogModel[]> {
    return this.http.get<blogModel[]>(this.rootURL + `/GetBlogCategory`, {});
  }

  getCatalogDetails(id: string): Observable<blogModel[]> {
    return this.http.get<blogModel[]>(
      this.rootURL + `/GetBlogById?id=${id}`,
      {}
    );
  }

  searchBlog(filters: any): Observable<blogModel[]> {
    return this.http.get<blogModel[]>(
      this.rootURL + `/SearchBlog?q=${filters.q}`,
      {}
    );
  }

  submitCommentBlog(filters: any): Observable<blogModel[]> {
    console.log(filters);
    return this.http.post<blogModel[]>(
      this.rootURL +
        `/SubmitCommentBlog?PostId=${filters.PostId}&CommentBody=${filters.CommentBody}&Title=${filters.Title}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  getComments(id: any): Observable<blogModel[]> {
    return this.http.get<blogModel[]>(
      this.rootURL + `/GetCommentsByBlogId?blogId=${id}`
    );
  }

  addRatingBlog(id: any, rate: any): Observable<blogModel[]> {
    return this.http.post<blogModel[]>(
      this.rootURL + `/AddRatingBlog?id=${id}&rate=${rate}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  blogByCategoryId(id: any) {
    return this.http.get(
      this.rootURL + `/GetBlogsByCategoryId?categoryId=${id}`
    );
  }

  blogByMonth(m: any) {
    return this.http.get(this.rootURL + `/GetBlogsByMonth?month=${m}`);
  }

  categoryList() {
    return this.http.get(this.rootURL + `/GetBlogCategory`);
  }
}
