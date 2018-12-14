import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faCalendarCheck, faBars, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faVk, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add( faAngleDown, faCalendarCheck, faWindowClose, faQuestionCircle, faFacebookF, faInstagram, faVk,
    faYoutubeSquare, faBars, faUserCheck );

//import ModalTemplate from './components/ModalTemplate';
//import ModalMenuRight from './components/ModalMenuRightTemplate';

//import IndexWorldClassRostov from './components/IndexWorldClassRostov';
import NewsWorldClass from './components/NewsWorldClass';
import ActivityWorldClass from './components/ActivityWorldClass';
import FluxParallax from './components/flux/FluxParallax';
import PromoSliderWorldClass from './components/PromoSliderWorldClass';

//const MMR = () => import('./components/ModalMenuRightTemplate');

const IndexWorldClassRostov = () => import('./components/IndexWorldClassRostov');

//Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('modal-template', () => import('./components/ModalTemplate'));
Vue.component('modal-menu-right', () => import('./components/ModalMenuRightTemplate'));

const vs = new Vue({
    components: {
        IndexWorldClassRostov,
        NewsWorldClass,
        ActivityWorldClass,
        FluxParallax,
        PromoSliderWorldClass,
        FontAwesomeIcon
    },
    data: () => {
        return {
            showModalSelectClub: false,
            showModalMenuFooter: false,
            showModalMenuRight: false,
            clubs: [
                { id: 0, name: 'Exclusive', address: 'ул. Красноармейская, д. 133/117' },
                { id: 1, name: 'Premium', address: 'ул. Герасименко, д. 5' }
            ]
        }
    }
}).$mount('#site');

(function(){
    var a = document.querySelector('.header_bottom_fon');
    window.addEventListener('scroll', function(){
        if (this.scrollY >= 67)
            a.classList.add('sticky');
        else
            a.classList.remove('sticky');
    }, false);
})();

