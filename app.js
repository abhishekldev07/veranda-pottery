const workshopData = {
  upcoming: [
    {
      posterSmall: 'POTTERY WORKSHOP',
      posterTitle: 'MAKE YOUR OWN\nPOTTERY',
      posterDate: 'NEXT DATE TBA',
      posterPlace: 'PHNOM PENH',
      posterYear: '2026',
      status: 'Next date to be announced',
      title: 'Make Your Own Pottery',
      description: 'Shape two pottery pieces by hand and experience the slow, tactile process of working with clay. Finished pieces are fired using a traditional Cambodian method and collected later.',
      duration: '90 min',
      price: '$20',
      pickup: 'After 2+ weeks',
      location: 'Announced per workshop',
      details: 'A hands-on session for beginners. Make two pottery pieces, then leave them with Veranda for firing. The finished pieces are collected after the firing process.'
    },
    {
      posterSmall: 'POTTERY & PLANT',
      posterTitle: 'PAINT A POT\n& PLANT',
      posterDate: 'NEXT DATE TBA',
      posterPlace: 'PHNOM PENH',
      posterYear: '2026',
      status: 'Next date to be announced',
      title: 'Paint a Pot & Plant',
      description: 'Decorate a traditional pottery piece, add a small plant and take your finished creation home the same day. A lighter workshop format for friends, families and casual makers.',
      duration: '90 min',
      price: '$30',
      pickup: 'Same day',
      location: 'Announced per workshop',
      details: 'Paint a traditional pottery piece using oil pastels, then finish the session by planting a small plant in your decorated pot. The piece goes home with you the same day.'
    }
  ],
  previous: [
    {
      posterSmall: 'WITH FARM TO TABLE',
      posterTitle: 'POTTERY\nWEEKEND',
      posterDate: '19–20 SEP',
      posterPlace: 'FARM TO TABLE',
      posterYear: '2026',
      status: 'Previous workshop',
      title: 'Pottery Workshop at Farm to Table',
      description: 'A weekend collaboration in BKK where guests could choose between making their own pottery or painting a pot and adding a small plant.',
      duration: '2–5 PM',
      price: '$20 / $30',
      pickup: 'Varied by activity',
      location: '#16 St 360, BKK',
      details: 'Hosted together with Farm to Table. Guests chose between a two-piece pottery-making session with later firing, or a pottery-painting and planting activity to take home the same day.'
    },
    {
      posterSmall: 'SUMMER CAMP GUEST',
      posterTitle: 'CLAY FOR\nYOUNG MAKERS',
      posterDate: '28 JUN',
      posterPlace: 'GLAD SUMMER CAMP',
      posterYear: '2026',
      status: 'Previous workshop',
      title: 'Traditional Pottery for Kids',
      description: 'Veranda joined a Phnom Penh summer camp as a special guest, giving children a hands-on introduction to traditional Khmer pottery shaping techniques.',
      duration: 'Camp session',
      price: 'Hosted event',
      pickup: 'Group activity',
      location: 'Phnom Penh',
      details: 'A hosted workshop built around culture, creativity and hands-on clay work for children. This is the type of session Veranda can bring to schools, camps and community spaces.'
    },
    {
      posterSmall: 'SCHOOL EXPERIENCE',
      posterTitle: 'LITTLE HANDS\nIN CLAY',
      posterDate: '11 FEB',
      posterPlace: 'VERANDA POTTERY',
      posterYear: '2026',
      status: 'Previous workshop',
      title: 'New Gateway School Visit',
      description: 'A kindergarten group spent a morning learning how clay is prepared, shaped and patterned through a tactile pottery experience at Veranda.',
      duration: 'Morning session',
      price: 'Group booking',
      pickup: 'School activity',
      location: 'Veranda Pottery',
      details: 'Young students explored the sensory side of pottery by preparing clay, shaping forms and making patterns. A strong example of Veranda\'s school and group workshop format.'
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
