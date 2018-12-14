<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link href="{{asset('css/admin.css')}}" rel="stylesheet" >
    <title>Административная панель</title>
</head>
<body>
<div id="admin">
    <admin-panel></admin-panel>
</div>
<script src="{{asset('js/admin.js')}}" defer></script>
</body>

</html>