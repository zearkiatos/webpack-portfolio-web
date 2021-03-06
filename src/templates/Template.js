import config from "@config/index.js";
import getData from "@utils/getData.js";
import getPersonalData from "@utils/getPersonalData.js";
import github from "@images/github.png";
import twitter from "@images/twitter.png";
import instagram from "@images/instagram.png";
import me from '@images/me.jpg';
const Template = async () => {
  const data = config.CUSTOM ? getPersonalData() : await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${config.CUSTOM ? me: data.picture.large}" alt="${data.name.first}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hi, My name is</p>
          <p class="card_value">${data.name.first} ${data.name.last}</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>${data.email}</li>
            <li>${data.location.country}</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="${data.socialMedia ? data.socialMedia.twitter : 'https://twitter.com/gndx'}">
            <img src="${twitter}" />
          </a>
          <a href="${data.socialMedia ? data.socialMedia.github : 'https://github.com/gndx'}">
            <img src="${github}" />
          </a>
          <a href="${data.socialMedia ? data.socialMedia.instagram : 'https://instagram.com/gndx'}">
            <img src="${instagram}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;
