<template>
    <div class="text_hover">
        <p class="text_content">HelloPerry</p>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .text_hover{
        margin-top: 20%;
        display: flex;
        justify-content: center; 
        align-items: center; 
    }
    .text_content{
        font-weight: 800;
        color: #157fe9;
        transition:  0.5s ease-in; 
        border-right: 2px solid transparent;
        animation: typing 3.5s steps(15, end), blink-caret .75s step-end infinite;
        overflow: hidden;
    }
    @keyframes typing {
        from { width: 0; }
        to { width: 7em; }
    }
    @keyframes blink-caret {
        from, to { box-shadow: 1px 0 0 0 transparent; }
        50% { box-shadow: 1px 0 0 0; }
    }
    .text_content:hover{
        color:#1becb5;
    }
</style>
