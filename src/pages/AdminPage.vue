<template>
    <div class="container q-pa-md ">
        <div class="row justify-center q-mt-md">
            <img class="" src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-new-png-png.png" style="max-width:150px; max-height:150px">
        </div>
        <div class="row justify-around q-mt-md">
            <div class="col-md-7 col-12 q-mt-xl">
                <div class="row justify-between q-pa-md star">
                    <q-card flat class=""  v-for="cds in cd" style="width: 700px;">
                        <div class="row justify-between">
                            <div class="col-md-2 col-sm-6 col-12">
                                <img class="gt-sm" style="width:150px; height:150px;" :src="cds.imgn">
                                <img class="lt-md q-pl-md q-ml-md" :src="cds.imgn">

                            </div>
                            <div class="cdcnt col-md-8 col-sm-6">
                                <div class="row justify-between"><div class="col-8 gt-sm text-weight-bolder text-h5">{{ cds.role }}</div> <div class="col-2 gt-sm"><q-btn v-for="size in sizes" :key="`btn_size_sq_${size}`" color="indigo-14" :size="size" :label="`Apply`"/></div></div>
                                <div class="lt-md cdtle text-weight-bolder text-h5">{{ cds.role }}</div>
                                <div class="text-grey-13 text-h6"><span>Starbucks</span><br><br></div>
                                <div class="row justify-evenly q-pt-md text-caption">
                                    <div class="col-md-4 col-12"><span>{{ cds.loctn }}</span>  </div>
                                    <div class="col-md-5 col-12"><span><span class="text-grey-13">Date posted:</span> {{ cds.date }}</span>  </div>
                                    <div class="col-md-3 col-12 gt-sm"><span><span class="text-grey-13">        Openings:</span>{{ cds.openings }}</span>  </div>
                                    <div class="col-md-3 col-12 lt-md"><span><span class="text-grey-13">Openings:</span>{{ cds.openings }}</span>  </div>
                                </div>
                                <div class="row justify-center q-pt-md">
                                    <div class="col lt-md"><q-btn v-for="size in sizes" :key="`btn_size_sq_${size}`" color="indigo-14" :size="size" :label="`Apply`"/></div>
                                </div>
                                </div>
                               
                                

                        </div><br>
                            </q-card>
                </div>
                <div class="row q-mt-lg star q-pa-md">
                    <div class="col">
                        <p class="text-h6 text-weight-bold">Roles and Requirement</p>
                        <p class="text-subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum sunt excepturi deserunt repudiandae ut,
                            similique iure, omnis dolorum ratione earum quas nobis.
                            Sapiente inventore ullam sint accusantium, nam molestias?</p>
    
                        <p class="text-body2">Role:<span class="text-subtitle2 text-weight-bold">Administrator</span></p><br>
                        <p class="text-body2">Experience:<span class="text-subtitle2 text-weight-bold">2yrs</span></p>
                        <p class="text-body2">Openings:<span class="text-subtitle2 text-weight-bold">5</span></p>
    
                    </div>
                </div>
                <div class="row q-mt-lg star q-pa-md">
                    <div class="col">
                        <p class="text-h6 text-weight-bold">Who we are?</p>
                        <p class="text-subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum sunt excepturi deserunt repudiandae ut,
                            similique iure, omnis dolorum ratione earum quas nobis.
                            Sapiente inventore ullam sint accusantium, nam molestias?</p>
                        <div>
                            <span class="text-subtitle1 text-weight-bold ">We are also in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram q-ml-lg" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook q-ml-md" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube q-ml-md" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
                        </div>
    
                    </div>
                </div>
            </div>
            <div class="col-md-4 q-mt-xl">
                <div class="row q-pl-md ">
                    <p class="text-h5 text-weight-bold">Similar jobs</p>
                </div>
                <div class="row q-mt-md">
                                <div class="col-md-10 col-sm-6 col-12 q-pa-md" v-for="jobs in job">
                                     <div class="row q-pa-xs text-caption justify-between as">
                                <div class="col">
                                    <img style="width:55px; height:55px;" src="data:image/png;base64,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">
                                </div>
                                <div class="col-11 q-pl-xl cdtx">
                                    <span class="text-weight-bolder btxt">{{ jobs.role }}</span><br>
                                    <span><q-icon name="work"></q-icon><span>{{jobs.exp}}</span> &nbsp;
                                        <q-icon name="money"></q-icon>{{ jobs.sal }} &nbsp;
                                        <q-icon name="chair"></q-icon>{{ jobs.seat }}&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>{{ jobs.loc }}</span> 
                                </div>
                            </div>
                                </div>
                                <div class="col-md-10 col-sm-6 col-12 q-pa-md" v-for="jobs in job">
                            <div class="row q-pa-xs text-caption justify-between as">
                                <div class="col-1">
                                    <img style="width:55px; height:55px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiy0Bx_2KhS0N20RNtQRvByt0mUSQe1PDz6bakYxXatE9LHsSWq9KUo0605sBkJBhwVyc&usqp=CAU">
                                </div>
                                <div class="col-11 q-pl-xl aa">
                                    <span class="text-weight-bolder btxt">{{ jobs.role }}</span><br>
                                    <span><q-icon name="work"></q-icon><span>{{jobs.exp}}</span> &nbsp;
                                        <q-icon name="money"></q-icon>{{ jobs.sal }} &nbsp;
                                        <q-icon name="chair"></q-icon>{{ jobs.seat }} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>{{ jobs.loc }}</span> 
                                </div>
                            </div>
                   
                                </div>
                                <div class="col-md-10 col-sm-6 col-12 q-pa-md" v-for="jobs in job">
                                    
                            <div class="row q-pa-xs text-caption justify-between as" >
                                <div class="col-1">
                                    <img style="width:55px; height:55px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsw9x9h-tP2ha1In0YBipGnfrQqzRf9OS1w&usqp=CAU">
                                </div>
                                <div class="col-11 q-pl-xl cdtx">
                                    <span class="text-weight-bolder btxt">{{ jobs.role }}</span><br>
                                    <span><q-icon name="work"></q-icon><span>{{jobs.exp}}</span> &nbsp;
                                        <q-icon name="money"></q-icon>{{ jobs.sal }} &nbsp;
                                        <q-icon name="chair"></q-icon>{{ jobs.seat }} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>{{ jobs.loc }}</span> 
                                </div>
                            </div>
                       
                                </div>
                                <div class="col-md-10 col-sm-6 col-12 q-pa-md" v-for="jobs in job">
                                   
                            <div class="row text-caption q-pa-xs justify-between as">
                                <div class="col-1">
                                    <img style="width:55px; height:55px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4fpujQtCRRKmbqVdOxllct5g8EOQeBF_fw&usqp=CAU">
                                </div>
                                <div class="col-11 q-pl-xl cdtx">
                                    <span class="text-weight-bolder btxt">{{ jobs.role }}</span><br>
                                    <span><q-icon name="work"></q-icon><span>{{jobs.exp}}</span> &nbsp;
                                        <q-icon name="money"></q-icon>{{ jobs.sal }} &nbsp;
                                        <q-icon name="chair"></q-icon>{{ jobs.seat }} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>{{ jobs.loc }}</span> 
                                </div>
                            </div>
                       
                                </div>
                                <div class="col-md-10 col-sm-6 col-12 q-pa-md" v-for="jobs in job">
                                
                            <div class="row text-caption q-pa-xs justify-between as">
                                <div class="col-1">
                                    <img style="width:55px; height:55px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Wikipedia-W-visual-balanced.svg/1200px-Wikipedia-W-visual-balanced.svg.png">
                                </div>
                                <div class="col-11 q-pl-xl cdtx">
                                    <span class=" bb text-weight-bolder">{{ jobs.role }}</span><br>
                                    <span><q-icon name="work"></q-icon><span>{{jobs.exp}}</span> &nbsp;
                                        <q-icon name="money"></q-icon>{{ jobs.sal }} &nbsp;
                                        <q-icon name="chair"></q-icon>{{ jobs.seat }} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>{{ jobs.loc }}</span> 
                                </div>
                            </div>
                       
                                </div>
                                <div class="col-md-10 col-sm-6 col-12 q-pa-md" v-for="jobs in job">
                                    
                            <div class="row text-caption q-pa-xs justify-between as">
                                <div class="col-1">
                                    <img style="width:55px; height:55px;" src="https://i.pinimg.com/736x/53/32/69/533269d7c75706515c1a44827a535458.jpg">
                                </div>
                                <div class="col-11 q-pl-xl cdtx">
                                    <span class="text-weight-bolder btxt">{{ jobs.role }}</span><br>
                                    <span><q-icon name="work"></q-icon><span>{{jobs.exp}}</span> &nbsp;
                                        <q-icon name="money"></q-icon>{{ jobs.sal }} &nbsp;
                                        <q-icon name="chair"></q-icon>{{ jobs.seat }} &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>{{ jobs.loc }}</span> 
                                </div>
                            </div>
                                </div>
                                <div class="col-md-12 col-sm-6 col-12 q-pa-md">
                                    <q-btn to="/job" class="btxt q-pa-sm" style="width: 365px;" color="indigo-14" label="View all Jobs">
                                     </q-btn>
                                </div>
                            </div>
    
            </div>
        </div>
    </div>
    <div class="container-fluid q-pa-xl">
    </div>
    </template>
    
    <script>
    const cd = [
        {
        imgn:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnF4s9YU4P3amgsaGCw7WtpWjsAulg-QKlChevdxaxg&s',
        role:'Administrator',
        loctn:'Kalavasal, Madurai',
        date:'3 Weeks ago',
        openings:'5'
    }
    ]

    export default {
        name: "job",
    
        data() {
            return {
                cd,
                sizes:[ 'sm', ],
                job: [{
                        ico: 'chair',
                        role: 'Administrator',
                        exp: '2yrs',
                        sal: '1lac/yr',
                        seat: '10',
                        loc: 'Madurai'
                    }
    
                ]
            }
        },
    }
    </script>
    
    <style scoped>
    .star {
        border: thin solid gainsboro;
    }
    
    svg {
        fill: rgb(162, 158, 158);
    }
    
    .bi-geo-alt-fill {
        fill: black;
    }
    
    .btn:hover {
        color: blue;
        background-color: transparent;
    
    }
    .as{
        border: thin solid rgb(162,158,158);
    }
    .aa {
        text-align: start !important;
    }
    
    .bb{
        text-transform: capitalize;
        font-size: 15px;
    }
    @media (max-width:550px){
        .cdcnt{
            text-align: center !important;
        }
    }
    </style>
    