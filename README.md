# React Boiler-Plate
 

**Notes:**

[Docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

*Hot Reload Module:*
> no  need  to  configure  hot  reload  module
because  create-react-app  already  does  that: [reference](https://medium.com/@otduet/create-react-app-hot-reloading-b8d4543da641)
FYI,  Create-React-App  already  supports  hot  reloading  without  any  additional
configuration  needed.  It’s  just  that  it  supports  use “plain  HMR”,  rather  than
using  the  React-Hot-Loader  tool.
My  post  Webpack  HMR  vs  React-Hot-Loader  talks  about  the  differences  between the  two  approaches,  and  I  show  how  to  set  up  plain  HMR  in  my  post  Practical  Redux

*SCSS support*
>node-sass-chokidar : [reference](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) 
>Why node-sass-chokidar? 
>node-sass has been reported as having the following issues:
node-sass --watch has been reported to have  performance issues in certain conditions when used in a virtual machine or with docker. Infinite styles compiling  [#1939](https://github.com/facebookincubator/create-react-app/issues/1939) node-sass  has been reported as having issues with detecting new files in a directory  [#1891](https://github.com/sass/node-sass/issues/1891) node-sass-chokidar  is used here as it addresses these issues.

