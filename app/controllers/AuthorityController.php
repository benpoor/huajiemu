<?php
/**
 * Created by IntelliJ IDEA.
 * User: benpoor2008
 * Date: 14-5-19
 * Time: 下午4:42
 * To change this template use File | Settings | File Templates.
 */

class AuthorityController extends BaseController{
    /**
     * 页面：登录
     * @return response
     */
    public function getLogin(){
        return View::make('authority.login');
    }

    /**
     * 动作：登录
     * @return Response
     */
    public function postLogin(){
        // 凭证
        $credentials = array('email'=>Input::get('email'), 'password'=>Input::get('password'));
        // 是否记住登录状态
        $remember    = Input::get('remember-me', 0);
        // 验证登录
        if (Auth::attempt($credentials, $remember)) {
            // 登录成功，跳回之前被拦截的页面
            return Redirect::intended();
        } else {
            // 登录失败，跳回
            return Redirect::back()
                ->withInput()
                ->withErrors(array('attempt' => '“邮箱”或“密码”错误，请重新登录。'));
        }
    }
}