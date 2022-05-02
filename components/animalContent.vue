<template lang="pug">
    .animalContainer
        v-card( max-width='350px', width='100%', min-height='150px', v-for="(item, index) in facts", :key='index').animalContainer__cardContainer
            .animalContainer__card
                | {{item.question}}
</template>

<style lang="scss" scoped>
    .animalContainer{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &__cardContainer{
            margin: 0 0 20px 0;
        }

        &__card{
            padding: 10px;
            font-size: 16px;
            font-family: 'Montserrat Medium', Arial, sans-serif;
            

        }
    }
</style>

<script>
export default {
    name: "AnimalContent",
    props: {
        facts: Array
    },
}
</script>