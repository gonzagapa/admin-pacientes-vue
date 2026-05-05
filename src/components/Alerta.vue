<script setup lang="ts">
import { computed } from 'vue';

    export interface AlertProps {
        tipo: 'exito' | 'error', 
        mensaje: string 
    }


    const prop = defineProps<AlertProps>()
    
    const styles = computed(()=>{
        return prop.tipo == "error" ? "bg-red-500": "bg-green-600"
    })

</script>
<template>
    <div :class="`shadow-lg p-1 rounded-md ${styles} mb-5`">
        <p class="text-center text-white text-lg">{{ mensaje }}</p>
    </div>
</template>