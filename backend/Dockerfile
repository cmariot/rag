FROM python:3.11.4-slim-buster

WORKDIR /usr/src/app

RUN apt update
RUN apt upgrade -y
RUN apt install -y netcat iputils-ping

# install dependencies
COPY ./requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# copy entrypoint.dev.sh
COPY ./entrypoint.sh .
RUN chmod +x /usr/src/app/entrypoint.sh

# PYTHONDONTWRITEBYTECODE : Prevents Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1
# PYTHONUNBUFFERED : Prevents Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1

WORKDIR /app/srcs

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
