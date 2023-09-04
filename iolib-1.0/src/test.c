#include <io_manager.h>
#include <stdio.h>
int main(int argc, char const* argv[] ){
    // Inicializar pin 4 para escribir en el
    export_pin(4);
    set_pin_mode(4, 1);
    write_digital(4, 1);
    // blink en el pin 4 por 5 s
    blink(4, 1, 5);

    // Inicializar pin 17 para leer su valor
    export_pin(17);
    set_pin_mode(17, 0);
    int valor = 0;
    int indice = 0;
    // lectura del pin 10 veces para prueba
    while (indice <= 10)
    {
        valor = read_digital(17);
        printf("Leyendo %d de %d\n", valor, 17);
        indice++;
        sleep(1);
    }

    // retirar los pines
    unexport_pin(4);
    unexport_pin(17);
    return 0;
}
