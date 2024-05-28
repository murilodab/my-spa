import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../models/blog-post-model';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
@Input() blogPost!: BlogPost;
}
