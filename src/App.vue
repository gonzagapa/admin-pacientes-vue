<script setup lang="ts">
import { reactive, ref } from 'vue';
import Formulario from './components/Formulario.vue';
import Header from './components/Header.vue'; 
import type { AlertProps } from './components/Alerta.vue';
import type { Paciente } from './types';
import Pacientes from './components/Pacientes.vue';



    const paciente = reactive<Paciente>({
        id:'',
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
        const pacienteAux = { ...paciente, id: paciente.id || Date.now().toString() }; 
        if(Object.values(pacienteAux).includes('')){
            alerta.mensaje = "Tienes un error en el formulario"
            alerta.tipo = "error";
            setTimeout(() => {
                alerta.mensaje = ""
                alerta.tipo = "error"
                showAlert.value = false
            }, 3000);
            return;
        }

        alerta.tipo = "exito"; 
        alerta.mensaje = "Cambios guardados correctamente";
        setTimeout(() => {
            alerta.mensaje = ""
            alerta.tipo = "error"
            showAlert.value = false
        }, 3000);

        //Caso que ya exista el paciente 
        const indexPaciente = pacientes.value.findIndex( paciente => paciente.id === pacienteAux.id); 
        if(indexPaciente > -1){
          pacientes.value[indexPaciente] = {...pacienteAux}
        //Caso que no exista el pacienrte
        }else{
          pacientes.value.push({...pacienteAux});
        }

        paciente.mascota = '';
        paciente.propietario = '';
        paciente.alta = ''; 
        paciente.sintomas = '';
        paciente.email = '';
        paciente.id = '';
    } 

    const handleEdit = (id:string)=>{
      const findPaciente = pacientes.value.find(p => p.id === id) 
      if(!findPaciente) return;  

      paciente.id = findPaciente.id;
      paciente.mascota = findPaciente.mascota;
      paciente.propietario = findPaciente.propietario;
      paciente.alta = findPaciente.alta;
      paciente.sintomas = findPaciente.sintomas;
      paciente.email = findPaciente.email; 
    }
    const handleDelete = (id:string)=>{
      pacientes.value = pacientes.value.filter(paciente => paciente.id !== id)      
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
       <Pacientes 
       v-for="paciente in pacientes" 
       :paciente="paciente"
       @edit="handleEdit"
       @delete="handleDelete"
       />
      </div>

    </div>
  </div>
</template>