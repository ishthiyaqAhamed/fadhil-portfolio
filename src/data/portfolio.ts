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
  topicGroup: "Rare Gemstones" | "Sri Lanka & Mining" | "Markets & GIA" | "Cut & History";
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  placement?: "top-left" | "top-center" | "right-tall" | "bottom-left" | "bottom-center";
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
    studiesBanner: "/images/gia-studies.jpg",
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
    titleLine1: "Personal",
    titleLine2: "Blogs",
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
      topicGroup: "Rare Gemstones",
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
      topicGroup: "Rare Gemstones",
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
      topicGroup: "Rare Gemstones",
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
      topicGroup: "Rare Gemstones",
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
      topicGroup: "Rare Gemstones",
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
    {
      slug: "chinafort-gem-market-beruwala",
      gemName: "Chinafort Market",
      title: "Chinafort Gem Market: Inside Beruwala's Historic Trading Floor",
      category: "Gem Trade & Markets",
      topicGroup: "Markets & GIA",
      date: "November 2025",
      readTime: "6 min read",
      excerpt:
        "How the narrow coastal lanes of Chinafort in Beruwala became the pulse of Sri Lanka's international colored-gemstone trade.",
      image: "/images/gems/chinafort-market.jpg",
      specs: {
        mineralSpecies: "Blue Sapphire, Spinel & Tourmaline",
        origin: "Beruwala, Sri Lanka",
        refractiveIndex: "1.718 – 1.770",
        hardness: "8.0 – 9.0 Mohs",
        rarityNote: "Centuries-old open-air bourse",
      },
      overview:
        "Each morning from 7:30 AM, brokers, cutters, and international buyers gather along Chinafort's sunlit alleys to negotiate folded white gem papers ('lotus packets').",
      designConcept:
        "Natural morning coastal daylight provides consistent color-temperature illumination ideal for judging subtle cornflower blues and Padparadscha tones.",
      content: [
        "Tucked along Sri Lanka's southwest coast in Beruwala, Chinafort (Cheena Kotuwa) stands as one of the world's most vibrant and storied colored-gemstone markets. Named for early Chinese maritime traders, the quarter has been shaped for generations by Sri Lankan Moor merchant families.",
        "Unlike enclosed glass-case jewelry fairs, business in Chinafort thrives on trust, speed, and trained eyes. Dealers unwrap crisp white paper parcels in natural daylight, inspecting unmounted sapphires, Padparadschas, spinels, and chrysoberyls with 10x triplet loupes.",
        "A handshake—sealed softly under a cloth or over a cup of sweet milk tea—often finalizes high-value transactions destined for Geneva, Antwerp, Bangkok, and Hong Kong.",
      ],
    },
    {
      slug: "gia-laboratory-grading-and-origin",
      gemName: "GIA Standards",
      title: "GIA Gemological Grading: Science Behind Origin & Treatment Reports",
      category: "Laboratory Standards",
      topicGroup: "Markets & GIA",
      date: "October 2025",
      readTime: "6 min read",
      excerpt:
        "Inside the Gemological Institute of America's analytical toolkit—from LA-ICP-MS trace chemistry to FTIR and Raman inclusion spectroscopy.",
      image: "/images/gems/gia-microscope.jpg",
      specs: {
        mineralSpecies: "Diamond & Colored Stone Standards",
        origin: "Carlsbad / New York / Bangkok",
        refractiveIndex: "Calibrated 1.30 – 2.42",
        hardness: "Standardized 4Cs & Origin",
        rarityNote: "Global laboratory benchmark",
      },
      overview:
        "Founded in 1931 by Robert M. Shipley, GIA established the International Diamond Grading System and modern colored-stone laboratory verification.",
      designConcept:
        "Standardized D65 illumination, darkfield microscopy, and non-destructive laser chemistry separate natural unheated stones from diffused or synthetic counterparts.",
      content: [
        "In high-value gemology, visual beauty alone no longer determines provenance or market confidence. A GIA Identification and Origin Report anchors a gemstone's value with repeatable, peer-reviewed analytical data.",
        "Behind every report lies multi-stage testing: UV-Vis-NIR spectroscopy confirms chromophore elements like titanium, iron, and chromium; FTIR spectroscopy detects polymer or oil fillers and low-temperature heat signatures; and LA-ICP-MS trace-element chemistry distinguishes Kashmir, Burmese, Madagascar, and Sri Lankan origins.",
        "Understanding how GIA laboratories read microscopic crystal inclusions—from silk rutile needles to healed feathers—empowers gemologists to verify authenticity long before a stone reaches auction.",
      ],
    },
    {
      slug: "gemstone-cut-and-polishing-craft",
      gemName: "Cut & Polishing",
      title: "Cut & Polishing: Turning Rough Crystals into Optical Architecture",
      category: "Lapidary Craft",
      topicGroup: "Cut & History",
      date: "September 2025",
      readTime: "5 min read",
      excerpt:
        "From dopping and preforming on bronze laps to final cerium-oxide polish—how Sri Lankan and precision lapidaries unlock fire and brilliance.",
      image: "/images/gems/cut-and-polishing.jpg",
      specs: {
        mineralSpecies: "Corundum, Beryl & Garnet",
        origin: "Lapidary Workshop / Ratnapura",
        refractiveIndex: "Angle-matched Critical Cuts",
        hardness: "Diamond & Oxide Polish",
        rarityNote: "Zero-window symmetry focus",
      },
      overview:
        "A poorly proportioned cut wastes 40% of a gem's brilliance; precision pavilion angles bounce light back cleanly through the crown facets.",
      designConcept:
        "Traditional wooden-and-steel Sri Lankan 'hanapora' wheels alongside modern digital faceting heads balance carat weight retention with optical symmetry.",
      content: [
        "When a rough sapphire leaves the earth, it resembles a water-worn pebble more than a jewel. Transforming that raw crystal requires the lapidary to study internal zoning, pleochroic axes, and inclusion placement before touching a saw blade.",
        "During preforming and faceting, the cutter dop-mounts the stone and grinds pavilion facets to meet or exceed the mineral's critical angle—preventing light leakage ('windowing') through the belly of the stone. Crown facets are then sequenced to split white light into crisp scintillation.",
        "The final stage—polishing on tin, zinc, or composite laps charged with ultra-fine diamond paste or alumina—removes sub-micron scratches so every facet junction meets with mirror-sharp precision.",
      ],
    },
    {
      slug: "gemstone-history-silk-road-to-crowns",
      gemName: "Gemstone History",
      title: "Gemstone History: From Ancient Serendib Trade Routes to Crown Jewels",
      category: "Heritage & Provenance",
      topicGroup: "Cut & History",
      date: "August 2025",
      readTime: "6 min read",
      excerpt:
        "Tracing how Ceylon star rubies, Kashmir sapphires, and Golconda diamonds shaped royal treasuries from Marco Polo's chronicles to the Smithsonian.",
      image: "/images/gems/gemstone-history.jpg",
      specs: {
        mineralSpecies: "Historic Star Ruby & Corundum",
        origin: "Ceylon / Silk Road / Museum Vaults",
        refractiveIndex: "1.762 – 1.770",
        hardness: "9.0 Mohs",
        rarityNote: "138.7 ct Rosser Reeves lineage",
      },
      overview:
        "For over two millennia, Sri Lanka—known historically as Taprobane and Serendib—supplied royal courts from Rome and Persia to imperial China.",
      designConcept:
        "Cabochon-cut asterism stones preserved ancient polishing traditions long before modern brilliant faceting geometries emerged in Europe.",
      content: [
        "Before modern geology mapped continental drift, ancient mariners and Silk Road caravans knew a small Indian Ocean island called Serendib as the fountainhead of precious stones. Marco Polo famously documented a colossal ruby of Sri Lanka coveted by Kublai Khan in the 13th century.",
        "Historic treasures such as the 138.7-carat Rosser Reeves Star Ruby—housed today in the Smithsonian Institution—carry that lineage forward. Cut en cabochon to showcase a razor-sharp six-rayed asterism formed by microscopic rutile needles, it embodies centuries of Ceylon lapidary mastery.",
        "Studying historical cutting styles—from Mughal table cuts and old mine cushions to Georgian closed-back foil settings—reveals how human culture and optical science evolved side by side.",
      ],
    },
    {
      slug: "gemstone-districts-of-sri-lanka",
      gemName: "Sri Lanka Districts",
      title: "Gemstone Districts of Sri Lanka: Ratnapura, Elahera, Okkampitiya & Meetiyagoda",
      category: "Regional Geology",
      topicGroup: "Sri Lanka & Mining",
      date: "July 2025",
      readTime: "7 min read",
      excerpt:
        "A regional field guide across Sri Lanka's richest gem-bearing belts—from Ratnapura's alluvial sapphires to Meetiyagoda's rare blue moonstones.",
      image: "/images/gems/sri-lanka-districts.jpg",
      specs: {
        mineralSpecies: "Sapphire, Spinel, Chrysoberyl & Moonstone",
        origin: "Ratnapura / Elahera / Okkampitiya",
        refractiveIndex: "1.520 – 1.770",
        hardness: "6.0 – 9.0 Mohs",
        rarityNote: "90% of island is Precambrian gem-bearing",
      },
      overview:
        "Sri Lanka hosts one of the highest densities of diverse gem species per square kilometer on Earth, concentrated across distinct metamorphic and alluvial belts.",
      designConcept:
        "Each district produces signature mineral profiles shaped by local Highland Complex granulites and ancient river drainage basins.",
      content: [
        "Ratnapura—literally 'City of Gems' in Sinhala—anchors the southwest gem basin, famed for velvety Ceylon blue sapphires, Padparadscha corundum, cat's-eye chrysoberyl, and alexandrite resting in deep alluvial gravel beds known as illam.",
        "Further north in Central Province, Elahera and Bakamuna yield vibrant violet-blue sapphires, vivid pink spinels, and emerald-green tourmalines. To the southeast, Okkampitiya and Kataragama are prized for golden-yellow sapphires, spessartine garnets, and high-clarity zircons.",
        "Along the southern coast, Meetiyagoda stands apart as one of the world's finest sources of blue-sheen orthoclase moonstone—mined from kaolinized pegmatite veins rather than river gravels.",
      ],
    },
    {
      slug: "artisanal-gem-mining-in-sri-lanka",
      gemName: "Artisanal Mining",
      title: "Gem Mining in Sri Lanka: Traditional Illam Pits & Sustainable Traceability",
      category: "Mining & Ethics",
      topicGroup: "Sri Lanka & Mining",
      date: "June 2025",
      readTime: "6 min read",
      excerpt:
        "How small-scale shaft mining, woven bamboo basket washing, and strict land-rehabilitation rules make Sri Lankan gem mining uniquely sustainable.",
      image: "/images/gems/gem-mining.jpg",
      specs: {
        mineralSpecies: "Alluvial Illam Gem Gravels",
        origin: "Pelmadulla & Kuruwita, Sri Lanka",
        refractiveIndex: "Multi-species Heavy Concentrates",
        hardness: "Natural Water-Worn Crystals",
        rarityNote: "Low-impact non-mechanized extraction",
      },
      overview:
        "Unlike massive open-pit industrial mines, over 90% of Sri Lanka's gems are recovered by small cooperative teams working vertical timbered shafts by hand.",
      designConcept:
        "Circular woven rattan baskets ('koodai') use gentle river-water agitation so dense corundum, spinel, and zircon settle cleanly at the center.",
      content: [
        "Journey through Pelmadulla or Kuruwita at dawn and you will spot thatched palm-leaf roofs rising gently above emerald paddy fields. Beneath those simple shelters lie traditional Sri Lankan gem shafts ('pathal'), descending 10 to 30 meters through clay until miners strike the prized gem-bearing gravel layer called illam.",
        "Excavation remains deliberately low-impact: heavy bulldozers and toxic chemical leaching are prohibited across licensed artisanal plots. Gravel is hoisted up in buckets and washed carefully inside shallow water-filled pits using circular woven baskets.",
        "Once exhausted, licensed miners are legally required by the National Gem and Jewellery Authority to backfill shafts and restore the topsoil—allowing rice paddies and tea gardens to flourish again above earth that yielded million-year-old crystals.",
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

