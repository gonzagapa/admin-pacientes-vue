import { computed, reactive, ref } from "vue";
import type { Paciente } from "../types";
import { useAlert } from "./useAlert";

export const useApp = () => {
    const paciente = reactive<Paciente>({
        id: '',
        mascota: '',
        propietario: '',
        alta: '',
        sintomas: '',
        email: '',
    })


    const pacientes = ref<Paciente[]>([])
    const { showAlert, alerta, handleAlert } = useAlert();
    const handleSubmit = () => {


        const pacienteAux = { ...paciente, id: paciente.id || Date.now().toString() };
        if (Object.values(pacienteAux).includes('')) {
            handleAlert("Todos los campos son obligatorios", "error");
            return;
        }

        //Caso que ya exista el paciente 
        const indexPaciente = pacientes.value.findIndex(paciente => paciente.id === pacienteAux.id);
        if (indexPaciente > -1) {
            pacientes.value[indexPaciente] = { ...pacienteAux }
            //Caso que no exista el pacienrte
        } else {
            pacientes.value.push({ ...pacienteAux });
        }

        limpiarForm();
        handleAlert("Cambios guardados correctamente", "exito")
    }

    const limpiarForm = () => {
        paciente.mascota = '';
        paciente.propietario = '';
        paciente.alta = '';
        paciente.sintomas = '';
        paciente.email = '';
        paciente.id = '';
    }

    const handleEdit = (id: string) => {
        const findPaciente = pacientes.value.find(p => p.id === id)
        if (!findPaciente) return;

        Object.assign(paciente, findPaciente)
    }
    const handleDelete = (id: string) => {
        pacientes.value = pacientes.value.filter(paciente => paciente.id !== id)
        limpiarForm();
    }

    const isEditing = computed(() => {
        return paciente.id !== '';
    });

    return {
        paciente,
        pacientes,
        showAlert,
        alerta,
        handleAlert,
        handleSubmit,
        limpiarForm,
        handleEdit,
        handleDelete,
        isEditing
    }
}