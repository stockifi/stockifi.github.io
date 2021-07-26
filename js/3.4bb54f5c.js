(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"24d0":function(e,t,a){"use strict";a("a560")},"551a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center container q-pa-md"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 margin-b-30"},[a("div",{staticClass:"section-title text-center"},[a("h3",[a("span",{attrs:{id:"lblTitle"}},[e._v("Investment Choices")])]),a("h2",[a("span",{attrs:{id:"lblSubTitle"}},[e._v("Research Based Stock Recommendations")])])])])]),a("div",{staticClass:"q-pa-md row q-gutter-xl pricing-plans pad-b-50"},e._l(e.pricing_plans.filter((function(e){return e.enabled})),(function(t){return a("q-card",{key:t.name,staticClass:"my-card"},[a("q-card-section",[a("div",{staticClass:"row no-wrap items-center"},[a("div",{staticClass:"col text-h6 ellipsis"},[e._v("\n                "+e._s(t.name)+" "+e._s(t.subtext)+"\n              ")])])]),a("q-card-section",{staticClass:"q-pt-none"},[a("div",{},[e._v(e._s(t.description)+"  ")]),t.duration_months?a("div",{staticClass:"text-subtitle1"},[e._v("\n              Duration: "+e._s(t.duration_months)+" Months\n            ")]):e._e(),t.duration_months?e._e():a("div",{staticClass:"text-subtitle1"},[e._v("\n               \n            ")]),a("div",{staticClass:"pad-b-30"},[e._v("\n              Membership Fees:\n              "),a("span",{staticClass:"text-bold"},[e._v(e._s(t.price_display))])]),e._l(Object.keys(t.features),(function(s){return a("div",{key:s,staticClass:"text-caption"},[t.features[s]?a("div",[t.features[s]?a("span",[e._v("✅")]):e._e(),e._v(" "+e._s(s)+"\n                "),"string"==typeof t.features[s]?a("span",{staticClass:"text-bold"},[e._v(": "+e._s(t.features[s]))]):e._e()]):e._e(),t.features[s]?e._e():a("div",[t.features[s]?a("span",[e._v("✅")]):e._e(),a("strike",[e._v(e._s(s))])],1)])}))],2),a("q-separator"),a("q-card-actions",{staticClass:"justify-center"},[a("q-btn",{staticClass:"text-bold getting-started",attrs:{outline:"",rounded:"",color:"primary"},on:{click:function(a){return e.getUserDetails(t)}}},[e._v("\n              Get Started >>\n            ")])],1)],1)})),1),a("faq")],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.userInfoDialog,callback:function(t){e.userInfoDialog=t},expression:"userInfoDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Your Contact Details")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{ref:"buyer_name",attrs:{label:"Name",dense:"",autofocus:"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.buyer.name,callback:function(t){e.$set(e.buyer,"name",t)},expression:"buyer.name"}}),a("q-input",{ref:"buyer_phone",attrs:{label:"Phone",dense:"","lazy-rules":"",rules:[function(e){return e&&10==e.length||"Please type something"}],mask:"##########"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.buyer.phone,callback:function(t){e.$set(e.buyer,"phone",t)},expression:"buyer.phone"}}),a("q-input",{ref:"buyer_email",attrs:{label:"Email",dense:"","lazy-rules":"",rules:[function(e){return!!e||"Email is missing"},e.isValidEmail],type:"email"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.buyer.email,callback:function(t){e.$set(e.buyer,"email",t)},expression:"buyer.email"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{attrs:{color:"primary",label:"Pay now"},on:{click:function(t){return e.razorPay()}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:e.paymentSuccess,callback:function(t){e.paymentSuccess=t},expression:"paymentSuccess"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[e._v("Congratulations! All set.")])]),a("q-card-section",{staticClass:"q-pt-none text-center"},[a("SuccessAnimation"),a("div",{staticClass:"pad-top-20"},[a("p",[e._v("\n              Payment Successful, Your membership is now activated. "),a("br"),e._v("You'll\n              start receiving updates of premium stock ideas via whatsapp"),a("br"),e._v("on\n              your phone number (i.e. "+e._s(e.buyer.phone)+")\n            ")]),a("p",[e._v("\n              Kindly save this "),a("b",[e._v("+91 8600056288")]),e._v(" number in your contact list\n              "),a("br"),e._v("for further communication\n            ")])])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"primary"}})],1)],1)],1)],1)},n=[],i=a("d2c1"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"checkmark",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[a("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),a("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})])},o=[],c={name:"SuccessAnimation",props:{}},l=c,u=(a("24d0"),a("2877")),p=Object(u["a"])(l,r,o,!1,null,"3b6442d2",null),d=p.exports,m=a("bc3a"),f=a.n(m),h={data(){return{apikey:"rzp_live_x0I5jwsAEIXuKs",rzpOptions:{},userInfoDialog:!1,selectedPlan:null,apiBase:"//admin.stockifi.in",paymentSuccess:!1,buyer:{name:"",email:"",phone:"",address:""},paymentResponse:null,pricing_plans:[{enabled:!1,name:"Free",stars:0,subtext:"",description:"",preffered:!1,duration_months:0,price_display:"Free",price:0,discount:"",tax:!1,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:!1,"Stock recommendations":"1 stock","Free recommendations":!0,"Allocation Strategy":!1,"BUY & SELL Alerts":!1,"Dedicated Relationship manager":!1,"SIP Stocks":!1,"One time Portfolio Review & Optimization":!1}},{enabled:!1,name:"Basic",stars:1,subtext:"⭐️",description:"",preffered:!1,duration_months:6,price_display:"13,999 + GST",price:13999,discount:"",tax:!0,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:"Limited","Stock recommendations":"10 to 12 stocks","Free recommendations":!0,"Allocation Strategy":!0,"BUY & SELL Alerts":!1,"Dedicated Relationship manager":!1,"SIP Stocks":!1,"One time Portfolio Review & Optimization":!1}},{enabled:!0,name:"Premium",subtext:"⭐️⭐️",stars:2,description:"(Popular)",preffered:!1,duration_months:12,price_display:"21,499 (Inclusive all taxes)",price:21499,discount:"Save (15%)",tax:!1,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:"Unlimited","Stock recommendations":"20 to 22 stocks","Free recommendations":!0,"Allocation Strategy":!0,"BUY & SELL Alerts":!0,"Dedicated Relationship manager":!0,"SIP Stocks":!0,"One time Portfolio Review & Optimization":!1}},{enabled:!0,name:"Ultra Premium",stars:5,subtext:"⭐️⭐️⭐️",description:"(Highest Returns)",preffered:!1,duration_months:24,price_display:"36,999 (Inclusive all taxes)",price:36999,discount:"Save (20%)",tax:!1,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:"Unlimited","Stock recommendations":"40 to 45 stocks","Free recommendations":!0,"Allocation Strategy":!0,"BUY & SELL Alerts":!0,"Dedicated Relationship manager":!0,"SIP Stocks":!0,"One time Portfolio Review & Optimization":!0}}]}},name:"PagePricing",components:{faq:i["a"],SuccessAnimation:d},mounted(){},methods:{isValidEmail(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)||"Invalid email"},setPlanOptions(e){let t=this,a=100*e.price;return e.tax&&(a+=.18*a),this.rzpOptions={key:"rzp_live_x0I5jwsAEIXuKs",amount:a,name:"Stockifi",description:e.name+" "+e.duration_months+" months",image:"/images/favicon-128x128.png",handler:function(e){void 0!=typeof e.razorpay_payment_id&&e.razorpay_payment_id&&(t.paymentSuccess=!0,t.saveTransactionResp(e,t.rzpOptions))},prefill:{name:this.buyer.name,email:this.buyer.email,contact:this.buyer.phone},notes:{address:this.buyer.address,plan:e.name+" "+e.duration_months+" months",plan_price:e.price},theme:{color:"#29CF9B"}},this.rzpOptions},saveTransactionResp(e,t){this.paymentResponse=e;let a={buyer_name:this.buyer.name,buyer_email:this.buyer.email,buyer_phone:this.buyer.phone,buyer_address:this.buyer.address,amount:t.amount,transaction_id:e.razorpay_payment_id,req:t,resp:e,mode:this.apikey.indexOf("test")>=0?"TEST":"LIVE"};f.a.post("https:"+this.apiBase+"/transactions",a).then((function(e){})).catch((function(e){}))},getUserDetails(e){this.userInfoDialog=!0,this.selectedPlan=e},razorPay(){this.$refs["buyer_name"].validate(),this.$refs["buyer_email"].validate(),this.$refs["buyer_phone"].validate();let e=!1;if((this.$refs["buyer_name"].hasError||this.$refs["buyer_email"].hasError||this.$refs["buyer_phone"].hasError)&&(e=!0),!e){this.userInfoDialog=!1,this.setPlanOptions(this.selectedPlan);let e=new Razorpay(this.rzpOptions);e.open()}}},meta:{title:"Investors ka dost, Multibagger stocks ",titleTemplate:e=>`${e} - Stockifi`,meta:{description:{name:"description",content:"Page 1"},keywords:{name:"keywords",content:"Quasar website"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"},ogTitle:{name:"og:title",template(e){return`${e} - My Website`}}}}},_=h,y=a("9989"),b=a("f09f"),v=a("a370"),k=a("eb85"),g=a("4b7e"),C=a("9c40"),x=a("24e8"),S=a("27f9"),q=a("7f67"),w=a("eebe"),I=a.n(w),P=Object(u["a"])(_,s,n,!1,null,null,null);t["default"]=P.exports;I()(P,"components",{QPage:y["a"],QCard:b["a"],QCardSection:v["a"],QSeparator:k["a"],QCardActions:g["a"],QBtn:C["a"],QDialog:x["a"],QInput:S["a"]}),I()(P,"directives",{ClosePopup:q["a"]})},a560:function(e,t,a){},d2c1:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md faqs",staticStyle:{width:"100%"}},[e._m(0),a("q-list",{staticClass:"rounded-borders"},e._l(e.faqs,(function(t){return a("q-expansion-item",{key:t.id,attrs:{"expand-separator":"",label:t.question}},[a("q-card",[a("q-card-section",[a("div",{domProps:{innerHTML:e._s(t.answer)}})])],1)],1)})),1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 margin-b-30"},[a("div",{staticClass:"section-title text-center"},[a("h3",[a("span",{attrs:{id:"lblTitle"}},[e._v("Frequently Asked Questions")])]),a("h2",[a("span",{attrs:{id:"lblSubTitle"}},[e._v("Most Common Questions")])])])])])}],i=a("bd4c"),r={name:"FAQs",props:{limit:{type:Number,default:0}},components:{},methods:{formatDate(e){return i["a"].formatDate(new Date(e),"MMM YYYY")}},data(){return{loaded:!1,faqs:[]}},created(){this.$store.dispatch("faqs/getAll").then((e=>{this.limit>0&&(e=e.filter(((e,t)=>t<=this.limit))),this.faqs=e,this.loaded=!0})).catch((()=>{}))}},o=r,c=a("2877"),l=a("1c1c"),u=a("3b73"),p=a("f09f"),d=a("a370"),m=a("eebe"),f=a.n(m),h=Object(c["a"])(o,s,n,!1,null,null,null);t["a"]=h.exports;f()(h,"components",{QList:l["a"],QExpansionItem:u["a"],QCard:p["a"],QCardSection:d["a"]})}}]);