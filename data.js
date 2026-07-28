/* ===========================================================
   NETRA — content data
   Swap any of these arrays with real copy / images later.
=========================================================== */

const WHY_US = [
  { icon: 'eye', title: 'Computerised Eye Testing', text: 'Precision digital testing by trained optometrists, not guesswork.' },
  { icon: 'frame', title: 'Premium Frames', text: 'Curated metal, titanium and acetate frames sourced for durability.' },
  { icon: 'tag', title: 'Affordable Pricing', text: 'Transparent pricing across every collection, no hidden mark-ups.' },
  { icon: 'spark', title: 'Latest Designs', text: 'New arrivals every season, ahead of what\'s trending elsewhere.' },
  { icon: 'truck', title: 'Fast Delivery', text: 'Ready-made pairs same day, prescriptions within 48 hours.' },
  { icon: 'star', title: 'Branded Collection', text: 'Authentic branded eyewear with verifiable authenticity cards.' },
  { icon: 'lens', title: 'Prescription Lenses', text: 'Single vision to progressive — ground to your exact power.' },
  { icon: 'support', title: 'After Sales Support', text: 'Free adjustments and servicing for as long as you own the frame.' },
];

const FRAME_FILTERS = ['All','Metal','Fibre','Transparent','Frosted','Half Rim','Full Rim','Rimless','Titanium','Kids','Premium'];

const FRAMES = [
  { name: 'Metal Frames', cat: 'Metal', desc: 'Slim, durable profiles with a refined finish.' },
  { name: 'Fibre Frames', cat: 'Fibre', desc: 'Lightweight and flexible for all-day comfort.' },
  { name: 'Transparent Frames', cat: 'Transparent', desc: 'Clean, translucent acetate for a modern look.' },
  { name: 'Frosted Frames', cat: 'Frosted', desc: 'Matte-textured finishes with understated texture.' },
  { name: 'Half Rim', cat: 'Half Rim', desc: 'Minimal upper rim, maximum field of view.' },
  { name: 'Full Rim', cat: 'Full Rim', desc: 'Classic structure built for daily durability.' },
  { name: 'Rimless', cat: 'Rimless', desc: 'Near-invisible frames for the most discreet look.' },
  { name: 'Titanium', cat: 'Titanium', desc: 'Featherweight strength that lasts for years.' },
  { name: 'Kids Collection', cat: 'Kids', desc: 'Flexible, safe frames built for active children.' },
  { name: 'Premium Collection', cat: 'Premium', desc: 'Our finest imported frames, hand-finished.' },
];

const SUN_CHIPS = ['Aviator','Wayfarer','Round','Square','Sports','Oversized','Driving','Polarized'];

const SUN_ITEMS = [
  { name: 'Aviator', desc: 'The timeless teardrop silhouette.' },
  { name: 'Wayfarer', desc: 'Bold, structured, endlessly versatile.' },
  { name: 'Round', desc: 'Vintage-inspired soft circular lenses.' },
  { name: 'Square', desc: 'Sharp lines for a confident look.' },
  { name: 'Sports', desc: 'Wraparound comfort built for motion.' },
  { name: 'Oversized', desc: 'Statement coverage, editorial edge.' },
  { name: 'Driving', desc: 'Glare-cut lenses tuned for the road.' },
  { name: 'Polarized', desc: 'True colour with zero surface glare.' },
  { name: 'Premium Brands', desc: 'Authentic international labels, in-store.' },
  { name: 'First Copy Premium', desc: 'Designer-inspired styling, honest pricing.' },
];

const LENSES = [
  { name: 'Normal Lens', desc: 'Standard single-vision correction for everyday clarity.' },
  { name: 'Blue Cut', desc: 'Filters blue light from screens to ease digital strain.' },
  { name: 'Double Blue Cut', desc: 'Reinforced coating for heavy, all-day screen use.' },
  { name: 'Photochromic', desc: 'Automatically darkens outdoors, clears back indoors.' },
  { name: 'Reading Lens', desc: 'Sharp close-range focus for print and screens.' },
  { name: 'Progressive Lens', desc: 'Seamless near, intermediate and distance vision.' },
  { name: 'Solid Colour Lens', desc: 'Fashion tints in a shade to match your style.' },
  { name: 'Anti Glare', desc: 'Cuts reflections for cleaner night driving vision.' },
  { name: 'Scratch Resistant', desc: 'A hard coating that keeps lenses looking new.' },
  { name: 'UV Protection', desc: 'Blocks harmful UVA/UVB rays outdoors, always.' },
];

const GALLERY_FILTERS = ['All','Frames','Sunglasses','Store','Eye Testing','Customers','Premium Brands'];

const GALLERY_ITEMS = [
  { cat: 'Store', name: 'Showroom Entrance', tall: true },
  { cat: 'Frames', name: 'Titanium Wall', tall: false },
  { cat: 'Eye Testing', name: 'Testing Suite', tall: false },
  { cat: 'Sunglasses', name: 'Aviator Display', tall: true },
  { cat: 'Customers', name: 'Fitting Session', tall: false },
  { cat: 'Premium Brands', name: 'Brand Corner', tall: true },
  { cat: 'Frames', name: 'Acetate Collection', tall: false },
  { cat: 'Store', name: 'Consultation Desk', tall: false },
  { cat: 'Sunglasses', name: 'Polarized Bar', tall: true },
  { cat: 'Customers', name: 'Happy Pickup', tall: false },
  { cat: 'Eye Testing', name: 'Precision Check', tall: false },
  { cat: 'Premium Brands', name: 'Signature Case', tall: true },
];

const SHOWCASE = [
  { name: 'Frame Collection', desc: 'Our full range, organised by build and material.' },
  { name: 'Lens Collection', desc: 'Every coating and correction we offer, explained.' },
  { name: 'Premium Sunglasses', desc: 'International labels, verified and in stock.' },
  { name: 'Branded Collection', desc: 'Authentic branded eyewear with warranty cards.' },
  { name: 'Kids Collection', desc: 'Durable, flexible frames sized for young faces.' },
  { name: 'Office Collection', desc: 'Blue-cut ready pairs for screen-heavy days.' },
  { name: 'Fashion Collection', desc: 'Seasonal styles led by colour and silhouette.' },
];

const TESTIMONIALS = [
  { name: 'Aarav Deshmukh', loc: 'Kothrud, Pune', text: 'The eye test alone was more thorough than anywhere else I\'ve been. My progressive lenses fit perfectly on the first try.' },
  { name: 'Sanika Joshi', loc: 'Baner, Pune', text: 'Bought my first pair of titanium frames here — three years on they still look brand new. Worth every rupee.' },
  { name: 'Rohan Kulkarni', loc: 'Viman Nagar, Pune', text: 'Staff spent almost 40 minutes helping me pick a frame for my face shape. Never felt rushed once.' },
  { name: 'Priya Nair', loc: 'Aundh, Pune', text: 'My son\'s kids-collection frames survived an entire school year. That durability promise is real.' },
  { name: 'Devansh Rao', loc: 'FC Road, Pune', text: 'Got the blue-cut lenses for work and the difference by end of day is night and day. Genuinely recommend.' },
];

const FAQS = [
  { q: 'Do I need an appointment for an eye test?', a: 'Walk-ins are always welcome, but booking ahead through the enquiry form guarantees you a slot with your preferred optometrist.' },
  { q: 'How long does a prescription lens take to be ready?', a: 'Standard single-vision lenses are usually ready within 48 hours. Progressive and specialised coatings may take 3–5 working days.' },
  { q: 'Do you offer home delivery?', a: 'Yes — once your prescription is fitted and quality-checked in-store, we can deliver anywhere within Pune city limits.' },
  { q: 'Is there a warranty on frames?', a: 'All frames purchased at NETRA include a 6-month manufacturing warranty covering hinges, coating and structural defects.' },
  { q: 'Can I get my old glasses adjusted for free?', a: 'Absolutely. Frame adjustments and minor repairs are complimentary for the lifetime of the frame, regardless of where it was purchased.' },
  { q: 'Do you accept insurance or corporate vision plans?', a: 'We work with several major insurers and corporate vision benefit providers — bring your policy details in-store and our team will check eligibility.' },
];
