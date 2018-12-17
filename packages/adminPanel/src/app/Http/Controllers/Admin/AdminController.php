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
            [ 'id' => '4', 'href' => '/admin', 'icon' => ['fab', 'critical-role'], 'name' => 'Роли', 'children' =>
                [
                    [ 'id' => '28', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1' ],
                    [ 'id' => '29', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 2' ],
                    [ 'id' => '30', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3' ],
                ]
            ],
            [ 'id' => '5', 'href' => '/admin', 'icon' => ['far', 'images'], 'name' => 'Слайдеры' ],
            [ 'id' => '6', 'href' => '/admin', 'icon' => ['far', 'file-alt'], 'name' => 'Страницы' ],
            [ 'id' => '7', 'href' => '/admin', 'icon' => ['fas', 'dumbbell'], 'name' => 'Фитнес-программы' ],
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
                            [ 'id' => '31', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 1' ],
                        ]
                    ],
                    [ 'id' => '18', 'href' => '/admin', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Место 3', ],
                ]
            ],
        ];
    }

    public function menus()
    {
        return json_encode($this->params['menus']);
    }
}
