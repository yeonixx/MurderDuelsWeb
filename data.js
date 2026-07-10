// ---------------------------------------------------------------------------
// MDValues data
// Real Murder Duels knife & revolver skin names, matched to the game's
// actual rarity tiers and colors (pulled from the game's own RarityUtil
// module: Common/Uncommon/Rare/Epic/Legendary/Secret). Value/demand/trend
// numbers are still placeholders (deterministically generated) -- swap in
// real trade values whenever you have them; every page pulls from this one
// file, so nothing else needs to change.
// ---------------------------------------------------------------------------

const RARITY_ORDER = ["Secret", "Legendary", "Epic", "Rare", "Uncommon", "Common"];

// exact colors from the game's rarity module (Color3.fromRGB -> hex)
const RARITY_COLORS = {
  Secret: "#ff0000",
  Legendary: "#ffd118",
  Epic: "#b969ff",
  Rare: "#5096ff",
  Uncommon: "#5fdb69",
  Common: "#9b9b9b",
};

const DEMAND_LABELS = { 4: "Hype", 3: "High", 2: "Medium", 1: "Low" };

const ITEMS = [
  // ---- Knives ----
  { id: "k-voidreaver", name: "Voidreaver", category: "knife", rarity: "Secret", value: 9310, demand: 1, trend: "stable" },
  { id: "k-seraphim", name: "Seraphim", category: "knife", rarity: "Secret", value: 8085, demand: 1, trend: "stable" },
  { id: "k-korblox", name: "Korblox", category: "knife", rarity: "Secret", value: 6230, demand: 1, trend: "stable" },
  { id: "k-galaxy-karambit", name: "Galaxy Karambit", category: "knife", rarity: "Legendary", value: 5995, demand: 1, trend: "down" },
  { id: "k-lunaris", name: "Lunaris", category: "knife", rarity: "Legendary", value: 5765, demand: 4, trend: "up" },
  { id: "k-balisong", name: "Balisong", category: "knife", rarity: "Legendary", value: 5565, demand: 1, trend: "up" },
  { id: "k-alien", name: "Alien", category: "knife", rarity: "Legendary", value: 4685, demand: 3, trend: "stable" },
  { id: "k-megalodon", name: "Megalodon", category: "knife", rarity: "Legendary", value: 3885, demand: 2, trend: "down" },
  { id: "k-solaris", name: "Solaris", category: "knife", rarity: "Legendary", value: 3825, demand: 3, trend: "stable" },
  { id: "k-libertys-edge", name: "Libertys Edge", category: "knife", rarity: "Legendary", value: 3055, demand: 1, trend: "down" },
  { id: "k-licorice", name: "Licorice", category: "knife", rarity: "Epic", value: 2945, demand: 2, trend: "stable" },
  { id: "k-traditional", name: "Traditional", category: "knife", rarity: "Epic", value: 2245, demand: 3, trend: "down" },
  { id: "k-karambit", name: "Karambit", category: "knife", rarity: "Epic", value: 2190, demand: 1, trend: "up" },
  { id: "k-golden-stiletto", name: "Golden Stiletto", category: "knife", rarity: "Epic", value: 1635, demand: 3, trend: "up" },
  { id: "k-aero", name: "Aero", category: "knife", rarity: "Rare", value: 1065, demand: 1, trend: "stable" },
  { id: "k-glass", name: "Glass", category: "knife", rarity: "Rare", value: 1060, demand: 4, trend: "down" },
  { id: "k-usa", name: "USA", category: "knife", rarity: "Rare", value: 990, demand: 3, trend: "down" },
  { id: "k-vaporwave", name: "Vaporwave", category: "knife", rarity: "Rare", value: 885, demand: 1, trend: "stable" },
  { id: "k-space-kitty", name: "Space Kitty", category: "knife", rarity: "Rare", value: 855, demand: 1, trend: "stable" },
  { id: "k-lightning", name: "Lightning", category: "knife", rarity: "Rare", value: 790, demand: 2, trend: "stable" },
  { id: "k-pink-skulls", name: "Pink Skulls", category: "knife", rarity: "Rare", value: 760, demand: 4, trend: "up" },
  { id: "k-ice", name: "Ice", category: "knife", rarity: "Rare", value: 700, demand: 3, trend: "up" },
  { id: "k-kitty-cone", name: "Kitty Cone", category: "knife", rarity: "Rare", value: 685, demand: 2, trend: "stable" },
  { id: "k-meteor", name: "Meteor", category: "knife", rarity: "Rare", value: 680, demand: 4, trend: "up" },
  { id: "k-cheese", name: "Cheese", category: "knife", rarity: "Rare", value: 670, demand: 3, trend: "up" },
  { id: "k-epic-face", name: "Epic Face", category: "knife", rarity: "Rare", value: 660, demand: 2, trend: "up" },
  { id: "k-moonrock", name: "Moonrock", category: "knife", rarity: "Rare", value: 620, demand: 2, trend: "down" },
  { id: "k-astronaut", name: "Astronaut", category: "knife", rarity: "Rare", value: 560, demand: 1, trend: "stable" },
  { id: "k-cupcake", name: "Cupcake", category: "knife", rarity: "Rare", value: 480, demand: 2, trend: "stable" },
  { id: "k-floral", name: "Floral", category: "knife", rarity: "Rare", value: 455, demand: 4, trend: "down" },
  { id: "k-hacker", name: "Hacker", category: "knife", rarity: "Uncommon", value: 415, demand: 2, trend: "stable" },
  { id: "k-berry", name: "Berry", category: "knife", rarity: "Uncommon", value: 400, demand: 2, trend: "stable" },
  { id: "k-spiderweb", name: "Spiderweb", category: "knife", rarity: "Uncommon", value: 390, demand: 3, trend: "stable" },
  { id: "k-saber", name: "Saber", category: "knife", rarity: "Uncommon", value: 375, demand: 1, trend: "stable" },
  { id: "k-lmad", name: "LMAD", category: "knife", rarity: "Uncommon", value: 300, demand: 4, trend: "stable" },
  { id: "k-rose", name: "Rose", category: "knife", rarity: "Uncommon", value: 300, demand: 3, trend: "down" },
  { id: "k-sky", name: "Sky", category: "knife", rarity: "Uncommon", value: 280, demand: 1, trend: "stable" },
  { id: "k-fire", name: "Fire", category: "knife", rarity: "Uncommon", value: 215, demand: 2, trend: "stable" },
  { id: "k-mermaid", name: "Mermaid", category: "knife", rarity: "Uncommon", value: 175, demand: 1, trend: "stable" },
  { id: "k-shooting-star", name: "Shooting Star", category: "knife", rarity: "Common", value: 140, demand: 1, trend: "up" },
  { id: "k-bacon", name: "Bacon", category: "knife", rarity: "Common", value: 125, demand: 3, trend: "up" },
  { id: "k-blueprint", name: "Blueprint", category: "knife", rarity: "Common", value: 125, demand: 3, trend: "stable" },
  { id: "k-yarn", name: "Yarn", category: "knife", rarity: "Common", value: 120, demand: 4, trend: "down" },
  { id: "k-default", name: "Default", category: "knife", rarity: "Common", value: 115, demand: 1, trend: "stable" },
  { id: "k-firework", name: "Firework", category: "knife", rarity: "Common", value: 115, demand: 3, trend: "stable" },
  { id: "k-watermelon", name: "Watermelon", category: "knife", rarity: "Common", value: 110, demand: 4, trend: "down" },
  { id: "k-scales", name: "Scales", category: "knife", rarity: "Common", value: 100, demand: 1, trend: "stable" },
  { id: "k-caution", name: "Caution", category: "knife", rarity: "Common", value: 90, demand: 3, trend: "up" },
  { id: "k-red-stiletto", name: "Red Stiletto", category: "knife", rarity: "Common", value: 85, demand: 3, trend: "up" },
  { id: "k-emo-kawaii", name: "Emo Kawaii", category: "knife", rarity: "Common", value: 80, demand: 3, trend: "down" },
  { id: "k-robux", name: "Robux", category: "knife", rarity: "Common", value: 75, demand: 4, trend: "up" },
  { id: "k-cardboard", name: "Cardboard", category: "knife", rarity: "Common", value: 60, demand: 2, trend: "up" },
  { id: "k-rainbow", name: "Rainbow", category: "knife", rarity: "Common", value: 60, demand: 2, trend: "down" },
  { id: "k-aurora", name: "Aurora", category: "knife", rarity: "Common", value: 55, demand: 4, trend: "down" },
  { id: "k-constellation", name: "Constellation", category: "knife", rarity: "Common", value: 55, demand: 3, trend: "up" },
  { id: "k-kawaii", name: "Kawaii", category: "knife", rarity: "Common", value: 55, demand: 4, trend: "stable" },
  { id: "k-rusty", name: "Rusty", category: "knife", rarity: "Common", value: 55, demand: 1, trend: "stable" },
  { id: "k-smooch", name: "Smooch", category: "knife", rarity: "Common", value: 55, demand: 3, trend: "up" },
  { id: "k-cheetah", name: "Cheetah", category: "knife", rarity: "Common", value: 50, demand: 2, trend: "down" },
  { id: "k-noob", name: "Noob", category: "knife", rarity: "Common", value: 50, demand: 4, trend: "up" },

  // ---- Revolvers ----
  { id: "r-voidcaster", name: "Voidcaster", category: "revolver", rarity: "Secret", value: 9265, demand: 4, trend: "down" },
  { id: "r-seraphim", name: "Seraphim", category: "revolver", rarity: "Secret", value: 8140, demand: 1, trend: "stable" },
  { id: "r-kawaii", name: "Kawaii", category: "revolver", rarity: "Secret", value: 7630, demand: 4, trend: "stable" },
  { id: "r-korblox", name: "Korblox", category: "revolver", rarity: "Secret", value: 6290, demand: 1, trend: "stable" },
  { id: "r-camo", name: "Camo", category: "revolver", rarity: "Secret", value: 6190, demand: 4, trend: "up" },
  { id: "r-diamond", name: "Diamond", category: "revolver", rarity: "Legendary", value: 5930, demand: 4, trend: "up" },
  { id: "r-ice", name: "Ice", category: "revolver", rarity: "Legendary", value: 5905, demand: 3, trend: "up" },
  { id: "r-megalodon", name: "Megalodon", category: "revolver", rarity: "Legendary", value: 4940, demand: 2, trend: "down" },
  { id: "r-solaris", name: "Solaris", category: "revolver", rarity: "Legendary", value: 4880, demand: 3, trend: "stable" },
  { id: "r-lunaris", name: "Lunaris", category: "revolver", rarity: "Legendary", value: 4525, demand: 4, trend: "up" },
  { id: "r-galaxy", name: "Galaxy", category: "revolver", rarity: "Legendary", value: 4270, demand: 4, trend: "stable" },
  { id: "r-infinity-ray", name: "Infinity Ray", category: "revolver", rarity: "Legendary", value: 3665, demand: 2, trend: "down" },
  { id: "r-usa", name: "USA", category: "revolver", rarity: "Legendary", value: 3100, demand: 3, trend: "down" },
  { id: "r-water", name: "Water", category: "revolver", rarity: "Epic", value: 2780, demand: 3, trend: "down" },
  { id: "r-emo-kawaii", name: "Emo Kawaii", category: "revolver", rarity: "Epic", value: 1365, demand: 3, trend: "down" },
  { id: "r-slime", name: "Slime", category: "revolver", rarity: "Rare", value: 1155, demand: 4, trend: "up" },
  { id: "r-carbon-fiber", name: "Carbon Fiber", category: "revolver", rarity: "Rare", value: 1085, demand: 3, trend: "up" },
  { id: "r-red-luger", name: "Red Luger", category: "revolver", rarity: "Rare", value: 1025, demand: 2, trend: "stable" },
  { id: "r-deagle", name: "Deagle", category: "revolver", rarity: "Rare", value: 565, demand: 4, trend: "down" },
  { id: "r-caution", name: "Caution", category: "revolver", rarity: "Rare", value: 480, demand: 3, trend: "up" },
  { id: "r-libertys-justice", name: "Libertys Justice", category: "revolver", rarity: "Uncommon", value: 405, demand: 3, trend: "up" },
  { id: "r-toxic", name: "Toxic", category: "revolver", rarity: "Uncommon", value: 400, demand: 3, trend: "down" },
  { id: "r-meteor", name: "Meteor", category: "revolver", rarity: "Uncommon", value: 390, demand: 4, trend: "up" },
  { id: "r-shooting-star", name: "Shooting Star", category: "revolver", rarity: "Uncommon", value: 365, demand: 1, trend: "up" },
  { id: "r-firework", name: "Firework", category: "revolver", rarity: "Uncommon", value: 325, demand: 3, trend: "stable" },
  { id: "r-space-kitty", name: "Space Kitty", category: "revolver", rarity: "Uncommon", value: 315, demand: 1, trend: "stable" },
  { id: "r-lightning", name: "Lightning", category: "revolver", rarity: "Uncommon", value: 300, demand: 2, trend: "stable" },
  { id: "r-graffiti", name: "Graffiti", category: "revolver", rarity: "Uncommon", value: 235, demand: 4, trend: "up" },
  { id: "r-alien", name: "Alien", category: "revolver", rarity: "Uncommon", value: 190, demand: 3, trend: "stable" },
  { id: "r-astronaut", name: "Astronaut", category: "revolver", rarity: "Common", value: 145, demand: 1, trend: "stable" },
  { id: "r-moonrock", name: "Moonrock", category: "revolver", rarity: "Common", value: 145, demand: 2, trend: "down" },
  { id: "r-ray-gun", name: "Ray Gun", category: "revolver", rarity: "Common", value: 135, demand: 2, trend: "stable" },
  { id: "r-kitty-cone", name: "Kitty Cone", category: "revolver", rarity: "Common", value: 130, demand: 2, trend: "stable" },
  { id: "r-purple-luger", name: "Purple Luger", category: "revolver", rarity: "Common", value: 130, demand: 3, trend: "up" },
  { id: "r-default", name: "Default", category: "revolver", rarity: "Common", value: 120, demand: 1, trend: "stable" },
  { id: "r-watermelon", name: "Watermelon", category: "revolver", rarity: "Common", value: 120, demand: 4, trend: "down" },
  { id: "r-newspaper", name: "Newspaper", category: "revolver", rarity: "Common", value: 100, demand: 1, trend: "stable" },
  { id: "r-hacker", name: "Hacker", category: "revolver", rarity: "Common", value: 90, demand: 2, trend: "stable" },
  { id: "r-vaporwave", name: "Vaporwave", category: "revolver", rarity: "Common", value: 90, demand: 1, trend: "stable" },
  { id: "r-golden-luger", name: "Golden Luger", category: "revolver", rarity: "Common", value: 75, demand: 2, trend: "stable" },
  { id: "r-fire", name: "Fire", category: "revolver", rarity: "Common", value: 70, demand: 2, trend: "stable" },
  { id: "r-rusty", name: "Rusty", category: "revolver", rarity: "Common", value: 65, demand: 1, trend: "stable" },
  { id: "r-mermaid", name: "Mermaid", category: "revolver", rarity: "Common", value: 50, demand: 1, trend: "stable" },
  { id: "r-caramel", name: "Caramel", category: "revolver", rarity: "Common", value: 40, demand: 3, trend: "stable" },
];

const VALUE_CHANGES = [
  { id: "k-voidreaver", date: "Jul 6, 2026", from: 7915, to: 9310, reason: "Increased demand after being featured in a trading montage." },
  { id: "k-seraphim", date: "Jul 4, 2026", from: 9540, to: 8085, reason: "Removed from the current case rotation, supply tightening." },
  { id: "k-galaxy-karambit", date: "Jul 2, 2026", from: 5095, to: 5995, reason: "Demand cooled off after a bundle re-release." },
  { id: "r-infinity-ray", date: "Jun 29, 2026", from: 4325, to: 3665, reason: "More common in trades than expected; adjusted down." },
  { id: "k-kitty-cone", date: "Jun 25, 2026", from: 580, to: 685, reason: "Community trade data shows consistent overpay offers." },
  { id: "k-lmad", date: "Jun 20, 2026", from: 355, to: 300, reason: "Value corrected after a wave of low-ball accepted trades." },
];

// ---- helpers ----
function knives() { return ITEMS.filter(i => i.category === "knife"); }
function revolvers() { return ITEMS.filter(i => i.category === "revolver"); }
function getItem(id) { return ITEMS.find(i => i.id === id); }
