#!/bin/sh
node /usr/src/app/server.js &
envoy -c /etc/service-envoy.yaml --service-cluster service${SERVICE_NAME}