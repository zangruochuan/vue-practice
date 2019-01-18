<template>
  <div>
      <pre @click="getdata">{{message}}</pre>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name:'ajaxInVue',
    methods:{
        getdata:function(){
            let api = {
                method:"get",
                url:"https://www.v2ex.com/api/topics/hot.json",
                headers:{
                    "Access-Control-Allow-Origin":"*",
                    "Access-Control-Allow-Methods":"GET,OPTIONS"
                },
                withCredentials:true
            }
            axios.request(api).then((Response)=>{
                console.log(Response.data);
                //this.message = Response.data;
                }
            )
        }
    },
    data() {
        return {
            message:"123"
        }
    },
}
</script>