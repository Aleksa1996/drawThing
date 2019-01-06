{!! ssr('js/server/server.js')
    // Share the packages with the server script through context
    ->context('csrf_token', csrf_token())
    ->context('js_bundle', [(string)mix('/js/manifest.js'), (string)mix('/js/vendor.js'), (string)mix('/js/client.js')])
    ->context('css_bundle', (string)mix('/css/app.css'))
     // If ssr fails, we need a container to render the app client-side
    ->fallback('<div id="app"></div>')
    ->render()
!!}
{{--
<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="csrf-token" content="{{csrf_token()}}">


            <link rel="stylesheet" type="text/css" href="/css/app.css" />
        </head>

        <body>
            <div id="react-app"></div>

            <script src="/js/client.js"></script>
        </body>
        </html> --}}
