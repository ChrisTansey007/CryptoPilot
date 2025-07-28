#!/bin/sh
set -e

echo "Running Express tests"
(cd express-backend && npm test)

echo "Running Flask tests"
PYTHONPATH=$(pwd) pytest flask_backend
