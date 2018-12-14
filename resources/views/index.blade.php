@extends('layouts.site')

@push('style')
    {{--<link href="{{asset('css/site.css')}}" rel="stylesheet" type="text/css">--}}
    <link href="{{asset('css/index.css')}}" rel="stylesheet" type="text/css">
@endpush
@push('script')
    {{--<script src="{{asset('js/site.js')}}" defer></script>--}}
    {{--<script src="{{asset('js/index.js')}}" defer></script>--}}
@endpush
@section('content')
    <index-world-class-rostov></index-world-class-rostov>
    <news-world-class></news-world-class>
    <h2 class="activity_header">Мероприятия</h2>
    <activity-world-class></activity-world-class>
    <div class="activity_footer"><a href="/" class="activity_footer_a">Все соревнования и мероприятия</a></div>
    <promo-slider-world-class></promo-slider-world-class>
    <flux-parallax src="/files/home/shutterstock_149182625_2.jpg" height="600px" type="fixed" offset="80%">
        <div class="flux_parralax_index">
            <h3 class="flux_parralax_index_h">Окунись в мир <br/> WorldClass </h3>
            <a href="/" class="flux_parralax_index_a">
                <i class="flux_parralax_index_a_i">
                    <font-awesome-icon icon="user-check" />
                </i>
                <span class="flux_parralax_index_a_i_span">Присоединяйтесь</span>
            </a>
        </div>
    </flux-parallax>
@endsection()
