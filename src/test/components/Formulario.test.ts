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
    it('Debe ser visible la alerta cuando showAlert = true', () => {
        const wrapper = createWrapper({
            alerta: {
                mensaje: 'Este mensaje debe verse',
                tipo: 'error'
            },
            showAlert: true,
        });

        expect(wrapper.text()).toContain('Este mensaje debe verse');
    })

    //TODO:Probar el estado de edición (isEditing: true)
    it('Debe de ser visible el texto "Actualizar" cuando isEditing:true', () => {
        const wrapper = createWrapper({
            isEditing: true,
        });

        const button = wrapper.get('input[type=submit]');

        expect(button.attributes('value')).toBe('Actualizar');
        expect(button.classes()).toContain('bg-indigo-700')
    })

    //TODO:Probar la Reactividad y Enlace de Datos (v-model / defineModel) 
    it('Probar la reactividad de algunos inputs del formulario', async () => {
        const wrapper = createWrapper({
            mascota: '',
            propietario: '',
            alta: '',
            email: '',
            sintomas: '',
        });

        await wrapper.find('#mascota').setValue('Yogui')
        await wrapper.find('#email').setValue('gonzalo@gmail.com');

        expect(wrapper.emitted('update:mascota')).not.toBeUndefined()
        expect((wrapper.emitted('update:mascota') ?? [])[0]).toEqual(['Yogui'])

        expect(wrapper.emitted('update:email')).not.toBeUndefined()
        expect((wrapper.emitted('update:email') ?? [])[0]).toEqual(['gonzalo@gmail.com'])
    })
})