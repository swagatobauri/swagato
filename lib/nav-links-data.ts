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
];

export const RESUME_LINK: NavItem = {
  id: 'resume', 
  label: 'Resume', 
  href: 'https://my.newtonschool.co/template/user/swagato731123/resume/', 
  isExternal: true, 
  iconName: 'FileText' 
};
