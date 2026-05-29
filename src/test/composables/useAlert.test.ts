import { useAlert } from "../../composables/useAlert"

describe("useAlert", () => {

    test("Debe mensaje ser igual a un string vacio y showAlert igual a false", () => {
        const { alerta, showAlert } = useAlert();
        expect(alerta.mensaje).toBe("");
        expect(showAlert.value).toBe(false);
    });

    test("Debe de reestablecer los valores iniciales al llamar handleAlert", () => {
        const { handleAlert, alerta, showAlert } = useAlert();
        const testText = "Hola Mundo"

        vi.useFakeTimers()

        //Alerta tiene los valores por defecto 
        expect(alerta.mensaje).toBe("");
        expect(alerta.tipo).toBe("error")

        //Llamamos al metodo
        handleAlert(testText, "exito");

        //Verificamos que los valores cambien 
        expect(alerta.mensaje).toBe(testText);
        expect(alerta.tipo).toBe("exito");

        //Al pasar 3 segundo restablecemos a los valores iniciales
        vi.advanceTimersByTime(3000);

        expect(alerta.mensaje).toBe("");
        expect(alerta.tipo).toBe("error");
        expect(showAlert.value).toBe(false);


    })
})