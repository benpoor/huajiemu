<?php
/**
 * Created by IntelliJ IDEA.
 * User: benpoor2008
 * Date: 14-5-20
 * Time: 上午10:10
 * To change this template use File | Settings | File Templates.
 */

class MovieController extends BaseController{
    /**
     * 首页
     * @return Response
     */
    public function getIndex(){
        $movies = Movie::orderBy('created_at', 'desc')->paginate(5);
        return View::make('movie.index')->with(compact('movies'));
    }
}