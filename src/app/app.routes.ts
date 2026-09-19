import { Routes } from '@angular/router';
import { PRIVACY_PAGE, TERMS_PAGE } from './features/legal/legal-page';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';

// Loaded on demand, so the article text stays out of the initial bundle.
const loadPosts = () => import('./data/posts.json').then((module) => module.default);

export const routes: Routes = [
  {
    path: '',
    title: 'عدسة - عالم التصوير',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'عدسة - عالم التصوير',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        title: 'المدونة | عدسة',
        loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
      },
      {
        path: ':slug',
        title: 'مقال | عدسة',
        // Unknown slugs don't match this route, so they fall through to '**' (404).
        canMatch: [
          (_route, segments) =>
            loadPosts().then((posts) => posts.some((post) => post.slug === segments[0]?.path)),
        ],
        loadComponent: () =>
          import('./features/post-details/post-details').then((m) => m.PostDetails),
      },
    ],
  },
  {
    path: 'about',
    title: 'من نحن | عدسة',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    // The legal pages share their hero, notice, section links and footnote, so they hang off one
    // parent and render only their own sections into its outlet.
    path: '',
    loadComponent: () => import('./features/legal/legal').then((m) => m.Legal),
    children: [
      {
        path: 'privacy',
        title: 'سياسة الخصوصية | عدسة',
        data: { page: PRIVACY_PAGE },
        loadComponent: () => import('./features/legal/privacy/privacy').then((m) => m.Privacy),
      },
      {
        path: 'terms',
        title: 'شروط الخدمة | عدسة',
        data: { page: TERMS_PAGE },
        loadComponent: () => import('./features/legal/terms/terms').then((m) => m.Terms),
      },
    ],
  },
  {
    path: '404',
    title: 'الصفحة غير موجودة | عدسة',
    component: NotFound,
  },
  { path: '**', redirectTo: '404' },
];
