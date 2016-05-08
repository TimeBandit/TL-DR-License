// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import Clipboard from 'clipboard';

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function expand_card(el) {
  console.log('expanded card');
  el.style.height = '400px';
  el.style['z-index'] = '2';
  el.style.margin = '-5px 0px';
  el.style['box-shadow'] = '0px 0px 10px rgba(0,0,0, 0.4)';
  el.style['border-top'] = 'none';
  el.style.cursor = 'default';
}

function collapse_card(el) {
  let height = 42;
  let breakpoint = 680;
  let margin = 0;

  if (breakpoint > window.innerWidth) {
    height = 170;
    margin = 10;
  }

  el.style.margin = `${margin}px 0px`;
  el.style.height = `${height}px`;
  el.style['z-index'] = '0';
  el.style['box-shadow'] = '0 6px 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)';
  el.style['border-top'] = '1px solid #EBEBEB';
  el.style.cursor = 'pointer';
}


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('( ͡° ͜ʖ ͡°) READY ( ͡° ͜ʖ ͡°)');

  let clipboard = new Clipboard('.copy-content', {
    text: function(trigger) {
      console.log('lalala');
      return findAncestor(trigger, 'license-item').querySelector('.license-detailed').innerHTML;
    }
  });

  let toast_successfull = document.querySelector('.toast-successfull ');
  let toast_fail = document.querySelector('.toast-fail');

  clipboard.on('success', function(e) {
    console.log('success');
    toast_successfull.style.right = '15px';
    setTimeout(() => {
      toast_successfull.style.right = '-220px';
    }, 1500);

    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    console.log('fail');
    toast_fail.style.right = '15px';
    setTimeout(() => {
      toast_fail.style.right = '-220px';
    }, 1500);
  });

  let cards = document.querySelectorAll('.license-item');
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];


    card.addEventListener('click', (event) => {
      let card_content_collapsed = card.querySelector('.license-item-collapsed');
      let card_content_expanded = card.querySelector('.license-item-expanded');
      let close_icon = card_content_expanded.querySelector('.close-icon');

      let cards = document.querySelectorAll('.license-item');

      for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        
      }

      if (event.target.classList.contains('copy')) {
        console.log('copy');
        return;
      } else {

        card_content_collapsed.style.display = 'none';
        card_content_expanded.style.display = 'block';

        close_icon.addEventListener('click', (event) => {
          event.stopPropagation();
          collapse_card(card);

          card_content_collapsed.style.display = 'block';
          card_content_expanded.style.display = 'none';
        });

        expand_card(card);
      }
    });
  }


});
