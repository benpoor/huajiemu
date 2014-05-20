<?php
/**
 * Created by IntelliJ IDEA.
 * User: benpoor2008
 * Date: 2014/5/20
 * Time: 20:57
 */

class AdminController extends BaseController{

    /**
     * 后台管理首页
     * @return response
     */
    public function getIndex(){
        return View::make('admin.index');
    }
} 