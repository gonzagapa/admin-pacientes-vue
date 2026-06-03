import { mount } from '@vue/test-utils';
import Formulario from '../../components/Formulario.vue';


describe('Formulario.vue', () => {

    //Funcion factory para evitar repetir la configuracion 
    const createWrapper = (props = {}) => {
        return mount(Formulario, {
            props: {
                alerta: {
                    mensaje: '',
                    tipo: 'error'
                },
                showAlert: false,
                isEditing: false,
                ...props
            }
        })
    }


    it('Debe de ser igual al snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Debe de no aparecer la Alerta y aparecer el texto "Registrar" al renderizar el componente', () => {
        const wrapper = createWrapper({
            alerta: {
                mensaje: 'Este mensaje no debe de mostrarse',
                tipo: 'error'
            }
        })


        expect(wrapper.text()).not.toContain('Este mensaje no debe de mostrarse');
        expect(wrapper.find("input[type=submit]").attributes('value')).toBe('Registrar');
    });

    it('Debe de emitirse el evento submit al pasar un evento formulario', async () => {
        const wrapper = createWrapper()
        await wrapper.find("form").trigger("submit");
        expect(wrapper.emitted()).toHaveProperty("submit");
    });

    //TODO:Probar cuando la Alerta es visible (showAlert: true)
    //TODO:Probar el estado de edición (isEditing: true)
    //TODO:Probar la Reactividad y Enlace de Datos (v-model / defineModel)
})