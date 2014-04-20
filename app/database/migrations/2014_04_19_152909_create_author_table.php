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
		//
        Schema::create('authors', function(Blueprint $table)
        {
            //
            $table->increments('id');
            $table->string('name', 20)->unique()->comment('账号');
            $table->string('password', 20)->comment('密码');
            $table->integer('age')->nullable()->comment('年龄');
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
        Schema::drop('authors');
	}

}
