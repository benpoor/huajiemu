<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//用户表
        Schema::create('users', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('name', 20)->unique()->comment('账号');
            $table->string('password', 20)->comment('密码');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
            $table->integer('permission')->default(1)->comment('权限 1 ：一般会员2 ：影评人3 ：编辑4 :  管理人员99：超级管理员');
            $table->string('email', 64)->nullable()->comment('邮箱');
            $table->string('mobile', 32)->nullable()->comment('手机');
            $table->integer('sex')->default(0)->comment('性别 0:女1:男');
            $table->string('nick_name', 64)->nullable()->comment('昵称');
            $table->string('img_url', 128)->nullable()->comment('头像地址');
            $table->string('remark', 256)->nullable()->comment('签名');
            $table->string('city', 32)->nullable()->comment('城市');
            $table->string('industry',32)->nullable()->comment('行业');
            $table->string('profession',32)->nullable()->comment('职业');
            $table->timestamps();
        });
        Schema::create('comments', function(Blueprint $table){
            $table->increments('id');
            $table->string('content', 256)->comment('评论内容');
            $table->integer('user_id')->comment('评论人');
            $table->integer('status')->default(0)->comment('状态0:停用1:启用');
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
        Schema::dropIfExists('users');
        Schema::dropIfExists('comments');
	}

}
