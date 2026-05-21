<script setup lang="ts">
    import Alerta, { type AlertProps } from './Alerta.vue';
    interface Props {
        alerta:AlertProps, 
        showAlert:boolean
    }

    const props = defineProps<Props>();  

    const emit = defineEmits(['submit'])

    const mascota = defineModel<string>("mascota"); 
    const propietario = defineModel<string>("propietario"); 
    const alta = defineModel<string>("alta"); 
    const email = defineModel<string>("email"); 
    const sintomas = defineModel<string>("sintomas");  


</script>


<template>
    <div class="text-center">
        <h2 class="font-bold text-xl">Seguimiento pacientes</h2>
        <p class="mt-3">Añade Pacientes y <span class="text-indigo-600">Administralos</span></p>

        <form @submit.prevent="$emit('submit')" action="" class="bg-white shadow-xl rounded-md mt-10 py-8 px-3">
            
            <Alerta :mensaje="alerta.mensaje" :tipo="alerta.tipo" v-if="showAlert"/>
            
            <div class="mb-5 flex flex-col gap-3">
                <label for="mascota" class="text-slate-700 uppercase text-left font-bold">
                    Nombre mascota
                </label>
                <input v-model="mascota"  placeholder="Nombre de la mascota" type="text" id="mascota" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>

            <div class="mb-5 flex flex-col gap-3">
                <label for="propietario" class="text-slate-700 uppercase text-left font-bold">
                    Nombre del propietario
                </label>
                <input v-model="propietario" placeholder="Nombre del propietario" type="text" id="propietario" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>

            <div class="mb-5 flex flex-col gap-3">
                <label for="email" class="text-slate-700 uppercase text-left font-bold">
                    Email
                </label>
                <input v-model="email" placeholder="Email del propietario" type="email" id="email" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>

            <div class="mb-5 flex flex-col gap-3">
                <label for="alta" class="text-slate-700 uppercase text-left font-bold">
                    Alta
                </label>
                <input v-model="alta" placeholder="Email del propietario" type="date" id="alta" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>
            
            <div class="mb-5 flex flex-col gap-3">
                <label for="sintomas" class="text-slate-700 uppercase text-left font-bold">
                    Síntomas
                </label>

                <textarea  
                placeholder="Describe los sintomas" 
                id="sintomas" 
                v-model="sintomas"
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400 h-[200px]"></textarea>
            </div>

            <input type="submit" class="bg-indigo-600 rounded-md p-2 w-full text-white hover:text-black hover:bg-indigo-600/70 hover:cursor-pointer transition-colors" value="Registrar">
            


        </form> 
    </div>

</template>

