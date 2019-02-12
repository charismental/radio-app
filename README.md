# radio-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Replace this in node_modules/vue-burger-menu common.js
    this.$nextTick(function () {
      if (screen.width < 768) {
        document.getElementById('sideNav').style.width = '100%';
      } else {
        document.getElementById('sideNav').style.width = this.width ? this.width + 'px' : '360px';
      }
    });
