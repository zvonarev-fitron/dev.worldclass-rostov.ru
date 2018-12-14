<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <title>Laravel proba</title>
</head>
<body>
<div id="app" class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            Laravel
        </div>

        <div class="links navbar-laravel">
            <a href="https://laravel.com/docs">Documentation</a>
            <a href="https://laracasts.com">Laracasts</a>
            <a href="https://laravel-news.com">News</a>
            <a href="https://nova.laravel.com">Nova</a>
            <a href="https://forge.laravel.com">Forge</a>
            <a href="https://github.com/laravel/laravel">GitHub</a>
        </div>
    </div>
    {{--<proba-component :users='{{json_encode($users)}}'></proba-component>--}}

    <proba-ajax></proba-ajax>

</div>
<script src="{{asset('js/app.js')}}" defer></script>
</body>
</html>
