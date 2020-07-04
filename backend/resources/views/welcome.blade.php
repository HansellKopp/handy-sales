<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<! — csrf token →
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Your Website Title</title>
<! — styles →
<link href="{{ asset('static/css/main.css') }}" rel="stylesheet">
</head>
<body>
<div id="example"></div>
<script src="{{ asset('static/js/main.js') }}"></script>
</body>
</html>