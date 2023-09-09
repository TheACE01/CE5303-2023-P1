# Smart Home Dynamic Library

The folder contains the files that are required to include the `libgpio` library to the SD Card. Note that this is to be done when the SD Card already has a Linux image inside.

## Table of Contents

- [Installation](#installation)

## Installation

1. Clone the repository:

   ```bash
   git clone -b ligpio https://github.com/TheACE01/CE5303-2023-P1.git

2. Navigate to the project directory:

   ```bash
   cd library

3. Create a mount partition in your device:

   ```bash
   sudo mkdir /mnt/sdcard

4. Look for the correct name of your SD Card's root partition (In some cases it appears as /dev/sda2):
   ```bash
   lsblk

5. Mount your SD Card's root partition on the mount partition previously created:
   ```bash
   sudo mount /dev/sda2 /mnt/sdcard

6. Copy the library files into the mounted partition:
   ```bash
   sudo cp -R libgpio-1.0/usr/* /mnt/sdcard

6. Umount the partition:
   ```bash
   sudo umount /mnt/sdcard