const personal = {
  name: 'Zenith Joshua',
  role: 'Tech Enthusiast & Entrepreneur',
  email: 'zenithjoshua.27it@licet.ac.in',
  phone: '+91 7448343632',
  linkedin: 'https://www.linkedin.com/in/zenith-joshua-7178a623a/',
  github: 'https://github.com/Jos-zenith',
  location: 'Chennai, Tamil Nadu, India',
  institution: 'Loyola ICAM College of Engineering and Technology',
  degree: 'Bachelor of Information Technology (2023-2027), CGPA: 7.0',
  bio: 'Innovative Product Leader and Developer with a track record of building scalable solutions across IoT, AI and Automotive Engineering. I specialize in bridging the gap between complex hardware systems and intuitive software architectures. I thrive at the intersection of engineering, entrepreneurship, and empathy.',
  resume: 'https://docs.google.com/document/d/1ojae1n-xKYxAsfgFJk5XETuKijtpQ_1nXZOaocUttjY/edit?usp=sharing'
}

const heroLinks = [
  { label: 'LinkedIn', href: personal.linkedin },
  { label: 'GitHub', href: personal.github },
  { label: 'Resume PDF', href: personal.resume }
]

const about = {
  intro: 'IT student, startup co-founder, builder, and mentor who enjoys transforming hardware-heavy problems into approachable software experiences.',
  quote: 'Tech is meaningful when it solves everyday problems.'
}

const experiences = [
  {
    icon: '⚡',
    title: 'Team Turbonites',
    role: 'EV engineering leadership',
    date: 'February - November 2025',
    desc: 'Led a 22-member cross-functional engineering team across Mechanical, Electrical, Electronics, and IT to design and develop an electric 4-wheeler prototype. Orchestrated project roadmaps, procurement logistics, milestone tracking, and secured 3rd Place at EFWDC\'25.'
  },
  {
    icon: '🚀',
    title: 'Team STARC',
    role: 'Avionics subsystem',
    date: '2024 - 2025',
    desc: 'Contributed to avionics subsystem thinking and multidisciplinary planning with a focus on dependable integration and documentation.'
  },
  {
    icon: '📊',
    title: 'Happieloop',
    role: 'Data analytics internship',
    date: '2025',
    desc: 'Worked on analytics-oriented problem solving and reporting workflows that translated messy inputs into clear, usable insights.'
  },
  {
    icon: '🧠',
    title: 'Founder & Developer — Panjaayathu (Wellness Startup)',
    date: 'October 2025 - Present',
    desc: 'Designing and developing a digital mental-health platform integrating therapeutic CBT frameworks. Building the end-to-end stack with a user-centric interface, database design, onboarding, and a HIPAA-conscious architecture.'
  },
  {
    icon: '🅿️',
    title: 'Co-Founder & CTO — ParkinToday (IoT-based Smart Parking Startup)',
    date: 'September 2024 - Present',
    desc: 'Engineered backend infrastructure to process live data streams for real-time parking management and architected a high-concurrency IoT ecosystem integrating sensor data with cloud-based analytics. Awarded 1st Place at the ECircle B-Pitch Competition.'
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning Intern — Edunet Foundation (Under AICTE)',
    date: 'June 2025 - July 2025',
    desc: 'Completed a structured internship in AI & Machine Learning and developed ML models including a regression-based salary predictor using Python, NumPy, Pandas, and Scikit-learn.'
  }
]

const projects = [
  {
    title: 'Electric 4-Wheeler Prototype',
    category: 'Engineering',
    tag: 'IoT',
    theme: 'from-[#a5d8ff] to-[#dbeafe]',
    headerStart: '#a5d8ff',
    headerEnd: '#dbeafe',
    tags: ['Team Leadership', 'Engineering', 'EV Design'],
    achievement: '3rd Place EFWDC\'25',
    link: 'https://drive.google.com/drive/folders/1SVLk6qsWlZ-nsQEsMhuZbYVaBtXikEPL?usp=sharing',
    slug: 'electric-4w-prototype',
    problem: 'Student-built EV efforts often stall when electrical, mechanical, and software decisions are not aligned.',
    solution: 'Led a 22-member team to coordinate the prototype architecture, procurement, and milestone execution.',
    techStack: ['Mechanical systems', 'Electrical integration', 'Electronics', 'Project planning'],
    impact: 'Secured 3rd place at EFWDC\'25 and demonstrated cross-functional leadership at scale.'
  },
  {
    title: 'EngineerFit',
    category: 'Web Development',
    tag: 'Edu-Tech',
    theme: 'from-[#ffe8cc] to-[#fff4db]',
    headerStart: '#ffe8cc',
    headerEnd: '#fff4db',
    tags: ['Full Stack', 'Health Tech', 'UX Design'],
    achievement: 'Top 10 best innovative ideas in AI Buildathon 26',
    link: 'https://ebv-engineerfit-seven.vercel.app/',
    slug: 'engineerfit',
    problem: 'Students in Tier-2/3 colleges often lack a clear, personalized way to connect strengths with career paths.',
    solution: 'Built a psychometrics-to-career clarity experience that turns reflective inputs into actionable guidance.',
    techStack: ['Next.js', 'React', 'TailwindCSS', 'Data-driven UX'],
    impact: 'Recognized among the top 10 best innovative ideas in AI Buildathon 26.'
  },
  {
    title: 'VICT Cipher',
    category: 'Cybersecurity',
    tag: 'Cybersecurity',
    theme: 'from-[#d1fae5] to-[#ecfccb]',
    headerStart: '#d1fae5',
    headerEnd: '#ecfccb',
    tags: ['Security', 'Encryption', 'Identity'],
    achievement: 'Concept build',
    link: null,
    slug: 'vict-cipher',
    problem: 'Identity cues are often either too weak or too easy to copy in digital systems.',
    solution: 'Explored emotional fingerprint encryption as a more human-centered security concept.',
    techStack: ['Cryptography concepts', 'Authentication design', 'Prototype UX'],
    impact: 'A memorable concept for security-focused storytelling and problem framing.'
  },
  {
    title: 'ParkinToday',
    category: 'IoT',
    tag: 'IoT',
    theme: 'from-[#d0f4de] to-[#ecfdf3]',
    headerStart: '#d0f4de',
    headerEnd: '#ecfdf3',
    tags: ['IoT', 'Web Dev', 'Infra Design'],
    achievement: '1st Place ECircle B-Pitch',
    link: 'https://drive.google.com/drive/folders/1VZtImJUuUCpftdFahDbpq6ZtNqSo3CA7?usp=sharing',
    slug: 'parkin-today',
    problem: 'Parking search time and congestion hurt commuter flow in dense city corridors.',
    solution: 'Designed a real-time smart parking system that combines sensor data with useful web controls.',
    techStack: ['IoT', 'Web dashboard', 'Cloud analytics', 'Infrastructure design'],
    impact: 'Won 1st place at ECircle B-Pitch and validated the concept for live urban use.'
  }
]

const achievements = [
  { place: '1st', competition: 'Envision\'23', details: 'IoT gesture wheelchair - won 10000' },
  { place: '1st', competition: 'ECircle B-Pitch', details: 'Real-time parking management solution' },
  { place: '2nd', competition: 'INDIA@2047', details: 'IoT glaucoma eye pressure device' },
  { place: '3rd', competition: 'EFWDC\'25', details: 'Electric vehicle - Chairman\'s Special Award' },
  { place: '4th', competition: 'EFWDC\'24', details: 'Electric 4-wheeler - won 10000' },
  { place: '4th', competition: 'ImpactX 2.0', details: 'Ride-hailing interaction device' },
  { place: '5th', competition: 'KSR Innovative Business Pitch', details: 'IoT smart parking for Indian Tier-1 cities' },
  { place: 'Top 10', competition: 'AI Buildathon 26', details: 'EngineerFit - best innovative ideas' },
  { place: '', competition: 'Hardware Hackathon 2.0', details: 'Storm-resilient Mars rover' },
  { place: '', competition: 'Ramnad Hackathon (STARTUPTN)', details: 'Karuvelam' },
  { place: '', competition: 'Smart India Hackathon', details: 'Jalodhyam' }
]

const certifications = [
  'Agile Business Analysis - Udemy',
  'Networks & Network Security - Coursera',
  'Foundations of Cybersecurity - Coursera',
  'Security Risk Management - Coursera',
  'C, MySQL, Java & Python Programming - Skillrack (Hands-on)',
  'AI Fundamentals - IBM SkillsBuild',
  'Ports & Protocols - Springboard'
]

const stats = [
  '500+ Problems Solved',
  '60+ LeetCode Problems',
  '500+ Day Duolingo Streak',
  '25+ Unstop Competitions',
  '6 Awards Won',
  '22 Team Members Led',
  '15 Projects Completed',
  '7+ Certifications'
]

const skillProgress = [
  { label: 'Python', value: 92, hint: 'Automation, analytics, and prototyping' },
  { label: 'Java', value: 84, hint: 'OOP, backend fundamentals, coursework' },
  { label: 'IoT', value: 90, hint: 'Arduino, ESP32, system integration' },
  { label: 'Cybersecurity', value: 76, hint: 'Encryption, security thinking, risk awareness' },
  { label: 'Full-Stack', value: 88, hint: 'Next.js, React, UI architecture' }
]

const skills = {
  programming: ['Python', 'Java', 'C', 'React', 'SQL', 'Next.js', 'Embedded C', 'Figma', 'Node.js', 'TailwindCSS'],
  technologies: ['IoT', 'Embedded Systems (Arduino, ESP32, Pi)', 'MATLAB', 'Networks', 'Web Development'],
  tools: ['Jira', 'Trello', 'MS Excel (Advanced)', 'Power BI', 'AutoCAD', 'NX CAD', 'Simulink'],
  coreCompetencies: ['Agile Project Management', 'Leadership', 'Hardware-Software Integration', 'Documentation']
}

const interests = ['Team Leadership', 'Innovation', 'IoT & Embedded', 'Business Development', 'Healthcare Tech', 'Data Analytics']

const communityImpact = [
  {
    title: 'Smart parking for Tier-1 cities',
    desc: 'Reduce search time, traffic noise, and parking friction through sensor-first design.'
  },
  {
    title: 'Career-fit dashboards for Tier-2/3 colleges',
    desc: 'Translate psychometrics and student inputs into practical next-step guidance.'
  }
]

const testimonials = [
  {
    quote: 'He brings structure to messy multidisciplinary problems and keeps teams moving.',
    source: 'Team lead feedback'
  },
  {
    quote: 'A builder who can explain the technical path without losing the human reason for it.',
    source: 'Peer reflection'
  }
]

const blogPosts = [
  {
    title: 'Tech for Local Problems',
    tamil: 'உள்ளூர் பிரச்சனைகளுக்கான தொழில்நுட்பம்',
    excerpt: 'How small systems can unlock real value in Indian neighborhoods and campuses.',
    tag: 'Community'
  },
  {
    title: 'Designing for South Indian Contexts',
    tamil: 'தென் இந்திய சூழலுக்கான வடிவமைப்பு',
    excerpt: 'Why local assumptions matter when building products for students, drivers, and families.',
    tag: 'Product Thinking'
  }
]

const profileLinks = [
  { label: 'Resume', href: personal.resume },
  { label: 'Skillrack', href: 'https://www.skillrack.com/faces/resume.xhtml?id=446603&key=f9045f93b0e369e843179049553d743fc9e36693' },
  { label: 'Duolingo', href: 'https://www.duolingo.com/profile/jos_zen?via=share_profile_link' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Zenith_Joshua/' },
  { label: 'Unstop', href: 'https://unstop.com/u/zenitjos7470' }
]

module.exports = {
  personal,
  heroLinks,
  experiences,
  projects,
  achievements,
  certifications,
  stats,
  skillProgress,
  skills,
  interests,
  about,
  communityImpact,
  testimonials,
  blogPosts,
  profileLinks
}
