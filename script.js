// Customized bootstrap nav-btn to transfrom it into X when clicked

const menuBtn = document.querySelector('.navbar-toggler');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded');
  if (expanded === 'true') {
    openBtn.classList.add('disabled');
    closeBtn.classList.add('btn-active');
  } else {
    openBtn.classList.remove('disabled');
    closeBtn.classList.remove('btn-active');
  }
});

// Skpeakers section
const speakersInfos = [
  {
    name: 'Abdel-Khafid SALAOU',
    image: 'assets/speakers/khadaf.jpeg',
    job: 'Software Engineer, CEO of DEOLAcorp',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production',

  },
  {
    name: 'Faiquot Bounamboulinas SALAOU',
    image: 'assets/speakers/shade.jpg',
    job: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production',

  },
  {
    name: 'Henary KHURAIJAM',
    image: 'assets/speakers/henary.jpg',
    job: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production',

  },
  {
    name: 'Ayaba DOUBOGAN',
    image: 'assets/speakers/female2.jpg',
    job: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production',

  },
  {
    name: 'Gaspard Francko DJOSSOU',
    image: 'assets/speakers/francko.jpg',
    job: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production',

  },
  {
    name: 'Lola SOUBALOU',
    image: 'assets/speakers/female3.jpg',
    job: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production',

  },
];

const speakersSection = document.querySelector('.speakers');
const speakersDiv = document.createElement('div');
speakersDiv.classList.add('speakers-div');
for (let i = 0; i < speakersInfos.length; i += 1) {
  speakersDiv.innerHTML += `
    <div class="card mb-3 border-0" spk-card">
        <div class="row g-0 mob-spk-div">
            <div class="col-md-4 border-0 spk-img-cont">
            <img src="${speakersInfos[i].image}" class="img-fluid rounded-start border-0 spk-img" alt="speakers images">
            </div>
            <div class="col-md-8 border-0">
                <div class="card-body bg-light border-0">
                    <h4 class="card-title">${speakersInfos[i].name}</h4>
                    <h5 class=""spk-job>${speakersInfos[i].job}</h5>
                    <hr class="dark-hr">
                    <p class="card-text">${speakersInfos[i].bio}</p>
                </div>
            </div>
        </div>
    </div>
`;
}
speakersSection.appendChild(speakersDiv);
