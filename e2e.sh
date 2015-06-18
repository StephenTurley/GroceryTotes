#!/usr/bin/env bash

export PORT=8080

node grocery-totes.js &
PID=$!

gulp e2e
EXIT_STATUS=$?

kill $PID

exit $EXIT_STATUS
