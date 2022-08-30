'use strict';

const idServiceContainer=document.getElementById('service-items_container');

class baseClass {
  id =''
  constructor(id){
    this.id=id;
  }
  setHtmlContent(content){
    this.id.innerHTML = content;
  }

};


// nav-bar
const navBarData = {
  logoTitle: 'The Modernist',
  logoText: 'Free PSD Website Template',
  menuBtnText: 'MENU  ≣',
  nav: [
    {
      navBtn_text: 'home',
      navBtn_link: '#',
    },
    {
      navBtn_text: 'style demo',
      navBtn_link: '#',
    },
    {
      navBtn_text: 'full width',
      navBtn_link: '#',
    },
    {
      navBtn_text: 'dropdown',
      navBtn_link: '#',
    },
    {
      navBtn_text: 'portfolio',
      navBtn_link: '#',
    },
    {
      navBtn_text: 'gallery',
      navBtn_link: '#',
    },
  ],
};

const navSection = {
  id: document.getElementById('nav-bar_container'),

  setHtmlContent(content) {
    this.id.innerHTML = content;
  },

  renderNavBtnItem(obj) {
    return `
      <li><a href="${obj.navBtn_link}" class="primary-btn">${obj.navBtn_text}</a></li>
      `;
  },

  renderNavBtnItemsList(list) {
    return list
      .map(obj => {
        return this.renderNavBtnItem(obj);
      })
      .join('');
  },

  renderNavItems(obj, ulContent) {
    return `
  <div class="logo">
    <h2>${obj.logoTitle}</h2>
    <span>${obj.logoText}</span>
  </div>
  <nav class="nav">
    <button class="dropdown-btn primary-btn">${obj.menuBtnText}</button>
    <ul class="nav_btns" id="nav_btns">
      ${ulContent}
    </ul>
  </nav>
    `;
  },

  render(data) {
    let ulContent = this.renderNavBtnItemsList(data.nav);
    let content = this.renderNavItems(data, ulContent);
    this.setHtmlContent(content);
  },
};

navSection.render(navBarData);

// active nav button
const navBtn = document.querySelectorAll('ul.nav_btns  a');
navBtn[0].classList.add('active-btn');
for (let element of navBtn) {
  element.addEventListener('click', event => {
    for (let el of navBtn) {
      el.classList.remove('active-btn');
    }
    event.target.classList.add('active-btn');
  });
}

// Service Section

const seviceData = [
  {
    title: 'Architecture',
    img: 'https://www.open.edu.au/-/media/images/study-online/courses/architecture-1.jpg',
    p: 'Vestassapede et donec ut esr libo ros sus et eget quisq ueta habitur augue',
    img_text: '120 x 120px',
  },
  {
    title: 'Commissioning',
    img: 'https://www.build-review.com/wp-content/webp-express/webp-images/uploads/2020/01/model-architecture.jpg.webp',
    p: 'Vestassapede et donec ut esr libo ros sus et eget quisq ueta habitur augue',
    img_text: '120 x 120px',
  },
  {
    title: 'Interior Design',
    img: 'https://d1tm14lrsghf7q.cloudfront.net/public/media/17348/64522_57709_1_zha_opus_laurianghinitoiu.jpg',
    p: 'Vestassapede et donec ut esr libo ros sus et eget quisq ueta habitur augue',
    img_text: '120 x 120px',
  },
  {
    title: 'Consulting & Planning',
    img: 'https://www.build-review.com/wp-content/webp-express/webp-images/uploads/2020/01/colour-wheel.jpg.webp',
    p: 'Vestassapede et donec ut esr libo ros sus et eget quisq ueta habitur augue',
    img_text: '120 x 120px',
  },
];

class serviceSection extends baseClass {
  // id: document.getElementById('service-items_container'),

  //   setserviceList: function (data) {
  //     this.serviceList = data;
  //   },
  // setHtmlContent: function (content) {
  //   this.id.innerHTML = content;
  // },
  data = []

  constructor(id, data){
    super(id);
    this.data=data;
  }

  renderServiceItem(obj) {
    return `
            <div class="service-item">
              <div class="service-item_rectangle" style="background-image: url(${obj.img});">
                <!-- <span>${obj.img_text}</span> -->
              </div>
              <h3 class="service-item_title">${obj.title}</h3>
              <span class="service-item_text"
                >${obj.p}</span>
            </div>
      `;
  }

  renderServiceItemsList(list) {
    return list
      .map(obj => {
        return this.renderServiceItem(obj);
      })
      .join('');
  }

  render() {
    let content = this.renderServiceItemsList(this.data);
    this.setHtmlContent(content);
  }
};

let serviceBlock = new serviceSection(idServiceContainer, seviceData);
serviceBlock.render();

// Work Section

const workData = [
  {
    title: 'Heydar Aliyev Centre',
    img: './imgs/heydar-aliyev-center.jpg',
    img_text: '290 x 190px',
  },
  {
    title: 'MAXXI',
    img: './imgs/museum-maxxi-italy.jpg',
    img_text: '290 x 190px',
  },
  {
    title: 'london aquatics centre',
    img: './imgs/london-aquatics-centre.jpg',
    img_text: '290 x 190px',
  },
  {
    title: 'Port Authority Building',
    img: './imgs/fabrice-fouillet-port-house.jpg',
    img_text: '290 x 190px',
  },
  {
    title: 'Guangzhou Opera House',
    img: './imgs/guangzhou-opera-house-china.jpg',
    img_text: '290 x 190px',
  },
  {
    title: 'Sheikh Zayed Bridge',
    img: './imgs/Sheikh-Zayed-Bridge.jpg',
    img_text: '290 x 190px',
  },
];

let workSection = {
  id: document.getElementById('work-item_container'),
  workList: [],

  setWorkList: function (data) {
    this.workList = data;
  },

  setHtmlContent: function (content) {
    this.id.innerHTML = content;
  },

  renderWorkItem: function (obj) {
    return `
    <div class="work-item">
      <div class="work-item_img" style="background-image: url(${obj.img});">
        <!-- <span>${obj.img_text}</span> -->
      </div>
      <div class="work-item_slider">
        <span>${obj.title}</span>
      </div>
    </div>
      `;
  },

  renderWorkItemsList: function (list) {
    return list
      .map(obj => {
        return this.renderWorkItem(obj);
      })
      .join('');
  },

  render: function (data) {
    this.setWorkList(data);
    let content = this.renderWorkItemsList(this.workList);
    this.setHtmlContent(content);
  },
};

workSection.render(workData);

// Footer

const tweetsData = [
  {
    tweet_name: '@namehere',
    tweet_text:
      'Commodi velit cumque repellendus quidem quasi quo beatae, sint culpa iste assumenda amet excepturi  molestias et nesciunt harum pariatur? Nesciunt, doloribus quos.',
  },
  {
    tweet_name: '@namehere',
    tweet_text:
      'Commodi velit cumque repellendus quidem quasi quo beatae, sint culpa iste assumenda amet excepturi  molestias et nesciunt harum pariatur? Nesciunt, doloribus quos.',
  },
];

const tweetBlock = {
  id: document.getElementById('text-block_tweets'),

  setHtmlContent(content) {
    this.id.innerHTML = content;
  },

  renderTweetItem(obj) {
    return `
        <p>
            <span>${obj.tweet_name}</span> ${obj.tweet_text}
        </p>        
        `;
  },

  renderTweetItemsList(list) {
    return list
      .map(obj => {
        return this.renderTweetItem(obj);
      })
      .join('');
  },

  render(data) {
    let content = this.renderTweetItemsList(data);
    this.setHtmlContent(content);
  },
};
tweetBlock.render(tweetsData);
