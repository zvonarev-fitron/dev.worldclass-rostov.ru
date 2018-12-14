<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<div id="dka">

    <h1 v-on:click="tutorialDemo">DKA-DEVELOPMENT #@{{counter}}</h1>

    <input type="text" v-model="name">
    <h2>Привет, @{{name}}</h2>

    <form action="" class="border m-2 p-4" :class="typeJob == 'list' ? 'border-primary' : 'border-danger'">
        <div class="form-row">
            <div class="form-group col-md-6">
                <div class="form-group">
                    <input type="radio" id="list" name="type" v-model="typeJob" value="list" :checked="typeJob == 'list'"><label for="list">Список каналов</label>
                    <input type="radio" id="search" name="type" v-model="typeJob" value="search" :checked="typeJob == 'search'"><label for="search">Поиск</label>
                </div>
                <div v-if="typeJob == 'search'" class="form-group">
                    <label>Поиск: @{{search}}</label><br/>
                    <label v-if="search.length"> - кол-во символов @{{search.length}}</label>
                </div>
                <div v-if="typeJob == 'search'" class="form-group">
                    <input type="text" class="form-control" name="search" v-model="search" placeholder="Введите искомое значение">
                </div>
                <div class="form-group" v-if="checkPick.length">
                    @{{ checkPick }} - @{{ checkPick.length }}
                </div>
            </div>

            <div class="form-group col-md-6">
                <div class="jumbotron">
                    <div class="form-check" v-if="typeJob == 'search'" v-for="hashtag in hashtags">
                        <label for="" class="form-check-label">
                            <input type="checkbox" class="form-check-input" v-model="checkPick" :value="hashtag">
                            @{{ hashtag }}
                        </label>

                    </div>
                </div>
            </div>

        </div>
    </form>
    @{{message}}
    <label for="" :title="getData">Проверка времени</label>
    <a href="#" v-on:click="tutorialDemo">Нажми меня</a>
    @{{ typeJob }}
</div>
</body>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js" integrity="sha256-FtWfRI+thWlNz2sB3SJbwKx5PgMyKIVgwHCTwa3biXc=" crossorigin="anonymous"></script>
<script type="text/javascript">
    var app = new Vue({
        el: '#dka',
        data: {
            message: 'Привет Vue',
            getData: 'Текущее время: ' + new Date().toLocaleString(),
            counter: 0,
            typeJob: 'list',
            search: '',
            hashtags: [],
            checkPick: [],
            name: ''
        },
        methods: {
            tutorialDemo: function(){
                this.counter++;
                console.log(this.counter);
            },
            lookupHashtag: function(){
                $.ajax({
                    url: 'https://dka-telegram.ru/channel/api?type=hashtags',
                    dataType: 'json',
                    data: {name:app.search},
                    success: function(json){
                        app.hashtags = json
                    }
                });
            }
        },
        watch: {
            search: function(){
                this.search.length >= 2 ? this.lookupHashtag() : this.hashtags = [];
            }
        }
    });
</script>
</html>