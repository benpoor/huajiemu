<?php
/**
 * Created by IntelliJ IDEA.
 * User: benpoor2008
 * Date: 14-4-29
 * Time: 下午4:13
 * To change this template use File | Settings | File Templates.
 */

class Movie extends BaseModel{
    /**
     * 数据库名称
     * @var string
     */
    protected $table = 'movies';

    /**
     * 模型对象关系:电影上传人
     * @return  object  User
     */
    public function user(){
        $this->belongsTo('User', 'user_id');
    }

    /**
     * 模型对象关系:电影分类
     * @return Object  Category
     */
    public function category(){
        $this->belongsTo('Category', 'category_id');
    }

    /**
     * 模型对象关系:电影地区
     * @return Object  Area
     */
    public function area(){
        $this->belongsTo('Area', 'area_id');
    }

}