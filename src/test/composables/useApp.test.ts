import { useAlert } from "../../composables/useAlert"
import { useApp } from "../../composables/useApp"

const { handleAlertMock } = vi.hoisted(() => {
    return {
        handleAlertMock: vi.fn()
    }
})

//TODO: Estudiar mock de imports y hoist
//Hacemos un mock total sobre la implementacion de useAlert
vi.mock('../../composables/useAlert', async (importOriginal) => {
    const actual = await importOriginal<typeof import('../../composables/useAlert')>()
    return {
        ...actual,
        useAlert: () => {
            const original = actual.useAlert();

            return {
                ...original,
                handleAlert: handleAlertMock
            }
        }
    }

})

describe('useApp', () => {

    test('debe de arrojar los valores iniciales', () => {
        const { paciente, pacientes, isEditing } = useApp()

        expect(paciente).toEqual({
            id: '',
            mascota: '',
            propietario: '',
            alta: '',
            sintomas: '',
            email: '',
        })

        expect(pacientes.value.length).toBe(0)
        expect(isEditing.value).toBe(false)
    });

    test('Debe state paciente cambiar de valor al llamar handleEdit', () => {
        const { paciente, pacientes, handleEdit } = useApp();

        pacientes.value.push({
            id: '1',
            mascota: 'Firulais',
            propietario: 'Juan',
            alta: '2022-01-01',
            sintomas: 'Tos',
            email: 'example.com',
        });

        handleEdit('1');
        expect(paciente).not.toEqual({
            id: '',
            mascota: '',
            propietario: '',
            alta: '',
            sintomas: '',
            email: '',
        });

        expect(paciente.id).toBe('1');



    });

    test('Debe state pacientes no tener el valor eliminado', () => {
        const { pacientes, handleDelete } = useApp();

        pacientes.value.push({
            id: '1',
            mascota: 'Firulais',
            propietario: 'Juan',
            alta: '2022-01-01',
            sintomas: 'Tos',
            email: 'example.com',
        });
        handleDelete('1');
        expect(pacientes.value.length).toBe(0)
    });

    test('Debe handleSubmit llamar handleAlert si el paciente tiene campos vacios', () => {

        const { handleSubmit } = useApp()

        handleSubmit();
        expect(handleAlertMock).toHaveBeenCalled()
        expect(handleAlertMock).toHaveBeenCalledWith('Todos los campos son obligatorios', 'error')
    })


})