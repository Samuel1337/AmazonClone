#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate

export REACT_APP_RENDER_GIT_COMMIT=$RENDER_GIT_COMMIT

npm install