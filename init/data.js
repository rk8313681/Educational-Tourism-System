const listings = [

{
  title: "ISRO Space Research & Innovation Tour",
  location: "Bangalore",
  country: "India",
  image: {
    url: "https://www.citcoorg.edu.in/wp-content/uploads/2025/06/WhatsApp-Image-2024-11-28-at-11.27.05-AM-scaled.jpeg",
    filename: "isro"
  },
  pricePerPerson: 4200,
  duration: "4D/3N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-ISRO-001",
  startingPoint: "Bangalore",
  availability: "available",

  description: "This 4-day educational tour is specially designed for school and college students who want real exposure to India's space science ecosystem. The package combines an academic visit to Bengaluru's leading science and innovation landmarks with guided sessions focused on satellite systems, launch vehicles, robotics, astronomy, and scientific careers. Students get an engaging blend of institutional learning, museum exposure, science demonstrations, and group discussions, making the trip informative, career-oriented, and memorable.",

  aboutLocation: "Bangalore is one of India's leading science and technology hubs. It is home to major aerospace, research, and innovation institutions, making it an ideal destination for educational tours related to space science, engineering, and technology awareness.",

  nearbyPlaces: [
    "Visvesvaraya Industrial and Technological Museum",
    "Jawaharlal Nehru Planetarium",
    "HAL Heritage Centre and Aerospace Museum",
    "Cubbon Park"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Academic Residency Bangalore",
    roomType: "Triple Sharing for Students",
    nights: 3,
    hotelAddress: "Near Science and Museum Belt, Bangalore",
    stayNotes: "Separate room arrangement for faculty and students. Basic study-friendly accommodation with hygiene and safety support."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "MAP with student-friendly veg meals, one South Indian speciality dinner, and packaged drinking water during sightseeing."
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Educational Coach",
    capacity: 40,
    pickupPoint: "Bangalore Railway Station / Airport Pickup Zone",
    dropPoint: "Bangalore Railway Station / Airport Drop Zone",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "10 June 2026", seats: 40 },
    { date: "24 June 2026", seats: 38 },
    { date: "08 July 2026", seats: 40 }
  ],

  inclusions: [
    "3 nights student accommodation",
    "Daily breakfast, lunch, and dinner",
    "Local AC bus transport for complete itinerary",
    "Planetarium entry and science museum visit",
    "Academic orientation session",
    "Tour coordinator support",
    "Basic first-aid support",
    "Group photo and participation certificate"
  ],

  exclusions: [
    "Train or flight tickets to Bangalore",
    "Personal snacks and shopping",
    "Travel insurance",
    "Medical emergency expenses",
    "Any extra sightseeing outside itinerary"
  ],

  tourHighlights: [
    "Space science themed educational tour",
    "Planetarium learning session",
    "Aerospace and science museum exposure",
    "Interactive academic discussion on career in space science",
    "Technology and innovation focused city learning"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Group leader or faculty coordinator is mandatory",
    "Final institution visit schedule may vary depending on permissions and operational availability",
    "Students must follow discipline and reporting time throughout the tour",
    "Room allotment will be on student triple sharing basis"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Bangalore & Academic Orientation",
      subtitle: "Check-in, welcome briefing, and educational tour introduction",
      description: "On arrival in Bangalore, students will be received by the tour coordinator and transferred to the hotel. After lunch and some rest, an orientation session will be conducted to explain the purpose of the educational trip, expected learning outcomes, schedule discipline, and safety guidelines. In the evening, students will attend a short introductory presentation on India's space journey, major institutions, and career paths in aerospace and research.",
      stay: "Bangalore",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and hotel check-in",
        "Welcome briefing",
        "Group introduction session",
        "Academic presentation on India's space research ecosystem"
      ],
      transport: {
        from: "Bangalore Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "18 km",
        time: "45 mins"
      }
    },
    {
      day: 2,
      title: "Science Museum & Planetarium Learning Day",
      subtitle: "Hands-on scientific exposure and astronomy awareness",
      description: "After breakfast, students will visit a major science museum where they will explore interactive models, engineering exhibits, physics demonstrations, and innovation galleries. Later, the group will proceed to the planetarium for an astronomy-based educational session that helps students understand celestial movement, space observation, and the basics of the universe in an engaging format. Faculty-led reflection discussion will be conducted in the evening.",
      stay: "Bangalore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Interactive museum exploration",
        "Engineering and innovation gallery visit",
        "Astronomy dome session",
        "Evening reflection discussion"
      ],
      transport: {
        from: "Hotel",
        to: "Museum and Planetarium Circuit",
        mode: "bus",
        distance: "22 km",
        time: "1 hour"
      }
    },
    {
      day: 3,
      title: "Aerospace Exposure & Innovation Discussion",
      subtitle: "Aviation and applied science learning",
      description: "Today students will explore aerospace-themed exhibits and learn about aircraft systems, defence aviation history, and applied engineering concepts. The visit is designed to connect classroom learning with real-world industrial and scientific applications. In the second half, a guided group session will cover scientific temperament, innovation pathways, and higher education opportunities in science and engineering streams.",
      stay: "Bangalore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Aerospace exhibit visit",
        "Applied engineering interpretation",
        "Group Q&A session",
        "Career awareness discussion"
      ],
      transport: {
        from: "Hotel",
        to: "Aerospace Learning Zone",
        mode: "bus",
        distance: "28 km",
        time: "1 hr 10 mins"
      }
    },
    {
      day: 4,
      title: "Campus-style Learning Wrap-up & Departure",
      subtitle: "Feedback, certificate distribution, and return",
      description: "After breakfast, students will take part in a short wrap-up session where they will discuss the key learnings from the tour. Certificates of participation will be distributed, followed by checkout and transfer for departure. The tour concludes with academic feedback and group dispersal.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Learning recap",
        "Certificate distribution",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Bangalore Departure Point",
        mode: "bus",
        distance: "18 km",
        time: "45 mins"
      }
    }
  ]
},

{
  title: "AIIMS Medical Education & Healthcare Exposure Tour",
  location: "Delhi",
  country: "India",
  image: {
    url: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    filename: "aiims"
  },
  pricePerPerson: 4600,
  duration: "4D/3N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-MED-002",
  startingPoint: "Delhi",
  availability: "available",

  description: "This healthcare-focused educational package is ideal for biology students, nursing aspirants, and learners interested in medical systems and public healthcare infrastructure. The tour introduces students to the academic atmosphere of a leading medical environment, hospital operations, laboratory practices, public health awareness, and responsible medical careers. It combines institutional exposure with guided educational visits and structured observation-based learning.",

  aboutLocation: "Delhi is home to some of India's most important healthcare, governance, and academic institutions. It provides excellent exposure for students interested in medicine, public health, administration, and social service-oriented careers.",

  nearbyPlaces: [
    "India Gate",
    "National Science Centre",
    "Lodhi Garden",
    "Medical research and institutional zone"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Scholars Stay Delhi",
    roomType: "Triple Sharing",
    nights: 3,
    hotelAddress: "South Delhi Academic Belt",
    stayNotes: "Safe student accommodation with meal hall and faculty support rooms."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Simple hygienic student meals with Delhi-style dinner on one day."
  },

  transport: {
    type: "bus",
    vehicleName: "35 Seater AC Coach",
    capacity: 35,
    pickupPoint: "New Delhi Railway Station / Airport",
    dropPoint: "New Delhi Railway Station / Airport",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "12 June 2026", seats: 35 },
    { date: "26 June 2026", seats: 35 },
    { date: "10 July 2026", seats: 35 }
  ],

  inclusions: [
    "3 nights accommodation",
    "Breakfast, lunch, and dinner",
    "Delhi local transport by AC coach",
    "Healthcare awareness sessions",
    "Medical observation briefing",
    "Science centre visit",
    "Tour coordinator and faculty support"
  ],

  exclusions: [
    "Outstation train/flight tickets",
    "Personal medical costs",
    "Personal purchases",
    "Any unofficial institutional entry charges",
    "Insurance"
  ],

  tourHighlights: [
    "Medical education themed package",
    "Hospital ecosystem understanding",
    "Healthcare and public service awareness",
    "Science centre enrichment visit",
    "Career guidance for medical aspirants"
  ],

  packagePolicy: [
    "Institutional access is subject to prior approval and visit regulations",
    "Students must wear decent academic dress code",
    "Photography may be restricted in medical premises",
    "Students must move in groups with faculty supervision",
    "Punctuality is mandatory during all educational visits"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Delhi & Public Health Introduction",
      subtitle: "Check-in and guided orientation to healthcare systems",
      description: "Students will arrive in Delhi and transfer to the hotel. After freshening up, an introductory session will be conducted covering the structure of India's healthcare system, government and private hospital models, and the significance of ethics in medical professions. This session builds context before the institutional learning component.",
      stay: "Delhi",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival and check-in",
        "Orientation on Indian healthcare system",
        "Group briefing on medical discipline and observation"
      ],
      transport: {
        from: "Delhi Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "16 km",
        time: "40 mins"
      }
    },
    {
      day: 2,
      title: "Medical Campus Exposure Day",
      subtitle: "Understanding institutional healthcare environment",
      description: "After breakfast, the group will proceed for a structured educational exposure visit focusing on hospital functioning, academic discipline, patient management systems, hygiene protocols, and the roles of doctors, nurses, lab staff, and administrators. The goal is to help students understand healthcare as a coordinated system rather than just a profession.",
      stay: "Delhi",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Healthcare systems observation",
        "Introduction to hospital workflow",
        "Public health awareness",
        "Career pathway discussion"
      ],
      transport: {
        from: "Hotel",
        to: "Medical Institution Zone",
        mode: "bus",
        distance: "10 km",
        time: "30 mins"
      }
    },
    {
      day: 3,
      title: "Science Centre & Medical Awareness Enrichment",
      subtitle: "Connecting school science with health-related applications",
      description: "Students will visit a science centre to understand biology, human body systems, technology in diagnostics, and scientific concepts linked with medicine. The second half includes a guided workshop on health awareness, sanitation, nutrition, and preventive care. This day broadens the educational impact of the tour beyond campus exposure.",
      stay: "Delhi",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Science centre visit",
        "Human body and biology exhibits",
        "Preventive healthcare session",
        "Nutrition and sanitation awareness"
      ],
      transport: {
        from: "Hotel",
        to: "Science Centre",
        mode: "bus",
        distance: "14 km",
        time: "35 mins"
      }
    },
    {
      day: 4,
      title: "Review Session & Departure",
      subtitle: "Feedback, summary, and dispersal",
      description: "The final day begins with breakfast followed by a group reflection session. Students will share their learning about healthcare systems, responsibility in medical careers, and practical understanding gained during the tour. After checkout, the group will be transferred for departure.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Feedback discussion",
        "Learning summary",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Delhi Departure Point",
        mode: "bus",
        distance: "16 km",
        time: "40 mins"
      }
    }
  ]
},

{
  title: "Infosys Campus, Innovation & IT Industry Learning Tour",
  location: "Mysore",
  country: "India",
  image: {
    url: "https://images.adsttc.com/media/images/6748/ff0e/a36f/6233/c0a6/e726/large_jpg/infosys-campus-morphogenesis_1.jpg?1732837148",
    filename: "infosys"
  },
  pricePerPerson: 4800,
  duration: "5D/4N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-IT-003",
  startingPoint: "Mysore",
  availability: "available",

  description: "This 5-day educational package is designed for computer science, IT, management, and professional course students who want industry-style exposure. The tour introduces students to modern corporate work culture, training environments, digital professionalism, innovation ecosystems, communication standards, and career readiness. It combines campus-style exposure, academic reflection, leadership sessions, and technology-linked visits in a structured and inspiring way.",

  aboutLocation: "Mysore is known for its clean urban environment, educational ecosystem, and access to one of India's most recognized corporate training campuses. It is ideal for technology, professional development, and institutional exposure tours.",

  nearbyPlaces: [
    "Mysore Palace",
    "Mysore Sand Sculpture Museum",
    "Chamundi Hills",
    "Technology and training hubs"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Tech Scholars Residency",
    roomType: "Triple Sharing",
    nights: 4,
    hotelAddress: "Mysore Educational Belt",
    stayNotes: "Student-friendly property with early breakfast support and group dining."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Daily buffet with South Indian breakfast and standard student lunch/dinner."
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Coach",
    capacity: 40,
    pickupPoint: "Mysore Railway Station",
    dropPoint: "Mysore Railway Station",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "18 August 2026", seats: 40 },
    { date: "01 September 2026", seats: 40 },
    { date: "15 September 2026", seats: 40 }
  ],

  inclusions: [
    "4 nights accommodation",
    "Daily breakfast, lunch, and dinner",
    "Local AC bus transport",
    "Corporate culture awareness sessions",
    "Skill development discussion",
    "Technology-linked educational visits",
    "Tour coordinator support",
    "Participation certificate"
  ],

  exclusions: [
    "Travel to Mysore from hometown",
    "Personal shopping and snacks",
    "Insurance",
    "Personal gadgets or paid activities",
    "Extra sightseeing beyond schedule"
  ],

  tourHighlights: [
    "IT and corporate exposure themed package",
    "Professional development focus",
    "Leadership and communication sessions",
    "Campus-style discipline and work culture understanding",
    "Blend of education and guided city learning"
  ],

  packagePolicy: [
    "Students must follow formal conduct during industry-themed sessions",
    "Group faculty member is compulsory",
    "Photography rules depend on location permissions",
    "Attendance in all learning sessions is mandatory",
    "Any misconduct may lead to removal from group activities"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Mysore & Program Orientation",
      subtitle: "Introduction to IT industry culture and learning objectives",
      description: "Students will arrive in Mysore and check in to the hotel. After lunch, an orientation session will introduce the overall educational purpose of the tour, including industry behaviour, digital professionalism, workplace communication, and how to observe corporate systems with an academic mindset. The evening includes a short team-building exercise.",
      stay: "Mysore",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival and check-in",
        "Corporate tour orientation",
        "Professional behaviour briefing",
        "Team-building activity"
      ],
      transport: {
        from: "Mysore Railway Station",
        to: "Hotel",
        mode: "bus",
        distance: "9 km",
        time: "25 mins"
      }
    },
    {
      day: 2,
      title: "Corporate Campus Learning Day",
      subtitle: "Understanding modern workplace and training ecosystem",
      description: "After breakfast, students will engage in a structured exposure day focused on campus systems, training culture, employee professionalism, communication discipline, and the role of continuous learning in the IT industry. The day is aimed at helping students understand the difference between academic learning and industry readiness.",
      stay: "Mysore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Corporate ecosystem briefing",
        "Training culture understanding",
        "Professional communication awareness",
        "Career readiness discussion"
      ],
      transport: {
        from: "Hotel",
        to: "Corporate Learning Zone",
        mode: "bus",
        distance: "12 km",
        time: "30 mins"
      }
    },
    {
      day: 3,
      title: "Innovation, Soft Skills & Career Development",
      subtitle: "Technology mindset and employability skills day",
      description: "This day focuses on innovation, workplace adaptability, teamwork, communication, and presentation skills. Students will attend an academic-style workshop highlighting employability, project culture, soft skills, and how technology professionals work in teams to deliver outcomes. Evening reflection will help students connect these concepts to their courses.",
      stay: "Mysore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Innovation and employability session",
        "Soft skills workshop",
        "Teamwork and project culture discussion",
        "Evening reflection activity"
      ],
      transport: {
        from: "Hotel",
        to: "Workshop Venue",
        mode: "bus",
        distance: "8 km",
        time: "20 mins"
      }
    },
    {
      day: 4,
      title: "Educational City Visit & Leadership Session",
      subtitle: "Balanced learning with guided city enrichment",
      description: "Students will visit selected city landmarks to experience the cultural side of Mysore while also attending a leadership and self-development session in the second half. This makes the package more holistic by combining professional learning with confidence-building and broad educational exposure.",
      stay: "Mysore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Guided city educational visit",
        "Leadership session",
        "Confidence building discussion",
        "Group interaction"
      ],
      transport: {
        from: "Hotel",
        to: "City Educational Circuit",
        mode: "bus",
        distance: "18 km",
        time: "45 mins"
      }
    },
    {
      day: 5,
      title: "Summary Session & Departure",
      subtitle: "Closing interaction and return",
      description: "After breakfast, students will participate in a final summary session focused on key takeaways from the tour, especially workplace discipline, communication, technology careers, and self-improvement. After checkout, the group will depart with certificates and memories of a meaningful professional exposure experience.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Summary discussion",
        "Certificate distribution",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Mysore Railway Station",
        mode: "bus",
        distance: "9 km",
        time: "25 mins"
      }
    }
  ]
},
// ================= CARD 4 =================
{
  title: "DRDO Defence Research & Innovation Exposure Tour",
  location: "Hyderabad",
  country: "India",
 image: {
  url: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1200&auto=format&fit=crop",
  filename: "drdo"
},
  pricePerPerson: 4500,
  duration: "4D/3N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-DEF-004",
  startingPoint: "Hyderabad",
  availability: "available",

  description: "This 4-day educational package is specially designed for school and college students who want exposure to defence technology, applied engineering, scientific discipline, and innovation-led national development. The tour introduces students to the ecosystem of research-based institutions, technical problem solving, defence-related awareness, and the importance of engineering knowledge in strategic national sectors. Through guided academic sessions, museum-style exposure, group discussions, and structured observation, students gain practical insight into how science and technology contribute to national growth.",

  aboutLocation: "Hyderabad is one of India's important centres for defence, aerospace, and advanced technology-linked institutions. The city provides strong educational value for students interested in engineering, innovation, applied science, and research-oriented careers.",

  nearbyPlaces: [
    "Birla Science Museum",
    "Salar Jung Museum",
    "Technology Corridor",
    "Research Institutions Area"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Academic Residency Hyderabad",
    roomType: "Triple Sharing for Students",
    nights: 3,
    hotelAddress: "Hyderabad Tech Zone",
    stayNotes: "Safe and study-friendly accommodation with separate faculty support arrangement, hygienic rooms, and a disciplined group environment for students."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "MAP with hygienic vegetarian meals, one regional dinner experience, and packaged drinking water during sightseeing and local transfers."
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Educational Coach",
    capacity: 40,
    pickupPoint: "Hyderabad Railway Station",
    dropPoint: "Hyderabad Railway Station",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "12 June 2026", seats: 40 },
    { date: "05 July 2026", seats: 38 }
  ],

  inclusions: [
    "3 nights student accommodation",
    "Daily breakfast, lunch, and dinner",
    "Local AC bus transport for the complete itinerary",
    "Science museum visit",
    "Academic orientation session",
    "Technology awareness discussion",
    "Tour coordinator support",
    "Basic first-aid support"
  ],

  exclusions: [
    "Train or flight tickets to Hyderabad",
    "Personal snacks and shopping",
    "Travel insurance",
    "Medical emergency expenses",
    "Any extra sightseeing outside itinerary"
  ],

  tourHighlights: [
    "Defence and innovation themed educational tour",
    "Applied science and engineering awareness",
    "Technology-linked museum exposure",
    "Career motivation for research and engineering fields",
    "Structured learning with guided academic reflection"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Group leader or faculty coordinator is mandatory",
    "Visit schedule may vary depending on permissions and operational conditions",
    "Photography may be restricted in selected zones",
    "Students must follow discipline and reporting time throughout the tour"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Hyderabad & Defence Technology Orientation",
      subtitle: "Check-in, welcome session, and introduction to research-based learning",
      description: "On arrival in Hyderabad, students will be received by the tour coordinator and transferred to the hotel. After lunch and a short rest, an orientation session will be conducted to explain the purpose of the tour, the importance of defence research, and how engineering and science contribute to national progress. In the evening, students will attend a guided discussion on scientific discipline, innovation systems, and career pathways in technical fields.",
      stay: "Hyderabad",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and hotel check-in",
        "Welcome briefing",
        "Educational introduction session",
        "Presentation on defence and innovation ecosystem"
      ],
      transport: {
        from: "Hyderabad Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "18 km",
        time: "45 mins"
      }
    },
    {
      day: 2,
      title: "Science Museum & Technology Awareness Day",
      subtitle: "Applied science learning through guided observation",
      description: "After breakfast, students will visit a science and technology learning space where they will explore engineering models, innovation-based exhibits, and scientific demonstrations. The objective is to help students connect their classroom knowledge with real-world technical applications. In the second half, the group will participate in a guided discussion on how research institutions support problem solving, innovation, and national development.",
      stay: "Hyderabad",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Science museum visit",
        "Engineering and technology exhibit exploration",
        "Innovation awareness discussion",
        "Evening group reflection"
      ],
      transport: {
        from: "Hotel",
        to: "Technology Learning Circuit",
        mode: "bus",
        distance: "20 km",
        time: "50 mins"
      }
    },
    {
      day: 3,
      title: "Research Culture & Career Awareness Session",
      subtitle: "Understanding scientific work culture and future opportunities",
      description: "This day focuses on research discipline, teamwork in technical institutions, and how students can prepare for careers in engineering, defence technology, electronics, and applied science. Faculty-guided reflection and interaction will help students think about academic preparation, communication, and curiosity-driven learning. The city-based educational exposure also adds a broader understanding of Hyderabad as a technology-oriented centre.",
      stay: "Hyderabad",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Research culture discussion",
        "Career guidance session",
        "Technology city exposure",
        "Group Q&A and recap"
      ],
      transport: {
        from: "Hotel",
        to: "Educational Technology Zone",
        mode: "bus",
        distance: "24 km",
        time: "1 hour"
      }
    },
    {
      day: 4,
      title: "Summary Session & Departure",
      subtitle: "Feedback, learning recap, and return transfer",
      description: "After breakfast, students will participate in a wrap-up session where they will discuss their major learnings from the tour, especially research discipline, innovation awareness, and engineering motivation. Feedback will be collected, followed by checkout and transfer for departure.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Learning summary session",
        "Feedback discussion",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Hyderabad Departure Point",
        mode: "bus",
        distance: "18 km",
        time: "45 mins"
      }
    }
  ]
},

// ================= CARD 5 =================
{
  title: "ISRO Space Science Educational Tour",
  location: "Bangalore",
  country: "India",
  image: {
  url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
  filename: "isro2"
},
  pricePerPerson: 5000,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-SPC-005",
  startingPoint: "Bangalore",
  availability: "available",

  description: "This 3-day educational tour is designed for students who want meaningful exposure to space science, astronomy awareness, satellite systems, and research-based learning. The package introduces learners to the importance of scientific inquiry, national space achievements, and the role of institutions in inspiring future careers in science and engineering. It combines museum-style learning, science orientation, academic discussion, and guided reflection so that students gain both conceptual understanding and career motivation.",

  aboutLocation: "Bangalore is India's leading hub for space science, aerospace, and research-based innovation. It is an ideal destination for students who want exposure to scientific institutions, astronomy learning, and technology-focused educational experiences.",

  nearbyPlaces: [
    "Planetarium",
    "Science Museum",
    "Tech Parks",
    "Research Centers"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Space Residency Bangalore",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "Bangalore Science Belt",
    stayNotes: "Comfortable student accommodation with faculty support rooms, clean stay environment, and basic study-friendly facilities."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Daily student meals with breakfast, lunch, dinner, and one South Indian speciality dinner during the package."
  },

  transport: {
    type: "bus",
    vehicleName: "35 Seater AC Coach",
    capacity: 35,
    pickupPoint: "Bangalore Station",
    dropPoint: "Bangalore Station",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "18 June 2026", seats: 35 },
    { date: "10 July 2026", seats: 40 }
  ],

  inclusions: [
    "2 nights student accommodation",
    "Daily breakfast, lunch, and dinner",
    "Local AC bus transport",
    "Planetarium visit",
    "Science museum exposure",
    "Academic orientation on space science",
    "Tour coordinator support",
    "Group learning session"
  ],

  exclusions: [
    "Train or flight tickets to Bangalore",
    "Personal shopping and snacks",
    "Travel insurance",
    "Medical emergency expenses"
  ],

  tourHighlights: [
    "Space science themed educational tour",
    "Astronomy and satellite awareness",
    "Planetarium-based concept learning",
    "Scientific career motivation",
    "Compact but highly informative academic package"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Faculty coordinator is mandatory for group travel",
    "Final visit flow may vary depending on operational availability",
    "Students must maintain discipline during all academic activities",
    "Reporting time and group movement rules must be followed"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Bangalore & Introduction to Space Science",
      subtitle: "Check-in, welcome briefing, and academic orientation",
      description: "On arrival in Bangalore, students will be transferred to the hotel and welcomed by the tour coordinator. After lunch, an orientation session will be conducted introducing them to the basics of space science, the role of research institutions, and India's progress in satellite and mission development. The session will help students understand how space science connects with physics, mathematics, and engineering.",
      stay: "Bangalore",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and check-in",
        "Welcome session",
        "Space science orientation",
        "Introductory career discussion"
      ],
      transport: {
        from: "Bangalore Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "16 km",
        time: "40 mins"
      }
    },
    {
      day: 2,
      title: "Planetarium & Science Learning Day",
      subtitle: "Astronomy awareness and scientific concept reinforcement",
      description: "After breakfast, students will visit a planetarium where they will experience an astronomy-based educational session designed to explain celestial movement, stars, planets, and the basics of observational science. Later, the group will explore a science museum to strengthen their understanding of engineering models, physics concepts, and interactive scientific learning. The day is structured to make abstract scientific ideas more visual and memorable.",
      stay: "Bangalore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Planetarium visit",
        "Astronomy learning session",
        "Science museum exploration",
        "Evening reflection discussion"
      ],
      transport: {
        from: "Hotel",
        to: "Science and Planetarium Circuit",
        mode: "bus",
        distance: "21 km",
        time: "55 mins"
      }
    },
    {
      day: 3,
      title: "Learning Wrap-up & Departure",
      subtitle: "Summary, feedback, and return journey",
      description: "On the final day, students will participate in a short academic recap session where they will discuss what they learned about space science, astronomy, and scientific careers. After breakfast and checkout, the group will be transferred for departure.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Learning recap",
        "Feedback collection",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Bangalore Departure Point",
        mode: "bus",
        distance: "16 km",
        time: "40 mins"
      }
    }
  ]
},

// ================= CARD 6 =================
{
  title: "Parliament & Governance Study Tour",
  location: "Delhi",
  country: "India",
  image: {
  url: "https://i0.wp.com/compass.rauias.com/wp-content/uploads/2023/08/indian-parliament-64eeedd4361f4.webp",
  filename: "parliament"
},
  pricePerPerson: 4200,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-GOV-006",
  startingPoint: "Delhi",
  availability: "available",

  description: "This educational governance tour is specially designed for students who want to understand the Indian parliamentary system, public administration, democratic values, and how national institutions function. The package introduces students to the importance of citizenship, constitutional awareness, leadership, and policy-making processes. It combines civic education, guided institutional understanding, national symbolism, and group discussions in a practical and memorable format.",

  aboutLocation: "Delhi is the capital city of India and the centre of governance, administration, and national policy-making. It is the ideal destination for educational tours related to democracy, public institutions, and civic awareness.",

  nearbyPlaces: [
    "India Gate",
    "National Museum",
    "Supreme Court",
    "Rajpath"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Capital Residency Delhi",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "Delhi Academic Area",
    stayNotes: "Secure student accommodation with simple facilities, clean rooms, and faculty-friendly support arrangement."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Simple hygienic student meals with breakfast, lunch, dinner, and tea support."
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Coach",
    capacity: 40,
    pickupPoint: "Delhi Station",
    dropPoint: "Delhi Station",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "20 June 2026", seats: 40 },
    { date: "15 July 2026", seats: 37 }
  ],

  inclusions: [
    "2 nights student accommodation",
    "Breakfast, lunch, and dinner",
    "Local AC bus transport",
    "Governance awareness session",
    "Civic education discussion",
    "Tour coordinator support",
    "Institutional orientation",
    "Group learning recap"
  ],

  exclusions: [
    "Train or flight tickets to Delhi",
    "Personal shopping and snacks",
    "Travel insurance",
    "Medical emergency expenses"
  ],

  tourHighlights: [
    "Governance and democracy themed educational tour",
    "Parliamentary system awareness",
    "Citizenship and civic responsibility learning",
    "National institution exposure",
    "Practical understanding of public administration"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Formal and decent academic dress is recommended",
    "Faculty supervision is mandatory throughout the tour",
    "Visit sequence may vary depending on permissions and institutional regulations",
    "Students must follow discipline and timing during all official movements"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Delhi & Introduction to Indian Governance",
      subtitle: "Check-in, welcome briefing, and civic awareness orientation",
      description: "Students will arrive in Delhi and transfer to the hotel. After lunch, an introductory session will explain the structure of Indian democracy, the role of Parliament, the importance of constitutional values, and how public institutions shape national life. The session will prepare students to observe governance not just as a topic in books but as a practical system connected to citizenship and leadership.",
      stay: "Delhi",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and hotel check-in",
        "Welcome briefing",
        "Governance orientation session",
        "Civic values discussion"
      ],
      transport: {
        from: "Delhi Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "15 km",
        time: "40 mins"
      }
    },
    {
      day: 2,
      title: "Governance Awareness & National Institution Learning Day",
      subtitle: "Understanding democratic systems and public administration",
      description: "After breakfast, students will participate in a guided learning day focused on the parliamentary system, public administration, leadership, and the symbolic importance of national institutions. The purpose is to help them understand how governance works in a structured way and why civic awareness is important in a democracy. Reflection in the evening will connect the day’s learning with responsible citizenship and academic understanding.",
      stay: "Delhi",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Governance awareness session",
        "National institution exposure",
        "Public administration discussion",
        "Evening civic reflection"
      ],
      transport: {
        from: "Hotel",
        to: "Central Governance Circuit",
        mode: "bus",
        distance: "12 km",
        time: "35 mins"
      }
    },
    {
      day: 3,
      title: "Civic Learning Recap & Departure",
      subtitle: "Summary session, feedback, and return transfer",
      description: "On the final day, students will discuss what they learned about democracy, citizenship, public systems, and national institutions. After breakfast and checkout, the group will depart with a stronger understanding of governance and civic responsibility.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Learning recap",
        "Feedback session",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Delhi Departure Point",
        mode: "bus",
        distance: "15 km",
        time: "40 mins"
      }
    }
  ]
},
// ================= CARD 7 =================
{
  title: "National Science Centre & Innovation Learning Tour",
  location: "Delhi",
  country: "India",
  image: {
    url: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    filename: "sciencecentre"
  },
  pricePerPerson: 3900,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-SCI-007",
  startingPoint: "Delhi",
  availability: "available",

  description: "This educational package is designed for students who want to strengthen their understanding of science through interactive exhibits, guided interpretation, innovation awareness, and concept-based learning. The tour combines science communication, visual demonstrations, academic reflection, and hands-on curiosity-building experiences so that students can connect textbook theory with real-world scientific models and discoveries.",

  aboutLocation: "Delhi offers some of India's best science communication spaces and educational institutions, making it a valuable destination for school and college students interested in concept-based science learning and innovation exposure.",

  nearbyPlaces: [
    "National Science Centre",
    "Pragati Maidan Area",
    "India Gate",
    "Educational Museum Circuit"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Innovation Stay Delhi",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "Educational Zone, Delhi",
    stayNotes: "Basic and safe student accommodation with faculty support, meal arrangement, and a comfortable group stay environment."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Daily student meals with balanced breakfast, lunch, dinner, and safe drinking water support."
  },

  transport: {
    type: "bus",
    vehicleName: "35 Seater AC Coach",
    capacity: 35,
    pickupPoint: "Delhi Railway Station / Airport",
    dropPoint: "Delhi Railway Station / Airport",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "22 June 2026", seats: 35 },
    { date: "06 July 2026", seats: 35 },
    { date: "20 July 2026", seats: 35 }
  ],

  inclusions: [
    "2 nights student accommodation",
    "Breakfast, lunch, and dinner",
    "Local AC bus transport",
    "Science centre visit",
    "Interactive exhibit learning",
    "Innovation awareness session",
    "Tour coordinator support",
    "Academic reflection discussion"
  ],

  exclusions: [
    "Train or flight tickets to Delhi",
    "Personal snacks and shopping",
    "Travel insurance",
    "Medical emergency expenses"
  ],

  tourHighlights: [
    "Interactive science themed educational tour",
    "Concept-based learning through exhibits",
    "Innovation and curiosity building",
    "Academic reinforcement of science topics",
    "Student-friendly science communication experience"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Faculty coordinator is mandatory for group travel",
    "Students must move in groups and follow discipline",
    "Restricted exhibits should not be touched without permission",
    "Reporting time and group movement rules must be followed"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Delhi & Science Learning Orientation",
      subtitle: "Check-in, welcome briefing, and introduction to concept-based learning",
      description: "Students will arrive in Delhi and be transferred to the hotel. After lunch, an introductory orientation session will explain how science centres and museums help students understand classroom concepts through visual models, demonstrations, and interactive exhibits. The evening discussion will prepare students to observe scientific displays in a more analytical and curious way.",
      stay: "Delhi",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and hotel check-in",
        "Welcome briefing",
        "Science learning orientation",
        "Introduction to exhibit-based education"
      ],
      transport: {
        from: "Delhi Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "14 km",
        time: "35 mins"
      }
    },
    {
      day: 2,
      title: "Science Centre Exploration & Innovation Discussion",
      subtitle: "Interactive scientific exposure and concept reinforcement",
      description: "After breakfast, students will spend the day exploring scientific models, engineering exhibits, innovation displays, and interactive educational zones. The experience is designed to reinforce learning in physics, biology, engineering, and environmental science. In the second half, students will participate in a guided discussion on innovation, scientific thinking, and how curiosity supports academic growth.",
      stay: "Delhi",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Science centre visit",
        "Interactive exhibit exploration",
        "Innovation awareness discussion",
        "Evening reflection session"
      ],
      transport: {
        from: "Hotel",
        to: "Science Centre",
        mode: "bus",
        distance: "11 km",
        time: "30 mins"
      }
    },
    {
      day: 3,
      title: "Learning Recap & Departure",
      subtitle: "Summary session, feedback, and return transfer",
      description: "On the final day, students will participate in a recap session where they will discuss the scientific principles, models, and innovations they explored during the tour. After breakfast and checkout, they will be transferred for departure.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Learning recap",
        "Student feedback session",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Delhi Departure Point",
        mode: "bus",
        distance: "14 km",
        time: "35 mins"
      }
    }
  ]
},

// ================= CARD 8 =================
{
  title: "BARC Nuclear Science Awareness & Research Learning Tour",
  location: "Mumbai",
  country: "India",
  image: {
    url: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
    filename: "barc"
  },
  pricePerPerson: 5200,
  duration: "4D/3N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-NUC-008",
  startingPoint: "Mumbai",
  availability: "available",

  description: "This educational tour is specially designed to introduce students to the fundamentals of nuclear science, energy awareness, scientific responsibility, and research-based national development. The package helps learners understand how advanced scientific institutions contribute to technology, safety, innovation, and future scientific careers. Through guided sessions, science learning activities, and reflective discussion, students gain a broader perspective on how science serves society and the nation.",

  aboutLocation: "Mumbai is home to some of India's most important scientific and research-linked institutions. It provides strong educational value for students interested in physics, energy systems, advanced science, and innovation-oriented learning.",

  nearbyPlaces: [
    "Nehru Science Centre",
    "Taraporewala Aquarium",
    "Marine Drive",
    "Scientific Institution Corridors"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Atomic Scholars Residency",
    roomType: "Triple Sharing",
    nights: 3,
    hotelAddress: "Research Belt, Mumbai",
    stayNotes: "Student group accommodation with secure surroundings, hygienic rooms, and faculty-friendly stay support."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Balanced student meal plan with breakfast, lunch, dinner, and refreshments during travel."
  },

  transport: {
    type: "bus",
    vehicleName: "35 Seater AC Educational Coach",
    capacity: 35,
    pickupPoint: "Mumbai Railway Station / Airport",
    dropPoint: "Mumbai Railway Station / Airport",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "02 July 2026", seats: 35 },
    { date: "16 July 2026", seats: 35 },
    { date: "30 July 2026", seats: 35 }
  ],

  inclusions: [
    "3 nights student accommodation",
    "Breakfast, lunch, and dinner",
    "Local AC bus transport",
    "Science and energy awareness session",
    "Educational science centre visit",
    "Research orientation discussion",
    "Tour coordinator support",
    "Participation certificate"
  ],

  exclusions: [
    "Train or flight tickets to Mumbai",
    "Personal shopping and snacks",
    "Travel insurance",
    "Medical emergency expenses",
    "Any extra activity outside itinerary"
  ],

  tourHighlights: [
    "Nuclear science themed educational tour",
    "Energy and safety awareness",
    "Advanced science exposure",
    "Research culture introduction",
    "Career motivation in science and engineering"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Faculty coordinator is mandatory",
    "Program schedule may vary depending on permissions and operational conditions",
    "Photography may be restricted in selected areas",
    "Students must maintain discipline throughout the tour"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Mumbai & Introduction to Scientific Research",
      subtitle: "Check-in, welcome session, and orientation to advanced science learning",
      description: "On arrival in Mumbai, students will be transferred to the hotel and welcomed by the tour coordinator. After lunch, an orientation session will introduce them to scientific research culture, energy awareness, and the importance of advanced institutions in national development. The evening discussion will focus on curiosity, discipline, and how science supports technological progress.",
      stay: "Mumbai",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and hotel check-in",
        "Welcome briefing",
        "Scientific research orientation",
        "Discussion on science and national development"
      ],
      transport: {
        from: "Mumbai Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "19 km",
        time: "55 mins"
      }
    },
    {
      day: 2,
      title: "Energy Awareness & Science Learning Day",
      subtitle: "Understanding atomic concepts and scientific responsibility",
      description: "After breakfast, students will participate in a guided educational day focused on basic nuclear science awareness, energy systems, scientific safety culture, and the importance of responsible innovation. Through concept-based learning and group interaction, students will connect classroom physics and science theory with real-world applications.",
      stay: "Mumbai",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Energy awareness session",
        "Scientific concept discussion",
        "Safety culture understanding",
        "Evening academic reflection"
      ],
      transport: {
        from: "Hotel",
        to: "Science Learning Circuit",
        mode: "bus",
        distance: "16 km",
        time: "45 mins"
      }
    },
    {
      day: 3,
      title: "Science Centre Enrichment & Career Motivation",
      subtitle: "Broadening scientific interest through guided exploration",
      description: "This day includes an educational science centre visit where students will observe innovation-linked exhibits, scientific demonstrations, and concept-based learning spaces. In the second half, a career-oriented session will help them understand future pathways in physics, engineering, research, and advanced technology domains.",
      stay: "Mumbai",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Science centre visit",
        "Interactive scientific learning",
        "Career guidance discussion",
        "Group Q&A and recap"
      ],
      transport: {
        from: "Hotel",
        to: "Educational Science Zone",
        mode: "bus",
        distance: "21 km",
        time: "1 hour"
      }
    },
    {
      day: 4,
      title: "Summary Session & Departure",
      subtitle: "Feedback, learning recap, and return transfer",
      description: "After breakfast, students will participate in a wrap-up session where they will discuss their major learnings about energy, scientific responsibility, research culture, and advanced science careers. Feedback will be collected, followed by checkout and transfer for departure.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Learning recap",
        "Feedback discussion",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Mumbai Departure Point",
        mode: "bus",
        distance: "19 km",
        time: "55 mins"
      }
    }
  ]
},

// ================= CARD 9 =================
{
  title: "Film City, Media Production & Communication Learning Tour",
  location: "Mumbai",
  country: "India",
  image: {
    url: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg",
    filename: "filmcity"
  },
  pricePerPerson: 4100,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-MED-009",
  startingPoint: "Mumbai",
  availability: "available",

  description: "This media-focused educational package is designed for students interested in communication, journalism, visual storytelling, media production, and creative industries. The tour introduces learners to the basics of media workflows, teamwork in content development, ethical communication, and how visual media influences society, education, and public awareness. It combines guided educational discussion, communication awareness, and structured observation in a career-oriented format.",

  aboutLocation: "Mumbai is India's media and entertainment capital. It provides rich educational value for students who want to understand communication industries, creative teamwork, production systems, and future opportunities in journalism and media studies.",

  nearbyPlaces: [
    "Film City Surroundings",
    "Gateway of India",
    "Marine Drive",
    "Media and Production Districts"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Creative Scholars Stay",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "Media Belt, Mumbai",
    stayNotes: "Student-friendly accommodation with hygienic rooms, safe group stay environment, and faculty support arrangement."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Daily breakfast, lunch, dinner, and refreshments during guided travel and educational sessions."
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Coach",
    capacity: 40,
    pickupPoint: "Mumbai Railway Station / Airport",
    dropPoint: "Mumbai Railway Station / Airport",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "08 July 2026", seats: 40 },
    { date: "22 July 2026", seats: 40 },
    { date: "05 August 2026", seats: 40 }
  ],

  inclusions: [
    "2 nights student accommodation",
    "Breakfast, lunch, and dinner",
    "Local AC bus transport",
    "Media industry awareness session",
    "Communication and storytelling discussion",
    "Tour coordinator support",
    "Career orientation interaction",
    "Participation certificate"
  ],

  exclusions: [
    "Train or flight tickets to Mumbai",
    "Personal shopping and snacks",
    "Travel insurance",
    "Medical emergency expenses"
  ],

  tourHighlights: [
    "Media and communication themed educational tour",
    "Understanding of content production systems",
    "Visual storytelling awareness",
    "Communication ethics and teamwork learning",
    "Career orientation for media and journalism students"
  ],

  packagePolicy: [
    "Students must carry valid school/college ID card",
    "Faculty supervision is mandatory",
    "Photography rules depend on location permissions",
    "Students must maintain professional behaviour during sessions",
    "Time discipline and group movement rules must be followed"
  ],

  cancellationPolicy: [
    "30 days before departure: 90% refund",
    "15 to 29 days before departure: 60% refund",
    "7 to 14 days before departure: 30% refund",
    "Less than 7 days before departure: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Mumbai & Introduction to Media Ecosystem",
      subtitle: "Check-in, welcome session, and communication industry orientation",
      description: "Students will arrive in Mumbai and transfer to the hotel. After lunch, an orientation session will introduce them to the world of media, journalism, visual storytelling, and content production. The discussion will focus on how communication industries work, the importance of teamwork, and how creative media influences society, education, and public awareness.",
      stay: "Mumbai",
      meals: ["Lunch", "Dinner"],
      activities: [
        "Arrival assistance and hotel check-in",
        "Welcome briefing",
        "Media ecosystem orientation",
        "Introduction to communication careers"
      ],
      transport: {
        from: "Mumbai Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "18 km",
        time: "50 mins"
      }
    },
    {
      day: 2,
      title: "Communication Learning & Media Workflow Awareness",
      subtitle: "Understanding storytelling, teamwork, and creative production",
      description: "After breakfast, students will participate in a guided educational day focused on media workflows, storytelling structure, team coordination, communication ethics, and audience engagement. The purpose is to help students understand how creative content is planned, produced, and presented. In the evening, the group will reflect on how communication skills support both academic and professional success.",
      stay: "Mumbai",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: [
        "Media workflow discussion",
        "Storytelling and communication awareness",
        "Creative teamwork understanding",
        "Evening reflection session"
      ],
      transport: {
        from: "Hotel",
        to: "Media Learning Circuit",
        mode: "bus",
        distance: "15 km",
        time: "40 mins"
      }
    },
    {
      day: 3,
      title: "Career Wrap-up & Departure",
      subtitle: "Summary session, feedback, and return transfer",
      description: "On the final day, students will participate in a wrap-up discussion covering media industries, communication skills, teamwork, creativity, and future pathways in journalism and visual communication. After breakfast and checkout, they will be transferred for departure.",
      stay: "",
      meals: ["Breakfast"],
      activities: [
        "Career wrap-up discussion",
        "Feedback collection",
        "Checkout",
        "Departure transfer"
      ],
      transport: {
        from: "Hotel",
        to: "Mumbai Departure Point",
        mode: "bus",
        distance: "18 km",
        time: "50 mins"
      }
    }
  ]
},
// ================= CARD 10 =================
{
  title: "IIT Delhi Campus & Engineering Exposure Tour",
  location: "Delhi",
  country: "India",
  image: {
    url: "https://m.economictimes.com/thumb/msid-70554771,width-1200,height-900,resizemode-4,imgsize-182198/iit-delhi-bccl.jpg",
    filename: "iit-delhi"
  },
  pricePerPerson: 4600,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-ENG-010",
  startingPoint: "Delhi",
  availability: "available",

  description: "This comprehensive educational tour is designed for students who aspire to pursue engineering from top institutions like IITs. The program provides deep exposure to campus life, academic discipline, competitive exam preparation mindset, and real-world engineering environments. Students will understand how IIT-level education works, what skills are required, and how to prepare strategically for future success.",

  aboutLocation: "IIT Delhi is one of India's most prestigious engineering institutes known for innovation, research excellence, and strong academic culture.",

  nearbyPlaces: [
    "Hauz Khas",
    "Qutub Minar",
    "South Delhi Academic Zone",
    "Research Institutes Area"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Scholars Residency Delhi",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "South Delhi Academic Area",
    stayNotes: "Safe student accommodation with faculty supervision and clean study-friendly environment."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Balanced hygienic meals including breakfast, lunch, dinner and drinking water support."
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Coach",
    capacity: 40,
    pickupPoint: "Delhi Station / Airport",
    dropPoint: "Delhi Station / Airport",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "25 June 2026", seats: 40 },
    { date: "12 July 2026", seats: 38 }
  ],

  inclusions: [
    "2 nights accommodation",
    "All meals",
    "Campus exposure session",
    "Engineering career guidance",
    "Transport",
    "Tour coordinator"
  ],

  exclusions: [
    "Travel tickets",
    "Personal expenses",
    "Insurance",
    "Medical costs"
  ],

  tourHighlights: [
    "IIT campus exposure",
    "Engineering career awareness",
    "Motivation for competitive exams",
    "Academic discipline understanding"
  ],

  packagePolicy: [
    "Student ID mandatory",
    "Faculty required",
    "Maintain discipline",
    "Follow schedule strictly"
  ],

  cancellationPolicy: [
    "30 days: 90% refund",
    "15–29 days: 60%",
    "7–14 days: 30%",
    "<7 days: No refund"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival & Engineering Orientation",
      subtitle: "Introduction to IIT and engineering career",
      description: "Students will arrive, check-in, and attend an orientation session explaining IIT ecosystem, competitive exams, and engineering career opportunities.",
      stay: "Delhi",
      meals: ["Lunch", "Dinner"],
      activities: ["Check-in", "Orientation", "Career discussion"],
      transport: {
        from: "Arrival Point",
        to: "Hotel",
        mode: "bus",
        distance: "15 km",
        time: "40 mins"
      }
    },
    {
      day: 2,
      title: "Campus Exposure",
      subtitle: "Understanding real IIT environment",
      description: "Students explore campus, understand academic culture, labs, and student life.",
      stay: "Delhi",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: ["Campus visit", "Academic discussion"],
      transport: {
        from: "Hotel",
        to: "Campus",
        mode: "bus",
        distance: "10 km",
        time: "30 mins"
      }
    },
    {
      day: 3,
      title: "Wrap-up & Departure",
      subtitle: "Learning summary",
      description: "Students recap learning and depart.",
      stay: "",
      meals: ["Breakfast"],
      activities: ["Feedback", "Departure"],
      transport: {
        from: "Hotel",
        to: "Departure Point",
        mode: "bus",
        distance: "15 km",
        time: "40 mins"
      }
    }
  ]
},

// ================= CARD 11 =================
{
  title: "AI & Robotics Innovation Learning Tour",
  location: "Bangalore",
  country: "India",
  image: {
    url: "https://aicertswpcdn.blob.core.windows.net/newsportal/2025/11/collaboration-in-robotics-lab.jpg",
    filename: "ai-robotics"
  },
  pricePerPerson: 5200,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-AI-011",
  startingPoint: "Bangalore",
  availability: "available",

  description: "This tour introduces students to artificial intelligence, robotics, automation, and emerging technologies. It provides conceptual clarity, industry awareness, and exposure to modern technological advancements.",

  aboutLocation: "Bangalore is India's IT hub and center for innovation, startups, and advanced technology research.",

  nearbyPlaces: [
    "Tech Parks",
    "Innovation Labs",
    "Startup Hubs"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Tech Residency",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "Bangalore IT Zone",
    stayNotes: "Comfortable student accommodation with basic facilities."
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Standard meals for students"
  },

  transport: {
    type: "bus",
    vehicleName: "35 Seater AC Coach",
    capacity: 35,
    pickupPoint: "Bangalore Station",
    dropPoint: "Bangalore Station",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "01 July 2026", seats: 35 },
    { date: "18 July 2026", seats: 35 }
  ],

  inclusions: ["Stay", "Meals", "AI sessions", "Transport"],
  exclusions: ["Travel tickets", "Personal expenses"],

  tourHighlights: [
    "AI awareness",
    "Robotics introduction",
    "Future tech exposure"
  ],

  packagePolicy: ["Student ID required"],

  cancellationPolicy: ["Standard"],

  itinerary: [
    {
      day: 1,
      title: "Arrival & AI Introduction",
      subtitle: "Understanding modern technology",
      description: "Intro session on AI and robotics.",
      stay: "Bangalore",
      meals: ["Lunch", "Dinner"],
      activities: ["Orientation"],
      transport: { from: "Station", to: "Hotel", mode: "bus", distance: "12 km", time: "30 mins" }
    },
    {
      day: 2,
      title: "Technology Exposure",
      subtitle: "AI & Robotics learning",
      description: "Discussion and exposure to AI systems.",
      stay: "Bangalore",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: ["Session"],
      transport: { from: "Hotel", to: "Tech Zone", mode: "bus", distance: "15 km", time: "40 mins" }
    },
    {
      day: 3,
      title: "Departure",
      subtitle: "Wrap-up",
      description: "End of tour.",
      stay: "",
      meals: ["Breakfast"],
      activities: ["Departure"],
      transport: { from: "Hotel", to: "Station", mode: "bus", distance: "12 km", time: "30 mins" }
    }
  ]
},

// ================= CARD 12 =================
{
  title: "Supreme Court & Legal Awareness Study Tour",
  location: "Delhi",
  country: "India",
  image: {
    url: "https://i0.wp.com/electroniccitycredence.in/wp-content/uploads/2024/05/Legallaw1.jpg?ssl=1",
    filename: "supreme-court"
  },
  pricePerPerson: 4000,
  duration: "3D/2N",
  packageType: "Student Special",
  category: "Educational Tour",
  tourCode: "EDU-LAW-012",
  startingPoint: "Delhi",
  availability: "available",

  description: "This tour helps students understand the Indian judiciary system, law awareness, constitutional values, and legal processes.",

  aboutLocation: "Delhi is the center of India's legal system, housing Supreme Court and major legal institutions.",

  nearbyPlaces: [
    "Supreme Court",
    "India Gate",
    "National Museum"
  ],

  mealsIncluded: true,
  sightseeingIncluded: true,
  hotelIncluded: true,
  transportIncluded: true,

  hotel: {
    hotelName: "Legal Residency",
    roomType: "Triple Sharing",
    nights: 2,
    hotelAddress: "Central Delhi",
    stayNotes: "Safe student stay"
  },

  meals: {
    breakfast: true,
    lunch: true,
    dinner: true,
    mealPlan: "Standard meals"
  },

  transport: {
    type: "bus",
    vehicleName: "40 Seater AC Coach",
    capacity: 40,
    pickupPoint: "Delhi Station",
    dropPoint: "Delhi Station",
    driverIncluded: true,
    fuelIncluded: true
  },

  departureBatches: [
    { date: "28 June 2026", seats: 40 }
  ],

  inclusions: ["Stay", "Meals", "Transport"],
  exclusions: ["Personal expenses"],

  tourHighlights: ["Legal awareness", "Judiciary understanding"],

  packagePolicy: ["ID required"],

  cancellationPolicy: ["Standard"],

  itinerary: [
    {
      day: 1,
      title: "Arrival",
      subtitle: "Intro to legal system",
      description: "Legal awareness intro.",
      stay: "Delhi",
      meals: ["Lunch", "Dinner"],
      activities: ["Session"],
      transport: { from: "Station", to: "Hotel", mode: "bus", distance: "10 km", time: "30 mins" }
    },
    {
      day: 2,
      title: "Judiciary Study",
      subtitle: "Understanding court system",
      description: "Learning about judiciary.",
      stay: "Delhi",
      meals: ["Breakfast", "Lunch", "Dinner"],
      activities: ["Visit"],
      transport: { from: "Hotel", to: "Court", mode: "bus", distance: "8 km", time: "20 mins" }
    },
    {
      day: 3,
      title: "Departure",
      subtitle: "End",
      description: "Return.",
      stay: "",
      meals: ["Breakfast"],
      activities: ["Departure"],
      transport: { from: "Hotel", to: "Station", mode: "bus", distance: "10 km", time: "30 mins" }
    }
  ]
}
];

module.exports = listings;