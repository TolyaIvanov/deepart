<section class="email">
    <div class="mission">
        <h3 class="mission-title">@lang('about.about-mission')</h3>
        <div class="mission-text"><p>@lang('about.about-target')</p></div>
    </div>
    <form class="subscribe" method="post" action="{{ route('save') }}">
        @csrf
        <input type="text" class="input input-name" name="name" placeholder="@lang('email.placeholder-name')" required>
        <input type="email" class="input input-email" name="mail" placeholder="@lang('email.placeholder-email')"
               required>
        <button class="save-mail">@lang('email.send')</button>
    </form>
</section>
