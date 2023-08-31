#! /bin/bash
clear
autoreconf --install

mkdir -p build
cd build
mkdir usr

current_dir=$(pwd)
../configure --prefix=$current_dir/usr

make
make install

make distcheck