#! /bin/bash
$FILE = "prueba.c"

# Rename olf functions
sed -i 's/export_command/export_pin/g' $FILE
sed -i 's/unexport_command/unexport_pin/g' $FILE
sed -i 's/pinMode/set_pin_mode/g' $FILE
sed -i 's/digitalWrite/write_digital/g' $FILE
sed -i 's/digitalRead/read_digital/g' $FILE
