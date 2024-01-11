const { createApp } = Vue;

createApp({
  data() {
    return {
      data: [],
    };
  },
  methods:{
    getData() {
      axios.get('index.php').then((response) => {
        this.data = response.data;
      });
  },
},
  created(){
    this.getData();
  },
}).mount('#app');