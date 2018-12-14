<template>
        <carousel-3d :controls-visible="true" :clickable="false">
            <!--<slide v-for="(slide, i) in slides" :index="i">-->
            <slide :index="0">
                <figure>
                    <img src="/files/slide/03-1306.jpg">
                    <figcaption>
                        index 0
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="1">
                <figure>
                    <img src="/files/slide/10.jpg">
                    <figcaption>
                        index 1
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="2">
                <figure>
                    <img src="/files/slide/23.jpg">
                    <figcaption>
                        index 2
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="3">
                <figure>
                    <img src="/files/slide/890.jpg">
                    <figcaption>
                        index 3
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="4">
                <figure>
                    <img src="/files/slide/image-02_3.jpg">
                    <figcaption>
                        index 4
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="5">
                <figure>
                    <img src="/files/slide/IMG_0045.jpg">
                    <figcaption>
                        index 5
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="6">
                <figure>
                    <img src="/files/slide/shutterstock_174940388_2.jpg">
                    <figcaption>
                        index 6
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
            <slide :index="7">
                <figure>
                    <img src="/files/slide/OpenFitnessDay_WCl-02.jpg">
                    <figcaption>
                        index 7
                        The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!
                    </figcaption>
                </figure>
            </slide>
        </carousel-3d>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';
//    const MMR = () => import('./ModalMenuRightTemplate');

    export default {
        name: "ActivityWorldClass",
        data: () => ({
            slides: 7
        }),
        components: {
            Carousel3d, Slide, 'm-m-r': () => import('./ModalMenuRightTemplate')
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-3d-container {
        @media (min-width: 85.375em) { width: 1340px; }
        @media (min-width: 64em) and (max-width: 85.375em) { width: 985px; }
        @media (max-width: 64em) and (min-width: 48em) { width: 730px; }
        figure {
            margin: 0;
        }
        figcaption {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            bottom: 0;
            position: absolute;
            bottom: 0;
            padding: 15px;
            font-size: 12px;
            min-width: 100%;
            box-sizing: border-box;
        }
    }
</style>
