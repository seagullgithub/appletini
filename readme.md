# appletini

css framework (à la tailwindcss) but without the bloated overload

## roadmap

* [x] generate utility classes
* [ ] shake/purge
* [ ] autoprefix
* [ ] minify
* [ ] create documantion from file
* [ ] add preflight [from tailwindcss](https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css)



## what are all those files?

* \_defaults.scss - config file for default variables (widths, colors, ...)used by appletini.scss
* \_config.scss - config file for custom variables (widths, colors, ...) used by appletini. extend or override default values
* \_appletini.scss - so to speak the frontend



## how to use

1. create \_config.scss 

and add:

```scss
@import "defaults";

$sizes: (
"large": 100px
);
```


2. create style.scss 

and add the following lines:

```scss
@import "appletini";
```

here you can also add your custom styles.


## utility files

* \_padding.scss - create paddings

## Disclaimer

preflight.css is copied from [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

