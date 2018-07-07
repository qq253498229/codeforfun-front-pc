#!/usr/bin/env bash
cd /root/codeforfun/codeforfun-pc
rm -rf codeforfun-pc
mkdir codeforfun-pc
cp -r /root/codeforfun/codeforfun-jenkins/data/workspace/codeforfun-pc .
cd /root/codeforfun/codeforfun-pc/codeforfun-pc
docker-compose build
docker-compose rm -s -f
docker-compose up -d
