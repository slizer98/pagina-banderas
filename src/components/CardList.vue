<template>
  <div class="row">
    <div class="col-12" v-for="(pais, index) in paises" :key="index">
        {{pais.name}}
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex' 

export default {

    setup() {

        const store = useStore()
        const paises = computed(() => {
            return store.state.paises
        })
        
        onMounted(() => {
            // console.log(store.state.paises)
            store.dispatch('getPaises')
        })

        return {
            paises
        }
    }
}
</script>

<style>

</style>