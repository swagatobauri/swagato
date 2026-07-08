export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal: boolean;
  iconName: string;
  number?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const MENU_GROUPS: NavGroup[] = [
  {
    title: 'Explore',
    items: [
      { id: 'home', label: 'Home', href: '/', isExternal: false, iconName: 'Home' },
      { id: 'about', label: 'About', href: '/about', isExternal: false, iconName: 'User' },
      { id: 'experiences', label: 'Experience', href: '/experiences', isExternal: false, iconName: 'Briefcase' },
      { id: 'projects', label: 'Projects', href: '/projects', isExternal: false, iconName: 'FolderKanban' },
      { id: 'services', label: 'Services', href: '/services', isExternal: false, iconName: 'Layers' },
      { id: 'hire-me', label: 'Hire Me', href: '/hire-me', isExternal: false, iconName: 'Briefcase' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { id: 'stack', label: 'Stack', href: '/tech-stack', isExternal: false, iconName: 'Layers' },
    ]
  },
  {
    title: 'Connect',
    items: [
      { id: 'github', label: 'GitHub', href: 'https://github.com/swagatobauri', isExternal: true, iconName: 'Code2' },
      { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/swagatobauri/', isExternal: true, iconName: 'Globe' },
      { id: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/swagatobauri/', isExternal: true, iconName: 'Code' },
      { id: 'email', label: 'Email', href: 'mailto:swagato731123@gmail.com', isExternal: true, iconName: 'Mail' },
      { id: 'resume', label: 'Resume', href: 'https://my.newtonschool.co/template/user/swagato731123/resume/', isExternal: true, iconName: 'FileText' },
    ]
  }
];
