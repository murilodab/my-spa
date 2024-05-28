import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../models/blog-post-model';
import { BlogPostComponent } from '../blog-post/blog-post.component';



@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, BlogPostComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})

export class BlogListComponent {


  blogPostList: BlogPost[] =[ {
    id:0,
    title: "First Post",
    content: "First content",
  },
  {
    id:1,
    title: "Second Post",
    content: "Second content",
  },
  {
    id:2,
    title: "Third Post",
    content: "Third content",
  },
  {
    id:3,
    title: "Fourth Post",
    content: "Fourth content",
  },
  {
    id:4,
    title: "Fifth Post",
    content: "Fifth content",
  },
  ]
}
