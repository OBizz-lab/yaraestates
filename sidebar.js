// Inject sidebar HTML
document.addEventListener('DOMContentLoaded', function() {
  var container = document.createElement('div');
  container.innerHTML = '<button class="blog-fab" id="blogFab" title="Guides & Resources">📚</button>' +
    '<div class="blog-sidebar-overlay" id="blogOverlay"></div>' +
    '<div class="blog-sidebar" id="blogSidebar">' +
      '<div class="sidebar-header"><h3>📚 Guides & Resources</h3><button class="sidebar-close" id="blogClose">✕</button></div>' +
      '<div class="sidebar-section"><div class="sidebar-label">Free Guides</div>' +
        '<a href="buy-villa-lombok.html" class="sidebar-link"><span class="link-icon">🏠</span><div><div class="link-title">How to Buy a Villa in Lombok</div><div class="link-desc">Complete 2026 guide for foreign buyers</div></div></a>' +
        '<a href="lombok-vs-bali.html" class="sidebar-link"><span class="link-icon">⚖️</span><div><div class="link-title">Lombok vs Bali Investment</div><div class="link-desc">Data-driven comparison</div></div></a>' +
        '<a href="lombok-rental-yields.html" class="sidebar-link"><span class="link-icon">📊</span><div><div class="link-title">Lombok Rental Yields</div><div class="link-desc">Honest Airbnb income & ROI analysis</div></div></a>' +
        '<a href="foreign-ownership-indonesia.html" class="sidebar-link"><span class="link-icon">🏛️</span><div><div class="link-title">Foreign Ownership in Indonesia</div><div class="link-desc">PT PMA, Hak Pakai, taxes & inheritance</div></div></a>' +
      '</div>' +
      '<div class="sidebar-section"><div class="sidebar-label">Investor Documents</div>' +
        '<a href="brochure.html" class="sidebar-link"><span class="link-icon">📖</span><div><div class="link-title">Investor Brochure</div><div class="link-desc">Vision, designs, location & financials</div></div></a>' +
        '<a href="factsheet.html" class="sidebar-link"><span class="link-icon">📋</span><div><div class="link-title">Fact Sheet</div><div class="link-desc">Pricing, specs, returns & payment structure</div></div></a>' +
      '</div>' +
      '<div style="padding-top:15px;border-top:1px solid rgba(212,175,55,0.2);">' +
        '<a href="index.html#reserve" class="sidebar-cta-btn" id="sidebarCta">Get Investor Guide →</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(container);

  var fab = document.getElementById('blogFab');
  var sb = document.getElementById('blogSidebar');
  var ov = document.getElementById('blogOverlay');
  var cl = document.getElementById('blogClose');
  var cta = document.getElementById('sidebarCta');
  function openSb() { sb.classList.add('open'); ov.classList.add('open'); }
  function closeSb() { sb.classList.remove('open'); ov.classList.remove('open'); }
  fab.addEventListener('click', openSb);
  ov.addEventListener('click', closeSb);
  cl.addEventListener('click', closeSb);
  cta.addEventListener('click', closeSb);
});
