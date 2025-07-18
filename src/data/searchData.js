import { FiCode, FiDatabase, FiTrendingUp, FiUsers, FiCalendar, FiGlobe, FiShield, FiZap, FiBarChart, FiSmartphone, FiShoppingCart, FiCreditCard, FiMonitor, FiServer, FiCloud, FiLock } from 'react-icons/fi';

// Search data for the portfolio
export const searchData = [
  // Projects
  {
    id: 1,
    type: 'project',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    path: '/projects/ecommerce-platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    icon: FiShoppingCart,
    category: 'Web Development',
    featured: true
  },
  {
    id: 2,
    type: 'project',
    title: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard with Power BI integration, custom visualizations, and automated reporting system.',
    path: '/projects/analytics-dashboard',
    tags: ['Power BI', 'Python', 'SQL', 'Tableau', 'Data Visualization'],
    icon: FiBarChart,
    category: 'Data Analytics',
    featured: true
  },
  {
    id: 3,
    type: 'project',
    title: 'Mobile Banking App',
    description: 'Cross-platform mobile banking application with biometric authentication, real-time transactions, and secure API integration.',
    path: '/projects/mobile-banking',
    tags: ['React Native', 'Firebase', 'TypeScript', 'Biometrics', 'API'],
    icon: FiCreditCard,
    category: 'Mobile Development',
    featured: true
  },
  {
    id: 4,
    type: 'project',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with advanced animations, SEO optimization, and performance monitoring.',
    path: '/projects/portfolio-website',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO', 'Performance'],
    icon: FiGlobe,
    category: 'Web Development'
  },
  {
    id: 5,
    type: 'project',
    title: 'Task Management System',
    description: 'Collaborative task management platform with real-time updates, team collaboration, and project tracking.',
    path: '/projects/task-management',
    tags: ['React', 'Socket.io', 'PostgreSQL', 'Real-time', 'Collaboration'],
    icon: FiMonitor,
    category: 'Web Development'
  },
  {
    id: 6,
    type: 'project',
    title: 'Weather Forecast App',
    description: 'Weather application with location-based forecasts, interactive maps, and weather alerts.',
    path: '/projects/weather-app',
    tags: ['React Native', 'Weather API', 'Maps', 'Location Services'],
    icon: FiCloud,
    category: 'Mobile Development'
  },

  // Skills
  {
    id: 7,
    type: 'skill',
    title: 'React.js',
    description: 'Advanced React development with hooks, context API, and modern patterns. Experience with Next.js and React Native.',
    path: '/skills#react',
    tags: ['Frontend', 'JavaScript', 'UI/UX', 'Hooks', 'Context API'],
    icon: FiCode,
    category: 'Frontend Development',
    level: 90
  },
  {
    id: 8,
    type: 'skill',
    title: 'Data Analysis',
    description: 'Comprehensive data analysis skills including statistical analysis, data visualization, and business intelligence.',
    path: '/skills#data-analysis',
    tags: ['Python', 'Pandas', 'SQL', 'Statistics', 'Visualization'],
    icon: FiTrendingUp,
    category: 'Data Science',
    level: 85
  },
  {
    id: 9,
    type: 'skill',
    title: 'Node.js',
    description: 'Backend development with Node.js, Express.js, and database integration. RESTful APIs and microservices.',
    path: '/skills#nodejs',
    tags: ['Backend', 'JavaScript', 'Express', 'APIs', 'Microservices'],
    icon: FiServer,
    category: 'Backend Development',
    level: 80
  },
  {
    id: 10,
    type: 'skill',
    title: 'Python',
    description: 'Python programming for data science, automation, and web development. Experience with Django and Flask.',
    path: '/skills#python',
    tags: ['Programming', 'Data Science', 'Automation', 'Web Development'],
    icon: FiCode,
    category: 'Programming',
    level: 85
  },
  {
    id: 11,
    type: 'skill',
    title: 'SQL & Databases',
    description: 'Database design, optimization, and management. Experience with PostgreSQL, MySQL, and MongoDB.',
    path: '/skills#databases',
    tags: ['Databases', 'SQL', 'NoSQL', 'Optimization', 'Design'],
    icon: FiDatabase,
    category: 'Backend Development',
    level: 80
  },
  {
    id: 12,
    type: 'skill',
    title: 'Mobile Development',
    description: 'Cross-platform mobile development with React Native and native iOS/Android development.',
    path: '/skills#mobile',
    tags: ['React Native', 'iOS', 'Android', 'Mobile', 'Cross-platform'],
    icon: FiSmartphone,
    category: 'Mobile Development',
    level: 75
  },

  // Services
  {
    id: 13,
    type: 'service',
    title: 'Web Development',
    description: 'Full-stack web development services including custom websites, web applications, and e-commerce solutions.',
    path: '/services/web-development',
    tags: ['Full-stack', 'Responsive', 'SEO', 'E-commerce', 'Custom'],
    icon: FiCode,
    category: 'Development Services',
    price: 'Starting at $999'
  },
  {
    id: 14,
    type: 'service',
    title: 'SEO Optimization',
    description: 'Search engine optimization services to improve website rankings and drive organic traffic.',
    path: '/services/seo-optimization',
    tags: ['SEO', 'Marketing', 'Analytics', 'Keywords', 'Rankings'],
    icon: FiTrendingUp,
    category: 'Digital Marketing',
    price: 'Starting at $499'
  },
  {
    id: 15,
    type: 'service',
    title: 'Data Analytics',
    description: 'Data analysis and visualization services to transform raw data into actionable business insights.',
    path: '/services/data-analytics',
    tags: ['Analytics', 'Visualization', 'Insights', 'Reports', 'Business Intelligence'],
    icon: FiBarChart,
    category: 'Data Services',
    price: 'Starting at $799'
  },
  {
    id: 16,
    type: 'service',
    title: 'Website Maintenance',
    description: 'Ongoing website maintenance including updates, security monitoring, and performance optimization.',
    path: '/services/website-maintenance',
    tags: ['Maintenance', 'Security', 'Updates', 'Monitoring', 'Support'],
    icon: FiShield,
    category: 'Support Services',
    price: 'Starting at $199/month'
  },
  {
    id: 17,
    type: 'service',
    title: 'Performance Audit',
    description: 'Comprehensive website performance audit and optimization to improve speed and user experience.',
    path: '/services/performance-audit',
    tags: ['Performance', 'Optimization', 'Speed', 'Audit', 'UX'],
    icon: FiZap,
    category: 'Optimization Services',
    price: 'Starting at $399'
  },
  {
    id: 18,
    type: 'service',
    title: 'Training Sessions',
    description: 'Custom training sessions for teams to learn modern development practices and tools.',
    path: '/services/training-session',
    tags: ['Training', 'Education', 'Workshops', 'Best Practices', 'Team'],
    icon: FiUsers,
    category: 'Educational Services',
    price: 'Starting at $299'
  },

  // Blog Posts (if you have a blog)
  {
    id: 19,
    type: 'blog',
    title: 'Modern React Patterns',
    description: 'Best practices and modern patterns for building scalable React applications with hooks and context.',
    path: '/blog/modern-react-patterns',
    tags: ['React', 'JavaScript', 'Best Practices', 'Hooks', 'Patterns'],
    icon: FiCode,
    category: 'Tutorials',
    date: '2024-01-15'
  },
  {
    id: 20,
    type: 'blog',
    title: 'Data Visualization Best Practices',
    description: 'How to create effective data visualizations that communicate insights clearly and engage users.',
    path: '/blog/data-visualization-best-practices',
    tags: ['Data Visualization', 'Design', 'Analytics', 'Best Practices'],
    icon: FiBarChart,
    category: 'Data Science',
    date: '2024-01-10'
  },
  {
    id: 21,
    type: 'blog',
    title: 'SEO for Developers',
    description: 'Essential SEO techniques that every developer should know to build search-friendly websites.',
    path: '/blog/seo-for-developers',
    tags: ['SEO', 'Web Development', 'Technical SEO', 'Performance'],
    icon: FiTrendingUp,
    category: 'Web Development',
    date: '2024-01-05'
  },
  {
    id: 22,
    type: 'blog',
    title: 'Mobile App Security',
    description: 'Security best practices for mobile applications, including authentication and data protection.',
    path: '/blog/mobile-app-security',
    tags: ['Security', 'Mobile Development', 'Authentication', 'Best Practices'],
    icon: FiLock,
    category: 'Security',
    date: '2023-12-28'
  }
];

// Search categories for filtering
export const searchCategories = [
  { id: 'all', label: 'All', icon: FiGlobe },
  { id: 'project', label: 'Projects', icon: FiCode },
  { id: 'skill', label: 'Skills', icon: FiTrendingUp },
  { id: 'service', label: 'Services', icon: FiUsers },
  { id: 'blog', label: 'Blog', icon: FiCalendar }
];

// Popular search terms
export const popularSearches = [
  'React',
  'Data Analysis',
  'Web Development',
  'SEO',
  'Mobile Apps',
  'Python',
  'JavaScript',
  'Node.js'
];

// Quick access links
export const quickAccessLinks = [
  { label: 'All Projects', path: '/projects', icon: FiCode },
  { label: 'Skills & Expertise', path: '/skills', icon: FiTrendingUp },
  { label: 'Services', path: '/pricing', icon: FiUsers },
  { label: 'Contact', path: '/contact', icon: FiCalendar }
]; 