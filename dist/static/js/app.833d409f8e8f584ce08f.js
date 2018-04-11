webpackJsonp([1],{0:function(e,t){},"4yV6":function(e,t){},"CHo/":function(e,t,s){"use strict";class n{constructor(e,t,s){this.name=e,void 0==s&&(s=e),this.type=s.toLowerCase(),void 0==t&&(t=0),this.value=t,this.discarded=!1!==t}}var a=s("LtXW"),i=s("vSBm").ScoreCards;e.exports={Game:class{constructor(e){this.players=[],this.round=0,this.playerHands=[],this.playersReady=[],this.playerRoundDeck=[],this.playerGameDeck=[],this.isPlaying=!1,this.playerScores=[],this.gameOver=!1,void 0==e&&(e=25),this.deckSeed=e,this.turnNumber=0}GetDeck(){for(var e=[],t=0;t<14;t++)e.push(new n("Tempura"));for(t=0;t<14;t++)e.push(new n("Sashimi"));for(t=0;t<14;t++)e.push(new n("Dumpling"));for(t=0;t<12;t++)e.push(new n("Maki",2));for(t=0;t<8;t++)e.push(new n("Maki",3));for(t=0;t<6;t++)e.push(new n("Maki",1));for(t=0;t<10;t++)e.push(new n("Salmon Nigiri",2,"nigiri"));for(t=0;t<5;t++)e.push(new n("Squid Nigiri",3,"nigiri"));for(t=0;t<5;t++)e.push(new n("Egg Nigiri",1,"nigiri"));for(t=0;t<10;t++)e.push(new n("Pudding",!1));for(t=0;t<6;t++)e.push(new n("Wasabi"));for(t=0;t<4;t++)e.push(new n("Chopsticks"));return e}SyncGame(e){this.round=e.round,this.deckSeed=e.deckSeed,this.gameOver=e.gameOver,this.isPlaying=e.isPlaying,this.players=e.players,this.playerHands=e.playerHands,this.scores=e.scores,this.playersReady=e.playersReady,this.playerRoundDeck=e.playerRoundDeck,this.playerGameDeck=e.playerGameDeck,this.turnNumber=e.turnNumber}StartRound(){this.playerRoundDeck=[],this.playersReady=[];for(var e=0;e<this.players.length;e++)this.playerRoundDeck.push([]),this.playersReady.push(!1);this.SetDeck(),this.round++}CalculateHandScore(e){for(var t=this.playerRoundDeck[e],s=0,n=0;t.length>0&&n<50;)s+=i(this.playerRoundDeck,e,0),n++;return n>40&&console.error("We had an error figuring out how to score player's hand:"+e),s}EndRound(){console.log("Round "+this.round+" is over");for(var e=0;e<this.players.length;e++){var t=this.playerRoundDeck[e].filter(e=>0==e.discarded);this.playerGameDeck[e]=this.playerGameDeck[e].concat(t)}var s=i(this.playerRoundDeck);for(e=0;e<this.players.length&&e<=s.length;e++)this.playerScores[e]+=s[e];if(3==this.round)return this.gameOver=!0,void(this.isPlaying=!1);this.deckSeed+=7,this.StartRound()}SetDeck(){var e=this.GetDeck(),t=a.engines.mt19937();void 0==this.deckSeed?(t=t.autoSeed(),console.log("Using autoseed")):t=t.seed(this.deckSeed),a.shuffle(t,e);var s=this.players.length,n=12-s;n>10&&(n=10),n<7&&(n=7);var i=s*n;e=e.slice(0,i),this.playerHands=[];for(var r=0;r<s;r++)this.playerHands.push(e.splice(0,n))}AddPlayer(e){if(this.isPlaying)return!1;this.players.push(e)}StartGame(){if(this.players.length<=1)return!1;if(this.isPlaying||this.gameOver)return!1;this.isPlaying=!0,this.turnNumber=1;for(var e=0;e<this.players.length;e++)this.playerScores.push(0),this.playerRoundDeck.push([]),this.playerGameDeck.push([]);this.StartRound()}HasChopsticks(e){return!1}SetAsideCard(e,t){if(console.log("Drawing card at"+t+" for player "+e),void 0==t||0==this.isPlaying||1==this.gameOver||this.players.length<=e||t.length>=3||2==t.length&&!this.HasChopsticks(e))return console.error("Invalid parameter"),!1;if(this.playersReady[e])return console.error("You have already grabbed a card"),!1;if(this.playersReady[e]=!0,2==t.length)return console.error("Chopsticks aren't implemented"),!1;var s=t[0],n=this.playerHands[e][s];return this.playerRoundDeck[e].push(n),this.playerHands[e].splice(s,1),console.log("Setting aside for player "+e,n),this.HasEveryonePlayed()&&(console.log("Everyone has played!"),this.EndTurn()),!0}HasEveryonePlayed(){return this.playersReady.reduce(function(e,t){return t&&e},!0)}GetHandCardCount(){return this.playerHands.map(e=>e.length)}EndTurn(){this.playersReady=[];for(var e=0;e<this.players.length;e++)this.playersReady.push(!1);var t=this.playerHands.splice(0,1);this.playerHands.push(t[0]);var s=this.GetHandCardCount().reduce(function(e,t){return e<t?t:e},0);if(this.turnNumber++,s<=1){for(e=0;e<this.playerHands.length;e++)this.playerRoundDeck[e].push(this.playerHands[e].pop());this.EndRound()}}}}},CKbA:function(e,t){},HURy:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(e){s("CKbA")},null,null).exports,r=s("/ocq"),o=s("CHo/"),c=s("hMcO"),l=s.n(c);n.a.use(l.a,window.location.origin),console.log("Connecting to "+window.location.origin);var d={name:"Sushies",data:()=>({isPhone:window.innerWidth<=750,msg:"Sushi on the go",game:new o.Game,playerID:-1,cardsSetAside:!1,connected:!1,pickedCard:[],playerName:""}),computed:{isLandscape:function(){return window.innerWidth>400}},methods:{ResetGame:function(){this.$socket.emit("reset sushi game")},StartGame:function(){this.$socket.emit("start sushi game")},PickCard:function(e){console.log("Client is picking card #"+e);var t=this.pickedCard.indexOf(e);-1!=t?this.pickedCard.splice(t,1):this.game.HasChopsticks(this.playerID)?(console.error("I'm not sure what to do in this case"),this.pickedCard.length>=1&&this.pickedCard.splice(0,this.pickedCard.length),this.pickedCard.push(e)):(this.pickedCard.length>=1&&this.pickedCard.splice(0,this.pickedCard.length),this.pickedCard.push(e))},AddAI:function(){},ReadyToPick:function(e){this.pickedCard.length>0&&(this.$socket.emit("pick sushi card",this.pickedCard),this.cardsSetAside=!0)},JoinGame:function(){this.$socket.emit("join sushi game",this.playerName)}},sockets:{connect:function(){console.log("socket connected"),this.connected=!0,this.isPhone||this.$socket.emit("sync sushi game")},"sync sushi game":function(e){console.log("We got a new state for the sushi game",e),this.game.SyncGame(e),this.$set(this.game,"playerHands",e.playerHands)},"set players":function(e){this.$set(this.game,"players",e)},"start game":function(){this.game.StartGame()},"reset game":function(){this.game=new o.Game,this.playerID=-1},"set deck seed":function(e){this.game.deckSeed=e},"set sushi player":function(e){this.playerID=e,console.log("We are player #"+e)},"pick sushi card":function(e){console.log("Player "+e+" is ready!"),n.a.set(this.game.playersReady,e,!0)},"pick sushi cards":function(e){console.log("All players have played!",e),this.cardsSetAside=!1,this.pickedCard.splice(0,this.pickedCard.length);var t=this;this.game.playersReady=t.game.playersReady.map(e=>!1),e.forEach((e,s)=>{console.log("Setting aside cards for player "+s,e),t.game.SetAsideCard(s,e)})}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"game-content"},[e.isPhone?e.isLandscape?e.isPhone&&-1==e.playerID?s("div",{staticClass:"container-fluid"},[s("h2",[e._v("Please Input Your Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn btn-success",on:{click:e.JoinGame}},[e._v("Join Game")])]):e.isPhone&&-1!=e.playerID?s("div",{staticClass:"container-fluid"},[s("h1",[e._v(e._s(e.msg)+" Player "+e._s(e.playerID))]),e._v(" "),1==e.game.isPlaying?s("div",[s("div",{staticClass:"row"},[e._l(e.game.players,function(t,n){return s("div",{staticClass:"col-sm"},[n==e.playerID?s("i",{staticClass:"fas fa-user"}):e._e(),e._v(" "+e._s(t)+" "+e._s(e.game.playersReady[n])+" \n        ")])}),e._v(" "),void 0!=e.game.playerHands&&void 0!=e.game.playerHands[e.playerID]?s("div",{staticClass:"row"},e._l(e.game.playerHands[e.playerID],function(t,n){return s("div",{key:n,staticClass:"card sushi-card col-sm",on:{click:function(t){e.PickCard(n)}}},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[e._v(" "+e._s(t.name)+" "+e._s(t.value))])])])})):e._e(),e._v(" "),void 0!=e.game.playerHands&&void 0!=e.game.playerRoundDeck[e.playerID]?s("div",{staticClass:"row"},e._l(e.game.playerRoundDeck[e.playerID],function(t,n){return s("div",{key:n,staticClass:"card sushi-card col-sm"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[e._v(" "+e._s(t.name)+" "+e._s(t.value))])])])})):e._e()],2),e._v("\n    "+e._s(e.pickedCard)+" "+e._s(e.cardsSetAside)+"\n\n    "),e.game.isPlaying||0!=e.playerID?e._e():s("button",{on:{click:e.StartGame}},[e._v("StartGame")]),e._v(" "),e.game.isPlaying||0!=e.playerID?e._e():s("button",{on:{click:e.AddAI}},[e._v("Add AI")]),e._v(" "),s("button",{on:{click:e.ReadyToPick}},[e._v("Play")]),e._v(" "),s("pre",[e._v(e._s(e.game))]),e._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:e.ResetGame}},[e._v("Reset Game")])]):s("div",[e._v("\n    Unknown state\n  ")])]):e._e():s("div",[s("h2",[e._v("Please turn your phone sideways.\n  ")])]):s("div",[e._v("\n    "+e._s(e.game.players)+"\n    The whole game board goes here\n    "+e._s(e.game.playerScores)+"\n    "),s("hr"),e._v(" "),s("pre",{staticClass:"hidden-sm"},[e._v(e._s(e.game))]),e._v(" "),s("button",{on:{click:function(t){e.isPhone=!0}}},[e._v("Play as a player")])])])},staticRenderFns:[]};var h=s("VU/8")(d,u,!1,function(e){s("ZiPp")},"data-v-12e64b4a",null).exports,p=s("DmT9"),m=s.n(p),v=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g=((window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-100)/5;function y(e){return"red"==e?"blue":"red"}var f={name:"Sushies",data:()=>({gameID:"",gamelist:[],newGameName:"",role:"",socket:m()(),currentTurn:"red",winner:"",words:[],board:[],wordsGuessed:[],isPhone:v<500,boxHeight:g-5+"px"}),mounted:function(){var e=this;console.log(e),e.socket.on("create game",this.AddGame),e.socket.on("game list",function(t){console.log(t),e.gamelist=t}),e.socket.on("word list",function(t){e.words=t,console.log("Updating words")}),e.socket.on("guesses",function(t){e.wordsGuessed=t,console.log("Updating guesses",e.wordsGuessed)}),e.socket.on("guess word",function(t){n.a.set(e.wordsGuessed,t,!0),console.log("Updating guess for index "+t)}),e.socket.on("game board",function(t){e.board=t,console.log("Updating board")}),e.socket.on("end turn",function(t){e.currentTurn=t}),e.socket.on("game won",function(t){e.winner=t})},methods:{CreateGame:function(){console.log("Creating a game"),""!=this.newGameName&&this.socket.emit("create game",this.newGameName)},AddGame:function(e){this.gamelist.push(e)},JoinGame:function(e){console.log("Joining game"+e),this.gameID=e,this.words=[],this.winner="",this.role="",this.socket.emit("join game",e);for(var t=0;t<25;t++)n.a.set(this.wordsGuessed,t,!1)},GuessWord:function(e){this.socket.emit("guess word",[this.gameID,e]),n.a.set(this.wordsGuessed,e,!0),this.board[e]!=this.currentTurn&&(this.currentTurn=y(this.currentTurn))},EndGame:function(){this.socket.emit("end game",this.gameID),this.LeaveGame()},LeaveGame:function(){this.gameID=""},SetColor:function(e){this.role=e},EndTurn:function(){this.socket.emit("end turn",this.gameID)}},computed:{MyColor:function(){var e=this.board,t=this.role,s=this.wordsGuessed;return this.words.filter(function(n,a){return e[a]==t&&!s[a]})},TheirColor:function(){var e=this.board,t=y(this.role),s=this.wordsGuessed;return this.words.filter(function(n,a){return e[a]==t&&!s[a]})},DeathWord:function(){var e=this.board,t=this.wordsGuessed;return this.words.filter(function(s,n){return"death"==e[n]&&!t[n]})},NoColor:function(){var e=this.board,t=this.wordsGuessed;return this.words.filter(function(s,n){return"none"==e[n]&&!t[n]})},Guessed:function(){this.board;var e=this.wordsGuessed;return this.words.filter(function(t,s){return e[s]})}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid"},[""==e.gameID||e.isPhone||""!=e.winner?""!=e.gameID&&""==e.role&&""==e.winner?s("div",{staticClass:"container"},[s("br"),e._v(" "),s("h2",[e._v("Pick your Team")]),e._v(" "),s("button",{staticClass:"btn btn-block btn-danger",on:{click:function(t){e.SetColor("red")}}},[e._v("Red")]),e._v(" "),s("button",{staticClass:"btn btn-block btn-primary",on:{click:function(t){e.SetColor("blue")}}},[e._v("Blue")])]):""!=e.gameID&&""==e.winner?s("div",{staticClass:"container"},[s("div",{staticClass:"text-center"},[e._v("Currently "+e._s(e.role==e.currentTurn?"your":"not your")+" turn")]),e._v(" "),s("button",{staticClass:"btn btn-block btn-info",on:{click:e.EndTurn}},[e._v("End Turn")]),e._v(" "),s("h2",[e._v("Your Words")]),e._v(" "),s("ul",e._l(e.MyColor,function(t){return s("li",[e._v(e._s(t))])})),e._v(" "),s("h2",[e._v("Their words")]),e._v(" "),s("ul",e._l(e.TheirColor,function(t){return s("li",[e._v(e._s(t))])})),e._v(" "),s("h2",[e._v("Death word")]),e._v(" "),s("ul",e._l(e.DeathWord,function(t){return s("li",[e._v(e._s(t))])})),e._v(" "),s("h2",[e._v("Neutral")]),e._v(" "),s("ul",e._l(e.NoColor,function(t){return s("li",[e._v(e._s(t))])})),e._v(" "),s("h2",[e._v("Guessed Words")]),e._v(" "),s("ul",e._l(e.Guessed,function(t){return s("li",[e._v(e._s(t))])})),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""!=e.gameID&&""!=e.winner&&""==e.role?s("div",{staticClass:"container"},[s("h1",{staticClass:"text-center"},[e._v("Winner: "+e._s(e.winner))]),e._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""!=e.gameID&&e.winner==e.role?s("div",{staticClass:"container"},[s("h1",{staticClass:"text-center"},[e._v("Winner winner chicken dinner!")]),e._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""!=e.gameID&&""!=e.winner?s("div",{staticClass:"container"},[s("h1",[e._v("You've lost!")]),e._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-success btn-block btn-sm",on:{click:e.LeaveGame}},[e._v("Leave Game")])])]):""==e.gameID?s("div",{staticClass:"container"},[s("h2",[e._v("Join a game!")]),e._v(" "),s("ul",{staticClass:"list-group"},e._l(e.gamelist,function(t){return s("a",{staticClass:"list-group-item",on:{click:function(s){e.JoinGame(t)}}},[e._v(e._s(t))])})),e._v(" "),s("hr"),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newGameName,expression:"newGameName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name your game"},domProps:{value:e.newGameName},on:{input:function(t){t.target.composing||(e.newGameName=t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn btn-block btn-primary",on:{click:e.CreateGame}},[e._v("Create a game")])]):e._e():s("div",[s("div",{staticClass:"text-center",style:{"background-color":e.currentTurn}},[e._v("Currently "+e._s(e.currentTurn)+"'s turn")]),e._v(" "),e.words.length>0?s("div",e._l(Math.ceil(e.words.length/5),function(t){return s("div",{staticClass:"row"},e._l(e.words.slice(5*(t-1),5*t),function(n,a){return s("div",{staticClass:"col text-center codeword",on:{click:function(s){e.GuessWord(a+5*(t-1))}}},[s("div",{staticClass:"card panel-default",class:{red:e.wordsGuessed[a+5*(t-1)]&&"red"==e.board[a+5*(t-1)],blue:e.wordsGuessed[a+5*(t-1)]&&"blue"==e.board[a+5*(t-1)],none:e.wordsGuessed[a+5*(t-1)]&&"none"==e.board[a+5*(t-1)],death:e.wordsGuessed[a+5*(t-1)]&&"death"==e.board[a+5*(t-1)]},style:{height:e.boxHeight}},[e.wordsGuessed[a+5*(t-1)]?s("div",{staticClass:"card-header upsidedown"},[s("span",[e._v(e._s(e.board[a+5*(t-1)]))])]):s("div",{staticClass:"card-header upsidedown"},[e._v("\n                             "+e._s(n)+"\n                         ")]),e._v(" "),e.wordsGuessed[a+5*(t-1)]?s("div",{staticClass:"card-block",style:{height:e.boxHeight}},[s("span",[e._v(e._s(e.board[a+5*(t-1)]))])]):s("div",{staticClass:"card-block",style:{height:e.boxHeight}},[s("b",[e._v(e._s(n))])])])])}))})):s("div",[s("h2",{staticClass:"text-center"},[e._v("Loading words...")])]),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-danger btn-block btn-sm",on:{click:e.EndGame}},[e._v("End Game")])]),e._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-info btn-block btn-sm",on:{click:e.EndTurn}},[e._v("End Turn")])])])])])},staticRenderFns:[]};const k=[{path:"/sushi",name:"Sushi-on-the-go",title:"Sushies",component:h},{path:"/codewords",name:"codewords",title:"Code Words",component:s("VU/8")(f,_,!1,function(e){s("4yV6")},"data-v-eb4e2e26",null).exports}];var b={name:"HelloWorld",data:()=>({games:k})},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),e._l(e.games,function(t){return s("div",{key:t.name,staticClass:"game"},[s("router-link",{attrs:{to:{name:t.name}}},[s("h1",[e._v("Play  "+e._s(t.title))])])],1)})],2)},staticRenderFns:[]};var w=s("VU/8")(b,C,!1,function(e){s("c6e3")},"data-v-4af59749",null).exports,G={name:"Page Not Found",data:()=>({msg:"Page Not Found"})},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]},R=s("VU/8")(G,D,!1,null,null,null).exports;n.a.use(r.a);var S=[{path:"/",name:"HelloWorld",component:w}];(S=S.concat(k)).push({path:"*",component:R}),console.log(S);var P=new r.a({routes:S,history:!0,mode:"history"});n.a.config.productionTip=!1,new n.a({el:"#app",router:P,components:{App:i},template:"<App/>"})},ZiPp:function(e,t){},c6e3:function(e,t){},vSBm:function(e,t){function s(e){for(var t=[],s=0;s<e.length;s++)t.push(0);return t}function n(e,t){for(var s=0;s<e.length&&s<=t.length;s++)e[s]+=t[s];return e}e.exports={ScoreCards:function(e){if(void 0==e)return"ERROR";var t=s(e);return t=n(t=n(t=n(t=n(t,function(e){for(var t=e.map(function(e){return e.filter(function(e){return"maki"==e.type})}).map(function(e){return e.reduce(function(e,t){return e+t.value},0)}),s=0,n=0,a=0,i=0;i<t.length;i++)t[i]>s?(s=t[i],n=1):t[i]==s?n++:t[i]>0?(a=t[i],a=1):0==t[i]&&a++;n>1&&(a=0);var r=Math.floor(6/n),o=0!=a?Math.floor(3/a):0;return t.map(function(e){return e==s?r:0==e?o:0})}(e)),function(e){var t=s(e);return e.map(function(e){return e.filter(function(e){return"tempura"==e.type}).length}),t}(e)),function(e){var t=e.map(function(e){e=e.filter(e=>"sashimi"==e.type||"wasabi"==e.type);for(var t=!1,s=0,n=0;n<e.length;n++)"wasabi"==e[n].type?t=!0:(s+=t?3*e[n].value:e[n].value,t=!1);return s});return console.log("Sashimi:",t),s(e)}(e)),function(e){var t=[1,3,6,10,15],s=function(e,t){return e.map(function(e){return e.filter(function(e){return e.type==t})})}(e,"dumpling").map(e=>e.length).map(function(e){return e>=t.count?15:t[e]});return console.log("Dumplings",s),s}(e))}}}},["HURy"]);
//# sourceMappingURL=app.833d409f8e8f584ce08f.js.map