webpackJsonp([1],{0:function(t,e){},"4yV6":function(t,e){},CKbA:function(t,e){},HURy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(t){n("CKbA")},null,null).exports,r=n("/ocq"),a={name:"Sushies",data:()=>({msg:"Sushi on the go"})},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("h2",[this._v("Is under development")])])},staticRenderFns:[]};var l=n("VU/8")(a,c,!1,function(t){n("n21v")},"data-v-173e0f6a",null).exports,u=n("DmT9"),d=n.n(u),v=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,h=((window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-100)/5;function m(t){return"red"==t?"blue":"red"}var _={name:"Sushies",data:()=>({gameID:"",gamelist:[],newGameName:"",role:"",socket:d()(),currentTurn:"red",winner:"",words:[],board:[],wordsGuessed:[],isPhone:v<500,boxHeight:h-5+"px"}),mounted:function(){var t=this;console.log(t),t.socket.on("create game",this.AddGame),t.socket.on("game list",function(e){console.log(e),t.gamelist=e}),t.socket.on("word list",function(e){t.words=e,console.log("Updating words")}),t.socket.on("guesses",function(e){t.wordsGuessed=e,console.log("Updating guesses",t.wordsGuessed)}),t.socket.on("guess word",function(e){s.a.set(t.wordsGuessed,e,!0),console.log("Updating guess for index "+e)}),t.socket.on("game board",function(e){t.board=e,console.log("Updating board")}),t.socket.on("end turn",function(e){t.currentTurn=e}),t.socket.on("game won",function(e){t.winner=e})},methods:{CreateGame:function(){console.log("Creating a game"),""!=this.newGameName&&this.socket.emit("create game",this.newGameName)},AddGame:function(t){this.gamelist.push(t)},JoinGame:function(t){console.log("Joining game"+t),this.gameID=t,this.words=[],this.winner="",this.role="",this.socket.emit("join game",t);for(var e=0;e<25;e++)s.a.set(this.wordsGuessed,e,!1)},GuessWord:function(t){this.socket.emit("guess word",[this.gameID,t]),s.a.set(this.wordsGuessed,t,!0),this.board[t]!=this.currentTurn&&(this.currentTurn=m(this.currentTurn))},EndGame:function(){this.socket.emit("end game",this.gameID),this.LeaveGame()},LeaveGame:function(){this.gameID=""},SetColor:function(t){this.role=t},EndTurn:function(){this.socket.emit("end turn",this.gameID)}},computed:{MyColor:function(){var t=this.board,e=this.role,n=this.wordsGuessed;return this.words.filter(function(s,o){return t[o]==e&&!n[o]})},TheirColor:function(){var t=this.board,e=m(this.role),n=this.wordsGuessed;return this.words.filter(function(s,o){return t[o]==e&&!n[o]})},DeathWord:function(){var t=this.board,e=this.wordsGuessed;return this.words.filter(function(n,s){return"death"==t[s]&&!e[s]})},NoColor:function(){var t=this.board,e=this.wordsGuessed;return this.words.filter(function(n,s){return"none"==t[s]&&!e[s]})},Guessed:function(){this.board;var t=this.wordsGuessed;return this.words.filter(function(e,n){return t[n]})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[""==t.gameID||t.isPhone||""!=t.winner?""!=t.gameID&&""==t.role&&""==t.winner?n("div",{staticClass:"container"},[n("br"),t._v(" "),n("h2",[t._v("Pick your Team")]),t._v(" "),n("button",{staticClass:"btn btn-block btn-danger",on:{click:function(e){t.SetColor("red")}}},[t._v("Red")]),t._v(" "),n("button",{staticClass:"btn btn-block btn-primary",on:{click:function(e){t.SetColor("blue")}}},[t._v("Blue")])]):""!=t.gameID&&""==t.winner?n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[t._v("Currently "+t._s(t.role==t.currentTurn?"your":"not your")+" turn")]),t._v(" "),n("button",{staticClass:"btn btn-block btn-info",on:{click:t.EndTurn}},[t._v("End Turn")]),t._v(" "),n("h2",[t._v("Your Words")]),t._v(" "),n("ul",t._l(t.MyColor,function(e){return n("li",[t._v(t._s(e))])})),t._v(" "),n("h2",[t._v("Their words")]),t._v(" "),n("ul",t._l(t.TheirColor,function(e){return n("li",[t._v(t._s(e))])})),t._v(" "),n("h2",[t._v("Death word")]),t._v(" "),n("ul",t._l(t.DeathWord,function(e){return n("li",[t._v(t._s(e))])})),t._v(" "),n("h2",[t._v("Neutral")]),t._v(" "),n("ul",t._l(t.NoColor,function(e){return n("li",[t._v(t._s(e))])})),t._v(" "),n("h2",[t._v("Guessed Words")]),t._v(" "),n("ul",t._l(t.Guessed,function(e){return n("li",[t._v(t._s(e))])})),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:t.LeaveGame}},[t._v("Leave Game")])])]):""!=t.gameID&&""!=t.winner&&""==t.role?n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Winner: "+t._s(t.winner))]),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:t.LeaveGame}},[t._v("Leave Game")])])]):""!=t.gameID&&t.winner==t.role?n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Winner winner chicken dinner!")]),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:t.LeaveGame}},[t._v("Leave Game")])])]):""!=t.gameID&&""!=t.winner?n("div",{staticClass:"container"},[n("h1",[t._v("You've lost!")]),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:t.LeaveGame}},[t._v("Leave Game")])])]):""==t.gameID?n("div",{staticClass:"container"},[n("h2",[t._v("Join a game!")]),t._v(" "),n("ul",{staticClass:"list-group"},t._l(t.gamelist,function(e){return n("a",{staticClass:"list-group-item",on:{click:function(n){t.JoinGame(e)}}},[t._v(t._s(e))])})),t._v(" "),n("hr"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newGameName,expression:"newGameName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name your game"},domProps:{value:t.newGameName},on:{input:function(e){e.target.composing||(t.newGameName=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-block btn-primary",on:{click:t.CreateGame}},[t._v("Create a game")])]):t._e():n("div",[n("div",{staticClass:"text-center",style:{"background-color":t.currentTurn}},[t._v("Currently "+t._s(t.currentTurn)+"'s turn")]),t._v(" "),t.words.length>0?n("div",t._l(Math.ceil(t.words.length/5),function(e){return n("div",{staticClass:"row"},t._l(t.words.slice(5*(e-1),5*e),function(s,o){return n("div",{staticClass:"col text-center codeword",on:{click:function(n){t.GuessWord(o+5*(e-1))}}},[n("div",{staticClass:"card panel-default",class:{red:t.wordsGuessed[o+5*(e-1)]&&"red"==t.board[o+5*(e-1)],blue:t.wordsGuessed[o+5*(e-1)]&&"blue"==t.board[o+5*(e-1)],none:t.wordsGuessed[o+5*(e-1)]&&"none"==t.board[o+5*(e-1)],death:t.wordsGuessed[o+5*(e-1)]&&"death"==t.board[o+5*(e-1)]},style:{height:t.boxHeight}},[t.wordsGuessed[o+5*(e-1)]?n("div",{staticClass:"card-header upsidedown"},[n("span",[t._v(t._s(t.board[o+5*(e-1)]))])]):n("div",{staticClass:"card-header upsidedown"},[t._v("\n                             "+t._s(s)+"\n                         ")]),t._v(" "),t.wordsGuessed[o+5*(e-1)]?n("div",{staticClass:"card-block",style:{height:t.boxHeight}},[n("span",[t._v(t._s(t.board[o+5*(e-1)]))])]):n("div",{staticClass:"card-block",style:{height:t.boxHeight}},[n("b",[t._v(t._s(s))])])])])}))})):n("div",[n("h2",{staticClass:"text-center"},[t._v("Loading words...")])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-danger btn-block btn-sm",on:{click:t.EndGame}},[t._v("End Game")])]),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-info btn-block btn-sm",on:{click:t.EndTurn}},[t._v("End Turn")])])])])])},staticRenderFns:[]};const g=[{path:"/sushi",name:"Sushi-on-the-go",title:"Sushies",component:l},{path:"/codewords",name:"codewords",title:"Code Words",component:n("VU/8")(_,b,!1,function(t){n("4yV6")},"data-v-eb4e2e26",null).exports}];var f={name:"HelloWorld",data:()=>({games:g})},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),t._l(t.games,function(e){return n("div",{key:e.name,staticClass:"game"},[n("router-link",{attrs:{to:{name:e.name}}},[n("h1",[t._v("Play  "+t._s(e.title))])])],1)})],2)},staticRenderFns:[]};var C=n("VU/8")(f,w,!1,function(t){n("c6e3")},"data-v-4af59749",null).exports,p={name:"Page Not Found",data:()=>({msg:"Page Not Found"})},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]},k=n("VU/8")(p,G,!1,null,null,null).exports;s.a.use(r.a);var y=[{path:"/",name:"HelloWorld",component:C}];(y=y.concat(g)).push({path:"*",component:k}),console.log(y);var x=new r.a({routes:y,history:!0,mode:"history"});s.a.config.productionTip=!1,new s.a({el:"#app",router:x,components:{App:i},template:"<App/>"})},c6e3:function(t,e){},n21v:function(t,e){}},["HURy"]);
//# sourceMappingURL=app.7e36c4796955f107f163.js.map