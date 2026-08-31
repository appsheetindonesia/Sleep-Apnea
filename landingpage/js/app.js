/* ============================================
   UNIFIED SLEEP HEALTHCARE PLATFORM
   Landing Page JavaScript
   Version: 2.0 | Date: August 2026
   ============================================ */

(function () {
  'use strict';

  // ==========================================
  // STATE
  // ==========================================
  const state = {
    currentStep: 1,
    totalSteps: 6,
    screeningData: {
      name: '',
      email: '',
      phone: '',
      age: 0,
      gender: '',
      height: 0,
      weight: 0,
      neck: 0,
      bmi: 0,
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      essAnswers: [0, 0, 0, 0, 0, 0, 0],
      stopbangScore: 0,
      essScore: 0,
      riskLevel: '',
      recommendation: '',
    },
  };

  // ==========================================
  // DOM READY
  // ==========================================
  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initScrollAnimations();
    initCounterAnimation();
    initDateMin();
    initLanguageToggle();
    initLazyLoading();
  });

  // ==========================================
  // NAVBAR
  // ==========================================
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;

      // Navbar background
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scroll to top button
      if (scrollY > 500) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }

      // Active nav link
      updateActiveNavLink();
    });
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-link');
    const scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ==========================================
  // MOBILE MENU
  // ==========================================
  window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobileMenu');
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    } else {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  // Close on click outside
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open') && e.target === menu) {
      toggleMobileMenu();
    }
  });

  // ==========================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ==========================================
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ==========================================
  // COUNTER ANIMATION
  // ==========================================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-target]');

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    function update() {
      current += step;
      if (current >= target) {
        current = target;
        el.textContent = formatNumber(target) + suffix;
        return;
      }
      el.textContent = formatNumber(Math.floor(current)) + suffix;
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  function formatNumber(num) {
    if (num >= 1000) {
      return num.toLocaleString('id-ID');
    }
    return num.toString();
  }

  // ==========================================
  // SCREENING WIZARD
  // ==========================================
  window.nextStep = function (step) {
    // Validate current step
    if (!validateStep(state.currentStep)) return;

    // Save data from current step
    saveStepData(state.currentStep);

    // Update state
    state.currentStep = step;

    // If going to step 4, calculate auto values
    if (step === 4) {
      calculateAutoValues();
    }

    // If going to step 5, reset ESS
    if (step === 5) {
      state.screeningData.essAnswers = [0, 0, 0, 0, 0, 0, 0];
    }

    // Show step
    showStep(step);
  };

  window.prevStep = function (step) {
    state.currentStep = step;
    showStep(step);
  };

  function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.wizard-step').forEach(function (el) {
      el.style.display = 'none';
      el.classList.remove('active');
    });

    // Show target step
    const targetStep = document.querySelector('.wizard-step[data-step="' + step + '"]');
    if (targetStep) {
      targetStep.style.display = 'block';
      targetStep.classList.add('active');
    }

    // Update progress bar
    document.querySelectorAll('.wizard-progress-step').forEach(function (el, index) {
      el.classList.remove('active', 'completed');
      if (index + 1 < step) {
        el.classList.add('completed');
      } else if (index + 1 === step) {
        el.classList.add('active');
      }
    });

    // Update step indicator
    document.getElementById('stepIndicator').textContent =
      'Langkah ' + step + ' dari ' + state.totalSteps;

    // Scroll to wizard
    const wizard = document.getElementById('screeningWizard');
    if (wizard) {
      wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function validateStep(step) {
    switch (step) {
      case 1:
        var name = document.getElementById('screenName').value.trim();
        var email = document.getElementById('screenEmail').value.trim();
        var phone = document.getElementById('screenPhone').value.trim();
        var age = document.getElementById('screenAge').value;
        var gender = document.getElementById('screenGender').value;
        var height = document.getElementById('screenHeight').value;
        var weight = document.getElementById('screenWeight').value;
        var neck = document.getElementById('screenNeck').value;

        if (!name || !email || !phone || !age || !gender || !height || !weight || !neck) {
          alert('Harap lengkapi semua data diri yang wajib diisi.');
          return false;
        }

        if (age < 18 || age > 100) {
          alert('Usia harus antara 18-100 tahun.');
          return false;
        }

        return true;

      case 2:
        if (state.screeningData.q1 === null || state.screeningData.q2 === null) {
          alert('Harap jawab semua pertanyaan.');
          return false;
        }
        return true;

      case 3:
        if (state.screeningData.q3 === null || state.screeningData.q4 === null) {
          alert('Harap jawab semua pertanyaan.');
          return false;
        }
        return true;

      case 4:
        // Auto-calculated, always valid
        return true;

      default:
        return true;
    }
  }

  function saveStepData(step) {
    switch (step) {
      case 1:
        state.screeningData.name = document.getElementById('screenName').value.trim();
        state.screeningData.email = document.getElementById('screenEmail').value.trim();
        state.screeningData.phone = document.getElementById('screenPhone').value.trim();
        state.screeningData.age = parseInt(document.getElementById('screenAge').value) || 0;
        state.screeningData.gender = document.getElementById('screenGender').value;
        state.screeningData.height = parseFloat(document.getElementById('screenHeight').value) || 0;
        state.screeningData.weight = parseFloat(document.getElementById('screenWeight').value) || 0;
        state.screeningData.neck = parseFloat(document.getElementById('screenNeck').value) || 0;

        // Calculate BMI
        if (state.screeningData.height > 0 && state.screeningData.weight > 0) {
          var heightM = state.screeningData.height / 100;
          state.screeningData.bmi =
            state.screeningData.weight / (heightM * heightM);
        }
        break;
    }
  }

  function calculateAutoValues() {
    var d = state.screeningData;

    // BMI Display
    var bmiEl = document.getElementById('bmiDisplay');
    if (d.bmi > 0) {
      var bmiHigh = d.bmi >= 35;
      bmiEl.innerHTML =
        'BMI Anda: <strong>' +
        d.bmi.toFixed(1) +
        '</strong> kg/m² ' +
        (bmiHigh
          ? ' — <span style="color:var(--risk-high);">≥ 35 (+1 poin)</span>'
          : ' — <span style="color:var(--gray-400);">Normal (&lt; 35)</span>');
      if (bmiHigh) d.q_bmi = true;
      else d.q_bmi = false;
    }

    // Age Display
    var ageEl = document.getElementById('ageDisplay');
    var ageHigh = d.age >= 50;
    ageEl.innerHTML =
      'Usia Anda: <strong>' +
      d.age +
      ' tahun</strong> ' +
      (ageHigh
        ? ' — <span style="color:var(--risk-high);">≥ 50 tahun (+1 poin)</span>'
        : ' — <span style="color:var(--gray-400);">Normal (&lt; 50)</span>');
    if (ageHigh) d.q_age = true;
    else d.q_age = false;

    // Neck Display
    var neckEl = document.getElementById('neckDisplay');
    var neckThreshold = d.gender === 'laki-laki' ? 40 : 38;
    var neckHigh = d.neck > neckThreshold;
    neckEl.innerHTML =
      'Lingkar leher: <strong>' +
      d.neck +
      ' cm</strong> (threshold: ' +
      neckThreshold +
      ' cm) ' +
      (neckHigh
        ? ' — <span style="color:var(--risk-high);">Melebihi (+1 poin)</span>'
        : ' — <span style="color:var(--gray-400);">Normal</span>');
    if (neckHigh) d.q_neck = true;
    else d.q_neck = false;

    // Gender Display
    var genderEl = document.getElementById('genderDisplay');
    var isMale = d.gender === 'laki-laki';
    genderEl.innerHTML =
      'Jenis kelamin: <strong>' +
      (isMale ? 'Laki-laki' : 'Perempuan') +
      '</strong> ' +
      (isMale
        ? ' — <span style="color:var(--risk-high);">Laki-laki (+1 poin)</span>'
        : ' — <span style="color:var(--gray-400);">Perempuan (0 poin)</span>');
    if (isMale) d.q_gender = true;
    else d.q_gender = false;
  }

  // Option selection for STOP-BANG questions
  window.selectOption = function (el, question, value) {
    // Remove selected from siblings
    el.parentElement.querySelectorAll('.wizard-option').forEach(function (opt) {
      opt.classList.remove('selected', 'yes');
    });

    // Add selected
    el.classList.add('selected');
    if (value === 'yes') {
      el.classList.add('yes');
    }

    // Save answer
    state.screeningData[question] = value === 'yes';
  };

  // ESS scoring
  window.selectESS = function (el, index, value) {
    // Remove selected from siblings
    el.parentElement.querySelectorAll('.wizard-option').forEach(function (opt) {
      opt.classList.remove('selected');
    });

    // Add selected
    el.classList.add('selected');

    // Save answer
    state.screeningData.essAnswers[index] = value;
  };

  // Show Results
  window.showResults = function () {
    var d = state.screeningData;

    // Calculate STOP-BANG score
    var sbScore = 0;
    if (d.q1) sbScore++;
    if (d.q2) sbScore++;
    if (d.q3) sbScore++;
    if (d.q4) sbScore++;
    if (d.q_bmi) sbScore++;
    if (d.q_age) sbScore++;
    if (d.q_neck) sbScore++;
    if (d.q_gender) sbScore++;

    d.stopbangScore = sbScore;

    // Calculate ESS score
    var essScore = d.essAnswers.reduce(function (a, b) { return a + b; }, 0);
    d.essScore = essScore;

    // Determine Risk Level
    var riskLevel, riskColor, recommendation;

    if (sbScore >= 5) {
      riskLevel = 'RISIKO TINGGI';
      riskColor = 'var(--risk-high)';
      if (essScore >= 15) {
        recommendation =
          'PRIORITAS: Anda memiliki risiko tinggi mengalami Sleep Apnea dengan tingkat kantuk yang sangat berlebihan. Kami sangat menyarankan untuk segera melakukan Sleep Test (HST/PSG) dan konsultasi dengan dokter spesialis. Hubungi kami via WhatsApp untuk booking prioritas.';
      } else if (essScore >= 11) {
        recommendation =
          'Risiko tinggi Sleep Apnea dengan tingkat kantuk berlebihan. Kami sangat menyarankan untuk melakukan Sleep Test (HST/PSG) dan konsultasi dokter spesialis. Booking sekarang untuk mendapatkan penanganan lebih cepat.';
      } else {
        recommendation =
          'Risiko tinggi Sleep Apnea. Meskipun tingkat kantuk Anda masih dalam batas normal, kami sangat menyarankan untuk melakukan Sleep Test untuk memastikan kondisi Anda. Konsultasi dengan dokter spesialis sangat dianjurkan.';
      }
    } else if (sbScore >= 3) {
      riskLevel = 'RISIKO SEDANG';
      riskColor = 'var(--risk-medium)';
      if (essScore >= 11) {
        recommendation =
          'Risiko sedang Sleep Apnea dengan tingkat kantuk berlebihan. Kami menyarankan untuk melakukan Sleep Test (HST/PSG) guna memastikan diagnosis. Konsultasi dengan dokter spesialis sangat dianjurkan.';
      } else {
        recommendation =
          'Risiko sedang Sleep Apnea. Kami menyarankan untuk konsultasi dengan dokter spesialis untuk evaluasi lebih lanjut. Anda juga dapat memulai dengan tips kesehatan tidur yang baik.';
      }
    } else {
      riskLevel = 'RISIKO RENDAH';
      riskColor = 'var(--risk-low)';
      if (essScore >= 15) {
        recommendation =
          'Risiko rendah Sleep Apnea, namun tingkat kantuk Anda sangat berlebihan. Hal ini bisa disebabkan oleh faktor lain. Kami menyarankan konsultasi dokter untuk evaluasi lebih lanjut.';
      } else if (essScore >= 11) {
        recommendation =
          'Risiko rendah Sleep Apnea, namun tingkat kantuk Anda berlebihan. Pertimbangkan untuk konsultasi dokter guna evaluasi. Jaga kualitas tidur dengan tips: tidur teratur, hindari kafein malam, dan ciptakan lingkungan tidur yang nyaman.';
      } else {
        recommendation =
          'Tidak ada tanda signifikan Sleep Apnea. Pertahankan kebiasaan tidur yang baik! Jaga jadwal tidur teratur, hindari alkohol sebelum tidur, dan pastikan kamar tidur nyaman. Lakukan screening lagi jika gejala muncul.';
      }
    }

    d.riskLevel = riskLevel;

    // Update UI
    document.getElementById('stopbangScore').textContent = sbScore + '/8';
    document.getElementById('essScore').textContent = essScore + '/21';

    var riskCard = document.getElementById('riskCard');
    riskCard.style.background =
      riskColor === 'var(--risk-low)'
        ? 'var(--green-50)'
        : riskColor === 'var(--risk-medium)'
        ? 'rgba(245, 158, 11, 0.1)'
        : 'rgba(239, 68, 68, 0.1)';
    document.getElementById('riskLevel').textContent = riskLevel;
    document.getElementById('riskLevel').style.color = riskColor;
    document.getElementById('recommendation').textContent = recommendation;

    // Go to step 6
    state.currentStep = 6;
    showStep(6);
  };

  // Reset Screening
  window.resetScreening = function () {
    state.currentStep = 1;

    // Reset state
    state.screeningData = {
      name: '',
      email: '',
      phone: '',
      age: 0,
      gender: '',
      height: 0,
      weight: 0,
      neck: 0,
      bmi: 0,
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      essAnswers: [0, 0, 0, 0, 0, 0, 0],
      stopbangScore: 0,
      essScore: 0,
      riskLevel: '',
      recommendation: '',
    };

    // Reset form
    document.getElementById('screenName').value = '';
    document.getElementById('screenEmail').value = '';
    document.getElementById('screenPhone').value = '';
    document.getElementById('screenAge').value = '';
    document.getElementById('screenGender').value = '';
    document.getElementById('screenHeight').value = '';
    document.getElementById('screenWeight').value = '';
    document.getElementById('screenNeck').value = '';

    // Reset option selections
    document.querySelectorAll('.wizard-option.selected').forEach(function (el) {
      el.classList.remove('selected', 'yes');
    });

    // Show step 1
    showStep(1);
  };

  // ==========================================
  // PRODUCT FILTERING
  // ==========================================
  window.filterProducts = function (brand, el) {
    // Update active tab
    document.querySelectorAll('.brand-tab').forEach(function (tab) {
      tab.classList.remove('active');
    });
    el.classList.add('active');

    // Filter products
    document.querySelectorAll('.product-card').forEach(function (card) {
      var cardBrand = card.getAttribute('data-brand');
      if (brand === 'all' || cardBrand === brand) {
        card.style.display = '';
        // Re-trigger animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(function () {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.transition = 'all 0.3s ease';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  };

  // ==========================================
  // FAQ ACCORDION
  // ==========================================
  window.toggleFaq = function (el) {
    var item = el.closest('.faq-item');
    var isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(function (faqItem) {
      faqItem.classList.remove('open');
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add('open');
    }
  };

  // ==========================================
  // BOOKING FORM
  // ==========================================
  window.toggleComplaint = function (el) {
    el.classList.toggle('selected');
  };

  window.handleBooking = function (e) {
    e.preventDefault();

    var name = document.getElementById('bookName').value.trim();
    var phone = document.getElementById('bookPhone').value.trim();
    var service = document.getElementById('bookService').value;
    var date = document.getElementById('bookDate').value;

    if (!name || !phone || !service || !date) {
      alert('Harap lengkapi semua field yang wajib diisi.');
      return;
    }

    // Collect complaint tags
    var complaints = [];
    document.querySelectorAll('.complaint-tag.selected').forEach(function (tag) {
      complaints.push(tag.textContent.trim());
    });

    // Build WhatsApp message
    var serviceNames = {
      consultation: 'Konsultasi Dokter Spesialis',
      hst: 'Home Sleep Test (HST)',
      psg: 'Polysomnography (PSG)',
      'mask-fitting': 'Mask Fitting Assessment',
      'therapy-review': 'Therapy Data Review',
      service: 'Service & Kalibrasi',
    };

    var message =
      'Halo, saya ingin booking layanan.\n\n' +
      '👤 Nama: ' + name + '\n' +
      '📱 Telepon: ' + phone + '\n' +
      '🏥 Layanan: ' + (serviceNames[service] || service) + '\n' +
      '📅 Tanggal: ' + date + '\n';

    var time = document.getElementById('bookTime').value;
    if (time) {
      message += '⏰ Jam: ' + time + '\n';
    }

    if (complaints.length > 0) {
      message += '📋 Keluhan: ' + complaints.join(', ') + '\n';
    }

    var insurance = document.getElementById('bookInsurance').value.trim();
    if (insurance) {
      message += '🏥 Asuransi: ' + insurance + '\n';
    }

    var notes = document.getElementById('bookNotes').value.trim();
    if (notes) {
      message += '📝 Catatan: ' + notes + '\n';
    }

    // Redirect to WhatsApp
    var whatsappUrl =
      'https://wa.me/6281384626118?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');

    // Show success
    alert(
      'Booking Anda akan dikirim via WhatsApp. Terima kasih! Kami akan mengkonfirmasi dalam 1×24 jam.'
    );

    // Reset form
    document.getElementById('bookingForm').reset();
  };

  // ==========================================
  // DATE MIN (Set minimum date to today)
  // ==========================================
  function initDateMin() {
    var dateInput = document.getElementById('bookDate');
    if (dateInput) {
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var dd = String(today.getDate()).padStart(2, '0');
      dateInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
    }
  }

  // ==========================================
  // LANGUAGE TOGGLE (placeholder)
  // ==========================================
  function initLanguageToggle() {
    var langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        langBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        var lang = btn.getAttribute('data-lang');
        // Placeholder: In production, this would switch content
        console.log('Language switched to:', lang);
      });
    });
  }

  // ==========================================
  // LAZY LOADING & WEBP OPTIMIZATION
  // ==========================================
  function initLazyLoading() {
    // Detect WebP support
    var webpSupported = false;
    var webpTest = new Image();
    webpTest.onload = function() {
      webpSupported = (webpTest.width > 0) && (webpTest.height > 0);
      if (webpSupported) {
        document.documentElement.classList.add('webp');
      } else {
        document.documentElement.classList.add('no-webp');
      }
    };
    webpTest.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdFgYA';

    // Intersection Observer for lazy loading images
    var lazyImages = document.querySelectorAll('img[loading="lazy"], .produk-card-image img, .product-img, .detail-main-image img');

    if ('IntersectionObserver' in window) {
      var imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            // Add loaded class for skeleton removal
            img.addEventListener('load', function() {
              img.classList.add('loaded');
            });
            // If already cached
            if (img.complete) {
              img.classList.add('loaded');
            }
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '100px 0px', // Start loading 100px before visible
        threshold: 0.01
      });

      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    } else {
      // Fallback: load all images immediately
      lazyImages.forEach(function(img) {
        img.classList.add('loaded');
      });
    }

    // Convert images to WebP if supported (for self-hosted images)
    if (webpSupported) {
      var allImages = document.querySelectorAll('img[data-src-webp]');
      allImages.forEach(function(img) {
        img.src = img.getAttribute('data-src-webp');
      });
    }
  }
})();
