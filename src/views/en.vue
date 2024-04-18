<template>
  <div class="gal" v-on:click="idle()">
    <div class="smart"><p>Veuillez passer votre smartphone en mode horizontal.</p> <br>
      <img src="../../public/images/rotate-solid.svg" class="rotate">
    </div>
    <Transition name="fade">
    <div :class="{ bulle1: disabled }"  v-if="disabled==true" class="bulle">
      <img src="../../public/images/x.png" class="x" v-on:click="retour()"> <br>
      <img src="../../public/images/bulleen/bulle1.png" v-if="i==1">
      <img src="../../public/images/bulleen/bulle2.png" v-if="i==4">
      <img src="../../public/images/bulleen/bulle3.png" v-if="i==7">
      <img src="../../public/images/bulleen/bulle5.png" v-if="i==13">
      <img src="../../public/images/bulleen/bulle4.png" v-if="i==12">
      <img src="../../public/images/bulleen/bulle6.png" v-if="i==14">
      <img src="../../public/images/bulleen/bulle7.png" v-if="i==26">
    </div>
  </Transition>
    <div class="perso" v-if="i==1">
      <img src="../../public/images/portrait1.png" :class="{ animperso1: disabled }" v-if="disabled">  
      <img src="../../public/images/portrait1.png" :class="{ animperso: abled }" v-on:click="warnDisabled()" v-if="abled">
      <img src="../../public/images/portrait1cursor.png" :class="{ animpersostart: abled==false }" v-on:click="warnDisabled()" v-if="abled==false && disabled==false">
    </div>
    <div class="perso" v-if="i==4 || i == 12 || i == 14">
      <img src="../../public/images/portrait2.png" :class="{ animperso1: disabled }" v-if="disabled">  
      <img src="../../public/images/portrait2.png" :class="{ animperso: abled }" v-on:click="warnDisabled()" v-if="abled">
      <img src="../../public/images/portrait2cursor.png" :class="{ animpersostart: abled==false }" v-on:click="warnDisabled()" v-if="abled==false && disabled==false">
    </div>
    <div class="perso" v-if="i==7 || i == 13">
      <img src="../../public/images/portrait3.png" :class="{ animperso1: disabled }" v-if="disabled">  
      <img src="../../public/images/portrait3.png" :class="{ animperso: abled }" v-on:click="warnDisabled()" v-if="abled">
      <img src="../../public/images/portrait3cursor.png" :class="{ animpersostart: abled==false }" v-on:click="warnDisabled()" v-if="abled==false && disabled==false">
    </div>
    <div class="perso" v-if="i==26">
      <img src="../../public/images/portrait4.png" :class="{ animperso1: disabled }" v-if="disabled">  
      <img src="../../public/images/portrait4.png" :class="{ animperso: abled }" v-on:click="warnDisabled()" v-if="abled">
      <img src="../../public/images/portrait4cursor.png" :class="{ animpersostart: abled==false }" v-on:click="warnDisabled()" v-if="abled==false && disabled==false">
    </div>
    <Transition name="fade">
    <div :class="{ black: disabled }"></div>
  </Transition>
  <Transition name="fade">
  <div :class="{ black2: warn || langue }"></div>
  </Transition>
  <div class="row container-fluid m-0 p-0">
    <div class="col-1 hasimage">
      <img src="../../public/images/ui/home.png" alt="" class="home"
      v-on:click="homepage()" v-if="i!=3 && i!=18 && i!=20">
      <img src="../../public/images/ui/flecheg.png" class="fleche" alt="" v-on:click="prevpage()" v-if="i>1 && i!=3 && i!=18 && i!=20">
    </div>
    <div class="col-10 hasimage gal">
      <div class="warning" v-if="warn">
        <div class="box pt-3">
          <p>Return to first page ?</p>
          <button class="btn btn-success exit mt-3" v-on:click="yes()">Yes</button>
          <button class="btn btn-danger exit mt-3" v-on:click="no()">No</button>
        </div>
      </div>
      <div class="warning" v-if="langue">
      <div class="box pt-3">
        <p>Please select a language</p>
        <router-link to="/MsfmultiBD/FR"> <button class="btn btn-success exit mt-3">Français</button></router-link>
        <router-link to="/MsfmultiBD/"><button class="btn btn-success exit mt-3">Deutsch</button></router-link>
        <button class="btn btn-success exit mt-3" v-on:click="langclose()">English</button>
      </div>
    </div>
      <img v-if="i == 1" src="../../public/images/EN/Fumetto-Comic_EN-3-1.jpg" alt="">
      <Transition name="testen">
        <div class="fondu" v-if="i == 2">  </div>
    </Transition>
      <img v-if="i == 4" src="../../public/images/EN/Fumetto-Comic_EN-3-2.jpg" alt="">
      <img v-if="i == 5" src="../../public/images/EN/Fumetto-Comic_EN-3-3.jpg" alt="">
      <img v-if="i == 6" src="../../public/images/EN/Fumetto-Comic_EN-3-4.jpg" alt="">
      <img v-if="i == 7" src="../../public/images/EN/Fumetto-Comic_EN-3-5.jpg" alt="">
      <Transition name="carteen">
      <div v-if="i == 8" class="carteen" alt=""> </div>
      </Transition>
      <img v-if="i == 9" src="../../public/images/EN/Fumetto-Comic_EN-3-7.jpg" alt="">
      <img v-if="i == 10" src="../../public/images/EN/Fumetto-Comic_EN-3-8.jpg" alt="">
      <img v-if="i == 11" src="../../public/images/EN/Fumetto-Comic_EN-3-9.jpg" alt="">
      <img v-if="i == 12" src="../../public/images/EN/Fumetto-Comic_EN-3-10.jpg" alt="">
      <img v-if="i == 13" src="../../public/images/EN/Fumetto-Comic_EN-3-11.jpg" alt="">
      <img v-if="i == 14" src="../../public/images/EN/Fumetto-Comic_EN-3-12.jpg" alt="">
      <img v-if="i == 15" src="../../public/images/EN/Fumetto-Comic_EN-3-13.jpg" alt="">
      <img v-if="i == 16" src="../../public/images/EN/Fumetto-Comic_EN-3-14.jpg" alt="">
      <Transition name="test3en">
      <div class="fondu3en" v-if="i == 17">  </div>
    </Transition>
      <Transition name="test2en">
        <div class="fondu2" v-if="i == 19">  </div>
    </Transition>
      <img v-if="i == 21" src="../../public/images/EN/Fumetto-Comic_EN-3-16.jpg" alt="">
      <img v-if="i == 22" src="../../public/images/EN/Fumetto-Comic_EN-3-17.jpg" alt="">
      <img v-if="i == 23" src="../../public/images/EN/Fumetto-Comic_EN-3-18.jpg" alt="">
      <img v-if="i == 24" src="../../public/images/EN/Fumetto-Comic_EN-3-19.jpg" alt="">
      <img v-if="i == 25" src="../../public/images/EN/Fumetto-Comic_EN-3-20.jpg" alt="">
      <img v-if="i == 26" src="../../public/images/EN/Fumetto-Comic_EN-3-21.jpg" alt="">
    </div>
    <div class="col-1 hasimage">
      <img src="../../public/images/ui/lang.png" alt="" class="lan"
    v-on:click="langu()" v-if="i!=3 && i!=20 && i!=18">
    <img src="../../public/images/ui/fleched.png" alt="" class="fleche" v-on:click="nextpage()" v-if="i<26 && i!=3 && i!=20 && i!=18">
    </div>
  </div>
  </div>
  </template>
  <script>
  export default {
    data(){
      var self = this;
          return {
            i: 1,
            disabled: false,
            abled:false,
            quizz:true,
            reponse:false,
            warn: false,
            idletime: 0,
            langue: false,
            idlewarn(){self.warn = true},
  
          }
      },
    methods: {
      retour() {
        this.disabled = false
        this.abled = true
      },
      idle(){
        var that = this
        clearTimeout(that.idletime)
        if(that.i > 1){
        that.idletime = setTimeout(function(){
          that.idlewarn()
            },300000)
          }
      },
      quizzrep() {
        this.quizz = false
        this.reponse = true
      },
      warnDisabled() {
        this.disabled = true
        this.abled = false
      },
      nextpage() {
        var that = this
        that.i += 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
        if(that.i == 3){
          setTimeout(function(){
        that.i += 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }, 3000);
        }
        if(that.i == 18){
          setTimeout(function(){
        that.i += 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }, 3000);
      setTimeout(function(){
        that.i += 1
      }, 3000);
      setTimeout(function(){
        that.i += 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }, 6000);
        }
        if(that.i == 20){
          setTimeout(function(){
        that.i += 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }, 3000);
        }
      },
      prevpage() {
        var that = this
        if(that.i > 1){
        that.i -= 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }
      if(that.i == 3){
        that.i -= 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }
      if(that.i == 18){
        that.i -= 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }
      if(that.i == 20){
        that.i -= 1
        console.log(that.i)
        this.abled = false
        this.quizz = true
        this.reponse = false
      }
      },
      homepage() {
        this.warn = true
      },
      langu() {
      this.langue = true
      },
      langclose() {
      this.langue = false
      },
      no() {
        this.warn = false
      },
      yes() {
        this.i = 1
        this.abled = false
        this.quizz = true
        this.reponse = false
        this.warn = false
      },
      },
    }
  </script>
  <style scoped>
  </style>
  