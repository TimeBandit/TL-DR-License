// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';


function expand_card(el) {
  console.log('expanded card');
  el.style.height = '300px';
  el.style['z-index'] = '2';
  el.style.margin = '-5px 0px';
  el.style['box-shadow'] = '0px 0px 10px rgba(0,0,0, 0.4)';
  el.style['border-top'] = 'none';
}

function collapse_card(el) {
  console.log('collapsed card');
  el.style.height = '48px';
  el.style['z-index'] = '0';
  el.style['box-shadow'] = '0 6px 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)';
  el.style['border-top'] = '1px solid #EBEBEB';
}


window.addEventListener('load', (event) => {
  console.log('( ͡° ͜ʖ ͡°) READY ( ͡° ͜ʖ ͡°)');

  let cards = document.querySelectorAll('.license-item');
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];


    card.addEventListener('click', (event) => {
      let card_content_collapsed = card.querySelector('.license-item-collapsed');
      let card_content_expanded  = card.querySelector('.license-item-expanded');
      let close_icon             = card_content_expanded.querySelector('.close-icon');

      card_content_collapsed.style.display = 'none';
      card_content_expanded.style.display  = 'block';

      close_icon.addEventListener('click', (event) => {
        event.stopPropagation();
        collapse_card(card);

        card_content_collapsed.style.display = 'block';
        card_content_expanded.style.display  = 'none';
      });

      expand_card(card);
    });
  }


});
