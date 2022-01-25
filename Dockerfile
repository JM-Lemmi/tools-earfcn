FROM nginx

WORKDIR /usr/share/nginx/html

ADD ./index.html /usr/share/nginx/html/

ADD ./lte-earfcn-calculator.min.js /usr/share/nginx/html/
