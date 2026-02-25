// Mock data for Shivaji Munjula's 3D Portfolio

export const personalInfo = {
  name: "Shivaji Munjula",
  title: "Software Engineer – Omniverse | OpenUSD & Digital Twin Simulation",
  tagline: "Crafting Immersive Digital Experiences",
  location: "Chennai, India",
  email: "shivajimunjula@gmail.com",
  linkedin: "linkedin.com/in/shivaji-munjula-sde",
  github: "github.com/shivajimunjula-source",
  website: "https://shivaji-munjula-portfolio-xi43.vercel.app/"
};

export const about = {
  summary: "Omniverse & XR Developer with 3.5 years of experience working on USD-based workflows, digital twins, and interactive simulation features. Skilled in Omniverse Kit, USD variants/composition, MaterialX/MDL, Nucleus, and Python scripting for scene logic and UI behavior. Contributed to automotive and manufacturing projects involving customization workflows, paint shop process visualization, and data-driven system states. Experienced with 3D asset pipelines, real-time rendering, and developing applications across desktop and VR/AR environments.",
  passion: "Passionate about pushing the boundaries of real-time 3D simulation and creating interactive experiences that bridge the physical and digital worlds."
};

export const skills = {
  "Omniverse & USD": [
    { name: "Omniverse Kit", level: 90 },
    { name: "USD Layers/Variants", level: 85 },
    { name: "MaterialX/MDL", level: 80 },
    { name: "RTX Rendering", level: 85 },
    { name: "Isaac Sim", level: 80 },
    { name: "Nucleus", level: 80 }
  ],
  "Programming": [
    { name: "Python", level: 90 },
    { name: "C#", level: 85 },
    { name: "JavaScript", level: 70 }
  ],
  "XR & Simulation": [
    { name: "Unity", level: 90 },
    { name: "VR/AR Development", level: 90 },
    { name: "CloudXR", level: 80 },
    { name: "Physics Simulation", level: 85 }
  ],
  "3D Pipelines": [
    { name: "USD", level: 90 },
    { name: "GLTF/FBX", level: 80 },
    { name: "Scene Optimization", level: 85 }
  ],
  "Digital Twins": [
    { name: "IoT (MQTT/OPC UA)", level: 75 },
    { name: "Analytics Dashboards", level: 80 },
    { name: "Automotive", level: 85 }
  ],
  "Tools & Devices": [
    { name: "Docker", level: 70 },
    { name: "Git", level: 85 },
    { name: "Quest/Vive/HoloLens", level: 90 }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    role: "Nvidia Omniverse & XR Simulation Developer",
    location: "Chennai",
    duration: "July 2022 – Present",
    description: "Leading development of cutting-edge digital twin solutions and XR experiences",
    projects: [
      {
        name: "Automotive Digital Twin",
        description: "Developed full automotive customization workflow using USD variants for colors, wheels, interiors, and MaterialX/MDL updates. Built Python-driven logic inside Omniverse Kit for UI interactions, scene updates, and camera behavior.",
        technologies: ["USD", "Omniverse Kit", "Python", "MaterialX", "CloudXR"],
        highlights: [
          "Implemented test-drive simulation with physics and lighting",
          "Created fault-case simulations (battery, tire, fuse, brakes)",
          "Enabled real-time multi-user collaboration using Nucleus + CloudXR"
        ]
      },
      {
        name: "Paint Shop Digital Twin",
        description: "Created USD-based simulation of paint-shop sequence, including primer → spray-booth → robotic arm cycle. Built interactive controls for material type switch, primer levels, robot status.",
        technologies: ["USD", "Omniverse", "Python", "Analytics"],
        highlights: [
          "Designed analytics dashboards for unit flow and paint usage",
          "Performed scene optimization using USD layering and LOD strategies",
          "Interactive controls for manufacturing workflow automation"
        ]
      },
      {
        name: "XR Simulation Projects",
        description: "Contributed to VR Surgical, Forklift/Excavator (6-DoF), and Marathon simulation experiences. Integrated haptic devices and Leap Motion interactions.",
        technologies: ["Unity", "VR", "Haptics", "Leap Motion"],
        highlights: [
          "Developed multiple VR training simulations",
          "Integrated advanced haptic feedback systems",
          "Participated in stakeholder demos and gathered feedback"
        ]
      }
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "SASTRA University",
    location: "Tamil Nadu",
    duration: "2023-2025",
    cgpa: "8.80 CGPA"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "TSR & TBK Degree College",
    location: "Andhra Pradesh",
    duration: "2019-2022",
    cgpa: "8.60 CGPA"
  }
];

export const achievements = [
  {
    title: "Mentorship Excellence",
    description: "Mentored 100+ engineers in Unity, Omniverse & GenAI",
    icon: "👥"
  },
  {
    title: "4× TCS On-the-Spot Awards",
    description: "Recognition for exceptional performance and innovation",
    icon: "🏆"
  },
  {
    title: "Innovation Pride Award",
    description: "Awarded for innovative solutions in digital twin development",
    icon: "💡"
  },
  {
    title: "TCS Innovista Finalist",
    description: "Finalist in TCS's premier innovation competition",
    icon: "🎯"
  },
  {
    title: "TATA Innovista Pre-Finalist",
    description: "Selected for TATA Group's innovation showcase",
    icon: "⭐"
  }
];

export const certifications = [
  {
    name: "Unity Certified User: VR Developer",
    issuer: "Unity Technologies",
    year: "2023"
  },
  {
    name: "NVIDIA Omniverse OpenUSD Learning Certification",
    issuer: "NVIDIA",
    year: "2023"
  },
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud",
    year: "2024"
  }
];

export const projects = [
  {
    id: 1,
    title: "Automotive Digital Twin Platform",
    category: "Digital Twin",
    description: "Real-time automotive customization and simulation platform with multi-user collaboration",
    technologies: ["USD", "Omniverse Kit", "Python", "MaterialX", "CloudXR"],
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80",
    features: [
      "Real-time USD variant switching",
      "Physics-based test drive simulation",
      "Fault scenario visualization",
      "Multi-user collaboration"
    ]
  },
  {
    id: 2,
    title: "Paint Shop Manufacturing Twin",
    category: "Manufacturing",
    description: "Complete manufacturing workflow visualization with analytics and process optimization",
    technologies: ["Omniverse", "USD", "Python", "IoT"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    features: [
      "Robotic arm cycle simulation",
      "Material flow tracking",
      "Analytics dashboards",
      "Process optimization"
    ]
  },
  {
    id: 3,
    title: "VR Training Simulations",
    category: "XR Experience",
    description: "Immersive VR training experiences for surgical, equipment operation, and fitness scenarios",
    technologies: ["Unity", "VR", "Haptics", "Leap Motion","c#"],
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
    features: [
      "6-DoF equipment simulation",
      "Haptic feedback integration",
      "Hand tracking with Leap Motion",
      "Multi-device support"
    ]
  }
];
