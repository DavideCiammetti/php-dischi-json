const { createApp } = Vue;

createApp({
  data() {
    return {
      data: [],
      showAll: false,
      showData: [],
    };
  },
  methods:{
    // chiamata axios
    getData() {
      axios.get('index.php').then((response) => {
        this.data = response.data;
      });
  },
  // funzione per mostrare altri dati al click 
  showInfo(index){
    this.data.forEach((song, i) => {
       song.show = (i === index) ? !song.show : false;
  });
  }
},
  created(){
    this.getData();
  },
}).mount('#app');