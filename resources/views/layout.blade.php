<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="application-name" content="egor">
    <title>egor</title>
    <link rel="shortcut icon" href="{{ asset('./favicon.ico') }}">
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js">AOS.init();</script>
</head>
<body>
<div class="wrap">
    @include('templates.header')
    @include('templates.about')
    <div class="container">
        @include('templates.portfolio')
        @include('templates.try')
        @include('email.email')
    </div>
    @include('templates.footer')
    @include('modal.modal')
</div>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>