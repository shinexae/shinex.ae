import info from "./companyInfo";

export const whyUsList: IconInterface[] = [
  {
    title: "Expert Team",
    icon: "/icons/car.svg",
  },
  {
    title: "100% Guaranty",
    icon: "/icons/guaranty.svg",
  },
  {
    title: "Best Equipment",
    icon: "/icons/equipment.svg",
  },
  {
    title: "24/7 Support",
    icon: "/icons/247.svg",
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
  paragraphs: [
    `
  Welcome to ShineX Car Wash! Our mission is to provide you
              with the highest quality car washing and detailing services in the
              area. We believe that your car deserves to look its best, and
              we're dedicated to making that happen.
  `,
    `
At ShineX, we use only the best equipment and products to
              clean and detail your vehicle. Our team of trained professionals
              takes pride in their work and strives to exceed your expectations
              with every visit. We offer a wide range of services, from basic
              car washes to full detailing packages, so you can choose the level
              of care that's right for your vehicle.
  `,
    `
   We know that your time is valuable, which is why we offer fast and
              efficient service without compromising on quality. Our convenient
              location and flexible hours make it easy for you to fit a car wash
              into your busy schedule. Plus, with our competitive pricing and
              loyalty program, you can enjoy great savings on your car wash
              services.
  `,
    `
  Thank you for choosing ShineX Car Wash. We look forward to
              helping you keep your car looking its best!
  `,
  ],
};

export const windowTintingContent = [
  {
    icon: "/icons/preserve.svg",
    title: "Preserve",
    description: "Furniture, floors & artwork from fading",
  },
  {
    icon: "/icons/reduce_stat.svg",
    title: "Reduce",
    description: "Glare reduction Up To 94%",
  },
  {
    icon: "/icons/protect.svg",
    title: "Protect",
    description: "Your loved ones from the ultraviolet rays",
  },
  {
    icon: "/icons/reduce_heat.svg",
    title: "Reduce",
    description: "Sun Heat Without Losing Natural Light",
  },
  {
    icon: "/icons/save.svg",
    title: "Save",
    description: "On Energy Costs",
  },
  {
    icon: "/icons/add.svg",
    title: "Add",
    description: "Decorative Film For Privacy",
  },
];

export const socialMediaLinks: LinkProps[] = [
  {
    name: "whatsapp",
    image: "/icons/whatsapp.svg",
    url: info.social.whatsapp,
  },
  {
    name: "instagram",
    image: "/icons/instagram.svg",
    url: info.social.instagram,
  },
  {
    name: "facebook",
    image: "/icons/facebook.svg",
    url: info.social.facebook,
  },
  {
    name: "twitter",
    image: "/icons/twitter.svg",
    url: info.social.twitter,
  },
  {
    name: "email",
    image: "/icons/email.svg",
    url: `mailto:${info.social.email}`,
  },
];

export const servicesFooter = [
  {
    title: "Car Tinting",
    icon: "/icons/car_tinting.svg",
  },
  {
    title: "Car Polishing",
    icon: "/icons/car_polishing.png",
  },
  {
    title: "Car Washing",
    icon: "/icons/car_washing.png",
  },
];

export const contactFooter = [
  {
    title: "+971-50-503-0056",
    icon: "/icons/phone.svg",
  },
  {
    title: "Shinex.ae@gmail.com",
    icon: "/icons/email_outlined.svg",
  },
  {
    title: "Dubai City",
    icon: "/icons/location.svg",
  },
];

export const faq = [
  {
    question: "What Is Window Film?",
    answer: `
      Window film is a thin material that is applied to windows.
It can come in various types, such as tinted, decorative, or security film.
It is used to provide various benefits, such as reducing heat and glare, increasing privacy, and improving security.
      `,
  },
  {
    question: "What Are The Benfits Of Window Film?",
    answer: `
      Window film provides several benefits such as reducing heat and glare from the sun, protecting against UV rays, increasing privacy, improving security, and enhancing the aesthetics of a building.
It can also help to lower energy costs by reducing the need for air conditioning, and can provide shatterproof protection during natural disasters or break-ins.
Overall, window film is a cost-effective and practical solution for improving the comfort, safety, and efficiency of homes and buildings.
      `,
  },
  {
    question: "What Do The Diffrent Levels Of Film Mean?",
    answer: `
      Different levels of window film refer to the amount of light that the film allows to pass through it.
This is typically measured as a percentage, with lower percentages indicating darker, more opaque film and higher percentages indicating lighter, more transparent film.
The choice of film level depends on personal preference, as well as the desired level of privacy, heat reduction, and glare control.
      `,
  },
  {
    question: "Is The Tint Applaied On Outside Of The Window?",
    answer: `
      It depends on the type of window film being used.
Traditional solar control films are usually applied to the inside of the window, while some types of security films and decorative films may be applied to the outside.
However, a professional installer can advise on the best installation method for a particular type of film and specific window.
      `,
  },
];

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

export const tintingPackages = [
  {
    title: "ROAD POW",
    menu: ["2 years warranty", "Heat insulation up to 65%", "Made in USA"],
    prices: {
      sm: 40,
      lg: 50,
    },
    type: "Normal",
  },
  {
    title: "Nano CERAMIC",
    menu: [
      "5 years warranty",
      "Heat insulation up to 80%",
      "Made in USA",
      "Clear from Inside",
      "Dark from outside",
    ],
    prices: {
      sm: 70,
      lg: 90,
    },
    type: "RECOMMENDED",
  },
  {
    title: "3M",
    menu: [
      "10 years warranty",
      "Heat insulation up to 90%",
      "Made in USA",
      "Clear from Inside",
      "Dark from outside",
    ],
    prices: {
      sm: 130,
      lg: 150,
    },
    type: "SPECIAL",
  },
  {
    title: "Ceramic",
    menu: [
      "Lifetime warranty",
      "Heat insulation up to 80%",
      "Made in USA",
      "Clear from Inside",
      "Dark from outside",
    ],
    prices: {
      sm: 250,
      lg: 300,
    },
    type: "VIP",
  },
];

export const polishingPackages = [
  {
    title: "(SHINING) PACKAGE",
    menu: [
      "Only shining step",
      "Headlights polishing",
      "Restore color & luster",
      "Special treatment for (scratches & spots)",
      "(3) Months warranty",
    ],
    prices: {
      sm: 130,
      lg: 150,
    },
  },
  {
    title: "(SCRATCHES) Package",
    menu: [
      "Only scratches step",
      "Headlights polishing",
      "Restore color & luster",
      "Special treatment for (scratches & spots)",
      "(3) Months warranty",
    ],
    prices: {
      sm: 130,
      lg: 150,
    },
  },
  {
    title: "POLISH Package",
    menu: [
      "Full car polishing",
      "Headlights polishing",
      "Restore color & luster",
      "Special treatment for (shining)",
      "Special treatment for (scratches & spots)",
      "Professional polish with multiple steps",
      "(6) Months warranty",
    ],
    prices: {
      sm: 130,
      lg: 150,
    },
  },
  {
    title: "FULL Package",
    menu: [
      "Full car polishing",
      "Headlights polishing",
      "Restore color & luster",
      "Special treatment for (shining)",
      "Special treatment for (scratches & spots)",
      "Professional polish with multiple steps",
      "(6) Months warranty",
      "Platinum package wash",
      "Inflate air in tyre's",
    ],
    prices: {
      sm: 250,
      lg: 300,
    },
  },
];

export const washingPackages = [
  {
    title: "STANDARD PACKAGE",
    menu: [
      "Exterior Washing",
      "Interior Washing",
      "Tyre`s & Rims Polishing",
      "Sanitizing, Perfuming & Drying",
      "Cleaning The A/C Slots",
      "Interior Polishing",
    ],
    prices: {
      sm: 40,
      lg: 50,
    },
  },
  {
    title: "Premium Package",
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
    title: "Gold Package",
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
    title: "Platinum Package",
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

export const services: ServiceInterface[] = [
  {
    title: "Tinting",
    description:
      "Automotive Window tints/film are an absolute necessity for every Pakistani car owner. The deduction of heat by a good tint drastically improves the comfort of a vehicle. Apart from the heat, tints come in a variety of shades ranging from clear to dark. So if one wanted privacy with the heat control they could opt for either a dark of clear shade.",
    image: "/images/car_tenting.webp",
    packages: tintingPackages,
  },
  {
    title: "Polishing",
    description:
      "It is essential to keep the vehicle clean through car detailing services in Dubai to ensure health safety of the passengers. The car detailing services helps us in keeping our image positive along with removing health risks that a dirty car poses to our lives. Driving a spotless car also helps us in maintaining a pleasant image in front of others.",
    image: "/images/car_polishing.webp",
    packages: polishingPackages,
  },
  {
    title: "Washing",
    description:
      "LA professional car wash takes care of all of your car's parts what you can and can not see. With innovative, agile, and comprehensive car wash services, we will bring you back to the memory of your first day with the car. And the best part? Calling us would be very convenient because we'll bring everything to you, so you can go about your daily life while your car gets cleaned at a location that's suitable for you.",
    image: "/images/car_washing.webp",
    packages: washingPackages,
  },
];
