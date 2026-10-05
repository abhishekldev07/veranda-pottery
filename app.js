const workshopData = {
  upcoming: [
    {
      image: 'assets/studio-shelf.webp',
      imageAlt: 'Pottery and handmade pieces displayed inside Veranda Pottery',
      imageType: 'photo',
      imageCaption: 'Studio class · Veranda Pottery',
      status: 'Available at Veranda',
      title: 'Traditional Cambodian Pottery',
      description: 'A one-hour hands-on class focused on traditional Cambodian pottery. Shape your own piece from clay and collect it after the firing process is complete.',
      duration: '1 hour',
      price: '$10',
      pickup: 'About 1 month',
      location: 'Veranda Pottery',
      details: 'Veranda currently offers a one-hour Traditional Cambodian Pottery class for $10. Finished pottery is prepared through the firing process and is usually ready for collection in about one month.'
    },
    {
      image: 'assets/hero-farm-to-table.webp',
      imageAlt: 'Guests taking part in a hands-on Veranda pottery workshop',
      imageType: 'photo',
      imageCaption: 'Hands-on pottery · Phnom Penh',
      status: 'Available at Veranda',
      title: 'Water-safe Ceramic',
      description: 'Create a ceramic piece that goes through a double-firing process so it can safely hold water. The class runs for one hour at Veranda.',
      duration: '1 hour',
      price: '$15',
      pickup: 'About 1 month',
      location: 'Veranda Pottery',
      details: 'Veranda currently offers a one-hour Water-safe Ceramic class for $15. The ceramic piece is double fired and is usually ready for collection in about one month.'
    }
  ],
  previous: [
    {
      image: 'assets/farm-to-table-poster.webp',
      imageAlt: 'Farm to Table and Veranda Pottery workshop poster for September 19 to 20',
      imageType: 'poster',
      imageCaption: '',
      status: 'Previous workshop',
      title: 'Pottery Workshop at Farm to Table',
      description: 'A weekend collaboration in BKK with two activities: make two pottery pieces or paint traditional pottery and add a small plant.',
      duration: '2–5 PM',
      price: '$20 / $30',
      pickup: '2+ weeks / same day',
      location: '#16 St 360, BKK',
      details: 'The 90-minute activities included Make Your Own Pottery for $20, with two pieces collected after firing, and Painting on Pottery & Plant a Small Plant for $30, taken home the same day. Snacks and drinks were included.'
    },
    {
      image: 'assets/sign-cafe-poster.webp',
      imageAlt: 'Veranda Pottery extra session poster at Sign Cafe on August 8',
      imageType: 'poster',
      imageCaption: '',
      status: 'Previous workshop',
      title: 'Pottery Workshop at Sign Cafe',
      description: 'A one-hour pottery workshop hosted at Sign Cafe on Bassac Lane as part of the Phnom Penh Houseplant Festival community program.',
      duration: '4–5 PM',
      price: '$10',
      pickup: 'Workshop session',
      location: 'Sign Cafe, Bassac Lane',
      details: 'This extra session took place on August 8 at Sign Cafe on Bassac Lane. Tickets were $10 per person and places were limited.'
    },
    {
      image: 'assets/pteah-chas-poster.webp',
      imageAlt: 'Khmer Traditional Pottery workshop poster by Veranda Pottery at Pteah Chas',
      imageType: 'poster',
      imageCaption: '',
      status: 'Previous workshop',
      title: 'Traditional Pottery at Pteah Chas',
      description: 'A beginner-friendly session introducing traditional Khmer pottery and essential hand-shaping techniques at Pteah Chas.',
      duration: '2–4 PM',
      price: '$10',
      pickup: 'Workshop session',
      location: '#91, St 110, Phnom Penh',
      details: 'Held on July 4 at Pteah Chas, this workshop invited beginners to create their own pottery piece while learning traditional Khmer shaping techniques. Tickets were $10 per person.'
    },
    {
      image: 'assets/factory-poster.webp',
      imageAlt: 'Khmer Traditional Pottery workshop poster at Factory Phnom Penh',
      imageType: 'poster',
      imageCaption: '',
      status: 'Previous workshop',
      title: 'Khmer Traditional Pottery at Factory',
      description: 'A short hands-on cultural workshop focused on traditional Cambodian pottery, heritage and shaping a piece from real clay.',
      duration: '10–11 AM',
      price: '$10',
      pickup: 'Workshop session',
      location: 'Factory Phnom Penh',
      details: 'Held on May 23 at Factory Phnom Penh, this one-hour workshop introduced participants to Khmer traditional pottery and the cultural heritage behind the craft. Tickets were $10 per person.'
    }
  ]
};

let activeTab = 'upcoming';
let activeIndex = 0;

const els = {
  poster: document.getElementById('poster'),
  image: document.getElementById('workshopImage'),
  imageCaption: document.getElementById('workshopImageCaption'),
  status: document.getElementById('workshopStatus'),
  title: document.getElementById('workshopTitle'),
  description: document.getElementById('workshopDescription'),
  duration: document.getElementById('workshopDuration'),
  price: document.getElementById('workshopPrice'),
  pickup: document.getElementById('workshopPickup'),
  location: document.getElementById('workshopLocation'),
  slideIndex: document.getElementById('slideIndex'),
  slideTotal: document.getElementById('slideTotal'),
  dots: document.getElementById('sliderDots')
};

function renderWorkshop() {
  const list = workshopData[activeTab];
  const item = list[activeIndex];

  els.image.src = item.image;
  els.image.alt = item.imageAlt;
  els.poster.classList.toggle('poster-art', item.imageType === 'poster');
  els.poster.classList.toggle('photo-art', item.imageType !== 'poster');
  els.imageCaption.textContent = item.imageCaption || '';
  els.imageCaption.hidden = !item.imageCaption;

  els.status.textContent = item.status;
  els.title.textContent = item.title;
  els.description.textContent = item.description;
  els.duration.textContent = item.duration;
  els.price.textContent = item.price;
  els.pickup.textContent = item.pickup;
  els.location.textContent = item.location;
  els.slideIndex.textContent = String(activeIndex + 1).padStart(2, '0');
  els.slideTotal.textContent = String(list.length).padStart(2, '0');
  renderDots();
}

function renderDots() {
  els.dots.innerHTML = '';
  workshopData[activeTab].forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === activeIndex ? ' active' : '');
    dot.setAttribute('aria-label', `Go to workshop ${i + 1}`);
    dot.addEventListener('click', () => { activeIndex = i; renderWorkshop(); });
    els.dots.appendChild(dot);
  });
}

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    activeTab = btn.dataset.tab;
    activeIndex = 0;
    renderWorkshop();
  });
});

document.querySelector('.slider-arrow.next').addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % workshopData[activeTab].length;
  renderWorkshop();
});

document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + workshopData[activeTab].length) % workshopData[activeTab].length;
  renderWorkshop();
});

const modal = document.getElementById('detailsModal');
document.getElementById('detailsBtn').addEventListener('click', () => {
  const item = workshopData[activeTab][activeIndex];
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalText').textContent = item.details;
  document.getElementById('modalFacts').innerHTML = `
    <div><span>Duration</span><strong>${item.duration}</strong></div>
    <div><span>Price</span><strong>${item.price}</strong></div>
    <div><span>Collection</span><strong>${item.pickup}</strong></div>
    <div><span>Location</span><strong>${item.location}</strong></div>`;
  const slotCta = document.getElementById('modalSlotCta');
  slotCta.hidden = activeTab === 'previous';
  modal.showModal();
});
document.getElementById('modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

renderWorkshop();
