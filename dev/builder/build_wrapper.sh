#!/bin/bash

PATH="$(cygpath -u "$JAVA8_HOME\\bin"):$PATH"

./build.sh
