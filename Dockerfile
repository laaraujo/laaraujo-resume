FROM python:3.10
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /code
WORKDIR /code
COPY src .

RUN pip install -r requirements.txt