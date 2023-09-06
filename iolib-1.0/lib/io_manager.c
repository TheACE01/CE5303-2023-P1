#include <time.h>
#include <stdio.h>
#include <fcntl.h>
#include <config.h>
#include <stdlib.h>
#include <stdarg.h>
#include <string.h>
#include <unistd.h>
#include <sys/mman.h>

#define HIGH                1
#define LOW                 0
#define FAIL                -1
#define SUCCESS             0
#define READ_MODE           0
#define WRITE_MODE          1
#define PIN_VALUE_LEN       30
#define ADDR_BUFFER_LEN     35
#define EXPORT_BUFF_LEN     3

void print_error(const char *message, ...) {
    va_list args;
    va_start(args, message);

    fprintf(stderr, "Error: ");
    vfprintf(stderr, message, args);
    fprintf(stderr, "\n");

    va_end(args);
}

int get_file_desc(char *path, int mode){
    int file_desc = open(path, mode);
    if(file_desc == FAIL)
        print_error("failed to open file %s in mode %d", path, mode);
    return file_desc;
}

int export_command(int pin) {
    char buffer[EXPORT_BUFF_LEN];
    ssize_t written_bytes;
    int file_desc = open("/sys/class/gpio/export", O_WRONLY);
    written_bytes = snprintf(buffer, EXPORT_BUFF_LEN, "%d", pin);
    int op_status = write(file_desc, buffer, written_bytes);
    close(file_desc);
    /*if(op_status == FAIL) {
        print_error("failed to export pin %d", pin);
        return FAIL;
    }*/
    return SUCCESS;
}

int unexport_command(int pin) {
    char buffer[EXPORT_BUFF_LEN];
    ssize_t written_bytes;
    int file_desc = open("/sys/class/gpio/unexport", O_WRONLY);
    written_bytes = snprintf(buffer, EXPORT_BUFF_LEN, "%d", pin);
    int op_status = write(file_desc, buffer, written_bytes);
    close(file_desc);
    /*if(op_status == FAIL) {
        print_error("failed to unexport pin %d", pin);
        return FAIL;
    }*/
    return SUCCESS;
}

int pinMode(int pin, int mode) {
    char gpio_path[ADDR_BUFFER_LEN];
    snprintf(gpio_path, ADDR_BUFFER_LEN, "/sys/class/gpio/gpio%d/direction", pin);
    int file_desc = get_file_desc(gpio_path, O_WRONLY);
    
    int op_status = SUCCESS;
    if(mode == READ_MODE)
        op_status = write(file_desc, "in", 2);
    else if(mode == WRITE_MODE)
        op_status = write(file_desc, "out", 3);
    else
        print_error("unsupported pin mode %d", mode);
    close(file_desc);

    if(op_status == FAIL) {
        print_error("failed to set mode %d to pin: %d", mode, pin);
        return FAIL;
    }
    return SUCCESS;
}

int digitalWrite(int pin, int value) {
    char pin_path[ADDR_BUFFER_LEN];
    snprintf(pin_path, ADDR_BUFFER_LEN, "/sys/class/gpio/gpio%d/value", pin);
    int file_desc = get_file_desc(pin_path, O_WRONLY); 

    int op_status = SUCCESS;
    if(value == HIGH)
        op_status = write(file_desc, "0", 1);
    else if(value == LOW)
        op_status = write(file_desc, "1", 1);
    close(file_desc);

    if(op_status == FAIL) {
        print_error("failed to write to file %s", pin_path);
        return FAIL;
    }
    return SUCCESS;
}

int digitalRead(int pin) {
    char pin_value_path[PIN_VALUE_LEN];
    snprintf(pin_value_path, PIN_VALUE_LEN, "/sys/class/gpio/gpio%d/value", pin);
    int file_desc = get_file_desc(pin_value_path, O_RDONLY);
    
    char value_str[3];
    int op_status = read(file_desc, value_str, 3);
    close(file_desc);

    if(op_status == FAIL) {
        print_error("failed to read file %s", pin_value_path);
        return FAIL;
    }
    return atoi(value_str);
}

int blink(int pin, float freq, double duration) {
    if(freq > 0) {
        float period = 1/freq;

        clock_t start_time = clock();
        float elapsed_time = 0;
        while(elapsed_time < duration){
            digitalWrite(pin, HIGH);
            sleep(period);
            digitalWrite(pin, LOW);
            sleep(period);
            elapsed_time += 2*period;
        }
    }
    else{
        print_error("frequency value must be greater than 0");
        return FAIL;
    }
    return SUCCESS;
}