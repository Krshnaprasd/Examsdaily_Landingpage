<template>
   <q-page-container> 
    <div class="edbg container-fluid q-pt-xl q-pb-xl">
        <div class="container q-pb-xl">
            <div class="row justify-center">
                <div>
                    <img class="gt-sm q-pt-md" src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-new-png-png.png" style="max-width:150px; max-height:150px">
                    <img class="lt-md q-pt-md" src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-new-png-png.png" style="max-width:100px; max-height:100px">
                </div>
            </div>
            <div class=" mainhd text-center text-weight-bolder q-pt-xl">
                <div class="gt-sm" style= "line-height:65px;"><span class="txt">Boost&nbsp;</span>🚀<span>Your </span><span class="txt">Career </span><span style="word-wrap: break-word;">Where <br><span style="word-wrap: break-word;">Dreams Meets</span> </span> <span class="txt">Jobs</span>💼</div>
                <div class="lt-md" style= "line-height:45px;"><span class="txt">Boost&nbsp;</span>🚀<span>Your </span><span class="txt">Career </span><span style="word-wrap: break-word;">Where <br><span style="word-wrap: break-word;">Dreams Meets</span> </span> <span class="txt">Jobs</span>💼</div>

            </div>
            <div class="text-blue-grey-4 q-pt-lg text-justify">
                <p class="tex text-center">Discover limitless career opportunities at our job applying site,where<br>
                    ambition meets opportunity. Elevate your professional journey with ease.</p>
            </div>
            <div class="row justify-evenly q-pt-md  text-caption gt-sm" >        
                <q-card class="inp q-pl-md flex justify-evenly shadow-1 srch" style="width:650px"><q-input borderless v-model="text" placeholder="Eg:Backend Developer |" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <q-input class="inp order-md-2 order-2" borderless v-model="text" placeholder="Eg:Work from home |" /><br>
                    <q-input class="inp" borderless v-model="text" placeholder="Eg: Madurai" /><br>
                    <div class="q-pt-sm"><q-btn class="srchbtn" style="width:30px; height: 30px;" round @click="search" icon="search"/></div>
                </q-card>
               </div>
                <div class="q-pa-xl lt-md">
                            <q-card class="q-pa-lg">
                            <q-input
                            v-model="searchTerm1"
                            label="Eg:Backend Developer"
                            outlined
                            dense
                            /><br>
                            <q-input
                            v-model="searchTerm2"
                            label="Eg:Work from home"
                            outlined
                            dense
                            /><br>
                            <q-input
                            v-model="searchTerm3"
                            label="Eg: Madurai"
                            outlined
                            dense
                            /><br>
                            <div class="text-center"><q-btn class="srchbtn" @click="search" label="search"/></div>
                        </q-card>
                </div>
            </div>
        </div>
        <div class="container-fluid q-pb-xl">
            <div class="container cdbx">
                    <div class="row justify-around mainsecnd q-pl-lg q-pb-md gt-xs text-weight-bolder"><span >Recent Jobs</span></div>
                    <div class="lt-sm q-pb-lg mainsecnd text-weight-bolder" ><span>Recent Jobs</span></div>
                <div class="cd row justify-around">
                    <div class="cdbt col-md-4 col-sm-6 col-12 q-pb-lg" v-for="jobs in job">
                                <q-btn :to="jobs.redirect"  style="width: 370px;">
                                 <div class="row q-pa-xs text-caption justify-between">
                            <div class="col">
                                <img style="width:55px; height:55px;" :src="jobs.img">
                            </div>
                            <div class="col-11 q-pl-xl cdtx">
                                <span class="text-weight-bolder btxt">{{ jobs.roles }}</span><br>
                                <span><q-icon name="work"></q-icon><span>{{jobs.exps}}</span> &nbsp;
                                    <q-icon name="money"></q-icon>{{ jobs.sals }} &nbsp;
                                    <q-icon name="chair"></q-icon>{{ jobs.seats }}&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>{{ jobs.locat }}</span> 
                            </div>
                        </div>
                    </q-btn>
                            </div>
                     </div>
                    </div>
                </div>
        <div class="container-fluid q-pt-xl q-pb-xl">
            <div class="container cdbxx q-pb-xl">
                <div class="row">
                    <div class="col-md-7 col-12">
                        <div>
                            <span class="mained1 text-weight-bolder">Examsdaily Supercharging Your Job</span><br>
                            <span class="mained1 text-weight-bolder">Search with the Latest Features !</span>
                            <div class="edlog1 q-pt-xl">
                                <q-btn class="edlog rounded-borders" icon="label" outline style="color: rgb(32, 103, 218);"> Try to Predict the Interview Questions</q-btn><br>
                              </div>
                              <div class="edlog1">  
                                <q-btn class="edlog1" icon="label" flat style="color: #a19d9d" label="Pay attention to job title variations" /><br>
                                <q-btn class="edlog1" icon="label" flat style="color: #a19d9d" label="Network whenever possible" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-12 text-center">
                        <div><img class="log gt-sm" src="../assets/edlog-1.jpeg"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid q-pt-xl">
            <div class="container cdbxx">
                <div class="row">
                    <div class="col-md-5 col-12 q-pb-xl gt-xs">
                        <div class=" q-pt-xl q-pb-xl">
                        <img class="fit" src="../assets/edlog-2.png">
                        </div>
                    </div>
                    <div class="col-md-5 col-12 lt-sm">
                        <div>
                        <img class="fit" src="../assets/edlog-2.png">
                        </div>
                    </div>
                    <div class="col-md-7 col-12 q-pt-xl">
                        
                        <span class="mained1 text-weight-bolder">Explore Every Opportunity: Your</span><br>
                        <span class="mained1 text-weight-bolder">Gateway to All Jobs!</span><br>
                        <div class="q-pt-xl gt-sm">
                        <span class="q-pt-md btclr"><q-btn to="/jobPage2"  class="but text-white text-weight-bolder">Nagajothi</q-btn></span>
                        <span class="q-pt-md btclr"><q-btn to="/SearchPage" class="but text-white text-weight-bolder">Selina</q-btn></span>
                        <span class="q-pt-md btclr"><q-btn to="/job3" class="but text-white text-weight-bolder">Rubini</q-btn></span>
                        <span class="q-pt-md btclr"><q-btn class="but text-white text-weight-bolder">Vasanth</q-btn></span>
                        <span class="q-pt-md btclr"><q-btn class="but text-white text-weight-bolder">Azar</q-btn></span>
                    </div>

                    <div class="q-pt-xl lt-md">
                        <span class="q-pt-md btcl"><q-btn to="/jobPage2" class="but1 text-white text-weight-bolder" >Nagajothi</q-btn></span>
                        <span class="q-pt-md btcl"><q-btn to="/SearchPage" class="but1 text-white text-weight-bolder">Selina</q-btn></span>
                        <span class="q-pt-md btcl"><q-btn to="/job3" class="but1 text-white text-weight-bolder">Rubini</q-btn></span>
                        <span class="q-pt-md btcl"><q-btn class="but1 text-white text-weight-bolder">Vasanth</q-btn></span>
                        <span class="q-pt-md btcl"><q-btn class="but1 text-white text-weight-bolder">Azar</q-btn></span>
                    </div>  
                    </div>
                </div>
            </div>
        </div>
    </q-page-container>
</template>
<script>

const job=[
       {
        img:'data:image/png;base64,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',
        ico:'chair',
        roles:'Sabesh Kanna',
        exps:'2yrs',
        sals:'1lac/yr',
        seats:'10',
        locat:'Madurai',
        
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiy0Bx_2KhS0N20RNtQRvByt0mUSQe1PDz6bakYxXatE9LHsSWq9KUo0605sBkJBhwVyc&usqp=CAU',
        ico:'chair',
        roles:'Ponraj',
        exps:'2yrs',
        sals:'1lac/yr',
        seats:'10',
        locat:'Madurai',
        redirect:'/detail'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsw9x9h-tP2ha1In0YBipGnfrQqzRf9OS1w&usqp=CAU',
        ico:'chair',
        roles:'Krishna Prasad',
        exps:'2yrs',
        sals:'1lac/yr',
        seats:'10',
        locat:'Madurai',
        redirect:"/opn"
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4fpujQtCRRKmbqVdOxllct5g8EOQeBF_fw&usqp=CAU',
        ico:'chair',
        roles:'Karthikeyan',
        exps:'2yrs',
        sals:'1lac/yr',
        seats:'10',
        locat:'Madurai',
        redirect:"/adm"
    },
    {
        img:'https://i.pinimg.com/736x/53/32/69/533269d7c75706515c1a44827a535458.jpg',
        ico:'chair',
        roles:'ThilagaRaj',
        exps:'2yrs',
        sals:'1lac/yr',
        seats:'10',
        locat:'Madurai'
        
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Wikipedia-W-visual-balanced.svg/1200px-Wikipedia-W-visual-balanced.svg.png',
        ico:'chair',
        roles:'Administrator',
        exps:'2yrs',
        sals:'1lac/yr',
        seats:'10',
        locat:'Madurai'
        
    },

    ]
export default{
  
    data()    {
        return{
            job
        }
       
    },
    
}

</script>
<style>
@media(max-width:500px){
.mainhd{
    font-size:1.6em;

}
.tex{
    font-size:0.8em;
}
.mained1{
    font-size:1.4em;
}
.mainsecnd{
    font-size:1.8em;
    text-align: center !important;
  
}
.edlog{
    font-size: 1em;
}
.edlog1{
    font-size:0.9em;
}
.mainimg{
    max-width:30px !important;
    max-height:30px !important;
}
.cd{
    padding-left: 3px;

}
.cdbxx{
    text-align: center;
}
}
@media screen and (min-width:425px) and (max-width:600px){
.cdbxx{
    text-align: center;
}
.edlog1{
    font-size: 0.9em;
}
}
@media screen and (min-width:768px) and (max-width:1023px){
    .mained1{
        padding-left: 30px;
    }
    .btcl{
        padding-left: 30px;
    }
    .edlog1{
        font-size: 0.9em;
    }
}
@media screen and (min-width:501px) and (max-width:799px){
.mainhd{
    font-size:2em;

}
.mained1{
    font-size:2em;
}
.mainsecnd{
    font-size:2em;

  
}
.edlog{
    font-size: 1em;
}
.edlog1{
    font-size:0.9em;
}  
}
@media(min-width:768px){   
.mainsecnd{
    font-size:2.3em;
}    
.mainhd{
font-size:3.5em
}
.edlog1{
    padding-left: 25px;
}
.mained1{
font-size:2.3em;
padding-left: 30px;
} 
.edlog{
    font-size: 1.1em;
    text-transform: capitalize;
}
.edlog1{
    font-size:1.1em;
    text-transform: capitalize;
}
}
.cdtx{
text-align: start !important;
}
.btxt{
    text-transform:capitalize;
    font-size: 15px;
}
.txt{
background-color: #3e51cd;
background-image: linear-gradient(45deg, #3e51cd 30%, #FF0000 95%);
-webkit-background-clip:text;
color: transparent;
}
.srch{
    border-radius: 50px;
}
.btclr{
    padding-left: 30px;
   
}
.but{
    background-color: #4158D0;
    background-image: linear-gradient(270deg, #4158D0 0%, #C850C0 46%, #ff7270 70%);
    width: 100px;
    padding: 5px;
    text-transform: capitalize;
}
.but1{
    background-color: #4158D0;
    background-image: linear-gradient(270deg, #4158D0 0%, #C850C0 46%, #ff7270 70%);
    width: 100px;
    text-transform: capitalize;
    margin:5px;
    
}

.inp::placeholder{
font-size: 5px;
}
.edbg{
    background-image: url('../assets/edbg.jpeg');
}
.srchbtn{
background-color: #c70003;
background-image: linear-gradient(292deg, #c70003 0%, #55279c 50%, #1231cb 100%);
color: whitesmoke;
}
.log{
    position: absolute;
    right: 60px;
    z-index: -1;
}
.mainhd{
    text-align: center !important;
}
.cdbx{
    text-align: center;
}
</style>