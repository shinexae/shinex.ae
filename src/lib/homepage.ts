import site from "./companyInfo";

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
    url: site.social.whatsapp,
  },
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
    title: "Tinting",
    icon: "/icons/car_tinting.svg",
    cta: "#Tinting",
  },
  {
    title: "Polishing",
    icon: "/icons/car_polishing.png",
    cta: "#Polishing",
  },
  {
    title: "Washing",
    icon: "/icons/car_washing.png",
    cta: "#Washing",
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
      question: "What is window film?",
      answer: `
Window film is a thin, multi-layered polyester material that incorporates the many different layers to control different properties, including Ultra-Violet (UV) light, heat, glare, and privacy. Window film comes in a variety of performance levels and shades.
      `,
    },
    {
      question: "What are the benefits of window film?",
      answer: `

The many benefits of window film include eye comfort, UV protection, aesthetics, and increased safety, privacy, and energy savings.
      `,
    },
    {
      question: "What do the different levels of film mean?",
      answer: `
Film percentages stand for light transmission, or the amount of light that is allowed through the film. The lower the percentage, the darker the film.
      `,
    },
    {
      question: "Is the tint applied on the outside of the window?",
      answer: `

No. In most cases, window film is installed on the inside of the glass. This allows for maximum durability. On vehicles, the window tint is hand-cut on the outside of the glass, then installed on the interior of the glass.
      `,
    },
    {
      question: "I just had my windows tinted, why do they look hazy?",
      answer: `

The moisture that remains between the film and the glass after installation can cause a hazy, streaky, blotchy appearance. It takes several days for the adhesive/film to completely cure. The remaining moisture will evaporate through the film; depending on the type of film, this process may take a couple of days, or even a couple of months. When the water evaporates completely, your windows should have excellent clarity.
      `,
    },
    {
      question:
        "What should I use to clean my windows after I’ve had them tinted?",
      answer: `

After window film installation, wait a week before cleaning the inside of the window where the film was installed. After a week, use a window cleaner without ammonia and a soft cloth or rubber squeegee. We recommend foam cleaners because they do not streak, and are usually ammonia-free. Never scrape the film with any type of blade or clean your tinted windows with anything abrasive, as it will scratch the film.
      `,
    },
    {
      question: "What causes window film to turn purple?",
      answer: `

The window film used by Glass Tint USA has the technology to make film color stable, thus carrying a lifetime warranty that guarantees no color change. This means that our window films do not turn purple like the cheap films sold in other shops or auto parts stores. Please see our Lifetime Limited Warranty for more information.
      `,
    },
    {
      question: "If my window film is damaged, can it be fixed?",
      answer: `

Damaged window film cannot be repaired, but the damaged piece of film can be removed and the glass can be retinted.
      `,
    },
    {
      question: "Does window film prevent glass from breaking?",
      answer: `

No, window film does not prevent glass from breaking. Window film does increase the safety of the glass; due to a very aggressive adhesive, the film helps to hold the pieces of broken glass together. In the event the glass breaks, due to an auto accident, a person running into it, or an attempted break-in, the glass will shatter, but in most instances, the film will help keep the glass together.
      `,
    },
    {
      question: "Can window film increase safety and security?",
      answer: `

Yes, window film adds a degree of shatter resistance to the glass areas of your home, building, or vehicle. These films bond to glass and help hold dangerous glass fragments in place, should breakage occur due to accident, natural disaster, or illegal entry.
      `,
    },
    {
      question: "Does blocking UV rays help prevent fading and deterioration?",
      answer: `

Yes. The same sun that brightens a room’s interior can be detrimental to fabrics, furnishings, artwork, and rugs. Ultraviolet rays are the main cause of both fade and deterioration. Window films can screen out 99% of the damaging UV rays that can fade richly colored furniture, tapestries, and artwork. Heat and light also play a part in fading, but using window film to block nearly 100% of UV rays will increase the life of your personal property for years.
      `,
    },
    {
      question: "Can window film help with privacy?",
      answer: `


Yes. Window films give a clear view to the outside. Depending on the degree of privacy desired, you can select films that prevent others from looking in during the daytime.
      `,
    },
    {
      question: "How long does it take to tint my vehicle?",
      answer: `

The amount of time varies, depending on your type of vehicle. A complete car can take 2 to 4 hours. Full-sized trucks generally take between an hour and an hour and a half. A set of front doors usually only takes 30-45 minutes. If old aftermarket film has to be removed, that can add anywhere from 30 minutes to half a day.
      `,
    },
    {
      question: "Can window film reduce glare?",
      answer: `

Yes. Glare not only can cause eye fatigue, but it can also be dangerous when driving. It reduces the amount of light allowed through the film, therefore allowing you to see better and not stress your eyes.
      `,
    },
    {
      question: "Do I need to wait to roll my windows down?",
      answer: `

We recommend that you leave your vehicle windows rolled up for at least 24 hours after window film has been installed. This allows the film to cure and adhere to the glass before the window is moved.
      `,
    },
    {
      question: "Can window film be matched to vehicle factory window tint?",
      answer: `

In most cases yes, depending on how old the film is and whether or not a color stable film was used.
      `,
    },
    {
      question:
        "Does old aftermarket window film need to be removed before installing new?",
      answer: `

Old film will need to be removed before installing new window film. It is always best to have the old film removed by a professional, as the rear defroster can be easily damaged. The process does add 2 – 4 hours of labor, and there is a charge for the removal. We recommend dropping your vehicle in the morning and let us call you when the job is completed.
      `,
    },
    {
      question:
        "Can aftermarket window film be installed over factory window tint?",
      answer: `

As long as it is factory window tint, which is a color in the glass, then after market window film can be installed directly on the glass. Aftermarket window film has many more solar benefits than factory window tint. Aftermarket window film rejects 99% of ultraviolet rays and between 35%-60% of heat, depending on the film level used. Plus, adding aftermarket tint over factory tint can give you more privacy for storing personal items in the back of a vehicle.
      `,
    },
    {
      question:
        "Will the film affect my rear defroster, or will my rear defroster affect the film?",
      answer: `

No, window film nor the car’s rear defroster will be affected.
      `,
    },
    {
      question: "Do I have to come to your location to have my vehicle tinted?",
      answer: `

Glass Tint USA only installs window film on vehicles inside our clean, air-conditioned facility. This way we have complete control over the environment we install window film in. This is how you receive the most quality job.
      `,
    },
    {
      question: "What is the legal limit of tint in Missouri?",
      answer: `

Missouri allows for a 35% light transmission on the front doors of any vehicle registered in Missouri. They allow any level of film behind the front doors and along the top of the front windshield, down to the AS-1 line. The percentage does vary by the state where your vehicle is registered.
      `,
    },
    {
      question:
        "Can the front two doors be matched to the vehicle factory window tint?",
      answer: `

Yes. However, having this level of window film on front doors is not legal in Missouri. Vehicle factory window tint is usually 26%-15% film level. Missouri law states that the front door legal light transmission is 35%, which is lighter than the rear window of your factory tinted vehicle.
      `,
    },
    {
      question: "Can I darken vehicle factory window tint?",
      answer: `


Yes. As long as it is factory window tint, we can install window film directly on the glass. Factory window tint’s color is actually a pigment in the glass. Aftermarket window film also has many more solar benefits than factory window tint. Factory tint only rejects part of the UV rays, and only rejects a small amount of heat. Aftermarket window film rejects 99% of ultraviolet rays and between 35%-60% of heat, depending on the film level used. In addition to these benefits, darkening factory tinted glass will give you more privacy for storing your personal items in the back of the vehicle.
      `,
    },
    {
      question: "How does window film improve year-round comfort?",
      answer: `

Window film creates a more comfortable environment through consistent climate control by eliminating “cold wall” and “hot wall” problems. Rooms stay more comfortable in the summer and winter, be reducing “hot spots”, no matter where the sun is shining.
      `,
    },
    {
      question: "How does window film lower energy costs?",
      answer: `

In summer, window film reflects the hot sun, reducing heat gain and lowering air conditioning costs. In winter, window film retains heat — up to 15% — to reduce heating costs. This year-after-year reduction in energy costs can yield an impressive return on investment.
      `,
    },
    {
      question: "What is “One-Way Film”?",
      answer: `

“One-Way Film” is based on lighting, not the film itself. The side that is the brightest is the side that you can see. During the day when it is bright outside, you can see outside. At night, if you have lights on inside and no lighting outside, then it reverses.
      `,
    },
    {
      question: "Can window film be applied to any surface?",
      answer: `

No. The adhesive is meant to adhere to glass only. Window film should only be applied to glass surfaces that have a smooth finish. Plastics, Plexiglas, or Lexan contain too much oil for the film to adhere properly for a long period of time.
      `,
    },
  ],
  polishing: [
    {
      question: "How long does it take to polish a car?",
      answer: `
      Different cars require different techniques when it comes to polishing. It takes about 8 hours to polish a car. Polishing involves removing contaminants from the surface of a car using products for a glossy, even, and shiny look.

However, it may take less time for some cars because car polishing depends on several factors, such as the size, color, complexity, and type of the car.

An expert’s experience will also determine how long they take to complete the task. Polishing a car is very important regardless of how long it takes. 

Experts advise car owners to polish their cars often to maintain good external appearances. The desired results affect how long it will take to polish a car.

Some car owners desire a perfect and flawless outlook, while some are not specific to perfection, maybe polish to eliminate dents and scratches.

Generally, well-maintained and new cars take less time to polish than very old ones. There are three stages in which a car can be polished. 
      `,
    },
    {
      question: "What are the aspects that affect the duration of a polish?",
      answer: `
      Several factors determine how long a car polish will last. It mostly depends on the type of protective coat used. For some coats, such as carnauba wax, it may last between two to three months depending on external factors such as wash routines, the environmental condition, maintenance, and wash routines by the owner.

With proper care and maintenance, a car polish will last longer. 

For instance, when an expert with many years of experience and high-level technical skills polishes a car, it will last longer compared to a beginner who is prone to making mistakes that one may notice later. 

The number of polish stages done in a car will also determine the duration of the polish. A 3-stage car polish with an additional process, such as refined polishing, will affect the duration of a polish. Most car owners prefer this as it gives the best-desired results.

The desired results affect the duration of a polish. Some car owners desire a perfect and flawless outlook, while some are not specific to perfection, maybe just polish to eliminate dents and scratches. A more detailed car polish will last longer.
      `,
    },
    {
      question: "How long does a Stage 1 polish take?",
      answer: `
      It takes 1-2 days for stage 1 polish. Stage 1 has fewer steps than stages 2 and 3, so less time is needed. Only a type of polish and pad combination is done with stage 1.

It is most suitable for good-looking cars but has small yet visible scratches and marks. On the other hand, a stage 1 polish will not give good results for cars with many imperfections. The cost of a stage 1 car polish is less than for stages 2 and 3. 
      `,
    },
    {
      question: "What Is a Stage 2 car polish?",
      answer: `
      Stage 2 car polish involves intense work using medium compounds and light refining polish to ensure complete coverage of marks and scratches.

The process involves several steps, such as deep cleaning alloy wheels and arches. Two-bucket wash is done too. Full decontamination, as well as clay decontamination, is performed.

A car power rinse and thoroughly dry with towels, then blow drying to ensure no water is trapped between spaces. Then the expert will do a paintwork inspection and take the necessary readings.

Machine polishing and finally finishing polish to perfect the noticeable lighter paintwork.

Stage 2 polish is often done when stage one polish is ineffective and scratches are still visible. Stage 2 car polish takes a duration of two to three days.

The cost of stage 2 is high compared to stage 1 and varies with the size of the car. Stage 1 can achieve desirable results with limited time. Most car owners opt for stage two polish because the polish is more durable yet pocket friendly. 
      `,
    },
    {
      question: "How long does it take to 3 stage polish a car?",
      answer: `
      It takes 3-5 days to 3-stage polish a car. It is the most advanced with multi-stage polish. It involves a combination of compound, medium, and extra fine polishing. Often the result is up to 98% level of correction.

The paintwork must be deep cleaned, clayed, and accurate paint thickness readings. The stage 3 polish of a car is suitable for cars with heavy scratches and marks.

The finished look is perfect. Stage 3 car polish is the most expensive, and the cost varies according to car size. 
      `,
    },
  ],
  autoLinting: [
    {
      question: "How long does it take to tint my vehicle?",
      answer: `
      
The amount of time varies, depending on your type of vehicle. A complete car can take 2 to 4 hours. Full-sized trucks generally take between an hour and an hour and a half. A set of front doors usually only takes 30-45 minutes. If old aftermarket film has to be removed, that can add anywhere from 30 minutes to half a day.
      `,
    },
    {
      question: "Do I need to wait to roll my windows down?",
      answer: `
      
We recommend that you leave your vehicle windows rolled up for at least 24 hours after window film has been installed. This allows the film to cure and adhere to the glass before the window is moved.
      `,
    },
    {
      question: "Can window film be matched to vehicle factory window tint?",
      answer: `
      
In most cases yes, depending on how old the film is and whether or not a color stable film was used.
      `,
    },
    {
      question:
        "Will the film affect my rear defroster, or will my rear defroster affect the film?",
      answer: `
      
No, window film nor the car’s rear defroster will be affected.
      `,
    },
    {
      question: "Do I have to come to your location to have my vehicle tinted?",
      answer: `
      Glass Tint USA only installs window film on vehicles inside our clean, air-conditioned facility. This way we have complete control over the environment we install window film in. This is how you receive the most quality job.
      `,
    },
    {
      question: "What is the legal limit of tint in Missouri?",
      answer: `
      
Missouri allows for a 35% light transmission on the front doors of any vehicle registered in Missouri. They allow any level of film behind the front doors and along the top of the front windshield, down to the AS-1 line. The percentage does vary by the state where your vehicle is registered.
      `,
    },
    {
      question:
        "Can the front two doors be matched to the vehicle factory window tint?",
      answer: `
      
Yes. However, having this level of window film on front doors is not legal in Missouri. Vehicle factory window tint is usually 26%-15% film level. Missouri law states that the front door legal light transmission is 35%, which is lighter than the rear window of your factory tinted vehicle.
      `,
    },
    {
      question: "Can I darken vehicle factory window tint?",
      answer: `
      
Yes. As long as it is factory window tint, we can install window film directly on the glass. Factory window tint’s color is actually a pigment in the glass. Aftermarket window film also has many more solar benefits than factory window tint. Factory tint only rejects part of the UV rays, and only rejects a small amount of heat. Aftermarket window film rejects 99% of ultraviolet rays and between 35%-60% of heat, depending on the film level used. In addition to these benefits, darkening factory tinted glass will give you more privacy for storing your personal items in the back of the vehicle.
      `,
    },
    {
      question: "Can window film be applied to any surface?",
      answer: `
      
No. The adhesive is meant to adhere to glass only. Window film should only be applied to glass surfaces that have a smooth finish. Plastics, Plexiglas, or Lexan contain too much oil for the film to adhere properly for a long period of time.
      `,
    },
    {
      question: "What is Paint Protection Film?",
      answer: `
      
More than just an invisible bra for cars, Paint Protection Film can help protect many areas of your vehicle from scratches, dents, stains or swirls caused by road debris, rocks, bug droppings, and other environmental elements. Paint protection film is an 8 mil, clear polyurethane film. This virtually invisible film will not alter the color or design elements of your vehicle.
      `,
    },
    {
      question: "Why have Paint Protection Film installed?",
      answer: `
      
Your vehicle is one of the most expensive purchases you will make. Keeping your vehicle looking new and protecting it with a quality paint protection film from a company you can trust is important.
      `,
    },
    {
      question:
        "What is the difference between XPEL Paint Protection Film and Other Traditional Paint Protection Films on the market?",
      answer: `
      
XPEL is synonymous with quality in the paint protection industry. No other brand has such an extensive design and testing process. XPELs construction provides many features, advantages, and benefits over other films. XPELs entire line of films is tested manually. The self-healing technology and seamless fit in our XPEL ULTIMATE line changes automobile protection forever. XPEL ULTIMATE line uses special elastomeric polymer technology in its clear coat that allows the film to HEAL ITSELF from minor scratches or swirl marks in a matter of minutes. The clear coat has excellent stain and scratch resistance, making it easier to clean and more difficult to scratch, ensuring that your vehicle looks newer, longer. It has excellent durability and exceptional clarity with virtually no orange peel, making it the clearest film in the industry and virtually invisible on the vehicle. It is manufactured in the USA.
      `,
    },
    {
      question: "How is Paint Protection Film installed?",
      answer: `
      
The highest quality of automobile protection begins with a perfect installation. A plotter is used to cut patterns to the individual car, based on XPELs Design Access Program (DAP) Software. This software allows us to offer our customers the most customizable and precise coverage in the industry. The vehicle is prepped (detailed). The Paint Protection Film has an adhesive on the product and is then installed on the vehicle, using an alcohol based solution.
      `,
    },
    {
      question: "Where can I put Paint Protection Film?",
      answer: `
      
Paint Protection Film can be professionally installed on any areas of your vehicle that are most vulnerable to damage to protect your vehicles finish from scratches, chips, stains and other damaging elements. You can protect rocker panels from stones and debris kicked up by tires; hoods, bumpers and mirror backs from flying debris (gravel, bug acids and tar); door handle cups and door edges from rings, keys, belt buckles and purses; or full hoods, trunks and roofs from bird droppings and tree sap.
      `,
    },
    {
      question: "Can I install Paint Protection Film myself?",
      answer: `
      We strongly recommend that Paint Protection Film be installed by a Certified Installer. They have the training and experience to make sure you receive an installation that is fit perfectly to your vehicle. In addition, the warranty is valid only if the film is installed by a Certified Installer.
      `,
    },
    {
      question: "How do I care for my Paint Protection Film?",
      answer: `
      Care Instructions: Caring for your Paint Protection Film is easy, 1) After film installation, wait one week before washing or waxing your vehicle to help ensure proper adhesion build of the film has been achieved.
      2) Use waxes that do not contain dyes, abrasive polishes and/or rubbing compounds. 3) After waxing your car, you can remove any wax build-up along film edges with a lint-free cloth.
      `,
    },
  ],
  recidentialAndCommercial: [
    {
      question: "How does window film improve year-round comfort?",
      answer: `
      
Window film creates a more comfortable environment through consistent climate control by eliminating “cold wall” and “hot wall” problems. Rooms stay more comfortable in the summer and winter, be reducing “hot spots”, no matter where the sun is shining.
      `,
    },
    {
      question: "How does window film lower energy costs?",
      answer: `
      
In summer, window film reflects the hot sun, reducing heat gain and lowering air conditioning costs. In winter, window film retains heat — up to 15% — to reduce heating costs. This year-after-year reduction in energy costs can yield an impressive return on investment.
      `,
    },
    {
      question: "What is “One-Way Film”?",
      answer: `
      
“One-Way Film” is based on lighting, not the film itself. The side that is the brightest is the side that you can see. During the day when it is bright outside, you can see outside. At night, if you have lights on inside and no lighting outside, then it reverses.
      `,
    },
    {
      question: "Can window film be applied to any surface?",
      answer: `
      
No. The adhesive is meant to adhere to glass only. Window film should only be applied to glass surfaces that have a smooth finish. Plastics, Plexiglas, or Lexan contain too much oil for the film to adhere properly for a long period of time.
      `,
    },
  ],
  paintProtectionFilm: [
    {
      question: "What is Paint Protection Film?",
      answer: `
      
More than just an invisible bra for cars, Paint Protection Film can help protect many areas of your vehicle from scratches, dents, stains or swirls caused by road debris, rocks, bug droppings, and other environmental elements. Paint protection film is an 8 mil, clear polyurethane film. This virtually invisible film will not alter the color or design elements of your vehicle.
      `,
    },
    {
      question: "Why have Paint Protection Film installed?",
      answer: `
      
Your vehicle is one of the most expensive purchases you will make. Keeping your vehicle looking new and protecting it with a quality paint protection film from a company you can trust is important.
      `,
    },
    {
      question:
        "What is the difference between XPEL Paint Protection Film and Other Traditional Paint Protection Films on the market?",
      answer: `
      
XPEL is synonymous with quality in the paint protection industry. No other brand has such an extensive design and testing process. XPELs construction provides many features, advantages, and benefits over other films. XPELs entire line of films is tested manually. The self-healing technology and seamless fit in our XPEL ULTIMATE line changes automobile protection forever. XPEL ULTIMATE line uses special elastomeric polymer technology in its clear coat that allows the film to HEAL ITSELF from minor scratches or swirl marks in a matter of minutes. The clear coat has excellent stain and scratch resistance, making it easier to clean and more difficult to scratch, ensuring that your vehicle looks newer, longer. It has excellent durability and exceptional clarity with virtually no orange peel, making it the clearest film in the industry and virtually invisible on the vehicle. It is manufactured in the USA.
      `,
    },
    {
      question: "How is Paint Protection Film installed?",
      answer: `
      
The highest quality of automobile protection begins with a perfect installation. A plotter is used to cut patterns to the individual car, based on XPELs Design Access Program (DAP) Software. This software allows us to offer our customers the most customizable and precise coverage in the industry. The vehicle is prepped (detailed). The Paint Protection Film has an adhesive on the product and is then installed on the vehicle, using an alcohol based solution.
      `,
    },
    {
      question: "Where can I put Paint Protection Film?",
      answer: `
      
Paint Protection Film can be professionally installed on any areas of your vehicle that are most vulnerable to damage to protect your vehicles finish from scratches, chips, stains and other damaging elements. You can protect rocker panels from stones and debris kicked up by tires; hoods, bumpers and mirror backs from flying debris (gravel, bug acids and tar); door handle cups and door edges from rings, keys, belt buckles and purses; or full hoods, trunks and roofs from bird droppings and tree sap.
      `,
    },
    {
      question: "Can I install Paint Protection Film myself?",
      answer: `
      
We strongly recommend that Paint Protection Film be installed by a Certified Installer. They have the training and experience to make sure you receive an installation that is fit perfectly to your vehicle. In addition, the warranty is valid only if the film is installed by a Certified Installer.
      `,
    },
    {
      question: "How do I care for my Paint Protection Film?",
      answer: `
      
Care Instructions:
  1) Caring for your Paint Protection Film is easy.
  2) After film installation, wait one week before washing or waxing your vehicle to help ensure proper adhesion build of the film has been achieved.
  3) Use waxes that do not contain dyes, abrasive polishes and/or rubbing compounds.
After washing your car, you can remove any wax build-up along film edges with a lint-free cloth.
      `,
    },
    {
      question: "Can The Film Be Removed?",
      answer: `
      
Yes, the film has a patented adhesive that allows for removal without damaging the paint.
      `,
    },
    {
      question:
        "Will my vehicle’s paint fade or look different when the film is removed?",
      answer: `The paint protected by the film fades at the same rate as the paint left exposed, so there is no difference in appearance.`,
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

export const tabs = [
  {
    title: "Polishing",
    content: faq.polishing,
  },
  {
    title: "Auto Linting",
    content: faq.autoLinting,
  },
  {
    title: "Recidential & Commercial",
    content: faq.recidentialAndCommercial,
  },
  {
    title: "Paint Protection Film",
    content: faq.paintProtectionFilm,
  },
];
