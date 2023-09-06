#! /bin/bash
FILE="./src/test.c"

# Rename olf functions
sed -i 's/export_pin/export_command/g' $FILE
sed -i 's/unexport_pin/unexport_command/g' $FILE
sed -i 's/set_pin_mode/pinMode/g' $FILE
sed -i 's/write_digital/digitalWrite/g' $FILE
sed -i 's/read_digital/digitalRead/g' $FILE
