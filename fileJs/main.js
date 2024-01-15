const { createApp } = Vue;

createApp({
  data() {
    return {
      data: [],
      allData: null,
      apiUrl: 'index.php',
      newForm: false,
      nImg: '',
      nName: '',
      nType: '',
      nSinger: '',
    };
  },
  methods:{
    // chiamata axios
    getData() {
      axios.get(this.apiUrl).then((response) => {
        this.data = response.data;
      });
  },
  // funzione per mostrare altri dati al click 
  showInfo(index){
    this.data.forEach((song, i) => {
       if(i === index){
        song.show = !song.show;
       }else{
        song.show;
       }
  });
  },
  // prendo elementi in post
  addDiscs(){
    const param = {
      create: 1,
      newImg: this.nImg,
      newName: this.nName,
      newType: this.nType,
      newSinger: this.nSinger,
    };
    axios.post(this.apiUrl, param,{ 
      headers:{
        'Content-Type': 'multipart/form-data',
      },
     }).then((response)=>{
      this.data = response.data;
      console.log(this.data);
     });

     this.nImg = '';
     this.nName = '';
     this.nType = '';
     this.nSinger = '';
  },
  // funzione mostra form
  showForm(){
    this.newForm = !this.newForm;
    return this.newForm;
  },
},
  created(){
    this.getData();
  },
}).mount('#app');