// Central content store for CPJK Workspace.
// Keep business facts here so components stay purely presentational.

export const BRAND = {
  name: "CPJK Workspace",
  locality: "Vadapalani",
  city: "Chennai",
  whatsappNumber: "919999999999",
  whatsappMessage: "Hi CPJK Workspace, I'd like to enquire about workspace availability in Vadapalani.",

  // Use the full URL below:
  email: "info@cpjkworkspace.com",
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Spaces", href: "#spaces" },
  { label: "Amenities", href: "#amenities" },
  { label: "Virtual Office", href: "#virtual-office" },
  { label: "Location", href: "#location" },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const HERO_STATS: Stat[] = [
  { value: 63, label: "Regular seats" },
  { value: 6, label: "Workspace configurations" },
  { value: 5000, prefix: "₹", label: "Virtual office, starting from" },
];

export const OVERVIEW_STATS: Stat[] = [
  { value: 63, label: "Regular seats" },
  { value: 6, label: "Workspace configurations" },
  { value: 2, label: "Floors" },
  { value: 5000, prefix: "₹", label: "Virtual office, starting price" },
];

export const ABOUT_POINTS = [
  {
    title: "Professional workspace",
    body: "Purpose-built rooms across two floors, arranged for focused, everyday work.",
  },
  {
    title: "Flexible configurations",
    body: "Six distinct room layouts, from compact rooms to larger 14-seat spaces with a private cabin.",
  },
  {
    title: "Convenient location",
    body: "Positioned in Vadapalani, Chennai — easy to reach, easy to commute to daily.",
  },
  {
    title: "Room for growing teams",
    body: "Multiple room sizes mean a team can move into more space as it grows, without moving addresses.",
  },
];

// Floor plan — structural data for the interactive diagram
export type FloorRoom = {
  id: string;
  name: string;
  seats?: number;
  cabin?: boolean;
  tag?: string;
  floor: "ground" | "second";
  zone?: string;
};

export const FLOOR_ROOMS: FloorRoom[] = [
  
    // ========== GROUND FLOOR ==========
  {
    id: "g-entry",
    floor: "ground",
    name: "Entry",
    tag: "Main entrance with a welcoming reception area and visitor seating.",
  },
  {
    id: "g-parking",
    floor: "ground",
    name: "Parking",
    tag: "Secure parking for two‑wheelers and four‑wheelers, directly accessible.",
  },
  {
    id: "g-main",
    floor: "ground",
    name: "14 Seater + Private Cabin",
    seats: 14,
    cabin: true,
    tag: "Spacious open workspace with an enclosed private cabin inside, perfect for focused work.",
  },
  {
    id: "g-cabin-inside",
    floor: "ground",
    name: "Private Cabin (Inside)",
    seats: 1,
    cabin: true,
    tag: "A sound‑proofed private cabin located within the 14‑seater main room.",
  },
  {
    id: "g-eating",
    floor: "ground",
    name: "Eating Area",
    tag: "Dedicated break‑out zone with tables, seating, and countertops for meals and informal chats.",
  },
  {
    id: "g-mens",
    floor: "ground",
    name: "Men's Restroom",
    tag: "Well‑maintained washroom with modern fixtures and ample ventilation.",
  },
  {
    id: "g-womens",
    floor: "ground",
    name: "Women's Restroom",
    tag: "Spacious and hygienic restroom with all necessary amenities.",
  },
  // ========== SECOND FLOOR ==========
  {
    id: "s-front-8",
    floor: "second",
    name: "Front Room A",
    seats: 8,
    tag: "Bright, front‑facing room with 8 seats – ideal for a small team.",
  },
  {
    id: "s-front-7",
    floor: "second",
    name: "Front Room B",
    seats: 7,
    tag: "Adjacent front room with 7 seats, separated by a partition wall.",
  },
  {
    id: "s-center-main",
    floor: "second",
    name: "14 Seater + Private Cabin",
    seats: 14,
    cabin: true,
    tag: "Central, spacious room with 14 open seats and a private cabin inside.",
  },
  {
    id: "s-center-cabin",
    floor: "second",
    name: "Private Cabin (Inside)",
    seats: 1,
    cabin: true,
    tag: "Enclosed private cabin within the central 14‑seater room.",
  },
  {
    id: "s-rear-10a",
    floor: "second",
    name: "Rear Room A",
    seats: 10,
    tag: "Quiet rear room with 10 seats, perfect for focused work.",
  },
  {
    id: "s-rear-10b",
    floor: "second",
    name: "Rear Room B",
    seats: 10,
    tag: "Second rear room with 10 seats, separated by a partition wall.",
  },
];

// Available spaces — six premium cards
export type SpaceCard = {
  id: string;
  title: string;
  seats: number;
  cabin?: boolean;
  floor: string;
  zone: string;
};

export const SPACES: SpaceCard[] = [
  { id: "sp-1", title: "14 Seats + Private Cabin", seats: 14, cabin: true, floor: "Ground Floor", zone: "Main Workspace" },
  { id: "sp-2", title: "14 Seats + Private Cabin", seats: 14, cabin: true, floor: "2nd Floor", zone: "Center Room" },
  { id: "sp-3", title: "10 Seats", seats: 10, floor: "2nd Floor", zone: "Rear Room A" },
  { id: "sp-4", title: "10 Seats", seats: 10, floor: "2nd Floor", zone: "Rear Room B" },
  { id: "sp-5", title: "7 Seats", seats: 7, floor: "2nd Floor", zone: "Front Room B" },
  { id: "sp-6", title: "8 Seats", seats: 8, floor: "2nd Floor", zone: "Front Room A" },
];

export const AMENITIES = [
  { id: "wifi", title: "Wi-Fi", detail: "Speeds up to 300 Mbps" },
  { id: "power", title: "Power", detail: "Ad-hoc power support" },
  { id: "ac", title: "Air Conditioning", detail: "Individual AC for each partitioned room" },
  { id: "water", title: "Drinking Water", detail: "Purified drinking water" },
  { id: "eating", title: "Eating Area", detail: "Bring your own food and use the provided eating area" },
  { id: "restrooms", title: "Restrooms", detail: "Separate men's and women's restrooms" },
  { id: "cleaning", title: "Cleaning", detail: "Daily room, desk and toilet cleaning by appointed staff" },
];

export const WHY_CPJK = [
  {
    title: "A professional environment",
    body: "Rooms designed for focused, everyday work — not a shared lounge or a converted flat.",
  },
  {
    title: "Configurations to match your team",
    body: "Six distinct room layouts across two floors, from 7-seat rooms to 14 seats with a private cabin.",
  },
  {
    title: "Space to grow into",
    body: "As headcount changes, a team can move within the building instead of relocating entirely.",
  },
  {
    title: "The practical essentials, covered",
    body: "Fast Wi-Fi, individual AC, daily cleaning and a proper eating area — handled, so you can focus on work.",
  },
  {
    title: "A Vadapalani address",
    body: "Positioned in one of Chennai's well-connected commercial neighbourhoods.",
  },
  {
    title: "A registered address, without the seats",
    body: "Need a business address without taking a room? CPJK's virtual office plan covers that separately.",
  },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Send Enquiry", body: "Tell us roughly what your team needs — we'll take it from there." },
  { step: "02", title: "Discuss Requirements", body: "A short conversation to understand team size and timeline." },
  { step: "03", title: "Choose Workspace", body: "We match you to a room configuration that fits." },
  { step: "04", title: "Book a Visit", body: "See the space in person before deciding anything." },
  { step: "05", title: "Get Started", body: "Move in and get to work." },
];

export const ENQUIRY_WORKSPACE_OPTIONS = [
  "14 Seats + Private Cabin (Ground Floor)",
  "14 Seats + Private Cabin (2nd Floor, Center Room)",
  "10 Seats (2nd Floor, Rear Room)",
  "8 Seats (2nd Floor, Front Room)",
  "7 Seats (2nd Floor, Front Room)",
  "Virtual Office",
  "Not sure yet",
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Spaces", href: "#spaces" },
  { label: "Amenities", href: "#amenities" },
  { label: "Virtual Office", href: "#virtual-office" },
  { label: "Location", href: "#location" },
  { label: "Enquire", href: "#enquiry" },
];
