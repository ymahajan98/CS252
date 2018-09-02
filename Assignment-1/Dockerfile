FROM ubuntu

COPY server /server

# gcc installation
RUN apt-get update \
    && apt-get -y install gcc

RUN gcc server/server.c  

EXPOSE 5432
