(() => {
  "use strict";

  /* =========================================================
     GALLERY DATA
  ========================================================= */

  const categories = {
    mountains: [
      {
        title: "Hunza Valley",
        location: "GILGIT-BALTISTAN, PAKISTAN",
        description:
          "A dramatic valley of towering peaks, terraced fields and villages glowing beneath crisp northern skies.",
        image: "images/hunza-valley-in-cherry-blossom.webp"
      },
      {
        title: "K2 Mountain",
        location: "GILGIT-BALTISTAN, PAKISTAN",
        description:
          "A legendary high-altitude landscape shaped by immense rock walls, snowfields and the unmistakable silhouette of K2.",
        image: "images/k2-mountain.jpg"
      },
      {
        title: "Fairy Meadows",
        location: "DIAMER, GILGIT-BALTISTAN",
        description:
          "An alpine meadow opening into an unforgettable panorama of Nanga Parbat and the northern ranges.",
        image: "images/Fairy Meadows Image.jfif"
      },
      {
        title: "Nanga Parbat",
        location: "DIAMER, GILGIT-BALTISTAN",
        description:
          "The immense western Himalayan peak rises above forests and valleys in a scene built for slow, quiet viewing.",
        image: "images/Nanga Parbat image.jfif"
      },
      {
        title: "Passu Cones",
        location: "HUNZA, GILGIT-BALTISTAN",
        description:
          "Sharp mountain spires create one of the north’s most graphic and instantly recognizable travel landscapes.",
        image: "images/Passu Cones Image.jfif"
      },
      {
        title: "Rakaposhi",
        location: "NAGAR, GILGIT-BALTISTAN",
        description:
          "One of the world’s highest unbroken rock faces, rising straight from the Karakoram Highway without a single foothill in between.",
        image: "images/rakaposhi.jpg"
      },
      {
        title: "Deosai Plains",
        location: "SKARDU, GILGIT-BALTISTAN",
        description:
          "A vast alpine plateau above the tree line, wide open to the sky and known as the land of giants for its scale.",
        image: "images/deosai-plains.jpg"
      },
      {
        title: "Naltar Valley",
        location: "GILGIT, GILGIT-BALTISTAN",
        description:
          "Pine forest, wooden villages and a chain of mineral-blue lakes tucked into a side valley off Gilgit.",
        image: "images/naltar-valley.jpg"
      }
    ],

    lakes: [
      {
        title: "Attabad Lake",
        location: "HUNZA, GILGIT-BALTISTAN",
        description:
          "Turquoise water winds between steep mountains, creating a surreal natural composition of color and scale.",
        image: "images/ATTABAD-LAKE-Featured.webp"
      },
      {
        title: "Saif-ul-Malook",
        location: "KAGHAN VALLEY, KHYBER PAKHTUNKHWA",
        description:
          "A high alpine lake framed by rugged slopes, cool air and reflections that make the landscape feel almost otherworldly.",
        image: "images/Saif ul malook.jfif"
      },
      {
        title: "Mahodand Lake",
        location: "SWAT, KHYBER PAKHTUNKHWA",
        description:
          "Glacial waters, pine forests and mountain walls form a cinematic setting deep inside the upper Swat region.",
        image: "images/Mahodand Lake.jfif"
      },
      {
        title: "Neelum Valley",
        location: "AZAD KASHMIR, PAKISTAN",
        description:
          "A green northern corridor of rivers, forests and mountain villages layered into a soft, atmospheric horizon.",
        image: "images/Neelum Valley.jfif"
      },
      {
        title: "Shangrila",
        location: "SKARDU, GILGIT-BALTISTAN",
        description:
          "A serene mountain retreat surrounded by dramatic rock faces, gardens and the deep stillness of the north.",
        image: "images/Shangrila-Pakistan-960x640.jpg"
      },
      {
        title: "Ratti Gali Lake",
        location: "NEELUM VALLEY, AZAD KASHMIR",
        description:
          "An alpine lake reached on foot through wildflower meadows, ringed by glaciers that feed its glass-clear water.",
        image: "images/ratti-gali-lake.jpg"
      },
      {
        title: "Satpara Lake",
        location: "SKARDU, GILGIT-BALTISTAN",
        description:
          "A glacial reservoir set against bare mountain walls, a short drive from Skardu and calm enough to mirror the sky.",
        image: "images/satpara-lake.jpg"
      },
      {
        title: "Rush Lake",
        location: "NAGAR, GILGIT-BALTISTAN",
        description:
          "One of the highest alpine lakes in the world, reached by a demanding trek with Rakaposhi filling the horizon.",
        image: "images/rush-lake.jpg"
      }
    ],

    beaches: [
      {
        title: "Astola Island",
        location: "BALOCHISTAN, ARABIAN SEA",
        description:
          "A remote island of pale sand, rugged cliffs and clear blue water at the edge of Pakistan’s Arabian Sea.",
        image: "images/astola island.jpg"
      },
      {
        title: "Clifton Beach",
        location: "KARACHI, SINDH",
        description:
          "One of Karachi’s best-known coastal spaces, alive with open horizons and the rhythm of the Arabian Sea.",
        image: "images/clifton beach.jfif"
      },
      {
        title: "Gwadar",
        location: "BALOCHISTAN, PAKISTAN",
        description:
          "A striking coastal city where dry mountains meet bright sea and long, expansive shorelines.",
        image: "images/gwadar beach.jfif"
      },
      {
        title: "Kund Malir",
        location: "BALOCHISTAN, MAKRAN COAST",
        description:
          "Golden desert hills descend toward a wide blue coast, creating one of the country’s most cinematic road-trip scenes.",
        image: "images/Kund Malir Beach.jpg"
      },
      {
        title: "Ormara",
        location: "BALOCHISTAN, MAKRAN COAST",
        description:
          "A quiet coastal landscape of soft curves, open water and a sense of distance far from the city.",
        image: "images/ormara beach.jpeg"
      },
      {
        title: "Hawke's Bay",
        location: "KARACHI, SINDH",
        description:
          "A long, low-tide beach on Karachi’s outskirts, popular for horse rides along the sand at sunset.",
        image: "images/hawkes-bay.jpg"
      },
      {
        title: "Sonmiani",
        location: "LASBELA, BALOCHISTAN",
        description:
          "A calm bay north of Karachi where mangrove creeks meet open sea, quieter than the city’s better-known beaches.",
        image: "images/sonmiani.jpg"
      },
      {
        title: "Jiwani",
        location: "BALOCHISTAN, ARABIAN SEA",
        description:
          "A remote fishing town near the Iran border, with wide untouched sand and dramatic coastal cliffs nearby.",
        image: "images/jiwani.jpg"
      }
    ],

    cities: [
      {
        title: "Islamabad",
        location: "ISLAMABAD CAPITAL TERRITORY",
        description:
          "A green, modern capital set beneath the Margalla Hills, balancing wide avenues, calm spaces and mountain views.",
        image: "images/Islamabad.jpg"
      },
      {
        title: "Lahore",
        location: "PUNJAB, PAKISTAN",
        description:
          "A city of historic gates, Mughal architecture, food and street life where layers of culture meet everyday energy.",
        image: "images/Lahore image.jpg"
      },
      {
        title: "Karachi",
        location: "SINDH, PAKISTAN",
        description:
          "Pakistan’s vibrant coastal metropolis, defined by movement, architecture, sea air and an unmistakable urban pulse.",
        image: "images/Karachi-Pakistan.webp"
      },
      {
        title: "Peshawar",
        location: "KHYBER PAKHTUNKHWA, PAKISTAN",
        description:
          "An old trading city where historic bazaars, gateways and regional traditions create a richly textured urban atmosphere.",
        image: "images/Peshawar.jfif"
      },
      {
        title: "Multan",
        location: "PUNJAB, PAKISTAN",
        description:
          "Known for blue-tiled shrines, warm light and centuries of craft, Multan carries a distinct visual identity of its own.",
        image: "images/multan.jpeg"
      },
      {
        title: "Quetta",
        location: "BALOCHISTAN, PAKISTAN",
        description:
          "A highland capital ringed by bare mountains, known for its fruit orchards, dry air and frontier-town character.",
        image: "images/quetta.jpg"
      },
      {
        title: "Sialkot",
        location: "PUNJAB, PAKISTAN",
        description:
          "An industrious northern city famous for its craftsmanship, set among fields close to the Kashmir foothills.",
        image: "images/sialkot.jpg"
      },
      {
        title: "Hyderabad",
        location: "SINDH, PAKISTAN",
        description:
          "An old Sindhi city on the Indus, layered with bazaars, forts and a slower, riverside pace of life.",
        image: "images/hyderabad.jpg"
      }
    ],

    heritage: [
      {
        title: "Mohenjo-daro",
        location: "LARKANA, SINDH",
        description:
          "The excavated streets of a 4,500-year-old Indus Valley city, among the world’s earliest planned urban settlements.",
        image: "images/mohenjo-daro.jpg"
      },
      {
        title: "Lahore Fort",
        location: "LAHORE, PUNJAB",
        description:
          "A Mughal-era citadel of marble pavilions, mirrored halls and gardens layered with centuries of imperial history.",
        image: "images/lahore-fort.jpg"
      },
      {
        title: "Rohtas Fort",
        location: "JHELUM, PUNJAB",
        description:
          "A massive 16th-century garrison fortress with kilometres of intact walls, bastions and monumental gateways.",
        image: "images/rohtas-fort.jpg"
      },
      {
        title: "Makli Necropolis",
        location: "THATTA, SINDH",
        description:
          "One of the largest funerary sites in the world, its carved sandstone tombs spanning several centuries of craft.",
        image: "images/makli-necropolis.jpg"
      },
      {
        title: "Derawar Fort",
        location: "BAHAWALPUR, PUNJAB",
        description:
          "A square desert fortress with forty bastions rising abruptly from the Cholistan sands, visible for miles around.",
        image: "images/derawar-fort.jpg"
      },
      {
        title: "Badshahi Mosque",
        location: "LAHORE, PUNJAB",
        description:
          "A red sandstone Mughal mosque with a vast open courtyard, among the largest of its era anywhere in the world.",
        image: "images/badshahi-mosque.jpg"
      }
    ],

    waterfalls: [
      {
        title: "Kund Banda Waterfall",
        location: "NARAN, KHYBER PAKHTUNKHWA",
        description:
          "A powerful cascade dropping through pine forest, reached by a short hike off the Kaghan Valley road.",
        image: "images/kund-banda-waterfall.jpg"
      },
      {
        title: "Manthoka Waterfall",
        location: "SKARDU, GILGIT-BALTISTAN",
        description:
          "Glacial meltwater tumbles down terraced rock in Kharmang Valley, framed by orchards and steep canyon walls.",
        image: "images/manthoka-waterfall.jpg"
      },
      {
        title: "Daral Waterfall",
        location: "BAHRAIN, SWAT, KHYBER PAKHTUNKHWA",
        description:
          "A wide, fast-moving falls just off the Swat River, one of the valley’s most accessible and photographed spots.",
        image: "images/daral-waterfall.jpg"
      },
      {
        title: "Kumrat Waterfalls",
        location: "UPPER DIR, KHYBER PAKHTUNKHWA",
        description:
          "Cold, clear cascades set inside dense pine forest, part of one of the north’s least-crowded valleys.",
        image: "images/kumrat-waterfalls.jpg"
      },
      {
        title: "Noori Waterfall",
        location: "HAVELIAN, KHYBER PAKHTUNKHWA",
        description:
          "A quieter, close-to-the-city cascade set among terraced hills, popular for an easy day trip from Abbottabad.",
        image: "images/noori-waterfall.jpg"
      },
      {
        title: "Chitta Katha Falls",
        location: "NEELUM VALLEY, AZAD KASHMIR",
        description:
          "Meltwater feeds a bright turquoise pool below the falls, reached on a scenic trek from the head of Neelum Valley.",
        image: "images/chitta-katha-falls.jpg"
      },
      {
        title: "Chail Waterfall",
        location: "MURREE, PUNJAB",
        description:
          "A forested cascade a short drive from Murree, a favourite quick escape for visitors staying in the hill station.",
        image: "images/chail-waterfall.jpg"
      },
      {
        title: "Ushu Waterfall",
        location: "KALAM, SWAT, KHYBER PAKHTUNKHWA",
        description:
          "Fed by the Ushu River at the edge of Kalam’s pine forests, framed by some of Swat’s highest surrounding peaks.",
        image: "images/ushu-waterfall.jpg"
      }
    ]
  };

  const categoryLabels = {
    mountains: "MOUNTAINS",
    lakes: "LAKES",
    beaches: "BEACHES",
    cities: "CITIES",
    heritage: "HERITAGE",
    waterfalls: "WATERFALLS"
  };

  /* =========================================================
     SETTINGS
  ========================================================= */

  const AUTOPLAY_MS = 5200;
  const TRANSITION_MS = 1300;

  /* =========================================================
     DOM ELEMENTS
  ========================================================= */

  const els = {
    loader: document.getElementById("siteLoader"),

    gallery: document.getElementById("gallery"),
    galleryInteractive: document.getElementById("galleryInteractive"),
    galleryBg: document.getElementById("galleryBg"),

    imageStage: document.getElementById("imageStage"),
    imageCurrent: document.getElementById("imageCurrent"),
    imagePrevious: document.getElementById("imagePrevious"),

    slideCopy: document.getElementById("slideCopy"),
    slideNumber: document.getElementById("slideNumber"),
    slideCount: document.getElementById("slideCount"),
    slideCategory: document.getElementById("slideCategory"),
    slideLocation: document.getElementById("slideLocation"),
    slideTitle: document.getElementById("slideTitle"),
    slideDescription: document.getElementById("slideDescription"),

    viewImageBtn: document.getElementById("viewImageBtn"),

    progressBar: document.getElementById("progressBar"),
    imageCaption: document.getElementById("imageCaption"),
    thumbs: document.getElementById("thumbs"),

    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),

    categoryTabs: document.querySelector(".category-tabs"),
    categoryRule: document.querySelector(".category-rule"),

    lightbox: document.getElementById("lightbox"),
    lightboxImage: document.getElementById("lightboxImage"),
    lightboxCaption: document.getElementById("lightboxCaption"),
    lightboxClose: document.getElementById("lightboxClose"),
    lightboxBackdrop: document.getElementById("lightboxBackdrop"),

    heroMediaWrap: document.getElementById("heroMediaWrap"),
    heroStatDest: document.getElementById("heroStatDest"),
    heroStatCat: document.getElementById("heroStatCat"),
    heroQuicklinks: document.getElementById("heroQuicklinks")
  };

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================================================
     STATE
  ========================================================= */

  const state = {
    category: "mountains",
    index: 0,
    isAnimating: false,
    timer: null,
    progressRaf: null,
    autoplayStartedAt: 0,
    hoverPaused: false
  };

  let activeLayer = els.imageCurrent;
  let idleLayer = els.imagePrevious;

  /* =========================================================
     HELPERS
  ========================================================= */

  function getItems() {
    return categories[state.category] || [];
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function setImage(layer, item) {
    if (!layer || !item) return;

    const image = layer.querySelector("img");

    if (!image) return;

    image.src = item.image;
    image.alt = `${item.title}, ${item.location}`;
  }

  function preloadItem(item) {
    if (!item) return;

    const image = new Image();

    image.decoding = "async";
    image.loading = "eager";
    image.src = item.image;
  }

  /* =========================================================
     TEXT UPDATE
  ========================================================= */

  function updateText(item, index, total) {
    if (!item) return;

    if (els.slideNumber) {
      els.slideNumber.textContent = pad(index + 1);
    }

    if (els.slideCount) {
      els.slideCount.textContent = pad(total);
    }

    if (els.slideCategory) {
      els.slideCategory.textContent =
        categoryLabels[state.category] ||
        state.category.toUpperCase();
    }

    if (els.slideLocation) {
      els.slideLocation.textContent = item.location;
    }

    if (els.slideTitle) {
      els.slideTitle.textContent = item.title;
    }

    if (els.slideDescription) {
      els.slideDescription.textContent = item.description;
    }

    if (els.viewImageBtn) {
      els.viewImageBtn.dataset.image = item.image;
      els.viewImageBtn.dataset.title = item.title;
    }

    if (els.imageCaption) {
      els.imageCaption.textContent =
        `${pad(index + 1)} / ${pad(total)}`;
    }
  }

  /* =========================================================
     THUMBNAILS
  ========================================================= */

  function updateThumbs() {
    if (!els.thumbs) return;

    const items = getItems();

    els.thumbs.innerHTML = "";

    const fragment = document.createDocumentFragment();

    items.forEach((item, itemIndex) => {
      const button = document.createElement("button");

      button.className =
        `thumb${itemIndex === state.index ? " active" : ""}`;

      button.type = "button";

      button.setAttribute(
        "aria-label",
        `Open ${item.title}`
      );

      button.dataset.index = itemIndex;

      const img = document.createElement("img");

      img.src = item.image;
      img.alt = "";
      img.loading = "lazy";

      button.appendChild(img);
      fragment.appendChild(button);
    });

    els.thumbs.appendChild(fragment);
  }

  /* =========================================================
     BACKGROUND
  ========================================================= */

  function setBackground(item) {
    if (!els.galleryBg || !item) return;

    const safeUrl = item.image.replaceAll('"', '\\"');

    els.galleryBg.style.backgroundImage =
      `url("${safeUrl}")`;
  }

  /* =========================================================
     TEXT ANIMATION
  ========================================================= */

  function prepareTextEntrance() {
    if (!els.slideCopy) return;

    els.slideCopy.classList.remove(
      "is-exiting",
      "is-entering"
    );

    const textElements =
      els.slideCopy.querySelectorAll(".text-item");

    textElements.forEach((element) => {
      element.style.setProperty(
        "--i",
        element.dataset.textIndex || 1
      );
    });

    void els.slideCopy.offsetWidth;

    els.slideCopy.classList.add("is-entering");
  }

  function removeTextAnimationSoon() {
    window.setTimeout(() => {
      if (els.slideCopy) {
        els.slideCopy.classList.remove("is-entering");
      }
    }, 900);
  }

  /* =========================================================
     CATEGORY BUTTONS
  ========================================================= */

  function updateCategoryButtons(activeCategory) {
    document
      .querySelectorAll(".category-tab")
      .forEach((button) => {
        const active =
          button.dataset.category === activeCategory;

        button.classList.toggle("active", active);

        button.setAttribute(
          "aria-selected",
          String(active)
        );
      });

    moveCategoryIndicator();
  }

  function moveCategoryIndicator() {
    if (!els.categoryRule || !els.categoryTabs) return;

    const activeTab =
      els.categoryTabs.querySelector(
        ".category-tab.active"
      );

    if (!activeTab) return;

    const tabsRect =
      els.categoryTabs.getBoundingClientRect();

    const activeRect =
      activeTab.getBoundingClientRect();

    const offsetLeft =
      activeRect.left - tabsRect.left;

    const offsetTop =
      activeRect.top - tabsRect.top;

    els.categoryRule.style.transform =
      `translate(${offsetLeft}px, ${offsetTop}px)`;

    els.categoryRule.style.width =
      `${activeRect.width}px`;

    els.categoryRule.style.height =
      `${activeRect.height}px`;

    els.categoryRule.classList.add("is-active");
  }

  /* =========================================================
     MAIN CINEMATIC TRANSITION
  ========================================================= */

  function animateTo(nextIndex, options = {}) {
    const {
      resetAutoplay = true
    } = options;

    if (state.isAnimating) return;

    const items = getItems();
    const total = items.length;

    if (!total) return;

    const normalized =
      (nextIndex + total) % total;

    const nextItem = items[normalized];

    if (!nextItem) return;

    state.isAnimating = true;

    if (els.slideCopy) {
      els.slideCopy.classList.remove("is-entering");
      els.slideCopy.classList.add("is-exiting");
    }

    setImage(idleLayer, nextItem);

    preloadItem(
      items[(normalized + 1) % total]
    );

    preloadItem(
      items[(normalized + 2) % total]
    );

    if (els.imageStage) {
      els.imageStage.classList.remove(
        "is-transitioning"
      );

      void els.imageStage.offsetWidth;

      els.imageStage.classList.add(
        "is-transitioning"
      );
    }

    window.setTimeout(() => {
      state.index = normalized;

      updateText(
        nextItem,
        state.index,
        total
      );

      setBackground(nextItem);
      updateThumbs();

      const oldActive = activeLayer;

      activeLayer = idleLayer;
      idleLayer = oldActive;

      activeLayer.classList.remove("previous");
      activeLayer.classList.add("current");

      idleLayer.classList.remove("current");
      idleLayer.classList.add("previous");

      activeLayer.style.animation = "none";
      idleLayer.style.animation = "none";

      void activeLayer.offsetWidth;
      void idleLayer.offsetWidth;

      activeLayer.style.animation = "";
      idleLayer.style.animation = "";

      if (els.imageStage) {
        els.imageStage.classList.remove(
          "is-transitioning"
        );
      }

      if (els.slideCopy) {
        els.slideCopy.classList.remove(
          "is-exiting"
        );
      }

      prepareTextEntrance();
      removeTextAnimationSoon();

      state.isAnimating = false;

      if (resetAutoplay) {
        startAutoplay();
      } else {
        syncProgress(true);
      }
    }, TRANSITION_MS + 40);

    if (resetAutoplay) {
      startAutoplay();
    }
  }

  /* =========================================================
     CATEGORY CHANGE
  ========================================================= */

  function changeCategory(nextCategory) {
    if (!categories[nextCategory]) return;

    if (nextCategory === state.category) {
      return;
    }

    if (state.isAnimating) {
      return;
    }

    const oldCategory = state.category;
    const oldIndex = state.index;

    const nextItems = categories[nextCategory];

    if (!nextItems.length) return;

    const nextItem = nextItems[0];

    state.category = nextCategory;
    state.index = 0;
    state.isAnimating = true;

    if (els.slideCopy) {
      els.slideCopy.classList.remove("is-entering");
      els.slideCopy.classList.add("is-exiting");
    }

    setImage(idleLayer, nextItem);

    preloadItem(nextItems[1]);
    preloadItem(nextItems[2]);

    if (els.imageStage) {
      els.imageStage.classList.remove(
        "is-transitioning"
      );

      void els.imageStage.offsetWidth;

      els.imageStage.classList.add(
        "is-transitioning"
      );
    }

    setBackground(nextItem);

    updateText(
      nextItem,
      0,
      nextItems.length
    );

    updateThumbs();

    window.setTimeout(() => {
      const oldActive = activeLayer;

      activeLayer = idleLayer;
      idleLayer = oldActive;

      activeLayer.classList.remove("previous");
      activeLayer.classList.add("current");

      idleLayer.classList.remove("current");
      idleLayer.classList.add("previous");

      activeLayer.style.animation = "none";
      idleLayer.style.animation = "none";

      void activeLayer.offsetWidth;
      void idleLayer.offsetWidth;

      activeLayer.style.animation = "";
      idleLayer.style.animation = "";

      if (els.imageStage) {
        els.imageStage.classList.remove(
          "is-transitioning"
        );
      }

      if (els.slideCopy) {
        els.slideCopy.classList.remove(
          "is-exiting"
        );
      }

      prepareTextEntrance();
      removeTextAnimationSoon();

      state.isAnimating = false;

      updateCategoryButtons(
        nextCategory
      );

      startAutoplay();

      document.dispatchEvent(
        new CustomEvent(
          "gallery-category-changed",
          {
            detail: {
              from: oldCategory,
              fromIndex: oldIndex,
              to: nextCategory
            }
          }
        )
      );
    }, TRANSITION_MS + 40);

    startAutoplay();
  }

  /* =========================================================
     AUTOPLAY
  ========================================================= */

  function startAutoplay() {
    window.clearTimeout(state.timer);

    window.cancelAnimationFrame(
      state.progressRaf
    );

    state.autoplayStartedAt =
      performance.now();

    syncProgress(true);

    state.timer = window.setTimeout(() => {
      if (state.hoverPaused) {
        startAutoplay();
        return;
      }

      animateTo(
        state.index + 1
      );
    }, AUTOPLAY_MS);
  }

  /* =========================================================
     PROGRESS BAR
  ========================================================= */

  function syncProgress(reset = false) {
    window.cancelAnimationFrame(
      state.progressRaf
    );

    if (reset && els.progressBar) {
      els.progressBar.style.width = "0%";
    }

    const tick = (now) => {
      if (
        state.hoverPaused ||
        state.isAnimating
      ) {
        state.progressRaf =
          window.requestAnimationFrame(
            tick
          );

        return;
      }

      const elapsed =
        Math.max(
          0,
          now -
            state.autoplayStartedAt
        );

      const percent =
        Math.min(
          100,
          (elapsed /
            AUTOPLAY_MS) *
            100
        );

      if (els.progressBar) {
        els.progressBar.style.width =
          `${percent}%`;
      }

      if (percent < 100) {
        state.progressRaf =
          window.requestAnimationFrame(
            tick
          );
      }
    };

    state.progressRaf =
      window.requestAnimationFrame(
        tick
      );
  }

  /* =========================================================
     LIGHTBOX
  ========================================================= */

  function openLightbox(item) {
    if (!item || !els.lightbox) return;

    if (els.lightboxImage) {
      els.lightboxImage.src =
        item.image;

      els.lightboxImage.alt =
        item.title;
    }

    if (els.lightboxCaption) {
      els.lightboxCaption.textContent =
        `${item.title} · ${item.location}`;
    }

    els.lightbox.classList.add("open");

    els.lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";
  }

  function closeLightbox() {
    if (!els.lightbox) return;

    els.lightbox.classList.remove(
      "open"
    );

    els.lightbox.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow =
      "";
  }

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  function syncActiveNav() {
    const sections = [
      document.getElementById("home"),
      document.getElementById("gallery"),
      document.getElementById("about")
    ].filter(Boolean);

    const navLinks =
      document.querySelectorAll(
        ".nav-link[data-nav]"
      );

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (!entry.isIntersecting) {
                return;
              }

              navLinks.forEach(
                (link) => {
                  link.classList.toggle(
                    "active",
                    link.dataset.nav ===
                      entry.target.id
                  );
                }
              );
            }
          );
        },
        {
          threshold: 0.45
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(section)
    );
  }

  /* =========================================================
     IMAGE FRAME TILT
  ========================================================= */

  function bindStageTilt() {
    if (
      !els.imageStage ||
      prefersReducedMotion ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    const MAX_TILT = 5;
    let rafId = null;

    els.imageStage.addEventListener(
      "mousemove",
      (event) => {
        if (rafId) return;

        rafId =
          window.requestAnimationFrame(
            () => {
              const rect =
                els.imageStage.getBoundingClientRect();

              const px =
                (event.clientX -
                  rect.left) /
                rect.width;

              const py =
                (event.clientY -
                  rect.top) /
                rect.height;

              const rotateY =
                (px - 0.5) *
                MAX_TILT *
                2;

              const rotateX =
                (0.5 - py) *
                MAX_TILT *
                2;

              els.imageStage.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

              rafId = null;
            }
          );
      }
    );

    els.imageStage.addEventListener(
      "mouseleave",
      () => {
        els.imageStage.style.transform =
          "rotateX(0deg) rotateY(0deg)";
      }
    );
  }

  /* =========================================================
     HERO PARALLAX
  ========================================================= */

  function initHeroParallax() {
    if (
      !els.heroMediaWrap ||
      prefersReducedMotion ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }

    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;

        ticking = true;

        window.requestAnimationFrame(
          () => {
            const scrollY =
              window.scrollY || 0;

            const hero =
              document.getElementById(
                "home"
              );

            if (hero) {
              const rect =
                hero.getBoundingClientRect();

              if (
                rect.bottom > 0 &&
                rect.top < window.innerHeight
              ) {
                const offset =
                  Math.min(
                    35,
                    Math.max(
                      -35,
                      scrollY * 0.08
                    )
                  );

                els.heroMediaWrap.style.transform =
                  `translate3d(0, ${offset}px, 0)`;
              }
            }

            ticking = false;
          }
        );
      },
      {
        passive: true
      }
    );
  }

  /* =========================================================
     HERO STATS
     Kept safe for compatibility, although the HOME stats
     have been removed from the updated HTML.
  ========================================================= */

  function animateCount(element, target) {
    if (!element) return;

    const duration = 900;
    const startTime = performance.now();

    function tick(now) {
      const progress =
        Math.min(
          1,
          (now - startTime) /
            duration
        );

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      element.textContent =
        Math.round(
          target * eased
        );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  function initHeroStats(totals) {
    if (
      !els.heroStatDest ||
      !els.heroStatCat
    ) {
      return;
    }

    animateCount(
      els.heroStatDest,
      totals.total
    );

    animateCount(
      els.heroStatCat,
      totals.categoryCount
    );
  }

  /* =========================================================
     HERO QUICKLINKS
     Kept safe for compatibility, although the HOME
     quicklinks have been removed from the updated HTML.
  ========================================================= */

  function initHeroQuicklinks() {
    if (!els.heroQuicklinks) return;

    const fragment =
      document.createDocumentFragment();

    Object.keys(categories).forEach(
      (key) => {
        const button =
          document.createElement(
            "button"
          );

        button.type = "button";
        button.textContent =
          categoryLabels[key] ||
          key.toUpperCase();

        button.dataset.category =
          key;

        button.addEventListener(
          "click",
          () => {
            const gallery =
              document.getElementById(
                "gallery"
              );

            if (gallery) {
              gallery.scrollIntoView({
                behavior: "smooth"
              });
            }

            changeCategory(key);
          }
        );

        fragment.appendChild(
          button
        );
      }
    );

    els.heroQuicklinks.appendChild(
      fragment
    );
  }

  /* =========================================================
     EVENTS
  ========================================================= */

  function bindEvents() {
    /* Category tabs */

    document
      .querySelectorAll(".category-tab")
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            changeCategory(
              button.dataset.category
            );
          }
        );
      });

    /* Previous */

    if (els.prevBtn) {
      els.prevBtn.addEventListener(
        "click",
        () => {
          animateTo(
            state.index - 1
          );
        }
      );
    }

    /* Next */

    if (els.nextBtn) {
      els.nextBtn.addEventListener(
        "click",
        () => {
          animateTo(
            state.index + 1
          );
        }
      );
    }

    /* Thumbnails */

    if (els.thumbs) {
      els.thumbs.addEventListener(
        "click",
        (event) => {
          const button =
            event.target.closest(
              ".thumb"
            );

          if (!button) return;

          const index =
            Number(
              button.dataset.index
            );

          if (
            Number.isNaN(index) ||
            index === state.index
          ) {
            return;
          }

          animateTo(index);
        }
      );
    }

    /* View image */

    if (els.viewImageBtn) {
      els.viewImageBtn.addEventListener(
        "click",
        () => {
          const items = getItems();
          const item =
            items[state.index];

          openLightbox(item);
        }
      );
    }

    /* Close lightbox */

    if (els.lightboxClose) {
      els.lightboxClose.addEventListener(
        "click",
        closeLightbox
      );
    }

    if (els.lightboxBackdrop) {
      els.lightboxBackdrop.addEventListener(
        "click",
        closeLightbox
      );
    }

    /* Escape key */

    document.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "Escape"
        ) {
          closeLightbox();
        }

        if (
          event.key === "ArrowRight"
        ) {
          animateTo(
            state.index + 1
          );
        }

        if (
          event.key === "ArrowLeft"
        ) {
          animateTo(
            state.index - 1
          );
        }
      }
    );

    /* Pause autoplay when hovering gallery */

    if (els.galleryInteractive) {
      els.galleryInteractive.addEventListener(
        "mouseenter",
        () => {
          state.hoverPaused = true;
        }
      );

      els.galleryInteractive.addEventListener(
        "mouseleave",
        () => {
          state.hoverPaused = false;
          startAutoplay();
        }
      );
    }

    /* Pause autoplay while tab is hidden */

    document.addEventListener(
      "visibilitychange",
      () => {
        if (
          document.hidden
        ) {
          window.clearTimeout(
            state.timer
          );

          window.cancelAnimationFrame(
            state.progressRaf
          );
        } else {
          startAutoplay();
        }
      }
    );

    /* Recalculate category indicator */

    window.addEventListener(
      "resize",
      () => {
        window.requestAnimationFrame(
          moveCategoryIndicator
        );
      }
    );
  }

  /* =========================================================
     INITIALIZE
  ========================================================= */

  function initializeGallery() {
    const items = getItems();

    if (!items.length) return;

    const firstItem = items[0];

    setImage(
      els.imageCurrent,
      firstItem
    );

    setImage(
      els.imagePrevious,
      items[1] || firstItem
    );

    updateText(
      firstItem,
      0,
      items.length
    );

    setBackground(
      firstItem
    );

    updateThumbs();

    updateCategoryButtons(
      state.category
    );

    prepareTextEntrance();
    removeTextAnimationSoon();

    bindEvents();
    bindStageTilt();
    syncActiveNav();
    initHeroParallax();

    /*
      HOME stats and quicklinks are no longer present
      in the updated HTML, so these functions simply
      do nothing if their elements are missing.
    */

    const totals = {
      total: Object.values(categories)
        .reduce(
          (sum, items) =>
            sum + items.length,
          0
        ),

      categoryCount:
        Object.keys(categories)
          .length
    };

    initHeroStats(totals);
    initHeroQuicklinks();

    startAutoplay();

    /* Hide loader */

    window.setTimeout(
      () => {
        if (els.loader) {
          els.loader.classList.add(
            "is-hidden"
          );
        }
      },
      650
    );
  }

  /* =========================================================
     START
  ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      initializeGallery
    );
  } else {
    initializeGallery();
  }

})();