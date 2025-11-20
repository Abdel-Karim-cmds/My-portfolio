
import { Content } from './types';
import cyberops from './images/cyberops-associate.png';
import networkDefense from './images/network-defense.png';
import cyberThreatManagement from './images/cyber-threat-management.png';
import ethicalHacker from './images/ethical-hacker.png';
import introToCybersecurity from './images/introduction-to-cybersecurity.png';

const PERSONAL_INFO_BASE = {
  name: "Baschirou Abdel Karim",
  email: "abdelkarimbaschirou@gmail.com",
  phone: "+254 743 796 606",
  linkedin: "https://www.linkedin.com/in/baschirou-abdel-karim-7092b61a1/",
  github: "https://github.com/Abdel-Karim-cmds",
  portfolio: "#",
  resume: "https://flowcv.com/resume/namf49q7s5",
};

const TESTIMONIALS_BASE = [
  {
    name: "Mr. Bonfas Salano",
    position: "Dean of Students",
    organization: "United States International University - Africa",
    quote: "During his time at USIU-Africa, He stood out for his leadership, creativity, and professionalism. He contributed as a layout designer for the 2024 & 2025 Yearbooks and served as an ambassador at university events. As chair of the 2025 Culture Week Committee, he led a successful week of activities with maturity and care. His problem-solving, interpersonal, and critical thinking skills make him a valuable team member and independent contributor."
  },
  {
    name: "Mr. David Oriedi",
    position: "Lecturer of Applied Computer Technology",
    organization: "United States International University - Africa",
    quote: "He is a passionate and self-driven student of Applied Computer Technology. He consistently demonstrated strong analytical skills, technical comprehension, and a commitment to personal growth. His collaborative spirit and respect for diverse perspectives make him an asset in any academic or professional setting. I strongly recommend him for future opportunities."
  },
  {
    name: "Mr. Philippe Ouedraogo",
    position: "Webmaster",
    organization: "African Union - InterAfrican Bureau for Animal Resources",
    quote: "He was a hardworking and dedicated Webmaster intern at AU-IBAR. He developed a Visa Request Management Information System that streamlined internal operations and collaborated on a student attachment system for an international school. His technical initiative, teamwork, and knowledge-sharing made him a pleasure to work with. I recommend him without hesitation."
  }
];

const TESTIMONIALS_FR_BASE = [
  {
    name: "M. Bonfas Salano",
    position: "Doyen des Étudiants",
    organization: "United States International University - Africa",
    quote: "Durant son passage à l'USIU-Africa, il s'est distingué par son leadership, sa créativité et son professionnalisme. Il a contribué à la conception graphique des annuaires 2024 et 2025 et a été ambassadeur lors d'événements universitaires. En tant que président du comité de la Semaine culturelle 2025, il a mené avec maturité et attention une semaine d'activités couronnée de succès. Ses compétences en résolution de problèmes, ses aptitudes relationnelles et son esprit critique font de lui un membre d'équipe précieux et un collaborateur autonome efficace."
  },
  {
    name: "M. David Oriedi",
    position: "Professeur en Technologie Informatique Appliquée",
    organization: "United States International University - Africa",
    quote: "Étudiant passionné et autonome en informatique appliquée, il a toujours fait preuve d'excellentes capacités d'analyse, d'une grande compréhension technique et d'un engagement constant envers son développement personnel. Son esprit de collaboration et son respect des points de vue divers font de lui un atout précieux dans tout contexte académique ou professionnel. Je le recommande vivement pour ses futures opportunités."
  },
  {
    name: "M. Philippe Ouedraogo",
    position: "Webmaster",
    organization: "Union Africaine - Bureau Interafricain des Ressources Animales",
    quote: "Lors de son stage à l'UA-BIRA, Baschirou a joué un rôle crucial dans le système de gestion des demandes de visa. Son dévouement, son attention aux détails et sa capacité à apprendre rapidement de nouvelles technologies ont fait de lui un atout inestimable pour notre équipe technique."
  }
];

const SERVICES_EN = [
  {
    title: "Ethical Hacking & Penetration Testing",
    description: "Proactive vulnerability assessment to identify and patch security loopholes before they can be exploited. Expertise in securing networks and applications against evolving threats.",
    icon: "ShieldAlert"
  },
  {
    title: "Secure Full Stack Development",
    description: "Building scalable, high-performance web and mobile applications using modern stacks (React, Node.js, Express) with a security-first architecture to prevent common vulnerabilities like SQLi and XSS.",
    icon: "Code"
  },
  {
    title: "Cyber Threat Management",
    description: "Monitoring and analyzing cyber threats to implement effective defense strategies. Certified in CyberOps, capable of detecting, investigating, and responding to cybersecurity incidents.",
    icon: "Lock"
  },
  {
    title: "API Development & Integration",
    description: "Designing and implementing secure RESTful APIs, ensuring data encryption, authentication, and safe third-party integrations for seamless system communication.",
    icon: "Server"
  }
];

const SERVICES_FR = [
  {
    title: "Piratage Éthique & Tests d'Intrusion",
    description: "Évaluation proactive des vulnérabilités pour identifier et corriger les failles de sécurité avant qu'elles ne soient exploitées. Expertise dans la sécurisation des réseaux et des applications.",
    icon: "ShieldAlert"
  },
  {
    title: "Développement Full Stack Sécurisé",
    description: "Création d'applications web et mobiles évolutives et performantes utilisant des piles modernes (React, Node.js) avec une architecture axée sur la sécurité pour prévenir les vulnérabilités.",
    icon: "Code"
  },
  {
    title: "Gestion des Cybermenaces",
    description: "Surveillance et analyse des cybermenaces pour mettre en œuvre des stratégies de défense efficaces. Certifié en CyberOps, capable de détecter, enquêter et répondre aux incidents.",
    icon: "Lock"
  },
  {
    title: "Développement & Intégration d'API",
    description: "Conception et mise en œuvre d'API RESTful sécurisées, assurant le chiffrement des données, l'authentification et des intégrations tierces sûres.",
    icon: "Server"
  }
];

export const TRANSLATIONS: { en: Content; fr: Content } = {
  en: {
    personalInfo: {
      ...PERSONAL_INFO_BASE,
      title: "Cybersecurity Specialist & Full Stack Developer",
      profile: "My name is Baschirou Abdel Karim, and I am a dedicated Cybersecurity specialist and Full Stack Developer based in Nairobi, Kenya. Currently in the final stages of my Master's in Information Systems and Technology at USIU-Africa, I am driven by a dual passion: building innovative software solutions and ensuring they are inherently secure. Beyond the technical realm, I am a proactive leader and a strong believer in the power of collaboration, demonstrated by my role as Chairperson of Culture Week. I thrive in dynamic environments where I can apply my problem-solving skills to create safer, more efficient digital experiences."
    },
    education: [
      {
        degree: "Master of Science in Information System Technology",
        institution: "United States International University - Africa",
        location: "Nairobi, Kenya",
        dates: "01/2024 – Present"
      },
      {
        degree: "Bachelor of Science in Applied Computer Technology",
        institution: "United States International University - Africa",
        location: "Nairobi, Kenya",
        dates: "01/2020 – 08/2023"
      }
    ],
    experience: [
      {
        role: "Intern",
        company: "GirlsAndBoyInTech",
        location: "United Kingdom (Remote)",
        dates: "12/2023 – 02/2024",
        description: "Fully remote internship focusing on technology solutions."
      },
      {
        role: "Intern",
        company: "African Union Inter-African Bureau of Animal Resources",
        location: "Nairobi, Kenya",
        dates: "06/2023 – 09/2023",
        description: "Contributed to system development and handled data processing tasks."
      }
    ],
    skillsTech: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Express JS", level: 4 },
      { name: "Node JS", level: 4 },
      { name: "Backend Dev", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "Frontend Dev", level: 4 },
      { name: "React JS", level: 4 },
      { name: "Git / GitHub", level: 4 },
      { name: "Java", level: 3 },
      { name: "Python", level: 3 },
      { name: "C#", level: 2 },
      { name: "AWS", level: 3 },
      { name: "Automated Testing", level: 4 },
      { name: "Vulnerability Assessment", level: 2 },
      { name: "Penetration Testing", level: 3 },
      { name: "Threat Management", level: 2 },
      { name: "Web App Security", level: 3 },
      { name: "Threat Detection", level: 2 }
    ],
    skillsSoft: [
      "Communication", "Teamwork", "Time Management", "Leadership", "Fast Learner", "Positive Attitude"
    ],
    languages: ["English", "French"],
    projects: [
      {
        title: "Car Service System",
        description: "An application developed using Node.js and Express that facilitates service booking, such as maintenance, at designated locations, while integrating the Google Maps API.",
        dates: "02/2024 – 03/2024",
        techStack: ["Node.js", "Express", "Google Maps API"]
      },
      {
        title: "Art Gallery",
        description: "Web application which allows art enthusiasts to buy and sell art pieces through an interactive app.",
        dates: "01/2024 – 04/2024",
        techStack: ["Web","MariaDB"]
      },
      {
        title: "Chatbot Web Application",
        description: "Automated chat system which analyzes the user's input. The data is analyzed through an AWS service to get response. The data was encrypted to prevent third parties from accessing it.",
        dates: "12/2023 – 02/2024",
        techStack: ["NodeJS", "Express JS", "AWS"]
      },
      {
        title: "Job Portal",
        description: "Developed a Web Application that allows organizations to post jobs as well as helps people easily find job opportunities.",
        dates: "05/2023 – 11/2023",
        techStack: ["ReactJS", "Express JS", "NodeJS"]
      },
      {
        title: "Visa Request Management System",
        description: "Designed for the AU-IBAR to help employees handle visa requests. Built using NodeJS, ExpressJS, and MariaDB.",
        dates: "06/2023 – 09/2023",
        techStack: ["NodeJS", "ExpressJS", "MariaDB"]
      },
      {
        title: "Online Charity Management System",
        description: "Platform for managing charity operations efficiently.",
        dates: "01/2023 – 04/2023",
        techStack: ["Express JS", "NodeJS", "MySQL"]
      },
      {
        title: "Task Management System",
        description: "A comprehensive web application for managing tasks and workflows.",
        dates: "11/2022 – 12/2022",
        techStack: ["ReactJS", "Express JS", "NodeJS"]
      },
      {
        title: "Learning Management System",
        description: "Educational platform for managing course content and student progress.",
        dates: "09/2022 – 11/2022",
        techStack: ["NodeJS", "ExpressJS"]
      },
      {
        title: "Restaurant Rating Web Application",
        description: "Food rating application built with Firebase integration.",
        dates: "09/2022 – 12/2022",
        techStack: ["NodeJS", "Express JS", "Firebase"]
      },
      {
        title: "Encrypted Chat System",
        description: "Allows two users to communicate with one another. The system encrypts the connection and the messages between the two parties.",
        dates: "07/2022 – 08/2022",
        techStack: ["Java","Encryption"]
      },
      {
        title: "Volunteering System",
        description: "A platform that allows organizations to post volunteering opportunities as well as events for people to sign up.",
        dates: "02/2025 – 04/2025",
        techStack: ["Web", "MySQL","Node", "Express"]
      }
    ],
    certificates: [
      {
        name: "Cisco Ethical Hacker",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/23b21e24-59df-4654-a805-36662962cd77/linked_in_profile", 
        imageUrl: ethicalHacker
      },
      {
        name: "Cisco CyberOps Associate",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/724fc500-4e2e-4f14-a19d-4b0ed98ad00c",
        imageUrl: cyberops
      },
      {
        name: "Cisco Cyber Threat Management",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/907c5519-3308-4205-86c9-03e5449098a8/public_url",
        imageUrl: cyberThreatManagement
      },
      {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/ce167140-6b43-4914-9031-6e68729ba53e/public_url",
        imageUrl: introToCybersecurity
      },
      {
        name: "Cisco Network Defense",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/22cfeccc-3a57-4334-853d-f530ce733df5/public_url",
        imageUrl: networkDefense
      }
    ],
    volunteering: [
      {
        role: "Chairperson of Culture Week",
        organization: "United States International University - Africa",
        dates: "11/2024 – 04/2025",
        description: "Head of the committee, making executive decisions and ensuring the overall smooth flow of the preparation and execution of the event."
      },
      {
        role: "Member of Student Ambassador Committee",
        organization: "United States International University - Africa",
        dates: "05/2022 – 09/2025",
        description: "Coordinated student volunteers for campus events and ensured smooth event execution."
      },
      {
        role: "Layout Designer, Yearbook Team",
        organization: "United States International University - Africa",
        dates: "05/2024 – 09/2025",
        description: "In charge of creating the design of the book."
      }
    ],
    references: [
      {
        name: "Dr. Patrick Wamuyu",
        title: "Associate Dean Graduate School",
        institution: "United States International University - Africa",
        contact: "pwamuyu@usiu.ac.ke, +254 722 309 076"
      },
      {
        name: "Mr. David Oriedi",
        title: "Lecturer of Applied Computer Technology",
        institution: "United States International University - Africa",
        contact: "doriedi@usiu.ac.ke, +254 723 519 740"
      },
      {
        name: "Mr. Philippe Ouedraogo",
        title: "Webmaster",
        institution: "African Union - InterAfrican Bureau for Animal Resources",
        contact: "philippe.ouedraogo@au-ibar.org, +254 729 819 187"
      }
    ],
    testimonials: TESTIMONIALS_BASE,
    services: SERVICES_EN,
    interests: ["Sport", "Travel", "Programming", "Games"],
    ui: {
      nav: {
        about: "About",
        expertise: "Expertise",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        certificates: "Certificates",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      hero: {
        portfolio: "Portfolio",
        github: "GitHub",
        linkedin: "LinkedIn",
        resumeBtn: "Resume",
        contactBtn: "Contact Me"
      },
      about: {
        title: "About Me",
        interestsTitle: "Interests"
      },
      expertise: {
        title: "My Expertise",
        subtitle: "Bridging the gap between innovative development and robust security."
      },
      skills: {
        technicalTitle: "Technical",
        softTitle: "Soft",
        techSubtitle: "Skills",
        softSubtitle: "Skills",
        languagesTitle: "Languages"
      },
      projects: {
        title: "Projects",
        featured: "Featured"
      },
      certificates: {
        title: "Certifications",
        subtitle: "Verified credentials from Credly and Cisco.",
        verifyBtn: "Verify Credential"
      },
      testimonials: {
        title: "Testimonials",
        subtitle: "What people say about working with me.",
        readMore: "Read More",
        close: "Close"
      },
      experience: {
        workTitle: "Work Experience",
        eduTitle: "Education",
        volTitle: "Volunteering",
        volSubtitle: "Community Leadership"
      },
      contact: {
        titleGet: "Get In",
        titleTouch: "Touch",
        subtitle: "Currently open to new opportunities in Cybersecurity and Full Stack Development.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        locationValue: "Nairobi, Kenya",
        referencesTitle: "References",
        formTitle: "Send a Message",
        nameLabel: "Name",
        namePlaceholder: "Your Name",
        msgLabel: "Message",
        messagePlaceholder: "How can I help you?",
        sendBtn: "Send Message",
        sendingBtn: "Sending...",
        sentBtn: "Message Sent"
      },
      footer: {
        rights: "All rights reserved.",
        designed: "Designed with React & Tailwind CSS."
      }
    }
  },
  fr: {
    personalInfo: {
      ...PERSONAL_INFO_BASE,
      title: "Spécialiste en Cybersécurité & Développeur Full Stack",
      profile: "Je m'appelle Baschirou Abdel Karim et je suis un spécialiste dévoué en cybersécurité et un développeur Full Stack basé à Nairobi, au Kenya. Actuellement en phase finale de mon Master en Systèmes d'Information et Technologie à l'USIU-Africa, je suis animé par une double passion : créer des solutions logicielles innovantes et garantir leur sécurité intrinsèque. Au-delà du domaine technique, je suis un leader proactif et un fervent croyant en la force de la collaboration, comme en témoigne mon rôle de Président de la Semaine Culturelle. J'évolue dans des environnements dynamiques où je peux appliquer mes compétences en résolution de problèmes pour créer des expériences numériques plus sûres et plus efficaces."
    },
    education: [
      {
        degree: "Master en Sciences des Systèmes d'Information et Technologie",
        institution: "United States International University - Africa",
        location: "Nairobi, Kenya",
        dates: "01/2024 – Présent"
      },
      {
        degree: "Licence en Technologie Informatique Appliquée",
        institution: "United States International University - Africa",
        location: "Nairobi, Kenya",
        dates: "01/2020 – 08/2023"
      }
    ],
    experience: [
      {
        role: "Stagiaire",
        company: "GirlsAndBoyInTech",
        location: "Royaume-Uni (À distance)",
        dates: "12/2023 – 02/2024",
        description: "Stage entièrement à distance axé sur les solutions technologiques."
      },
      {
        role: "Stagiaire",
        company: "Bureau Interafricain des Ressources Animales de l'Union Africaine",
        location: "Nairobi, Kenya",
        dates: "06/2023 – 09/2023",
        description: "Contribution au développement du système et gestion du traitement des données."
      }
    ],
    skillsTech: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Express JS", level: 4 },
      { name: "Node JS", level: 4 },
      { name: "Développement Backend", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "Développement Frontend", level: 4 },
      { name: "React JS", level: 4 },
      { name: "Git / GitHub", level: 4 },
      { name: "Java", level: 3 },
      { name: "Python", level: 3 },
      { name: "C#", level: 2 },
      { name: "AWS", level: 3 },
      { name: "Tests Automatisés", level: 4 },
      { name: "Évaluation de Vulnérabilité", level: 2 },
      { name: "Tests d'Intrusion", level: 3 },
      { name: "Gestion des Menaces", level: 2 },
      { name: "Sécurité des Applications Web", level: 3 },
      { name: "Détection des Menaces", level: 2 }
    ],
    skillsSoft: [
      "Communication", "Travail d'équipe", "Gestion du temps", "Leadership", "Apprentissage rapide", "Attitude positive"
    ],
    languages: ["Anglais", "Français"],
    projects: [
      {
        title: "Système de Service Automobile",
        description: "Une application développée avec Node.js et Express qui facilite la réservation de services, tels que l'entretien, dans des lieux désignés, tout en intégrant l'API Google Maps.",
        dates: "02/2024 – 03/2024",
        techStack: ["Node.js", "Express", "Google Maps API"]
      },
      {
        title: "Galerie d'Art",
        description: "Application web permettant aux amateurs d'art d'acheter et de vendre des œuvres d'art via une application interactive.",
        dates: "01/2024 – 04/2024",
        techStack: ["Web"]
      },
      {
        title: "Application Web Chatbot",
        description: "Système de chat automatisé analysant l'entrée de l'utilisateur. Les données sont analysées via un service AWS pour obtenir une réponse. Les données ont été chiffrées pour empêcher l'accès aux tiers.",
        dates: "12/2023 – 02/2024",
        techStack: ["NodeJS", "Express JS", "AWS"]
      },
      {
        title: "Portail d'Emploi",
        description: "Développement d'une application Web permettant aux organisations de publier des offres d'emploi et aidant les gens à trouver facilement des opportunités d'emploi.",
        dates: "05/2023 – 11/2023",
        techStack: ["ReactJS", "Express JS", "NodeJS"]
      },
      {
        title: "Système de Gestion de Demande de Visa",
        description: "Conçu pour l'UA-BIRA pour aider les employés à gérer leurs demandes de visa. Construit avec NodeJS, ExpressJS et MariaDB.",
        dates: "06/2023 – 09/2023",
        techStack: ["NodeJS", "ExpressJS", "MariaDB"]
      },
      {
        title: "Système de Gestion de Charité en Ligne",
        description: "Plateforme pour gérer efficacement les opérations caritatives.",
        dates: "01/2023 – 04/2023",
        techStack: ["Express JS", "NodeJS"]
      },
      {
        title: "Système de Gestion de Tâches",
        description: "Une application web complète pour la gestion des tâches et des flux de travail.",
        dates: "11/2022 – 12/2022",
        techStack: ["ReactJS", "Express JS", "NodeJS"]
      },
      {
        title: "Système de Gestion de l'Apprentissage",
        description: "Plateforme éducative pour la gestion du contenu des cours et des progrès des étudiants.",
        dates: "09/2022 – 11/2022",
        techStack: ["NodeJS", "ExpressJS"]
      },
      {
        title: "Application Web de Notation de Restaurants",
        description: "Application de notation alimentaire construite avec l'intégration Firebase.",
        dates: "09/2022 – 12/2022",
        techStack: ["NodeJS", "Express JS", "Firebase"]
      },
      {
        title: "Système de Chat Chiffré",
        description: "Permet à deux utilisateurs de communiquer entre eux. Le système chiffre la connexion et les messages entre les deux parties.",
        dates: "07/2022 – 08/2022",
        techStack: ["Java"]
      },
      {
        title: "Système de Bénévolat",
        description: "Une plateforme permettant aux organisations de publier des opportunités de bénévolat ainsi que des événements pour que les gens s'inscrivent.",
        dates: "02/2025 – 04/2025",
        techStack: ["Web"]
      }
    ],
    certificates: [
      {
        name: "Cisco Ethical Hacker",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/23b21e24-59df-4654-a805-36662962cd77/linked_in_profile", 
        imageUrl: ethicalHacker
      },
      {
        name: "Cisco CyberOps Associate",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/724fc500-4e2e-4f14-a19d-4b0ed98ad00c",
        imageUrl: cyberops
      },
      {
        name: "Cisco Cyber Threat Management",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/907c5519-3308-4205-86c9-03e5449098a8/public_url",
        imageUrl: cyberThreatManagement
      },
      {
        name: "Introduction à la Cybersécurité",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/ce167140-6b43-4914-9031-6e68729ba53e/public_url",
        imageUrl: introToCybersecurity
      },
      {
        name: "Défense Réseau Cisco",
        issuer: "Cisco",
        url: "https://www.credly.com/badges/22cfeccc-3a57-4334-853d-f530ce733df5/public_url",
        imageUrl: networkDefense
      }
    ],
    volunteering: [
      {
        role: "Président de la Semaine Culturelle",
        organization: "United States International University - Africa",
        dates: "11/2024 – 04/2025",
        description: "Chef du comité, prenant des décisions exécutives et assurant le bon déroulement global de la préparation et de l'exécution de l'événement."
      },
      {
        role: "Membre du Comité des Étudiants Ambassadeurs",
        organization: "United States International University - Africa",
        dates: "05/2022 – 09/2025",
        description: "Coordination des étudiants bénévoles pour les événements du campus et assurance du bon déroulement des événements."
      },
      {
        role: "Maquettiste, Équipe de l'Annuaire",
        organization: "United States International University - Africa",
        dates: "05/2024 – 09/2025",
        description: "Responsable de la création du design du livre."
      }
    ],
    references: [
      {
        name: "Dr. Patrick Wamuyu",
        title: "Doyen Associé École Supérieure",
        institution: "United States International University - Africa",
        contact: "pwamuyu@usiu.ac.ke, +254 722 309 076"
      },
      {
        name: "M. David Oriedi",
        title: "Maître de Conférences en Technologie Informatique Appliquée",
        institution: "United States International University - Africa",
        contact: "doriedi@usiu.ac.ke, +254 723 519 740"
      },
      {
        name: "M. Philippe Ouedraogo",
        title: "Webmaster",
        institution: "Union Africaine - Bureau Interafricain des Ressources Animales",
        contact: "philippe.ouedraogo@au-ibar.org, +254 729 819 187"
      }
    ],
    testimonials: TESTIMONIALS_FR_BASE,
    services: SERVICES_FR,
    interests: ["Sport", "Voyage", "Programmation", "Jeux Vidéo"],
    ui: {
      nav: {
        about: "À Propos",
        expertise: "Expertise",
        skills: "Compétences",
        projects: "Projets",
        experience: "Expérience",
        certificates: "Certificats",
        testimonials: "Témoignages",
        contact: "Contact"
      },
      hero: {
        portfolio: "Portfolio",
        github: "GitHub",
        linkedin: "LinkedIn",
        resumeBtn: "CV",
        contactBtn: "Contactez-Moi"
      },
      about: {
        title: "À Propos de Moi",
        interestsTitle: "Intérêts"
      },
      expertise: {
        title: "Mon Expertise",
        subtitle: "Combler le fossé entre le développement innovant et la sécurité robuste."
      },
      skills: {
        technicalTitle: "Compétences",
        softTitle: "Compétences",
        techSubtitle: "Techniques",
        softSubtitle: "Douces",
        languagesTitle: "Langues"
      },
      projects: {
        title: "Projets",
        featured: "En Vedette"
      },
      certificates: {
        title: "Certifications",
        subtitle: "Identifiants vérifiés de Credly et Cisco.",
        verifyBtn: "Vérifier l'Identifiant"
      },
      testimonials: {
        title: "Témoignages",
        subtitle: "Ce que les gens disent de travailler avec moi.",
        readMore: "Lire Plus",
        close: "Fermer"
      },
      experience: {
        workTitle: "Expérience Professionnelle",
        eduTitle: "Éducation",
        volTitle: "Bénévolat",
        volSubtitle: "Leadership Communautaire"
      },
      contact: {
        titleGet: "Contactez",
        titleTouch: "Moi",
        subtitle: "Actuellement ouvert à de nouvelles opportunités en Cybersécurité et Développement Full Stack.",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        locationLabel: "Lieu",
        locationValue: "Nairobi, Kenya",
        referencesTitle: "Références",
        formTitle: "Envoyer un Message",
        nameLabel: "Nom",
        namePlaceholder: "Votre Nom",
        msgLabel: "Message",
        messagePlaceholder: "Comment puis-je vous aider ?",
        sendBtn: "Envoyer le Message",
        sendingBtn: "Envoi...",
        sentBtn: "Message Envoyé"
      },
      footer: {
        rights: "Tous droits réservés.",
        designed: "Conçu avec React & Tailwind CSS."
      }
    }
  }
};
