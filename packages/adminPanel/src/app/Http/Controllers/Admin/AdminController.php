<?php
namespace Ringer\AdminPanel\App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;

class AdminController extends Controller
{
    protected $params;

    public function __construct()
    {
        $this->params['menus'] = [
            [ 'id' => '1', 'href' => '/admin/foo', 'icon' => ['fas', 'tachometer-alt'], 'name' => 'Панель'] ,
            [ 'id' => '2', 'href' => '/admin/bar', 'icon' => ['fas', 'list'], 'name' => 'Меню' ],
            [ 'id' => '3', 'href' => '/admin/users', 'icon' => ['fas', 'users'], 'name' => 'Пользователи' ],
            [ 'id' => '4', 'href' => '/admin/role', 'icon' => ['fab', 'critical-role'], 'name' => 'Роли', 'count' => 10, 'children' =>
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
            [ 'id' => '15', 'href' => '/admin/user/new', 'icon' => ['fas', 'place-of-worship'], 'name' => 'Новое Место', 'children' =>
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
        $this->params['user_table'] = [];
    }

    public function menus()
    {
        return json_encode($this->params['menus']);
    }

    public function users(Request $request)
    {
        if(0 < $request->count){
            $user_table = User::limit($request->count)->get();
        }
        else {
            $user_table = User::all();
        }
        if(isset($request->search) && isset($request->fieldsearch) && 0 < strlen($request->search)) {
            $this->params['user_table'] = $user_table->where($request->fieldsearch, $request->search);
        }
        else {
            $this->params['user_table'] = $user_table;
        }
        return json_encode($this->params['user_table']);
    }
}
