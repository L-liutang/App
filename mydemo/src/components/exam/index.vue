<template>
<div class="index">
     <headerr></headerr>
     <div>
        <div class="carousel">
            <carousel></carousel>
        </div>
        <container></container>
        <container1></container1>
       
    </div>  
</div>
</template>
<script>
    import carousel from "./Carousel.vue"
    import container from "./Container.vue"
    import container1 from "./Container1.vue"
    import header from "./header.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
            "carousel":carousel,
            "container":container,
            "container1":container1,
            "headerr":header,
        },
}
</script>
<style scoped>
*{
        padding:0;
        margin:0;
    }
    .index{
        background-color: #F7F7F5
    }
</style>

