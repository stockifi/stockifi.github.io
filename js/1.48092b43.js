(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{staticClass:"bg-white text-dark",class:{"navbar--hidden":!t.showNavbar}},[s("div",{staticClass:"\n          container-fluid\n          nav-top-container-fluid\n          bg-dark\n          text-white\n          navbar\n        "},[s("div",{staticClass:"container pad-tb-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-7 col-sm-6 col-xs-12"},[s("div",{staticClass:"nav-top-line-height reg-txt text-center-m"},[t._v("\n                SEBI registered research analyst no. INH000008376\n              ")])]),s("div",{staticClass:"col-md-5 col-sm-6 col-xs-12 text-right"},[s("div",{staticClass:"nav-top-line-height text-center-m"},[s("a",{staticClass:"text-white",attrs:{href:"tel:+918369841801",target:"_blank"}},[t._v("\n                  +91 83698 41801")]),s("span",{staticClass:"sep"},[t._v("|")]),s("a",{staticClass:"text-white",attrs:{href:"mailto:info@stockifi.in",target:"_blank"}},[t._v("info@stockifi.in")])])])])])]),s("q-toolbar",{staticClass:"container header-menu"},[s("q-toolbar-title",[s("q-btn",{attrs:{to:"/",type:"a",flat:"",ripple:!1}},[s("img",{staticClass:"navbar-brand",attrs:{src:a("e347"),alt:"Stockifi | Investors ka dost"}})])],1),s("div",{staticClass:"gt-sm"},[s("q-btn",{attrs:{flat:"",to:"/about",label:"About"}}),s("q-btn",{attrs:{flat:"",to:"/philosophy",label:"Philosophy"}}),s("q-btn",{attrs:{flat:"",to:"/pricing",label:"Pricing Plans"}}),s("q-btn",{attrs:{flat:"",to:"/faq",label:"FAQ"}}),s("q-btn",{attrs:{to:"/pricing",color:"primary",outline:"",rounded:"",label:"Get Started"}})],1),s("q-btn",{staticClass:"lt-md",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.rightDrawerOpen=!t.rightDrawerOpen}}}),s("div")],1)],1),s("q-drawer",{attrs:{side:"right",elevated:""},model:{value:t.rightDrawerOpen,callback:function(e){t.rightDrawerOpen=e},expression:"rightDrawerOpen"}},[s("q-scroll-area",{staticClass:"fit"},[s("q-list",[s("q-item",[s("q-btn",{staticClass:"lt-md",attrs:{flat:"",dense:"",round:"",icon:"close","aria-label":"Menu"},on:{click:function(e){t.rightDrawerOpen=!t.rightDrawerOpen}}})],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"q-btn":"",flat:"",to:"/about"}},[s("q-item-secion",[s("q-btn",{attrs:{flat:"",to:"/about",label:"About"}})],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"q-btn":"",flat:"",to:"/philosophy"}},[s("q-item-secion",[s("q-btn",{attrs:{flat:"",to:"/philosophy",label:"Philosophy"}})],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"q-btn":"",flat:"",to:"/pricing"}},[s("q-item-secion",[s("q-btn",{attrs:{flat:"",to:"/pricing",label:"Pricing Plans"}})],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"q-btn":"",flat:"",to:"/faq"}},[s("q-item-secion",[s("q-btn",{attrs:{flat:"",to:"/faq",label:"FAQ"}})],1)],1),s("q-item",[s("q-item-secion",[s("q-btn",{attrs:{to:"/pricing",color:"primary",outline:"",rounded:"",label:"Get Started"}})],1)],1)],1)],1)],1),s("q-page-container",[s("router-view")],1),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"pad-b-50"},[t._v("Get Portfolio of 20-25 Multibagger Stocks")])])]),s("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[s("div",{staticClass:"row mb-40 pad-b-50"},[s("div",{staticClass:"col-md-2"}),s("div",{staticClass:"col-md-2"},[s("q-input",{ref:"guestName",attrs:{filled:"",label:"Your name *","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.guest.name,callback:function(e){t.$set(t.guest,"name",e)},expression:"guest.name"}})],1),s("div",{staticClass:"col-md-2",staticStyle:{"margin-left":"15px"}},[s("q-input",{ref:"guestPhone",attrs:{filled:"",label:"Phone Number *","lazy-rules":"",mask:"### ### ####"},model:{value:t.guest.phone,callback:function(e){t.$set(t.guest,"phone",e)},expression:"guest.phone"}})],1),s("div",{staticClass:"col-md-2",staticStyle:{"margin-left":"15px"}},[s("q-input",{ref:"guestEmail",attrs:{filled:"",label:"email","lazy-rules":"",type:"email"},model:{value:t.guest.email,callback:function(e){t.$set(t.guest,"email",e)},expression:"guest.email"}})],1),s("div",{staticClass:"col-md-3"},[s("q-btn",{staticStyle:{"margin-left":"15px",height:"56px",width:"290px"},attrs:{loading:t.guest.loading,color:"primary"},on:{click:function(e){return t.onSubmit()}},scopedSlots:t._u([{key:"loading",fn:function(){return[s("q-spinner-hourglass",{staticClass:"on-left"}),t._v(" Adding you to our guest\n                list\n              ")]},proxy:!0}])},[t._v("\n              Yes, I am interested!\n              ")])],1)])])],1),s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("h4",[t._v("SEBI Registered Investment Adviser Details:")]),s("div",{staticClass:"line-primary"}),s("p",[t._v("\n              Registered Name: Stockifi-Abhijit Chokshi "),s("br"),t._v("Type of\n              registration: Individual\n            ")])]),s("div",{staticClass:"col-md-4"},[s("h4",[t._v("SEBI Office Details:")]),s("div",{staticClass:"line-primary"}),s("p",[t._v("\n              SEBI Bhavan BKC, Plot No.C4-A, 'G' Block "),s("br"),t._v("Bandra-Kurla\n              Complex, Bandra (East), "),s("br"),t._v("Mumbai - 400051, Maharashtra\n            ")])]),s("div",{staticClass:"col-md-4"},[s("h4",[t._v("Additional Links")]),s("div",{staticClass:"line-primary"}),s("div",[s("div",[s("q-btn",{attrs:{type:"a",to:"privacy"}},[t._v("Privacy Policy")])],1),s("div",[s("q-btn",{attrs:{type:"a",to:"terms"}},[t._v("Terms of use")])],1)])])]),s("div",{staticClass:"masftrlasp"},[s("p",{staticClass:"text-center"},[t._v("\n            Our past performance does not guarantee the future performance.\n            Investment in equities is subject to market risks. Notwithstanding\n            all the efforts to do best research, clients should understand that\n            investing in equities involves a risk of loss of both income and\n            principal. Please ensure that you understand fully the risks\n            involved in investment in equities.\n          ")])])])]),s("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[s("a",{staticClass:"\n          q-btn q-btn-item\n          non-selectable\n          no-outline\n          q-btn--standard q-btn--rectangle q-btn--rounded\n          text-white\n          q-btn--actionable\n          q-focusable q-hoverable\n          q-btn--fab q-btn--wrap\n        ",attrs:{href:"https://api.whatsapp.com/send/?phone=918600056288&text=I%27m+inquiring+about+stockifi+from+website",tabindex:"0",type:"button",role:"button",target:"_blank"}},[s("img",{staticClass:"material-icons q-icon notranslate wa-cta",attrs:{src:"icons/whatsapp.svg"}})])])],1)},i=[],n={name:"MainLayout",components:{},data(){return{rightDrawerOpen:!1,showNavbar:!0,lastScrollPosition:0,guest:{phone:"",name:"",email:"",loading:!1},menuList:[{icon:"inbox",label:"Inbox",separator:!0},{icon:"send",label:"Outbox",separator:!1},{icon:"delete",label:"Trash",separator:!1},{icon:"error",label:"Spam",separator:!0},{icon:"settings",label:"Settings",separator:!1},{icon:"feedback",label:"Send Feedback",separator:!1},{icon:"help",iconColor:"primary",label:"Help",separator:!1}]}},methods:{onScroll(){const t=window.pageYOffset||document.documentElement.scrollTop;t<0||(this.showNavbar=t<1,this.lastScrollPosition=t)},simulateProgress(){this.guest.loading=!0,setTimeout((()=>{this.guest.loading=!1}),3e3)},onSubmit(){this.$refs["guestName"].validate(),this.$refs["guestEmail"].validate(),this.$refs["guestPhone"].validate();let t=!1;(this.$refs["guestName"].hasError||this.$refs["guestEmail"].hasError||this.$refs["guestPhone"].hasError)&&(t=!0),t||this.$q.notify({icon:"done",color:"positive",message:"Submitted"})},onReset(){}},mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)}},r=n,l=a("2877"),o=a("4d5a"),c=a("e359"),d=a("65c6"),p=a("6ac5"),u=a("9c40"),m=a("9404"),b=a("4983"),v=a("1c1c"),h=a("66e5"),f=a("09e3"),g=a("0378"),q=a("27f9"),w=a("9149"),C=a("de5e"),y=a("0016"),k=a("714f"),x=a("eebe"),S=a.n(x),_=Object(l["a"])(r,s,i,!1,null,null,null);e["default"]=_.exports;S()(_,"components",{QLayout:o["a"],QHeader:c["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QBtn:u["a"],QDrawer:m["a"],QScrollArea:b["a"],QList:v["a"],QItem:h["a"],QPageContainer:f["a"],QForm:g["a"],QInput:q["a"],QSpinnerHourglass:w["a"],QPageSticky:C["a"],QIcon:y["a"]}),S()(_,"directives",{Ripple:k["a"]})},e347:function(t,e,a){t.exports=a.p+"img/logo.ffeecb25.svg"}}]);