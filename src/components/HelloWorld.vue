<template>
  <div class="landing">
    <div class="main">
      <h1>BLOCK-Q</h1>
      <p>transactions and blocks information gotten from the top Cryptos in the world</p>
      <router-link to="/blockchains">See Information</router-link>
    </div>
    <div class="foot">
      <p>Created with Vue and <a href="https://explorer.bitquery.io/" target="_blank">Bitquery GraphQL API</a> </p>
    </div>
    <img class="bitcoin" src="https://res.cloudinary.com/devdaniel/image/upload/v1608348341/bitcoin_wfbnka.png" alt="">
    <img class="eth" src="https://res.cloudinary.com/devdaniel/image/upload/v1608348341/ethereum_hvv0t2.png" alt="">
    <img class="hand" src="https://res.cloudinary.com/devdaniel/image/upload/v1608348343/Rectangle_rdv3tz.svg" alt="">
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.main{
  padding: 0px 0px 0px 50px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center
}
.main h1{
  font-size: 140px

}
.main p{
  color: #828282;
  font-size: 24px
}
.main a{
  margin-top: 25px;
  padding: 15px 20px;
  background: #FFB54E;
  color: white;
  text-decoration: none
}
.foot{
  padding: 0px 0px 0px 50px;
  height: 10vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #828282;
}
.foot a{
  color: black
}
.hand{
  position: absolute;
  bottom: 0;
  right: 0;
}
.bitcoin{
  position: absolute;
  top: 100px;
  right: 100px;
  z-index: -1;
}
.eth{
  position: absolute;
  bottom: 50px;
  right: 300px;
  z-index: -1;
}

@media (max-width: 914px){
   .main h1{
    font-size: 60px
  }
  .main p{
    font-size: 18px
  }
  .hand{
    width: 100px;
    z-index: -1;
  }
  .bitcoin{
    position: fixed;
    top: 100px;
    right: 100px;
    z-index: -1;
    width: 200px;
  }
  .eth{
    position: fixed;
    bottom: 50px;
    right: 100px;
    z-index: -1;
    width: 200px;
  }
}
@media (max-width: 500px){
  .main{
    padding: 0px 20px
  }
  .main h1{
    font-size: 40px
  }
  .main p{
    font-size: 14px
  }
  .foot{
    padding: 0px 0px 0px 20px;
    font-size: 14px
  }
}
</style>