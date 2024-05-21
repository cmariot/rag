FROM python:3.11.4-slim-buster

WORKDIR /usr/src/app

RUN apt update
RUN apt upgrade -y
RUN apt install -y netcat
# install ping
# RUN apt install -y iputils-ping

# install dependencies
COPY ./requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# copy entrypoint.dev.sh
COPY ./entrypoint.sh .
RUN chmod +x /usr/src/app/entrypoint.sh

WORKDIR /app

# Ping localohost
# ENTRYPOINT [ "ping", "localhost" ]
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]