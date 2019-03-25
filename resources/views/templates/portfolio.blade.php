<section class="portfolio">
    <h2 class="portfolio-title">@lang('portfolio.title')</h2>
    <div class="portfolio-part generate">
        <div class="description">
            @lang('portfolio.description-generate')
        </div>
        <div class="photos">
            <img class="photo first" src="{{ URL::asset('images/portfolio/generate1.jpg') }}" alt="">
            <img class="photo second" src="{{ URL::asset('images/portfolio/generate2.jpg') }}" alt="">
        </div>
    </div>
    <div class="portfolio-part style-transfer">
        <div class="description">
            @lang('portfolio.description-style-transfer')
        </div>
        <div class="photos">
            <div class="style-transfer-input input">
                <img class="photo first" src="{{ URL::asset('images/portfolio/style-transfer-input.jpg') }}" alt="">
                <img class="photo second" src="{{ URL::asset('images/portfolio/style-transfer-style.jpg') }}" alt="">
            </div>
            <img class="style-transfer-output photo" src="{{ URL::asset('images/portfolio/style-transfer-output.jpg') }}" alt="">
        </div>
    </div>
    <div class="portfolio-part deep-dream">
        <div class="description">
            @lang('portfolio.description-deep-dream')
        </div>
        <div class="photos">
            <img class="photo first" src="{{ URL::asset('images/portfolio/deep-dream-input.jpg') }}" alt="">
            <img class="photo second" src="{{ URL::asset('images/portfolio/deep-dream-output.jpg') }}" alt="">
        </div>
    </div>
</section>