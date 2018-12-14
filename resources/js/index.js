import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
// import { faWindowClose, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
// import { faFacebookF, faInstagram, faVk, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserCheck)

import IndexWorldClassRostov from './components/IndexWorldClassRostov'
import NewsWorldClass from './components/NewsWorldClass'
import ActivityWorldClass from './components/ActivityWorldClass'
import FluxParallax from './components/flux/FluxParallax.vue';
import PromoSliderWorldClass from './components/PromoSliderWorldClass'

const vc = new Vue({
    components: {
        IndexWorldClassRostov,
        NewsWorldClass,
        ActivityWorldClass,
        FluxParallax,
        FontAwesomeIcon,
        PromoSliderWorldClass
    }
}).$mount('#app');
