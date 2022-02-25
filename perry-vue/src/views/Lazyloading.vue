<template>
    <div class="LazyLoading_area">
        <h1>LazyLoading</h1>
        {{info}}
    </div>
</template>
<script>
export default {
    name:"lazyloading",
    data(){
        return{
            info:'123',
        }
    },
    created(){
        // this.getData();
        // this.postData();
    },
    methods:{
        getData(){
            this.axios.get('https://localhost:44339/api/First').then(response=>{
                //this.info =response.data;
                console.log(response.data);
            })
        },
        postData(){
            let id =3;
            this.axios.post('https://localhost:44339/api/First',id).then((res) =>{
                console.log(res.data);
            })
        },
    }
}
</script>
<style scoped>
    .LazyLoading_area{
        min-height: 93vh;
        background-color: #f7f5f5;
        color: black;
    }
</style>