import { mount } from '@vue/test-utils';
import Alerta from '../../components/Alerta.vue';

describe('Alerta.vue', () => {

    const mensajeError = 'Ocurrio un error';

    test('Renderizar Alerta con clase error si recibe un propr "error"', () => {
        const wrapper = mount(Alerta, {
            props: {
                tipo: 'error',
                mensaje: mensajeError
            }
        });

        expect(wrapper.classes()).toContain('bg-red-500')
        expect(wrapper.text()).toContain(mensajeError)
    })
    test('Renderiza Alert con clase bg-green-600 si recibe prop "exito', () => {
        const wrapper = mount(Alerta, {
            props: {
                tipo: 'exito',
                mensaje: 'Exito'
            }
        });

        expect(wrapper.text()).toContain('Exito');
        expect(wrapper.classes()).toContain('bg-green-600')
    })
})