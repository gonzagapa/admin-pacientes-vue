<script setup lang="ts">
import Formulario from './components/Formulario.vue';
import Header from './components/Header.vue'; 
import Pacientes from './components/Pacientes.vue';
import { useApp } from './composables/useApp';


const {paciente,
  pacientes,
  showAlert,
  alerta,
  handleSubmit,
  handleEdit,
  handleDelete,
  isEditing} = useApp()

 
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
        :isEditing="isEditing"
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