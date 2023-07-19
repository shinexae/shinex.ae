import site from "./companyInfo";

export const tintingPackages = [
  {
    title: "ROAD POWER",
    menu: ["box1_p1", "box1_p2", "box1_p3"],
    prices: {
      sm: 300,
      lg: 350,
    },
    type: "Normal",
  },
  {
    title: "Nano CERAMIC",
    menu: ["box2_p1", "box2_p2", "box2_p3", "box2_p4", "box2_p5"],

    prices: {
      sm: 550,
      lg: 600,
    },
    type: "RECOMMENDED",
  },
  {
    title: "NISMO COOL",
    menu: ["box3_p1", "box3_p2", "box3_p3", "box3_p4", "box3_p5"],

    prices: {
      sm: 850,
      lg: 900,
    },
    type: "SPECIAL",
  },
  {
    title: "3M",
    menu: ["box4_p1", "box4_p2", "box4_p3", "box4_p4", "box4_p5"],

    prices: {
      sm: 1700,
      lg: 1750,
    },
    type: "VIP",
  },
];

export const polishingPackages = [
  {
    title: "WAX",
    menu: ["box1_p1", "box1_p2"],
    prices: {
      sm: 100,
      lg: 120,
    },
  },
  {
    title: "STEP1",
    menu: ["box2_p1", "box2_p2", "box2_p3", "box2_p4", "box2_p5"],
    prices: {
      sm: 200,
      lg: 250,
    },
  },
  {
    title: "STEP2",
    menu: ["box3_p1", "box3_p2", "box3_p3", "box3_p4", "box3_p5"],
    prices: {
      sm: 200,
      lg: 250,
    },
  },
  {
    title: "FULL",
    menu: [
      "box4_p1",
      "box4_p2",
      "box4_p3",
      "box4_p4",
      "box4_p5",
      "box4_p6",
      "box4_p7",
      "box4_p8",
      "box4_p9",
    ],

    prices: {
      sm: 400,
      lg: 500,
    },
  },
];

export const washingPackages = [
  {
    title: "Standard",
    menu: [1, 2, 3, 4, 5],

    prices: {
      sm: 40,
      lg: 50,
    },
  },
  {
    title: "Premium",
    menu: [
      "Exterior Washing",
      "Interior Washing",
      "Tyre`s & Rims Polishing",
      "Sanitizing, Perfuming & Drying",
      "Cleaning The A/C Slots",
      "Interior Polishing",
      "Interior Stain Removal",
      "Quick Waxing 7 Day`s Shine",
    ],
    prices: {
      sm: 70,
      lg: 90,
    },
  },
  {
    title: "Gold",
    menu: [
      "Exterior Washing",
      "Interior Washing",
      "Tyre`s & Rims Polishing",
      "Sanitizing, Perfuming & Drying",
      "Cleaning The A/C Slots",
      "Interior Polishing",
      "Interior Stain Removal",
      "Engine Washing & Polishing",
      "Internal Plastic Bagging",
      "Quick Waxing 12 Day`s Shine",
    ],
    prices: {
      sm: 130,
      lg: 150,
    },
  },
  {
    title: "Platinum",
    menu: [
      "Exterior Washing",
      "Interior Washing",
      "Tyre`s & Rims Polishing",
      "Sanitizing, Perfuming & Drying",
      "Cleaning The A/C Slots",
      "Interior Polishing",
      "Interior Stain Removal",
      "Engine Washing & Polishing",
      "Internal Plastic Bagging",
      "External Plastic Bagging",
      "Headlights Permanetly Restoration",
      "Inflate Air in Tyre`s",
      "Quick Waxing 12 Day`s Shine",
    ],
    prices: {
      sm: 250,
      lg: 300,
    },
  },
];

export const ceramicPackages = [
  {
    title: "box1_h2",
    menu: [1, 2, 3],

    prices: {
      sm: 1700,
      lg: 1800,
    },
  },
];

export const whyUsList: IconInterface[] = [
  {
    title: "expertTeam",
    icon: "/icons/car.svg",
  },
  {
    title: "guaranty",
    icon: "/icons/guaranty.svg",
  },
  {
    title: "equipment",
    icon: "/icons/equipment.svg",
  },
  {
    title: "support",
    icon: "/icons/247.svg",
  },
];

export const services: ServiceInterface[] = [
  {
    title: "tinting",
    description:
      "Automotive Window tints/film are an absolute necessity for every Pakistani car owner. The deduction of heat by a good tint drastically improves the comfort of a vehicle. Apart from the heat, tints come in a variety of shades ranging from clear to dark. So if one wanted privacy with the heat control they could opt for either a dark of clear shade.",
    image: "/images/car_tenting.webp",
    packages: tintingPackages,
    url: "/tinting",
  },
  {
    title: "polishing",
    description:
      "It is essential to keep the vehicle clean through car detailing services in Dubai to ensure health safety of the passengers. The car detailing services helps us in keeping our image positive along with removing health risks that a dirty car poses to our lives. Driving a spotless car also helps us in maintaining a pleasant image in front of others.",
    image: "/images/car_polishing.webp",
    packages: polishingPackages,
    url: "/polishing",
  },
  {
    title: "washing",
    description:
      "LA professional car wash takes care of all of your car's parts what you can and can not see. With innovative, agile, and comprehensive car wash services, we will bring you back to the memory of your first day with the car. And the best part? Calling us would be very convenient because we'll bring everything to you, so you can go about your daily life while your car gets cleaned at a location that's suitable for you.",
    image: "/images/car_washing.webp",
    packages: washingPackages,
    url: "/washing",
  },
  {
    title: "ceramic",
    description:
      "Nano coating is the application of an additional layer on the exterior surface of a vehicle that forms a protective barrier against dust, water, oil and even dirt. nano coating even make the exterior surface of a vehicle resistant to minor scratches and make the car always shiny.",
    image: "/images/ceramic.webp",
    packages: ceramicPackages,
    url: "/ceramic",
  },
];

export const specialServicesList: IconInterface[] = [
  {
    title: "Caravans",
    icon: "/icons/caravan.svg",
    cta: () => {},
  },
  {
    title: "Boats",
    icon: "/icons/boat.svg",
    cta: () => {},
  },
  {
    title: "Bikes",
    icon: "/icons/bike.svg",
    cta: () => {},
  },
];

export const mobileServicesContent = {
  title: "Mobile Services",
  subtitle: "TINT, POLISH, WASH YOUR CAR AT YOUR DOORSTEP",
  desciption:
    "Shinex is a mobile fleet that provides high quality vehicle services to your doorstep. Requesting a mobile team is a convenient way to keep your vehicle in top condition. With us, you can specify the time and place to service your vehicle.",
  btnText: "Book a mobile service",
  cta: () => {},
};

export const aboutSection = {
  paragraphs: [`AboutUs_P1`, `AboutUs_P2`],
};

export const windowTintingContent = [
  {
    icon: "/icons/preserve.svg",
    title: "preserve",
    description: "Furniture, floors & artwork from fading",
  },
  {
    icon: "/icons/reduce_stat.svg",
    title: "reduce",
    description: "Glare reduction Up To 94%",
  },
  {
    icon: "/icons/protect.svg",
    title: "protect",
    description: "Your loved ones from the ultraviolet rays",
  },
  {
    icon: "/icons/reduce_heat.svg",
    title: "reduce",
    description: "Sun Heat Without Losing Natural Light",
  },
  {
    icon: "/icons/save.svg",
    title: "save",
    description: "On Energy Costs",
  },
  {
    icon: "/icons/add.svg",
    title: "add",
    description: "Decorative Film For Privacy",
  },
];

export const socialMediaLinks: LinkProps[] = [
  {
    name: "instagram",
    image: "/icons/instagram.svg",
    url: site.social.instagram,
  },
  {
    name: "facebook",
    image: "/icons/facebook.svg",
    url: site.social.facebook,
  },
  {
    name: "whatsapp",
    image: "/icons/whatsapp.svg",
    url: site.social.whatsapp,
  },
  {
    name: "twitter",
    image: "/icons/twitter.svg",
    url: site.social.twitter,
  },
  {
    name: "email",
    image: "/icons/email.svg",
    url: `mailto:${site.social.email}`,
  },
];

export const servicesFooter = [
  {
    title: "tinting",
    icon: "/icons/car_tinting.svg",
    cta: "/tinting",
  },
  {
    title: "polishing",
    icon: "/icons/car_polishing.png",
    cta: "/polishing",
  },
  {
    title: "washing",
    icon: "/icons/car_washing.png",
    cta: "/washing",
  },
];

export const contactFooter = [
  {
    title: "+971-50-503-0056",
    icon: "/icons/phone.svg",
    cta: "tel:+971-50-503-0056",
  },
  {
    title: "Shinex.ae@gmail.com",
    icon: "/icons/email_outlined.svg",
    cta: "mailto:Shinex.ae@gmail.com",
  },
  {
    title: "Dubai City",
    icon: "/icons/location.svg",
    cta: "https://www.google.com/maps/place/Burj+Khalifa+-+1+Sheikh+Mohammed+bin+Rashid+Blvd+-+Downtown+Dubai+-+Dubai+-+United+Arab+Emirates/@25.197197,55.2743764,15z/data=!4m6!3m5!1s0x3e5f43348a67e24b:0xff45e502e1ceb7e2!8m2!3d25.197197!4d55.2743764!16zL20vMDNjbjB2",
  },
];

export const faq = {
  general: [
    {
      question: "general_h2_1",
      answer: `general_p_1`,
    },
    {
      question: "general_h2_2",
      answer: `general_p_2`,
    },
    {
      question: "general_h2_3",
      answer: `general_p_3`,
    },
    {
      question: "general_h2_4",
      answer: `general_p_4`,
    },
    {
      question: "general_h2_5",
      answer: `general_p_5`,
    },
    {
      question: "general_h2_6",
      answer: `general_p_6`,
    },
  ],
  polishing: [
    {
      question: "Polishing_h2_1",
      answer: `Polishing_p_1`,
    },
    {
      question: "Polishing_h2_2",
      answer: `Polishing_p_2`,
    },
    {
      question: "Polishing_h2_3",
      answer: `Polishing_p_3`,
    },
    {
      question: "Polishing_h2_4",
      answer: `Polishing_p_4`,
    },
    {
      question: "Polishing_h2_5",
      answer: `Polishing_p_5`,
    },
  ],
  autoTinting: [
    {
      question: "AutoTinting_h2_1",
      answer: `AutoTinting_p_1`,
    },
    {
      question: "AutoTinting_h2_2",
      answer: `AutoTinting_p_2`,
    },
    {
      question: "AutoTinting_h2_3",
      answer: `AutoTinting_p_3`,
    },
    {
      question: "AutoTinting_h2_4",
      answer: `AutoTinting_p_4`,
    },
    {
      question: "AutoTinting_h2_5",
      answer: `AutoTinting_p_5`,
    },
    {
      question: "AutoTinting_h2_6",
      answer: `AutoTinting_p_6`,
    },
    {
      question: "AutoTinting_h2_7",
      answer: `AutoTinting_p_7`,
    },
    {
      question: "AutoTinting_h2_8",
      answer: `AutoTinting_p_8`,
    },
    {
      question: "AutoTinting_h2_9",
      answer: `AutoTinting_p_9`,
    },
    {
      question: "AutoTinting_h2_10",
      answer: `AutoTinting_p_10`,
    },
    {
      question: "AutoTinting_h2_11",
      answer: `AutoTinting_p_11`,
    },
    {
      question: "AutoTinting_h2_12",
      answer: `AutoTinting_p_12`,
    },
    {
      question: "AutoTinting_h2_13",
      answer: `AutoTinting_p_13`,
    },
    {
      question: "AutoTinting_h2_14",
      answer: `AutoTinting_p_14`,
    },
    {
      question: "AutoTinting_h2_15",
      answer: `AutoTinting_p_15`,
    },
    {
      question: "AutoTinting_h2_16",
      answer: `AutoTinting_p_16`,
    },
  ],
  recidentialAndCommercial: [
    {
      question: "recidential_commercial_h2_1",
      answer: `recidential_commercial_p_1`,
    },
    {
      question: "recidential_commercial_h2_2",
      answer: `recidential_commercial_p_2`,
    },
    {
      question: "recidential_commercial_h2_3",
      answer: `recidential_commercial_p_3`,
    },
    {
      question: "recidential_commercial_h2_4",
      answer: `recidential_commercial_p_4`,
    },
  ],
  paintProtectionFilm: [
    {
      question: "paint_protection_film_h2_1",
      answer: `paint_protection_film_p_1`,
    },
    {
      question: "paint_protection_film_h2_2",
      answer: `paint_protection_film_p_2`,
    },
    {
      question: "paint_protection_film_h2_3",
      answer: `paint_protection_film_p_3`,
    },
    {
      question: "paint_protection_film_h2_4",
      answer: `paint_protection_film_p_4`,
    },
    {
      question: "paint_protection_film_h2_5",
      answer: `paint_protection_film_p_5`,
    },
    {
      question: "paint_protection_film_h2_6",
      answer: `paint_protection_film_p_6`,
    },
    {
      question: "paint_protection_film_h2_7",
      answer: `paint_protection_film_p_7`,
    },
    {
      question: "paint_protection_film_h2_8",
      answer: `paint_protection_film_p_8`,
    },
    {
      question: "paint_protection_film_h2_9",
      answer: `paint_protection_film_p_9`,
    },
  ],
};

export const reviews = [
  {
    title: "Excellent service",
    stars: 5,
    description:
      "Most professional staff and excellent service. Tinted my Range Rover and they did an amazing job in very fast timeframe. They have wide range of products and you'll get the best advice",
    author: "Youcef Alsaadi",
  },
  {
    title: "Highly recommend",
    stars: 5,
    description:
      "Greatest, most professional car care center in this area, highly recommend",
    author: "Saif Alothman",
  },
  {
    title: "Amazing and understandable management",
    stars: 5,
    description:
      "Amazing and understandable management. Top quality material, professional experienced, talented and passionate",
    author: "Abduliah Al-Argawy",
  },
  {
    title: "Very reasonable price",
    stars: 5,
    description:
      "Highly recommended. Love their services, Came for tenting and got more than i expected for a very reasonable price",
    author: "Tarek Kharma",
  },
  {
    title: "Very professional and neat",
    stars: 5,
    description:
      "I really loved how they tinted my car it was very professional and neat. The staff is very friendly and helpful. I do recommend you shinex as your tint mechanic",
    author: "Tabish Vanti",
  },
  {
    title: "High quality",
    stars: 5,
    description:
      "The best service is done and the tent is high-quality big thanks to Mr. Ahmed for his care and nice attitude",
    author: "Soud Ayman",
  },
  {
    title: "Variety of windows tinting",
    stars: 5,
    description:
      "A variety of windows tinting and paint protection is offered, but you'll have to book first",
    author: "Asad Abbas",
  },
  {
    title: "Recommend 10/10",
    stars: 5,
    description:
      "Recently had my car at shinex and the work they did on the car was amazing! Recommend 10/10",
    author: "Eyad Sager",
  },
];

export const tabs = [
  {
    title: "Polishing",
    content: faq.polishing,
  },
  {
    title: "AutoTinting",
    content: faq.autoTinting,
  },
  {
    title: "recidential_commercial",
    content: faq.recidentialAndCommercial,
  },
  {
    title: "paint_protection_film",
    content: faq.paintProtectionFilm,
  },
];
