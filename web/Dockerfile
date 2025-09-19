FROM node:17-alpine
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser  
WORKDIR /app 
COPY package.json .
RUN npm install
COPY ./public /app/public
COPY ./src /app/src  
EXPOSE 3000
USER appuser 
CMD ["npm", "start"]

