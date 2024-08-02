<template>
    <div>
        <div class="q-pa-lg bg-grey-2">
        <!-- Header -->
            <header>
                <div bordered class="q-ma-lg">
                    <div class="row justify-center">
                        <img src="../assets/image/ed-logo.svg" alt="logo" width="50px" height="78px">&nbsp;&nbsp;
                        <img class="gt-xs" src="../assets/image/examsdaily-logo-png.png" alt="logo" width="284px" height="78px">
                    </div>
                    <div class="lt-sm row justify-center">
                        <img src="../assets/image/examsdaily-logo-png.png" alt="logo" width="184px" height="58px">
                    </div>
                </div>
            </header>

        <!-- Search Input -->
            <div>   
                <div class="row justify-evenly q-my-md gt-xs" >        
                    <q-card class="flex justify-evenly shadow-1 srch" style="width:650px">
                        <q-input borderless v-model="text" placeholder="Eg:Backend Developer |" />&nbsp;&nbsp;&nbsp;
                        <q-input borderless v-model="text" placeholder="Eg:Work from home |" /><br>
                        <q-input borderless v-model="text" placeholder="Eg: Madurai" /><br>
                        <div class="q-pt-sm"><q-btn class="srchbtn" style="width:30px; height: 30px;" round @click="search" icon="search"/></div>
                    </q-card>
                </div>
                <div class="q-pa-md lt-sm">
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
                    <div class="text-center"><q-btn class="srchbtn" @click="search">Search</q-btn></div>
                </div>
            </div>

        <!-- Job Titles -->
            <div> 
                <div class="q-py-md">
                    <q-list class="example-row-stacked-to-horizontal">
                        <div class="row text-weight-bold">
                            <div v-for="(jt, index) in JobTitle" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm q-my-sm pointer-div">
                                <div class="column items-center">
                                    <div :style="{backgroundColor:jt.bgclr}" class="col rounded-pill">
                                        <q-item>
                                        <q-item-section avatar>
                                            <q-avatar class="text-white"  :color="jt.textclr">{{ jt.letter }}</q-avatar>
                                        </q-item-section>
                                        <q-item-section class="text-black">
                                            <div>{{jt.title}}</div>
                                        </q-item-section>
                                        </q-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </q-list>
                </div>
            </div>

        <!-- Job Cards -->
            <div class="jobcardpadding">
                <q-list class="example-row-stacked-to-horizontal justity-center">
                    <div class="row">
                        <div v-for="(j, index) in Jobs" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 pointer-div">
                            <div class="q-pa-md row q-gutter-sm">
                                <q-card class="my-card jobcard" flat bordered>          
                                    <q-item>
                                        <q-item-section avatar>
                                            <q-avatar square size="50px">
                                                <img :src="j.img">
                                            </q-avatar>
                                        </q-item-section>

                                        <q-item-section>
                                            <q-item-label class="text-weight-bold">{{ j.title }}</q-item-label>
                                            <q-item-label caption>
                                                <div class="row">
                                                    <div class="col flex text-dark">
                                                        <div><q-icon name="work"></q-icon>&nbsp;{{ j.yr }}</div>&nbsp;
                                                        <div><q-icon name="fa fa-inr"></q-icon>&nbsp;{{ j.salary }}</div>&nbsp;
                                                        <div><q-icon name="chair"></q-icon>&nbsp;{{ j.openings }}</div>&nbsp;
                                                        <div><q-icon name="place"></q-icon>&nbsp;{{ j.location }}</div>&nbsp;
                                                    </div>
                                                </div>
                                            </q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </q-list>
            </div>        
        </div>
        <!-- Footer -->
        <footer>
            <div class="foot text-weight-bold">
                <div class="q-pa-md example-row-horizontal-alignment">
                    <div class="row justify-between">
                        <div class="col-12 col-md-3 self-center">
                            Follow us on&nbsp;
                            <q-icon name="fab fa-instagram-square"></q-icon>&nbsp;
                            <q-icon name="fa-brands fa-facebook"></q-icon>&nbsp;
                            <q-icon name="fa-brands fa-youtube"></q-icon>&nbsp;
                        </div>
                        <div class="col-12 col-md-4">
                            Copyright @ 2023 Mathy ExamsDaily Pvt Ltd
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
    
<script>
export default {
    name: 'SearchPage',
    data() {
    const search = ('');
    const JobTitle = ([
        {
        bgclr:"#95BF8F",
        textclr:"green-10",
        letter:"F",
        title:"Full Stack Developer"
        },
        {
        bgclr:"#DEA4A3",
        textclr:"deep-orange-10",
        letter:"B",
        title:"Back End Developer"
        },
        {
        bgclr:"#E9BCE6",
        textclr:"deep-purple-10",
        letter:"U",
        title:"UX/UI Designer"
        },
        {
        bgclr:"#EBEABE",
        textclr:"lime-10",
        letter:"T",
        title:"Tester"
        },
        {
        bgclr:"#C6EAEE",
        textclr:"cyan-9",
        letter:"G",
        title:"Graphic Designer"
        }
    ]);
    const Jobs = ([
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        },
        {
        img:"https://cdn.quasar.dev/img/boy-avatar.png",
        title:"Administrator",
        yr:"2 yrs",
        salary:"l lac/yr",
        openings:"10",
        location:"Madurai"
        }
    ]);

    return {
        search,
        JobTitle,
        Jobs
    };
    }
}
</script>
    
<style>
.rounded-pill {
    border-radius: 50px; 
    min-width: 250px;
}
.jobcard{
    width: 100%;
}
.jobcard:hover{
    background-color: rgb(238, 234, 230);
}
.jobcardpadding{
    padding: auto;
}
@media only screen and (min-width:1440px) {
    .jobcardpadding{
    padding: 48px 48px;
    }
}
.foot{
    background: linear-gradient(to left,red,rgb(32,60,197));
    color: white;
    font-size: 15px;
    text-align: center;
}
*{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.srch{
    border-radius: 50px;
}
.srchbtn{
    background-color: #c70003;
    background-image: linear-gradient(to left,red,rgb(32,60,197));
    color: whitesmoke;
}
.pointer-div {
  cursor: pointer;
}
</style>
    
