import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const TechnologyModal = ({ isOpen, onClose, technology }) => {
  const techDetails = {
    'React': {
      description: 'A powerful JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive UI.',
      features: ['Component-Based Architecture', 'Virtual DOM', 'JSX Syntax', 'Hooks', 'State Management'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      pros: ['Fast rendering', 'Large community', 'Reusable components', 'Great developer tools'],
      useCases: ['Single Page Applications', 'Progressive Web Apps', 'Mobile Apps with React Native']
    },
    'JavaScript': {
      description: 'A versatile programming language that enables interactive web pages and is an essential part of web applications.',
      features: ['Dynamic Typing', 'First-class Functions', 'Event-driven Programming', 'Asynchronous Programming'],
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
      pros: ['Runs everywhere', 'Large ecosystem', 'Easy to learn', 'Constantly evolving'],
      useCases: ['Web Development', 'Server-side Development', 'Mobile Apps', 'Desktop Applications']
    },
    'Python': {
      description: 'A high-level programming language known for its simplicity and readability, perfect for data analysis and web development.',
      features: ['Clean Syntax', 'Extensive Libraries', 'Cross-platform', 'Object-oriented'],
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      pros: ['Easy to learn', 'Versatile', 'Great for data science', 'Strong community'],
      useCases: ['Data Analysis', 'Machine Learning', 'Web Development', 'Automation']
    },
    'Node.js': {
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, enabling server-side JavaScript development.',
      features: ['Event-driven Architecture', 'Non-blocking I/O', 'NPM Package Manager', 'Cross-platform'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      pros: ['Fast performance', 'JavaScript everywhere', 'Great for real-time apps', 'Large package ecosystem'],
      useCases: ['RESTful APIs', 'Real-time Applications', 'Microservices', 'Command Line Tools']
    },
    'SQL': {
      description: 'Structured Query Language for managing and manipulating relational databases efficiently.',
      features: ['Data Querying', 'Data Manipulation', 'Database Schema Design', 'ACID Compliance'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
      pros: ['Industry standard', 'Powerful querying', 'Data integrity', 'Widely supported'],
      useCases: ['Database Management', 'Data Analysis', 'Reporting', 'Data Warehousing']
    },
    'Git': {
      description: 'A distributed version control system for tracking changes in source code during software development.',
      features: ['Distributed Version Control', 'Branching and Merging', 'Collaboration Tools', 'History Tracking'],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
      pros: ['Track changes', 'Collaboration', 'Backup and recovery', 'Branch management'],
      useCases: ['Source Code Management', 'Team Collaboration', 'Release Management', 'Code Backup']
    },
    'TailwindCSS': {
      description: 'A utility-first CSS framework for rapidly building custom user interfaces without writing custom CSS.',
      features: ['Utility Classes', 'Responsive Design', 'Customizable', 'Performance Optimized'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      pros: ['Rapid development', 'Consistent design', 'Small bundle size', 'Highly customizable'],
      useCases: ['Responsive Web Design', 'Component Libraries', 'Prototyping', 'Custom UI Design']
    },
    'Power BI': {
      description: 'Microsoft\'s business analytics tool that provides interactive visualizations and business intelligence capabilities.',
      features: ['Data Visualization', 'Real-time Dashboards', 'Data Modeling', 'Cloud Integration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['User-friendly', 'Microsoft integration', 'Real-time data', 'Collaborative'],
      useCases: ['Business Intelligence', 'Data Reporting', 'Dashboard Creation', 'Data Analysis']
    },
    'VS Code': {
      description: 'A lightweight but powerful source code editor with rich support for many programming languages.',
      features: ['IntelliSense', 'Built-in Git', 'Extensions Marketplace', 'Integrated Terminal'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Free and open source', 'Extensive extensions', 'Great performance', 'Cross-platform'],
      useCases: ['Code Development', 'Debugging', 'Version Control', 'Project Management']
    },
    'Pandas': {
      description: 'A powerful Python library for data manipulation and analysis, providing data structures and operations.',
      features: ['DataFrame Operations', 'Data Cleaning', 'Statistical Analysis', 'File I/O'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Powerful data manipulation', 'Easy to use', 'Great documentation', 'Integrates well'],
      useCases: ['Data Analysis', 'Data Cleaning', 'Statistical Computing', 'Data Visualization']
    },
    'Excel': {
      description: 'A spreadsheet application that features calculation, graphing tools, pivot tables, and macro programming.',
      features: ['Spreadsheet Functions', 'Pivot Tables', 'Charts and Graphs', 'Macro Programming'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      pros: ['Widely used', 'User-friendly', 'Powerful calculations', 'Business standard'],
      useCases: ['Data Analysis', 'Financial Modeling', 'Reporting', 'Project Management']
    },
    'REST APIs': {
      description: 'Architectural style for designing networked applications, enabling communication between different systems.',
      features: ['HTTP Methods', 'Stateless Communication', 'JSON Data Format', 'Resource-based URLs'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      pros: ['Simple and lightweight', 'Platform independent', 'Scalable', 'Cacheable'],
      useCases: ['Web Services', 'Mobile App Backend', 'Microservices', 'Third-party Integrations']
    },
    'HTML5 & CSS3': {
      description: 'The foundation of modern web development, HTML5 provides semantic structure while CSS3 enables advanced styling and animations.',
      features: ['Semantic Elements', 'Responsive Design', 'CSS Grid & Flexbox', 'Animations & Transitions'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Universal browser support', 'SEO friendly', 'Accessibility features', 'Modern layouts'],
      useCases: ['Website Structure', 'Responsive Design', 'Web Applications', 'Mobile-first Design']
    },
    'Express.js': {
      description: 'Fast, unopinionated web framework for Node.js, designed for building web applications and APIs quickly.',
      features: ['Middleware Support', 'Routing', 'Template Engines', 'Error Handling'],
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
      pros: ['Lightweight and fast', 'Flexible architecture', 'Large ecosystem', 'Easy to learn'],
      useCases: ['Web Servers', 'API Development', 'Single Page Applications', 'Microservices']
    },
    'Three.js': {
      description: '3D graphics library that makes WebGL accessible, enabling stunning 3D visualizations in web browsers.',
      features: ['3D Rendering', 'WebGL Integration', 'Animation System', 'Material Library'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      pros: ['Browser-based 3D', 'Rich visual effects', 'Interactive experiences', 'Cross-platform'],
      useCases: ['3D Websites', 'Data Visualization', 'Games', 'Virtual Reality']
    },
    'SPSS': {
      description: 'Statistical software package used for interactive statistical analysis, data mining, and predictive analytics.',
      features: ['Statistical Analysis', 'Data Mining', 'Predictive Analytics', 'Report Generation'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['User-friendly interface', 'Comprehensive statistics', 'Advanced analytics', 'Industry standard'],
      useCases: ['Research Analysis', 'Market Research', 'Quality Control', 'Survey Analysis']
    },
    'Data Visualization': {
      description: 'The practice of representing data in visual formats to identify patterns, trends, and insights.',
      features: ['Chart Creation', 'Interactive Dashboards', 'Statistical Graphics', 'Storytelling'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Clear communication', 'Pattern recognition', 'Decision support', 'Engaging presentations'],
      useCases: ['Business Intelligence', 'Research Reports', 'Data Analysis', 'Performance Monitoring']
    },
    'Statistical Analysis': {
      description: 'Mathematical techniques for collecting, analyzing, interpreting, and presenting empirical data.',
      features: ['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'Regression Analysis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Evidence-based decisions', 'Pattern identification', 'Predictive insights', 'Risk assessment'],
      useCases: ['Research Studies', 'Quality Control', 'Market Analysis', 'Performance Metrics']
    },
    'SEO Optimization': {
      description: 'Search Engine Optimization techniques to improve website visibility and ranking in search engine results.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Optimization'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop',
      pros: ['Increased visibility', 'Organic traffic growth', 'Better user experience', 'Cost-effective marketing'],
      useCases: ['Website Optimization', 'Content Marketing', 'E-commerce', 'Digital Marketing']
    },
    'AI Automation': {
      description: 'Using artificial intelligence to automate repetitive tasks and complex decision-making processes.',
      features: ['Process Automation', 'Machine Learning', 'Decision Trees', 'Workflow Optimization'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      pros: ['Increased efficiency', 'Error reduction', 'Cost savings', 'Scalable solutions'],
      useCases: ['Business Process Automation', 'Data Processing', 'Customer Service', 'Quality Assurance']
    },
    'AI Chatbots': {
      description: 'Intelligent conversational agents that can understand and respond to user queries using natural language processing.',
      features: ['Natural Language Processing', 'Intent Recognition', 'Context Management', 'Multi-platform Integration'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop',
      pros: ['24/7 availability', 'Instant responses', 'Consistent service', 'Cost-effective support'],
      useCases: ['Customer Support', 'Lead Generation', 'FAQ Automation', 'E-commerce Assistance']
    },
    'Machine Learning': {
      description: 'Branch of artificial intelligence that enables systems to learn and improve from experience without explicit programming.',
      features: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Model Training'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      pros: ['Predictive capabilities', 'Pattern recognition', 'Automated insights', 'Adaptive systems'],
      useCases: ['Predictive Analytics', 'Recommendation Systems', 'Image Recognition', 'Fraud Detection']
    },
    // High Priority Missing Modals
    'Pandas & NumPy': {
      description: 'Powerful Python libraries for data manipulation and numerical computing. Pandas provides data structures for data analysis, while NumPy offers efficient array operations and mathematical functions.',
      features: ['DataFrame Operations', 'Array Computing', 'Data Cleaning', 'Statistical Functions', 'File I/O'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Fast computation', 'Rich ecosystem', 'Excellent documentation', 'Industry standard'],
      useCases: ['Data Analysis', 'Scientific Computing', 'Machine Learning', 'Financial Modeling']
    },
    'Responsive Design': {
      description: 'Web design approach that ensures websites adapt seamlessly across different screen sizes and devices, providing optimal user experience.',
      features: ['Mobile-First Design', 'Flexible Grids', 'Media Queries', 'Touch-Friendly Interfaces'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Better user experience', 'SEO benefits', 'Future-proof', 'Cross-device compatibility'],
      useCases: ['Web Applications', 'E-commerce Sites', 'Portfolio Websites', 'Mobile Apps']
    },
    'Database Design': {
      description: 'The process of creating a structured database schema that efficiently stores and organizes data while maintaining data integrity and performance.',
      features: ['Schema Design', 'Normalization', 'Indexing', 'Data Modeling', 'Performance Optimization'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
      pros: ['Data integrity', 'Performance optimization', 'Scalability', 'Maintainability'],
      useCases: ['Web Applications', 'Enterprise Systems', 'Data Warehouses', 'E-commerce Platforms']
    },
    'Authentication': {
      description: 'Security mechanism that verifies the identity of users and controls access to systems and resources.',
      features: ['User Verification', 'Session Management', 'Password Security', 'Multi-Factor Authentication'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      pros: ['Security enhancement', 'User privacy', 'Access control', 'Audit trails'],
      useCases: ['Web Applications', 'Mobile Apps', 'Enterprise Systems', 'E-commerce']
    },
    'Process Automation': {
      description: 'Using technology to automate repetitive business processes, reducing manual work and improving efficiency.',
      features: ['Workflow Automation', 'Task Scheduling', 'Error Reduction', 'Performance Monitoring'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      pros: ['Increased efficiency', 'Cost reduction', 'Error elimination', 'Scalability'],
      useCases: ['Business Operations', 'Data Processing', 'Customer Service', 'Quality Assurance']
    },
    'Terminal/CLI': {
      description: 'Command Line Interface tools for interacting with operating systems and development environments through text-based commands.',
      features: ['Command Execution', 'Scripting', 'System Administration', 'Development Tools'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Fast execution', 'Automation capabilities', 'Resource efficient', 'Powerful control'],
      useCases: ['System Administration', 'Development', 'Server Management', 'Automation Scripts']
    },
    'Package Managers': {
      description: 'Tools that automate the process of installing, updating, configuring, and removing software packages and dependencies.',
      features: ['Dependency Management', 'Version Control', 'Installation Automation', 'Repository Management'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      pros: ['Simplified installation', 'Dependency resolution', 'Version management', 'Security updates'],
      useCases: ['Software Development', 'System Administration', 'DevOps', 'Package Distribution']
    },
    'Debugging': {
      description: 'The process of identifying, analyzing, and fixing errors or bugs in software code to ensure proper functionality.',
      features: ['Error Detection', 'Code Analysis', 'Step-by-step Execution', 'Variable Inspection'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Bug identification', 'Code quality improvement', 'Performance optimization', 'Learning tool'],
      useCases: ['Software Development', 'Testing', 'Maintenance', 'Quality Assurance']
    },
    'R Programming': {
      description: 'A programming language and environment specifically designed for statistical computing, data analysis, and graphics.',
      features: ['Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Package Ecosystem'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Statistical expertise', 'Rich visualization', 'Academic standard', 'Extensive packages'],
      useCases: ['Statistical Research', 'Data Analysis', 'Academic Studies', 'Business Intelligence']
    },
    'Tableau': {
      description: 'A powerful data visualization and business intelligence tool that helps people see and understand their data.',
      features: ['Interactive Dashboards', 'Data Blending', 'Real-time Analytics', 'Storytelling'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['User-friendly interface', 'Powerful visualizations', 'Real-time data', 'Collaborative features'],
      useCases: ['Business Intelligence', 'Data Reporting', 'Performance Monitoring', 'Executive Dashboards']
    },
    'Jupyter Notebooks': {
      description: 'Interactive computing environment that allows you to create and share documents containing live code, equations, visualizations, and narrative text.',
      features: ['Interactive Code', 'Rich Text', 'Data Visualization', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Interactive development', 'Rich documentation', 'Reproducible research', 'Educational tool'],
      useCases: ['Data Science', 'Machine Learning', 'Research', 'Education']
    },
    'Cloud Computing': {
      description: 'Technology that provides on-demand access to computing resources over the internet, enabling scalable and flexible solutions.',
      features: ['Scalability', 'On-demand Resources', 'Pay-per-use', 'Global Accessibility'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      pros: ['Cost efficiency', 'Scalability', 'Reliability', 'Global reach'],
      useCases: ['Web Applications', 'Data Storage', 'Machine Learning', 'Business Operations']
    },
    'AWS Services': {
      description: 'Amazon Web Services provides a comprehensive cloud computing platform with over 200 services for building scalable applications.',
      features: ['Compute Services', 'Storage Solutions', 'Database Services', 'Security Tools'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      pros: ['Market leader', 'Comprehensive services', 'Global infrastructure', 'Enterprise-grade security'],
      useCases: ['Web Applications', 'Data Analytics', 'Machine Learning', 'Enterprise Solutions']
    },
    'DAX': {
      description: 'Data Analysis Expressions is a formula language used in Power BI, SQL Server Analysis Services, and Power Pivot for data modeling.',
      features: ['Formula Language', 'Data Modeling', 'Calculated Columns', 'Measures'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Powerful calculations', 'Integration with Power BI', 'Performance optimization', 'Flexible modeling'],
      useCases: ['Business Intelligence', 'Data Modeling', 'Financial Analysis', 'Performance Reporting']
    },
    'Data Modeling': {
      description: 'The process of creating a conceptual representation of data structures and relationships to support business requirements.',
      features: ['Conceptual Design', 'Logical Modeling', 'Physical Design', 'Relationship Mapping'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Data organization', 'Performance optimization', 'Scalability', 'Maintainability'],
      useCases: ['Database Design', 'Business Intelligence', 'Data Warehousing', 'Analytics']
    },
    'Business Intelligence': {
      description: 'Technologies and practices for collecting, analyzing, and presenting business information to support decision-making.',
      features: ['Data Collection', 'Analysis Tools', 'Reporting', 'Dashboard Creation'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Informed decisions', 'Performance insights', 'Competitive advantage', 'Operational efficiency'],
      useCases: ['Executive Reporting', 'Performance Monitoring', 'Market Analysis', 'Operational Analytics']
    },
    'Web Scraping': {
      description: 'The process of extracting data from websites using automated tools and scripts to gather information for analysis.',
      features: ['Data Extraction', 'Automation', 'Parsing', 'Data Cleaning'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Automated data collection', 'Large-scale extraction', 'Real-time data', 'Cost-effective'],
      useCases: ['Market Research', 'Price Monitoring', 'Content Aggregation', 'Data Analysis']
    },
    // Academic Course Modals
    'Advanced Algorithms': {
      description: 'Study of complex algorithmic techniques and data structures for solving computational problems efficiently.',
      features: ['Algorithm Design', 'Complexity Analysis', 'Optimization Techniques', 'Problem Solving'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Problem-solving skills', 'Performance optimization', 'Computational thinking', 'Software efficiency'],
      useCases: ['Software Development', 'System Design', 'Performance Optimization', 'Research']
    },
    'Database Systems': {
      description: 'Comprehensive study of database management systems, including design, implementation, and optimization.',
      features: ['Database Design', 'SQL Programming', 'Performance Tuning', 'Data Management'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
      pros: ['Data management skills', 'Performance optimization', 'Scalability understanding', 'Industry knowledge'],
      useCases: ['Database Administration', 'System Architecture', 'Data Engineering', 'Backend Development']
    },
    'Web Application Development': {
      description: 'Comprehensive course covering modern web development practices, frameworks, and technologies.',
      features: ['Frontend Development', 'Backend Development', 'Database Integration', 'Deployment'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Full-stack skills', 'Modern frameworks', 'Best practices', 'Industry relevance'],
      useCases: ['Web Development', 'E-commerce', 'SaaS Applications', 'Portfolio Projects']
    },
    'Data Mining': {
      description: 'Process of discovering patterns and extracting useful information from large datasets using statistical and machine learning techniques.',
      features: ['Pattern Recognition', 'Statistical Analysis', 'Machine Learning', 'Data Preprocessing'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Insight discovery', 'Predictive capabilities', 'Business intelligence', 'Research skills'],
      useCases: ['Business Analytics', 'Market Research', 'Fraud Detection', 'Recommendation Systems']
    },
    'Data Structures': {
      description: 'Study of fundamental data organization and storage methods that enable efficient data access and modification.',
      features: ['Array Structures', 'Linked Lists', 'Trees', 'Graphs', 'Hash Tables'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Efficient algorithms', 'Memory optimization', 'Problem-solving skills', 'Software design'],
      useCases: ['Software Development', 'Algorithm Design', 'System Architecture', 'Performance Optimization']
    },
    'Object-Oriented Programming': {
      description: 'Programming paradigm based on the concept of objects that contain data and code, promoting code reusability and maintainability.',
      features: ['Classes and Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Code reusability', 'Maintainability', 'Scalability', 'Industry standard'],
      useCases: ['Software Development', 'System Design', 'Application Architecture', 'Code Organization']
    },
    'Software Engineering': {
      description: 'Systematic approach to software development that applies engineering principles to design, develop, and maintain software systems.',
      features: ['Requirements Analysis', 'System Design', 'Testing', 'Project Management'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Systematic development', 'Quality assurance', 'Team collaboration', 'Project management'],
      useCases: ['Software Development', 'Project Management', 'Quality Assurance', 'System Architecture']
    },
    'Systems Analysis': {
      description: 'Process of studying systems to understand their structure, behavior, and requirements for improvement or replacement.',
      features: ['System Study', 'Requirements Gathering', 'Process Analysis', 'Solution Design'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Problem identification', 'Solution design', 'Process improvement', 'System optimization'],
      useCases: ['Business Analysis', 'System Design', 'Process Improvement', 'IT Consulting']
    },
    // Additional Missing Technologies
    'HTML/CSS': {
      description: 'The fundamental building blocks of web development. HTML provides structure while CSS handles styling and layout.',
      features: ['Semantic Markup', 'Styling & Layout', 'Responsive Design', 'CSS Frameworks'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Foundation of web development', 'Universal browser support', 'SEO friendly', 'Easy to learn'],
      useCases: ['Website Development', 'Web Applications', 'Email Templates', 'Documentation']
    },
    'Version Control': {
      description: 'System that tracks changes to source code over time, enabling collaboration and maintaining project history.',
      features: ['Change Tracking', 'Branch Management', 'Collaboration', 'History Preservation'],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
      pros: ['Team collaboration', 'Code backup', 'Change history', 'Conflict resolution'],
      useCases: ['Software Development', 'Document Management', 'Configuration Control', 'Team Projects']
    },
    'Cloud Architecture': {
      description: 'Design and implementation of cloud-based systems that are scalable, reliable, and cost-effective.',
      features: ['Scalable Design', 'High Availability', 'Security Integration', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      pros: ['Scalability', 'Reliability', 'Cost efficiency', 'Global reach'],
      useCases: ['Web Applications', 'Microservices', 'Data Centers', 'Enterprise Solutions']
    },
    'Security': {
      description: 'Protection of systems, networks, and data from digital attacks, damage, or unauthorized access.',
      features: ['Access Control', 'Data Protection', 'Threat Prevention', 'Security Monitoring'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      pros: ['Data protection', 'Compliance', 'Risk mitigation', 'User trust'],
      useCases: ['Web Applications', 'Enterprise Systems', 'Financial Services', 'Healthcare']
    },
    'Cost Optimization': {
      description: 'Strategies and techniques to minimize cloud computing and technology costs while maintaining performance.',
      features: ['Resource Management', 'Usage Monitoring', 'Pricing Optimization', 'Budget Planning'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Cost reduction', 'Resource efficiency', 'Budget control', 'ROI improvement'],
      useCases: ['Cloud Management', 'IT Operations', 'Business Planning', 'Financial Analysis']
    },
    'Report Development': {
      description: 'Creation of comprehensive reports and dashboards that present data insights in a clear, actionable format.',
      features: ['Data Visualization', 'Report Design', 'Automation', 'Distribution'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      pros: ['Clear insights', 'Automated reporting', 'Decision support', 'Stakeholder communication'],
      useCases: ['Business Intelligence', 'Performance Monitoring', 'Executive Reporting', 'Operational Analytics']
    },
    'APIs': {
      description: 'Application Programming Interfaces that enable different software systems to communicate and share data.',
      features: ['Data Exchange', 'Service Integration', 'Standardization', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      pros: ['System integration', 'Reusability', 'Scalability', 'Standardization'],
      useCases: ['Web Services', 'Mobile Apps', 'Third-party Integration', 'Microservices']
    },
    // Soft Skills Modals
    'Problem Solving': {
      description: 'Ability to identify, analyze, and resolve complex technical and business challenges systematically.',
      features: ['Analytical Thinking', 'Creative Solutions', 'Systematic Approach', 'Root Cause Analysis'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Efficient solutions', 'Innovation', 'Time savings', 'Quality improvement'],
      useCases: ['Software Development', 'Troubleshooting', 'System Design', 'Process Improvement']
    },
    'Critical Thinking': {
      description: 'Objective analysis and evaluation of information to form well-reasoned judgments and decisions.',
      features: ['Logical Analysis', 'Evidence Evaluation', 'Bias Recognition', 'Decision Making'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Better decisions', 'Quality assurance', 'Risk assessment', 'Innovation'],
      useCases: ['Code Review', 'System Architecture', 'Problem Solving', 'Strategic Planning']
    },
    'Communication': {
      description: 'Effective exchange of information, ideas, and feedback with team members, stakeholders, and clients.',
      features: ['Clear Expression', 'Active Listening', 'Documentation', 'Presentation Skills'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      pros: ['Team collaboration', 'Client satisfaction', 'Project success', 'Knowledge sharing'],
      useCases: ['Team Meetings', 'Client Presentations', 'Documentation', 'Training']
    },
    'Project Management': {
      description: 'Planning, organizing, and managing resources to successfully complete specific project goals and objectives.',
      features: ['Planning & Scheduling', 'Resource Management', 'Risk Assessment', 'Progress Tracking'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['On-time delivery', 'Budget control', 'Quality assurance', 'Team coordination'],
      useCases: ['Software Development', 'Product Launches', 'System Implementation', 'Team Leadership']
    },
    'Team Collaboration': {
      description: 'Working effectively with others to achieve common goals through cooperation, communication, and shared responsibility.',
      features: ['Cooperation', 'Shared Goals', 'Conflict Resolution', 'Knowledge Sharing'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      pros: ['Increased productivity', 'Innovation', 'Skill development', 'Project success'],
      useCases: ['Agile Development', 'Cross-functional Teams', 'Code Reviews', 'Pair Programming']
    },
    'Attention to Detail': {
      description: 'Meticulous focus on accuracy and precision in all aspects of work, from code quality to documentation.',
      features: ['Quality Control', 'Error Prevention', 'Thoroughness', 'Precision'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['High quality output', 'Error reduction', 'Professional reputation', 'Client satisfaction'],
      useCases: ['Code Review', 'Testing', 'Documentation', 'Quality Assurance']
    },
    'Adaptability': {
      description: 'Ability to quickly learn new technologies, adapt to changing requirements, and work in dynamic environments.',
      features: ['Quick Learning', 'Flexibility', 'Open-mindedness', 'Continuous Improvement'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Technology adoption', 'Problem solving', 'Career growth', 'Innovation'],
      useCases: ['Technology Migration', 'Agile Development', 'Startup Environments', 'Continuous Learning']
    },
    'Time Management': {
      description: 'Efficient organization and prioritization of tasks to maximize productivity and meet deadlines effectively.',
      features: ['Task Prioritization', 'Schedule Planning', 'Deadline Management', 'Productivity Optimization'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      pros: ['Increased productivity', 'Stress reduction', 'Goal achievement', 'Work-life balance'],
      useCases: ['Project Planning', 'Daily Workflow', 'Meeting Deadlines', 'Personal Development']
    }
  };

  const tech = techDetails[technology];

  if (!tech) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{technology}</DialogTitle>
        </DialogHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Technology Image */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <img 
              src={tech.image} 
              alt={technology}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <DialogDescription className="text-base leading-relaxed">
            {tech.description}
          </DialogDescription>

          {/* Key Features */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tech.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Why I Use It</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tech.pros.map((pro, index) => (
                <motion.div
                  key={pro}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{pro}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Common Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              {tech.useCases.map((useCase, index) => (
                <motion.span
                  key={useCase}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  {useCase}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default TechnologyModal;