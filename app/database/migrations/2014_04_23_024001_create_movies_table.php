<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoviesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        //电影分类表
        Schema::create('movie_categories', function(Blueprint $table){
            $table->increments('id');
            $table->string('name', 32)->unique()->comment('分类名称');
            $table->string('remark', 64)->nullable()->comment('分类描述');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
            $table->timestamps();
        });
        //电影地区表
        Schema::create('movie_areas', function(Blueprint $table){
            $table->increments('id');
            $table->string('name', 32)->unique()->comment('地区名称');
            $table->string('remark', 64)->nullable()->comment('分类描述');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
            $table->timestamps();
        });
		//电影表
        Schema::create('movies', function(Blueprint $table){
            $table->increments('id');
            $table->string('title', 64)->unique()->comment('电影名');
            $table->string('nick_title', 64)->comment('别名');
            $table->string('remark', 256)->comment('简介');
            $table->string('year', 32)->comment('年份');
            $table->string('director', 128)->comment('导演');
            $table->string('cast', 128)->comment('主演');
            $table->integer('user_id')->unsigned()->comment('发布者id');
            $table->integer('category_id')->unsigned()->comment('分类id');
            $table->integer('area_id')->unsigned()->comment('地区id');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
            $table->timestamps();
        });
        //电影图片
        Schema::create('movie_images', function(Blueprint $table){
            $table->increments('id');
            $table->string('name', 64)->unique()->comment('图片名称');
            $table->string('path', 128)->comment('图片路径');
            $table->string('remark', 128)->nullable()->comment('图片描述');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
            $table->integer('user_id')->unsigned()->comment('发布者id');
            $table->integer('movie_id')->unsigned()->comment('电影id');
            $table->timestamps();
        });
        //影评表
        Schema::create('movie_reviews', function(Blueprint $table){
            $table->increments('id');
            $table->string('title',128)->comment('影评标题');
            $table->string('content',2000)->nullable()->comment('影评内容');
            $table->integer('type')->default(0)->comment('影评类型0:简评 1:影评');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
            $table->float('score')->comment('打分');
            $table->integer('user_id')->unsigned()->comment('发布者id');
            $table->integer('movie_id')->unsigned()->comment('电影id');
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
        Schema::dropIfExists('movie_reviews');
        Schema::dropIfExists('movie_images');
        Schema::dropIfExists('movies');
        Schema::dropIfExists('movie_areas');
        Schema::dropIfExists('movie_categories');
	}

}
