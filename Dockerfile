FROM nginx

WORKDIR /usr/share/nginx/html

ADD ./index.html /usr/share/nginx/html/

ADD ./lte-earfcn-calculator.js /usr/share/nginx/html/
