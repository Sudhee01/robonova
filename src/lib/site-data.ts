import logo from "@/assets/robonova-logo.png";
import heroRobot from "@/assets/hero-robot.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const assets = { logo, heroRobot, g1, g2, g3, g4, p1, p2, p3 };

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
  { label: "Active Members", value: 120, suffix: "+" },
  { label: "Projects Built", value: 45, suffix: "+" },
  { label: "Workshops", value: 30, suffix: "+" },
  { label: "Achievements", value: 18, suffix: "" },
];

export const projects = [
  {
    title: "Autonomous Line Follower",
    image: p1,
    tech: ["Arduino", "IR Sensors", "PID Control"],
    desc: "A precision-tuned autonomous robot that follows complex tracks using PID control and infrared sensing.",
  },
  {
    title: "6-DOF Robotic Arm",
    image: p2,
    tech: ["ROS", "Servo Motors", "Computer Vision"],
    desc: "Industrial-grade pick-and-place arm with object recognition and inverse kinematics.",
  },
  {
    title: "Surveillance Quadcopter",
    image: p3,
    tech: ["Pixhawk", "OpenCV", "GPS"],
    desc: "Autonomous drone with live video feed, obstacle avoidance and waypoint navigation.",
  },
  {
    title: "Smart Agriculture Bot",
    image: p1,
    tech: ["Raspberry Pi", "IoT", "Sensors"],
    desc: "Field robot for soil moisture mapping, crop monitoring and precision irrigation.",
  },
  {
    title: "Voice Assistant Humanoid",
    image: p2,
    tech: ["Python", "NLP", "Servo"],
    desc: "Tabletop humanoid with natural conversation, gesture control and home automation.",
  },
  {
    title: "Swarm Robotics Platform",
    image: p3,
    tech: ["ESP32", "Mesh Network", "AI"],
    desc: "Multi-agent robot swarm coordinating through a low-latency mesh network.",
  },
];

export const mentors = [
  { name: "Dr. Adithya Hegde", role: "Faculty Advisor", dept: "Dept. of RI", desc: "4 years in embedded systems and robotics research.", image: "/public/team/dr.adithya.png" },
  { name: "Prof. Suraj Bhat", role: "Co-Coordinator", dept: "Dept. of MT", desc: "Guides mechanical design and rapid prototyping projects.", image: "/public/team/dr.suraj.jpg" },
];

export const leaders = [
  { name: "Pratheek A G", role: "President", year: "Final Year, MT", image: "/public/team/pratheek.jpg" },
  { name: "Amshul R", role: "Secretary", year: "Final Year, MT", image: "/public/team/amshul.jpg" },
  { name: "Krishna Prasad ", role: "Technical Head", year: "Final Year, MT", image: "/public/team/krishna.jpg" },
  { name: "Zuhair", role: "Technical Head", year: "Final Year, MT", image: "/public/team/zuhair.jpg" },
  { name: "Mohan Raj O", role: "Project Head", year: "Final Year, MT", image: "/public/team/mohan.jpg" },
  { name: "Sankeerthan", role: "Event Coordinator", year: "Third Year, MT", image: "/public/team/sankeerthan.jpg" },
  { name: "Manjith M Hegde", role: "Treasurer", year: "Third Year, MT", image: "/public/team/manjith.jpg" },
  { name: "Sukisha", role: "Design & Fabrication Lead", year: "Third Year, MT", image: "/public/team/sukisha.jpg" },
  { name: "Nidhi Bangera", role: "Electronics & Control Lead", year: "Third Year, MT", image: "/public/team/nidhi.jpg" },
  { name: "Shravan Kumar", role: "Programming & AI Lead", year: "Third Year, MT", image: "/public/team/shravan.jpg" },
  { name: "Suraj S Shetty", role: "Media & Publicity Lead", year: "Third Year, MT", image: "/public/team/suraj.jpg" },
];

export const members = [
  { dept: "Computer Science", count: 5 },
  { dept: "Electronics & Comm.", count: 5 },
  { dept: "Mechanical", count: 18 },
  { dept: "Information Science", count: 8 },
  { dept: "Mechatronics", count: 30},
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

export const gallery = [g1, g2, g3, g4, g1, g2];

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
}
 
export const events: ClubEvent[] = [
  // ── UPCOMING ──────────────────────────────────────────────────────────────
  {
    id: "evt-001",
    title: "Robo Starter Workshop",
    date: "June 14, 2026",
    time: "10:00 AM – 4:00 PM",
    venue: "Innovation Centre, MITE Campus",
    category: "Workshop",
    status: "upcoming",
    desc: "A hands-on full-day workshop for beginners covering Arduino basics, sensor integration and building your first autonomous bot.",
    registrationUrl: "/contact",
  },
  {
    id: "evt-002",
    title: "Line Follower Challenge 2026",
    date: "July 5, 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "Main Auditorium, MITE",
    category: "Competition",
    status: "upcoming",
    desc: "Inter-college autonomous line follower competition open to all engineering colleges. Prizes worth ₹50,000.",
    registrationUrl: "/contact",
  },
  {
    id: "evt-003",
    title: "AI in Robotics – Guest Lecture",
    date: "July 20, 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Innovation Centre, MITE",
    category: "Seminar",
    status: "upcoming",
    desc: "Industry expert talk on integrating machine learning with real-time robotic systems. Open to all students.",
    registrationUrl: "/contact",
  },
 
  // ── COMPLETED ─────────────────────────────────────────────────────────────
  {
    id: "evt-004",
    title: "ROBONOVA Fest 2025",
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
    title: "PCB Design Bootcamp",
    date: "January 18, 2025",
    time: "10:00 AM – 5:00 PM",
    venue: "ECE Lab 3, MITE",
    category: "Workshop",
    status: "completed",
    desc: "Intensive bootcamp on PCB layout, EasyEDA tools and fabrication workflow. 60 students participated.",
    highlights: [
      "60 participants from ECE and EEE departments",
      "Hands-on PCB design using EasyEDA",
      "Each participant took home a fabricated board",
    ],
  },
  {
    id: "evt-006",
    title: "Drone Pilot Certification Camp",
    date: "November 22, 2024",
    time: "8:00 AM – 6:00 PM",
    venue: "MITE Open Ground",
    category: "Workshop",
    status: "completed",
    desc: "Outdoor drone flying camp covering regulations, assembly and hands-on flight training.",
    highlights: [
      "30 students certified as drone pilots",
      "Covered DGCA guidelines and safety protocols",
      "Each student flew a real quadcopter",
    ],
  },
];