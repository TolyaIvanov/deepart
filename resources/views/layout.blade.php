<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="application-name" content="egor">
    <title>egor</title>
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<div class="wrap">
    @include('templates.header')
    @include('templates.gap', ['picture' => 'big'])
    @include('templates.about')
    @include('templates.gap', ['picture' => 'a-lot-smalls'])
    @include('templates.portfolio')
    @include('templates.gap', ['picture' => 'example'])
    @include('templates.contact')
</div>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>