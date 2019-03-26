<section class="try">
    <h2 class="try-title">@lang('try.title')</h2>
    <div class="try-content">
        <ul class="try-menu">
            <li class="try-menu-item active">make art</li>
            <li class="try-menu-item">style transfer</li>
            <li class="try-menu-item">deep dream</li>
        </ul>
        <div class="try-styles">
            <div class="try-part generate-art visible">
                @foreach($images_try_generate as $image_url)
                    <div class="photo"><img src="{{$image_url}}" alt=""></div>
                @endforeach
            </div>
            <div class="try-part style-transfer">
                <div class="input">
                    @foreach($images_try_style_transfer_input as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
                <div class="styles">
                    @foreach($images_try_style_transfer_style as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
                <div class="output">
                    @foreach($images_try_style_transfer_output as $image_url)
                        <div class="photo photo-hidden"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
            </div>
            <div class="try-part deep-dream">
                <div class="input">
                    @foreach($images_try_deep_dream_input as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
                <div class="output">
                    @foreach($images_try_deep_dream_output as $image_url)
                        <div class="photo"><img src="{{$image_url}}" alt=""></div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>