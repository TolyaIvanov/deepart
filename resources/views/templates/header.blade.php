<?php
use App\Http\Middleware\LocaleMiddleware;
?>
<nav class="navbar">
    <div class="navbar-item-logo"><a href="/"><img src="{{URL::asset('images/logo.png')}}" alt=""></a></div>
    <ul class="navbar-menu">
        <li class="navbar-item portfolio-link">@lang('header.portfolio')</li>
        <li class="navbar-item try-link">@lang('header.try')</li>
        <li class="navbar-item"><a class="telegram-link" rel="nofollow" href="http://t.me/neuroartaibot"
                                   target="_blank">@lang('header.order')</a></li>
        <li class="change-lang">
            <ul class="lang-list">
                <li class="lang"><a href="<?= route('setlocale',
                        ['lang' => 'ru']) ?>"<?= LocaleMiddleware::getLocale() === 'en' ? 'class="active"' : '' ?>>En</a>
                <li/>
                <li class="lang"><a href="<?= route('setlocale',
                        ['lang' => 'en']) ?>"<?= LocaleMiddleware::getLocale() === 'ru' ? 'class="active"' : '' ?>>Ru</a>
                <li/>

            </ul>
        </li>
    </ul>
</nav>

