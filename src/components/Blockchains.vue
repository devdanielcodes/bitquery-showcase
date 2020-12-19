<template>
<div>
    <div class="hello" v-for="(item, index) in ethereum.blocks" :key="index">
      {{ethereum.__typename}}
      {{item.__typename}}
      {{item.count}}
    </div>
</div>
  
</template>

<script>
import gql from "graphql-tag"

export default {
  apollo:{
    ethereum: gql`
      query{
        ethereum {
          
          __typename
          
          blocks{
            count
            __typename
          }
          transactions{
            __typename
            count
          }
          transfers{
            __typename
            count
          }
        }
      


        bitcoin{
          __typename
        
          transactions{
            count
            __typename
          }
          inputs{
            count
            __typename
          }
        }

        binance {
          
          __typename
          
          blocks{
            count
            __typename
          }
          transactions{
            __typename
            count
          }
          transfers{
            __typename
            count
          }
        }



        algorand {
          
          __typename
          
          blocks{
            count
            __typename
          }
          transactions{
            __typename
            count
          }
          transfers{
            __typename
            count
          }
        }

        conflux {
          
          __typename
          
          blocks{
            count
            __typename
          }
          transactions{
            __typename
            count
          }
          transfers{
            __typename
            count
          }
        }


        tron {
          
          __typename
          
          blocks{
            count
            __typename
          }
          transactions{
            __typename
            count
          }
          transfers{
            __typename
            count
          }
        }
      }
    `
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
