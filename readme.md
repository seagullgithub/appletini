# appletini

css framework (à la tailwindcss) but without the bloated overload

## roadmap

* [ ] generate utility classes
* [ ] shake/purge
* [ ] autoprefix
* [ ] minify
* [ ] create documantion from file
* [x] add preflight [from tailwindcss](https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css)

## start dev

`npm run dev`



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



## helper functions

paste into browser console

```js
(function() {

  steps = new Set(createSteps(0, 4, 0.5));
  steps = new Set([...steps, ...createSteps(4, 8, 1)]);
  steps = new Set([...steps, ...createSteps(8, 100, 4)]);
  
  result = "";
  steps.forEach(item => {
    result += `"${item.toString().replace(".", "\\\\.")}": ${item * 0.25}rem,`;
  })
  
  copy(result)
})()

function createSteps(start, end, step) {
  tmp = []
  for (i = start; i <= end; i = i + step) {
    tmp.push(i);
  }
  return tmp;
}
```
