#!/bin/bash
sudo mount /dev/sda2 /mnt/sdcard
sudo cp -r web-server /mnt/sdcard
sudo umount /mnt/sdcard