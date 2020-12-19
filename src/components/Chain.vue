<template>
    <div>
        <div>
                <slot name="heading"></slot>
                <slot name="blocks"></slot>
                <slot name="trans"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.chain{
    padding: 40px;
    background: #FFB54E;
    color: white;
    border-radius: 30px 
}
.chain h2{
    margin-bottom: 25px
}
.chain h3{
    font-weight: 400
}
.chain .blocks{
    margin-bottom: 20px
}
.chain h4{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 300
}
.chain h4 span{
    font-weight: 600
}
@media(max-width: 600px){
    .chain{
        padding: 20px
    }
}
</style>