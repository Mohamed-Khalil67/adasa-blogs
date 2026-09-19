/** The chrome around a legal page: the shared Legal parent renders it, each child route declares it. */
export interface LegalPage {
  /** Absolute path of the page, so the parent can build section links that keep the child segment. */
  path: string;
  heading: string;
  icon: string;
  updated: string;
  notice: { icon: string; title: string; text: string };
  /** The child's sections, in order; the ids match the section elements in its template. */
  sections: { id: string; title: string }[];
  footnote: { text: string; link: string; linkLabel: string };
}

export const PRIVACY_PAGE: LegalPage = {
  path: '/privacy',
  heading: 'سياسة الخصوصية',
  icon: 'fa-shield-halved',
  updated: '15 يناير 2026',
  notice: {
    icon: 'fa-circle-info',
    title: 'خصوصيتك تهمنا',
    text: 'نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.',
  },
  sections: [
    { id: 'intro', title: 'مقدمة' },
    { id: 'data-we-collect', title: 'المعلومات التي نجمعها' },
    { id: 'how-we-use', title: 'كيف نستخدم معلوماتك' },
    { id: 'cookies', title: 'ملفات تعريف الارتباط' },
    { id: 'security', title: 'أمان البيانات' },
    { id: 'your-rights', title: 'حقوقك' },
    { id: 'contact', title: 'تواصل معنا' },
  ],
  footnote: {
    text: 'باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً',
    link: '/terms',
    linkLabel: 'شروط الخدمة',
  },
};

export const TERMS_PAGE: LegalPage = {
  path: '/terms',
  heading: 'شروط الخدمة',
  icon: 'fa-file-contract',
  updated: '15 يناير 2026',
  notice: {
    icon: 'fa-triangle-exclamation',
    title: 'إشعار مهم',
    text: 'يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.',
  },
  sections: [
    { id: 'acceptance', title: 'الموافقة على الشروط' },
    { id: 'license', title: 'رخصة الاستخدام' },
    { id: 'disclaimer', title: 'إخلاء المسؤولية' },
    { id: 'limitations', title: 'القيود' },
    { id: 'user-content', title: 'محتوى المستخدم' },
    { id: 'changes', title: 'التعديلات' },
    { id: 'contact', title: 'معلومات الاتصال' },
  ],
  footnote: {
    text: 'باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً',
    link: '/privacy',
    linkLabel: 'سياسة الخصوصية',
  },
};
