<template>
    <div class="block">
        <h1 class="heading">Top Cryptos from the API</h1>

        <div class="chains">
            <Chain class="chain">
                <h2 slot="heading">{{bitcoin.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in bitcoin.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in bitcoin.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>

            <Chain class="chain">
                <h2 slot="heading">{{ethereum.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in ethereum.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in ethereum.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>

            <Chain class="chain">
                <h2 slot="heading">{{tron.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in tron.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in tron.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>

            <Chain class="chain">
                <h2 slot="heading">{{binance.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in binance.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in binance.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>

            <Chain class="chain">
                <h2 slot="heading">{{conflux.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in conflux.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in conflux.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>

            <Chain class="chain">
                <h2 slot="heading">{{algorand.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in algorand.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in algorand.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>

            <Chain class="chain">
                <h2 slot="heading">{{libra.__typename}}</h2>
                <div class="blocks" slot="blocks" v-for="(item, index) in libra.blocks" :key="index">
                    <h3>Blocks</h3>
                    <h4><span>counts : </span> {{item.count}}</h4>
                </div>
                <div class="trans" slot="trans" v-for="(item, index) in libra.transactions" :key="index">
                    <h3>Transactions</h3>
                    <h4><span>counts : </span> $ {{item.count}}</h4>
                    <h4><span>amounts : </span> $ {{item.amount || "N/A"}}</h4>
                </div>
            </Chain>
        </div>

        <div class="foot">
            <h1>Need more info ? check the <a href="" target="_blank">bitquery API</a></h1>
            <div class="links">
                <a href="https://github.com/devdanielcodes" target="_blank">Developer</a>
                <a href="https://github.com/devdanielcodes/bitquery-showcase" target="_blank">Github</a>
            </div>
            
        </div>



    </div>
</template>

<script>
import Chain from "./Chain.vue"
import gql from "graphql-tag"

export default {
    components:{
        Chain
    },
 apollo:{
     bitcoin: gql`
     query{
        bitcoin{
            __typename
            
            blocks{
            count
            __typename
            }
            transactions{
            count
            __typename
            }
        }
    }`,
    ethereum: gql`
        query{
            ethereum{
                __typename
                
                blocks{
                count
                __typename
                }
                transactions{
                __typename
                count
                amount
                }
            }
        }`,
        tron: gql`
            query{
                tron{
                    __typename
                    
                    blocks{
                    count
                    __typename
                    }
                    transactions{
                    count
                    __typename
                    }
                }
            } `,
            binance: gql`
            query{
                binance{
                    __typename
                    
                    blocks{
                    count
                    __typename
                    }
                    transactions{
                    count
                    __typename
                    }
                }
            }
            `,
            conflux: gql`
                query{
                    conflux{
                        __typename
                        
                        blocks{
                        count
                        __typename
                        }
                        transactions{
                        count
                        __typename
                        amount
                        }
                    }
                }
            `,
            algorand: gql`
                query{
                    algorand{
                        __typename
                        
                        blocks{
                        count
                        __typename
                        }
                        transactions{
                        count
                        __typename
                        }
                    }
                }
            `,
            libra: gql`
                query{
                    libra{
                        __typename
                        
                        blocks{
                        count
                        __typename
                        }
                        transactions{
                        count
                        __typename
                        }
                    }
                }
            `,
 }
}
</script>


<style scoped>

.heading{
    width: 90%;
    margin: 40px auto;
    padding: 20px 0;
    border-bottom: 2px solid
}
.chains{
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
}
.foot{
    position: relative;
    padding: 40px;
    background: #FFB54E;
    margin-top: 40px;
    color: white;
}
.foot .links{
    margin-top: 60px;
    margin-right: auto;
    width: 200px;
}
.foot .links a{
    margin-right: 10px;
    color: black;
    font-size: 18px;
    text-decoration: none;
}
@media(max-width: 680px){
    .chains{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 40px;
    }
}
@media(max-width: 600px){
    .heading{
        font-size: 20px
    }
}
</style>
