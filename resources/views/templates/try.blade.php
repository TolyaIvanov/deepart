<section class="try">
    <h2 class="try-title">@lang('try.title')</h2>
    <div class="try-content">
        <ul class="try-menu">
            <li class="try-menu-item menu-generate active">@lang('try.make')</li>
            <li class="try-menu-item menu-style-transfer">@lang('try.styleTransfer')</li>
            <li class="try-menu-item menu-deep-dream">@lang('try.deep')</li>
        </ul>
        <div class="try-styles">
            <ul class="try-styles-menu">
                <li class="try-styles-menu-item open-input hidden">@lang('try.input')</li>
                <li class="try-styles-menu-item open-style hidden">@lang('try.style')</li>
                <li class="try-styles-menu-item open-output active">@lang('try.result')</li>
            </ul>
            <div class="try-part visible">
                <div class="generate-art grid">
                    @foreach($images_try_generate as $image_url)
                        <img class="photo" src="{{$image_url}}" alt="">
                    @endforeach
                </div>
            </div>
            <div class="try-part style-transfer">
                <div class="input grid">
                    @foreach($images_try_style_transfer_input as $image_url)
                        <img class="photo" src="{{$image_url}}" alt="">
                    @endforeach
                </div>
                <div class="styles grid hidden">
                    @foreach($images_try_style_transfer_style as $image_url)
                        <img class="photo" src="{{$image_url}}" alt="">
                    @endforeach
                </div>
                <div class="output grid hidden">
                    @foreach($images_try_style_transfer_output as $image_url)
                        <img class="photo" src="{{$image_url}}" alt="">
                    @endforeach
                </div>
            </div>
            <div class="try-part deep-dream">
                <div class="input grid">
                    @foreach($images_try_deep_dream_input as $image_url)
                        <img class="photo" src="{{$image_url}}" alt="">
                    @endforeach
                </div>
                <div class="output grid hidden">
                    @foreach($images_try_deep_dream_output as $image_url)
                        <img class="photo" src="{{$image_url}}" alt="">
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>