<template lang='pug'>
  v-container
    v-row
      AnimalBar(:categoryAnimals='categoryAnimals', v-on:changeBar='reloadAPI($event)')
      AnimalContent(:facts='facts')
</template>

<script>
const AnimalBar = () => import('@/components/animalBar')
const AnimalContent = () => import('@/components/animalContent')
export default {
  components: { AnimalBar, AnimalContent },

  data(){
    return{
      categoryAnimals: this.$store.state.categoryAnimals
    }
  },

  async asyncData({$axios, store}){
    const countComputed = store.getters['finActiveRadioButton']
    let fact
    if(countComputed){
      fact = await $axios.get('https://jservice.io/api/random', {
      params: {
        count: countComputed.value
      },
    })
      .catch(function (error) {
        console.log(error);
        
      });
    }else{
      fact = false
    }
    let facts = fact ? fact.data : []
    return {facts}
  },
  methods:{
    async reloadAPI(e){
      const fact = await this.$axios.get('https://jservice.io/api/random', {
      params: {
        count: e
      },
    })
      .catch(function (error) {
        console.log(error);
        
      });
      this.facts = fact.data
    }
  }
}
</script>
