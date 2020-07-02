<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <notifications group="foo" />
  <t-card class="bg-blue-200">
    <p>Search Img Api in unsplash.com</p>
    <!-- {{this.$store.getters.getAll}} -->
  </t-card>

    <br>  

    <!-- Three columns -->
    <div class="flex mb-4">
      <div class="w-1/3 h-12"></div>
      <div class="w-1/3 h-12 text-center">
        <!-- <button >Get</button> -->
        <!-- <t-button variant="primary" @click="getApi()">GET</t-button> -->
        <t-input
          v-on:keyup="getApi()"
          v-model="query"
          base-class="border-2 block w-full shadow-inner bg-yellow-100 focus:outline-none focus:shadow-outline"
        />  
        <!-- <t-button size="lg">Large button</t-button> -->
      </div>
      <div class="w-1/3 h-12">

      </div>
    </div>

    <t-table
    :headers="['Id', 'Width', 'Height', 'Download Links', 'Img', 'Action']"
    :data="data.results"
  >
  <template v-slot:row="props">
    <tr :class="[props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
      <td :class="props.tdClass">
        {{ props.row.id }}
      </td>
      <td :class="props.tdClass">
        <!-- <a :href="`mailto: ${props.row.email}`">{{ props.row.email }}</a> -->
        <!-- <a>{{ props.row.email }}</a> -->
        {{ props.row.width }}
      </td>
      <td :class="props.tdClass">
        <!-- <span :class="{'text-green-500': props.row.sales >= 0, 'text-red-500': props.row.sales < 0 }"> -->
        <!-- ${{ props.row.sales.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }} -->
        <!-- </span> -->
        {{ props.row.height }}
      </td>
      <td :class="props.tdClass">
        <!-- <t-button size="sm" variant="secondary">Edit</t-button>
         -->
         {{ props.row.links.download }}
      </td>
      <td :class="props.tdClass">
        <!-- <t-button size="sm" variant="secondary">Edit</t-button>
         -->
         <!-- {{ props.row.links.self }} -->
         <div class="bg-gray-400">
          <!-- <img class="object-scale-down h-48 w-full ..." :src="props.row.links.download"> -->
          <img class="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down ..." :src="props.row.links.download">
        </div>
      </td>
        <td :class="props.tdClass">
        <!-- <t-button size="sm" variant="secondary">Edit</t-button>
         -->
         <!-- {{ props.row.links.self }} -->
         
           <t-button variant="secondary" size="sm" @click="save(props.row)">Save</t-button>


      </td>
    </tr>
  </template>
  </t-table>

  <t-card class="bg-blue-400">
    <h3>Count Img Save: {{this.$store.getters.getAll.length}} <t-button @click="download" size="sm">Download</t-button> </h3>
  </t-card>

  </div>
</template>

<script>
import axios from 'axios'
import store from './store'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      info: null,
      query: "",
      data: {},
    }
  },
  methods: {
    getApi(){
      console.log("getApi")
      // axios.get('https://api.unsplash.com/search/photos?page=1&per_page=10&query=autos%20deportivos&client_id=M4h2fLH0CUHf2ifsx3jUJEgPuUff1nO4sgnVlkPJf84')
      this.data = axios.get('https://api.unsplash.com/search/photos?page=1&per_page=10&query='+ this.query +'&client_id=M4h2fLH0CUHf2ifsx3jUJEgPuUff1nO4sgnVlkPJf84')
        .then(response => (this.data = response.data))
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed 
        });

        // console.log("data", data)
    },
    save(data){
      store.commit('saveImg', data.links.download)

      this.$notify({
        group: 'foo',
        title: 'Save Succes', 
        text: 'id:'+ data.id +' ',
      });

    },
    download(){

      // this.$store.getters.getAll
      var FileSaver = require('file-saver');
      var blob = new Blob([this.$store.getters.getAll], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "imgList.txt");
    }
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
