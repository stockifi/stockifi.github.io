(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"24d0":function(e,t,s){"use strict";s("a560")},"551a":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center container q-pa-md"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 margin-b-30"},[s("div",{staticClass:"section-title text-center"},[s("h3",[s("span",{attrs:{id:"lblTitle"}},[e._v("Investment Choices")])]),s("h2",[s("span",{attrs:{id:"lblSubTitle"}},[e._v("Research Based Stock Recommendations")])])])])]),s("div",{staticClass:"q-pa-md row q-gutter-xl pricing-plans pad-b-50"},e._l(e.pricing_plans.filter((function(e){return e.enabled})),(function(t){return s("q-card",{key:t.name,staticClass:"my-card"},[s("q-card-section",[s("div",{staticClass:"row no-wrap items-center"},[s("div",{staticClass:"col text-h6 ellipsis"},[e._v("\n              "+e._s(t.name)+" "+e._s(t.subtext)+"\n            ")])])]),s("q-card-section",{staticClass:"q-pt-none"},[s("div",{},[e._v("\n            "+e._s(t.description)+"  \n          ")]),t.duration_months?s("div",{staticClass:"text-subtitle1"},[e._v("\n          Duration: "+e._s(t.duration_months)+" Months\n          ")]):e._e(),t.duration_months?e._e():s("div",{staticClass:"text-subtitle1"},[e._v("\n           \n          ")]),s("div",{staticClass:"pad-b-30"},[e._v("\n            Membership Fees: "),s("span",{staticClass:"text-bold"},[e._v(e._s(t.price_display))])]),e._l(Object.keys(t.features),(function(a){return s("div",{key:a,staticClass:"text-caption"},[t.features[a]?s("div",[t.features[a]?s("span",[e._v("✅")]):e._e(),e._v(" "+e._s(a)+" "),"string"==typeof t.features[a]?s("span",{staticClass:"text-bold"},[e._v(": "+e._s(t.features[a]))]):e._e()]):e._e(),t.features[a]?e._e():s("div",[t.features[a]?s("span",[e._v("✅")]):e._e(),s("strike",[e._v(e._s(a))])],1)])}))],2),s("q-separator"),s("q-card-actions",{staticClass:"justify-center"},[s("q-btn",{staticClass:"text-bold getting-started",attrs:{outline:"",rounded:"",color:"primary"},on:{click:function(s){return e.razorPay(t)}}},[e._v("\n          Get Started >>\n          ")])],1)],1)})),1),s("faq")],1),s("q-dialog",{model:{value:e.paymentSuccess,callback:function(t){e.paymentSuccess=t},expression:"paymentSuccess"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6 text-center"},[e._v("Congratulations! All set.")])]),s("q-card-section",{staticClass:"q-pt-none text-center"},[s("SuccessAnimation"),s("div",{staticClass:"pad-top-20"},[s("p",[e._v("Payment Successful, Your membership is now activated. "),s("br"),e._v("You'll start receiving updates of premium stock ideas via whatsapp"),s("br"),e._v("on your phone number (i.e. "+e._s(e.buyer.phone)+")")]),s("p",[e._v("Kindly save this "),s("b",[e._v("+91 8600056288")]),e._v(" number in your contact list "),s("br"),e._v("for further communication")])])],1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"primary"}})],1)],1)],1)],1)},i=[],n=s("d2c1"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"checkmark",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[s("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),s("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})])},o=[],c={name:"SuccessAnimation",props:{}},l=c,d=(s("24d0"),s("2877")),p=Object(d["a"])(l,r,o,!1,null,"3b6442d2",null),m=p.exports,u={data(){return{apiBase:"//admin.stockifi.in",paymentSuccess:!1,buyer:{name:"",email:"",phone:"",address:""},pricing_plans:[{enabled:!1,name:"Free",stars:0,subtext:"",description:"",preffered:!1,duration_months:0,price_display:"Free",price:0,discount:"",tax:!1,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:!1,"Stock recommendations":"1 stock","Free recommendations":!0,"Allocation Strategy":!1,"BUY & SELL Alerts":!1,"Dedicated Relationship manager":!1,"SIP Stocks":!1,"One time Portfolio Review & Optimization":!1}},{enabled:!1,name:"Basic",stars:1,subtext:"⭐️",description:"",preffered:!1,duration_months:6,price_display:"13,999 + GST",price:13999,discount:"",tax:!0,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:"Limited","Stock recommendations":"10 to 12 stocks","Free recommendations":!0,"Allocation Strategy":!0,"BUY & SELL Alerts":!1,"Dedicated Relationship manager":!1,"SIP Stocks":!1,"One time Portfolio Review & Optimization":!1}},{enabled:!0,name:"Premium",subtext:"⭐️⭐️",stars:2,description:"(Popular)",preffered:!1,duration_months:12,price_display:"21,499 (Inclusive all taxes)",price:21499,discount:"Save (15%)",tax:!1,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:"Unlimited","Stock recommendations":"20 to 22 stocks","Free recommendations":!0,"Allocation Strategy":!0,"BUY & SELL Alerts":!0,"Dedicated Relationship manager":!0,"SIP Stocks":!0,"One time Portfolio Review & Optimization":!1}},{enabled:!0,name:"Ultra Premium",stars:5,subtext:"⭐️⭐️⭐️",description:"(Highest Returns)",preffered:!1,duration_months:24,price_display:"36,999 (Inclusive all taxes)",price:36999,discount:"Save (20%)",tax:!1,site_launch_offer:"WC2STOCKIFI",features:{"Legacy Research Reports":!0,Queries:"Unlimited","Stock recommendations":"40 to 45 stocks","Free recommendations":!0,"Allocation Strategy":!0,"BUY & SELL Alerts":!0,"Dedicated Relationship manager":!0,"SIP Stocks":!0,"One time Portfolio Review & Optimization":!0}}]}},name:"PagePricing",components:{faq:n["a"],SuccessAnimation:m},mounted(){},methods:{saveTransactionResp(e,t){let s={buyer:this.buyer,resp:e,req:t};axios.post(""),console.log(s)},razorPay(e){let t=this,s=100*e.price;e.tax&&(s+=.18*s);let a={key:"rzp_live_x0I5jwsAEIXuKs",amount:s,name:"Stockifi",description:e.name+" "+e.duration_months+" months",image:"/images/favicon-128x128.png",handler:function(e){void 0!=typeof e.razorpay_payment_id&&e.razorpay_payment_id&&(t.paymentSuccess=!0,t.saveTransactionResp(e,a))},prefill:{name:this.buyer.name,email:this.buyer.email,contact:this.buyer.phone},notes:{address:this.buyer.address,plan:e.name+" "+e.duration_months+" months",plan_price:e.price},theme:{color:"#29CF9B"}},i=new Razorpay(a);i.open()}},meta:{title:"Investors ka dost, Multibagger stocks ",titleTemplate:e=>`${e} - Stockifi`,meta:{description:{name:"description",content:"Page 1"},keywords:{name:"keywords",content:"Quasar website"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"},ogTitle:{name:"og:title",template(e){return`${e} - My Website`}}}}},_=u,f=s("9989"),v=s("f09f"),h=s("a370"),b=s("eb85"),y=s("4b7e"),C=s("9c40"),S=s("24e8"),g=s("7f67"),x=s("eebe"),k=s.n(x),q=Object(d["a"])(_,a,i,!1,null,null,null);t["default"]=q.exports;k()(q,"components",{QPage:f["a"],QCard:v["a"],QCardSection:h["a"],QSeparator:b["a"],QCardActions:y["a"],QBtn:C["a"],QDialog:S["a"]}),k()(q,"directives",{ClosePopup:g["a"]})},a560:function(e,t,s){},d2c1:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md faqs",staticStyle:{width:"100%"}},[e._m(0),s("q-list",{staticClass:"rounded-borders"},e._l(e.faqs,(function(t){return s("q-expansion-item",{key:t.id,attrs:{"expand-separator":"",label:t.question}},[s("q-card",[s("q-card-section",[s("div",{domProps:{innerHTML:e._s(t.answer)}})])],1)],1)})),1)],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 margin-b-30"},[s("div",{staticClass:"section-title text-center"},[s("h3",[s("span",{attrs:{id:"lblTitle"}},[e._v("Frequently Asked Questions")])]),s("h2",[s("span",{attrs:{id:"lblSubTitle"}},[e._v("Most Common Questions")])])])])])}],n=s("bd4c"),r={name:"FAQs",props:{limit:{type:Number,default:0}},components:{},methods:{formatDate(e){return n["a"].formatDate(new Date(e),"MMM YYYY")}},data(){return{loaded:!1,faqs:[]}},created(){this.$store.dispatch("faqs/getAll").then((e=>{this.limit>0&&(e=e.filter(((e,t)=>t<=this.limit))),this.faqs=e,this.loaded=!0})).catch((()=>{}))}},o=r,c=s("2877"),l=s("1c1c"),d=s("3b73"),p=s("f09f"),m=s("a370"),u=s("eebe"),_=s.n(u),f=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=f.exports;_()(f,"components",{QList:l["a"],QExpansionItem:d["a"],QCard:p["a"],QCardSection:m["a"]})}}]);