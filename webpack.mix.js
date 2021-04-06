const mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
        alias: {
            '@': __dirname + '/resources/js',
            'core': __dirname + '/resources/js'
        },
    },
});

mix.ts('resources/js/app.ts', 'public/js').vue().extract();

mix.postCss('resources/css/app.css', 'public/css', [
    //
]);
