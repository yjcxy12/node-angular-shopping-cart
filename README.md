# node-angular-shopping-cart


[Demo Page](http://yjcxy12.github.io/node-angular-shopping-cart/)
### Install package

- Fork and clone the repository using git clone
- Install dependancies
```sh
npm install
``` 
- Initialize mock data
```sh
npm run mock:init
```
- Run app in dev mode
```sh
npm run serve:dev
```
- Run app in production mode
```sh
npm run serve:production
```
Then dive into dist/index.html, change style and script to 'style.css' and 'bundle.min.js', instead of '../node-angular-shopping-cart/*' thing. Not the perfect solution yet.

### Testing

- Run test
```sh
npm run test
```

- Test in watch mode
```sh
npm run test:watch
```

### Remarks
- In the next Angular 1 app, will probably follow the points made in the blog post [Sane, scalable Angular apps are tricky, but not impossible. Lessons learned from PayPal Checkout.](https://medium.com/@bluepnume/sane-scalable-angular-apps-are-tricky-but-not-impossible-lessons-learned-from-paypal-checkout-c5320558d4ef#.1navupx3x).
Use directives everywhere, to make it reusable components and avoid scope inheritances. This way of building app will be somewhat similar to React and Angular 2.