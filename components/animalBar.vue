<template lang="pug">
    .toolbar
        v-card-subtitle Выберите колличество фактов
        v-radio-group( max=1, v-model="activeRadio" column=false, row=true)
            v-radio(@change='changeBar(item.value)' :label='item.lable', :value='item.value', v-for='(item, index) in categoryAnimals' :key='index')
</template>


<style lang="scss" scoped>
    .toolbar{
        width: 100%;
        border-bottom: 2px solid gray;
        border-radius: 20px;
        padding: 0 20px;
        box-shadow: 0px 7px 20px -11px #000;
        margin: 10px 0 50px 0;
    }
</style>

<script>
export default {
    name:'AnimalBar',
    methods:{
        changeBar(id){
            this.$emit('changeBar', id)
        }
    },
    computed:{
        activeRadio:{
            get: function () {
                if(this.$store.getters['finActiveRadioButton']){
                    return this.$store.getters['finActiveRadioButton'].value
                }else{
                    return null
                }
            
            },
            set: function (afterActive) {
                this.$store.commit('setActiveRadioButton', afterActive)
            }
        }
    },
    props:{
        categoryAnimals:Array
    },
}
</script>