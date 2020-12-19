<template>
    <div>
        <router-link to="/" class="logo"><img src="../assets/logo.svg" alt=""></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.logo{
   padding: 0px 0px 0px 50px;
  height: 10vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #828282;
  width: 100px
}
@media(max-width: 500px){
    .logo{
        padding: 0px 20px;
    }
}
</style>