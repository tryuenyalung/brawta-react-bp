
# React Boiler-Plate

  

**Notes:**

_create-react-app by default configures your react project (babel, eslint & etc.), if you want to see the configurations run: npm run eject, nb: when you do this you expose all the configuration on react-scripts, once you do this you cannot revert back, benefits of not ejecting configurations: when ever theres an update on the dependencies on the repository you have an option to update your project base on the changes occur in the create-react-app_

[Docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

  

*Hot Reload Module:*

> no need to configure hot reload module
because create-react-app already does that: [reference](https://medium.com/@otduet/create-react-app-hot-reloading-b8d4543da641)FYI, Create-React-App already supports hot reloading without any additional configuration needed. It’s just that it supports use “plain HMR”, rather than using the React-Hot-Loader tool. My post Webpack HMR vs React-Hot-Loader talks about the differences between the two approaches, and I show how to set up plain HMR in my post Practical Redux

  

*SCSS support*

>node-sass-chokidar : [reference](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
Why node-sass-chokidar?
node-sass has been reported as having the following issues:
node-sass --watch has been reported to have performance issues in certain conditions when used in a virtual machine or with docker. Infinite styles compiling [#1939](https://github.com/facebookincubator/create-react-app/issues/1939) node-sass has been reported as having issues with detecting new files in a directory [#1891](https://github.com/sass/node-sass/issues/1891) node-sass-chokidar is used here as it addresses these issues.

  

*PropTypes*

>use prop-types on stateless components, it validates the props that is being pass on a stateless components, lets you pinpoint if theres a type mismatch or lack of data passing on the components, sample use case: helps you determine if theres a change in data being pass by your api provider

>

*Redux DevTools*

>[Docs](https://github.com/zalmoxisus/redux-devtools-extension)  [Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

  

*Support for image optimization*

>In theory I’d like to include this but I think it’s impractical without a cross-machine caching mechanism. Having super slow builds with lots of images would be very frustrating given that JS builds aren’t fast anyway. So bailing on this unless somebody has a bright idea on how to make it happen without making (first) builds slow. [reference](https://github.com/facebook/create-react-app/issues/1154)

  

*State Immutability*

>[Immutable JS](https://facebook.github.io/immutable-js/)

  
  

*Api Support*

>[axios](https://github.com/axios/axios)

  

*Middleware*

>[redux-thunk](https://github.com/reduxjs/redux-thunk)


*Reactstrap and Bootstrap*
>Why not react-bootstrap? react-bootstrap its currently using bootstrap 3 which doesn't support flexbox and other latest features of css, so reactstrap + bootstrap 4 is best option. [reacstrap](https://reactstrap.github.io), [bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)