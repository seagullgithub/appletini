# appletini

css framework (à la tailwindcss) but without the bloated overload

## roadmap

* [ ] generate utility classes
* [ ] shake/purge
* [ ] autoprefix
* [ ] minify
* [ ] create documantion from file
* [x] add preflight [from tailwindcss](https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css)



## what are all those files?

```
C:.
│   style.scss
│   _config.scss
│
├───core
│       _defaults.scss
│       _preflight.scss
│
├───helper
│       create_cheat_sheet.js
│
└───utilities
        _padding.scss
```


* `style.scss` - entry point
* `_config.scss` - custom variables (overrides default variables)
* `core/_defaults.scss` - default variables
* `core/_preflight.scss` - reset and 
* `helper/create_cheat_sheet.js` - generate html docu/cheat sheet from scss sources (not yet implemented)
* `utilities/*.scss` - utilities class grouped by category



## how to use

### customise `_config.scss` 

add variables as needed

### add custom classes

place custom classes either directly in `appletini.scss` or store them in a separat location and add them to  `appletini.scss`


## utility class files

* _padding.scss - create paddings
* ...

## Disclaimer

preflight.css is copied from [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

