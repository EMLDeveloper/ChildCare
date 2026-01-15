function instagram() {
  window.open("https://www.instagram.com/zoilas_daycare/");
}

function facebook() {
  window.open(
    "https://www.facebook.com/profile.php?id=61551035442788&checkpoint_src=any"
  );
}

function whatsaap() {
  window.open("https://wa.me/5102659453");
}

function igpersonal() {
  window.open("https://www.instagram.com/zoilas_daycare/");
}

function fbpersonal() {
  window.open(
    "https://www.facebook.com/profile.php?id=61551035442788&checkpoint_src=any"
  );
}

let navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const header = document.querySelector(".header");

menuBtn.onclick = () => {
  navbar.classList.add("active");
  header.classList.add("active-menu");
  document.body.style.overflow = "hidden";
};

closeBtn.onclick = () => {
  navbar.classList.remove("active");
  header.classList.remove("active-menu");
  document.body.style.overflow = "";
};

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    header.classList.remove("active-menu");
    document.body.style.overflow = "";
  });
});

window.onscroll = () => {
  navbar.classList.remove("active");
  if (header) {
    header.classList.remove("active-menu");
    document.body.style.overflow = "";
  }
  
  // Add scroll effect to header
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  
  // Update active nav link based on scroll position
  updateActiveNavLink();
};

// Function to update active nav link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");
  
  let current = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Home Carousel Functionality
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentSlide = 0;
  let autoSlideInterval;

  // Check if carousel elements exist
  if (slides.length === 0) {
    console.log('Carousel slides not found');
    return;
  }

  // Function to show a specific slide
  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    if (slides[index]) {
      slides[index].classList.add('active');
    }
    if (dots[index]) {
      dots[index].classList.add('active');
    }

    currentSlide = index;
  }

  // Function to go to next slide
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Function to go to previous slide
  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  // Auto-slide function
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  // Event listeners for buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextSlide();
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual navigation
    });
    console.log('Next button event listener added');
  } else {
    console.log('Next button not found');
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevSlide();
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual navigation
    });
    console.log('Prev button event listener added');
  } else {
    console.log('Prev button not found');
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual navigation
    });
  });

  // Pause auto-slide on hover
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
  }

  // Start auto-slide when page loads
  if (slides.length > 0) {
    startAutoSlide();
  }
}

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  // DOM is already loaded
  initCarousel();
}

// Language Translation System
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About us',
    'nav.activities': 'Activities',
    'nav.teacher': 'Teacher',
    'nav.reviews': 'Reviews',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.calendar': 'Calendar',
    'nav.nutrition': 'Nutrition',
    'nav.contact': 'Contact us',
    
    // Home Section
    'home.welcome': 'Trusted by Families Since Day One',
    'home.welcomeTitle': 'Welcome to our',
    'home.daycare': 'Home Daycare',
    'home.subtitle': '"Growing together, always learning: Your trusted Daycare."',
    'home.safe': 'Safe & Secure',
    'home.educational': 'Educational',
    'home.nurturing': 'Nurturing',
    'home.discover': 'Discover More',
    'home.contact': 'Get In Touch',
    
    // About Section
    'about.title': 'About',
    'about.us': 'Us',
    'about.overlay': 'Nurturing Young Minds',
    'about.heading': 'Love, Laughter, and Learning – Every Day!',
    'about.intro': 'At Zoila\'s Daycare, we are dedicated to providing a safe, nurturing, and enriching environment for children to grow and thrive. Our journey began with a simple yet profound belief: every child is a unique individual with boundless potential. We create a warm, family-like atmosphere where children feel loved, valued, and encouraged to explore their interests while building strong foundations for their future.',
    'about.holistic': 'Holistic Development',
    'about.holisticDesc': 'We provide opportunities and interactions to foster children\'s physical, social, and emotional growth.',
    'about.age': 'Age-Appropriate Care',
    'about.ageDesc': 'We offer care for children from 3 months to 8 years old, tailored to each developmental stage.',
    'about.nutritious': 'Nutritious Meals',
    'about.nutritiousDesc': 'We include breakfast, lunch, and afternoon snack to keep your little ones energized throughout the day.',
    'about.months': 'Months',
    'about.years': 'Years Old',
    'about.meals': 'Meals Daily',
    'about.contactBtn': 'Get In Touch',
    
    // Activities Section
    'activities.our': 'our',
    'activities.activities': 'activities',
    'activities.intro': 'We offer a variety of engaging activities designed to promote learning, creativity, and fun for children of all ages.',
    'activities.play': 'Play & Have Fun',
    'activities.playDesc': 'Structured playtime that encourages social interaction, creativity, and physical development through fun activities.',
    'activities.games': 'Games',
    'activities.gamesDesc': 'Interactive games that develop problem-solving skills, teamwork, and cognitive abilities while having fun.',
    'activities.read': 'Read & Learn',
    'activities.readDesc': 'Storytelling and reading sessions that foster a love for books and enhance language development.',
    'activities.art': 'Paint & Art',
    'activities.artDesc': 'Creative art activities including painting, drawing, and crafts that express imagination and artistic talents.',
    
    // Teacher Section
    'teacher.our': 'Our',
    'teacher.teacher': 'Teacher',
    'teacher.role': 'Owner & Lead Caregiver',
    'teacher.bio': 'Dedicated to providing exceptional care and creating a nurturing environment where every child can thrive and grow.',
    'teacher.certifications': 'Safety Certifications',
    'teacher.cert1': 'Preventive Health and Safety',
    'teacher.cert1Desc': 'Child Care Providers Certification',
    'teacher.cert2': 'Pediatric First Aid',
    'teacher.cert2Desc': 'CPR AED Certified',
    'teacher.cert3': 'Family Child Care',
    'teacher.cert3Desc': 'Home Orientation Completed',
    'teacher.cert4': 'CA Mandated Training',
    'teacher.cert4Desc': 'Child Abuse Prevention',
    'teacher.connect': 'Connect With Us',
    'teacher.instagram': 'Instagram',
    'teacher.facebook': 'Facebook',
    
    // Reviews Section
    'reviews.what': 'What',
    'reviews.parents': 'Parents Say',
    
    // Gallery Section
    'gallery.our': 'our',
    'gallery.gallery': 'gallery',
    'gallery.intro': 'Take a glimpse into our daily activities and the joyful moments we share with the children in our care.',
    
    // Location Section
    'location.find': 'Find',
    'location.us': 'Us',
    'location.intro': 'We are conveniently located in Castro Valley, California. Visit us or get directions using the map below.',
    'location.address': 'Address',
    'location.directions': 'Get Directions',
    'location.directionsText': 'Click below to get directions from your location',
    'location.googleMaps': 'Open in Google Maps',
    
    // Calendar Section
    'calendar.important': 'Important',
    'calendar.dates': 'Dates',
    'calendar.year': '2026 Calendar',
    'calendar.note': 'Please note our holiday schedule and vacation period',
    'calendar.holiday1': 'Martin Luther King Jr. Day',
    'calendar.holiday2': 'Presidents\' Day',
    'calendar.holiday3': 'Memorial Day',
    'calendar.holiday4': 'Emancipation Day (Juneteenth)',
    'calendar.holiday5': 'Independence Day',
    'calendar.vacation': 'Summer Vacation',
    'calendar.holiday6': 'Labor Day',
    'calendar.thanksgiving': 'Thanksgiving Break',
    'calendar.winter': 'Winter Vacation',
    'calendar.return': 'Return Date',
    'calendar.closed': 'Closed',
    'calendar.returnText': 'We\'ll See You Then!',
    
    // Nutrition Section
    'nutrition.our': 'Our',
    'nutrition.menu': 'Nutrition Menu',
    'nutrition.intro': 'We provide healthy, balanced meals and snacks to keep your children energized throughout the day. All meals are prepared with care and nutrition in mind. All meals are prepared fresh daily using quality ingredients.',
    'nutrition.dailyMenus': 'Daily Menus',
    'nutrition.menu1': 'Complete Menu 1',
    'nutrition.menu2': 'Complete Menu 2',
    'nutrition.menu3': 'Complete Menu 3',
    'nutrition.menu4': 'Complete Menu 4',
    'nutrition.breakfast': 'Breakfast',
    'nutrition.breakfast1': 'Oatmeal porridge with cooked pear',
    'nutrition.breakfast2': 'Cooked apple puree',
    'nutrition.breakfast3': 'Oatmeal with ripe banana',
    'nutrition.breakfast4': 'Smooth pear puree',
    'nutrition.lunch': 'Lunch',
    'nutrition.lunch1': 'Pumpkin puree with lentils',
    'nutrition.lunch2': 'Brown rice with vegetables',
    'nutrition.lunch3': 'Sweet potato puree with vegetables',
    'nutrition.lunch4': 'Rice with broccoli',
    'nutrition.snack': 'Afternoon Snack',
    'nutrition.snack1': 'Mashed papaya',
    'nutrition.snack2': 'Mashed cooked plum',
    'nutrition.snack3': 'Cooked pear',
    'nutrition.snack4': 'Cooked apple',
    'nutrition.tipsTitle': 'Important Tips for Success',
    'nutrition.hydration': 'Hydration',
    'nutrition.hydrationDesc': 'Offer water throughout the day to keep the digestive system moving.',
    'nutrition.fruits': 'Key Fruits',
    'nutrition.fruitsDesc': 'Prioritize pear, papaya, and plum as they are naturally effective for constipation.',
    'nutrition.quality': 'Food Quality',
    'nutrition.qualityDesc': 'Avoid ultra-processed foods.',
    'nutrition.safety': 'Safety',
    'nutrition.safetyDesc': 'Adjust the texture of the food (purees vs. mashes) according to your baby\'s age and development.',
    
    // Contact Section
    'contact.contact': 'contact',
    'contact.us': 'us',
    'contact.intro': 'We\'d love to hear from you! Reach out to us through any of the methods below or send us a message.',
    'contact.hours': 'Opening Hours',
    'contact.weekdays': 'Monday - Friday:',
    'contact.address': 'Address',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email',
    'contact.english': '(English)',
    'contact.spanish': '(Spanish)',
    'contact.help': 'We\'re here to help!',
    'contact.formTitle': 'Get In Touch',
    'contact.formDesc': 'Send us a message and we\'ll get back to you as soon as possible',
    'contact.name': 'Your Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.emailInput': 'Your Email',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.phoneInput': 'Your Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.messagePlaceholder': 'Tell us how we can help you...',
    'contact.send': 'Send Message',
    
    // Footer Section
    'footer.tagline': 'Growing together, always learning: Your trusted Daycare.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.activities': 'Activities',
    'footer.contact': 'Contact',
    'footer.contactInfo': 'Contact Info',
    'footer.follow': 'Follow Us',
    'footer.instagram': 'Instagram',
    'footer.facebook': 'Facebook',
    'footer.whatsapp': 'WhatsApp',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.activities': 'Actividades',
    'nav.teacher': 'Maestra',
    'nav.reviews': 'Reseñas',
    'nav.gallery': 'Galería',
    'nav.location': 'Ubicación',
    'nav.calendar': 'Calendario',
    'nav.nutrition': 'Nutrición',
    'nav.contact': 'Contáctanos',
    
    // Home Section
    'home.welcome': 'Confiado por Familias Desde el Primer Día',
    'home.welcomeTitle': 'Bienvenido a nuestro',
    'home.daycare': 'Guardería en Casa',
    'home.subtitle': '"Creciendo juntos, siempre aprendiendo: Tu guardería de confianza."',
    'home.safe': 'Seguro y Protegido',
    'home.educational': 'Educativo',
    'home.nurturing': 'Cuidado',
    'home.discover': 'Descubre Más',
    'home.contact': 'Contáctanos',
    
    // About Section
    'about.title': 'Acerca de',
    'about.us': 'Nosotros',
    'about.overlay': 'Cuidando Mentes Jóvenes',
    'about.heading': '¡Amor, Risa y Aprendizaje – Todos los Días!',
    'about.intro': 'En la Guardería de Zoila, nos dedicamos a proporcionar un ambiente seguro, enriquecedor y acogedor para que los niños crezcan y prosperen. Nuestro viaje comenzó con una creencia simple pero profunda: cada niño es un individuo único con potencial ilimitado. Creamos una atmósfera cálida y familiar donde los niños se sienten amados, valorados y alentados a explorar sus intereses mientras construyen bases sólidas para su futuro.',
    'about.holistic': 'Desarrollo Integral',
    'about.holisticDesc': 'Proporcionamos oportunidades e interacciones para fomentar el crecimiento físico, social y emocional de los niños.',
    'about.age': 'Cuidado Apropiado para la Edad',
    'about.ageDesc': 'Ofrecemos cuidado para niños desde 3 meses hasta 8 años, adaptado a cada etapa de desarrollo.',
    'about.nutritious': 'Comidas Nutritivas',
    'about.nutritiousDesc': 'Incluimos desayuno, almuerzo y merienda para mantener a tus pequeños con energía durante todo el día.',
    'about.months': 'Meses',
    'about.years': 'Años',
    'about.meals': 'Comidas Diarias',
    'about.contactBtn': 'Contáctanos',
    
    // Activities Section
    'activities.our': 'nuestras',
    'activities.activities': 'actividades',
    'activities.intro': 'Ofrecemos una variedad de actividades atractivas diseñadas para promover el aprendizaje, la creatividad y la diversión para niños de todas las edades.',
    'activities.play': 'Jugar y Divertirse',
    'activities.playDesc': 'Tiempo de juego estructurado que fomenta la interacción social, la creatividad y el desarrollo físico a través de actividades divertidas.',
    'activities.games': 'Juegos',
    'activities.gamesDesc': 'Juegos interactivos que desarrollan habilidades de resolución de problemas, trabajo en equipo y habilidades cognitivas mientras se divierten.',
    'activities.read': 'Leer y Aprender',
    'activities.readDesc': 'Sesiones de cuentos y lectura que fomentan el amor por los libros y mejoran el desarrollo del lenguaje.',
    'activities.art': 'Pintar y Arte',
    'activities.artDesc': 'Actividades artísticas creativas que incluyen pintura, dibujo y manualidades que expresan la imaginación y los talentos artísticos.',
    
    // Teacher Section
    'teacher.our': 'Nuestra',
    'teacher.teacher': 'Maestra',
    'teacher.role': 'Propietaria y Cuidadora Principal',
    'teacher.bio': 'Dedicada a proporcionar cuidado excepcional y crear un ambiente acogedor donde cada niño pueda prosperar y crecer.',
    'teacher.certifications': 'Certificaciones de Seguridad',
    'teacher.cert1': 'Salud y Seguridad Preventiva',
    'teacher.cert1Desc': 'Certificación de Proveedores de Cuidado Infantil',
    'teacher.cert2': 'Primeros Auxilios Pediátricos',
    'teacher.cert2Desc': 'Certificado en RCP y DEA',
    'teacher.cert3': 'Cuidado Infantil Familiar',
    'teacher.cert3Desc': 'Orientación del Hogar Completada',
    'teacher.cert4': 'Capacitación Obligatoria de CA',
    'teacher.cert4Desc': 'Prevención del Abuso Infantil',
    'teacher.connect': 'Conéctate Con Nosotros',
    'teacher.instagram': 'Instagram',
    'teacher.facebook': 'Facebook',
    
    // Reviews Section
    'reviews.what': 'Lo Que',
    'reviews.parents': 'Dicen los Padres',
    
    // Gallery Section
    'gallery.our': 'nuestra',
    'gallery.gallery': 'galería',
    'gallery.intro': 'Echa un vistazo a nuestras actividades diarias y los momentos alegres que compartimos con los niños bajo nuestro cuidado.',
    
    // Location Section
    'location.find': 'Encuéntranos',
    'location.us': '',
    'location.intro': 'Estamos convenientemente ubicados en Castro Valley, California. Visítanos u obtén direcciones usando el mapa a continuación.',
    'location.address': 'Dirección',
    'location.directions': 'Obtener Direcciones',
    'location.directionsText': 'Haz clic a continuación para obtener direcciones desde tu ubicación',
    'location.googleMaps': 'Abrir en Google Maps',
    
    // Calendar Section
    'calendar.important': 'Fechas',
    'calendar.dates': 'Importantes',
    'calendar.year': 'Calendario 2026',
    'calendar.note': 'Por favor, ten en cuenta nuestro horario de días festivos y período de vacaciones',
    'calendar.holiday1': 'Día de Martin Luther King Jr.',
    'calendar.holiday2': 'Día de los Presidentes',
    'calendar.holiday3': 'Día de los Caídos',
    'calendar.holiday4': 'Día de la Emancipación (Juneteenth)',
    'calendar.holiday5': 'Día de la Independencia',
    'calendar.vacation': 'Vacaciones de Verano',
    'calendar.holiday6': 'Día del Trabajo',
    'calendar.thanksgiving': 'Descanso de Acción de Gracias',
    'calendar.winter': 'Vacaciones de Invierno',
    'calendar.return': 'Fecha de Regreso',
    'calendar.closed': 'Cerrado',
    'calendar.returnText': '¡Nos Vemos Entonces!',
    
    // Nutrition Section
    'nutrition.our': 'Nuestro',
    'nutrition.menu': 'Menú de Nutrición',
    'nutrition.intro': 'Proporcionamos comidas y meriendas saludables y balanceadas para mantener a tus hijos con energía durante todo el día. Todas las comidas se preparan con cuidado y pensando en la nutrición. Todas las comidas se preparan frescas diariamente usando ingredientes de calidad.',
    'nutrition.dailyMenus': 'Menús Diarios',
    'nutrition.menu1': 'Menú Completo 1',
    'nutrition.menu2': 'Menú Completo 2',
    'nutrition.menu3': 'Menú Completo 3',
    'nutrition.menu4': 'Menú Completo 4',
    'nutrition.breakfast': 'Desayuno',
    'nutrition.breakfast1': 'Gachas de avena con pera cocida',
    'nutrition.breakfast2': 'Puré de manzana cocida',
    'nutrition.breakfast3': 'Avena con plátano maduro',
    'nutrition.breakfast4': 'Puré de pera suave',
    'nutrition.lunch': 'Almuerzo',
    'nutrition.lunch1': 'Puré de calabaza con lentejas',
    'nutrition.lunch2': 'Arroz integral con verduras',
    'nutrition.lunch3': 'Puré de batata con verduras',
    'nutrition.lunch4': 'Arroz con brócoli',
    'nutrition.snack': 'Merienda de la Tarde',
    'nutrition.snack1': 'Papaya machacada',
    'nutrition.snack2': 'Ciruela cocida machacada',
    'nutrition.snack3': 'Pera cocida',
    'nutrition.snack4': 'Manzana cocida',
    'nutrition.tipsTitle': 'Consejos Importantes para el Éxito',
    'nutrition.hydration': 'Hidratación',
    'nutrition.hydrationDesc': 'Ofrece agua durante todo el día para mantener el sistema digestivo en movimiento.',
    'nutrition.fruits': 'Frutas Clave',
    'nutrition.fruitsDesc': 'Prioriza pera, papaya y ciruela ya que son naturalmente efectivas para el estreñimiento.',
    'nutrition.quality': 'Calidad de los Alimentos',
    'nutrition.qualityDesc': 'Evita alimentos ultraprocesados.',
    'nutrition.safety': 'Seguridad',
    'nutrition.safetyDesc': 'Ajusta la textura de los alimentos (purés vs. papillas) según la edad y el desarrollo de tu bebé.',
    
    // Contact Section
    'contact.contact': 'contáctanos',
    'contact.us': '',
    'contact.intro': '¡Nos encantaría saber de ti! Ponte en contacto con nosotros a través de cualquiera de los métodos a continuación o envíanos un mensaje.',
    'contact.hours': 'Horario de Atención',
    'contact.weekdays': 'Lunes - Viernes:',
    'contact.address': 'Dirección',
    'contact.phone': 'Número de Teléfono',
    'contact.email': 'Correo Electrónico',
    'contact.english': '(Inglés)',
    'contact.spanish': '(Español)',
    'contact.help': '¡Estamos aquí para ayudar!',
    'contact.formTitle': 'Ponte en Contacto',
    'contact.formDesc': 'Envíanos un mensaje y te responderemos lo antes posible',
    'contact.name': 'Tu Nombre',
    'contact.namePlaceholder': 'Ingresa tu nombre',
    'contact.emailInput': 'Tu Correo Electrónico',
    'contact.emailPlaceholder': 'Ingresa tu correo electrónico',
    'contact.phoneInput': 'Tu Teléfono',
    'contact.subject': 'Asunto',
    'contact.message': 'Tu Mensaje',
    'contact.messagePlaceholder': 'Cuéntanos cómo podemos ayudarte...',
    'contact.send': 'Enviar Mensaje',
    
    // Footer Section
    'footer.tagline': 'Creciendo juntos, siempre aprendiendo: Tu guardería de confianza.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.home': 'Inicio',
    'footer.about': 'Acerca de Nosotros',
    'footer.activities': 'Actividades',
    'footer.contact': 'Contacto',
    'footer.contactInfo': 'Información de Contacto',
    'footer.follow': 'Síguenos',
    'footer.instagram': 'Instagram',
    'footer.facebook': 'Facebook',
    'footer.whatsapp': 'WhatsApp',
  }
};

// Get current language from localStorage or default to English
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to translate the page
function translatePage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Get all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      // Always update textContent - if it's a span, it will only update the span text
      // If it's another element, it will update the entire text content
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholder attributes
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  
  // Update language toggle button text
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
    const langText = langToggle.querySelector('.lang-text');
    if (langText) {
      langText.textContent = lang === 'en' ? 'ES' : 'EN';
    }
  }
}

// Initialize language on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLanguage);
  });
} else {
  translatePage(currentLanguage);
}

// Language toggle button event listener
const languageToggle = document.getElementById('language-toggle');
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    translatePage(newLang);
  });
}

// function emailsend() {
//   const userName = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const number = document.getElementById("number").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;

//   var messageBody =
//     "Name: " +
//     userName +
//     "<br/> Email: " +
//     email +
//     "<br/> Phone: " +
//     number +
//     "<br/> Subject: " +
//     subject +
//     "<br/> Message: " +
//     message;
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "EnmanuelleML@outlook.com",
//     Password: "9B0E5E8C871D90797F0C7FDB6C3A058A0CF8",
//     To: "zlirianobe@gmail.com",
//     From: "EnmanuelleML@outlook.com",
//     Subject: "This is the subject",
//     Body: messageBody,
//   }).then((message) => {
//     if (message === "OK") {
//       swal(
//         "Successful Message",
//         "We will receive your message immediately",
//         "success"
//       );
//     } else {
//       swal("Try Again :(", "Message Didn't go through", "error");
//     }
//   });
// }
