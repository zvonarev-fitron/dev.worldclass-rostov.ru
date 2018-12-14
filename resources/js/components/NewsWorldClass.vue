<template>
<div class="news_world_class_fon">
    <div class="news_world_class_content">
        <div class="news_world_class_header">
            Новости WorldClass
        </div>
        <ul class="news_world_class_body">
            <li class="news_world_class_body_li">
                <div class="news_world_class_body_li_date">10 октября</div>
                <a href="/" class="news_world_class_body_li_text">Функциональные соревнования 7 октября</a>
            </li>
            <li class="news_world_class_body_li">
                <div class="news_world_class_body_li_date">08 октября</div>
                <a href="/" class="news_world_class_body_li_text">Соревнования по плаванию</a>
            </li>
            <li class="news_world_class_body_li">
                <div class="news_world_class_body_li_date">11 июля</div>
                <a href="/" class="news_world_class_body_li_text">Новые беговые дорожки от Life Fitness в World Class Exclusive</a>
            </li>
        </ul>
        <div class="news_world_class_footer">
            <a href="/" class="news_world_class_footer_a">Все новости сети </a>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "NewsWorldClass"
    }
</script>

<style lang="scss" scoped>
    .news_world_class_fon{
        width: 100%;
        background-color: #f5f6f6;
        padding-top: 40px;
        .news_world_class_content {
            margin: auto;
            padding-bottom: 30px;
            font-family: "Avenir Next Cyr W00 Bold", sans-serif;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            @media (min-width: 85.375em) { width: 1254px; }
            @media (min-width: 64em) and (max-width: 85.375em) { width: 932px; }
            @media (max-width: 64em) and (min-width: 48em){ width: 730px; }
            .news_world_class_body {
                display: flex;
                margin: 30px 0 30px 0;
                padding: 0;
                .news_world_class_body_li {
                    font-family: "Avenir Next Cyr W00 Regular", sans-serif;
                    list-style-type: none;
                    width: 30%;
                    &:first-child{
                        margin-right: auto;
                    }
                    &:last-child{
                        margin-left: auto;
                    }
                    .news_world_class_body_li_date {
                        color: #b8bbc0;
                        font-size: 14px;
                        margin-bottom: 8px;
                        font-weight: 100;
                    }
                    .news_world_class_body_li_text {
                        font-family: "Avenir Next Cyr W00 Regular", sans-serif;
                        font-size: 15px;
                        font-style: normal;
                        text-decoration: none;
                        border-bottom: 1px solid transparent;
                        color: black;
                        cursor: pointer;
                        &:hover {
                            color: #ed1c24;
                            transition: all 0.5s;
                        }
                    }
                }
            }
            .news_world_class_footer {
                .news_world_class_footer_a {
                    color: #ed1c24;
                    text-decoration: none;
                    position: relative;
                    border-bottom: 1px solid transparent;
                    cursor: pointer;
                    font-family: "Avenir Next Cyr W00 Regular", sans-serif;
                    font-weight: 100;
                    font-size: 15px;
                    transition: all 0.5s;
                    &:hover{
                        color: #cb0002;
                        transition: all 0.5s;
                        border-bottom: 1px solid;
                    }
                }
            }
        }
    }

</style>
