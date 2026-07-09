// ---------------------------------------------------------------------------
// MDValues shared UI helpers — used across every page.
// Requires js/data.js to be loaded first.
// ---------------------------------------------------------------------------

function fmt(n) {
  if (n === undefined || n === null || Number.isNaN(n)) return "--";
  return Number(n).toLocaleString("en-US");
}

function discordIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:6px">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.2.36-.42.84-.573 1.22a18.27 18.27 0 0 0-5.97 0A11.6 11.6 0 0 0 9.442 3a19.79 19.79 0 0 0-3.76 1.372C2.6 8.34 1.8 12.2 2.16 16.01a19.9 19.9 0 0 0 6.06 3.06c.49-.67.92-1.39 1.29-2.15a12.8 12.8 0 0 1-2.03-.98c.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.05 0c.17.14.33.27.5.4-.65.38-1.33.7-2.04.98.37.76.8 1.48 1.29 2.15a19.85 19.85 0 0 0 6.06-3.06c.43-4.4-.73-8.22-3.53-11.64ZM9.68 13.7c-.98 0-1.79-.9-1.79-2.01 0-1.1.79-2.01 1.79-2.01 1.01 0 1.81.92 1.79 2.01 0 1.11-.78 2.01-1.79 2.01Zm5.65 0c-.98 0-1.79-.9-1.79-2.01 0-1.1.79-2.01 1.79-2.01 1.01 0 1.81.92 1.79 2.01 0 1.11-.78 2.01-1.79 2.01Z"/>
  </svg>`;
}

function trendArrow(trend) {
  if (trend === "up") return `<span class="trend up">▲</span>`;
  if (trend === "down") return `<span class="trend down">▼</span>`;
  return `<span class="trend flat">—</span>`;
}

function itemCard(item) {
  const color = RARITY_COLORS[item.rarity] || "#9ca3af";
  const demandLabel = DEMAND_LABELS[item.demand] || "Low";
  return `
    <div class="item-card" style="--rarity-color:${color}">
      <div class="item-icon-wrap">
        <div class="item-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.6">
            ${item.category === "knife"
              ? '<path d="M4 20 14 10M14 10 20 4 22 6 16 12M14 10 12 8"/>'
              : '<circle cx="9" cy="15" r="5"/><path d="M13 12 20 5M18 3 21 6M9 15h.01"/>'}
          </svg>
        </div>
      </div>
      <div class="item-body">
        <div class="item-rarity" style="color:${color}">${item.rarity}</div>
        <div class="item-name">${item.name}</div>
        <div class="item-meta">
          <span class="tag-value">${fmt(item.value)}</span>
          <span class="tag-demand">${demandLabel} demand</span>
          ${trendArrow(item.trend)}
        </div>
      </div>
    </div>`;
}

function renderGrid(container, items) {
  if (!items || !items.length) {
    container.innerHTML = `<div class="empty-state">No items match your filters.</div>`;
    return;
  }
  container.innerHTML = items.map(itemCard).join("");
}

// mobile nav toggle (shared across pages)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
});
