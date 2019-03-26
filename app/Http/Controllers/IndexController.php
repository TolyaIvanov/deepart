<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        $images_try_generate = $this->get_url(\File::allFiles('images/try/generate'));
        $images_try_style_transfer_input = $this->get_url(\File::allFiles('images/try/style-transfer-input'));
        $images_try_style_transfer_style = $this->get_url(\File::allFiles('images/try/style-transfer-styles'));
        $images_try_style_transfer_output = $this->get_url(\File::allFiles('images/try/style-transfer-output'));
        $images_try_deep_dream_input = $this->get_url(\File::allFiles('images/try/deep-dream-input'));
        $images_try_deep_dream_output = $this->get_url(\File::allFiles('images/try/deep-dream-output'));

        $urls = [
            'images_try_generate' => $images_try_generate,
            'images_try_style_transfer_input' => $images_try_style_transfer_input,
            'images_try_style_transfer_style' => $images_try_style_transfer_style,
            'images_try_style_transfer_output' => $images_try_style_transfer_output,
            'images_try_deep_dream_input' => $images_try_deep_dream_input,
            'images_try_deep_dream_output' => $images_try_deep_dream_output,
        ];

        return view("layout", $urls);
    }

    private function get_url($files)
    {
        $urls = [];

        foreach ($files as $file) {
            array_push($urls, $file->getPath() . "/" . $file->getFilename());
        }
        return $urls;
    }
}
