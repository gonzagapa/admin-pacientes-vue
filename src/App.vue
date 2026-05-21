<script setup lang="ts">
import { reactive, ref } from 'vue';
import Formulario from './components/Formulario.vue';
import Header from './components/Header.vue'; 
import type { AlertProps } from './components/Alerta.vue';

interface Paciente {
        mascota:string, 
        propietario:string, 
        email:string, 
        sintomas:string,
        alta: string
    }

    const paciente = reactive<Paciente>({
        mascota:'',
        propietario:'',
        alta: '', 
        sintomas:'',
        email:'',
    }) 
    const showAlert = ref(false);
    const pacientes = ref<Paciente[]>([])
    const alerta = reactive<AlertProps>({
            mensaje:"",
            tipo:"error"
    }) 

    const handleSubmit = (event:SubmitEvent)=>{
        
        showAlert.value = true; 
        if(Object.values(paciente).includes('')){
           

            alerta.mensaje = "Tienes un error en el formulario"
            alerta.tipo = "error";
            return;
        }

        alerta.tipo = "exito"; 
        alerta.mensaje = "Todos los datos son correctos";

        pacientes.value.push({...paciente});
        paciente.mascota = '';
        paciente.propietario = '';
        paciente.alta = ''; 
        paciente.sintomas = '';
        paciente.email = '';
    }

 

</script>

<template>
  <div class="mt-5 mx-auto container">
    <Header/>

    <div class="mt-12 mb-10 md:grid md:grid-cols-2 gap-2">
      <div class="">
        <Formulario 
        v-model:mascota="paciente.mascota"
        v-model:propietario="paciente.propietario"
        v-model:email="paciente.email"
        v-model:alta="paciente.alta"
        v-model:sintomas="paciente.sintomas"
        @submit="handleSubmit"
        :alerta="alerta"
        :showAlert="showAlert"
        />
      </div>

      <div class="">
        <h2 class="font-bold text-xl text-center mb-10">Listado de Pacientes</h2>
        <div v-for="paciente in pacientes" class="rounded-md p-4 bg-white shadow-xl mb-3">
          {{ paciente.email }}
        </div>
      </div>

    </div>
  </div>
</template>