<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTopicsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //话题表
        Schema::create('topics', function(Blueprint $table){
            $table->increments('id');
            $table->string('title',128)->comment('话题标题');
            $table->string('content',2000)->nullable()->comment('话题内容');
            $table->integer('status')->default(0)->comment('状态 1：启用 0：停用');
            $table->string('tag', 128)->nullable()->comment('话题标签');
            $table->integer('user_id')->unsigned()->comment('发布人id');
            $table->timestamps();
        });
        //话题回复表
        Schema::create('topic_replays', function(Blueprint $table){
            $table->increments('id');
            $table->string('content',2000)->nullable()->comment('回复内容');
            $table->integer('status')->default(0)->comment('状态 1：启用 0：停用');
            $table->integer('user_id')->unsigned()->comment('发布人id');
            $table->integer('topic_id')->unsigned()->comment('话题id');
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
        Schema::dropIfExists('topic_replays');
        Schema::dropIfExists('topics');
    }

}
