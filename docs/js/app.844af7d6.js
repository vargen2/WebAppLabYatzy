(function(e){function t(t){for(var n,s,c=t[0],a=t[1],u=t[2],d=0,f=[];d<c.length;d++)s=c[d],o[s]&&f.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/WebAppLabYatzy/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"079d":function(e,t,r){"use strict";var n=r("865b"),o=r.n(n);o.a},1148:function(e,t,r){},"1bb8":function(e,t,r){e.exports=r.p+"img/Dice-1.9ab90e15.svg"},"3b2b":function(e,t,r){var n={"./Dice-1.svg":"1bb8","./Dice-2.svg":"b785","./Dice-3.svg":"c34a","./Dice-4.svg":"4a4a","./Dice-5.svg":"d738","./Dice-6.svg":"fef9"};function o(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="3b2b"},"3fef":function(e,t,r){"use strict";var n=r("613c"),o=r.n(n);o.a},"46b0":function(e,t,r){"use strict";var n=r("9515"),o=r.n(n);o.a},"4a4a":function(e,t,r){e.exports=r.p+"img/Dice-4.ca775ae8.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Yatzy",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Yatzy")]),r("a",{attrs:{href:"https://github.com/vargen2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vargen2")]),r("a",{attrs:{href:"https://www.iths.se",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.iths.se")])]),r("div",{staticClass:"column"},[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuejs.org")]),r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuex.vuejs.org")]),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cli.vuejs.org")])])])])}],s=(r("034f"),r("2877")),c={},a=Object(s["a"])(c,o,i,!1,null,null,null),u=a.exports,l=r("5d73"),d=r.n(l),f=r("2f62"),v=function(e){return 0!==e.length},m=function(e){return e.map(function(e){return e.side}).filter(function(e){return 1===e}).reduce(function(e,t){return e+t},0)},p={maxPoints:5,validator:v,points:m},h=function(e){return e.map(function(e){return e.side}).filter(function(e){return 2===e}).reduce(function(e,t){return e+t},0)},y={maxPoints:10,validator:v,points:h},g=function(e){return e.map(function(e){return e.side}).filter(function(e){return 3===e}).reduce(function(e,t){return e+t},0)},w={maxPoints:15,validator:v,points:g},b=function(e){return e.map(function(e){return e.side}).filter(function(e){return 4===e}).reduce(function(e,t){return e+t},0)},k={maxPoints:20,validator:v,points:b},x=function(e){return e.map(function(e){return e.side}).filter(function(e){return 5===e}).reduce(function(e,t){return e+t},0)},R={maxPoints:25,validator:v,points:x},_=function(e){return e.map(function(e){return e.side}).filter(function(e){return 6===e}).reduce(function(e,t){return e+t},0)},C={maxPoints:30,validator:v,points:_},S=function(e){if(0===e.length)return!1;var t=[!1,!1,!1,!1,!1,!1],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]=!0}}catch(a){n=!0,o=a}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return!!(t[0]&&t[1]&&t[2]&&t[3]&&t[4])},D=function(e){return S(e)?15:0},P={maxPoints:15,validator:S,points:D},O=function(e){if(0===e.length)return!1;var t=[!1,!1,!1,!1,!1,!1],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]=!0}}catch(a){n=!0,o=a}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return!!(t[1]&&t[2]&&t[3]&&t[4]&&t[5])},$=function(e){return O(e)?20:0},T={maxPoints:20,validator:O,points:$},j=function(e){if(0===e.length)return!1;var t=e[0].side,r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;if(t!==c.side)return!1}}catch(a){n=!0,o=a}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return!0},I=function(e){return j(e)?50:0},K={maxPoints:50,validator:j,points:I},G=function(e){return e.map(function(e){return e.side}).reduce(function(e,t){return e+t},0)},E={maxPoints:30,validator:v,points:G},B=function(e){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(m){n=!0,o=m}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=!1,u=!1,l=0,f=t;l<f.length;l++){var v=f[l];3===v?a=!0:2===v&&(u=!0)}return!(!a||!u)},N=function(e){return B(e)?e.map(function(e){return e.side}).reduce(function(e,t){return e+t},0):0},A={maxPoints:28,validator:B,points:N},F=function(e){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(f){n=!0,o=f}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0,u=t;a<u.length;a++){var l=u[a];if(l>=3)return!0}return!1},L=function(e){if(F(e)){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(u){n=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0;a<t.length;a++)if(t[a]>=3)return 3*(a+1)}return 0},M={maxPoints:18,validator:F,points:L},U=function(e){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(f){n=!0,o=f}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0,u=t;a<u.length;a++){var l=u[a];if(l>=4)return!0}return!1},Y=function(e){if(U(e)){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(u){n=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0;a<t.length;a++)if(t[a]>=4)return 4*(a+1)}return 0},z={maxPoints:24,validator:U,points:Y},H=function(e){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(f){n=!0,o=f}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0,u=t;a<u.length;a++){var l=u[a];if(l>=2)return!0}return!1},J=function(e){if(H(e)){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(l){n=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0,u=0;u<t.length;u++)t[u]>=2&&(a=Math.max(a,2*(u+1)));return a}return 0},W={maxPoints:12,validator:H,points:J},X=function(e){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(v){n=!0,o=v}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0,u=0,l=t;u<l.length;u++){var f=l[u];f>=2&&a++}return 2===a},q=function(e){if(X(e)){var t=[0,0,0,0,0,0],r=!0,n=!1,o=void 0;try{for(var i,s=d()(e);!(r=(i=s.next()).done);r=!0){var c=i.value;t[c.side-1]++}}catch(l){n=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}for(var a=0,u=0;u<t.length;u++)t[u]>=2&&(a+=2*(u+1));return a}return 0},Q={maxPoints:22,validator:X,points:q},V=[{name:"Aces",description:"(Key 1) Sum of Ones",score:"The sum of dice with the number 1",dices:[],rule:p,keyCode:49},{name:"Twos",description:"(Key 2) Sum of Twos",score:"The sum of dice with the number 2",dices:[],rule:y,keyCode:50},{name:"Threes",description:"(Key 3) Sum of Threes",score:"The sum of dice with the number 3",dices:[],rule:w,keyCode:51},{name:"Fours",description:"(Key 4) Sum of Fours",score:"The sum of dice with the number 4",dices:[],rule:k,keyCode:52},{name:"Fives",description:"(Key 5) Sum of Fives",score:"The sum of dice with the number 5",dices:[],rule:R,keyCode:53},{name:"Sixes",description:"(Key 6) Sum of Sixes",score:"The sum of dice with the number 6",dices:[],rule:C,keyCode:54},{name:"Bonus",description:"50p if sum of Aces to Sixes more than 63",score:"50",dices:[],rule:{maxPoints:50,nonInteractive:!0,validator:function(){return!1},points:function(){for(var e=0,t=0;t<V.length-1;t++){var r=V[t];r.dices&&r.scoreFunc&&(e+=r.scoreFunc(r.dices))}return e>=63?50:0}}},{name:"Yahtzee",description:"(Key L) All five same",score:"50",dices:[],rule:K,keyCode:76}],Z=[{name:"One Pair",description:"(Key A) One pair",score:"Sum of pair",dices:[],rule:W,keyCode:65},{name:"Two Pairs",description:"(Key S) Two pair of different dice",score:"Sum of pairs",dices:[],rule:Q,keyCode:83},{name:"Three Of A Kind",description:"(Key D) Three of same",score:"Sum of three",dices:[],rule:M,keyCode:68},{name:"Four Of A Kind",description:"(Key F) Four of same",score:"Sum of four",dices:[],rule:z,keyCode:70},{name:"Small Straight",description:"(Key G) 1-2-3-4-5",score:"15",dices:[],rule:P,keyCode:71},{name:"Large Straight",description:"(Key H) 2-3-4-5-6",score:"20",dices:[],rule:T,keyCode:72},{name:"Full House",description:"(Key J) Three of same, two of another",score:"Sum of all dice",dices:[],rule:A,keyCode:74},{name:"Chance",description:"(Key K) Any combination",score:"Sum of all dice",dices:[],rule:E,keyCode:75}],ee=15;n["a"].use(f["a"]);var te=new f["a"].Store({state:{dices:[],upperScores:[],lowerScores:[],totalScore:null,gameRound:null,maxGameRound:null,rollRound:null,showDesc:!1,rolling:!1},setters:{},mutations:{initGame:function(e){e.dices=[{side:1,isInteractive:!1,locked:!1,rolling:!1},{side:1,isInteractive:!1,locked:!1,rolling:!1},{side:1,isInteractive:!1,locked:!1,rolling:!1},{side:1,isInteractive:!1,locked:!1,rolling:!1},{side:1,isInteractive:!1,locked:!1,rolling:!1}],e.upperScores=V,e.lowerScores=Z,e.totalScore={name:"Total",description:"Total Points",score:"The sum of all points",dices:[],rule:{validator:function(){return!1},points:function(){var t=0,r=!0,n=!1,o=void 0;try{for(var i,s=d()(e.upperScores);!(r=(i=s.next()).done);r=!0){var c=i.value;t+=c.rule.points(c.dices)}}catch(p){n=!0,o=p}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}var a=!0,u=!1,l=void 0;try{for(var f,v=d()(e.lowerScores);!(a=(f=v.next()).done);a=!0){var m=f.value;t+=m.rule.points(m.dices)}}catch(p){u=!0,l=p}finally{try{a||null==v.return||v.return()}finally{if(u)throw l}}return t}}},e.gameRound=0,e.maxGameRound=ee,e.rollRound=0,e.showDesc=!1},roll:function(e){if(!(e.rollRound>=3||e.gameRound>=e.maxGameRound)){for(var t=0;t<e.dices.length;t++)e.dices[t].isInteractive=!0,e.dices[t].locked||(e.dices[t].side=Math.floor(6*Math.random()+1));e.rollRound++,e.rolling=!0,setTimeout(function(){e.rolling=!1},600)}},nextRound:function(e){this.commit("resetRound")},lockDice:function(e,t){0!==e.rollRound&&(e.dices[t].locked=!e.dices[t].locked)},resetRound:function(e){if(e.rollRound=0,!(e.gameRound>=e.maxGameRound)){e.gameRound++;var t=!0,r=!1,n=void 0;try{for(var o,i=d()(e.dices);!(t=(o=i.next()).done);t=!0){var s=o.value;s.locked=!1,s.isInteractive=!1}}catch(c){r=!0,n=c}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}},selectUpperScore:function(e,t){0===e.rollRound||e.upperScores[t].dices.length>0||e.upperScores[t].rule.nonInteractive||(e.upperScores[t].dices=e.dices.map(function(e){return{side:e.side,isInteractive:!1,locked:!1}}),this.commit("resetRound"))},selectLowerScore:function(e,t){0===e.rollRound||e.lowerScores[t].dices.length>0||(e.lowerScores[t].dices=e.dices.map(function(e){return{side:e.side,isInteractive:!1,locked:!1}}),this.commit("resetRound"))},showDesc:function(e){e.showDesc=!e.showDesc}}}),re=r("8c4f"),ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Game")],1)},oe=[],ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[r("game-round-bar",{attrs:{currentRound:e.gameRound,maxRounds:15}}),r("div",{staticClass:"row green"},[r("div",{staticClass:"column"},[r("div",{staticClass:"totalPoints"},[e._v("Total Points: "+e._s(e.totalPoints))]),r("h4",{directives:[{name:"show",rawName:"v-show",value:15==e.gameRound,expression:"gameRound==15"}],staticClass:"floating"},[e._v("GAME FINISHED, CONGRATULATIONS!")]),r("div",{staticClass:"dicerow"},e._l(e.dices,function(t,n){return r("game-dice",{key:n,attrs:{dice:t,offsetx:n},on:{"dice-click":function(t){return e.lockDice(n)}}})}),1),r("div",{staticClass:"buttons"},[r("roll-button",{attrs:{showDesc:e.showDesc,rollRound:e.rollRound},on:{roll:e.roll}})],1)])]),r("div",{staticClass:"row scoreCategories"},[r("div",{staticClass:"columnNoWrap"},e._l(e.upperScores,function(t,n){return r("score-category",{key:n,class:{avoidclicks:0==e.rollRound},attrs:{score:t,showDesc:e.showDesc,playerDices:e.dices,rollRound:e.rollRound},on:{"score-click":function(t){return e.selectUpperScore(n)}}})}),1),r("div",{staticClass:"space"}),r("div",{staticClass:"columnNoWrap"},e._l(e.lowerScores,function(t,n){return r("score-category",{key:n,class:{avoidclicks:0==e.rollRound},attrs:{score:t,showDesc:e.showDesc,playerDices:e.dices,rollRound:e.rollRound},on:{"score-click":function(t){return e.selectLowerScore(n)}}})}),1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"column"},[r("div",[e._v("\n        Descriptions\n        "),r("toggle-button",{attrs:{color:"#8bc990","font-size":14,labels:!0},model:{value:e.showDesc,callback:function(t){e.showDesc=t},expression:"showDesc"}})],1)])])],1)},se=[],ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gamedice",class:{avoidclicks:!e.dice.isInteractive,locked:e.dice.locked,hidden:0==e.rollRound},style:{left:e.startposx+"px",bottom:e.startposy+"px"},on:{click:function(t){return e.$emit("dice-click")}}},[r("img",{attrs:{src:e.image}}),e.dice.locked?r("span",[e._v("Locked")]):e._e()])},ae=[],ue=r("e814"),le=r.n(ue),de=(r("c5f6"),r("5118")),fe={name:"GameDice",props:{dice:Object,offsetx:Number,offsety:Number},data:function(){return{side:2,posX:0,posY:0,rollIntervall:null}},computed:{image:function(){return r("3b2b")("./Dice-"+this.compSide+".svg")},compSide:function(){return this.rolling&&!this.dice.locked?this.side:this.dice.side},rolling:function(){return this.startRoll(),this.$store.state.rolling},rollRound:function(){return this.$store.state.rollRound},startposx:function(){return 70*le()(this.offsetx)+150},startposy:function(){return 10+this.posY}},methods:{startRoll:function(){var e=this;this.$store.state.rolling&&(this.rollIntervall=setInterval(function(){e.side=Math.floor(5*Math.random())+1},100),Object(de["setTimeout"])(this.asdf,500))},asdf:function(){window.clearInterval(this.rollIntervall)}}},ve=fe,me=(r("5bd5"),Object(s["a"])(ve,ce,ae,!1,null,"53ad704d",null)),pe=me.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scorecategory",class:{avoidclicks:e.score.dices.length>0,avoidclicks:e.score.rule.nonInteractive,transparent:e.transparent,green:!e.hasDices&&e.valid&&e.suggestedPoints>0,blue:e.hasDices,red:!e.hasDices&&e.rollRound>0&&0==e.suggestedPoints},on:{click:function(t){return e.$emit("score-click")}}},[r("div",{staticClass:"left"},[r("div",{staticClass:"title"},[e._v(e._s(e.score.name))]),r("div",{staticClass:"content"},[r("div",{staticClass:"dicerow"},[e.showDesc&&0==e.score.dices.length?r("span",{staticClass:"desctext"},[e._v(e._s(e.score.description))]):e._e(),e._l(e.score.dices,function(e,t){return r("dice",{key:t,staticClass:"small-dice",attrs:{dice:e}})})],2),e.score.dices&&e.score.dices.length>0||e.points>0?r("div",{staticClass:"points"},[e._v(e._s(e.points))]):e.valid?r("div",{staticClass:"points"},[e._v(e._s(e.suggestedPoints)+" / "+e._s(e.score.rule.maxPoints))]):e._e()])])])},ye=[],ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dice",class:{avoidclicks:!e.dice.isInteractive,locked:e.dice.locked},on:{click:function(t){return e.$emit("dice-click")}}},[r("img",{attrs:{src:e.image}}),e.dice.locked?r("span",[e._v("locked")]):e._e()])},we=[],be={name:"Dice",props:{dice:Object},computed:{image:function(){return r("3b2b")("./Dice-"+this.dice.side+".svg")}}},ke=be,xe=(r("acef"),Object(s["a"])(ke,ge,we,!1,null,"751ff670",null)),Re=xe.exports,_e={name:"ScoreCategory",props:{score:Object,playerDices:Array,rollRound:Number,showDesc:Boolean,transparent:Boolean},computed:{points:function(){return this.score.dices?this.score.rule.points(this.score.dices):0},suggestedPoints:function(){return this.score.rule?this.score.rule.points(this.playerDices):0},valid:function(){return this.rollRound>0},hasDices:function(){return this.score.dices&&this.score.dices.length>0}},created:function(){var e=this;document.addEventListener("keyup",function(t){e.score.keyCode&&(console.log(e.score.keyCode),console.log(t.keyCode),t.keyCode===e.score.keyCode&&e.$emit("score-click"))})},components:{Dice:Re}},Ce=_e,Se=(r("e668"),Object(s["a"])(Ce,he,ye,!1,null,"36101863",null)),De=Se.exports,Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"game-button",class:{one:1===e.rollRound,two:2===e.rollRound,three:3===e.rollRound},on:{click:function(t){return e.$emit("roll")}}},[e._v("\n  Roll\n  "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.showDesc,expression:"showDesc"}]},[e._v("(Key R)")])])},Oe=[],$e={name:"RollButton",props:{rollRound:Number,showDesc:Boolean}},Te=$e,je=(r("46b0"),Object(s["a"])(Te,Pe,Oe,!1,null,"22ed51a0",null)),Ie=je.exports,Ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gameroundbar"},e._l(e.maxRounds,function(t){return r("game-round-bar-box",{key:t,attrs:{filled:t<=e.currentRound}})}),1)},Ge=[],Ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box",class:{filled:e.filled}})},Be=[],Ne={name:"GameRoundBarBox",props:{filled:Boolean}},Ae=Ne,Fe=(r("079d"),Object(s["a"])(Ae,Ee,Be,!1,null,"48852b12",null)),Le=Fe.exports,Me={name:"GameRoundBar",props:{currentRound:Number,maxRounds:Number},components:{GameRoundBarBox:Le}},Ue=Me,Ye=(r("f0c7"),Object(s["a"])(Ue,Ke,Ge,!1,null,null,null)),ze=Ye.exports,He={name:"Game",components:{GameDice:pe,ScoreCategory:De,RollButton:Ie,GameRoundBar:ze},computed:{dices:function(){return this.$store.state.dices},gameRound:function(){return this.$store.state.gameRound},rollRound:function(){return this.$store.state.rollRound},upperScores:function(){return this.$store.state.upperScores},lowerScores:function(){return this.$store.state.lowerScores},totalPoints:function(){return this.$store.state.totalScore.rule.points()},showDesc:{set:function(){this.$store.commit("showDesc")},get:function(){return this.$store.state.showDesc}}},methods:{roll:function(){this.$store.commit("roll")},nextRound:function(){this.$store.commit("nextRound")},lockDice:function(e){this.$store.commit("lockDice",e)},selectUpperScore:function(e){this.$store.commit("selectUpperScore",e)},selectLowerScore:function(e){this.$store.commit("selectLowerScore",e)}},created:function(){this.$store.commit("initGame");var e=this;document.addEventListener("keyup",function(t){82===t.keyCode?e.roll():84===t.keyCode&&e.nextRound()})}},Je=He,We=(r("3fef"),Object(s["a"])(Je,ie,se,!1,null,"684afa19",null)),Xe=We.exports,qe={name:"home",components:{Game:Xe}},Qe=qe,Ve=Object(s["a"])(Qe,ne,oe,!1,null,"18af98a8",null),Ze=Ve.exports,et=r("f206");n["a"].component("ToggleButton",et["ToggleButton"]),n["a"].use(re["a"]);var tt=new re["a"]({routes:[{path:"/",name:"home",component:Ze}]});n["a"].config.productionTip=!1,new n["a"]({store:te,router:tt,render:function(e){return e(u)}}).$mount("#app")},"5bd5":function(e,t,r){"use strict";var n=r("f979"),o=r.n(n);o.a},"613c":function(e,t,r){},"64a9":function(e,t,r){},"865b":function(e,t,r){},9494:function(e,t,r){},9515:function(e,t,r){},acef:function(e,t,r){"use strict";var n=r("d5e9"),o=r.n(n);o.a},b785:function(e,t,r){e.exports=r.p+"img/Dice-2.e328f73d.svg"},c34a:function(e,t,r){e.exports=r.p+"img/Dice-3.e2b5ec83.svg"},d5e9:function(e,t,r){},d738:function(e,t,r){e.exports=r.p+"img/Dice-5.5a4475d8.svg"},e668:function(e,t,r){"use strict";var n=r("9494"),o=r.n(n);o.a},f0c7:function(e,t,r){"use strict";var n=r("1148"),o=r.n(n);o.a},f979:function(e,t,r){},fef9:function(e,t,r){e.exports=r.p+"img/Dice-6.34733227.svg"}});
//# sourceMappingURL=app.844af7d6.js.map