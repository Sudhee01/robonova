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
  { name: "Dr. Anil Kumar", role: "Faculty Advisor", dept: "Dept. of ECE", desc: "20+ years in embedded systems and robotics research." },
  { name: "Prof. Shreya Rao", role: "Co-Coordinator", dept: "Dept. of CSE", desc: "AI & computer vision specialist mentoring student innovators." },
  { name: "Dr. Mahesh N.", role: "Innovation Mentor", dept: "Dept. of Mech", desc: "Guides mechanical design and rapid prototyping projects." },
  { name: "Prof. Kavya Shetty", role: "Workshop Lead", dept: "Dept. of EEE", desc: "Drives hands-on training in power electronics and automation." },
];

export const leaders = [
  { name: "Arjun Pai", role: "President", year: "Final Year, ECE" },
  { name: "Nidhi Hegde", role: "Vice President", year: "Final Year, CSE" },
  { name: "Rohan Shenoy", role: "Technical Lead", year: "Third Year, ECE" },
  { name: "Ananya Bhat", role: "Design Lead", year: "Third Year, Mech" },
  { name: "Karthik Rao", role: "Events Head", year: "Third Year, EEE" },
  { name: "Sneha Kamath", role: "Outreach Head", year: "Second Year, CSE" },
];

export const members = [
  { dept: "Computer Science", count: 38 },
  { dept: "Electronics & Comm.", count: 34 },
  { dept: "Electrical & Electronics", count: 22 },
  { dept: "Mechanical", count: 18 },
  { dept: "Information Science", count: 8 },
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
