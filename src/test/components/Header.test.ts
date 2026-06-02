import { mount } from "@vue/test-utils"
import Header from "../../components/Header.vue"

describe('Header.vue', () => {
    test('Debe de ser igual al snapshot', () => {
        const wrapper = mount(Header)

        expect(wrapper.html()).toMatchInlineSnapshot(`"<h1 class="font-black text-5xl text-center"> Seguimiento de pacientes <span class="text-indigo-600">Veterinaria</span></h1>"`)
    })
})