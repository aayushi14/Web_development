#!/bin/bash

export PORT=5110

cd ~/www/tasktracker
./bin/tasktracker stop || true
./bin/tasktracker start
