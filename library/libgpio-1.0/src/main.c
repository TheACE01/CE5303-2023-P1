#include <gpiomanager.h>
#include <stdio.h>

int main(int argc, char const* argv[] ){

    // Init GPIO 15
    export_command(15);

    // Set pin 15 as output mode
    pinMode(15, 1);
    digitalWrite(15, 1);

    // blink to pin 15 for 5 seconds
    blink(15, 1, 5);

    // Init the other pinis
    export_command(14);
    export_command(25);
    export_command(26);

    // Set pins as input mode
    pinMode(14, 0);
    pinMode(25, 0);
    pinMode(26, 0);

    int value = 0;
    int counter = 0;

    while (counter <= 5)
    {
        value = digitalRead(26);
        printf("Reading the value %d from GPIO %d\n", value, 26);
        counter++;
        sleep(1);
    }
    counter = 0;

    while (counter <= 5)
    {
        value = digitalRead(14);
        printf("Reading the value %d from GPIO %d\n", value, 14);
        counter++;
        sleep(1);
    }
    counter = 0;
    
    while (counter <= 5)
    {
        value = digitalRead(25);
        printf("Reading the value %d from GPIO %d\n", value, 25);
        counter++;
        sleep(1);
    }


    unexport_command(15);
    unexport_command(14);
    unexport_command(25);
    unexport_command(26);
    return 0;
}