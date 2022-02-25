<template>
    <div class="pretty_input">
        <input type="text" placeholder="請輸入內容" v-model="pretty_input_text" > 
        <label for="input">請輸入內容</label>
        <div class="bottom-line"></div>
        <div v-if="pretty_input_text.length <6 &&pretty_input_text.length!=0" class="err_msg">最少6個字</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pretty_input_text:'',
            err:false
        }
    },
}
</script>
<style scoped>
    .pretty_input{
        width: auto;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-flow: column-reverse;
        flex-flow: column-reverse;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        margin: 20px auto;
    }
    .pretty_input input{
        -webkit-box-ordinal-group: 11;
        order: 10;
        -ms-flex-order: 10;
        outline: none;
        border: none;
        width: 100%;
        padding: 10px 0;
        font-size: 20px;
        border-bottom: 1px solid #d5d5d5;
        text-indent: 10px;
    }
    .pretty_input input::-moz-placeholder{
        opacity: 0;
    }
    .pretty_input input::-webkit-input-placeholder{
        opacity: 0;
    }
    .pretty_input input:-ms-input-placeholder{
        opacity: 0;
    }
    .pretty_input input,.pretty_input label{
        transition: ALL 0.3s;
    }
    .pretty_input label{
        -webkit-box-ordinal-group: 101;
        -ms-flex-order: 100;
        order: 100;
        color: #3f4f5b;
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: translate(10px,40px);
        transform: translate(0px,40px);
        font-weight: 800;
    }
    .pretty_input .bottom-line{
        order: 2;
        width: 0;
        height: 2px;
        background: #658db5;
        transition: all 0.3s;
    }
    .pretty_input input:focus{
        border-bottom-color: #fff;
    }
    .pretty_input input:focus ~ div, .pretty_input input:not(:placeholder-shown)~div{
        width: 100%;
    }
    .pretty_input input:focus+label,.pretty_input input:not(:placeholder-shown)+label{
        color: #52616c;
        -webkit-transform: translate(10px) scale(0.9);
        transform: translate(10px) scale(0.9);
    }
    .err_msg{
        color: red;
        font-size: 10px;
        margin-top: 2%;
        text-align: left;
    }
</style>
