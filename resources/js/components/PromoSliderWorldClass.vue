<template>
    <div class="slider">
        <ul class="slides" :style="style">
            <li v-for="(slide,i) in playslides" :key="i">
                <div class="img" :style="{ backgroundImage: `url(${slide.img})` }">
                    <div class="text">
                    <div class="head" v-html="slide.head"></div>
                    <div class="mark" v-html="slide.mark"></div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="indicators">
            <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
                <div class="item">
                    <span class="title">{{slide.title}}</span>
                    <!--<div class="mark" v-html="slide.mark"></div>-->
                    <span class="progress">
                        <div class="fill" :style="{ width: `${percent}%`}"></div>
                        <div class="dot"></div>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PromoSliderWorldClass",
        data: () => ({
            slides: [{
                img: "/files/feature/page_classgrit.jpg",
                title: "Фитнес-программы",
                head: "Разнообразие фитнес-<br />программ",
                mark: "World Class предлагает более 55 фитнес-программ:<br />- кроссфит,<br />- боевые искусства,<br />- аквааэробика,<br />- йога и пилатес,<br />- танцевальные направления.<br />- детский фитнес."
            }, {
                img: "/files/feature/page_2.jpg",
                title: "Высокотехнологичное оборудование",
                head: "Новейшее оборудование<br /> от лидеров отрасли",
                mark: "В кардиозоне клуба представлен 31 тренажер 8-и видов от<br />мирового лидера Life Fitness с экранами диогональю 43,8 см,<br />прямым выходом в Интернет,визуальными маршрутами Life<br />Scape,50 ТВ-каналами, подключением к мобильным устройствам.<br/>Оборудование регулярно обновляется и пополняется.<br />Имеется зона свободных весов."
            }, {
                img: "/files/feature/page_3.jpg",
                title: "Персональный тренинг",
                head: "Персональная тренировка<br />- самый быстрый путь к<br />совершенной форме",
                mark: "Персональный тренер поможет вам составить программу<br />тренировок и питания, научит правильной технике<br />выполнения упражнений."
            }, {
                img: "/files/feature/page_456.jpg",
                title: "Клуб для лидеров",
                head: "Клуб для лидеров",
                mark: "Комфорт от WorldClass-это:<br />- многоступенчатая очистка воздуха и воды;<br />- специальные уникальные покрытия в студиях,бассейне,<br />душевых;<br />- оргинальный дизайн, комфорт и новейшее оборудование."
            }],
            current: 0,
            percent: 0,
            timer: 0,
            interval: 0,
            progress: 0,
            duration: 5000,
            playslides: []
        }),
        computed: {
            style: function style() {
                switch (this.current % 2) {
                    case 0:
                        return { top: "0" };
                    case 1:
                        return { top: "-100%" };
                }
            }
        },
        methods: {
            selectSlide: function selectSlide(i) {
                this.current = i;
                this.playslides[this.current % 2] = this.slides[this.current];
                this.resetPlay();
            },
            process: function process() {
                this.current++;
                if (this.current >= this.slides.length) {
                    this.current = 0;
                }
                this.playslides[this.current % 2] = this.slides[this.current];
                this.resetPlay();
            },
            going: function going() {
                var time = new Date().getTime();
                this.percent = Math.floor(100 * (time - this.timer) / this.duration);
            },
            resetPlay: function resetPlay() {
                clearInterval(this.interval);
                clearInterval(this.progress);
//                this.play();
            },
            stop: function stop() {
                clearInterval(this.interval);
                clearInterval(this.progress);
            },
            play: function play() {
                this.timer = new Date().getTime();
                this.progress = setInterval(this.going, this.duration / 100);
                this.interval = setInterval(this.process, this.duration);
            }
        },
        created: function created() {
            this.playslides[0] = this.slides[0];
            this.playslides[1] = this.slides[1];
            this.play();
        }
    }
</script>

<style scoped>
    .slider {
        position: relative;
        z-index: 1;
        overflow: hidden;
        height: 100vh;
    }
    .slider ul {
        list-style: none;
    }
    .slider ul.slides {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        transition: top 800ms;
    }
    .slider ul.slides li {
        height: 100%;
    }
    .slider ul.slides li .img {
        height: 100%;
        background-size: cover;
        background-position: 50%;
    }
    .slider ul.slides li .img .text {
        padding: 7% 12%;
        font-family: "Avenir Next Cyr W00 Regular", sans-serif;
        font-weight: 100;
    }
    .slider ul.slides li .img .text .head {
        font-size: 48px;
        line-height: 60px;
        margin-bottom: 25px;
        color: #fff;
    }
    .slider ul.slides li .img .text .mark {
        font-size: 16px;
        line-height: 26px;
        color: #fff;
    }
    .slider ul.indicators {
        position: absolute;
        padding-right: 40px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        text-align: right;
    }
    .slider ul.indicators li {
        clear: both;
    }
    .slider ul.indicators li .item {
        position: relative;
        margin-bottom: 16px;
        float: right;
    }
    .slider ul.indicators li:last-child .item {
        margin-bottom: 0;
    }
    .slider ul.indicators li .title {
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-family: 'SegoeUI-Bold';
        transition: font-size 0.6s ease-out;
    }
    .slider ul.indicators li .mark {
        color: #fff;
        font-family: 'SegoeUI-Semilight';
        display: none;
        opacity: 0;
        transition: all 0.6s ease-out;
    }
    .slider ul.indicators li.active .mark {
        color: #fff;
        font-family: 'SegoeUI-Semilight';
        display: block;
        text-align: left;
        opacity: 1;
        transition: all 0.6s ease-out;
    }
    .slider ul.indicators li .dot {
        position: absolute;
        top: 50%;
        right: -20px;
        margin-top: -5.5px;
        margin-left: 10px;
        width: 11px;
        height: 11px;
        background: #fff;
        border-radius: 50%;
    }
    .slider ul.indicators li .progress {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 2px;
        margin: 8px 0;
        background: rgba(255,255,255,0.5);
    }
    .slider ul.indicators li.active .title {
        transition: font-size 0.6s ease-in;
        font-size: 36px;
        font-family: 'SegoeUI-Light';
    }
    .slider ul.indicators li.active .progress .fill {
        height: 100%;
        background: #fff;
    }
</style>
