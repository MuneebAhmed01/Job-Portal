// src/data/countryStateCity.js

export const countries = [
  { name: "United States", code: "US" },
  { name: "India", code: "IN" },
  { name: "Pakistan", code: "PK" },
];

export const states = {
  US: [
    { name: "California", code: "CA" },
    { name: "Texas", code: "TX" },
    { name: "New York", code: "NY" },
    { name: "Florida", code: "FL" },
    { name: "Illinois", code: "IL" },
  ],
  IN: [
    { name: "Maharashtra", code: "MH" },
    { name: "Karnataka", code: "KA" },
    { name: "Tamil Nadu", code: "TN" },
    { name: "Delhi", code: "DL" },
    { name: "Uttar Pradesh", code: "UP" },
    { name: "West Bengal", code: "WB" },
  ],
  PK: [
    { name: "Punjab", code: "PB" },
    { name: "Sindh", code: "SD" },
    { name: "Khyber Pakhtunkhwa", code: "KP" },
    { name: "Balochistan", code: "BL" },
    { name: "Gilgit-Baltistan", code: "GB" },
  ],
};

export const cities = {
  US: {
    CA: ["Los Angeles", "San Francisco", "San Diego"],
    TX: ["Houston", "Dallas", "Austin"],
    NY: ["New York City", "Buffalo", "Rochester"],
    FL: ["Miami", "Orlando", "Tampa"],
    IL: ["Chicago", "Springfield", "Naperville"],
  },
  IN: {
    MH: ["Mumbai", "Pune", "Nagpur"],
    KA: ["Bengaluru", "Mysuru", "Mangalore"],
    TN: ["Chennai", "Coimbatore", "Madurai"],
    DL: ["New Delhi", "Dwarka", "Rohini"],
    UP: ["Lucknow", "Kanpur", "Varanasi"],
    WB: ["Kolkata", "Howrah", "Siliguri"],
  },
  PK: {
    PB: ["Lahore", "Rawalpindi", "Faisalabad"],
    SD: ["Karachi", "Hyderabad", "Sukkur"],
    KP: ["Peshawar", "Abbottabad", "Mardan"],
    BL: ["Quetta", "Gwadar", "Khuzdar"],
    GB: ["Gilgit", "Skardu", "Hunza"],
  },
};
