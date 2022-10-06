AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development/Web Designer Intern",
    cardImage: "assets/images/experience-page/freedomlend.jpg",
    place: "FreedomLend",
    time: " Melbourne (Sept, 2021 - Dec, 2021)",
    desp: "<li>Administering automation tool design and programming (C#)</li><li>Integrating solution for Web application and Customer Relationship Management (CRM)/MySQL system. </li><li>Ensure data accuracy and quality in backend system and sync to database.</li><li>Prepare documents for scheduled updates and maintenance.</li><li>Collaborate with business team to fix technical issues for our customers.</li><li>Analyze and maintain our website features as necessary.</li>",
  },  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Bilibili API Collect on GitHub",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Contribute to function of faking user's location and integrating. Responsible for maintenance the VPN server.",
  },
  {
    title: "Wpress-Extractor on GitHub",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Integrated self-edited plugin into open source Wpress-Extractor.",
  },
  {
    title: "Stack Overflow Contributor",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Questioning and answering tech questions about C# and Java, upvoting useful answers and fixing inappropriate ones",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
