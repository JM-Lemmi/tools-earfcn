FROM nginx

WORKDIR /usr/share/nginx/html

COPY ./index.html /usr/share/nginx/html/

ADD https://raw.githubusercontent.com/JM-Lemmi/lte-earfcn-calculator/fix_minify/build/lte-earfcn-calculator.min.js /usr/share/nginx/html/
RUN chmod 777 lte-earfcn-calculator.min.js
