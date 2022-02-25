<template>
    <div class="hover_pack d-flex flex-column">
        <div class="d-flex flex-row">
            <div class="item d-flex flex-column">
                <div class="hover_top">
                    <span class="align-middle">Image hover</span>
                </div>
                <div class="hover_bottom">
                    <img_hover/>
                </div>
            </div>
            <div class="item d-flex flex-column">
                <div class="hover_top">
                    <span class="align-middle">text</span>
                </div>
                <div class="hover_bottom">
                    <text_hover/>
                </div>
            </div>
        </div>
        <div class="d-flex flex-row mt-2">
            <div class="item d-flex flex-column">
                <div class="hover_top">
                    <span class="align-middle">input</span>
                </div>
                <div class="hover_bottom">
                    <pretty_input/>
                </div>
            </div>
            <div class="item d-flex flex-column">
                <div class="hover_top">
                    <span class="align-middle">Rate</span>
                </div>
                <div class="hover_bottom">
                    <Rate/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import img_hover from './image_hover.vue';
import text_hover from './text_hover.vue';
import pretty_input from './pretty_input.vue';
import Rate from './rate.vue';
export default {
    components:{
        img_hover,
        text_hover,
        pretty_input,
        Rate
    }
}
</script>
<style scoped>
    .hover_pack{
    }
    .item{
        width: 50%;
        height: 275px;
        margin: 2px 5px;
        background-color: white; 
        border-radius: 4px; 
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        display: flex;
        justify-content: center; 
        align-items: center; 
        padding: 20px;
    }
    .hover_top{
        height: 12%;
        width: 100%;
        padding:0 10px 5px 10px;
        border-bottom: 2px solid #e6ebf5;
        box-sizing: border-box;
        font-size: 18px;
        color: #303133; display: flex;
        justify-content: center; 
        align-items: center; 
    }
    .hover_bottom{
        min-height: 70%;
        width: 100%;
        padding: 20px;
    }
    .align-middle{
        margin-bottom: 8%;
    }
</style>