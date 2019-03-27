<section class="try">
    <h2 class="try-title">@lang('try.title')</h2>
    <div class="try-content">
        <ul class="try-menu">
            <li class="try-menu-item menu-generate active">make art</li>
            <li class="try-menu-item menu-style-transfer">style transfer</li>
            <li class="try-menu-item menu-deep-dream">deep dream</li>
        </ul>
        <div class="try-styles">
            <ul class="try-styles-menu">
                <li class="try-styles-menu-item open-input hidden">input</li>
                <li class="try-styles-menu-item open-style hidden">style</li>
                <li class="try-styles-menu-item open-output active">output</li>
            </ul>
            <div class="try-part visible">
                <div class="generate-art grid">
                    @foreach($images_try_generate as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
            </div>
            <div class="try-part style-transfer">
                <div class="input grid">
                    @foreach($images_try_style_transfer_input as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
                <div class="styles grid hidden">
                    @foreach($images_try_style_transfer_style as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
                <div class="output grid hidden">
                    @foreach($images_try_style_transfer_output as $image_url)
                        <div class="photo photo-hidden"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
            </div>
            <div class="try-part deep-dream">
                <div class="input grid">
                    @foreach($images_try_deep_dream_input as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
                <div class="output grid hidden">
                    @foreach($images_try_deep_dream_output as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>