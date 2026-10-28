// ===== HELPER FUNCTIONS - FROM SLIDE PAGE 41 - MUST BE AT TOP =====
function showError(element, message) {
  if (!element) return;
  element.textContent = message;
  element.style.display = 'block';
  element.style.color = 'red';
}
function clearError(element) {
  if (!element) return;
  element.textContent = '';
  element.style.display = 'none';
}
// ===== END HELPER FUNCTIONS =====

document.addEventListener('DOMContentLoaded', () => {

  // 1. MOBILE MENU
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      nav.classList.toggle('show');
    });
  }

  // 2. FOOTER YEAR
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. FAQ ACCORDION - ABOUT.HTML - FIXED & ADDED BACK (THIS WAS MISSING!)
  // Supports both .faq-question and .accordion-header from your about.html
  const faqHeaders = document.querySelectorAll('.faq-question, .accordion-header, .faq-item div:first-child');
  faqHeaders.forEach(header => {
    // Only attach if it's a FAQ header (has next sibling answer)
    const answer = header.nextElementSibling;
    if (answer && (answer.classList.contains('faq-answer') || answer.classList.contains('accordion-content'))) {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block' || answer.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.faq-answer, .accordion-content').forEach(other => {
          other.style.display = 'none';
          other.classList.remove('active');
          const h = other.previousElementSibling;
          if (h) h.innerHTML = h.innerHTML.replace('▲','▼');
        });

        if (!isOpen) {
          answer.style.display = 'block';
          answer.classList.add('active');
          header.innerHTML = header.innerHTML.replace('▼','▲');
        }
      });
    }
  });

  // 4. TABS - SERVICES.HTML
  const tabBtns = document.querySelectorAll('.tab-btn, .tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      if (!target) return;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
      });
      btn.classList.add('active');
      const targetEl = document.getElementById(target);
      if (targetEl) {
        targetEl.classList.add('active');
        targetEl.style.display = 'block';
      }
    });
  });

  // 5. LIGHTBOX
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    document.querySelectorAll('.lightbox-img, .responsive-img, .gallery-img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.id === 'lightbox-close') {
        lightbox.style.display = 'none';
        lightbox.classList.remove('active');
      }
    });
  }

  // 6. SEARCH + DYNAMIC LIST (Array + Function from Slide Page 3)
  const servicesData = [
    { title: "Monthly Packs R50", desc: "Free sanitary packs with Bodyform pads, soap, Nivea", cost: "R50", avail: "5000+ monthly" },
    { title: "Education Workshops", desc: "Health education in Soweto and Tembisa schools", cost: "Free", avail: "45 workshops 2025" },
    { title: "Community Drives", desc: "Volunteer every Saturday at Vilakazi Street", cost: "Free", avail: "Saturdays 9am-1pm" }
  ];
  const dynamicList = document.getElementById('dynamicList');
  const searchInput = document.getElementById('serviceSearch');
  const searchResults = document.getElementById('searchResults');
  function renderList(data) {
    if (!dynamicList) return;
    dynamicList.innerHTML = '';
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p><p><b>Cost:</b> ${item.cost} | <b>Avail:</b> ${item.avail}</p>`;
      dynamicList.appendChild(div);
    });
    if (searchResults) searchResults.textContent = `Showing ${data.length} results`;
  }
  if (dynamicList) renderList(servicesData);
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      const filtered = servicesData.filter(s => (s.title + s.desc).toLowerCase().includes(q));
      renderList(filtered);
      // Also filter old .service-card if exists
      document.querySelectorAll('.service-card').forEach(c => {
        c.style.display = c.textContent.toLowerCase().includes(q) ? 'block' : 'none';
      });
    });
  }

  // 7. CONTACT FORM - USING HELPER FUNCTIONS (Slide 23 pattern)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let isValid = true;
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const msg = document.getElementById('contactMsg')?.value.trim() || document.getElementById('contactMessage')?.value.trim();
      const nameErr = document.getElementById('contactNameError');
      const emailErr = document.getElementById('contactEmailError');
      const msgErr = document.getElementById('contactMsgError') || document.getElementById('contactMessageError');

      if (!name) { showError(nameErr, "Full name is required"); isValid = false; }
      else if (name.length < 3) { showError(nameErr, "Name must have at least 3 characters"); isValid = false; }
      else { clearError(nameErr); }

      if (!email) { showError(emailErr, "Email is required"); isValid = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(emailErr, "Enter a valid email address"); isValid = false; }
      else { clearError(emailErr); }

      if (!msg) { showError(msgErr, "Message is required"); isValid = false; }
      else if (msg.length < 10) { showError(msgErr, "Message must be at least 10 characters"); isValid = false; }
      else { clearError(msgErr); }

      if (isValid) {
        const success = document.getElementById('contactSuccess');
        if (success) success.style.display = 'block';
        const response = document.getElementById('contactResponse');
        if (response) response.innerHTML = '<p style="color:green">Compiled email To: info@harvestofhygiene.org | From: ' + email + '</p>';
        contactForm.reset();
      }
    });
  }

  // 8. ENQUIRY FORM
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (enquiryForm.checkValidity()) {
        alert('Thank you! Cost: R50 per pack. Availability: 5000 packs/month. Workshops: Free, 45 in 2025. Volunteer: Saturdays 9am-1pm. We will email you within 24hrs.');
        enquiryForm.reset();
      } else {
        alert('Please fill all required fields correctly.');
      }
    });
  }

  // 9. MAPS - ESRI (NO API KEY - FIXES BLOCKED ERROR)
  if (typeof L !== 'undefined') {
    const map1El = document.getElementById('map1');
    if (map1El && !map1El._leaflet_id) {
      const map1 = L.map('map1').setView([-25.7479, 28.2293], 14);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri & OpenStreetMap contributors'
      }).addTo(map1);
      L.marker([-25.7479, 28.2293]).addTo(map1).bindPopup('<b>Pretoria Office</b><br>123 Church Street').openPopup();
    }
    const map2El = document.getElementById('map2');
    if (map2El && !map2El._leaflet_id) {
      const map2 = L.map('map2').setView([-26.2384, 27.9089], 15);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri & OpenStreetMap contributors'
      }).addTo(map2);
      L.marker([-26.2384, 27.9089]).addTo(map2).bindPopup('<b>Soweto Centre</b><br>45 Vilakazi Street').openPopup();
    }
  }

});
