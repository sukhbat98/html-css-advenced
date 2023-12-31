import React from 'react';
import { createRoot } from 'react-dom/client';

import 'lazysizes'

import '../styles/styles.css';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';

import MyReactComponent from './modules/MyReactComponent';


const root = createRoot(document.getElementById("my-react-example"))
root.render(<MyReactComponent />);

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);
new MobileMenu();
new ClientArea();

let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default();
        setTimeout(() => modal.openModal(), 20)
      }).catch(() => console.log("Файлыг дуудахад алдаа гарлаа"))
    } else {
      modal.openModal();
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
