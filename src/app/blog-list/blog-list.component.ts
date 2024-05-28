import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../models/blog-post-model';
import { BlogPostComponent } from '../blog-post/blog-post.component';


@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, BlogPostComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})

export class BlogListComponent {

  blogPost: BlogPost = {
    id:1,
    title: "First Post",
    content: "some content",
    
  };

}
