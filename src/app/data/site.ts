import { Category, Feature, NavLink, SiteInfo, SocialLink, Stat } from './models';

// Small, site-wide data used by the header and footer (part of the initial bundle).
// The posts live in posts.json and are only loaded with the pages that show them.

export const SITE: SiteInfo = {
  name: 'عدسة',
  tagline: 'عالم التصوير الفوتوغرافي',
  description:
    'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.',
  email: 'hello@adasah.com',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'X (Twitter)', icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/adasah' },
  { label: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/adasah' },
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com/company/adasah' },
  { label: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://youtube.com/@adasah' },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', path: '/', exact: true },
  { label: 'المدونة', path: '/blog' },
  { label: 'من نحن', path: '/about' },
];

export const CATEGORIES: Category[] = [
  { name: 'إضاءة', icon: 'fa-sun' },
  { name: 'بورتريه', icon: 'fa-user' },
  { name: 'مناظر طبيعية', icon: 'fa-mountain-sun' },
  { name: 'تقنيات', icon: 'fa-sliders' },
  { name: 'معدات', icon: 'fa-sun' },
];

export const POSTS_PER_PAGE = 6;

// Marketing figures, hard-coded on the original site.
export const HOME_STATS: Stat[] = [
  { icon: 'fa-newspaper', value: '+50', label: 'مقالة' },
  { icon: 'fa-users', value: '+10ألف', label: 'قارئ' },
  { icon: 'fa-folder-open', value: '4', label: 'تصنيفات' },
  { icon: 'fa-pen-nib', value: '6', label: 'كاتب' },
];

export const ABOUT_STATS: Stat[] = [
  { icon: 'fa-users', value: '+2مليون', label: 'قارئ شهرياً' },
  { icon: 'fa-newspaper', value: '+500', label: 'مقالة منشورة' },
  { icon: 'fa-pen-nib', value: '+50', label: 'كاتب خبير' },
  { icon: 'fa-book-open', value: '+15', label: 'تصنيف' },
];

export const ABOUT_VALUES: Feature[] = [
  { icon: 'fa-bullseye', title: 'الجودة أولاً', description: 'محتوى مدروس ومكتوب بخبرة' },
  { icon: 'fa-bolt', title: 'تركيز عملي', description: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
  { icon: 'fa-handshake', title: 'المجتمع', description: 'تعلم مع آلاف المصورين' },
  { icon: 'fa-arrows-rotate', title: 'دائماً محدث', description: 'أحدث الاتجاهات وأفضل الممارسات' },
];

export const DEFAULT_AUTHOR_BIO =
  'مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.';
