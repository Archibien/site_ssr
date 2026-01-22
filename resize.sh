#!/usr/bin/env bash

set -e

# Check argument
if [ -z "$1" ]; then
  echo "Usage: $0 <image-name-without-extension>"
  exit 1
fi

NAME="$1"
DIR="public/img/categories/background-images"
SRC="${DIR}/${NAME}.jpg"

# Check source image exists
if [ ! -f "$SRC" ]; then
  echo "Source image not found: $SRC"
  exit 1
fi

for size in 480 768 1200 1600; do
  magick "$SRC" \
    -resize "${size}x" \
    -quality 82 \
    -strip \
    "${DIR}/${NAME}-${size}.jpg"
done

echo "Images generated successfully."

