<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link href="{{asset('css/site.css')}}" rel="stylesheet" type="text/css">
@stack('style')
</head>
<body>
<div id="site">
    <header class="header">
        <div class="header_top_fon">
            <div class="header_top">
                <div class="header_top__div">
                    <span class="header_top_text">Ростов-на-Дону</span>
                </div>
                <div class="header_top__div header_top__div_selected" @click="showModalSelectClub=true">
                    <span class="header_top_text">Клуб не выбран</span>
                    <i class="header_top_text header_top_icon_angle_down">
                        <font-awesome-icon icon="angle-down"/>
                    </i>
                </div>
                <div class="header_top__div">
                    <span class="header_top_text">+7(863)310-95-72</span>
                </div>
                <div class="header_top__div feedback">
                    <span class="header_top_text">Заказать обратный звонок</span>
                </div>
                <div class="header_top__div__schedule">
                    <i class="header_top_text header_top_icon_calendar_check">
                        <font-awesome-icon icon="calendar-check" />
                    </i>
                    <span class="header_top_text">Расписание</span>
                </div>
            </div>
        </div>
        <div class="header_bottom_fon">
            <ul class="header_bottom_nav">
                <li class="logo">
                    <a href="/">
                        <img src="{{ asset('svg/logo.svg') }}" alt="World Class" class="logo_image">
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Фитнес-услуги</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Клубы</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Виды членства</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Новости</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Мероприятия</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Контакты</span>
                    </a>
                </li>
                <li class="menu_btn">
                    <a href="/" class="i_button">
                        <span class="menu_btn_text">Вступить в клуб</span>
                    </a>
                </li>
                <li class="menu_button">
                    <a href="javascript:void(0)" class="menu_button_a" @click="showModalMenuRight=true">
                        <i class="menu_button_a_i">
                            <font-awesome-icon icon="bars" />
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    <modal-template v-show="showModalSelectClub" @close="showModalSelectClub=false" style="display: none;">
        <span slot="title">World Class</span>
        <h3 style="text-align: left;" slot="header"><span>Выберите клуб</span></h3>
        <div slot="body" class="modal_select_clubs">
            <div v-for="club in clubs" :key="club.id" class="modal_select_clubs_club" @click.stop="showModal=false">
                <div class="modal_select_club_name">@{{ club.name }}</div>
                <div class="modal_select_club_address">@{{ club.address }}</div>
            </div>
        </div>
        <div style="height: 75px;" slot="footer"></div>
    </modal-template>
    <modal-menu-right v-if="showModalMenuRight" @close="showModalMenuRight=false">
        <div slot="title"></div>
        <div slot="header"></div>
        <div slot="body">
            <ul class="header_menu_right">
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Фитнес-услуги</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Клубы</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Виды членства</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Новости</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Мероприятия</span>
                    </a>
                </li>
                <li class="menu">
                    <a href="/" class="menu_text">
                        <span>Контакты</span>
                    </a>
                </li>
                <li class="menu_btn">
                    <a href="/" class="i_button">
                        <span class="menu_btn_text">Вступить в клуб</span>
                    </a>
                </li>
            </ul>
        </div>
        <div slot="footer" class="header_menu_right_feedback">
            <a href="javascript:void(0)" class="header_menu_right_text">
                <span>Заказать обратный звонок</span>
            </a>
        </div>
    </modal-menu-right>
    <article>
@yield('content')
    </article>
    <footer class="footer">
    <div class="footer_header">
        <div class="footer_header_faq">
            <a href="/" class="footer_header_faq_route_link">
                <i class="footer_header_faq_icon">
                    <font-awesome-icon :icon="['far', 'question-circle']" />
                </i>
                <span class="footer_header_faq_text">Часто задаваемые вопросы</span>
            </a>
        </div>
    </div>
    <div class="footer_content_fon">
        <div class="footer_content">
            <ul class="footer_content_links">
                <li class="footer_content_links_li">
                    <a href="/" class="footer_content_links_li_a">О компании</a>
                    <ul class="footer_content_link">
                        <li class="footer_content_link_li">
                            <a href="/" class="footer_content_link_li_a">Вакансии</a>
                        </li>
                        <li class="footer_content_link_li">
                            <a href="/" class="footer_content_link_li_a">Пресса</a>
                        </li>
                        <li class="footer_content_link_li">
                            <a href="/" class="footer_content_link_li_a">Онлайн платеж</a>
                        </li>
                        <li class="footer_content_link_li">
                            <a href="/" class="footer_content_link_li_a">Контакты</a>
                        </li>
                    </ul>
                </li>
                <li class="footer_content_links_li">
                    <a href="/" class="footer_content_links_li_a">Фитнес</a>
                </li>
                <li class="footer_content_links_li">
                    <a href="/" class="footer_content_links_li_a">Клубы</a>
                </li>
                <li class="footer_content_links_li">
                    <a href="/" class="footer_content_links_li_a">Новости</a>
                </li>
                <li class="footer_content_links_li">
                    <a href="/" class="footer_content_links_li_a">Мероприятия</a>
                </li>
                <li class="footer_content_links_li">
                    <a href="/" class="footer_content_links_li_a">Виды членства</a>
                    <ul class="footer_content_link">
                        <li class="footer_content_link_li">
                            <a href="/" class="footer_content_link_li_a">Специальные предложения</a>
                        </li>
                        <li class="footer_content_link_li">
                            <a href="/" class="footer_content_link_li_a">Межрегиональный гостевой визит</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="footer_content_soch_links">
                <li class="footer_content_soch_links_li">
                    <a href="/" class="footer_content_soch_li_a">
                        <img src="{{ asset('svg/app-google.svg') }}" class="footer_content_soch_li_a_img" />
                    </a>
                </li>
                <li class="footer_content_soch_links_li">
                    <a href="/" class="footer_content_soch_li_a">
                        <img src="{{ asset('svg/app-ios.svg') }}" class="footer_content_soch_li_a_img" />
                    </a>
                </li>
                <li class="footer_content_soch_links_li circle first">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_links_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_links_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'vk']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_links_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'youtube-square']" />
                        </i>
                    </a>
                </li>
            </ul>
            <ol class="footer_content_soch">
                <li class="footer_content_soch_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'vk']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_li circle">
                    <a href="/" class="footer_content_soch_li_a">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon :icon="['fab', 'youtube-square']" />
                        </i>
                    </a>
                </li>
                <li class="footer_content_soch_li image">
                    <a href="/" class="footer_content_soch_li_a">
                        <img src="{{ asset('svg/app-ios.svg') }}" class="footer_content_soch_li_a_img" />
                    </a>
                </li>
                <li class="footer_content_soch_li image">
                    <a href="/" class="footer_content_soch_li_a">
                        <img src="{{ asset('svg/app-google.svg') }}" class="footer_content_soch_li_a_img" />
                    </a>
                </li>
                <li class="footer_content_soch_li bar">
                    <a href="javascript:void(0)" class="footer_content_soch_li_a" @click="showModalMenuFooter=true">
                        <i class="footer_content_soch_li_a_i">
                            <font-awesome-icon icon="bars" />
                        </i>
                    </a>
                </li>
            </ol>
            <div class="footer_content_ps">
                <div class="footer_content_ps_p">
                    <p style="text-align: left;">© 2004—2018 Фитнес-клуб World Class Ростов-на-Дону. <br>
                        Все права защищены. Нелицензированное использование материалов данного сайта запрещено. </p>
                </div>
                <div class="footer_content_ps_p">
                    <img src="{{ asset('img/paykeeper.png') }}" alt="" class="footer_content_ps_p_img" />
                </div>
            </div>
        </div>
    </div>
</footer>
    <modal-template v-show="showModalMenuFooter" @close="showModalMenuFooter=false" style="display: none;">
        <span slot="title">World Class</span>
        <span slot="header"></span>
        <div slot="body" class="modal_footer_menu">
            <div class="modal_footer_menu_list">
                <div class="modal_footer_menu_list_head"><a href="/" class="modal_footer_menu_list_head_a">О компании</a></div>
                <ul class="modal_footer_menu_list_ul">
                    <li class="modal_footer_menu_list_ul_li"><a href="/" class="modal_footer_menu_list_ul_li_a">Вакансии</a></li>
                    <li class="modal_footer_menu_list_ul_li"><a href="/" class="modal_footer_menu_list_ul_li_a">Пресса</a></li>
                    <li class="modal_footer_menu_list_ul_li"><a href="/" class="modal_footer_menu_list_ul_li_a">Онлайн платеж</a></li>
                    <li class="modal_footer_menu_list_ul_li"><a href="/" class="modal_footer_menu_list_ul_li_a">Контакты</a></li>
                </ul>
            </div>
            <div class="modal_footer_menu_list">
                <div class="modal_footer_menu_list_head"><a href="/" class="modal_footer_menu_list_head_a">Фитнес</a></div>
            </div>
            <div class="modal_footer_menu_list">
                <div class="modal_footer_menu_list_head"><a href="/" class="modal_footer_menu_list_head_a">Клубы</a></div>
            </div>
        </div>
        <div slot="footer" class="modal_footer_menu">
            <div class="modal_footer_menu_list">
                <div class="modal_footer_menu_list_head"><a href="/" class="modal_footer_menu_list_head_a">Новости</a></div>
            </div>
            <div class="modal_footer_menu_list">
                <div class="modal_footer_menu_list_head"><a href="/" class="modal_footer_menu_list_head_a">Мероприятия</a></div>
            </div>
            <div class="modal_footer_menu_list">
                <div class="modal_footer_menu_list_head"><a href="/" class="modal_footer_menu_list_head_a">Виды членства</a></div>
                <ul class="modal_footer_menu_list_ul">
                    <li class="modal_footer_menu_list_ul_li"><a href="/" class="modal_footer_menu_list_ul_li_a">Специальные предложения</a></li>
                    <li class="modal_footer_menu_list_ul_li"><a href="/" class="modal_footer_menu_list_ul_li_a">Межрегиональный гостевой визит</a></li>
                </ul>
            </div>
        </div>
    </modal-template>
</div>
<script src="{{asset('js/site.js')}}" defer></script>
@stack('script')
</body>
</html>
