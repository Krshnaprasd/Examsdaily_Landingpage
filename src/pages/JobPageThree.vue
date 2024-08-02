<template>
    <div style="background-color: whitesmoke;">
      <!-- <div class="flex justify-center">
      <img
        class="q-pa-sm q-mt-xl"
        src="~assets/examsdaily-new-png-png.png"
        style="max-width: 400px; height: 100px"
      >
    </div> -->
  
    
    
  
    <div class="row justify-evenly q-pt-md  text-caption gt-xs q-pb-lg q-pt-xl" >        
        <q-card class="inp flex justify-evenly shadow-1 srch" style="width:650px">
            <q-input borderless v-model="text" placeholder="Eg:Backend Developer     |" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <q-input class="inp order-md-2 order-2" borderless v-model="text" placeholder="Eg:Work from home     |" /><br>
            <q-input class="inp" borderless v-model="text" placeholder="Eg: Madurai" /><br>
            <div class="q-pt-sm"><q-btn class="srchbtn" style="width:30px; height: 30px;" round @click="search" icon="search"/></div>
        </q-card>
    </div>
    <div class="q-pa-xl lt-sm q-py-lg">
        <q-input
        v-model="searchTerm1"
        label="Eg:Backend Developer"
        outlined
        dense
        color="grey-9"
        /><br>
        <q-input
        v-model="searchTerm2"
        label="Eg:Work from home"
        outlined
        dense
        color="grey-9"
        /><br>
        <q-input
        v-model="searchTerm3"
        label="Eg: Madurai"
        outlined
        dense
        color="grey-9"
        /><br>
        <div class="text-center q-pt-sm"><q-btn class="srchbtn" @click="search" label="SEARCH" icon-right="search"/></div>
    </div>
  
    
      <div class="row  q-pa-lg q-mt-sm  text-center" >
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-mb-md" v-for="x in titles" :key="x.name">
          <q-btn id="btns" rounded :color="x.bgColor"  align="between" class="q-pa-xs btn-fixed-width" style="min-width: 250px;">
              <div class="flex items-center" style="">
                <q-btn :color="x.color" round :label="x.icons" style="font-size: 15px;font-weight: bolder;" size="10px"  class="q-mx-md text-weight-bolder" />
                <div class=" text-black">{{ x.name }}</div>
              </div>
          </q-btn>
           
        </div>
      </div>
  
      
   
  <div class="row q-px-lg q-col-gutter-x-lg q-col-gutter-y-lg q-pb-lg q-pt-md">
    <div class="col-12 col-sm-6 col-md-4 flex justify-evenly" v-for="x in jobDetails">
  <q-card class="my-card" id="jobCards" flat bordered style="width: 350px;box-shadow: none;">
        <q-card-section horizontal>
         
            <div class="q-pa-xs q-ma-xs q-pt-xs">
              <img class="ed-img" :src="x.img" style="border-radius: 10%;" alt="..." height="55">
            </div>
          <q-item-section class="q-px-md">
            <q-item-label class="title text-bold q-ml-sm">{{ x.title }}</q-item-label>
            <q-item-label caption>
                <div class="row q-pt-xs">
                    <div class="col flex justify-evenly text-black">
                        <div><q-icon name="work"></q-icon> {{ x.experience }}</div>
                        <div class=""><q-icon name="money"></q-icon>{{ x.ctc }}</div>
                        <div class=""><q-icon name="chair" ></q-icon>{{ x.vacancy }}</div>
                        <div class=""><q-icon name="place"></q-icon> {{ x.location }}</div>
                    </div>
                </div>
            </q-item-label>
            </q-item-section>
        </q-card-section>
      </q-card>
      </div>
      </div>
  
  
   
      <div class="foot q-mt-lg text-white" style="background: linear-gradient(to right,blue,purple,red);text-align: center;">
        <div class="row q-pa-md q-px-xl" style="font-size: small;font-weight: bold;">
          <div class="col-12 col-sm-6 text-left flex footer">
            <div class="flex">
              Follow Us On
            </div>&nbsp;&nbsp;
            <div>
              <i class="fa-brands fa-square-instagram"></i>  &nbsp;&nbsp;
            </div>
            <div>
              <i class="fa-brands fa-facebook"></i> &nbsp;&nbsp;
            </div>
            <div>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div class="col-12 col-sm-6 text-right footer">
            Copyright @ 2023 Mathy ExamsDaily Pvt Ltd
          </div>
        </div>
      </div>
    
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'IndexPage',
    data(){
      return{
      titles:[{icons:"F",name:"Full Stack Developer",color:"green-9",bgColor:"green-2"},
              {icons:"B",name:"Back End Developer",color:"red-10",bgColor:"red-2"},
              {icons:"U",name:"UI/UX Designer",color:"purple-10",bgColor:"purple-2"},
              {icons:"T",name:"Tester",color:"yellow-10",bgColor:"yellow-2"},
              {icons:"G",name:"Graphic Designer",color:"teal-10",bgColor:"teal-2"},
            ],
      
      jobDetails:[
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
  
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
  
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          {img:"src/assets/ed-logo.png",title:"Administrator",experience:"2 Yrs",ctc:"1 lac/yr",vacancy:"10",location:"Madurai"},
          
        ]
  
      }
    }
  }
  </script>
  <style>
  
  #btns{
    transition: 0.5s ease;
  }
  #btns:hover{
   
      transform: scale(1.1);
  
  }
  .ed-img{
    transition: 0.5s ease-in-out;
  }
  #jobCards:hover{ 
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    transform: translateY(-10px);
    .ed-img{
    transform: scale(0.9);
    overflow: hidden;
    }
  }
  #jobCards{
    transition: 0.5s ease;
   
  }
  @media screen and (max-width: 599px){
      .footer
      {
        display: flex;
        justify-content: center;
      }
  }
  .inp::placeholder{
  font-size: 5px;
  }
  .srch{
      border-radius: 50px;
  }
  .srchbtn{
  background-color: #c70003;
  background-image: linear-gradient(292deg, #c70003 0%, #55279c 50%, #1231cb 100%);
  color: whitesmoke;
  }
  
   
  </style>
  