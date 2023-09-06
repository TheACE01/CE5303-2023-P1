// Convenient functions
void print_error(const char *message, ...);
int get_file_desc(char *path, int mode);
// Library functions
int export_pin(int pin);
int unexport_pin(int pin);
int set_pin_mode(int pin, int mode);
int write_digital(int pin, int value);
int read_digital(int pin);
int blink(int pin, float freq, double duration);