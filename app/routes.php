<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| 基础权限
|--------------------------------------------------------------------------
*/
Route::group(array('prefix' => 'auth'), function () {
    $Authority = 'AuthorityController@';
    # 退出
    Route::get('logout', array('as' => 'logout', 'uses' => $Authority.'getLogout'));
    Route::group(array('before' => 'guest'), function () use ($Authority) {
        # 登录
        Route::get(                   'signin', array('as' => 'signin'        , 'uses' => $Authority.'getSignin'));
        Route::post(                  'signin', $Authority.'postSignin');
        # 注册
        Route::get(                   'signup', array('as' => 'signup'        , 'uses' => $Authority.'getSignup'));
        Route::post(                  'signup', $Authority.'postSignup');
        # 注册成功提示用户激活
        Route::get(          'success/{email}', array('as' => 'signupSuccess' , 'uses' => $Authority.'getSignupSuccess'));
        # 激活账号
        Route::get('activate/{activationCode}', array('as' => 'activate'      , 'uses' => $Authority.'getActivate'));
        # 忘记密码
        Route::get(          'forgot-password', array('as' => 'forgotPassword', 'uses' => $Authority.'getForgotPassword'));
        Route::post(         'forgot-password', $Authority.'postForgotPassword');
        # 密码重置
        Route::get(  'forgot-password/{token}', array('as' => 'reset'         , 'uses' => $Authority.'getReset'));
        Route::post( 'forgot-password/{token}', $Authority.'postReset');
    });
});

/*
|--------------------------------------------------------------------------
| 电影
|--------------------------------------------------------------------------
*/
Route::group(array(), function () {
    $Blog = 'MovieController@';
    # 博客首页
    Route::get(            '/', array('as' => 'home'            , 'uses' => $Blog.'getIndex'));
    # 分类文章列表
    Route::get('category/{id}', array('as' => 'categoryArticles', 'uses' => $Blog.'getCategoryArticles'));
    # 展示博客文章
    Route::get(       '{slug}', array('as' => 'blog.show'       , 'uses' => $Blog.'getBlogShow'));
    # 提交文章评论
    Route::post(      '{slug}', $Blog.'postBlogComment')->before('auth');
});
