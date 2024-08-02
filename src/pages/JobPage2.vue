<template>
    <div  style="background-color:whitesmoke;" >
      <!-- <div class=" flex justify-center ">
        <img src="logo2.png" 
         style="height: 90px;width:350px"
         class="q-ma-xl imgLogo"/>
      </div> background-color:rgb(248,240,250);-->


      <div class="row justify-evenly q-pt-md  text-caption gt-xs" >        
        <q-card class="inp flex justify-evenly shadow-1 q-mt-md srch" style="width:650px"><q-input borderless v-model="text" placeholder="Eg:Backend Developer |" />      
            <q-input class="inp order-md-2 order-2" borderless v-model="text" placeholder="Eg:Work from home |" /><br>
            <q-input class="inp" borderless v-model="text" placeholder="Eg: Madurai" /><br>
            <div class="q-pt-sm"><q-btn class="srchbtn" style="width:30px; height: 30px;" round @click="search" icon="search"/></div>
        </q-card>
    </div>
    <div class="q-px-xl  q-py-md lt-sm">
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
    </div>
    <div class="text-center lt-sm"><q-btn class="srchbtn" rounded @click="search" label="Search" icon="search"/></div>
    
    
     
    <!-- button -->
      <div class="row q-px-md  " data-aos="fade-up" >
        <div class="col-12 col-md-3 col-sm-6  q-mt-xl flex justify-center"   v-for="(s, index) in badge" :key="index"  >
            <q-btn style="min-width: 200px;" rounded :color="s.color1" class="text-capitalize flex items-start"  >
            <q-btn rounded :color="s.color"  size="md" :label="s.label1" class="flex items-start" > </q-btn>
            <div class="text-center  flex q-ml-sm">
                <div class="q-pa-sm text-capitalize text-dark text-bold no-hover " flat >{{ s.label }}</div>
            </div>
            </q-btn>
        </div>
    </div>

    <!-- <cardcom /> -->
    <div class="q-pa-xl  row items-start "  id="cardcom" >
        <div class="col-12 col-sm-6 col-md-4 q-pa-sm " v-for="s in badge1" :key="s.label"  >
            <q-card class="my-card q-pa-sm no-wrap cardui"  >
                <q-card-section class="flex align-center" horizontal >
                       <div class="flex items-center" > <q-img  :src="s.img"   style="height:60px;width:60px;border-radius: 3px;" /></div>
                        <div class=" q-pa-sm flex " id="carduilayer2">
                            <div class="text-bold ">{{ s.label }}</div>
                            <div class="flex items-center">
                            <div><q-icon name="work" size=""></q-icon>&nbsp;{{ s.icd1 }} &nbsp;</div>
                            <div><q-icon name="money" sixe="xs"></q-icon>{{ s.icd2 }}</div>
                            <div><q-icon name="place" size="xs"></q-icon>&nbsp;{{ s.icd3 }}&nbsp; </div>
                           <div> <q-icon name="chair" size="xs"></q-icon>&nbsp;{{ s.icd4 }} </div></div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>

    <!--  -->
   
    
    <footer style="background: linear-gradient(to right,blue,purple,red);" class="sticky">
        <div class="row flex flex-center justify-evenly q-pa-sm text-white">
            <div class=" col-md-6 ">
                <div class="flex  q-ml-md">
                    <div class="text-bold">Follow us on </div>
                <div class="flex q-gutter-md q-px-sm q-pt-xs">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg></div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg></div>
                </div>
                </div>
            </div>
            <div class=" col-md-6 text-bold flex flex-center">
                copyright ©  2023 Mathy Examsdaily pvt Ltd
            </div>
       </div>
    </footer>


    
    </div>
    </template>
    <script>
    
    // import AOS from 'aos';
    // import 'aos/dist/aos.css';
    
   
    export default {
      name:"Examsdaily",
     
      data () {
        return {
            searchTerm1:"",
            searchTerm2:"",
            searchTerm3:"",
            badge: [
                    { color: 'green-9', label: 'Full Stack Developer', label1: 'F' ,color1:'green-2', class1:'text-capitalize'},
                    { color: 'red-10', label: 'Back End Developer', label1: 'B' ,color1:'red-2', class1:'text-capitalize'},
                    { color: 'purple-10', label: 'UI/Ux Developer', label1: 'U' ,color1:'purple-2', class1:'text-capitalize'},
                    { color: 'yellow-10', label: 'Tester', label1: 'F' ,color1:'yellow-2', class1:'text-capitalize'},
                    { color: 'teal-10', label: 'Forntend Developer', label1: 'G' ,color1:'teal-2', class1:'text-capitalize'},
                
                ] ,
                badge1: [
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },
                { label: 'Administrator',  icd1: '2 Yrs', icd2: '1 lac / Yr', icd3: '10', icd4: 'Madurai',img:'card.jpg' },

            ]


         
        }
      }
   
    }
    </script>
    <style scoped>

    
    @media only screen and (max-width: 376px) {
        .input1 {
          width:350px;
          margin: 0 auto;
          display: flex;
          justify-items: center;
        }
        .input{
          min-width:350px;
          display:flex;
          justify-content: center;
          align-items:center;
          margin-top: 25px;
        }
        .imgLogo{
          height: 50px;width:200px;
          
          
        }
      }

      .cardui:hover{
    transform: translate(5px, -5%);
    box-shadow: 0 6px 20px 0 rgba(0,0,0,0.19);
    transition: 0.5s;
}

@media screen and (max-width:376px) {
    #cardcom{
        margin-top: 30px !important;
        padding: 10px !important;;
    }
}

@media screen and (max-width:426px) {
    #cardcom{
        padding-top: 25px !important;
        padding:10px;
    } 
}

@media screen and (max-width:769px) {
    #cardcom{
        padding-top: 25px !important;
        padding:10px;
    }   
}

@media screen and (max-width:1025px) {
    #cardcom{
        /* padding-top: 100px !important; */
        padding:5px !important;
    }
    #carduilayer2{
        padding:3px;
    }
}
    
.inp::placeholder{
  font-size: 5px;
  }

  .srchbtn{
  background-color: #c70003;
  background-image: linear-gradient(292deg, #c70003 0%, #55279c 50%, #1231cb 100%);
  color: whitesmoke;
  }
     
  .srch{
    border-radius: 50px;
  }
    </style>

