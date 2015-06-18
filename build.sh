#!/usr/bin/env bash

STAT=0

gem install sass
STAT=$(($STAT + $?))

cd client

npm install
STAT=$(($STAT + $?))

lineman clean build spec-ci
wait
STAT=$(($STAT + $?))

cd ..

npm install
STAT=$(($STAT + $?))

gulp test
STAT=$(($STAT + $?))

./e2e.sh
STAT=$(($STAT + $?))

exit $STAT