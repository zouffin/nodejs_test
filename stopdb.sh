#!/bin/bash
port=27017
dbpath=/data/db

while getopts "p:d:" tag
do
echo $tag $OPTARG
  case "$tag" in
    p) [[ $OPTARG =~ ^[0-9]+$ ]] && port=$OPTARG;; 	
  esac
done

echo "port=$port"
mongo admin --port=$port --eval "db.shutdownServer()"
