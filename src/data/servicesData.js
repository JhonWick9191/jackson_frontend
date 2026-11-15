/**
 * Centralized Single Source of Truth for Services Data
 * ----------------------------------------------------
 * To edit any service title, descriptions, categories, features, or Unsplash images,
 * edit only this file. The Navbar Dropdown and Service Detail Pages dynamically render
 * from this data file.
 */

export const servicesData = [
  {
    id: 'signage-solutions',
    slug: 'signage-solutions',
    title: 'Signage Solutions',
    tagline: 'Architectural & Commercial Signage',
    headline: "ARCHITECTURAL & COMMERCIAL SIGNAGE SOLUTIONS FOR MAXIMUM 24/7 VISIBILITY",
    shortDescription:
      'High-impact architectural signage engineered for commercial landmarks, retail malls, corporate offices, and highway sightlines—from indoor fascias to 80-foot pylon monoliths.',
    fullDescription:
      'Jackson Advertising delivers end-to-end architectural signage solutions engineered to command commercial attention. Utilizing precision laser cutting, CNC metal fabrication, UV-cured coatings, and weather-sealed LED modules, we fabricate durable indoor brand environments and landmark outdoor displays built to withstand extreme heat, wind-loads, and UV exposure.',
    mainImage:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    heroBackgroundImage:
      'https://images.unsplash.com/photo-1572945550749-8859f39d6b2d?auto=format&fit=crop&w=1920&q=85',
    serviceCategories: [
      {
        title: 'Indoor & Outdoor Signage',
        badge: 'Architectural',
        description:
          'High-visibility illuminated 3D LED channel letters, acrylic fascias, building crests, and directional wayfinding systems for commercial campuses, retail centers, and corporate towers.'
      },
      {
        title: 'Unipolar Signs',
        badge: 'Highway Landmarks',
        description:
          'Heavy-duty single-column steel unipolar billboard structures engineered with structural foundation calculations for maximum long-distance highway viewing angles.'
      },
      {
        title: 'Light Box',
        badge: 'Illumination',
        description:
          'Backlit and edge-lit LED fabric light boxes, slimline aluminium profile light boxes, and weather-sealed illuminated displays providing uniform, flicker-free commercial brilliance.'
      },
      {
        title: 'Hoarding with Structure',
        badge: 'Construction & Site',
        description:
          'Engineered site hoardings, perimeter boundary barricades, and branded steel substructures built specifically for real estate developers and commercial construction sites.'
      },
      {
        title: 'Flex Banner & Fencing',
        badge: 'Large Format',
        description:
          'High-density UV-printed heavy flex banners, wind-permeable mesh fencing graphics, and perimeter barrier branding fabricated for superior outdoor durability and wind resistance.'
      },
      {
        title: 'Flags',
        badge: 'Outdoor Branding',
        description:
          'Premium outdoor teardrop flags, promotional feather banners, telescopic flagpole systems, and official corporate flag installations tailored for car showrooms and forecourts.'
      },
      {
        title: 'Pylon Signs',
        badge: 'Freestanding Monoliths',
        description:
          'Freestanding multi-tenant directory pylons, architectural ACP totem monoliths, and roadside entrance pillars equipped with internal LED illumination and certified foundation anchoring.'
      }
    ],
    features: [
      '100% in-house CNC routing, laser cutting, acrylic thermoforming & metal fabrication',
      'Weather-sealed IP67/IP68 energy-efficient LED modules with daylight sensor controls',
      'Structural wind-load calculations, foundation engineering drawings & safety compliance',
      'Turnkey site survey, high-rise facade rigging, municipality permit support & warranties'
    ],
    cards: [
      {
        number: '01',
        badge: 'Indoor / Outdoor',
        emoji: '✨',
        title: '3D LED Channel Letters',
        caption: 'Energy-efficient illuminated acrylic and metal channel letters engineered with day/night sensors for 24/7 visibility.'
      },
      {
        number: '02',
        badge: 'Unipolar Signs',
        emoji: '🛣️',
        title: 'Highway Unipolar Rigs',
        caption: 'Heavy-duty single-pole steel structures engineered for long-distance highway brand impact.'
      },
      {
        number: '03',
        badge: 'Light Boxes',
        emoji: '💡',
        title: 'LED Fabric & Slim Light Boxes',
        caption: 'Uniform backlit and edge-lit profile systems delivering ultra-crisp graphics day and night.'
      },
      {
        number: '04',
        badge: 'Hoardings & Fencing',
        emoji: '🏗️',
        title: 'Site Hoardings & Flex Fencing',
        caption: 'Wind-resistant construction barricades and perimeter mesh banners for property launches.'
      },
      {
        number: '05',
        badge: 'Pylon Signs',
        emoji: '🏢',
        title: 'Architectural ACP Pylons',
        caption: 'Freestanding entrance monoliths with internal LED lighting and multi-tenant directory slots.'
      }
    ],
    workDescription:
      'From 60-foot rooftop commercial crests and highway unipolar monoliths to multi-tenant shopping mall pylons, explore representative signage implementations fabricated by our in-house production team.',
    projects: [
      {
        title: 'Apex Commercial Tower Rooftop Signage',
        category: 'Exterior Facade & 3D Letters',
        description:
          '60-foot rooftop illuminated letter installation with custom steel substructure and automatic ambient light sensor controls.',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Metropolis Mall 4-Story Entrance Pylon',
        category: 'Freestanding Pylon & Directory',
        description:
          'Reinforced ACP pylon sign with CNC routed acrylic logos and illuminated directory panels for 40+ premier retail brands.',
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Horizon Corporate Campus Wayfinding Network',
        category: 'Campus Navigation & Wayfinding',
        description:
          'Comprehensive multi-tier wayfinding system spanning vehicular roadway totems, pedestrian directional monoliths, and ADA compliant door signs.',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
        caption: 'Illuminated 3D Facade Channel Letters'
      },
      {
        url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
        caption: 'Retail Storefront Backlit Signboard'
      },
      {
        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80',
        caption: 'Corporate Lobby Acrylic Emblem'
      },
      {
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=900&q=80',
        caption: 'Outdoor Freestanding Entrance Pylon'
      },
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
        caption: 'Bespoke Architectural Neon Installation'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
        caption: 'Certified High-Rise Structural Rigging'
      }
    ],
    ctaText: 'Request a Signage Site Survey & Estimate'
  },

  {
    id: 'led-screen-supply-installation',
    slug: 'led-screen-supply-installation',
    title: 'LED Screen Supply & Installation',
    tagline: 'High-Definition LED Displays',
    headline: "SEAMLESS INDOOR FINE-PITCH VIDEO WALLS & WEATHERPROOF OUTDOOR LED DISPLAYS",
    shortDescription:
      'Turnkey supply, structural rigging, calibration, and support of indoor fine-pitch video walls, IP65 outdoor screens, curved stages, and NovaStar 4K processors.',
    fullDescription:
      'Jackson Advertising provides turnkey LED display solutions engineered for auditoriums, retail flagships, corporate boardrooms, sports arenas, and outdoor advertising networks. We supply and integrate ultra-fine-pitch indoor screens, rugged IP65-rated outdoor video walls, and curved rental displays powered by industry-leading NovaStar 4K video processors for crystal-clear clarity, true HDR contrast, and seamless visual performance.',
    mainImage:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    heroBackgroundImage:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=85',
    serviceCategories: [
      {
        title: 'Indoor Fine-Pitch LED Video Walls',
        badge: 'Ultra HD',
        description:
          'Seamless P1.2, P1.5, and P1.8 ultra-high-definition video walls designed for mission-critical command centers, boardrooms, and luxury showrooms with zero bezel interruption.'
      },
      {
        title: 'Outdoor IP65 LED Screens',
        badge: 'Weatherproof',
        description:
          'High-brightness (6,500+ nits) outdoor P3.9 and P4.8 displays engineered for direct sunlight readability, dust resistance, and severe temperature resilience.'
      },
      {
        title: 'Curved & Creative Stage Backdrops',
        badge: 'Event & Rental',
        description:
          'Flexible concave and convex LED panel configurations engineered for immersive stage backdrops, broadcast television studios, and architectural retail installations.'
      },
      {
        title: 'Commercial Advertising & Perimeter Ribbons',
        badge: 'Commercial Media',
        description:
          'High-impact commercial billboard LED displays, continuous sports stadium perimeter ribbons, and multi-screen synchronized shopping mall displays.'
      },
      {
        title: 'NovaStar 4K Video Processors & Splicing',
        badge: 'Video Control',
        description:
          'Advanced multi-input 4K hardware controllers, fiber-optic signal distribution, low-latency video switching, and professional spectrophotometer color calibration.'
      }
    ],
    features: [
      'Ultra-high 3,840Hz+ refresh rates ensuring flicker-free broadcast camera capture',
      'Energy-efficient SMD and COB LED packaging with low power consumption & heat dissipation',
      'Structural ground support stacking, ceiling truss rigging & precision flush wall-mounting',
      'Comprehensive 24/7 technical hotline, module-level spare parts & on-site warranty'
    ],
    cards: [
      {
        number: '01',
        badge: 'Fine-Pitch',
        emoji: '📺',
        title: 'Indoor P1.5/P1.8 Video Walls',
        caption: 'Zero-bezel video walls delivering ultra-high resolution and wide viewing angles for executive spaces.'
      },
      {
        number: '02',
        badge: 'Outdoor IP65',
        emoji: '☀️',
        title: 'High-Brightness Outdoor Screens',
        caption: '6,500+ nits daylight-readable displays built for extreme desert climate and UV resistance.'
      },
      {
        number: '03',
        badge: 'Curved Rigs',
        emoji: '🔄',
        title: 'Curved Creative Stage Walls',
        caption: 'Concave and convex smooth curved panel arrangements creating immersive conference stages.'
      },
      {
        number: '04',
        badge: 'Controllers',
        emoji: '🎛️',
        title: 'NovaStar 4K Processing',
        caption: 'Ultra-low latency 4K video scaling, redundant signal looping, and HDR10 color calibration.'
      },
      {
        number: '05',
        badge: 'Support',
        emoji: '🛠️',
        title: 'Turnkey Rigging & Maintenance',
        caption: 'Certified structural truss installation, front-service module repair, and 24/7 technical assistance.'
      }
    ],
    workDescription:
      'From executive boardroom fine-pitch displays to multi-panel festival stage backdrops and outdoor commercial billboards, explore our turnkey LED installations.',
    projects: [
      {
        title: 'Global Fintech Summit 24x6m Curved Stage LED',
        category: 'Conferences & Event Production',
        description:
          'Ultra-wide P2.5 curved video wall with dual NovaStar 4K processors, live multi-feed switching, and synchronized stage lighting.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Corporate Headquarters Executive Boardroom Wall',
        category: 'Corporate AV Installation',
        description:
          'Seamless P1.5 fine-pitch LED display with motorized front-access mounting, wireless video conferencing, and acoustic paneling integration.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'City Center Mall Outdoor Commercial Billboard',
        category: 'Outdoor Commercial Advertising',
        description:
          'Weatherproof IP65 outdoor P3.9 display with automatic brightness dimming, remote content management, and structural steel reinforcement.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
        caption: 'Concert & Arena Curved LED Video Wall'
      },
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        caption: 'Executive Boardroom Fine-Pitch LED Display'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
        caption: 'Outdoor High-Brightness Event LED Screen'
      },
      {
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
        caption: 'Synchronized Stage Lighting & Video Rig'
      },
      {
        url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
        caption: 'Festival Mainstage Production Display'
      },
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
        caption: 'Broadcast Studio Modular LED Backdrop'
      }
    ],
    ctaText: 'Inquire About LED Video Wall Supply & Installation'
  },

  {
    id: 'kiosk-design-installation',
    slug: 'kiosk-design-installation',
    title: 'Kiosk Design & Installation',
    tagline: 'Interactive Digital Terminals',
    headline: "INTERACTIVE TOUCHSCREEN KIOSKS, DIGITAL WAYFINDING & SELF-SERVICE TERMINALS",
    shortDescription:
      'Custom-engineered interactive kiosks, 10-point multi-touch wayfinding totems, digital menu boards, and tamper-proof metal enclosures designed for high-traffic public venues.',
    fullDescription:
      'Jackson Advertising designs and fabricates custom interactive digital kiosks that elevate public and commercial environments. Across shopping malls, healthcare centers, airports, and corporate complexes, our kiosks integrate responsive 10-point capacitive touchscreens, industrial mini-PCs, thermal cooling, and robust powder-coated steel enclosures engineered for continuous 24/7 public operation.',
    mainImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroBackgroundImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=85',
    serviceCategories: [
      {
        title: 'Interactive Multi-Touch Kiosks',
        badge: 'Capacitive Touch',
        description:
          '21.5" to 65" commercial capacitive multi-touch displays with rapid 5ms response time, 4mm toughened glass, and responsive multi-user interaction.'
      },
      {
        title: 'Digital Wayfinding & Directory Totems',
        badge: 'Wayfinding',
        description:
          'Multi-floor 3D campus navigation, interactive floor plans, search directories, and turn-by-turn route mapping designed for shopping malls and hospitals.'
      },
      {
        title: 'Self-Service Information & Check-In Pods',
        badge: 'Automated Service',
        description:
          'Automated visitor check-in, queue ticketing, bill payment, and badge printing terminals with integrated thermal receipt printers, QR/barcode readers, and POS mounts.'
      },
      {
        title: 'Digital Menu Boards & Advertising Totems',
        badge: 'Digital Signage',
        description:
          'High-contrast commercial digital menu boards and dual-sided freestanding advertising displays with remote cloud-based content scheduling.'
      },
      {
        title: 'Custom Fabricated Sheet Metal Enclosures',
        badge: 'Industrial Design',
        description:
          'Bespoke steel and aluminium enclosures built with electrostatic powder-coating, concealed maintenance access, forced-air cooling, and security locks.'
      }
    ],
    features: [
      'Commercial-grade displays rated for continuous 24/7 operation (50,000+ hours MTBF)',
      '10-point projected capacitive (PCAP) touch sensors functional with gloved hands',
      'Vandal-resistant 4mm tempered safety glass with anti-glare and oleophobic coatings',
      'Turnkey hardware architecture: Intel Core mini-PCs, Android players, UPS & thermal fail-safes'
    ],
    cards: [
      {
        number: '01',
        badge: 'Touchscreens',
        emoji: '📱',
        title: 'Capacitive Multi-Touch Displays',
        caption: 'Commercial 10-point capacitive touch panels from 21.5" to 65" designed for responsive 24/7 public use.'
      },
      {
        number: '02',
        badge: 'Metal Enclosures',
        emoji: '🛡️',
        title: 'Tamper-Proof Metal Housing',
        caption: 'Laser-cut electro-galvanized steel enclosures with forced ventilation and secure key locks.'
      },
      {
        number: '03',
        badge: 'Wayfinding',
        emoji: '🗺️',
        title: '3D Wayfinding Directory Totems',
        caption: 'Interactive facility maps, tenant directories, and multi-language guidance for high-footfall centers.'
      },
      {
        number: '04',
        badge: 'Hardware Sync',
        emoji: '🖨️',
        title: 'Peripheral Integration',
        caption: 'Seamless integration of thermal barcode scanners, badge printers, card readers, and webcams.'
      },
      {
        number: '05',
        badge: 'Turnkey Support',
        emoji: '⚡',
        title: 'Turnkey Installation & SLA',
        caption: 'On-site bolting to structural floor slabs, network cabling, and preventative warranty support.'
      }
    ],
    workDescription:
      'Explore representative kiosk deployments engineered by Jackson Advertising—from automated airport check-in terminals to interactive mall directories.',
    projects: [
      {
        title: 'Metropolis Mall 55" Dual-Sided Wayfinding Totems',
        category: 'Interactive Wayfinding',
        description:
          '12 dual-sided 4K capacitive touch kiosks with integrated 3D pathfinding software and ADA-compliant accessibility modes.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'International Hospital Self-Service Check-In Pods',
        category: 'Healthcare Self-Service',
        description:
          'Custom anti-microbial powder-coated kiosks with integrated passport readers, thermal label printers, and sanitary wipes dispensaries.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Corporate Campus Digital Directory & Room Booking',
        category: 'Corporate Smart Office',
        description:
          'Ultra-slim wall-mounted interactive displays synchronized with Microsoft Outlook and Google Calendar for real-time meeting room occupancy.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
        caption: 'Interactive Commercial Touchscreen Kiosk'
      },
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
        caption: 'Self-Service Automated Airport Terminal'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
        caption: 'Corporate Lobby Digital Directory Display'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        caption: 'Interactive Retail Product Selector'
      },
      {
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
        caption: 'Commercial Wayfinding Navigation Software'
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom Sheet Metal CNC Fabrication'
      }
    ],
    ctaText: 'Request a Custom Kiosk Prototype & Estimate'
  },

  {
    id: 'exhibition-stalls-stands',
    slug: 'exhibition-stalls-stands',
    title: 'Exhibition Stalls & Stands',
    tagline: 'Custom Trade Show Pavilions',
    headline: "BESPOKE 3D EXHIBITION BOOTHS, MODULAR STANDS & TURNKEY EXPO PAVILIONS",
    shortDescription:
      'Turnkey custom 3D exhibition booth designs, precision carpentry fabrication, modular aluminium systems, and on-site assembly for premier international trade expos.',
    fullDescription:
      'Jackson Advertising converts trade show footprints into immersive brand environments that attract foot traffic and drive business deals. We deliver turnkey exhibition solutions: photorealistic 3D spatial concept design, structural carpentry and metal fabrication, paint lacquer finishes, integrated AV technology, graphic printing, and white-glove on-site assembly and post-event dismantling.',
    mainImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    heroBackgroundImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=85',
    serviceCategories: [
      {
        title: 'Bespoke Custom 3D Booths',
        badge: 'Custom Carpentry',
        description:
          'One-of-a-kind timber and steel structural exhibition designs featuring double-decker VIP lounges, sculpted architectural arches, and private meeting suites.'
      },
      {
        title: 'Modular Aluminium Systems',
        badge: 'Modular & Reusable',
        description:
          'Scalable, cost-effective Octanorm and Maxima structural booth systems allowing fast multi-city deployment with seamless tension fabric graphics.'
      },
      {
        title: 'Island & Peninsula Pavilions',
        badge: '360° Open Access',
        description:
          'Open-concept exhibition stands maximizing attendee traffic flow, long-range overhead sightlines, and dedicated interactive demo stations.'
      },
      {
        title: 'Product Display Podiums & Counters',
        badge: 'Showcase Units',
        description:
          'Custom illuminated vitrines, lockable display plinths, reception desks, and ergonomic product demonstration counters with integrated power ports.'
      },
      {
        title: 'Turnkey On-Site Assembly & Rigging',
        badge: 'Full Production',
        description:
          'Certified exhibition hall rigging, electrical power distribution, structural safety sign-offs, and 24/7 on-site technical assistance throughout the event.'
      }
    ],
    features: [
      'Comprehensive 3D concept design with photorealistic spatial renders and walkthroughs',
      'In-house carpentry facility with precision CNC routing, lacquering & laminate finishing',
      'Seamless audiovisual integration: fine-pitch LED video walls, sound systems & kiosks',
      'Certified structural engineering approvals, venue paperwork & turnkey showday handover'
    ],
    cards: [
      {
        number: '01',
        badge: '3D Concept',
        emoji: '📐',
        title: 'Photorealistic 3D Booth Design',
        caption: 'Spatial modeling, walkthrough renders, material swatches, and structural engineering calculations.'
      },
      {
        number: '02',
        badge: 'Wood Carpentry',
        emoji: '🪵',
        title: 'In-House Custom Carpentry',
        caption: 'Heavy-duty timber frames, laminate finishes, spray-painted surfaces, and double-decker structures.'
      },
      {
        number: '03',
        badge: 'Modular Systems',
        emoji: '🧩',
        title: 'Modular Octanorm Systems',
        caption: 'Sustainable reusable aluminium frames combined with silicone-edge fabric tension graphics.'
      },
      {
        number: '04',
        badge: 'AV Rigging',
        emoji: '💡',
        title: 'Integrated AV & Lighting Truss',
        caption: 'Overhead hanging banners, theatrical spotlights, LED video walls, and audio domes.'
      },
      {
        number: '05',
        badge: 'Showday Handover',
        emoji: '⏱️',
        title: 'Turnkey On-Site Execution',
        caption: 'Guaranteed 24 hours pre-show handover with dedicated project manager on standby.'
      }
    ],
    workDescription:
      'View examples of bespoke exhibition pavilions, modular expo booths, and award-winning trade fair stands constructed by Jackson Advertising.',
    projects: [
      {
        title: 'World Energy Congress 180 sqm Custom Pavilion',
        category: 'Custom 3D Exhibition Stand',
        description:
          'Double-height timber pavilion with curved overhead canopy, 4K LED video wall, two private VIP boardrooms, and live demonstration bar.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Arabian Travel Market Interactive Tourism Stand',
        category: 'Island Expo Booth',
        description:
          'Four-side open island stand featuring 8 interactive touchscreen kiosks, backlit tension fabric walls, and custom reception counter.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Healthcare Expo Modular Octanorm Booth',
        category: 'Modular System Installation',
        description:
          'Scalable 36 sqm modular booth with integrated display vitrines, seamless fabric graphics, and high-efficiency LED spotlights.',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom Built Trade Show Exhibition Pavilion'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80',
        caption: 'Corporate Conference Stage & Presentation Hall'
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
        caption: 'Exhibition Stand Product Showcase Lighting'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
        caption: 'Overhead Truss & Lighting Rigging'
      },
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        caption: 'Trade Expo Client Meeting Lounge'
      },
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        caption: 'Bespoke Wooden Display Counter & Podium'
      }
    ],
    ctaText: 'Book Your Exhibition Stand 3D Concept Design'
  },

  {
    id: 'branding-solutions',
    slug: 'branding-solutions',
    title: 'Branding Solutions',
    tagline: 'Environmental & Vehicle Branding',
    headline: "CORPORATE RECEPTION 3D LOGOS, WALL GRAPHICS & COMMERCIAL FLEET WRAPS",
    shortDescription:
      'Turnkey physical branding solutions—from brushed metal lobby emblems and architectural wall murals to frosted window privacy films and commercial fleet vehicle wraps.',
    fullDescription:
      'Jackson Advertising translates digital brand identities into tactile physical environments. Across corporate headquarters, retail flagships, and mobile logistics fleets, we execute architectural interior branding: laser-cut 3D reception emblems, floor-to-ceiling vinyl wall murals, frosted glass manifestations, and certified 3M commercial vehicle wraps engineered to maintain vibrant color accuracy.',
    mainImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    heroBackgroundImage:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=85',
    serviceCategories: [
      {
        title: 'Reception & Lobby 3D Logos',
        badge: 'Lobby Identity',
        description:
          'Precision CNC-cut brushed brass, mirror stainless steel, edge-lit acrylic, and matte aluminium 3D emblems crafted to make impressive first impressions.'
      },
      {
        title: 'Architectural Wall Murals & Vinyl Graphics',
        badge: 'Interior Walls',
        description:
          'High-resolution seamless vinyl wall coverings, textured canvas graphics, acoustic felt panels, and motivational office murals with zero chemical off-gassing.'
      },
      {
        title: 'Window Graphics & Frosted Privacy Films',
        badge: 'Glass Manifestation',
        description:
          'Plotter-cut frosted privacy films, custom etched-glass patterns, decorative corporate stripes, and perforated one-way vision exterior window graphics.'
      },
      {
        title: 'Commercial Fleet & Vehicle Wraps',
        badge: 'Vehicle Branding',
        description:
          'Full-body cast vinyl vehicle wraps, magnetic door signs, and delivery van fleet graphics protected with scratch-resistant and UV-protective overlaminates.'
      },
      {
        title: 'Environmental Campus Wayfinding Branding',
        badge: 'Facility Branding',
        description:
          'Cohesive spatial branding integrating lift lobby graphics, pillar wraps, safety glass markings, and directional indicators across corporate facilities.'
      }
    ],
    features: [
      'Top-tier architectural materials exclusively from 3M, Avery Dennison, and Plexiglas',
      'Ultra-high resolution 1,440 DPI UV and latex printing with scratch-resistant laminates',
      'Certified professional installers ensuring seamless alignment, zero bubbles & durability',
      'Strict brand guideline adherence with digital spectrophotometer Pantone color matching'
    ],
    cards: [
      {
        number: '01',
        badge: '3D Lobby Logos',
        emoji: '🏢',
        title: 'Reception & Lobby Identity',
        caption: 'Brushed brass, stainless steel, and edge-lit acrylic emblems engineered to make unforgettable impressions.'
      },
      {
        number: '02',
        badge: 'Wall Murals',
        emoji: '🎨',
        title: 'Seamless Wall Coverings',
        caption: 'High-resolution architectural vinyl murals, acoustic fabric wraps, and motivational workspace graphics.'
      },
      {
        number: '03',
        badge: 'Glass Films',
        emoji: '🪟',
        title: 'Frosted Glass Privacy Films',
        caption: 'Custom etched-glass patterns, computer-cut privacy bands, and building compliance safety dots.'
      },
      {
        number: '04',
        badge: 'Fleet Wraps',
        emoji: '🚐',
        title: 'Commercial Vehicle Wraps',
        caption: 'Full-body cast vinyl branding for delivery vans and corporate vehicle fleets with UV overlaminate.'
      },
      {
        number: '05',
        badge: 'Turnkey Rollout',
        emoji: '🏷️',
        title: 'Multi-Site Rollout Execution',
        caption: 'Cohesive multi-branch brand deployment with standardized color calibration and inspection.'
      }
    ],
    workDescription:
      'Explore representative interior workspace transformations, corporate reception backdrops, and commercial fleet vehicle wraps delivered by Jackson Advertising.',
    projects: [
      {
        title: 'Vanguard Headquarters Lobby & Wall Graphics',
        category: 'Corporate Office Branding',
        description:
          'Overhead brushed titanium 3D logo with rear halo LED illumination, accompanied by 3 floors of custom printed acoustic felt murals.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Logistics Fleet 50-Van Cast Vinyl Branding',
        category: 'Commercial Vehicle Fleet Wrap',
        description:
          'Standardized cast vinyl wrap rollout across 50 delivery vans with anti-graffiti overlaminates and 5-year outdoor warranty.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Retail Flagship Frosted Glass & Storefront Manifestation',
        category: 'Retail Storefront Branding',
        description:
          'Precision plotter-cut decorative frosted vinyl window films, dimensional cash-wrap signage, and illuminated promotional displays.',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
        caption: 'Corporate Headquarters Lobby 3D Emblem'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
        caption: 'Architectural Office Wall Mural & Graphics'
      },
      {
        url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
        caption: 'Frosted Glass Privacy Film Manifestation'
      },
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
        caption: 'Commercial Delivery Van Fleet Branding'
      },
      {
        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80',
        caption: 'Precision CNC Acrylic Logo Fabrication'
      },
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        caption: 'Creative Agency Environmental Graphics'
      }
    ],
    ctaText: 'Discuss Your Corporate Branding Requirements'
  },

  {
    id: 'promotional-items-corporate-gifts',
    slug: 'promotional-items-corporate-gifts',
    title: 'Promotional Items & Corporate Gifts',
    tagline: 'Premium Executive Merchandise',
    headline: "CURATED EXECUTIVE WELCOME KITS, BRANDED TECH ACCESSORIES & LUXURY GIFTS",
    shortDescription:
      'High-retention executive welcome kits, custom laser-engraved tech items, vacuum-insulated drinkware, luxury leather journals, and branded corporate merchandise.',
    fullDescription:
      'Jackson Advertising creates premium corporate gifts and branded merchandise collections that leave lasting impressions on VIP clients, partners, and employees. From customized executive onboarding gift boxes to conference attendee packs and sustainable eco-friendly merchandise, we manage global sourcing, precision branding (laser engraving, UV debossing, embroidery), and bespoke presentation packaging.',
    mainImage:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    heroBackgroundImage:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1920&q=85',
    serviceCategories: [
      {
        title: 'Executive Onboarding Hampers',
        badge: 'Welcome Kits',
        description:
          'Bespoke rigid magnetic gift boxes featuring double-wall stainless steel tumblers, leatherbound journals, metal rollerball pens, and welcome letters.'
      },
      {
        title: 'Branded Tech Accessories & Gadgets',
        badge: 'Tech Gifts',
        description:
          'High-speed wireless charging pads, fast-charging power banks, noise-canceling Bluetooth earbuds, and encrypted USB drives with subtle laser engraving.'
      },
      {
        title: 'Insulated Drinkware & Tumblers',
        badge: 'Drinkware',
        description:
          'Double-wall vacuum-insulated stainless steel water bottles, thermal coffee mugs, and ceramic tumblers designed for all-day temperature retention.'
      },
      {
        title: 'Luxury Stationery & Leather Diaries',
        badge: 'Executive Stationery',
        description:
          'Handcrafted PU and genuine leather notebooks, refillable organizers, debossed portfolio folders, and weighted executive metal pens in gift cases.'
      },
      {
        title: 'Corporate Apparel & Eco Merchandise',
        badge: 'Apparel & Eco',
        description:
          'Custom embroidered piqué cotton polo shirts, organic cotton tote bags, bamboo desk organizers, and sustainable wheat-straw office accessories.'
      }
    ],
    features: [
      'Advanced branding techniques: fiber laser engraving, rotary UV print, debossing & embroidery',
      'Bespoke gift box packaging with custom high-density EVA foam cutouts & branded ribbon',
      'Rigorous quality control inspections on every single unit prior to batch dispatch',
      'Turnkey multi-location doorstep delivery, export documentation & warehousing options'
    ],
    cards: [
      {
        number: '01',
        badge: 'Welcome Kits',
        emoji: '🎁',
        title: 'Curated Executive Welcome Kits',
        caption: 'Custom-packaged onboarding hampers featuring thermal tumblers, leather journals, and stationery.'
      },
      {
        number: '02',
        badge: 'Tech Gifts',
        emoji: '⚡',
        title: 'Precision Engraved Tech Gadgets',
        caption: 'Fast-charging wireless power banks, Bluetooth speakers, and encrypted USBs with subtle logos.'
      },
      {
        number: '03',
        badge: 'Drinkware',
        emoji: '☕',
        title: 'Thermal Stainless Drinkware',
        caption: 'Vacuum-insulated stainless steel bottles and mugs keeping beverages cold for 24h or hot for 12h.'
      },
      {
        number: '04',
        badge: 'Custom Boxes',
        emoji: '📦',
        title: 'Bespoke Rigid Gift Packaging',
        caption: 'Magnetic closure luxury boxes with customized high-density foam inserts and hot-foil stamping.'
      },
      {
        number: '05',
        badge: 'Apparel & Eco',
        emoji: '👕',
        title: 'Corporate Apparel & Eco Gifts',
        caption: 'Embroidered cotton polo shirts, organic canvas totes, and sustainable bamboo desktop organizers.'
      }
    ],
    workDescription:
      'View examples of custom-curated VIP gift hampers, corporate conference giveaways, and branded executive merchandise produced by our production team.',
    projects: [
      {
        title: 'Leadership Summit VIP Executive Gift Box',
        category: 'Custom Corporate Gift Hamper',
        description:
          'Matte black magnetic box containing laser-engraved 10,000mAh wireless power bank, thermal flask, leather journal, and custom lapel pin.',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Tech Enterprise 500-Employee Welcome Hamper',
        category: 'New Hire Onboarding Kit',
        description:
          'Branded onboarding pack including organic cotton hoodie, vacuum tumbler, laptop sleeve, and personalized welcome card.',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Annual Partner Gala Commemorative Awards & Gift Set',
        category: 'Commemorative Awards & Gifts',
        description:
          'Optical crystal awards with 3D internal laser etching, accompanied by premium metallic pen sets in velvet-lined presentation cases.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
      }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom Executive Gift Hamper & Rigid Box'
      },
      {
        url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
        caption: 'Luxury Corporate Presentation Gift Packaging'
      },
      {
        url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
        caption: 'Laser-Engraved Premium Tech Accessories'
      },
      {
        url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
        caption: 'Double-Wall Stainless Steel Drinkware'
      },
      {
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
        caption: 'Custom Embroidered Corporate Apparel'
      },
      {
        url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
        caption: 'Debossed Leather Executive Organizers'
      }
    ],
    ctaText: 'Request a Corporate Gift Catalog & Sample Kit'
  }
];

export const SERVICES_LIST = servicesData.map((s) => ({
  id: s.id,
  slug: s.slug,
  title: s.title,
  shortDesc: s.shortDescription,
  fullDesc: s.fullDescription,
  highlights: s.features ? s.features.slice(0, 3) : [],
  imageUrl: s.mainImage,
  secondaryImageUrl: s.galleryImages && s.galleryImages[1] ? s.galleryImages[1].url : s.mainImage
}));
