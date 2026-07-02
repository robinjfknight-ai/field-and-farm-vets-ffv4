export const practice = {
  name: "Field and Farm Vets",
  shortName: "Field & Farm Vets",
  tagline: "Expert large animal care across East Yorkshire",
  legalName: "Field and Farm Vets",
  phone: "01377 252153",
  phoneHref: "tel:+441377252153",
  email: "admin@fieldandfarmvets.co.uk",
  facebook: "https://www.facebook.com/profile.php?id=61572303726423",
  logo: "/logo.jpg",
  emergency: true,
  address: {
    line1: "Manor Farm Offices",
    line2: "Kirkburn",
    area: "Driffield",
    county: "East Yorkshire",
    postcode: "YO25 9DU",
    full: "Manor Farm Offices, Kirkburn, Driffield, East Yorkshire YO25 9DU",
    mapsHref: "https://maps.google.com/?q=Manor+Farm+Offices+Kirkburn+YO25+9DU",
    lat: 53.998,
    lng: -0.451,
  },
} as const;

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

export const team: TeamMember[] = [
  {
    name: "David Smith",
    role: "Director",
    photo: "/images/team/david-smith.jpg",
    bio: "David is a founding director of Field and Farm Vets, bringing decades of large animal experience across East Yorkshire. He has a particular interest in cattle health and production medicine.",
  },
  {
    name: "Emma McArthur",
    role: "Director",
    photo: "/images/team/emma-mcarthur.jpg",
    bio: "Emma is a founding director with wide-ranging experience in farm and equine practice. She is passionate about proactive herd health management and farmer education.",
  },
  {
    name: "Angharad Harper",
    role: "Veterinary Surgeon",
    photo: "/images/team/angharad-harper.jpg",
  },
  {
    name: "Mary Forman",
    role: "Veterinary Surgeon",
    photo: "/images/team/mary-forman.jpg",
  },
  {
    name: "Joshua Smith",
    role: "Veterinary Surgeon",
    photo: "/images/team/joshua-smith.jpg",
  },
  {
    name: "Lucy Steele",
    role: "Veterinary Surgeon",
    photo: "/images/team/lucy-steele.jpg",
  },
  {
    name: "Sam Baker",
    role: "TB Tester",
  },
  {
    name: "Marion Nettleton",
    role: "Administrative Coordinator",
    photo: "/images/team/marion-nettleton.jpg",
  },
  {
    name: "Vickie Neilson",
    role: "Administrative Coordinator",
    photo: "/images/team/vickie-neilson.jpg",
  },
];

export const nav = [
  { href: "/farm", label: "Farm" },
  { href: "/equine", label: "Equine" },
  { href: "/equine-zone-visits", label: "Zone Visits" },
  { href: "/smallholdings", label: "Small-Holdings" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const visitFees = {
  farm: {
    prebooked: { fee: 20.83, label: "Pre-booked routine visit" },
    standard: { fee: 40.87, label: "Standard visit" },
    ooh: { fee: 62.50, label: "Out of hours visit" },
    mileage: 1.05,
    mileageNote: "£1.05/mile (return journey from surgery, exc. VAT)",
    effectiveDate: "2 June 2025",
  },
  equine: {
    zone: { fee: 25, mileageMultiplier: 0.5, label: "Zone visit (pre-booked 48h+)" },
    standard: { fee: 25, label: "Standard visit" },
    emergency: { feeMin: 55, feeMax: 75, label: "Emergency" },
    ooh: { feeMin: 75, feeMax: 125, label: "Out of hours" },
    mileage: 1.25,
    mileageNote: "£1.25/mile (return journey from practice)",
  },
  equineVaccinations: {
    fluTet: 55,
    flu: 47,
    tet: 40,
  },
} as const;

export const smallholdersClub = {
  monthly: 15,
  annual: 180,
  benefits: [
    "Annual medicines and health visit",
    "Veterinary Attestation Number (VAN)",
    "Four pooled faecal worm egg counts per year",
    "Access to vaccine splitting and medicine sharing",
    "WhatsApp group for knowledge transfer",
    "Twice-yearly small-holder knowledge meetings",
  ],
} as const;

export const farmServices = [
  "Routine fertility visits with ultrasound scanning",
  "Herd Health Schemes (CHECS-accredited: IBR, BVDV, leptospirosis, neospora)",
  "Red Tractor assurance scheme annual reviews",
  "Annual Health and Welfare Pathway Review (AHWP)",
  "Veterinary Attestation Number (VAN) provision",
  "TB Testing (via UK Farmcare partnership)",
  "Bull breeding soundness examinations (BCVA trained)",
  "In-house blood sampling and faecal worm egg counts",
  "24-hour, 365-days-a-year emergency service",
  "Laboratory testing via Axiom Laboratories",
] as const;

export const equineServices = [
  "Comprehensive first opinion service",
  "24-hour, 365-days-a-year emergency service",
  "Routine vaccinations (flu & tetanus)",
  "Sedations for clipping, dentistry and farriery",
  "Oral examinations and tooth rasping",
  "Passports and microchipping",
  "Routine surgical procedures (colt castrations)",
  "Faecal worm egg counting",
  "Referral to neighbouring specialist practices",
  "Zone visit programme (cost-effective routine care)",
] as const;
