<template>
    <div class="md:w-1/2 text-center">
        <h2 class="font-bold text-xl">Seguimiento pacientes</h2>
        <p class="mt-3">Añade Pacientes y <span class="text-indigo-600">Administralos</span></p>

        <form action="" class="bg-white shadow-xl rounded-md mt-10 py-8 px-3">

            <div class="mb-5 flex flex-col gap-3">
                <label for="mascota" class="text-slate-700 uppercase text-left font-bold">
                    Nombre mascota
                </label>
                <input placeholder="Nombre de la mascota" type="text" id="mascota" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>

            <div class="mb-5 flex flex-col gap-3">
                <label for="propietario" class="text-slate-700 uppercase text-left font-bold">
                    Nombre del propietario
                </label>
                <input placeholder="Nombre del propietario" type="text" id="propietario" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>

            <div class="mb-5 flex flex-col gap-3">
                <label for="email" class="text-slate-700 uppercase text-left font-bold">
                    Email
                </label>
                <input placeholder="Email del propietario" type="email" id="email" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>

            <div class="mb-5 flex flex-col gap-3">
                <label for="alta" class="text-slate-700 uppercase text-left font-bold">
                    Alta
                </label>
                <input placeholder="Email del propietario" type="date" id="alta" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400">
            </div>
            
            <div class="mb-5 flex flex-col gap-3">
                <label for="sintomas" class="text-slate-700 uppercase text-left font-bold">
                    Síntomas
                </label>

                <textarea placeholder="Describe los sintomas" id="sintomas" 
                class="border border-slate-400 rounded-md px-2 py-1 placeholder:text-slate-400 h-[200px]"></textarea>
            </div>

            


        </form> 
    </div>

</template>

<script setup lang="ts">

</script>
