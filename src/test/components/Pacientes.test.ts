import { mount } from "@vue/test-utils"
import Pacientes from "../../components/Pacientes.vue"

describe('Pacientes', () => {
    const paciente = {
        mascota: 'yogui',
        propietario: 'Casas palenque',
        email: 'juan@gmail.com',
        sintomas: 'me siento mal',
        alta: 'aaaa',
        id: '1'
    }
    test('Debe de renderizar los valores del Paciente', () => {
        const wrapper = mount(Pacientes, {
            props: {
                paciente
            }
        });

        expect(wrapper.text()).toContain('juan@gmail.com')
    });

    test('Debe de emitir el evento "Editar" al presionar el respectivo boton', async () => {
        const wrapper = mount(Pacientes, {
            props: {
                paciente
            }
        });

        await wrapper.get('[data-test="edit"]').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('edit') //objeto de eventos emitidos;
    });

    test('Debe de emitir el evento "Editar" al presionar el respectivo boton', async () => {
        const wrapper = mount(Pacientes, {
            props: {
                paciente
            }
        });

        await wrapper.get('[data-test="delete"]').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('delete') //objeto de eventos emitidos;
    })
})