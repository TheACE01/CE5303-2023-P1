// Convenient functions
void print_error(const char *message, ...);
int get_file_desc(char *path, int mode);
// Library functions
int export_command(int pin);
int unexport_command(int pin);
int pinMode(int pin, int mode);
int digitalWrite(int pin, int value);
int digitalRead(int pin);
int blink(int pin, float freq, double duration);