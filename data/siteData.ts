// ============================================================
// Site-wide data for Dr. Akanksha Tiwari — Fit Aesthetic
// ============================================================

export const siteConfig = {
  name: "Dr. Akanksha Tiwari",
  tagline: "Fit Aesthetic",
  description:
    "Personalized fitness guidance, realistic diet strategies, and sustainable transformation plans designed for real people.",
  url: "https://fitaesthetic.in",
  email: "akankshat0311@gmail.com",
  phone: "+91 83022 35979",
  whatsapp: "https://wa.me/918302235979",
  social: {
    youtube: "https://www.youtube.com/@TheFitAesthetic",
    instagram: "https://www.instagram.com/thefitaesthetic_/",
    twitter: "https://twitter.com/fitaesthetic",
    linkedin: "https://www.linkedin.com/in/dr-akanksha-tiwari-2a79ab1b5/",
  },
};

// ---------- Navigation ----------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Transformations", href: "#transformations" },
  { label: "YouTube", href: "#youtube" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

// ---------- Stats ----------
export const stats = [
  { value: 500, suffix: "+", label: "Guided Clients" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Transformations" },
];

// ---------- Services ----------
export const services = [
  {
    icon: "Dumbbell",
    title: "Personalized Fitness Guidance",
    description:
      "Custom workout plans tailored to your body type, fitness level, and goals. No cookie-cutter programs — every plan is as unique as you.",
    color: "#6E3B3B",
  },
  {
    icon: "TrendingDown",
    title: "Fat Loss Programs",
    description:
      "Sustainable fat loss strategies that don't rely on crash diets or extreme restrictions. Lose fat while keeping your energy and muscle intact.",
    color: "#7B5E57",
  },
  {
    icon: "Zap",
    title: "Muscle Gain Guidance",
    description:
      "Structured progressive overload programs designed to help you build lean muscle mass efficiently, whether you're a beginner or intermediate.",
    color: "#6E3B3B",
  },
  {
    icon: "Apple",
    title: "Diet Planning",
    description:
      "Balanced, flexible nutrition plans that fit your lifestyle and food preferences. No bland meals — enjoy eating while hitting your macros.",
    color: "#7B5E57",
  },
  {
    icon: "Calendar",
    title: "Workout Planning",
    description:
      "Periodized training programs with proper warm-ups, progressions, and recovery protocols. Train smarter, not just harder.",
    color: "#6E3B3B",
  },
  {
    icon: "Video",
    title: "Online Consultation",
    description:
      "1-on-1 virtual consultations to discuss your goals, assess your current fitness, and create a personalized roadmap for transformation.",
    color: "#7B5E57",
  },
  {
    icon: "Heart",
    title: "Lifestyle Coaching",
    description:
      "Holistic guidance covering sleep, stress management, mindfulness, and daily habits. True fitness goes beyond the gym.",
    color: "#6E3B3B",
  },
];

// ---------- Pricing ----------
export const pricingPlans = [
  {
    id: "consultation",
    title: "1:1 Consultation Call",
    price: 149,
    currency: "₹",
    duration: "one-time",
    description:
      "A focused 30-minute video call to discuss your goals, assess your current fitness level, and chart out the right path forward.",
    features: [
      "30-minute 1:1 video call",
      "Personalized goal assessment",
      "Actionable starting roadmap",
      "Diet & training direction",
      "Q&A on your specific concerns",
    ],
    cta: "Book Your Call",
    highlighted: false,
    badge: null,
  },
  {
    id: "plan",
    title: "Diet & Training Plan",
    price: 999,
    currency: "₹",
    duration: "one-time",
    description:
      "A fully customized nutrition and workout plan tailored to your body type, goals, food preferences, and lifestyle.",
    features: [
      "Custom macro-based diet plan",
      "Personalized workout program",
      "Tailored to your food preferences",
      "Home or gym workout options",
      "PDF delivery within 48 hours",
      "One round of revisions",
    ],
    cta: "Get Your Plan",
    highlighted: false,
    badge: "Popular",
  },
  {
    id: "coaching-1m",
    title: "1 Month Coaching",
    price: 3999,
    currency: "₹",
    duration: "/ month",
    description:
      "Full hands-on coaching for one month — custom plan, weekly check-ins, and continuous WhatsApp support to keep you on track.",
    features: [
      "Custom diet + training plan",
      "Weekly plan adjustments",
      "Daily WhatsApp support",
      "Progress tracking & feedback",
      "Bi-weekly video check-ins",
      "Supplement guidance",
    ],
    cta: "Start Coaching",
    highlighted: false,
    badge: null,
  },
  {
    id: "coaching-3m",
    title: "3 Month Coaching",
    price: 6999,
    currency: "₹",
    duration: "/ 3 months",
    description:
      "The most comprehensive transformation package. Three months of dedicated coaching — the minimum time needed to build lasting habits and see real results.",
    features: [
      "Everything in 1 Month Coaching",
      "Monthly plan evolution",
      "Priority WhatsApp access",
      "Unlimited video check-ins",
      "Lifestyle & sleep coaching",
      "Post-program maintenance plan",
      "Save ₹4,998 vs monthly",
    ],
    cta: "Transform Now",
    highlighted: true,
    badge: "Best Value",
  },
];

// ---------- Transformations ----------
export const transformations = [
  {
    name: "Priya M.",
    age: 28,
    duration: "4 months",
    weightLost: "12 kg",
    testimonial:
      "Dr. Akanksha completely changed my relationship with food. I went from crash dieting to actually enjoying my meals while losing weight sustainably. Her approach is realistic and compassionate.",
    rating: 5,
    tag: "Fat Loss",
  },
  {
    name: "Rahul S.",
    age: 32,
    duration: "6 months",
    weightLost: "8 kg muscle gained",
    testimonial:
      "As a working professional with long hours, I never thought I could build muscle. Her customized plan fit perfectly into my schedule. The results speak for themselves.",
    rating: 5,
    tag: "Muscle Gain",
  },
  {
    name: "Sneha K.",
    age: 24,
    duration: "3 months",
    weightLost: "8 kg",
    testimonial:
      "I was a complete gym beginner and felt intimidated. Dr. Akanksha made everything so simple and approachable. Now I look forward to my workouts every day!",
    rating: 5,
    tag: "Beginner Transformation",
  },
  {
    name: "Amit P.",
    age: 35,
    duration: "5 months",
    weightLost: "15 kg",
    testimonial:
      "After trying multiple trainers, I finally found someone who understood my lifestyle constraints. The flexible diet plan was a game-changer. I've maintained my weight loss for over 6 months now.",
    rating: 5,
    tag: "Lifestyle Change",
  },
  {
    name: "Meera R.",
    age: 30,
    duration: "4 months",
    weightLost: "10 kg",
    testimonial:
      "Postpartum fitness felt impossible until I started working with Dr. Akanksha. She was patient, understanding, and created a plan that worked around my baby's schedule.",
    rating: 5,
    tag: "Postpartum Fitness",
  },
  {
    name: "Vikram D.",
    age: 27,
    duration: "3 months",
    weightLost: "6 kg muscle gained",
    testimonial:
      "The structured progressive overload program helped me break through my plateau. I gained significant muscle while actually understanding the science behind it.",
    rating: 5,
    tag: "Muscle Gain",
  },
];

// ---------- Fitness Tips / Blog ----------
export const fitnessTips = [
  {
    title: "5 Beginner Diet Mistakes That Stall Your Progress",
    excerpt:
      "Most beginners unknowingly sabotage their results with these common nutrition errors. Learn what they are and how to fix them for faster, sustainable results.",
    category: "Nutrition",
    readTime: "5 min read",
    date: "2025-01-15",
  },
  {
    title: "The Truth About Sustainable Fat Loss",
    excerpt:
      "Forget crash diets and extreme restrictions. Discover the science-backed approach to losing fat while maintaining your energy, muscle, and sanity.",
    category: "Fat Loss",
    readTime: "7 min read",
    date: "2025-02-01",
  },
  {
    title: "Muscle Gain Basics: A Complete Beginner's Guide",
    excerpt:
      "Building muscle doesn't have to be complicated. Here's everything you need to know about progressive overload, nutrition, and recovery for lean muscle growth.",
    category: "Muscle Gain",
    readTime: "8 min read",
    date: "2025-02-20",
  },
  {
    title: "How Much Protein Do You Actually Need?",
    excerpt:
      "The internet is full of conflicting advice about protein intake. Here's what the research actually says, simplified for everyday application.",
    category: "Nutrition",
    readTime: "4 min read",
    date: "2025-03-10",
  },
  {
    title: "Why Workout Consistency Beats Intensity",
    excerpt:
      "Going hard once a week won't get you results. Learn why showing up consistently at 70% effort outperforms sporadic 100% sessions every time.",
    category: "Training",
    readTime: "5 min read",
    date: "2025-03-25",
  },
  {
    title: "Your First Month at the Gym: A Survival Guide",
    excerpt:
      "Feeling overwhelmed at the gym? This comprehensive guide covers everything from gym etiquette to your first workout plan. Walk in with confidence.",
    category: "Beginner",
    readTime: "10 min read",
    date: "2025-04-05",
  },
  {
    title: "Fitness Myths That Are Holding You Back",
    excerpt:
      "Spot reduction, carb fear, and the 'anabolic window' — it's time to bust the myths that are preventing you from reaching your true potential.",
    category: "Education",
    readTime: "6 min read",
    date: "2025-04-20",
  },
];

// ---------- YouTube Videos ----------
export const youtubeVideos = [
  {
    id: "j3m7hwQRfCk",
    title: "My Complete Morning Routine for Fat Loss",
    views: "125K views",
    duration: "12:34",
  },
  {
    id: "L0d3sHc2IKI",
    title: "Beginner Full Body Workout — No Equipment",
    views: "89K views",
    duration: "18:22",
  },
  {
    id: "PzWI31yThag",
    title: "What I Eat In A Day — High Protein Indian Diet",
    views: "210K views",
    duration: "15:45",
  },
  {
    id: "nygKwPbWCnk",
    title: "5 Mistakes Ruining Your Fat Loss Journey",
    views: "156K views",
    duration: "10:18",
  },
];

// ---------- FAQs ----------
export const faqs = [
  {
    question: "Is this beginner friendly?",
    answer:
      "Absolutely! Most of my clients start as complete beginners. Every program is designed from scratch based on your current fitness level, not where I think you should be. We start slow, build proper foundations, and progressively increase intensity as you get comfortable.",
  },
  {
    question: "Can working professionals follow this?",
    answer:
      "Yes — this is actually designed with busy professionals in mind. I understand the constraints of long work hours, travel, and stress. Your nutrition and workout plans are built around your schedule, not the other way around. Many of my most successful clients work demanding corporate jobs.",
  },
  {
    question: "Is gym mandatory?",
    answer:
      "Not at all. While gym training offers more options for progressive overload, I create equally effective home workout plans using minimal or no equipment. What matters is consistency and effort, not the location.",
  },
  {
    question: "How are plans customized?",
    answer:
      "Every plan starts with a detailed assessment — your body metrics, medical history, food preferences, schedule, lifestyle, stress levels, and goals. Based on this, I create a fully personalized nutrition and training plan. No two clients ever get the same program.",
  },
  {
    question: "What does the online consultation process look like?",
    answer:
      "It's simple: you book a consultation through WhatsApp or the contact form. We have a 30-minute video call to understand your goals and challenges. Within 48 hours, you receive your customized plan with detailed instructions, video demonstrations, and ongoing WhatsApp support.",
  },
  {
    question: "How flexible are the diet plans?",
    answer:
      "Very flexible. I don't believe in restrictive diets. Your nutrition plan includes foods you actually enjoy, accounts for social events, and allows for smart substitutions. The goal is a sustainable lifestyle change, not a temporary diet that you'll quit in two weeks.",
  },
];

// ---------- About Timeline ----------
export const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Started the fitness journey with a passion for helping people transform their lives through sustainable approaches.",
  },
  {
    year: "2021",
    title: "First 100 Clients",
    description:
      "Reached the milestone of guiding 100 clients with personalized fitness and nutrition programs.",
  },
  {
    year: "2022",
    title: "YouTube Launch",
    description:
      "Launched the YouTube channel to share evidence-based fitness knowledge with a wider audience.",
  },
  {
    year: "2023",
    title: "500+ Transformations",
    description:
      "Crossed 500 successful client transformations with a 95% satisfaction rate.",
  },
  {
    year: "2024",
    title: "Fit Aesthetic Brand",
    description:
      "Established Fit Aesthetic as a premium personal fitness brand focused on sustainable, realistic transformations.",
  },
];
