#!/bin/sh
kubectl delete pod two-containers
parallel --linebuffer --tag docker build -f Dockerfile.{} . -t {} ::: reader writer
kubectl apply -f two-container-pod.yaml
parallel --linebuffer --tag retry -n 7 -- kubectl logs -f two-containers -c {} ::: reader writer
