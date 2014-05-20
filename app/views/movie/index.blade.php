@extends('l.movie', array('active' => 'home'))

@section('container')

    <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
            <div class="row">

                @foreach($movies as $movie)
                <div class="col-6 col-sm-6 col-lg-12 panel">
                    <h2>
                        <a href="{{ route('blog.show', $article->slug) }}">{{$movie->title }}</a>
                        <a target="_blank" class="pull-left" 
                            href="{{ route('blog.show', $article->slug) }}">
                            <i class="glyphicon glyphicon-share" style="font-size:0.5em;margin-right:1em;"></i>
                        </a>
                    </h2>
                    <p>{{ close_tags(Str::limit($movie->remark, 200)) }}</p>
                    <p>
                        <i class="glyphicon glyphicon-calendar"></i><span> {{ $movie->created_at }}（{{ $movie->year }}）</span>
<!--                        <a target="_blank" href="{{ route('blog.show', $article->slug) }}#comments">-->
<!--                            <i class="glyphicon glyphicon-share" style="font-size:0.5em;"></i>-->
<!--                        </a>-->
<!--                        <a href="{{ route('blog.show', $article->slug) }}#comments"-->
<!--                            class="btn btn-default btn-xs" style="margin-top:-2px;"-->
<!--                            role="button">评论（{{ $article->comments_count }}）</a>-->
                    </p>
                </div><!--/span-->
                @endforeach

                <div>
                    {{ pagination($movies, 'p.slider-3') }}
                </div>

            </div><!--/row-->
        </div><!--/span-->

        {{-- @include('w.movieSidebar', array('activeCategory' => 'all'))--}}
        
    </div><!--/row-->

@stop
