const workshopData = {
  upcoming: [
    {
      posterSmall: 'STUDIO CLASS',
      posterTitle: 'TRADITIONAL\nCAMBODIAN POTTERY',
      posterDate: 'DM TO BOOK',
      posterPlace: 'VERANDA POTTERY',
      posterYear: '2026',
      imageFocus: '0% 0%',
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
      posterSmall: 'STUDIO CLASS',
      posterTitle: 'WATER-SAFE\nCERAMIC',
      posterDate: 'DM TO BOOK',
      posterPlace: 'VERANDA POTTERY',
      posterYear: '2026',
      imageFocus: '100% 100%',
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
      posterSmall: 'WITH FARM TO TABLE',
      posterTitle: 'POTTERY\nWEEKEND',
      posterDate: '19–20 SEP',
      posterPlace: 'FARM TO TABLE',
      posterYear: '2026',
      imageFocus: '100% 0%',
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
      posterSmall: 'WITH SIGN CAFE',
      posterTitle: 'POTTERY\nWORKSHOP',
      posterDate: '08 AUG',
      posterPlace: 'SIGN CAFE',
      posterYear: '2026',
      imageFocus: '0% 100%',
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
      posterSmall: 'WITH PTEAH CHAS',
      posterTitle: 'KHMER\nPOTTERY',
      posterDate: '04 JUL',
      posterPlace: 'PTEAH CHAS',
      posterYear: '2026',
      imageFocus: '100% 100%',
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
      posterSmall: 'AT FACTORY PHNOM PENH',
      posterTitle: 'KHMER TRADITIONAL\nPOTTERY',
      posterDate: '23 MAY',
      posterPlace: 'FACTORY PHNOM PENH',
      posterYear: '2026',
      imageFocus: '0% 0%',
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
  posterSmall: document.getElementById('posterSmall'),
  posterTitle: document.getElementById('posterTitle'),
  posterDate: document.getElementById('posterDate'),
  posterPlace: document.getElementById('posterPlace'),
  posterYear: document.getElementById('posterYear'),
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
  els.posterSmall.textContent = item.posterSmall;
  els.posterTitle.innerHTML = item.posterTitle.replace('\n', '<br>');
  els.posterDate.textContent = item.posterDate;
  els.posterPlace.textContent = item.posterPlace;
  els.posterYear.textContent = item.posterYear;
  document.getElementById('poster').style.backgroundPosition = item.imageFocus || '50% 50%';
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
