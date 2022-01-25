FROM nginx

WORKDIR /usr/share/nginx/html

ADD ./earfcn.js
ADD ./index.html

ADD https://github.com/qvil/lte-earfcn-calculator/blob/master/build/lte-earfcn-calculator.min.js
