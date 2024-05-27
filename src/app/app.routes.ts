import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

export const routes: Routes = [
    { path: '', component: BlogListComponent},
    { path: 'blog-post-component', component: BlogPostComponent}
];
