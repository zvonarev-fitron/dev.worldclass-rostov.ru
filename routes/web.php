<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('tutorial', function(){
    return view('tutorial');
});

Route::get('/', 'IndexController@Index')->name('index');

Route::get('proba', 'ProbaController');


//Route::get('admin', function(){
//    return view('ringer/admin-panel::index');
//});

//Route::get('/admin/{any}', function($any){
//
//    dd($any);
//
//    return view('ringer/admin-panel::index');
//})->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
