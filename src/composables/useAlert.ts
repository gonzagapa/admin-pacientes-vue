import { reactive, ref } from "vue"
import type { AlertProps } from "../components/Alerta.vue"

export const useAlert = () => {
    const showAlert = ref(false);
    const alerta = reactive<AlertProps>({
        mensaje: "",
        tipo: "error"
    })

    const handleAlert = (msj: string, tipo: AlertProps['tipo']) => {
        alerta.mensaje = msj;
        alerta.tipo = tipo;
        showAlert.value = true;
        setTimeout(() => {
            alerta.mensaje = ""
            alerta.tipo = "error"
            showAlert.value = false
        }, 3000);
    }

    return {
        showAlert,
        alerta,
        handleAlert
    }
}