<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Upload Your Media - Grace Church of Mentor</title>
    </head>
    <body>
        <div class="col-6">
            <div id="drag-drop-area"></div>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>