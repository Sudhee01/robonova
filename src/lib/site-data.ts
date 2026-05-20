import logo from "@/assets/robonova-logo.png";
import heroRobot from "@/assets/hero-robot.jpg";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.png";
import arduinoWorkshop from "@/assets/arduino-workshop.jpeg";

export const assets = { logo, heroRobot, g1, g2, p1, p2, p3, p4 };

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/history", label: "History" },
  { to: "/mentors", label: "Mentors" },
  { to: "/leaders", label: "Leaders" },
  { to: "/members", label: "Members" },
  { to: "/projects", label: "Projects" },
  { to: "/products", label: "Products" },
  { to: "/events", label: "Events" }, 
  { to: "/contact", label: "Contact" },
] as const;

export const stats = [
  { label: "Active Members", value: 70, suffix: "+" },
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Competitions", value: 25, suffix: "+" },
  { label: "Achievements", value: 18, suffix: "" },
];

export interface Project {
  title: string;
  image: string;
  tech: string[];
  desc: string;
  details?: string[];
  applications?: string[];
  teamSize?: number;
  duration?: string;
}
export interface Project {
  title: string;
  image: string;
  tech: string[];
  desc: string;
  details?: string[];       // Technical details bullet points
  applications?: string[];  // Applications bullet points
  teamSize?: number;
  duration?: string;
}
 
export const projects: Project[] = [
  {
    title: "Humanoid Robot",
    image: p1,
    tech: ["ROS2", "3D Printing", "Inverse Kinematics", "RGB-D Camera", "AI Integration", "Mechatronics"],
    desc: "A human-like mobile robot with vision + depth sensing, locomotion, manipulation, and autonomy using kinematics/inverse kinematics, mechanically fabricated components, and ROS2 for simulation and control.",
    details: [
      "3D-designed and 3D-printed structure for lightweight modular fabrication",
      "Kinematics & Inverse Kinematics for motion control of limbs and joints",
      "Vision and Depth Sensing using an RGB-D camera for environment understanding",
      "ROS2-based Simulation and Control Framework for real-world testing and autonomous behavior",
      "On-board AI integration for object detection, decision-making, and task execution",
    ],
    applications: [
      "Can assist in routine campus activities like lab deliveries, attendance tracking, or guiding visitors",
      "Serves as a learning and testing platform for students working on AI and mechatronics systems",
      "Useful for industrial training and demonstrations, bridging theoretical knowledge with automation practices",
    ],
    teamSize: 10,
    duration: "6–7 months",
  },
  {
    title: "General-Purpose Automated Harvesting Machine",
    image: p2,
    tech: ["YOLO", "RGB-D Camera", "LiDAR", "GPS", "Linear Actuators", "Robotic Arm"],
    desc: "A multi-crop robotic harvesting system with AI-based crop detection, scissor-lift mechanism and modular end effectors for adaptable harvesting across varied environments.",
    details: [
      "Mobile chassis with suspension for uneven terrains, suitable for Indian farming environments",
      "Height-adjustable platform powered by linear actuators using a scissor lift mechanism",
      "Interchangeable gripper/cutter tools for various crop types",
      "RGB-D camera + YOLO-based detection for ripe crop identification",
      "Navigation & Control: GPS + LiDAR for obstacle avoidance and autonomous movement",
      "User Interface: wireless control panel (tablet/PC) with live feed, status display, and manual override",
    ],
    applications: [
      "Useful for agricultural robotics research, student projects, and AI testing",
      "Can demonstrate real-world automation principles within campus projects",
      "Potential for industry collaboration on cost-effective semi-autonomous farm systems",
    ],
    teamSize: 6,
    duration: "3–4 months",
  },
  {
    title: "Hybrid Lathe Automation System",
    image: p3,
    tech: ["Arduino", "Raspberry Pi", "Servo Motors", "G-Code", "Encoders", "Touchscreen UI"],
    desc: "An intelligent add-on system that converts traditional manual lathe machines into semi-automated hybrid systems for enhanced precision and productivity.",
    details: [
      "Stepper/servo motor integration for tool post and carriage motion",
      "Arduino/Raspberry Pi-based system with custom G-code interpreter",
      "Encoders, proximity sensors, and vibration/temperature monitoring",
      "Touchscreen panel or PC dashboard for parameter input and control",
      "Limit switches, emergency stop, and self-homing functions",
    ],
    applications: [
      "Provides students with hands-on experience with automation, CNC principles, and smart manufacturing",
      "Offers cost-effective automation for small and medium machining industries",
      "Enables repetitive and precise machining operations, forming a base for large-scale automated production",
    ],
    teamSize: 6,
    duration: "6–7 months",
  },
  {
    title: "Arecanut Pesticide Spraying Robot",
    image: p4,
    tech: ["Co-bot", "Computer Vision", "AI Detection", "Microcontroller", "Pump System", "Mobile Platform"],
    desc: "A mobile robotic system that autonomously detects and sprays pesticides on arecanut bunches using vision-based detection and precision targeting.",
    details: [
      "Spraying mechanism with pump-based pesticide delivery, controlled by microcontroller/microprocessor",
      "Custom Co-bot designed and built by students; handles detection and spraying",
      "Mobile base & platform that moves smoothly and safely around arecanut trees",
      "Camera or sensor system with AI/image processing to locate ripe bunches",
    ],
    applications: [
      "Reduces labor and enables targeted pesticide spraying for arecanut plantations",
      "Potential for industry collaboration on cost-effective semi-autonomous farm systems",
    ],
    teamSize: 5,
    duration: "3–4 months",
  },
];

export const mentors = [
  { name: "Dr. Adithya Hegde", role: "Faculty Advisor", dept: "Dept. of RI", desc: "4 years in mechanical testing and robotics research.", image: "/team/dr.adithya.png" },
  { name: "Prof. Suraj Bhat", role: "Co-Coordinator", dept: "Dept. of MT", desc: "Guides Product design and rapid prototyping projects.", image: "/team/dr.suraj.jpg" },
];

export const leaders = [
  { name: "Pratheek A G", role: "President", year: "Final Year, MT", image: "/team/pratheek.jpg" },
  { name: "Amshul R", role: "Secretary", year: "Final Year, MT", image: "/team/amshul.jpg" },
  { name: "Krishna Prasad ", role: "Technical Head", year: "Final Year, MT", image: "/team/krishna.jpg" },
  { name: "Zuhair", role: "Technical Head", year: "Final Year, MT", image: "/team/zuhair.jpg" },
  { name: "Mohan Raj O", role: "Project Head", year: "Final Year, MT", image: "/team/mohan.jpg" },
  { name: "Sankeerthan", role: "Event Coordinator", year: "Third Year, MT", image: "/team/sankeerthan.jpg" },
  { name: "Manjith M Hegde", role: "Treasurer", year: "Third Year, MT", image: "/team/manjith.jpg" },
  { name: "Sukisha", role: "Design & Fabrication Lead", year: "Third Year, MT", image: "/team/sukisha.jpg" },
  { name: "Nidhi Bangera", role: "Electronics & Control Lead", year: "Third Year, MT", image: "/team/nidhi.jpg" },
  { name: "Shravan Kumar", role: "Programming & AI Lead", year: "Third Year, MT", image: "/team/shravan.jpg" },
  { name: "Suraj S Shetty", role: "Media & Publicity Lead", year: "Third Year, MT", image: "/team/suraj.jpg" },
];

export const members = [
  { dept: "Computer Science", count: 5 },
  { dept: "Electronics & Comm.", count: 5 },
  { dept: "Mechanical", count: 18 },
  { dept: "Information Science", count: 8 },
  { dept: "Mechatronics", count: 30},
  { dept: "Computer Science IoT", count: 4 },
  { dept: "CS AIML & AIML", count: 4 },
  { dept: "Robotics & AI", count: 6 },
];

export const products = [
  { name: "RoboKit Starter", price: "₹2,499", desc: "Beginner Arduino kit with sensors, motors and project guide." },
  { name: "NovaArm Mini", price: "₹6,999", desc: "3-DOF educational robotic arm with control software." },
  { name: "TrackBot Pro", price: "₹4,499", desc: "Pre-assembled line follower competition platform." },
  { name: "Drone DIY Pack", price: "₹9,999", desc: "Quadcopter frame, ESCs, flight controller and software." },
];

export const timeline = [
  { year: "2019", title: "Club Founded", desc: "ROBONOVA established at MITE with 15 founding members." },
  { year: "2020", title: "First Workshop Series", desc: "Conducted introductory robotics workshops for 200+ students." },
  { year: "2021", title: "National Recognition", desc: "Won first inter-college autonomous robotics championship." },
  { year: "2022", title: "Innovation Lab Inaugurated", desc: "Dedicated robotics innovation lab opened on campus." },
  { year: "2023", title: "Industry Partnerships", desc: "Collaborated with leading robotics companies for internships." },
  { year: "2024", title: "ROBONOVA Fest", desc: "Hosted flagship 3-day national robotics festival with 50+ teams." },
  { year: "2025", title: "AI & Drone Division", desc: "Launched AI research wing and drone engineering division." },
];

export const gallery = [g1, g2, p3, p2, g2, g1];

export type EventStatus = "upcoming" | "ongoing" | "completed";
 
export interface ClubEvent {
  id: string;
  title: string;
  date: string;          // display string, e.g. "June 14, 2025"
  time: string;          // e.g. "10:00 AM – 4:00 PM"
  venue: string;
  category: string;      // e.g. "Workshop", "Competition", "Seminar"
  status: EventStatus;
  desc: string;
  highlights?: string[]; // bullet points shown on completed events
  registrationUrl?: string; // link for upcoming events
  image?: string; 
}
 
export const events: ClubEvent[] = [
  // ── UPCOMING ──────────────────────────────────────────────────────────────
  {
  id: "evt-007",
  title: "Basics of Microcontrollers & Hands-on Experience with Arduino UNO",
  date: "May 23, 2026",
  time: "2:00 PM – 4:00 PM",
  venue: "Robo Club, MITE Campus",
  category: "Workshop",
  status: "upcoming",
  desc: "A hands-on workshop on microcontroller basics and practical experience with Arduino UNO. Register in teams of 4–5 members. Bring laptops if available — one Arduino UNO per team is sufficient.",
  highlights: [
    "Resource Personnel: Dr. Suraj Bhat & Mr. Santhosh S (Dept. of Mechatronics)",
    "Register in teams of 4–5 members",
    "Fill in all details correctly in the registration form",
    "Bring laptops if available",
    "One Arduino UNO per team is sufficient",
    "Open to ROBONOVA members only",
  ],
  registrationUrl: "/contact",
  image: arduinoWorkshop,
},
  {
    id: "evt-002",
    title: "Robo Wars Inter-College Competition",
    date: "July 5, 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "Main Auditorium, MITE",
    category: "Competition",
    status: "upcoming",
    desc: "Intra-college robo war competition open to all engineering colleges. Prizes worth ₹50,000.",
    registrationUrl: "/contact",
  },
  {
    id: "evt-003",
    title: "Drone Racing Championship",
    date: "July 20, 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Innovation Centre, MITE",
    category: "Competition",
    status: "upcoming",
    desc: "Intra-college drone racing competition. Design and program autonomous drones to race through a challenging course. Open to all engineering students.",
    registrationUrl: "/contact",
  },
 
  // ── COMPLETED ─────────────────────────────────────────────────────────────
  {
    id: "evt-004",
    title: "Robo Fest/Tech Carnival",
    date: "March 8–10, 2025",
    time: "9:00 AM – 8:00 PM",
    venue: "MITE Campus",
    category: "Fest",
    status: "completed",
    desc: "Our flagship 3-day national robotics festival featuring competitions, workshops and industry showcases.",
    highlights: [
      "50+ teams from 20 colleges across India",
      "₹1.5 lakh prize pool across 6 events",
      "Live drone racing and autonomous car demo",
      "Industry stalls from 5 robotics companies",
    ],
  },
  {
    id: "evt-005",
    title: "Robo Soccer Competition",
    date: "January 18, 2025",
    time: "10:00 AM – 5:00 PM",
    venue: "Inter-college Level",
    category: "Competition",
    status: "completed",
    desc: "Intra-college robo soccer competition with 10 teams competing in a knockout format. Each team designed and programmed autonomous robots to play soccer on a custom field.",
    highlights: [
      "60 participants from different departments",
      "Exciting final match with a last-minute goal",
      "Winning team received ₹10,000 and a trophy",
    ],
  },
  {
    id: "evt-006",
    title: "Robocon Competition",
    date: "November 22, 2024",
    time: "8:00 AM – 6:00 PM",
    venue: "Inter-college Level",
    category: "Competition",
    status: "completed",
    desc: "Inter-college Robocon competition where teams designed and built autonomous robots to complete a series of challenges.",
    highlights: [
      "40+ teams from 15 colleges participated",
      "Intense competition with innovative robot designs",
      "Exciting finals with close matches",
    ],
  },
];

export const achievements = [
  "Won 'Bot Soccer' at TIARA 2019, a national level technical fest at St. Joseph Engg College",
  "Won 'Robo Race' at Tech Yuva 2019 held at Srinivas University",
  "Won 'Robo Soccer' at AJIET AAKAR 2019, a state level techno cultural event",
  "Won 'Robo Sumo' at St. Joseph Engg College",
  "Won 2nd place in 'Bot Hockey' at NITK Surathkal",
  "Won 'Robo Soccer' at Incredia 19, NITTE",
  "Emerged as 2nd runner up in 'Bot Soccer' at NIT Goa",
];