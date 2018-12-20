<?php
namespace Ringer\AdminPanel\App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    protected $params;

    public function __construct()
    {
        $this->params['menus'] = [
            [ 'id' => '1', 'href' => '/admin/foo', 'icon' => ['fas', 'tachometer-alt'], 'name' => 'Панель'] ,
            [ 'id' => '2', 'href' => '/admin/bar', 'icon' => ['fas', 'list'], 'name' => 'Меню' ],
            [ 'id' => '3', 'href' => '/admin/users', 'icon' => ['fas', 'users'], 'name' => 'Пользователи' ],
            [ 'id' => '4', 'href' => '/admin/role', 'icon' => ['fab', 'critical-role'], 'name' => 'Роли', 'count' => 100, 'children' =>
                [
                    [ 'id' => '28', 'href' => '/admin/m11', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 11' ],
                    [ 'id' => '29', 'href' => '/admin/m12', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 22' ],
                    [ 'id' => '30', 'href' => '/admin/m13', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 33' ],
                ]
            ],
            [ 'id' => '5', 'href' => '/admin/slider', 'icon' => ['far', 'images'], 'name' => 'Слайдеры' ],
            [ 'id' => '6', 'href' => '/admin/page', 'icon' => ['far', 'file-alt'], 'name' => 'Страницы' ],
            [ 'id' => '7', 'href' => '/admin/fitnes', 'icon' => ['fas', 'dumbbell'], 'name' => 'Фитнес-программы' ],
            [ 'id' => '8', 'href' => '/admin', 'icon' => ['far', 'bell'], 'name' => 'События' ],
            [ 'id' => '9', 'href' => '/admin', 'icon' => ['fab', 'strava'], 'name' => 'Инфраструктура' ],
            [ 'id' => '10', 'href' => '/admin', 'icon' => ['fab', 'blogger-b'], 'name' => 'Блог' ],
            [ 'id' => '11', 'href' => '/admin', 'icon' => ['far', 'newspaper'], 'name' => 'Новости' ],
            [ 'id' => '12', 'href' => '/admin', 'icon' => ['fas', 'chart-area'], 'name' => 'Акции' ],
            [ 'id' => '13', 'href' => '/admin', 'icon' => ['fas', 'user-tie'], 'name' => 'Тренеры' ],
            [ 'id' => '14', 'href' => '/admin', 'icon' => ['fas', 'clipboard-list'], 'name' => 'Расписание' ],
            [ 'id' => '15', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место', 'children' =>
                [
                    [ 'id' => '16', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1', ],
                    [ 'id' => '17', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2', 'children' =>
                        [
                            [ 'id' => '19', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1' ],
                            [ 'id' => '20', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2' ],
                            [ 'id' => '21', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3','children' =>
                                [
                                    [ 'id' => '22', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1', ],
                                    [ 'id' => '23', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2', ],
                                    [ 'id' => '24', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3','children' =>
                                        [
                                            [ 'id' => '25', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1', ],
                                            [ 'id' => '26', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2', ],
                                            [ 'id' => '27', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3', ],
                                        ]
                                    ],
                                ]
                            ],
                            [ 'id' => '51', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 13','children' =>
                                [
                                    [ 'id' => '22', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1', ],
                                    [ 'id' => '23', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2', ],
                                    [ 'id' => '24', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3','children' =>
                                        [
                                            [ 'id' => '25', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1', ],
                                            [ 'id' => '26', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2', ],
                                            [ 'id' => '27', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3', ],
                                        ]
                                    ],
                                ]
                            ],
                            [ 'id' => '31', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1' ],
                        ]
                    ],
                    [ 'id' => '18', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3', ],
                ]
            ],
        ];
        $this->params['user_table'] = [
            [ 'id' => 1, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 2, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 3, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 4, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 5, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 6, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 7, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 8, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 9, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 10, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 11, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 12, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 13, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 14, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 15, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 16, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 17, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 18, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 19, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 20, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 21, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 22, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 23, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 24, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 25, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 26, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 27, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 28, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 29, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 30, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 31, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 32, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 33, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 34, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 35, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 36, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 37, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 38, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 39, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 40, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 41, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 42, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 43, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 44, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 45, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 46, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 47, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 48, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 49, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 50, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 51, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 52, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 53, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 54, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 55, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 56, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 57, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 58, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 59, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
            [ 'id' => 60, 'name' => 'zvonlexa', 'phone' => '79525848858', 'email' => 'zvon.lexa@yandex.ru', 'active' => true, 'create_at' => '02-11-2018' ],
        ];
    }

    public function menus()
    {
        return json_encode($this->params['menus']);
    }

    public function users(Request $request)
    {
        if(0 < $request->count){
            $collection = collect($this->params['user_table']);
            $slice = $collection->slice(0, $request->count);
            return json_encode($slice);
        }
        else {
            return json_encode($this->params['user_table']);
        }
//        return $request;
        //return json_encode($this->params['user_table']);
    }
}
