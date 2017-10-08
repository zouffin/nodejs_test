#!/bin/bash
port=27017
dbpath=/data/db

while getopts "p:d:" tag
do
echo $tag $OPTARG
  case "$tag" in
    p) [[ $OPTARG =~ ^[0-9]+$ ]] && port=$OPTARG;; 
    d) echo $OPTARG && dbpath=$OPTARG;;	
  esac
done

echo "port=$port\ndbpath=$dbpath\n"
mkdir -p $dbpath
mongod --dbpath $dbpath --port $port & pid=$!
echo "$pid\n"

