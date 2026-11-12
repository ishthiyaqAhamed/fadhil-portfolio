export interface StudyItem {
  institution: string;
  period: string;
  description: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  gemName: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  placement: "top-left" | "top-center" | "right-tall" | "bottom-left" | "bottom-center";
  specs: {
    mineralSpecies: string;
    origin: string;
    refractiveIndex: string;
    hardness: string;
    rarityNote: string;
  };
  overview: string;
  designConcept: string;
  content: string[];
}

export const portfolioData = {
  profile: {
    initials: "FZ .",
    fullName: "Fadhil Zakwan",
    displayName: "FADHIL ZAKWAN .",
    role: "GEMOLOGIST",
    cvUrl: "/Fadhil-Zakwan-CV.pdf",
    cvFileName: "Fadhil-Zakwan-CV.pdf",
    aboutImage: "/images/fadhil-gem-show.jpg",
    aboutBio:
      "A certified Gemologist and visual storyteller dedicated to uncovering the structural beauty, origin, and light performance of precious stones. Combining scientific analytical precision with contemporary editorial aesthetics to bridge classical gemology and modern brand narratives.",
    aboutBioSecondary:
      "From microscopic inclusion mapping and ethical provenance verification to directing high-contrast luxury campaigns, I partner with collectors, ateliers, and emerging houses to transform raw mineral rarity into enduring visual authority.",
    studiesIntro:
      "My academic journey built a disciplined foundation in mineralogical analysis, optical crystallography, and disciplined research — shaping how I evaluate every stone and present every story.",
    studiesBanner: "/images/studies-banner.jpg",
  },

  navLinks: [
    { label: "ABOUT", href: "#about" },
    { label: "EDUCATION", href: "#education" },
    { label: "SKILLS", href: "#skills" },
    { label: "CAREER", href: "#career" },
    { label: "BLOG", href: "#blog" },
    { label: "CONTACT", href: "#contact" },
  ],

  studies: [
    {
      institution: "North Academy",
      period: "[2016 - 2019]",
      description:
        "Foundational studies in natural sciences, earth materials, and disciplined analytical observation.",
    },
    {
      institution: "South Primary School",
      period: "[2019 - 2023]",
      description:
        "Focused coursework in mineralogy principles, optical physics, and structured laboratory documentation.",
    },
    {
      institution: "West Secondary School",
      period: "[2023 - 2025]",
      description:
        "Advanced gemological specialization covering precision grading, diamond clarity assessment, and provenance research.",
    },
  ] satisfies StudyItem[],

  capabilities: [
    {
      title: "Communication Skills",
      description:
        "Translating complex gemological reports, clarity grades, and valuation insights into clear, persuasive narratives for collectors and luxury houses.",
    },
    {
      title: "Creative Problem Solving",
      description:
        "Resolving inclusion identification challenges, cut-proportion trade-offs, and editorial framing with calm, methodical ingenuity.",
    },
    {
      title: "Leadership & Teamwork",
      description:
        "Guiding cross-disciplinary teams across laboratory inspections, curation shoots, and bespoke client consultations with accountability.",
    },
    {
      title: "Time Management",
      description:
        "Delivering high-stakes gemstone certifications, acquisition appraisals, and multi-channel publications reliably on tight timelines.",
    },
  ] satisfies CapabilityItem[],

  careerExperience: [
    {
      title: "Branding & Identity Design",
      description:
        "Crafting refined monochrome visual identities and provenance storytelling for independent jewelers and gemstone ateliers.",
    },
    {
      title: "Social Media Management",
      description:
        "Curating cohesive digital channels that educate discerning audiences on rare stones, ethical sourcing, and craftsmanship.",
    },
    {
      title: "Content Creation",
      description:
        "Producing macro gemological photography, technical essays, and editorial lookbooks tailored for modern luxury collectors.",
    },
    {
      title: "Visual Communication",
      description:
        "Designing clear, minimalist visual presentations that spotlight crystal symmetry, optical dispersion, and stone heritage.",
    },
  ] satisfies ExperienceItem[],

  featuredGemBlog: {
    badge: "Personal Presentation",
    titleLine1: "Blogs",
    titleLine2: "About gem",
    intro:
      "An intimate editorial look into the refraction, geological provenance, and light architecture of rare gemstones — documented through monochrome photography and field notes.",
    image: "/images/gem-featured.jpg",
    projectOverview:
      "A curated series examining natural inclusions, facet geometry, and ethical mine-to-atelier traceability across colored stones and diamonds.",
    designConcept:
      "Stripping away color distraction into stark monochrome contrast allows the observer to study pure silhouette, brilliance, and facet symmetry.",
  },

  blogPosts: [
    {
      slug: "paraiba-tourmaline-electric-copper",
      gemName: "Paraíba Tourmaline",
      title: "Paraíba Tourmaline: The Neon Copper Glow",
      category: "Rare Cuprian Elbaite",
      date: "October 2025",
      readTime: "5 min read",
      excerpt:
        "Why trace copper and manganese inside Brazilian Paraíba tourmalines generate an electric neon-blue luminescence unmatched in gemology.",
      image: "/images/gems/paraiba-tourmaline.jpg",
      placement: "top-left",
      specs: {
        mineralSpecies: "Cuprian Elbaite (Tourmaline)",
        origin: "Paraíba, Brazil",
        refractiveIndex: "1.615 – 1.644",
        hardness: "7.0 – 7.5 Mohs",
        rarityNote: "1 in 10,000 diamonds rarity",
      },
      overview:
        "First unearthed in the Batalha mine in Brazil in 1989, cuprian elbaite derives its surreal swimming-pool turquoise glow from trace copper (Cu²⁺) ions.",
      designConcept:
        "Trillion and oval mixed cuts maximize internal light path while preserving saturated neon-blue brilliance in stones even under one carat.",
      content: [
        "Few discoveries in modern gemology rival the 1989 emergence of neon-blue tourmaline from the hills of Paraíba, Brazil. Unlike conventional indicolite tourmaline colored by iron, Paraíba owes its unmistakable electric glow to trace copper and manganese.",
        "Under a 10x triplet loupe and spectroscopic inspection, authentic Brazilian specimens exhibit vivid cyan-to-turquoise fluorescence that appears to radiate from within the stone even in dim ambient light.",
        "Because original Brazilian pegmatite veins were largely exhausted within years of discovery, clean faceted specimens above one carat rank among the most coveted rarities in private collections worldwide.",
      ],
    },
    {
      slug: "padparadscha-sapphire-lotus-hue",
      gemName: "Padparadscha Sapphire",
      title: "Padparadscha Sapphire: Dawn Lotus Equilibrium",
      category: "Rare Corundum",
      date: "September 2025",
      readTime: "5 min read",
      excerpt:
        "Evaluating the razor-thin chromatic boundary between pastel sunset orange and delicate lotus pink in Sri Lankan Padparadscha corundum.",
      image: "/images/gems/padparadscha-sapphire.jpg",
      placement: "top-center",
      specs: {
        mineralSpecies: "Corundum (Al₂O₃)",
        origin: "Ratnapura, Sri Lanka",
        refractiveIndex: "1.762 – 1.770",
        hardness: "9.0 Mohs",
        rarityNote: "Ultra-rare unheated lotus hue",
      },
      overview:
        "Named after the Sinhalese word for aquatic lotus blossom, true Padparadscha requires a harmonious marriage of pinkish-orange and orangey-pink.",
      designConcept:
        "Balanced cushion and radiant pavilion facets evenly blend warm chromium and iron-hole chromophores without dark extinction zones.",
      content: [
        "Of all fancy sapphires, none sparks more passionate debate among gemologists and laboratory graders than Padparadscha. Too yellow and it drifts toward golden sapphire; too deep and it crosses into ruby-orange territory.",
        "Genuine Sri Lankan Padparadscha displays a tranquil, medium-light pastel saturation that evokes tropical twilight—neither overly dark nor washed out.",
        "Unheated stones exhibiting zero lattice diffusion or beryllium treatment command extraordinary collector premiums and require meticulous daylight-calibrated grading.",
      ],
    },
    {
      slug: "alexandrite-color-change-phenomenon",
      gemName: "Color-Change Alexandrite",
      title: "Alexandrite: Emerald by Day, Ruby by Night",
      category: "Phenomenal Chrysoberyl",
      date: "August 2025",
      readTime: "6 min read",
      excerpt:
        "Inside the 26.75 ct collector specimen: how chromium lattice absorption flips crystal color across daylight and incandescent spectra.",
      image: "/images/gems/alexandrite.jpg",
      placement: "right-tall",
      specs: {
        mineralSpecies: "Chrysoberyl (BeAl₂O₄)",
        origin: "Ural Mountains / Sri Lanka",
        refractiveIndex: "1.746 – 1.755",
        hardness: "8.5 Mohs",
        rarityNote: "Rarer than diamond & ruby",
      },
      overview:
        "Trace chromium (Cr³⁺) substituting for aluminum creates balanced transmission windows in both blue-green and red wavelengths.",
      designConcept:
        "Deep cushion step-mixed cutting slows light exit just enough to heighten dramatic teal-to-raspberry pleochroic shifts.",
      content: [
        "Discovered in the Ural Mountains in the 1830s, Alexandrite remains the gold standard of optical phenomena in gemology. Its celebrated 'emerald by day, ruby by night' transformation is caused by a narrow absorption band right in the yellow region of the visible spectrum.",
        "In cool daylight rich in blue-green wavelengths, the stone reflects crisp forest teal. Move the same gem beneath warm candlelight or incandescent bulbs, and red wavelengths dominate—shifting the gem to rich crimson-violet.",
        "Large, eye-clean stones above five carats with a decisive 80%+ color change are museum-caliber treasures seldom seen outside heritage vaults.",
      ],
    },
    {
      slug: "tanzanite-trichroic-zoisite",
      gemName: "Marquise Tanzanite",
      title: "Tanzanite: Single-Origin Trichroic Zoisite",
      category: "Rare Pleochroism",
      date: "July 2025",
      readTime: "4 min read",
      excerpt:
        "Found solely in the Merelani Hills near Mount Kilimanjaro, blue-violet zoisite rewards cutters who align its three crystal axes.",
      image: "/images/gems/tanzanite.jpg",
      placement: "bottom-left",
      specs: {
        mineralSpecies: "Zoisite (Calcium Aluminum Silicate)",
        origin: "Merelani Hills, Tanzania",
        refractiveIndex: "1.691 – 1.700",
        hardness: "6.0 – 6.5 Mohs",
        rarityNote: "Single global mining deposit",
      },
      overview:
        "Vanadium impurities drive strong trichroism—displaying sapphire blue, royal violet, and burgundy depending on crystal viewing axis.",
      designConcept:
        "Elongated marquise orientation aligns the table perpendicular to the dominant blue-violet optical axis for maximal velvety fire.",
      content: [
        "Unlike sapphires or emeralds mined across multiple continents, gem-quality Tanzanite occurs in only one known geological strip on Earth: a four-kilometer belt in northern Tanzania.",
        "When inspected through a dichroscope, rough crystals reveal three distinct body colors along different crystallographic axes. Master cutters sacrifice significant carat weight to orient the stone toward deep ultramarine blue with flashes of violet.",
        "Because geologists estimate primary deposits have a finite lifespan, fine high-saturation specimens continue to hold strong long-term provenance interest.",
      ],
    },
    {
      slug: "corundum-and-beryl-refraction-triad",
      gemName: "Sapphire, Ruby & Emerald",
      title: "Corundum & Beryl: Crown Angles & Light Return",
      category: "Optical Gemology",
      date: "June 2025",
      readTime: "5 min read",
      excerpt:
        "Comparing refractive indices, dispersion, and pavilion critical angles across the classic triad of Sapphire, Ruby, and Emerald.",
      image: "/images/gems/emerald-ruby-sapphire.jpg",
      placement: "bottom-center",
      specs: {
        mineralSpecies: "Corundum & Beryl Triad",
        origin: "Laboratory Reference Suite",
        refractiveIndex: "1.577 – 1.770",
        hardness: "7.5 – 9.0 Mohs",
        rarityNote: "Critical angle optical benchmark",
      },
      overview:
        "Higher refractive index in corundum (1.76–1.77) permits shallower pavilion angles without light leakage compared to lower-RI beryl (1.57–1.58).",
      designConcept:
        "Precision round-cut reference stones allow side-by-side darkfield evaluation of brilliance, extinction, and surface polish.",
      content: [
        "Every gemstone species bends incoming light according to its refractive index (RI) and critical angle. Corundum—encompassing both royal blue sapphire and crimson ruby—bends light sharply inward, delivering crisp brilliance even in relatively shallow cuts.",
        "Emerald, a chromium- and vanadium-colored variety of beryl, possesses a noticeably lower refractive index. If cut too shallow, light escapes out the pavilion ('windowing'); cut too deep, and its lush green body color turns dark.",
        "Mastering how RI dictates facet geometry is the bridge between geological science and fine jewelry artistry.",
      ],
    },
  ] satisfies BlogPost[],

  contact: {
    email: "hello@fadhilzakwan.com",
    phone: "+60 12-345 6789",
    location: "Kuala Lumpur, Malaysia",
    linkedinHandle: "linkedin.com/in/fadhilzakwan",
  },

  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/60123456789",
  },
};

