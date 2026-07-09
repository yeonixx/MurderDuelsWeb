// ---------------------------------------------------------------------------
// MDValues placeholder data
// Swap these values out for real Murder Duels data whenever you have it —
// every page pulls from this one file, so nothing else needs to change.
// ---------------------------------------------------------------------------

const RARITY_ORDER = ["Mythic", "Legendary", "Epic", "Rare", "Uncommon", "Common"];

const RARITY_COLORS = {
  Mythic: "#f43f5e",
  Legendary: "#eab308",
  Epic: "#a855f7",
  Rare: "#3b82f6",
  Uncommon: "#22c55e",
  Common: "#9ca3af",
};

const DEMAND_LABELS = { 4: "Hype", 3: "High", 2: "Medium", 1: "Low" };

const ITEMS = [
  // ---- Knives ----
  { id: "k-widows-kiss",   name: "Widow's Kiss",     category: "knife",    rarity: "Mythic",    value: 8200, demand: 4, trend: "up" },
  { id: "k-void-ripper",   name: "Void Ripper",      category: "knife",    rarity: "Mythic",    value: 7400, demand: 4, trend: "up" },
  { id: "k-crimson-vow",   name: "Crimson Vow",      category: "knife",    rarity: "Legendary", value: 5100, demand: 3, trend: "up" },
  { id: "k-obsidian-talon",name: "Obsidian Talon",   category: "knife",    rarity: "Legendary", value: 4650, demand: 3, trend: "stable" },
  { id: "k-neon-reaper",   name: "Neon Reaper",      category: "knife",    rarity: "Epic",      value: 2800, demand: 3, trend: "up" },
  { id: "k-solar-flare",   name: "Solar Flare",      category: "knife",    rarity: "Epic",      value: 2350, demand: 2, trend: "down" },
  { id: "k-phantom-grip",  name: "Phantom Grip",     category: "knife",    rarity: "Rare",      value: 1200, demand: 2, trend: "stable" },
  { id: "k-frostbite",     name: "Frostbite",        category: "knife",    rarity: "Rare",      value: 980,  demand: 2, trend: "up" },
  { id: "k-static-edge",   name: "Static Edge",      category: "knife",    rarity: "Uncommon",  value: 420,  demand: 2, trend: "stable" },
  { id: "k-chrome-fang",   name: "Chrome Fang",      category: "knife",    rarity: "Uncommon",  value: 310,  demand: 1, trend: "down" },
  { id: "k-blood-moon",    name: "Blood Moon",       category: "knife",    rarity: "Common",    value: 95,   demand: 1, trend: "stable" },
  { id: "k-golden-hour",   name: "Golden Hour",      category: "knife",    rarity: "Common",    value: 60,   demand: 1, trend: "stable" },

  // ---- Revolvers ----
  { id: "r-judge-jury",    name: "Judge & Jury",     category: "revolver", rarity: "Mythic",    value: 9100, demand: 4, trend: "up" },
  { id: "r-iron-verdict",  name: "Iron Verdict",     category: "revolver", rarity: "Mythic",    value: 6800, demand: 3, trend: "stable" },
  { id: "r-last-rites",    name: "Last Rites",       category: "revolver", rarity: "Legendary", value: 5400, demand: 4, trend: "up" },
  { id: "r-deadlock",      name: "Deadlock",         category: "revolver", rarity: "Legendary", value: 4200, demand: 3, trend: "down" },
  { id: "r-nightshade",    name: "Nightshade",       category: "revolver", rarity: "Epic",      value: 2600, demand: 2, trend: "stable" },
  { id: "r-aurora-six",    name: "Aurora Six",       category: "revolver", rarity: "Epic",      value: 2150, demand: 3, trend: "up" },
  { id: "r-midnight-special", name: "Midnight Special", category: "revolver", rarity: "Rare",  value: 1350, demand: 2, trend: "up" },
  { id: "r-thunderclap",   name: "Thunderclap",      category: "revolver", rarity: "Rare",      value: 1040, demand: 2, trend: "stable" },
  { id: "r-silver-tongue", name: "Silver Tongue",    category: "revolver", rarity: "Uncommon",  value: 380,  demand: 1, trend: "stable" },
  { id: "r-copperhead",    name: "Copperhead",       category: "revolver", rarity: "Uncommon",  value: 275,  demand: 2, trend: "down" },
  { id: "r-vaporwave",     name: "Vaporwave",        category: "revolver", rarity: "Common",    value: 110,  demand: 1, trend: "stable" },
  { id: "r-rustbelt",      name: "Rustbelt",         category: "revolver", rarity: "Common",    value: 55,   demand: 1, trend: "stable" },
];

const VALUE_CHANGES = [
  { id: "k-widows-kiss",  date: "Jul 6, 2026", from: 7400, to: 8200, reason: "Increased demand after being featured in a trading montage." },
  { id: "r-last-rites",   date: "Jul 4, 2026", from: 4600, to: 5400, reason: "Removed from the current case rotation, supply tightening." },
  { id: "k-solar-flare",  date: "Jul 2, 2026", from: 2700, to: 2350, reason: "Demand cooled off after a bundle re-release." },
  { id: "r-copperhead",   date: "Jun 29, 2026", from: 330, to: 275, reason: "More common in trades than expected; adjusted down." },
  { id: "k-neon-reaper",  date: "Jun 25, 2026", from: 2400, to: 2800, reason: "Community trade data shows consistent overpay offers." },
  { id: "r-deadlock",     date: "Jun 20, 2026", from: 4700, to: 4200, reason: "Value corrected after a wave of low-ball accepted trades." },
];

// ---- helpers ----
function knives() { return ITEMS.filter(i => i.category === "knife"); }
function revolvers() { return ITEMS.filter(i => i.category === "revolver"); }
function getItem(id) { return ITEMS.find(i => i.id === id); }
