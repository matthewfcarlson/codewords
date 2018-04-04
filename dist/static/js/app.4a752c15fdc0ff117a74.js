webpackJsonp([1],{0:function(e,t){},"4yV6":function(e,t){},"CHo/":function(e,t,n){"use strict";class s{constructor(e,t,n){this.name=e,void 0==n&&(n=e),this.type=n.toLowerCase(),void 0==t&&(t=0),this.value=t,this.discarded=!1!==t}}var r=n("LtXW"),a=n("vSBm");e.exports={Game:class{constructor(e){this.players=[],this.round=0,this.playerHands=[],this.playersReady=[],this.playerRoundDeck=[],this.playerGameDeck=[],this.isPlaying=!1,this.playerScores=[],this.gameOver=!1,void 0==e&&(e=25),this.deckSeed=e}GetDeck(){for(var e=[],t=0;t<14;t++)e.push(new s("Tempura"));for(t=0;t<14;t++)e.push(new s("Sashimi"));for(t=0;t<14;t++)e.push(new s("Dumpling"));for(t=0;t<12;t++)e.push(new s("Maki",2));for(t=0;t<8;t++)e.push(new s("Maki",3));for(t=0;t<6;t++)e.push(new s("Maki",1));for(t=0;t<10;t++)e.push(new s("Salmon Nigiri",3,"nigiri"));for(t=0;t<5;t++)e.push(new s("Squid Nigiri",2,"nigiri"));for(t=0;t<5;t++)e.push(new s("Egg Nigiri",1,"nigiri"));for(t=0;t<10;t++)e.push(new s("Pudding",!1));for(t=0;t<6;t++)e.push(new s("Wasabi"));for(t=0;t<4;t++)e.push(new s("Chopsticks"));return e}StartRound(){this.playerRoundDeck=[],this.playersReady=[];for(var e=0;e<this.players.length;e++)this.playerRoundDeck.push([]),this.playersReady.push(!1);this.SetDeck(),this.round++}CalculateHandScore(e){for(var t=this.playerRoundDeck[e],n=0,s=0;t.length>0&&s<50;)n+=ScoreCard(this.playerRoundDeck,e,0),s++;return s>40&&console.error("We had an error figuring out how to score player's hand:"+e),n}EndRound(){console.log("Round "+this.round+" is over");for(var e=0;e<this.players.length;e++){var t=this.playerRoundDeck[e].filter(e=>0==e.discarded);this.playerGameDeck[e]=this.playerGameDeck[e].concat(t)}var n=a(this.playerRoundDeck);for(e=0;e<this.players.length&&e<=n.length;e++)this.playerScores[e]+=n[e];if(3==this.round)return this.gameOver=!0,void(this.isPlaying=!1);this.deckSeed+=7,this.StartRound()}SetDeck(){var e=this.GetDeck(),t=r.engines.mt19937();void 0==this.deckSeed?(t=t.autoSeed(),console.log("Using autoseed")):t=t.seed(this.deckSeed),r.shuffle(t,e);var n=this.players.length,s=12-n;s>10&&(s=10),s<7&&(s=7);var a=n*s;e=e.slice(0,a),this.playerHands=[];for(var i=0;i<n;i++)this.playerHands.push(e.splice(0,s))}AddPlayer(e){if(this.isPlaying)return!1;this.players.push(e)}StartGame(){if(this.players.length<=1)return!1;if(this.isPlaying||this.gameOver)return!1;this.isPlaying=!0;for(var e=0;e<this.players.length;e++)this.playerScores.push(0),this.playerRoundDeck.push([]),this.playerGameDeck.push([]);this.StartRound()}SetAsideCard(e,t){if(console.log("Drawing card at"+t+" for player "+e),0==this.isPlaying||1==this.gameOver||this.players.length<=e||t>=this.playerHands[e].length)return console.error("Invalid parameter"),!1;if(this.playersReady[e])return console.error("You have already grabbed a card"),!1;this.playersReady[e]=!0;var n=this.playerHands[e][t];this.playerRoundDeck[e].push(n),this.playerHands[e].splice(t,1),console.log("Setting aside for player "+e,n),this.HasEveryonePlayed()&&(console.log("Everyone has played!"),this.EndTurn())}HasEveryonePlayed(){return this.playersReady.reduce(function(e,t){return t&&e},!0)}GetHandCardCount(){return console.log(this.playerHands),this.playerHands.map(e=>e.length)}EndTurn(){this.playersReady=[];for(var e=0;e<this.players.length;e++)this.playersReady.push(!1);var t=this.playerHands.splice(0,1);if(this.playerHands.push(t[0]),this.GetHandCardCount().reduce(function(e,t){return e<t?t:e},0)<=1){for(e=0;e<this.playerHands.length;e++)this.playerRoundDeck[e].push(this.playerHands[e].pop());this.EndRound()}}}}},CKbA:function(e,t){},HURy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(e){n("CKbA")},null,null).exports,i=n("/ocq"),o=n("CHo/"),l=n("hMcO"),c=n.n(l);s.a.use(c.a,window.location.origin),console.log("Connecting to "+window.location.origin);var u={name:"Sushies",data:()=>({isPhone:window.innerWidth<=667,msg:"Sushi on the go",game:new o.Game,playerID:-1,connected:!1,playerName:""}),methods:{ResetGame:function(){this.$socket.emit("reset sushi game")},StartGame:function(){this.$socket.emit("start sushi game")},PickCard:function(e){console.log("Client is picking card #"+e),this.$socket.emit("pick sushi card",e)},JoinGame:function(){this.$socket.emit("join sushi game",this.playerName)}},sockets:{connect:function(){console.log("socket connected"),this.connected=!0},"set players":function(e){this.$set(this.game,"players",e)},"start game":function(){this.game.StartGame()},"reset game":function(){this.game=new o.Game,this.playerID=-1},"set deck seed":function(e){this.game.deckSeed=e},"set sushi player":function(e){this.playerID=e,console.log("We are player #"+e)},"pick sushi card":function(e,t){this.game.SetAsideCard(e,t)}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-content"},[e.isPhone?e.isPhone&&-1==e.playerID?n("div",{staticClass:"hello"},[n("h2",[e._v("Please Input Your Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.JoinGame}},[e._v("Join Game")])]):e.isPhone&&-1!=e.playerID?n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg)+" Player "+e._s(e.playerID))]),e._v(" "),1==e.game.isPlaying?n("pre",[e._v("      "),void 0!=e.game.playerHands&&void 0!=e.game.playerHands[e.playerID]?n("div",[e._v("\n        "),n("ul",[e._v("\n          "),e._l(e.game.playerHands[e.playerID],function(t,s){return n("li",{key:s,on:{click:function(t){e.PickCard(s)}}},[e._v(" \n              "+e._s(t.name)+" "+e._s(t.value)+" "+e._s(s)+"\n          ")])}),e._v("\n        ")],2),e._v(" \n      ")]):e._e(),e._v("\n    ")]):e._e(),e._v(" "),e.game.isPlaying?e._e():n("button",{on:{click:e.StartGame}},[e._v("StartGame")]),e._v(" "),n("button",{on:{click:function(t){e.PickCard(0)}}},[e._v("PlayAll")]),e._v(" "),n("button",{on:{click:e.ResetGame}},[e._v("Reset Game")]),e._v(" "),n("pre",[e._v(e._s(e.game))])]):n("div",[e._v("\n    Unknown state\n  ")]):n("div",[e._v("\n    The whole game board goes here\n    "+e._s(e.game.playerScores)+"\n  ")])])},staticRenderFns:[]};var h=n("VU/8")(u,d,!1,function(e){n("JwNd")},"data-v-7bfbe708",null).exports,v=n("DmT9"),m=n.n(v),p=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g=((window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-100)/5;function f(e){return"red"==e?"blue":"red"}var _={name:"Sushies",data:()=>({gameID:"",gamelist:[],newGameName:"",role:"",socket:m()(),currentTurn:"red",winner:"",words:[],board:[],wordsGuessed:[],isPhone:p<500,boxHeight:g-5+"px"}),mounted:function(){var e=this;console.log(e),e.socket.on("create game",this.AddGame),e.socket.on("game list",function(t){console.log(t),e.gamelist=t}),e.socket.on("word list",function(t){e.words=t,console.log("Updating words")}),e.socket.on("guesses",function(t){e.wordsGuessed=t,console.log("Updating guesses",e.wordsGuessed)}),e.socket.on("guess word",function(t){s.a.set(e.wordsGuessed,t,!0),console.log("Updating guess for index "+t)}),e.socket.on("game board",function(t){e.board=t,console.log("Updating board")}),e.socket.on("end turn",function(t){e.currentTurn=t}),e.socket.on("game won",function(t){e.winner=t})},methods:{CreateGame:function(){console.log("Creating a game"),""!=this.newGameName&&this.socket.emit("create game",this.newGameName)},AddGame:function(e){this.gamelist.push(e)},JoinGame:function(e){console.log("Joining game"+e),this.gameID=e,this.words=[],this.winner="",this.role="",this.socket.emit("join game",e);for(var t=0;t<25;t++)s.a.set(this.wordsGuessed,t,!1)},GuessWord:function(e){this.socket.emit("guess word",[this.gameID,e]),s.a.set(this.wordsGuessed,e,!0),this.board[e]!=this.currentTurn&&(this.currentTurn=f(this.currentTurn))},EndGame:function(){this.socket.emit("end game",this.gameID),this.LeaveGame()},LeaveGame:function(){this.gameID=""},SetColor:function(e){this.role=e},EndTurn:function(){this.socket.emit("end turn",this.gameID)}},computed:{MyColor:function(){var e=this.board,t=this.role,n=this.wordsGuessed;return this.words.filter(function(s,r){return e[r]==t&&!n[r]})},TheirColor:function(){var e=this.board,t=f(this.role),n=this.wordsGuessed;return this.words.filter(function(s,r){return e[r]==t&&!n[r]})},DeathWord:function(){var e=this.board,t=this.wordsGuessed;return this.words.filter(function(n,s){return"death"==e[s]&&!t[s]})},NoColor:function(){var e=this.board,t=this.wordsGuessed;return this.words.filter(function(n,s){return"none"==e[s]&&!t[s]})},Guessed:function(){this.board;var e=this.wordsGuessed;return this.words.filter(function(t,n){return e[n]})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[""==e.gameID||e.isPhone||""!=e.winner?""!=e.gameID&&""==e.role&&""==e.winner?n("div",{staticClass:"container"},[n("br"),e._v(" "),n("h2",[e._v("Pick your Team")]),e._v(" "),n("button",{staticClass:"btn btn-block btn-danger",on:{click:function(t){e.SetColor("red")}}},[e._v("Red")]),e._v(" "),n("button",{staticClass:"btn btn-block btn-primary",on:{click:function(t){e.SetColor("blue")}}},[e._v("Blue")])]):""!=e.gameID&&""==e.winner?n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[e._v("Currently "+e._s(e.role==e.currentTurn?"your":"not your")+" turn")]),e._v(" "),n("button",{staticClass:"btn btn-block btn-info",on:{click:e.EndTurn}},[e._v("End Turn")]),e._v(" "),n("h2",[e._v("Your Words")]),e._v(" "),n("ul",e._l(e.MyColor,function(t){return n("li",[e._v(e._s(t))])})),e._v(" "),n("h2",[e._v("Their words")]),e._v(" "),n("ul",e._l(e.TheirColor,function(t){return n("li",[e._v(e._s(t))])})),e._v(" "),n("h2",[e._v("Death word")]),e._v(" "),n("ul",e._l(e.DeathWord,function(t){return n("li",[e._v(e._s(t))])})),e._v(" "),n("h2",[e._v("Neutral")]),e._v(" "),n("ul",e._l(e.NoColor,function(t){return n("li",[e._v(e._s(t))])})),e._v(" "),n("h2",[e._v("Guessed Words")]),e._v(" "),n("ul",e._l(e.Guessed,function(t){return n("li",[e._v(e._s(t))])})),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""!=e.gameID&&""!=e.winner&&""==e.role?n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[e._v("Winner: "+e._s(e.winner))]),e._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""!=e.gameID&&e.winner==e.role?n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[e._v("Winner winner chicken dinner!")]),e._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""!=e.gameID&&""!=e.winner?n("div",{staticClass:"container"},[n("h1",[e._v("You've lost!")]),e._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""==e.gameID?n("div",{staticClass:"container"},[n("h2",[e._v("Join a game!")]),e._v(" "),n("ul",{staticClass:"list-group"},e._l(e.gamelist,function(t){return n("a",{staticClass:"list-group-item",on:{click:function(n){e.JoinGame(t)}}},[e._v(e._s(t))])})),e._v(" "),n("hr"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newGameName,expression:"newGameName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name your game"},domProps:{value:e.newGameName},on:{input:function(t){t.target.composing||(e.newGameName=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn btn-block btn-primary",on:{click:e.CreateGame}},[e._v("Create a game")])]):e._e():n("div",[n("div",{staticClass:"text-center",style:{"background-color":e.currentTurn}},[e._v("Currently "+e._s(e.currentTurn)+"'s turn")]),e._v(" "),e.words.length>0?n("div",e._l(Math.ceil(e.words.length/5),function(t){return n("div",{staticClass:"row"},e._l(e.words.slice(5*(t-1),5*t),function(s,r){return n("div",{staticClass:"col text-center codeword",on:{click:function(n){e.GuessWord(r+5*(t-1))}}},[n("div",{staticClass:"card panel-default",class:{red:e.wordsGuessed[r+5*(t-1)]&&"red"==e.board[r+5*(t-1)],blue:e.wordsGuessed[r+5*(t-1)]&&"blue"==e.board[r+5*(t-1)],none:e.wordsGuessed[r+5*(t-1)]&&"none"==e.board[r+5*(t-1)],death:e.wordsGuessed[r+5*(t-1)]&&"death"==e.board[r+5*(t-1)]},style:{height:e.boxHeight}},[e.wordsGuessed[r+5*(t-1)]?n("div",{staticClass:"card-header upsidedown"},[n("span",[e._v(e._s(e.board[r+5*(t-1)]))])]):n("div",{staticClass:"card-header upsidedown"},[e._v("\n                             "+e._s(s)+"\n                         ")]),e._v(" "),e.wordsGuessed[r+5*(t-1)]?n("div",{staticClass:"card-block",style:{height:e.boxHeight}},[n("span",[e._v(e._s(e.board[r+5*(t-1)]))])]):n("div",{staticClass:"card-block",style:{height:e.boxHeight}},[n("b",[e._v(e._s(s))])])])])}))})):n("div",[n("h2",{staticClass:"text-center"},[e._v("Loading words...")])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-danger btn-block btn-sm",on:{click:e.EndGame}},[e._v("End Game")])]),e._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-info btn-block btn-sm",on:{click:e.EndTurn}},[e._v("End Turn")])])])])])},staticRenderFns:[]};const b=[{path:"/sushi",name:"Sushi-on-the-go",title:"Sushies",component:h},{path:"/codewords",name:"codewords",title:"Code Words",component:n("VU/8")(_,y,!1,function(e){n("4yV6")},"data-v-eb4e2e26",null).exports}];var w={name:"HelloWorld",data:()=>({games:b})},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),e._l(e.games,function(t){return n("div",{key:t.name,staticClass:"game"},[n("router-link",{attrs:{to:{name:t.name}}},[n("h1",[e._v("Play  "+e._s(t.title))])])],1)})],2)},staticRenderFns:[]};var C=n("VU/8")(w,k,!1,function(e){n("c6e3")},"data-v-4af59749",null).exports,G={name:"Page Not Found",data:()=>({msg:"Page Not Found"})},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]},S=n("VU/8")(G,D,!1,null,null,null).exports;s.a.use(i.a);var R=[{path:"/",name:"HelloWorld",component:C}];(R=R.concat(b)).push({path:"*",component:S}),console.log(R);var H=new i.a({routes:R,history:!0,mode:"history"});s.a.config.productionTip=!1,new s.a({el:"#app",router:H,components:{App:a},template:"<App/>"})},JwNd:function(e,t){},c6e3:function(e,t){},vSBm:function(e,t){function n(e){for(var t=[],n=0;n<e.length;n++)t.push(0);return t}function s(e,t){for(var n=0;n<e.length&&n<=t.length;n++)e[n]+=t[n];return e}e.exports={ScoreCards:function(e){var t=n(e);return t=s(t=s(t=s(t=s(t,function(e){for(var t=e.map(function(e){return e.filter(function(e){return"maki"==e.type})}).map(function(e){return e.reduce(function(e,t){return e+t.value},0)}),n=0,s=0,r=0,a=0;a<t.length;a++)t[a]>n?(n=t[a],s=1):t[a]==n?s++:t[a]>0?(r=t[a],r=1):0==t[a]&&r++;s>1&&(r=0);var i=Math.floor(6/s),o=0!=r?Math.floor(3/r):0;return t.map(function(e){return e==n?i:0==e?o:0})}(e)),function(e){var t=n(e);return e.map(function(e){return e.filter(function(e){return"tempura"==e.type}).length}),t}(e)),function(e){var t=e.map(function(e){e=e.filter(e=>"sashimi"==e.type||"wasabi"==e.type);for(var t=!1,n=0,s=0;s<e.length;s++)"wasabi"==e[s].type?t=!0:(n+=t?3*e[s].value:e[s].value,t=!1);return n});return console.log("Sashimi:",t),n(e)}(e)),function(e){var t=[1,3,6,10,15],n=function(e,t){return e.map(function(e){return e.filter(function(e){return e.type==t})})}(e,"dumpling").map(e=>e.length).map(function(e){return e>=t.count?15:t[e]});return console.log("Dumplings",n),n}(e))}}}},["HURy"]);
//# sourceMappingURL=app.4a752c15fdc0ff117a74.js.map