import { elements } from "./base";
import { limitRecipeTitle } from "./searchView";
import truncate from 'lodash/truncate';

export const toggleLikeBtn = isLiked => {
  const iconString = isLiked ? "icon-heart" : "icon-heart-outlined";
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `img/icons.svg#${iconString}`);
};

// this function its check wheather the user did like, if not
// the right like button will be disapear
export const toggleLikeMenu = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
};

export const renderLikeMenu = like => {
  const markup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${truncate(like.title)}</h4>
                <p class="likes__author">${like.author}n</p>
            </div>
        </a>
    </li>
  `;
  elements.likesList.insertAdjacentHTML("beforeend", markup);
};

// this function is for delete Like
export const deleteLike = id => {
  const el = document.querySelector(`.likes__link[href*="${id}"]`)
    .parentElement;
  if (el) el.parentElement.removeChild(el);
};