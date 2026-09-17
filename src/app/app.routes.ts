import { Routes } from '@angular/router';

// Loaded on demand, so the article text stays out of the initial bundle.
const loadPosts = () => import('./data/posts.json').then((module) => module.default);

export const routes: Routes = [
  {
    path: '',
    title: 'عدسة - عالم التصوير',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'blog',
    title: 'المدونة | عدسة',
    loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:slug',
    title: 'مقال | عدسة',
    // Unknown slugs don't match this route, so they fall through to '**' (404).
    canMatch: [(_route, segments) => loadPosts().then((posts) => posts.some((post) => post.slug === segments[1]?.path))],
    loadComponent: () => import('./features/post-details/post-details').then((m) => m.PostDetails),
  },
  {
    path: 'about',
    title: 'من نحن | عدسة',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'privacy',
    title: 'سياسة الخصوصية | عدسة',
    loadComponent: () => import('./features/legal/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    title: 'شروط الخدمة | عدسة',
    loadComponent: () => import('./features/legal/terms/terms').then((m) => m.Terms),
  },
  {
    path: '404',
    title: 'الصفحة غير موجودة | عدسة',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
  { path: '**', redirectTo: '404' },
];
