import type { SiteContent } from "@/data/site-content";
import { getContactHref } from "@/lib/contact";

export const enContent: SiteContent = {
  locale: "en",
  localeName: "English",
  seo: {
    title: "APAAI | Inclusive Aikido for inclusion, autonomy and wellbeing",
    description:
      "APAAI - Portuguese Association of Inclusive Adapted Aikido. Sessions, training and partnerships for inclusion, autonomy and wellbeing.",
  },
  skipToContent: "Skip to content",
  headerCta: {
    label: "Discuss partnerships",
    href: getContactHref("en", "partnership"),
    variant: "primary",
  },
  nav: [
    { label: "Home", href: "/en" },
    { label: "About", href: "/en#about" },
    { label: "Project", href: "/en#project" },
    { label: "Impact", href: "/en#impact" },
    { label: "Partnerships", href: "/en#partnerships" },
    { label: "Where We Are", href: "/en#locations" },
    { label: "News", href: "/en#news" },
    { label: "Get Involved", href: "/en#get-involved" },
    { label: "Contact", href: "/en#contact" },
  ],
  hero: {
    eyebrow: "APAAI | Portuguese Association of Inclusive Adapted Aikido",
    title: "Aikido belongs to everyone. We adapt the path, never the value.",
    subtitle:
      "We develop sessions and partnerships that turn adapted Aikido into a real tool for inclusion, autonomy and wellbeing.",
    primaryCta: {
      label: "I want to join",
      href: getContactHref("en", "participation"),
      variant: "primary",
    },
    secondaryCta: {
      label: "I want to partner",
      href: "/en/#partnerships",
      variant: "secondary",
    },
    proof: [
      "Field work in institutions and community settings.",
      "Inclusive methodology focused on individual progression.",
      "Built for local, national and European growth.",
    ],
    posterKicker: "Aikido Inclusive Project",
    posterTitle: "A structured practice for inclusion with continuity.",
    posterBody:
      "We connect body practice, relationships, autonomy and belonging in a credible model for municipalities, schools, social organisations, families and funders.",
    posterHighlights: [
      "Adapted classes with human-centred support",
      "Training for teams and practitioners",
      "Partnerships designed for scale",
    ],
  },
  story: {
    eyebrow: "About",
    title:
      "A project built in real settings and designed to grow with credibility.",
    description: "We work with real people, real stories and real challenges.",
    introduction:
      "APAAI - the Portuguese Association of Inclusive Adapted Aikido - grew from practical field experience and the conviction that Aikido can be adapted to enable meaningful participation for people with different abilities and needs.",
    cards: [
      {
        icon: "movement",
        title: "Mission in real contexts",
        description:
          "We bring the practice to children, young people and adults while respecting each person’s rhythm, communication and needs.",
      },
      {
        icon: "shield",
        title: "Progression through adaptation",
        description:
          "Each person progresses at their own pace, with safety, confidence and close support.",
      },
      {
        icon: "globe",
        title: "Ready to scale",
        description:
          "A project prepared to grow with real impact for people and communities.",
      },
    ],
  },
  team: {
    eyebrow: "On-the-ground team",
    title: "A team close to the practice and to people.",
    description:
      "Trust is built through direct contact: listening, adapting and supporting each person during practice.",
    members: [
      {
        name: "Hélder Oliveira Rodrigues",
        role: "Project coordination and development",
        description:
          "Experience teaching Aikido and Adapted Aikido in real settings.",
      },
      {
        name: "APAAI technical team",
        role: "Technical support and session development",
        description:
          "On-the-ground support, practice adaptation and participant progression.",
      },
    ],
  },
  programs: {
    eyebrow: "The project",
    title: "What we do to turn inclusion into real practice.",
    description:
      "Our intervention adapts to each person and each context while keeping a consistent, close and results-oriented way of working.",
    cards: [
      {
        icon: "movement",
        title: "Inclusive Adapted Aikido",
        description:
          "Sessions adapted to people with different needs, focused on participation, confidence and individual development.",
      },
      {
        icon: "users",
        title: "Regular Classes",
        description:
          "Weekly sessions that promote routine, progression and group integration through continuous and accessible practice.",
      },
      {
        icon: "graduation",
        title: "Training and Capacity Building",
        description:
          "Training for technicians, teachers and partners, focused on adapting the practice with safety, clarity and pedagogical intention.",
      },
      {
        icon: "calendar",
        title: "Events",
        description:
          "Activities, demonstrations and meetings that give visibility to the project and strengthen its connection with the community.",
      },
    ],
    methodologyTitle: "How we work",
    methodologyBody:
      "We begin by listening and understanding each context. Then we adapt the practice to each person’s rhythm and needs. The result is close, structured work with real impact.",
    methodologyPoints: [
      "Functional, relational and communication-based adaptation",
      "Safe environments with real progression and active participation",
      "A clear link between practice, confidence, inclusion and autonomy",
    ],
    programmeDescription:
      "APAAI's work is supported by its own Technical and Pedagogical Programme, currently in development, which organises principles, methods and criteria for adaptation and progression in Inclusive Adapted Aikido.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Impact measured in body awareness, confidence and connection.",
    description:
      "The project’s impact goes beyond physical activity. It lives in the way each person participates, progresses and feels included.",
    metrics: [
      {
        value: "40+",
        label: "People involved",
        detail:
          "Practitioners, technical team and participants involved in the project's different activities.",
      },
      {
        value: "13",
        label: "Practitioners with disabilities",
        detail: "Participation in Inclusive Adapted Aikido.",
      },
      {
        label: "Different settings for our work",
        detail:
          "Institutions, community, teaching, demonstrations and training activities.",
      },
      {
        label: "Experience built on the ground",
        detail:
          "Work developed in real settings, with continuous adaptation and close support.",
      },
    ],
    outcomesTitle: "Human outcomes that matter",
    outcomes: [
      "More confidence: practice strengthens trust, safety and presence.",
      "More inclusion: each class creates belonging, relationship and recognition.",
      "More development: improved coordination, body awareness and adaptive capacity.",
    ],
  },
  credibility: {
    eyebrow: "Partnerships and credibility",
    title:
      "A network of partners bringing Inclusive Adapted Aikido to more people and communities.",
    description:
      "APAAI works with associations, social institutions, local authorities, sports organisations and national and international partners, building cooperative relationships around inclusion, proximity and the development of Inclusive Adapted Aikido.",
    cards: [
      {
        icon: "handshake",
        title: "Experience in real institutions",
        description:
          "Work developed in contexts such as Raríssimas and CERCIMB shows that the methodology can live where inclusion needs to happen every day.",
      },
      {
        icon: "path",
        title: "Technical collaboration and cooperation",
        description:
          "APAAI develops technical cooperation within the Aikido community, promoting quality, knowledge sharing and responsible development of adapted and inclusive practice.",
      },
      {
        icon: "spark",
        title: "National and international cooperation",
        description:
          "APAAI participates in developing projects, applications and cooperation networks with local authorities, institutions, education organisations and national and European partners.",
      },
    ],
    partnerCta: {
      label: "Start an institutional conversation",
      href: getContactHref("en", "partnership"),
      variant: "primary",
    },
  },
  roadmap: {
    eyebrow: "Growth vision",
    title: "A national ambition built on local experience.",
    description:
      "The goal goes beyond increasing the number of sessions. It is to develop a structured approach to Inclusive Adapted Aikido that can reach new territories while maintaining quality, safety, proximity and adaptation to each setting.",
    phases: [
      {
        phase: "Short term",
        title: "Strengthen the local base",
        description:
          "Consolidate activities in Baixa da Banheira, Moita and Alhos Vedros, strengthen participation and deepen cooperation with local institutions, associations and authorities.",
      },
      {
        phase: "Medium term",
        title: "Train and expand",
        description:
          "Develop APAAI's Technical and Pedagogical Programme, train practitioners and partner teams, and support new Inclusive Adapted Aikido services and groups alongside institutions, local authorities, schools and social organisations.",
      },
      {
        phase: "Long term",
        title: "Build a national and international network",
        description:
          "Establish APAAI as a reference in Inclusive Adapted Aikido through national and international cooperation, participation in European projects and sharing knowledge and good practices.",
      },
    ],
  },
  locations: {
    eyebrow: "Where we are",
    title: "South bank roots. Portugal-wide horizon.",
    description:
      "APAAI currently works across several territories on the south bank of the Tagus, close to people, institutions, associations and local communities. From this base, we continue to build a network that can bring Inclusive Adapted Aikido to new territories.",
    cards: [
      {
        icon: "pin",
        title: "Baixa da Banheira",
        description:
          "One of APAAI's home territories, where we carry out activities and maintain close connections with the community and local partners.",
      },
      {
        icon: "pin",
        title: "Moita",
        description:
          "Development of Inclusive Adapted Aikido in community settings alongside local authorities and partners.",
      },
      {
        icon: "pin",
        title: "Alhos Vedros",
        description:
          "Work in institutional and adapted settings through our cooperation with CERCIMB.",
      },
    ],
  },
  news: {
    eyebrow: "News and events",
    title: "A living showcase of what we do on the ground.",
    description:
      "Follow the activities, projects, events, training and moments that shape APAAI's journey.",
  },
  collaboration: {
    eyebrow: "Get involved",
    title: "There are many ways to get to know and work with APAAI.",
    description:
      "Institutions, families, practitioners and partners can discover the project, take part in our initiatives or develop new ways to collaborate with us.",
    cards: [
      {
        category: "Presentations",
        title: "Discover the project at your institution",
        description:
          "Presentations and practical sessions for institutions and technical teams.",
        cta: "Request a presentation",
        href: getContactHref("en", "presentation"),
      },
      {
        category: "Community",
        title: "Discover and experience Inclusive Adapted Aikido",
        description:
          "Open sessions for participants, families and the community.",
        cta: "Ask for details",
        href: getContactHref("en", "participation"),
      },
      {
        category: "Training and cooperation",
        title: "Training and knowledge-sharing moments",
        description:
          "Training, awareness activities and shared experience for practitioners, teachers, institutions and organisations.",
        cta: "Propose a collaboration",
        href: getContactHref("en", "partnership"),
      },
    ],
  },
  gallery: {
    eyebrow: "Project gallery",
    title: "Real images from APAAI in practice.",
    description:
      "A selection of moments from the project in group work, adapted practice and close support.",
    photos: [
      {
        src: "/media/project/apaai-guided-practice-bw.jpeg",
        alt: "Guided practice moment between instructor and participant in an adapted setting.",
      },
      {
        src: "/media/project/apaai-adapted-partner-drill.jpeg",
        alt: "Partner exercise in a sports setting with adaptation and close support.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let us build impact together.",
    description:
      "If you would like to participate, discover the project, support APAAI, request a presentation or develop a collaboration, talk to us.",
    prompt: "Choose the best way to get in touch with us:",
    quickLinks: [
      {
        label: "I want to join",
        href: getContactHref("en", "participation"),
        variant: "secondary",
      },
      {
        label: "I want to support",
        href: getContactHref("en", "support"),
        variant: "secondary",
      },
      {
        label: "Institutional partnership",
        href: getContactHref("en", "partnership"),
        variant: "secondary",
      },
      {
        label: "APAAI on Facebook",
        href: "https://www.facebook.com/people/Associa%C3%A7%C3%A3o-Portuguesa-de-Aikido-Adaptado-Inclusivo-APAAI/61574527752279/",
        variant: "facebook",
      },
    ],
    whatsappCta: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/351926334870?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20APAAI.",
      variant: "secondary",
    },
    detailsTitle: "Direct contact",
    details: [
      {
        label: "Email",
        value: "appaigeral@gmail.com",
        href: "mailto:appaigeral@gmail.com",
      },
      { label: "Phone", value: "+351 926 334 870", href: "tel:+351926334870" },
      {
        label: "Facebook",
        value: "Portuguese Association of Inclusive Adapted Aikido",
        href: "https://www.facebook.com/people/Associa%C3%A7%C3%A3o-Portuguesa-de-Aikido-Adaptado-Inclusivo-APAAI/61574527752279/",
      },
    ],
    formFields: [
      { label: "Name", name: "name", placeholder: "Your name" },
      {
        label: "Organisation/Institution",
        name: "organization",
        placeholder: "Optional",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "name@example.org",
      },
      { label: "Phone", name: "phone", type: "tel", placeholder: "Optional" },
    ],
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your context, need or idea.",
    submitLabel: "Open email",
    note: "Clicking the button opens your email app with the message prepared for the APAAI team.",
  },
  footer: {
    statement:
      "Inclusion is not an add-on. It is the way we design practice from the very first encounter.",
    location: "Baixa da Banheira · Moita · Alhos Vedros | Portugal",
    rights: "APAAI - Portuguese Association of Inclusive Adapted Aikido",
  },
};
