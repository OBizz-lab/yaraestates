// Inject sidebar HTML
document.addEventListener('DOMContentLoaded', function() {
  // Remove any existing inline WhatsApp buttons to avoid duplicates
  document.querySelectorAll('.whatsapp-float, a[href*="wa.me"][style*="position:fixed"]').forEach(function(el){ el.remove(); });

  var container = document.createElement('div');
  container.innerHTML = '<a href="https://wa.me/16504777156?text=Hi%20I\'m%20interested%20in%20Yara%20Estates%20Lombok" class="wa-float" target="_blank" title="Chat on WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>' +
    '<button class="blog-fab" id="blogFab" title="Guides & Resources">📚</button>' +
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
