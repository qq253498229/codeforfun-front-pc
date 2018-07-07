#!/usr/bin/env bash
cd /root/codeforfun/codeforfun-pc
rm -rf target
mkdir target
cp /root/codeforfun/codeforfun-jenkins/data/workspace/codeforfun-pc/target/webhooks.jar ./target
docker-compose build
docker-compose rm -s -f
docker-compose up -d
