<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use App\Mails;
use Illuminate\Support\Facades\Mail;


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

    public function saveMail(Request $request)
    {
        $email = $request->get('mail');
        $name = $request->get('name');

        $found = Mails::where('email', $email)->count();

        if ($found == 0) {
            $share = new Mails([
                'name' => $name,
                'email' => $email,
            ]);
            $share->save();

//            Mail::to('gnom228228228@gmail.com')->send(new ContactMail($name, $email));
        }

        return redirect('/');
    }

    private function get_url($files)
    {
        $urls = [];

        foreach ($files as $file) {
            array_push($urls, $file->getPath()."/".$file->getFilename());
        }
        return $urls;
    }
}
