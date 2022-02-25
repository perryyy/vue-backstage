<template>
    <div class="btn_pack">
        <div class="btn_top">
            <span class="align-middle">Buttons</span>
        </div>
        <div class="btn_bottom">
            <div class="row mt-3">
                <div class="col-12 mb-2"><button class="btn_size btn_Dark">dark</button></div>
                <div class="col-12 mb-2"><button class="btn_size btn_primary">primary</button></div>
                <div class="col-12 mb-2"><button class="btn_size btn_danger">danger</button></div>
                <div class="col-12 mb-2"><button class="btn_size btn_success">success</button></div>
                <div class="col-12 mb-2"><button class="btn_size btn_Info">Info</button></div>
                <div class="col-12 mb-2"><button class="btn_size btn_warning">warning</button></div>
            </div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
    .btn_pack{
        display: flex;
        flex-direction: column;
    }
    .btn_top{
        min-height: 18%;
        width: 100%;
        padding: 10px 10px;
        border-bottom: 2px solid #e6ebf5;
        box-sizing: border-box;
        font-size: 24px;
        color: #303133;
    }
    .btn_bottom{
        min-height: 70%;
        width: 100%;
        padding: 20px;
    }
    .btn_size{
        text-align: center;
        padding: 5px;
        font-size: 24px;
        width: 50%;
        background-color: white;
        border-radius: 8px;
        margin-bottom: 10px;
    }
    .btn_success{
        border-color:#80b5a7;
        border-style: solid;
        color: #80b5a7;
        background-color: white;
        transition:  0.5s ease-in;
    }
    .btn_success:hover{
        box-shadow: inset 300px 0px 0px 0px #80b5a7;
        color: white;
        cursor: pointer;
    }
    .btn_primary{
        border: 2px solid #3a71a8;
        color: #3a71a8;
        transition:  0.5s ease-in;
    }

    .btn_primary:hover{
        box-shadow: inset 300px 0px 0px 0px #3a71a8;
        background-color: #3a71a8;
        color: white;
        cursor: pointer;
    }
    .btn_danger{
        border:2px solid #e65d6e;
        color: #e65d6e;
        transition:  0.5s ease-in;
        position: relative;
        z-index: 1;
    }

    .btn_danger:hover{
        color: #fff;
        cursor: pointer;
    }

    .btn_danger:before{
        background-color: #e65d6e;
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        bottom: 0;
        transition: 0.5s all ease;
    }

    .btn_danger:hover::before{
        transition: 0.5s all ease;
        left: 0;
        right: 0;
        z-index: -1;
    }

    .btn_Dark{
         border: 2px solid #324157;
        color: #324157;
        transition:  0.5s ease-in;
    }
    .btn_Dark:hover{
        box-shadow: inset 300px 0px 0px 0px #324157;
        color: white;
        cursor: pointer;
    }
    .btn_Info{
        border:2px solid  #4ab7bd;
        color:  #4ab7bd;
        transition:  0.5s ease-in;
        position: relative;
        z-index: 1;
    }

    .btn_Info:hover{
        color: #fff;
        cursor: pointer;
    }

    .btn_Info:before{
        background-color: #4ab7bd;
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        bottom: 0;
        transition: 0.5s all ease;
    }
    .btn_Info:hover::before{
        transition: 0.5s all ease;
        left: 0;
        right: 0;
        z-index: -1;
    }
    .btn_warning:hover::before{
        transition: 0.5s all ease;
        left: 0;
        right: 0;
        z-index: -1;
    }
    .btn_warning{
         border: 2px solid #fec171;
        color:#fec171;
        transition:  0.5s ease-in;
    }
    .btn_warning:hover{
        box-shadow: inset 300px 0px 0px 0px #fec171;
        color: white;
        cursor: pointer;
    }
</style>