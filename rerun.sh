#!/bin/sh
kubectl delete pod two-containers
kubectl apply -f two-container-pod.yaml
concurrently \
    -n reader,writer \
    -c bgBlue.bold,bgMagenta.bold \
    "retry -n 7 -- kubectl logs -f two-containers -c reader" \
    "retry -n 7 -- kubectl logs -f two-containers -c writer"
