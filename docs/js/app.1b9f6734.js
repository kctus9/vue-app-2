(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d2b3ab66"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app-2/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"123e":function(e,t,n){},"4c97":function(e,t,n){"use strict";n("123e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view"),n("footer",[e._v(" o ")])],1)},a=[],i=(n("034f"),n("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null),c=u.exports,l=n("9483");Object(l["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello row"},[n("div",{staticClass:"col-md-12"},[n("h1",[e._v("Pick a bus stop")]),n("form",{attrs:{id:"main"}},[n("div",{staticClass:"bar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],attrs:{type:"text",placeholder:"Enter your search terms"},domProps:{value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)}}})]),n("ul",e._l(e.filteredBusStops,(function(t){return n("li",[n("router-link",{attrs:{to:{name:"Map",params:{id:t.fields.stop_id}}}},[n("p",[e._v(e._s(t.fields.stop_name))])])],1)})),0)])])])},h=[],v=(n("4de4"),n("4160"),n("c975"),n("498a"),n("159b"),"https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_tan-arrets&q=&rows=10000"),b={name:"HelloWorld",props:{msg:String},data:function(){return{form:{stop:""},data:Array,searchString:""}},created:function(){},mounted:function(){var e=this;this.axios.get(v).then((function(t){return e.data=t.data.records}))},computed:{filteredBusStops:function(){var e=this.data,t=this.searchString;return t?(t=t.trim().toLowerCase(),e=e.filter((function(e){if(-1!==e.fields.stop_name.toLowerCase().indexOf(t))return e})),e):e}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},compare:function(e,t){return(""+e[0]).localeCompare(t[0])},getNames:function(){var e=new Array;return this.data.forEach((function(t){e.push(t.fields.stop_name)})),e}}},g=b,w=(n("9b06"),Object(i["a"])(g,m,h,!1,null,"552c98ea",null)),_=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map row"},[n("div",{staticClass:"col-sm-12"},[n("h1",[e._v("Informations about "+e._s(this.busStopInfo.stop_name))]),this.accessible()?n("p",[e._v("This bus stop is designed for wheelchairs users")]):e._e(),n("div",{staticClass:"map row"},[n("GmapMap",{staticStyle:{width:"100%",height:"700px"},attrs:{center:{lat:this.busStopInfo.stop_coordinates[0],lng:this.busStopInfo.stop_coordinates[1]},zoom:14,"map-type-id":"roadmap"}},[n("GmapMarker",{attrs:{position:{lat:this.busStopInfo.stop_coordinates[0],lng:this.busStopInfo.stop_coordinates[1]}}})],1)],1)])])},S=[],k="https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_tan-arrets&q=",j={name:"Map",props:{},data:function(){return{data:null,busStopInfo:null}},created:function(){},mounted:function(){console.log(this.$route.params.id);var e=this;this.axios.get(k+this.$route.params.id).then((function(t){return e.busStopInfo=t.data.records[0].fields}))},methods:{accessible:function(){return"0"!=this.busStopInfo.wheelchair_boarding},intiMap:function(){var e={lat:-25.363,lng:131.044},t=new google.maps.Map(document.getElementById("map"),{zoom:4,center:e});new google.maps.Marker({position:e,map:t,title:"Hello World!"})},initMarkers:function(){}}},O=j,x=(n("4c97"),Object(i["a"])(O,y,S,!1,null,"eecc92ea",null)),C=x.exports,M={name:"Home",components:{HelloWorld:_,Map:C},data:function(){return{}}},P=M,E=Object(i["a"])(P,f,d,!1,null,null,null),I=E.exports;o["default"].use(p["a"]);var A=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/map/:id",name:"Map",component:C}],H=new p["a"]({routes:A}),N=H,T=n("bc3a"),$=n.n(T),L=n("2106"),q=n.n(L),B=n("5f5b"),W=n("b1e0"),z=(n("f9e3"),n("2dd8"),n("755e"));o["default"].use(B["a"]),o["default"].use(W["a"]),o["default"].config.productionTip=!1,o["default"].use(q.a,$.a),o["default"].use(z,{load:{key:"AIzaSyCwwC6NXkx5LG7ekPj8Pk2itllmmlaLalM",libraries:"places"}}),o["default"].config.productionTip=!1,new o["default"]({router:N,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},"9b06":function(e,t,n){"use strict";n("cec4")},cec4:function(e,t,n){}});
//# sourceMappingURL=app.1b9f6734.js.map