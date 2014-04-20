<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        //创建会员表
        Schema::create('users',function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->string('password');
            /**
             * 状态
             * 0 停用；
             * 1 启用；
             */
            $table->integer('status');
            /**
             * 权限
             * 1 ：一般会员；
             * 2 ：影评人；
             * 3 ：编辑；
             * 4 :  管理人员
             * 99：超级管理员
             */
            $table->integer('permission');
            $table->string('email');
            /**
             * 移动电话
             */
            $table->string('iphone');
            /**
             * 注册时间
             */
            $table->dateTime('registerTime');
            /**
             *	性别
             * 	1：男
             *  2：女
             */
            $table->integer('sex');
            /**
             * 昵称
             */
            $table->string('nickname');
            /**
             * 头像图片链接
             */
            $table->string('imgUrl');
            /**
             * 头像大图
             */
            $table->string('bimgUrl');
            /**
             * 头像中图
             */
            $table->string('mimgUrl');
            /**
             * 头像小图
             */
            $table->string('simgUrl');
            /**
             * 头像剪切值(x1;x2;y1;y2;width;height)
             */
            $table->string('imgSelect');
            /**
             * 签名描述
             * @return
             */
            $table->string('description');
            /**
             * 所在城市
             */
            $table->string('city');
            /**
             * 行业
             */
            $table->string('industry');
            /**
             * 职业
             */
            $table->string('occupation');
            /**
             * 博客或网站以http://开头
             */
            $table->string('link');
            //通知信息设置
            /**
             * 站内信：1提示 0 不提示
             */
            $table->integer('isMail');
            /**
             * 关注我：1提示 0 不提示
             */
            $table->integer('isAttention');
            /**
             * 回应我的影评:1提示 0 不提示
             */
            $table->integer('isReply');
            /**
             * 喜欢我的影评:1提示 0 不提示
             */
            $table->integer('isLove');
            /**
             * 回复我的话题:1提示 0 不提示
             */
            $table->integer('isReplyTopic');
            /**
             * 站内信：1提示 0 不提示
             */
            $table->integer('isMailSend');
            /**
             * 关注我：1提示 0 不提示
             */
            $table->integer('isAttentionSend');
            /**
             * 回应我的影评:1提示 0 不提示
             */
            $table->integer('isReplySend');
            /**
             * 喜欢我的影评:1提示 0 不提示
             */
            $table->integer('isLoveSend');
            /**
             * 回复我的话题:1提示 0 不提示
             */
            $table->integer('isReplyTopicSend');
            //公开程度
            /**
             * 允许给我私信:1会员 2影评人
             */
            $table->integer('mailScope');
            /**
             * 允许看到我的话题:0不限 1会员 2影评人
             */
            $table->integer('topicScope');
            /**
             * 是否显示城市:1显示 0 不显示
             */
            $table->integer('isCity');
            /**
             * 是否显示签名:1显示 0 不显示
             */
            $table->integer('isDes');
            /**
             * 是否显示职业身份:1显示 0 不显示
             */
            $table->integer('isPem');
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
        Schema::drop('users');
	}

}
