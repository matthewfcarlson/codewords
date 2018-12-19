webpackJsonp([3],{

/***/ "2x0n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vue-socket.io/dist/build.js
var build = __webpack_require__("hMcO");
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// EXTERNAL MODULE: ./games/arguable/common/argueGame.js
var argueGame = __webpack_require__("FZbS");
var argueGame_default = /*#__PURE__*/__webpack_require__.n(argueGame);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/ModeratorTopicPick.vue
//
//
//
//
//
//
//
//
//


//Pink
//Blue
//Yellow
//Green
//Brown
const allTopicList = ["Should organ donation be mandatory", "Should men be allowed to vote", "Should women have to put the toliet seat down", "Should trucks be illegal", "Should buses get their own highways", "Should diapers be free", "Should there be universal basic income", "Should Future Farmers of America be a required class in High School", "Should bottled watered by banned", "Is a college education worth it", "Should the US keep Daylight Savings Time", "Is golf a sport", "Is homework benefical", "Is drinking milk healthy for humans", "Is obesity a disease", "Is the moon real", "Are athletes paid too much", "Is breakfast cereal a soup", "Are selfies stupid", "Are santa's elves slaves", "Should we get rid of all silveware except the spork", "Should guys be allowed to wear tank tops", "Is it okay for girls to be significantly older than the guys they date (2-3 years)", "Are trix just for kids", "Is cheese the best food in the world", "Is 'derp' a real word", "Is cake better than cookies", "If Hogwarts sent your child an acceptance letter, would you let them attend", "Are aliens real", "Is country music any good", "Can adults see why kids love the taste of Cinnamon toast Crunch", "Is love more important than money", "Is it possible to be perfectly happy", "Is rose a good tasting flavor", "Did the egg come before the chicken", "Can a 10 year old stay home alone", "Do you have to be good looking to be popular", "Should daily showers be a requirement", "Should you date a nerd", "Are soft shell tacos better than crunchy", "Would life be better if we didn't have to eat", "Is burping more embarressing than farting", "Do you know the muffin man", "Would men be able to handle childbirth better than women", "Can pugs be police dogs", "Is it kay to pee while taking a shower", "Should the 'Deer Crossing' signs should be moved away from areas of heavy traffic, so the deer can cross safely", "Is chocolate better than vanilla", "Would it be fun to be a ghost and haunt people", "Do The Beatles even exist", "Can Barack Obama control the weather", "Is the LHC a device for awakening an ancient Egyptian god", "Is Jay-Z a time travelling vampire", "Is the earth hollow", "Did dinosaurs help build the pyramids", "Are poptarts ravioli", "Is pluto a planet", "Should a school district buy tablets instead of textbooks", "Can good exist without evil", "Would it be cool to be a dragon", "Should criminals be punished harder", "Should boys and girls be in seperate classes", "Should children be banned from fancy restaurants", "Is overpopulation the greatest threat to humanity", "Can tin foil hats protect you against alien mind readers", "Should ads for alcohol be prohibited", "Is a hotdog a sandwich", "Are magic 8 balls more reliable than tarot cards", "Are blueberries better than strawberries", "Should people be allowed to put pineapple on pizza", "Would hunger games be a good idea in real life", "Is the death penalty a good way to reduce crime", "Should it be illegal to refuse to vaccinate your children", "Would a vampire beat a werewolf in a fight", "Does the Harry Potter franchise promote witchcraft", "Is globalization a bad thing", "Should we declare war against _____", "Did we really land on the moon", "Are comic books better than regular books", "Should death metal be prohibited for children under 18", "Do video games require any skill to play", "Should we make more movies where the bad guys win", "Should we end The Oscars", "Should Katniss have ended up with Gale instead of Peeta", "Are men better at playing video games than women", "Are today's artists less talented than artists 50 years ago", "Is Elvis secretly alive", "Could Jack have fit on the door with Rose in Titanic", "Is being a YouTuber a real job", "Are concerts too loud", "Does social media make our world a better place", "Do we need more super hero movies", "Do people actually enjoy horror movies", "Should be a salary cap for actors", "Is Miss Universe a relevant competition", "Should all anime be banned", "Should it be illegal to make money on a cover song", "Is Global climate change the biggest problem we all face", "Are cats better than dogs", "Do penguins have knees", "Should they make more male barbies", "Would batman beat superman in a fight", "Is the earth flat", "Should junk food be banned from public schools", "Should you kiss with your eyes closed vs eyes open", "Is American Idol better than America's Got Talent", "Are women are more complicated than men", "Are pirates are cooler than ninjas", "Are we aliens", "Should guys be allowed to wear tight pants", "Should you plan your own funeral", "Are diamonds really a girl's best friend", "Is Jar Jar Binks the best movie character ever", "Is winter coming", "Will Tiger Woods ever win another golf tournament", "Are girls weird when they are PMS-ing", "Are memes good", "Should a dog's front legs be called arms", "Are clowns scary instead of funny", "Is pizza better than pasta", "Is Pepsi better than Coke", "Is weed better than Alcohol", "Are tacos better than burritos", "When you die in Canada, do you die in real life", "Is mayonnaise an instrument", "Should kids go to school 5 days a week", "Should schools kids have to wear school uniforms", "Should tablets replace textbooks in K-12 schools", "Do violent video games contribute to youth violence"];
/* harmony default export */ var ModeratorTopicPick = ({
  name: "ModeratorTopicPick",
  data() {
    return {
      topicList: []
    };
  },
  mounted: function () {
    for (var i = 0; i < 5; i++) {
      var randIndex = Math.floor(Math.random() * allTopicList.length);
      var topic = allTopicList[randIndex];
      this.topicList.push(topic);
    }
  },
  methods: {
    PickTopic: function (topic) {
      console.log("picked the topic");
      this.$emit("submit", topic);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0a452aaa","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/ModeratorTopicPick.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',[_vm._v("Pick Your Topic")]),_vm._v(" "),_c('ul',{staticClass:"list-group list-group-flush"},_vm._l((_vm.topicList),function(topic,index){return _c('a',{key:index,staticClass:"list-group-item list-group-item-action",on:{"click":function($event){_vm.PickTopic(topic)}}},[_vm._v(_vm._s(topic)+"?")])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var client_ModeratorTopicPick = (esExports);
// CONCATENATED MODULE: ./games/arguable/client/ModeratorTopicPick.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  ModeratorTopicPick,
  client_ModeratorTopicPick,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var arguable_client_ModeratorTopicPick = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/ModeratorPickDebator.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ModeratorPickDebator = ({
  name: "ModeratorPickTheDebators",
  data() {
    return {
      yes: -1,
      no: -1
    };
  },
  methods: {
    PickYes: function (index) {
      console.log("Picked Yes " + index);
      this.yes = index;
    },
    PickNo: function (index) {
      if (index == this.yes) return;
      console.log("Picked No " + index);
      this.no = index;
    },

    SelectDebators: function () {
      console.log("MODERATOR PICK DEBATOR ", this.yes, this.no);
      this.$emit("submit", this.yes, this.no);
    }

  },
  //players is the list of all the players and available is a list of the index of all avaiable players
  props: ["players", "avaialble"]
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-53b8ee2b","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/ModeratorPickDebator.vue
var ModeratorPickDebator_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',[_vm._v("Pick Your Debators")]),_vm._v(" "),_c('b',[_vm._v("Pick two players to debate for a topic:")]),_vm._v(" "),(_vm.yes == -1)?_c('h3',[_vm._v("YES")]):_c('h3',[_vm._v(_vm._s(_vm.players[_vm.yes])+" was picked to debate YES")]),_vm._v(" "),(_vm.yes == -1)?_c('ul',{staticClass:"list-group list-group-flush"},_vm._l((_vm.avaialble),function(index){return _c('a',{key:index+'yes',staticClass:"list-group-item list-group-item-action",on:{"click":function($event){_vm.PickYes(index)}}},[_vm._v(_vm._s(_vm.players[index]))])})):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.no == -1)?_c('h3',[_vm._v("NO")]):_c('h3',[_vm._v(_vm._s(_vm.players[_vm.no])+" was picked to debate NO")]),_vm._v(" "),(_vm.yes != -1 && _vm.no == -1)?_c('ul',{staticClass:"list-group list-group-flush"},_vm._l((_vm.avaialble),function(index){return (index != _vm.yes)?_c('a',{key:index+'no',staticClass:"list-group-item list-group-item-action",on:{"click":function($event){_vm.PickNo(index)}}},[_vm._v(_vm._s(_vm.players[index]))]):_vm._e()})):_vm._e(),_vm._v(" "),(_vm.yes != _vm.no && _vm.no != -1)?_c('div',[_c('button',{staticClass:"btn btn-dark btn-block",on:{"click":_vm.SelectDebators}},[_vm._v("Continue")])]):_vm._e()])}
var ModeratorPickDebator_staticRenderFns = []
var ModeratorPickDebator_esExports = { render: ModeratorPickDebator_render, staticRenderFns: ModeratorPickDebator_staticRenderFns }
/* harmony default export */ var client_ModeratorPickDebator = (ModeratorPickDebator_esExports);
// CONCATENATED MODULE: ./games/arguable/client/ModeratorPickDebator.vue
var ModeratorPickDebator_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ModeratorPickDebator___vue_template_functional__ = false
/* styles */
var ModeratorPickDebator___vue_styles__ = null
/* scopeId */
var ModeratorPickDebator___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ModeratorPickDebator___vue_module_identifier__ = null
var ModeratorPickDebator_Component = ModeratorPickDebator_normalizeComponent(
  ModeratorPickDebator,
  client_ModeratorPickDebator,
  ModeratorPickDebator___vue_template_functional__,
  ModeratorPickDebator___vue_styles__,
  ModeratorPickDebator___vue_scopeId__,
  ModeratorPickDebator___vue_module_identifier__
)

/* harmony default export */ var arguable_client_ModeratorPickDebator = (ModeratorPickDebator_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/DebatorPickStrategies.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const allStrategies = ["Gesticulate wildly", "Ask impossible question", "1 word: China", "Use animal metaphors", "You are on some serious drugs", "You're secretly a russian- don't let anyone know if you can help it", "Pretend you're holding an emotional support animal", "Compare your opponent to a serial killer", "All men are pigs", "Technology can solve all the problems", "You were injured in 'nam. Bring it up.", "Assume any claim that is made has a logical fallacy", "Always compromise- every position is too extreme one way or another", "Let your temper loose", "Never show any emotion", "Be politically correct", "Deny everything", "Respond to any theory with an every crazier one", "Use madeup science to support you", "Use your 178 IQ", "You can't believe your ears", "Attack your opponents gender", "Always apologize", "Everything is really funny", "Use the spirits in the room", "You can see in the future but no one can know", "Make groundless accustations", "Yes, you can really read minds", "The real problem is global warming", "Get really mad that your opponent eats meat", "You are daydreaming about something else", "Any fact presented to you is obviously a lie", "Quote an article you just read", "Use plenty of metaphors", "It's not your responsibility", "Make bad jokes as a distraction", "Ask questions but interrupt the answers", "Start every sentance with 'I wish...'", "Answer every question with 'According to my calculations'", "Facts confuse you"];

/* harmony default export */ var DebatorPickStrategies = ({
  name: "ModeratorPickTheDebators",
  data() {
    return {
      strategies: [],
      ready: false,
      counter: false,
      interval: null,
      timeLeft: 0
    };
  },
  computed: {
    secondsLeft: function () {
      var seconds = this.timeLeft;
      if (seconds < 10) seconds = "0" + seconds;
      return "0:" + seconds;
    }
  },
  methods: {
    DebatorReady: function () {
      if (this.ready) return;
      this.ready = true;
      this.$emit("submit");
      clearInterval(this.interval);
    },
    startTimer() {
      this.interval = setInterval(this.countDown, 1000);
      this.timeLeft = Math.round(this.timer / 1000);
    },
    countDown() {
      console.log("counting down", this.timeLeft);
      this.timeLeft -= 1;
      if (this.timeLeft <= 0) {
        this.DebatorReady();
      }
    }
  },
  props: ["timer"],
  beforeDestroy: function () {
    clearInterval(this.interval);
  },
  mounted: function () {
    while (this.strategies.length < 2) {
      var randIndex = Math.floor(Math.random() * allStrategies.length);
      var strategy = allStrategies[randIndex];
      if (this.strategies.indexOf(strategy) == -1) this.strategies.push(strategy);
    }
    this.startTimer();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e728fce","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/DebatorPickStrategies.vue
var DebatorPickStrategies_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',[_vm._v("Here's your strategies you'll be debating:")]),_vm._v(" "),_c('ul',{staticClass:"list-group list-group-flush"},_vm._l((_vm.strategies),function(strategy,index){return _c('li',{key:index,staticClass:"list-group-item list-group-item-action"},[_vm._v(_vm._s(strategy))])})),_vm._v(" "),(!_vm.ready)?_c('div',[_vm._v("Think about what you want to do with your strategies. You'll have 30 seconds to think about it. The debate will last 2-4 minutes and will end when the moderator ends the debate.")]):_vm._e(),_vm._v(" "),(!_vm.ready)?_c('button',{staticClass:"btn btn-success btn-block",on:{"click":_vm.DebatorReady}},[(!_vm.ready)?_c('span',[_vm._v("Click when you are ready ("+_vm._s(_vm.secondsLeft)+")")]):_c('span',[_vm._v("You are ready!")])]):_vm._e()])}
var DebatorPickStrategies_staticRenderFns = []
var DebatorPickStrategies_esExports = { render: DebatorPickStrategies_render, staticRenderFns: DebatorPickStrategies_staticRenderFns }
/* harmony default export */ var client_DebatorPickStrategies = (DebatorPickStrategies_esExports);
// CONCATENATED MODULE: ./games/arguable/client/DebatorPickStrategies.vue
var DebatorPickStrategies_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var DebatorPickStrategies___vue_template_functional__ = false
/* styles */
var DebatorPickStrategies___vue_styles__ = null
/* scopeId */
var DebatorPickStrategies___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DebatorPickStrategies___vue_module_identifier__ = null
var DebatorPickStrategies_Component = DebatorPickStrategies_normalizeComponent(
  DebatorPickStrategies,
  client_DebatorPickStrategies,
  DebatorPickStrategies___vue_template_functional__,
  DebatorPickStrategies___vue_styles__,
  DebatorPickStrategies___vue_scopeId__,
  DebatorPickStrategies___vue_module_identifier__
)

/* harmony default export */ var arguable_client_DebatorPickStrategies = (DebatorPickStrategies_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/DebatingTimeLimit.vue
//
//
//
//
//
//
//
//
//



/* harmony default export */ var DebatingTimeLimit = ({
    name: "DebatingTimeLimit",
    data() {
        return {
            ready: false,
            timeLeft: 0,
            counter: false,
            interval: null,
            secondsLeft: "2:00"
        };
    },
    methods: {
        DebateDone: function () {
            if (this.ready) return;
            this.ready = true;
            this.$emit("submit");
            clearInterval(this.interval);
        },
        startTimer() {
            this.interval = setInterval(this.countDown, 1000);
            this.timeLeft = Math.round(this.timer / 1000);
        },
        countDown() {
            console.log("counting down", this.timeLeft);
            this.timeLeft -= 1;
            var n = this.timeLeft;
            if (n > 0) {
                this.secondsLeft = Math.floor(n / 60) + ":" + n % 60;
            } else {
                this.DebateDone();
            }
        }
    },
    beforeDestroy: function () {
        clearInterval(this.interval);
    },
    mounted: function () {
        this.startTimer();
    },
    props: ["isModerator", "timer"]

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54eed154","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/DebatingTimeLimit.vue
var DebatingTimeLimit_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_vm._v("Time left in the debate : "+_vm._s(_vm.secondsLeft)+" ")]),_vm._v(" "),(_vm.isModerator)?_c('div',[_c('p',[_vm._v("Make sure you ask good questions or stop players if they get out of hand.")]),_vm._v(" "),_c('button',{staticClass:"btn btn-block btn-warning",on:{"click":_vm.DebateDone}},[_vm._v("End the debate early")])]):_vm._e()])}
var DebatingTimeLimit_staticRenderFns = []
var DebatingTimeLimit_esExports = { render: DebatingTimeLimit_render, staticRenderFns: DebatingTimeLimit_staticRenderFns }
/* harmony default export */ var client_DebatingTimeLimit = (DebatingTimeLimit_esExports);
// CONCATENATED MODULE: ./games/arguable/client/DebatingTimeLimit.vue
var DebatingTimeLimit_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var DebatingTimeLimit___vue_template_functional__ = false
/* styles */
var DebatingTimeLimit___vue_styles__ = null
/* scopeId */
var DebatingTimeLimit___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DebatingTimeLimit___vue_module_identifier__ = null
var DebatingTimeLimit_Component = DebatingTimeLimit_normalizeComponent(
  DebatingTimeLimit,
  client_DebatingTimeLimit,
  DebatingTimeLimit___vue_template_functional__,
  DebatingTimeLimit___vue_styles__,
  DebatingTimeLimit___vue_scopeId__,
  DebatingTimeLimit___vue_module_identifier__
)

/* harmony default export */ var arguable_client_DebatingTimeLimit = (DebatingTimeLimit_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/LobbyPlayerList.vue
//
//
//
//
//
//
//
//



/* harmony default export */ var LobbyPlayerList = ({
  name: "ModeratorPickTheDebators",
  data() {
    return {};
  },
  //players is the list of all the players and available is a list of the index of all avaiable players
  props: ["players"]
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8719f55a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/LobbyPlayerList.vue
var LobbyPlayerList_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',[_vm._v("Player List")]),_vm._v(" "),_c('ul',{staticClass:"list-group"},_vm._l((_vm.players),function(index){return _c('div',{key:index,staticClass:"list-group-item list-group-item-action"},[_vm._v(_vm._s(index))])}))])}
var LobbyPlayerList_staticRenderFns = []
var LobbyPlayerList_esExports = { render: LobbyPlayerList_render, staticRenderFns: LobbyPlayerList_staticRenderFns }
/* harmony default export */ var client_LobbyPlayerList = (LobbyPlayerList_esExports);
// CONCATENATED MODULE: ./games/arguable/client/LobbyPlayerList.vue
var LobbyPlayerList_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var LobbyPlayerList___vue_template_functional__ = false
/* styles */
var LobbyPlayerList___vue_styles__ = null
/* scopeId */
var LobbyPlayerList___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var LobbyPlayerList___vue_module_identifier__ = null
var LobbyPlayerList_Component = LobbyPlayerList_normalizeComponent(
  LobbyPlayerList,
  client_LobbyPlayerList,
  LobbyPlayerList___vue_template_functional__,
  LobbyPlayerList___vue_styles__,
  LobbyPlayerList___vue_scopeId__,
  LobbyPlayerList___vue_module_identifier__
)

/* harmony default export */ var arguable_client_LobbyPlayerList = (LobbyPlayerList_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/Voting.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Voting = ({
    name: "DebatingTimeLimit",
    data() {
        return {
            voted: false
        };
    },
    methods: {
        Yes: function () {
            this.voted = true;
            this.$emit("submit", "Yes");
        },
        No: function () {
            this.voted = true;
            this.$emit("submit", "No");
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dd31cb70","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/Voting.vue
var Voting_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_vm._v("Vote for the player you think did best! Regardless of how you personally feel about the topic.")]),_vm._v(" "),(!_vm.voted)?_c('div',[_c('button',{staticClass:"btn btn-block btn-yes",on:{"click":_vm.Yes}},[_vm._v("Vote Yes!")]),_vm._v(" "),_c('button',{staticClass:"btn btn-block btn-no",on:{"click":_vm.No}},[_vm._v("Vote No!")])]):_c('div',[_vm._v("\r\n        Thanks for voting!\r\n    ")])])}
var Voting_staticRenderFns = []
var Voting_esExports = { render: Voting_render, staticRenderFns: Voting_staticRenderFns }
/* harmony default export */ var client_Voting = (Voting_esExports);
// CONCATENATED MODULE: ./games/arguable/client/Voting.vue
var Voting_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Voting___vue_template_functional__ = false
/* styles */
var Voting___vue_styles__ = null
/* scopeId */
var Voting___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Voting___vue_module_identifier__ = null
var Voting_Component = Voting_normalizeComponent(
  Voting,
  client_Voting,
  Voting___vue_template_functional__,
  Voting___vue_styles__,
  Voting___vue_scopeId__,
  Voting___vue_module_identifier__
)

/* harmony default export */ var arguable_client_Voting = (Voting_Component.exports);

// EXTERNAL MODULE: ./node_modules/@chenfengyuan/vue-qrcode/dist/vue-qrcode.esm.js
var vue_qrcode_esm = __webpack_require__("uoCc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/SpectatorView.vue
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SpectatorView = ({
    name: "SpectatorView",
    data() {
        return {};
    },
    computed: {
        players: function () {
            return this.currentGame.GetPlayers();
        },
        pressure: function () {
            var self = this;
            return this.players.map(function (value, index) {
                return self.currentGame.GetPressure(index);
            });
        }
    },
    props: ["game"]
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9a467b2e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/SpectatorView.vue
var SpectatorView_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._v("\r\n    Spectator View\r\n    "),_c('ul',{staticClass:"list-group"},_vm._l((_vm.players),function(player,index){return _c('div',{key:player,staticClass:"list-group-item list-group-item-action"},[_vm._v("\r\n          "+_vm._s(player)+" "+_vm._s(index)+" "+_vm._s(_vm.pressure[index])+"\r\n        ")])})),_vm._v("\r\n    "+_vm._s(_vm.pressure)+"\r\n")])}
var SpectatorView_staticRenderFns = []
var SpectatorView_esExports = { render: SpectatorView_render, staticRenderFns: SpectatorView_staticRenderFns }
/* harmony default export */ var client_SpectatorView = (SpectatorView_esExports);
// CONCATENATED MODULE: ./games/arguable/client/SpectatorView.vue
var SpectatorView_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var SpectatorView___vue_template_functional__ = false
/* styles */
var SpectatorView___vue_styles__ = null
/* scopeId */
var SpectatorView___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var SpectatorView___vue_module_identifier__ = null
var SpectatorView_Component = SpectatorView_normalizeComponent(
  SpectatorView,
  client_SpectatorView,
  SpectatorView___vue_template_functional__,
  SpectatorView___vue_styles__,
  SpectatorView___vue_scopeId__,
  SpectatorView___vue_module_identifier__
)

/* harmony default export */ var arguable_client_SpectatorView = (SpectatorView_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./games/arguable/client/ArgueGameView.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













vue_esm["a" /* default */].filter("uppercase", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});
vue_esm["a" /* default */].filter("capitalize", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

vue_esm["a" /* default */].use(build_default.a, window.location.origin);
const ROOT = "Argue:";
/* harmony default export */ var ArgueGameView = ({
  name: "Arguable",
  data() {
    var self = this;
    var gameRoom = this.$route.params.gameID || "";
    var debug = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    return {
      currentGame: argueGame_default.a.CreateGame(gameRoom, function (name, args) {
        console.log("Broadcast up to the server that we called this ", name, args);
        self.$socket.emit(ROOT + "engine call", gameRoom, name, args);
      }),
      windowLocation: window.location.href,
      syncTimer: null,
      playerIndex: -1,
      playerName: debug ? "Default" : "",
      gameRoom: gameRoom,
      debug: debug
    };
  },
  components: {
    ModeratorPickDebator: arguable_client_ModeratorPickDebator,
    ModeratorTopicPick: arguable_client_ModeratorTopicPick,
    DebatorPickStrategies: arguable_client_DebatorPickStrategies,
    LobbyPlayerList: arguable_client_LobbyPlayerList,
    DebatingTimeLimit: arguable_client_DebatingTimeLimit,
    Voting: arguable_client_Voting,
    VueQrcode: vue_qrcode_esm["a" /* default */],
    SpectatorView: arguable_client_SpectatorView
  },
  created: function () {
    var names = ["Billy", "Bob", "Joe", "Sue", "Ellen", "Tj", "Safiye", "Jeff", "Kira", "Matt", "Jeremy", "Star", "James", "Lily", "Simon", "Norman", "Ruby", "Craig", "Dominica", "Ruth"];
    if (this.playerName == "Default") this.playerName = names[Math.floor(Math.random() * names.length)];
  },
  computed: {
    pickAblePlayerIndexs: function () {
      if (this.currentGame == null) return [];
      return this.currentGame.GetAvailablePlayerIndexs();

      //filter out the moderator
    },
    qrWidth: function () {
      var value = window.screen.width;
      if (value > 750) return 750;
      return window.screen.width;
    },
    winningPlayerName: function () {
      if (this.currentGame == null) return "";
      var winner = this.currentGame.GetGameWinner();
      if (winner == -1) return "";
      return this.playerList[winner];
    },
    timeoutTime: function () {
      if (this.currentGame == null) return -1;
      return this.currentGame.GetTimeOutInMs();
    },
    playerList: function () {
      if (this.currentGame == null) return [];
      return this.currentGame.GetPlayers();
    },
    state: function () {
      if (this.currentGame == null) return [];
      return this.currentGame.GetState();
    },
    moderator: function () {
      if (this.currentGame == null) return [];
      return this.currentGame.Moderator();
    },
    isFirstPlayer: function () {
      if (this.playerIndex == 0) return true;
      return false;
    },
    yesDebatorReady: function () {
      if (this.currentGame == null) return false;
      var ready = this.currentGame.GetReadyDebators();
      var index = this.currentGame.GetYesDebator();
      if (index == -1) return false;
      if (ready.indexOf(index) != -1) return true;
      return false;
    },
    noDebatorReady: function () {
      if (this.currentGame == null) return false;
      var ready = this.currentGame.GetReadyDebators();
      var index = this.currentGame.GetNoDebator();
      if (index == -1) return false;
      if (ready.indexOf(index) != -1) return true;
      return false;
    },
    isModerator: function () {
      if (this.currentGame == null) return [];
      if (this.playerIndex == -1) return false;
      return this.currentGame.Moderator() == this.playerIndex;
    },
    isDebator: function () {
      if (this.currentGame == null) return false;
      if (this.currentGame.GetYesDebator() == this.playerIndex) return true;
      if (this.currentGame.GetNoDebator() == this.playerIndex) return true;
    },
    pressureLevel: function () {
      if (this.currentGame == null) return 0;
      if (this.playerIndex == -1) return 0;
      return this.currentGame.GetPressure(this.playerIndex);
    },
    currentRole: function () {
      if (this.currentGame == null) return "none";
      if (this.playerIndex == -1 && this.currentGame.GetState() != "lobby") return "spectator";
      if (this.playerIndex != -1) {
        if (this.currentGame.Moderator() == this.playerIndex) return "moderator";
        if (this.currentGame.GetYesDebator() == this.playerIndex) return "debate_yes";
        if (this.currentGame.GetNoDebator() == this.playerIndex) return "debate_no";
        if (this.currentGame.GetState() == "voting" || this.currentGame.GetState() == "debating") return "voter";
      }
      return "";
    },
    currentRoleFriendly: function () {
      if (this.currentGame == null) return "Nothing";
      if (this.playerIndex == -1 && this.currentGame.GetState() != "lobby") return "a Spectator";
      if (this.playerIndex != -1) {
        if (this.currentGame.Moderator() == this.playerIndex) return "The Moderator";
        if (this.currentGame.GetYesDebator() == this.playerIndex || this.currentGame.GetNoDebator() == this.playerIndex) return "Debating";
        if (this.currentGame.GetState() == "voting" || this.currentGame.GetState() == "debating") return "a Voter";
      }
      return "";
    },
    topic: function () {
      if (this.currentGame == null) return [];
      return this.currentGame.GetTopic();
    },
    YesDebatorName: function () {
      if (this.currentGame == null) return [];
      var playerIndex = this.currentGame.GetYesDebator();
      if (playerIndex == -1) return "";
      var players = this.currentGame.GetPlayers();
      return players[playerIndex];
    },
    NoDebatorName: function () {
      if (this.currentGame == null) return [];
      var playerIndex = this.currentGame.GetNoDebator();
      if (playerIndex == -1) return "";
      var players = this.currentGame.GetPlayers();
      return players[playerIndex];
    }
  },
  methods: {
    StartGame: function () {
      this.currentGame.replicated.StartGame();
    },
    PickedDebators: function (yes, no) {
      console.log("Setting the debators ", yes, no);
      this.currentGame.replicated.SetDebaters(yes, no);
    },
    PickedTopic: function (topic) {
      console.log("Setting the topic", topic);
      this.currentGame.replicated.SetTopic(topic);
    },
    DebatorReady: function () {
      console.log("I'm ready");
      this.currentGame.replicated.SetDebatorReady(this.playerIndex);
    },
    DebateFinished: function () {
      this.currentGame.replicated.FinishDebate();
    },
    Voted: function (vote) {
      console.log("I voted", vote);
      this.currentGame.replicated.SetVote(this.playerIndex, vote.toLowerCase());
    },
    JoinGame: function (gameRoom, playerName) {
      if (gameRoom == undefined) gameRoom = this.gameRoom;
      if (playerName == undefined) playerName = this.playerName;
      if (playerName == "") return;
      document.title = "Arguing - " + playerName;
      this.$socket.emit(ROOT + "join game", gameRoom, playerName);
    },
    TimedSync: function () {
      if (this.currentGame == null) return;
      var lastCommand = this.currentGame.GetLastCommandTime();
      var date = new Date();
      var current_time = date.getTime();
      var elapsedTime = current_time - lastCommand;
      var gameRoom = this.gameRoom;
      console.log("There have been " + elapsedTime + " since we last synced or recieved a command");
      if (elapsedTime > 5000) {
        this.$socket.emit(ROOT + "sync game", gameRoom, lastCommand);
      }
      //otherwise we check how long it has been since we got the last command
    },
    RejoinGame: function (gameRoom, playerName, playerIndex, socketId) {
      console.log("Attempting to rejoin the game!");
      this.$socket.emit(ROOT + "rejoin game", gameRoom, playerName, playerIndex, socketId);
    },
    LeaveGame: function () {
      this.$router.push("/argue");
    }
  },
  mounted() {
    this.$socket.emit(ROOT + "connect");
  },
  sockets: {
    connect() {
      this.$socket.emit(ROOT + "connect");
    },
    "Argue:connected": function () {
      var gameRoom = this.gameRoom;
      console.log("socket connected for room " + gameRoom);
      this.$socket.emit(ROOT + "sync game", gameRoom, 0);

      if (this.connected) return;

      this.connected = true;
      var self = this;

      var previousGame = null;
      if (localStorage.getItem(gameRoom) && this.playerIndex == -1) {
        previousGame = JSON.parse(localStorage.getItem(gameRoom));
        console.log(this);
        this.RejoinGame(gameRoom, previousGame.playerName, previousGame.index, previousGame.socketId);
        this.playerName = previousGame.playerName;
        localStorage.removeItem(gameRoom);
      }
      console.log("Previous game", previousGame);
      // set a timer to sync
      this.syncTimer = setInterval(this.TimedSync, 5000);
    },
    "Argue:error": function (message, leave) {
      alert(message + leave);
      if (leave != undefined && leave == true) {
        console.log("Leaving game");
        LeaveGame();
      }
    },
    "Argue:set player": function (playerIndex) {
      console.log("Player ID" + playerIndex);
      //TODO do this better
      this.playerIndex = playerIndex;
      console.log("Storing the game for later");
      localStorage.setItem(this.gameRoom, JSON.stringify({
        playerName: this.playerName,
        index: playerIndex,
        socketId: this.$socket.id
      }));
    },
    "Argue:engine call": function (data) {
      console.log("We got a response from the server to call our engine with func " + data.funcName + " from " + data.source, data);
      if (this.$socket.id == data.source) {
        console.log("Ignoring");
      } else {
        this.currentGame.ApplyFunc(data.funcName, data.argList, data.time);
        vue_esm["a" /* default */].set(this, "currentGame", this.currentGame);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ea39d63a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./games/arguable/client/ArgueGameView.vue
var ArgueGameView_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content",class:{ 'content-moderator': _vm.isModerator, 'content-debate-yes': _vm.currentRole == 'debate_yes', 'content-debate-no': _vm.currentRole == 'debate_no' }},[_c('h1',{staticClass:"speech-bubble"},[(_vm.currentRole != '')?_c('div',[_vm._v("I am "+_vm._s(_vm.currentRoleFriendly))]):_c('div',[_vm._v("Arguable Game")])]),_vm._v(" "),(_vm.pressureLevel == 1)?_c('div',{staticClass:"lead badge badge-warning "},[_vm._v("Under Pressure!")]):_vm._e(),_vm._v(" "),(_vm.pressureLevel == 2)?_c('div',{staticClass:"lead badge badge-danger "},[_vm._v("I'm out!")]):_vm._e(),_vm._v(" "),(_vm.topic != '')?_c('h2',{staticClass:"speech-bubble"},[_vm._v("\r\n      "+_vm._s(_vm.topic)+"?\r\n      "),_c('hr'),_vm._v(" "),(_vm.YesDebatorName != '')?_c('div',{staticStyle:{"color":"black"}},[_c('small',{staticClass:"row"},[_c('div',{staticClass:"text-yes col-5 text-left"},[(_vm.yesDebatorReady)?_c('i',{staticClass:"fas fa-xs fa-user-check"}):_vm._e(),_vm._v(_vm._s(_vm._f("uppercase")(_vm.YesDebatorName)))]),_vm._v(" "),_c('div',{staticClass:"col-2 text-center "},[_vm._v("vs")]),_vm._v(" "),_c('div',{staticClass:"text-no col-5 text-right"},[(_vm.noDebatorReady)?_c('i',{staticClass:"fas fa-xs fa-user-check"}):_vm._e(),_vm._v(_vm._s(_vm._f("uppercase")(_vm.NoDebatorName))+" ")])])]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.currentRole == 'debate_yes')?_c('h2',{staticClass:"speech-bubble speech-bubble-yes"},[_vm._v("Yes!")]):_vm._e(),_vm._v(" "),(_vm.currentRole == 'debate_no')?_c('h2',{staticClass:"speech-bubble speech-bubble-no"},[_vm._v("No!")]):_vm._e(),_vm._v(" "),(_vm.state == 'debating')?_c("DebatingTimeLimit",{tag:"div",attrs:{"timer":_vm.timeoutTime,"isModerator":_vm.isModerator},on:{"submit":_vm.DebateFinished}}):(_vm.state == 'lobby')?_c('div',[_c("LobbyPlayerList",{tag:"div",attrs:{"players":_vm.playerList}}),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.playerIndex == -1)?_c('div',[_c('h3',[_vm._v("Join game")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.playerName),expression:"playerName"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Your name"},domProps:{"value":(_vm.playerName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.playerName=$event.target.value}}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('button',{staticClass:"btn btn-primary btn-block",on:{"click":function($event){_vm.JoinGame()}}},[_vm._v("Join Game")])]):(_vm.isFirstPlayer)?_c('button',{staticClass:"btn btn-primary btn-block",on:{"click":_vm.StartGame}},[_vm._v("Start Game")]):_c('div',{staticClass:"btn btn-info btn-block",attrs:{"disabled":""}},[_vm._v("Waiting for the game to start")]),_vm._v(" "),_c('vue-qrcode',{staticClass:"text-center",attrs:{"value":_vm.windowLocation,"options":{ width: _vm.qrWidth }}})],1):(_vm.isModerator && _vm.state == 'first_mod')?_c("ModeratorPickDebator",{tag:"div",attrs:{"players":_vm.playerList,"avaialble":_vm.pickAblePlayerIndexs},on:{"submit":_vm.PickedDebators}}):(_vm.isModerator && _vm.state == 'moderate_topic')?_c("ModeratorTopicPick",{tag:"div",on:{"submit":_vm.PickedTopic}}):(_vm.isDebator && (_vm.state == 'debate_waiting'|| _vm.state == 'debating'))?_c("DebatorPickStrategies",{tag:"div",attrs:{"timer":_vm.timeoutTime},on:{"submit":_vm.DebatorReady}}):(!_vm.isDebator && _vm.state == 'voting')?_c("Voting",{tag:"div",on:{"submit":_vm.Voted}}):(_vm.state == 'end_game')?_c('div',[_c('h2',[_vm._v("Game over!")]),_vm._v("\r\n      The winner is "+_vm._s(_vm.winningPlayerName)+"\r\n\r\n    ")]):_c('div',[_vm._v("\r\n      Waiting...\r\n    ")]),_vm._v(" "),(_vm.currentRole == 'spectator')?_c("SpectatorView",{tag:"div",attrs:{"game":_vm.currentGame}}):_vm._e(),_vm._v(" "),(_vm.currentGame != null && _vm.debug)?_c('pre',[_vm._v("\r\n      "+_vm._s(_vm.playerList)+"\r\n      "+_vm._s(_vm.state)+"\r\n      Role: "+_vm._s(_vm.currentRole)+"\r\n      Moderator: "+_vm._s(_vm.moderator)+"\r\n      PlayerIndex: "+_vm._s(_vm.playerIndex)+"\r\n      YES: "+_vm._s(_vm.currentGame.GetYesDebator())+" Ready: "+_vm._s(_vm.yesDebatorReady)+"\r\n      NO: "+_vm._s(_vm.currentGame.GetNoDebator())+"  Ready: "+_vm._s(_vm.noDebatorReady)+"\r\n      Pressure: "+_vm._s(_vm.pressureLevel)+"\r\n    ")]):_vm._e()])}
var ArgueGameView_staticRenderFns = []
var ArgueGameView_esExports = { render: ArgueGameView_render, staticRenderFns: ArgueGameView_staticRenderFns }
/* harmony default export */ var client_ArgueGameView = (ArgueGameView_esExports);
// CONCATENATED MODULE: ./games/arguable/client/ArgueGameView.vue
function injectStyle (ssrContext) {
  __webpack_require__("Hvao")
  __webpack_require__("zZZt")
}
var ArgueGameView_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var ArgueGameView___vue_template_functional__ = false
/* styles */
var ArgueGameView___vue_styles__ = injectStyle
/* scopeId */
var ArgueGameView___vue_scopeId__ = "data-v-ea39d63a"
/* moduleIdentifier (server only) */
var ArgueGameView___vue_module_identifier__ = null
var ArgueGameView_Component = ArgueGameView_normalizeComponent(
  ArgueGameView,
  client_ArgueGameView,
  ArgueGameView___vue_template_functional__,
  ArgueGameView___vue_styles__,
  ArgueGameView___vue_scopeId__,
  ArgueGameView___vue_module_identifier__
)

/* harmony default export */ var arguable_client_ArgueGameView = __webpack_exports__["default"] = (ArgueGameView_Component.exports);


/***/ }),

/***/ "FZbS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var StateMachine = __webpack_require__("ZkDX");
var Random = __webpack_require__("LtXW");
//figure out if we are server side?
function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function CreateGame(gameName, proxyCallback) {

    //We start in lobby and go to first_mod (first moderator)
    // -> Going to first_moderator we pick the first_moderator 
    //  First_moderator
    // -> We ask who they want to debate and then ask the first moderator to pick them yes or no
    // Moderate_topic
    // -> We ask what topic they want to debate -> this is client side
    // Debate_Waiting
    // -> we give each player their topics and wait for the moderator to start the timer
    //Debating
    // -> We are running the timer down
    //Voting
    // -> We wait for each player to vote
    // -> Moderator can override
    //End_vote
    // -> New debaters are chosen new moderate is chosen. Losing player is now moderator.
    // -> If more than one player left, We automatically move to Moderate_topic
    // -> Otherwise we end the game
    //End_game

    var transitionFunction = null;
    var fsm = new StateMachine({
        init: 'lobby',
        transitions: [{
            name: 'start',
            from: 'lobby',
            to: 'first_mod'
        },
        {
            name: 'firstModerateDone',
            from: 'first_mod',
            to: 'moderate_topic'
        },
        {
            name: 'topicPick',
            from: 'moderate_topic',
            to: 'debate_waiting'
        },
        {
            name: 'debateStart',
            from: 'debate_waiting',
            to: 'debating'
        },
        {
            name: 'debateEnd',
            from: 'debating',
            to: 'voting'
        },
        {
            name: 'votingEnd',
            from: 'voting',
            to: 'vote_end'
        },
        {
            name: 'newDebate',
            from: 'vote_end',
            to: 'moderate_topic'
        },
        {
            name: 'finishGame',
            from: 'vote_end',
            to: 'end_game'
        },
        {
            name: 'endGame',
            from: 'moderate_topic',
            to: 'end_game'
        }
        ],
        methods: {
            onTransition: function (lifecycle) {
                if (transitionFunction != null) transitionFunction(lifecycle)
            },
            onInvalidTransition: function (transition, from, to) {
                console.error("ERROR: transition not allowed from " + from + " to " + to);
            }
        }
    });

    var default_game = { //python style
        _state: fsm,
        _gameName: gameName || "DEFAULT",
        _players: [],
        _moderator: -1,
        _debaters: [],
        _pressure: [], //0 = no pressure, 1 = under pressure, 2 = out of the game
        _topic: "",
        _votes: [],
        _round: 0,
        _mt: null,
        _lastModeratedRound: [],
        _debatePairs: [],
        _readyDebators: [],
        _lastCommandTime: 0,
        _timeOut: -1,

        //Sets a callback for transitions in state
        SetTransition: function (trans) {
            transitionFunction = trans;
        },

        GetTimeOutInMs: function(){
            return this._timeOut;
        },

        GetLastCommandTime: function(){
            return this._lastCommandTime;
        },

        //set the debaters (yes is always first)
        SetDebaters: function (player1, player2) {
            if (!this._state.is("first_mod")) {
                return "You can't manually set the debaters if you're not in the first_mod"
            }
            if (player1 == player2) return "You cannot debate yourself";
            if (player1 < 0) return "Invalid debator 1";
            if (player2 < 0) return "Invalid debator 2";
            this._debaters = [player1, player2];
            this._readyDebators.splice(0, this._readyDebators.length);
            this._debatePairs.push(this._debaters);
            this._state.firstModerateDone();
            this._DidExecuteCommand();
            return 0;
        },

        //set the next debaters
        _SetNextDebaters: function () {
            if (!this._state.is("vote_end")) {
                return "You can't manually set the debaters if you're not in the first_mod"
            }
            //figure out who all is still in the game
            var arrayList = this.GetAvailablePlayerIndexs();
            console.log("Setting next debators ", arrayList);
            //go through all the eligible players
            var self = this;
            var timesDebated = arrayList.map(x => {
                //figure out how many times this person has been in a debate
                return self._debatePairs.reduce((prev, curr) => {
                    if (curr.indexOf(x) != -1) return prev + 1;
                    return prev;
                }, 0);
            });
            console.log("Number of times they've debated", timesDebated);
            var debator1 = -1;
            var debator2 = -1;
            var minTimesDebated = 999;
            timesDebated.forEach((curr, index) => {
                if (curr < minTimesDebated) {
                    debator1 = index;
                    minTimesDebated = curr;
                }
            });
            var minTimesDebated = 999;
            timesDebated.forEach((curr, index) => {
                if (curr < minTimesDebated && index != debator1) {
                    debator2 = index;
                    minTimesDebated = curr;
                }
            });

            if (debator1 == -1 || debator2 == -1) {
                console.log("We have a winner!", debator1, debator2);
                console.log("State ", this.GetState());
                return "winner";
            }

            console.log("Possible debators indexs: ", debator1, debator2);

            //convert back to the origional debator index format
            debator1 = arrayList[debator1];
            debator2 = arrayList[debator2];

            console.log("Possible debators: ", debator1, debator2);
            var debators = [debator1, debator2];
            //Check to make sure this configuration doesn't exist
            if (this._debatePairs.indexOf(debators) != -1) {
                debators = [debator2, debator1];
            }

            if (this._debatePairs.indexOf(debators) != -1) {
                debators = [debator1, debator2];
            }


            this._debaters = debators;
            this._readyDebators.splice(0, this._readyDebators.length);
            this._debatePairs.push(this._debaters);

            return 0;

        },

        SetDebatorReady: function (playerIndex) {
            //TODO set a timer that will go off
            if (!this._state.is("debate_waiting")) return "We are not in the right state for the debators to mark ready";
            if (this._readyDebators.indexOf(playerIndex) != -1) return "This debator player is already ready" + playerIndex;
            this._readyDebators.push(playerIndex);
            if (this._readyDebators.length >= 2) {
                var currentTime = this._GetCurrentTime();
                var elapsedTime = currentTime - this._lastCommandTime;
                var timeoutTime = 120 * 1000;
                if (elapsedTime > 0){
                    timeoutTime =  timeoutTime - elapsedTime;
                }
                if (timeoutTime <= 0) timeoutTime = 1;
                this._timeOut = timeoutTime;
                this._state.debateStart();
            }
            this._DidExecuteCommand();
            return 0;
        },



        FinishDebate: function () {
            if (!this._state.is("debating")) return "We are not in the right state for the debate to finish";
            //TODO check if enough time has elapsed?
            this._state.debateEnd();
            this._DidExecuteCommand();
            return 0;
        },

        GetGameWinner: function () {
            var winner = -1;
            var numWinners = 0;
            this._pressure.forEach((x, index) => {
                if (x < 2 && x >= 0) {
                    winner = index;
                    numWinners++;
                }
            });
            if (numWinners != 1) return -1;
            return winner;
        },

        SetVote: function (playerIndex, vote) {
            console.log(this._votes);
            if (!this._state.is("voting")) return "We are not in the right state for the debate to finish";
            if (this._votes[playerIndex] != "") return "You have already voted";
            if (vote != "yes" && vote != "no") return "Invalid vote value";
            if (this.GetYesDebator() == playerIndex) return "You cannot vote when you're a debator";
            if (this.GetNoDebator() == playerIndex) return "You cannot vote when you're a debator";

            this._votes[playerIndex] = vote;

            if (this.GetWinner() >= 0) {
                //end the debate
                console.log("Ending the debate");
                this._state.votingEnd();
                this.SetupNextRound();
            }
            this._DidExecuteCommand();
            return 0;
        },

        _GetNextModerator: function () {
            //figure out who all is still in the game
            var self = this;
            var moderatorIndexs = this._players.map((x, i) => i).filter(x => self._pressure[x] >= 2);
            var leastIndex = -1;
            var leastValue = 99999;
            var moderatorIndex = -1;
            console.log("Eliminated players ", moderatorIndexs)
            //preference is given to those that are out
            moderatorIndexs.forEach((x) => {
                if (self._lastModeratedRound[x] < leastValue) {
                    leastValue = self._lastModeratedRound[x];
                    leastIndex = x;
                }
            });
            console.log("leastIndex", leastIndex);
            if (leastIndex != -1) moderatorIndex = leastIndex;
            else {
                moderatorIndexs = this._players.map((x, i) => i);
                leastIndex = -1;
                leastValue = 9999;
                //preference is given to those that are out
                moderatorIndexs.forEach(x => {
                    if (self._lastModeratedRound[x] < leastValue) {
                        leastValue = self._lastModeratedRound[x];
                        leastIndex = x;
                    }
                });
                moderatorIndex = leastIndex;
            }

            console.log("New moderator: ", moderatorIndex);
            //update the last moderated round to this round
            console.log("Setting round to: ", this._round);
            this._lastModeratedRound[moderatorIndex] = this._round;

            return moderatorIndex;
        },

        SetupNextRound: function () {
            console.log("Setting up next round");
            //add points
            var winner = this.GetWinner();
            var loserIndex = this.GetNoDebator();
            if (winner == loserIndex) loserIndex = this.GetYesDebator();
            //console.log("loser is ", loserIndex);
            this._pressure[loserIndex]++;
            this._pressure.push(-1); //try to mess with the reactive system
            this._pressure.pop();
            //console.log("Pressure", this._pressure);
            this._topic = "";
            this._votes = this._players.map(x => ""); //set them all to empty strings
            this._debaters.splice(0, this._debaters.length);
            this._round++;

            if (this.GetGameWinner() != -1) {
                console.log("Game is over");
                this._moderator = -1;
                this._debaters = [];
                this._state.finishGame();
            } else {
                //pick a new moderator
                this._moderator = this._GetNextModerator();
                console.log("New Moderator: ", this._moderator);
                //pick new debators
                this._SetNextDebaters();
                //start the new debate
                this._state.newDebate();
            }
        },

        GetWinner: function () {
            var yes = 0;
            var no = 0;
            var unanswered = this._players.length - 2; //there's always two debators
            if (!this._state.is("vote_end") && !this._state.is("voting")) return "A debate is not ready";


            for (var i = 0; i < this._votes.length; i++) {
                var value = this._votes[i];
                if (value == "") continue;
                unanswered--;
                if (value == "yes") yes++;
                if (value == "no") no++;

            }
            if (unanswered != 0) return -1;
            if (yes > no) return this.GetYesDebator();
            if (no > yes) return this.GetNoDebator();


            //there's a tie
            var moderatorVote = this._votes[this._moderator];
            console.log("The moderator voted tie-breaker", moderatorVote);
            if (moderatorVote == "yes") yes++;
            if (moderatorVote == "no") no++;
            if (yes > no) return this.GetYesDebator();
            if (no > yes) return this.GetNoDebator();
        },

        GenCallObj: function (source, callName, args) {
            var date = new Date();
            var current_time = date.getTime();
            return {
                source: source,
                funcName: callName,
                argList: args,
                time: current_time
            }
        },

        StoreCall: function (callObj) {
            if (this.commands != null) this.commands.push(callObj);
        },

        GetLastCommandTime: function () {
            if (this.commands != null) {
                var last_index = this.commands.length - 1;
                var last_command = this.commands[last_index];
                return last_command.time;
            }
            return 0;
        },

        //Sets the topic of the particular session
        SetTopic: function (topic) {
            if (this._state.is("moderate_topic")) {
                //set the topic to be picked
                this._topic = topic;
                this._state.topicPick();
                var self = this;

                var currentTime = this._GetCurrentTime();
                var elapsedTime = currentTime - this._lastCommandTime;
                var timeoutTime = 45 * 1000;
                if (elapsedTime > 0){
                    timeoutTime =  timeoutTime - elapsedTime;
                }
                
                if (timeoutTime <= 0) timeoutTime = 1;
                this._timeOut = timeoutTime;

                console.log("We got this ", this._lastCommandTime, currentTime, elapsedTime);
                console.log("Time left", timeoutTime);
                
                setTimeout(function () {
                    console.log("TIMES UP - DEBATORS Prep time is up!"); //, self);
                    if (self._state.is("moderate_topic")) {
                        self.SetDebatorReady(self.GetNoDebator());
                        self.SetDebatorReady(self.GetYesDebator());
                        self.StoreCall(self.GenCallObj(
                            "Server", "SetDebatorReady", [self.GetNoDebator()]
                        ));
                        self.StoreCall(self.GenCallObj(
                            "Server", "SetDebatorReady", [self.GetYesDebator()]
                        ));
                    }
                }, timeoutTime);
                this._DidExecuteCommand();
                return 0;
            } else {
                return "Topic cannot be set in this state"
            }
        },

        GetTopic: function () {
            return this._topic;
        },

        //Gets the debator that is for the issue
        GetYesDebator: function () {
            if (this._debaters.length == 0) return -1;
            return this._debaters[0];
        },

        GetPressure: function (index) {
            if (this._pressure.length <= index) return 0;
            return this._pressure[index];
        },

        //Gets the debator that is against the issue
        GetNoDebator: function () {
            if (this._debaters.length == 0) return -1;
            return this._debaters[1];
        },

        //Get the list of players
        GetPlayers: function () {
            return this._players
        },

        GetAvailablePlayerIndexs: function () {
            if (this._players.length == 0) return [];
            const moderator = this._moderator;
            var self = this;
            //filter out the players that are out of the game
            var availablePlayers = this._players.map((x, index) => index).filter(function (val, index) {
                if (index == moderator) return false;
                if (self._pressure[index] >= 2) return false;
                return true;
            });
            console.log("Players you can pick: ", availablePlayers)
            return availablePlayers;
        },

        //Gets the current moderator
        Moderator: function () {
            return this._moderator;
        },

        //Gets the current state
        GetState: function () {
            return this._state.state;
        },

        GetReadyDebators: function () {
            return this._readyDebators;
        },

        //Adds a player to the game
        AddPlayer: function (name) {
            if (name == null) return "Malformed name";
            if (!(typeof name === 'string')) {
                name = String(name);
            }
            if (name == null) return "Malformed name";
            name = name.trim();
            if (!this._state.is("lobby")) return "The game has already started";
            if (this._players.indexOf(name) != -1) return "You cannot join the same game twice";
            this._players.push(name);
            this._DidExecuteCommand();
            return 0;
        },
        //Ends the game
        EndGame: function () {
            this._state.endgame();
            this._DidExecuteCommand();
            return 0;
        },

        //starts the game, you must have three players
        StartGame: function () {
            //check if we can start

            if (this._players.length < 3) return "You need 3 players before you can start the game"
            if (this._state.cannot("start")) return "You cannot start the game";
            //console.log("Starting the game");
            while (this._players.length > this._pressure.length) this._pressure.push(0);
            while (this._players.length > this._votes.length) this._votes.push("");
            while (this._players.length > this._lastModeratedRound.length) this._lastModeratedRound.push(-1);
            //console.log(this._votes);
            this._state.start();
            this._moderator = this.GetRandomNumber(0, this._players.length - 1);
            this._lastModeratedRound[this._moderator] = 0;
            this._DidExecuteCommand();
            return 0;
        },

        _DidExecuteCommand: function () {
            var current_time = this._GetCurrentTime();
            this._lastCommandTime = current_time;
        },
        _GetCurrentTime: function () {
            var date = new Date();
            var current_time = date.getTime();
            return current_time;
        },

        ApplyFunc: function (name, args, time) {
            if (this.hasOwnProperty(name)) {
                console.log("Calling " + name + " with ", args);
                this._lastCommandTime = time;
                return this[name].apply(this, args);
            } else {
                return "This call " + name + " does not exist";
            }
        },

        //Gets a random number
        GetRandomNumber: function (min, max) {
            if (this._mt == null) {
                var hashCode = function (s) {
                    return s.split("").reduce(function (a, b) {
                        a = ((a << 5) - a) + b.charCodeAt(0);
                        return a & a
                    }, 0);
                }
                var mt = Random.engines.mt19937();
                mt.seed(hashCode(this._gameName)); //TODO FIGURE OUT HOW TO 
                this._mt = mt;
                //console.log("Seeding with",hashCode(this._gameName));
            }
            var val = Random.integer(min, max)(this._mt);
            //console.log("Returning value",val);
            return val;
        }



    };

    if (proxyCallback == undefined) {
        proxyCallback = function (name, ...args) {
            console.log(name + " was called with " + args);
        };
    }

    function ConvertFunction(context, func) {
        return function (...recievedArgs) {
            proxyCallback(func.name, recievedArgs);
            return func.apply(context, recievedArgs);
        }
    }

    default_game.replicated = {};
    for (var key in default_game) {

        if (isFunction(default_game[key])) {
            var hiddenFunc = default_game[key];
            default_game.replicated[key] = ConvertFunction(default_game, hiddenFunc);
        }
    }
    /*
    for (var key in default_game) {
        
        if (isFunction(default_game[key])){
            default_game[key+"_hidden"] = default_game[key];
            var hiddenFunc = default_game[key+"_hidden"];
            default_game[key] = ConvertFunction(default_game, hiddenFunc);
        } 
    }
    */

    return default_game;

}

module.exports = {
    CreateGame
}

/***/ }),

/***/ "Hvao":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZkDX":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("StateMachine", [], factory);
	else if(typeof exports === 'object')
		exports["StateMachine"] = factory();
	else
		root["StateMachine"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(target, sources) {
  var n, source, key;
  for(n = 1 ; n < arguments.length ; n++) {
    source = arguments[n];
    for(key in source) {
      if (source.hasOwnProperty(key))
        target[key] = source[key];
    }
  }
  return target;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-------------------------------------------------------------------------------------------------

var mixin = __webpack_require__(0);

//-------------------------------------------------------------------------------------------------

module.exports = {

  build: function(target, config) {
    var n, max, plugin, plugins = config.plugins;
    for(n = 0, max = plugins.length ; n < max ; n++) {
      plugin = plugins[n];
      if (plugin.methods)
        mixin(target, plugin.methods);
      if (plugin.properties)
        Object.defineProperties(target, plugin.properties);
    }
  },

  hook: function(fsm, name, additional) {
    var n, max, method, plugin,
        plugins = fsm.config.plugins,
        args    = [fsm.context];

    if (additional)
      args = args.concat(additional)

    for(n = 0, max = plugins.length ; n < max ; n++) {
      plugin = plugins[n]
      method = plugins[n][name]
      if (method)
        method.apply(plugin, args);
    }
  }

}

//-------------------------------------------------------------------------------------------------


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-------------------------------------------------------------------------------------------------

function camelize(label) {

  if (label.length === 0)
    return label;

  var n, result, word, words = label.split(/[_-]/);

  // single word with first character already lowercase, return untouched
  if ((words.length === 1) && (words[0][0].toLowerCase() === words[0][0]))
    return label;

  result = words[0].toLowerCase();
  for(n = 1 ; n < words.length ; n++) {
    result = result + words[n].charAt(0).toUpperCase() + words[n].substring(1).toLowerCase();
  }

  return result;
}

//-------------------------------------------------------------------------------------------------

camelize.prepended = function(prepend, label) {
  label = camelize(label);
  return prepend + label[0].toUpperCase() + label.substring(1);
}

//-------------------------------------------------------------------------------------------------

module.exports = camelize;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-------------------------------------------------------------------------------------------------

var mixin    = __webpack_require__(0),
    camelize = __webpack_require__(2);

//-------------------------------------------------------------------------------------------------

function Config(options, StateMachine) {

  options = options || {};

  this.options     = options; // preserving original options can be useful (e.g visualize plugin)
  this.defaults    = StateMachine.defaults;
  this.states      = [];
  this.transitions = [];
  this.map         = {};
  this.lifecycle   = this.configureLifecycle();
  this.init        = this.configureInitTransition(options.init);
  this.data        = this.configureData(options.data);
  this.methods     = this.configureMethods(options.methods);

  this.map[this.defaults.wildcard] = {};

  this.configureTransitions(options.transitions || []);

  this.plugins = this.configurePlugins(options.plugins, StateMachine.plugin);

}

//-------------------------------------------------------------------------------------------------

mixin(Config.prototype, {

  addState: function(name) {
    if (!this.map[name]) {
      this.states.push(name);
      this.addStateLifecycleNames(name);
      this.map[name] = {};
    }
  },

  addStateLifecycleNames: function(name) {
    this.lifecycle.onEnter[name] = camelize.prepended('onEnter', name);
    this.lifecycle.onLeave[name] = camelize.prepended('onLeave', name);
    this.lifecycle.on[name]      = camelize.prepended('on',      name);
  },

  addTransition: function(name) {
    if (this.transitions.indexOf(name) < 0) {
      this.transitions.push(name);
      this.addTransitionLifecycleNames(name);
    }
  },

  addTransitionLifecycleNames: function(name) {
    this.lifecycle.onBefore[name] = camelize.prepended('onBefore', name);
    this.lifecycle.onAfter[name]  = camelize.prepended('onAfter',  name);
    this.lifecycle.on[name]       = camelize.prepended('on',       name);
  },

  mapTransition: function(transition) {
    var name = transition.name,
        from = transition.from,
        to   = transition.to;
    this.addState(from);
    if (typeof to !== 'function')
      this.addState(to);
    this.addTransition(name);
    this.map[from][name] = transition;
    return transition;
  },

  configureLifecycle: function() {
    return {
      onBefore: { transition: 'onBeforeTransition' },
      onAfter:  { transition: 'onAfterTransition'  },
      onEnter:  { state:      'onEnterState'       },
      onLeave:  { state:      'onLeaveState'       },
      on:       { transition: 'onTransition'       }
    };
  },

  configureInitTransition: function(init) {
    if (typeof init === 'string') {
      return this.mapTransition(mixin({}, this.defaults.init, { to: init, active: true }));
    }
    else if (typeof init === 'object') {
      return this.mapTransition(mixin({}, this.defaults.init, init, { active: true }));
    }
    else {
      this.addState(this.defaults.init.from);
      return this.defaults.init;
    }
  },

  configureData: function(data) {
    if (typeof data === 'function')
      return data;
    else if (typeof data === 'object')
      return function() { return data; }
    else
      return function() { return {};  }
  },

  configureMethods: function(methods) {
    return methods || {};
  },

  configurePlugins: function(plugins, builtin) {
    plugins = plugins || [];
    var n, max, plugin;
    for(n = 0, max = plugins.length ; n < max ; n++) {
      plugin = plugins[n];
      if (typeof plugin === 'function')
        plugins[n] = plugin = plugin()
      if (plugin.configure)
        plugin.configure(this);
    }
    return plugins
  },

  configureTransitions: function(transitions) {
    var i, n, transition, from, to, wildcard = this.defaults.wildcard;
    for(n = 0 ; n < transitions.length ; n++) {
      transition = transitions[n];
      from  = Array.isArray(transition.from) ? transition.from : [transition.from || wildcard]
      to    = transition.to || wildcard;
      for(i = 0 ; i < from.length ; i++) {
        this.mapTransition({ name: transition.name, from: from[i], to: to });
      }
    }
  },

  transitionFor: function(state, transition) {
    var wildcard = this.defaults.wildcard;
    return this.map[state][transition] ||
           this.map[wildcard][transition];
  },

  transitionsFor: function(state) {
    var wildcard = this.defaults.wildcard;
    return Object.keys(this.map[state]).concat(Object.keys(this.map[wildcard]));
  },

  allStates: function() {
    return this.states;
  },

  allTransitions: function() {
    return this.transitions;
  }

});

//-------------------------------------------------------------------------------------------------

module.exports = Config;

//-------------------------------------------------------------------------------------------------


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var mixin      = __webpack_require__(0),
    Exception  = __webpack_require__(6),
    plugin     = __webpack_require__(1),
    UNOBSERVED = [ null, [] ];

//-------------------------------------------------------------------------------------------------

function JSM(context, config) {
  this.context   = context;
  this.config    = config;
  this.state     = config.init.from;
  this.observers = [context];
}

//-------------------------------------------------------------------------------------------------

mixin(JSM.prototype, {

  init: function(args) {
    mixin(this.context, this.config.data.apply(this.context, args));
    plugin.hook(this, 'init');
    if (this.config.init.active)
      return this.fire(this.config.init.name, []);
  },

  is: function(state) {
    return Array.isArray(state) ? (state.indexOf(this.state) >= 0) : (this.state === state);
  },

  isPending: function() {
    return this.pending;
  },

  can: function(transition) {
    return !this.isPending() && !!this.seek(transition);
  },

  cannot: function(transition) {
    return !this.can(transition);
  },

  allStates: function() {
    return this.config.allStates();
  },

  allTransitions: function() {
    return this.config.allTransitions();
  },

  transitions: function() {
    return this.config.transitionsFor(this.state);
  },

  seek: function(transition, args) {
    var wildcard = this.config.defaults.wildcard,
        entry    = this.config.transitionFor(this.state, transition),
        to       = entry && entry.to;
    if (typeof to === 'function')
      return to.apply(this.context, args);
    else if (to === wildcard)
      return this.state
    else
      return to
  },

  fire: function(transition, args) {
    return this.transit(transition, this.state, this.seek(transition, args), args);
  },

  transit: function(transition, from, to, args) {

    var lifecycle = this.config.lifecycle,
        changed   = this.config.options.observeUnchangedState || (from !== to);

    if (!to)
      return this.context.onInvalidTransition(transition, from, to);

    if (this.isPending())
      return this.context.onPendingTransition(transition, from, to);

    this.config.addState(to);  // might need to add this state if it's unknown (e.g. conditional transition or goto)

    this.beginTransit();

    args.unshift({             // this context will be passed to each lifecycle event observer
      transition: transition,
      from:       from,
      to:         to,
      fsm:        this.context
    });

    return this.observeEvents([
                this.observersForEvent(lifecycle.onBefore.transition),
                this.observersForEvent(lifecycle.onBefore[transition]),
      changed ? this.observersForEvent(lifecycle.onLeave.state) : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.onLeave[from]) : UNOBSERVED,
                this.observersForEvent(lifecycle.on.transition),
      changed ? [ 'doTransit', [ this ] ]                       : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.onEnter.state) : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.onEnter[to])   : UNOBSERVED,
      changed ? this.observersForEvent(lifecycle.on[to])        : UNOBSERVED,
                this.observersForEvent(lifecycle.onAfter.transition),
                this.observersForEvent(lifecycle.onAfter[transition]),
                this.observersForEvent(lifecycle.on[transition])
    ], args);
  },

  beginTransit: function()          { this.pending = true;                 },
  endTransit:   function(result)    { this.pending = false; return result; },
  failTransit:  function(result)    { this.pending = false; throw result;  },
  doTransit:    function(lifecycle) { this.state = lifecycle.to;           },

  observe: function(args) {
    if (args.length === 2) {
      var observer = {};
      observer[args[0]] = args[1];
      this.observers.push(observer);
    }
    else {
      this.observers.push(args[0]);
    }
  },

  observersForEvent: function(event) { // TODO: this could be cached
    var n = 0, max = this.observers.length, observer, result = [];
    for( ; n < max ; n++) {
      observer = this.observers[n];
      if (observer[event])
        result.push(observer);
    }
    return [ event, result, true ]
  },

  observeEvents: function(events, args, previousEvent, previousResult) {
    if (events.length === 0) {
      return this.endTransit(previousResult === undefined ? true : previousResult);
    }

    var event     = events[0][0],
        observers = events[0][1],
        pluggable = events[0][2];

    args[0].event = event;
    if (event && pluggable && event !== previousEvent)
      plugin.hook(this, 'lifecycle', args);

    if (observers.length === 0) {
      events.shift();
      return this.observeEvents(events, args, event, previousResult);
    }
    else {
      var observer = observers.shift(),
          result = observer[event].apply(observer, args);
      if (result && typeof result.then === 'function') {
        return result.then(this.observeEvents.bind(this, events, args, event))
                     .catch(this.failTransit.bind(this))
      }
      else if (result === false) {
        return this.endTransit(false);
      }
      else {
        return this.observeEvents(events, args, event, result);
      }
    }
  },

  onInvalidTransition: function(transition, from, to) {
    throw new Exception("transition is invalid in current state", transition, from, to, this.state);
  },

  onPendingTransition: function(transition, from, to) {
    throw new Exception("transition is invalid while previous transition is still in progress", transition, from, to, this.state);
  }

});

//-------------------------------------------------------------------------------------------------

module.exports = JSM;

//-------------------------------------------------------------------------------------------------


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//-----------------------------------------------------------------------------------------------

var mixin    = __webpack_require__(0),
    camelize = __webpack_require__(2),
    plugin   = __webpack_require__(1),
    Config   = __webpack_require__(3),
    JSM      = __webpack_require__(4);

//-----------------------------------------------------------------------------------------------

var PublicMethods = {
  is:                  function(state)       { return this._fsm.is(state)                                     },
  can:                 function(transition)  { return this._fsm.can(transition)                               },
  cannot:              function(transition)  { return this._fsm.cannot(transition)                            },
  observe:             function()            { return this._fsm.observe(arguments)                            },
  transitions:         function()            { return this._fsm.transitions()                                 },
  allTransitions:      function()            { return this._fsm.allTransitions()                              },
  allStates:           function()            { return this._fsm.allStates()                                   },
  onInvalidTransition: function(t, from, to) { return this._fsm.onInvalidTransition(t, from, to)              },
  onPendingTransition: function(t, from, to) { return this._fsm.onPendingTransition(t, from, to)              },
}

var PublicProperties = {
  state: {
    configurable: false,
    enumerable:   true,
    get: function() {
      return this._fsm.state;
    },
    set: function(state) {
      throw Error('use transitions to change state')
    }
  }
}

//-----------------------------------------------------------------------------------------------

function StateMachine(options) {
  return apply(this || {}, options);
}

function factory() {
  var cstor, options;
  if (typeof arguments[0] === 'function') {
    cstor   = arguments[0];
    options = arguments[1] || {};
  }
  else {
    cstor   = function() { this._fsm.apply(this, arguments) };
    options = arguments[0] || {};
  }
  var config = new Config(options, StateMachine);
  build(cstor.prototype, config);
  cstor.prototype._fsm.config = config; // convenience access to shared config without needing an instance
  return cstor;
}

//-------------------------------------------------------------------------------------------------

function apply(instance, options) {
  var config = new Config(options, StateMachine);
  build(instance, config);
  instance._fsm();
  return instance;
}

function build(target, config) {
  if ((typeof target !== 'object') || Array.isArray(target))
    throw Error('StateMachine can only be applied to objects');
  plugin.build(target, config);
  Object.defineProperties(target, PublicProperties);
  mixin(target, PublicMethods);
  mixin(target, config.methods);
  config.allTransitions().forEach(function(transition) {
    target[camelize(transition)] = function() {
      return this._fsm.fire(transition, [].slice.call(arguments))
    }
  });
  target._fsm = function() {
    this._fsm = new JSM(this, config);
    this._fsm.init(arguments);
  }
}

//-----------------------------------------------------------------------------------------------

StateMachine.version  = '3.0.1';
StateMachine.factory  = factory;
StateMachine.apply    = apply;
StateMachine.defaults = {
  wildcard: '*',
  init: {
    name: 'init',
    from: 'none'
  }
}

//===============================================================================================

module.exports = StateMachine;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(message, transition, from, to, current) {
  this.message    = message;
  this.transition = transition;
  this.from       = from;
  this.to         = to;
  this.current    = current;
}


/***/ })
/******/ ]);
});

/***/ }),

/***/ "uoCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vue-qrcode v1.0.0
 * https://fengyuanchen.github.io/vue-qrcode
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-10-21T13:04:02.951Z
 */

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var qrcode = createCommonjsModule(function (module, exports) {
(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = require('./utils').getSymbolSize;

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2;
  var size = getSymbolSize(version);
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
  var positions = [size - 7]; // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals;
  }

  positions.push(6); // First coord is always 6

  return positions.reverse()
};

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = [];
  var pos = exports.getRowColCoords(version);
  var posLength = pos.length;

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]]);
    }
  }

  return coords
};

},{"./utils":20}],2:[function(require,module,exports){
var Mode = require('./mode');

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
];

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC;
  this.data = data;
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
};

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
};

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
};

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};

module.exports = AlphanumericData;

},{"./mode":13}],3:[function(require,module,exports){
function BitBuffer () {
  this.buffer = [];
  this.length = 0;
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8);
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1);
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
    }

    this.length++;
  }
};

module.exports = BitBuffer;

},{}],4:[function(require,module,exports){
var Buffer = require('../utils/buffer');

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size;
  this.data = new Buffer(size * size);
  this.data.fill(0);
  this.reservedBit = new Buffer(size * size);
  this.reservedBit.fill(0);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
};

module.exports = BitMatrix;

},{"../utils/buffer":27}],5:[function(require,module,exports){
var Buffer = require('../utils/buffer');
var Mode = require('./mode');

function ByteData (data) {
  this.mode = Mode.BYTE;
  this.data = new Buffer(data);
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
};

ByteData.prototype.getLength = function getLength () {
  return this.data.length
};

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
};

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};

module.exports = ByteData;

},{"../utils/buffer":27,"./mode":13}],6:[function(require,module,exports){
var ECLevel = require('./error-correction-level');

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
];

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

},{"./error-correction-level":7}],7:[function(require,module,exports){
exports.L = { bit: 1 };
exports.M = { bit: 0 };
exports.Q = { bit: 3 };
exports.H = { bit: 2 };

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase();

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
};

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
};

},{}],8:[function(require,module,exports){
var getSymbolSize = require('./utils').getSymbolSize;
var FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version);

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
};

},{"./utils":20}],9:[function(require,module,exports){
var Utils = require('./utils');

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
var G15_BCH = Utils.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask);
  var d = data << 10;

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH));
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
};

},{"./utils":20}],10:[function(require,module,exports){
var Buffer = require('../utils/buffer');

var EXP_TABLE = new Buffer(512);
var LOG_TABLE = new Buffer(256)

/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1;
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;

    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
}());

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
};

},{"../utils/buffer":27}],11:[function(require,module,exports){
var Mode = require('./mode');
var Utils = require('./utils');

function KanjiData (data) {
  this.mode = Mode.KANJI;
  this.data = data;
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
};

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
};

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
};

KanjiData.prototype.write = function (bitBuffer) {
  var i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};

module.exports = KanjiData;

},{"./mode":13,"./utils":20}],12:[function(require,module,exports){
/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
};

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
};

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
};

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size;
  var points = 0;
  var sameCountCol = 0;
  var sameCountRow = 0;
  var lastCol = null;
  var lastRow = null;

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0;
    lastCol = lastRow = null;

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col);
      if (module === lastCol) {
        sameCountCol++;
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        lastCol = module;
        sameCountCol = 1;
      }

      module = data.get(col, row);
      if (module === lastRow) {
        sameCountRow++;
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        lastRow = module;
        sameCountRow = 1;
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
  }

  return points
};

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size;
  var points = 0;

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1);

      if (last === 4 || last === 0) points++;
    }
  }

  return points * PenaltyScores.N2
};

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size;
  var points = 0;
  var bitsCol = 0;
  var bitsRow = 0;

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0;
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
    }
  }

  return points * PenaltyScores.N3
};

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0;
  var modulesCount = data.data.length;

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i];

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);

  return k * PenaltyScores.N4
};

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size;

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col));
    }
  }
};

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length;
  var bestPattern = 0;
  var lowerPenalty = Infinity;

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p);
    exports.applyMask(p, data);

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data);

    // Undo previously applied mask
    exports.applyMask(p, data);

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty;
      bestPattern = p;
    }
  }

  return bestPattern
};

},{}],13:[function(require,module,exports){
var VersionCheck = require('./version-check');
var Regex = require('./regex');

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
};

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
};

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
};

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
};

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
};

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
};

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
};

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
};

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
};

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase();

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
};

},{"./regex":18,"./version-check":21}],14:[function(require,module,exports){
var Mode = require('./mode');

function NumericData (data) {
  this.mode = Mode.NUMERIC;
  this.data = data.toString();
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
};

NumericData.prototype.getLength = function getLength () {
  return this.data.length
};

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
};

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);

    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);

    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};

module.exports = NumericData;

},{"./mode":13}],15:[function(require,module,exports){
var Buffer = require('../utils/buffer');
var GF = require('./galois-field');

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1);
  coeff.fill(0);

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    }
  }

  return coeff
};

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident);

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0];

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff);
    }

    // remove all zeros from buffer head
    var offset = 0;
    while (offset < result.length && result[offset] === 0) offset++;
    result = result.slice(offset);
  }

  return result
};

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1]);
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)]);
  }

  return poly
};

},{"../utils/buffer":27,"./galois-field":10}],16:[function(require,module,exports){
var Buffer = require('../utils/buffer');
var Utils = require('./utils');
var ECLevel = require('./error-correction-level');
var BitBuffer = require('./bit-buffer');
var BitMatrix = require('./bit-matrix');
var AlignmentPattern = require('./alignment-pattern');
var FinderPattern = require('./finder-pattern');
var MaskPattern = require('./mask-pattern');
var ECCode = require('./error-correction-code');
var ReedSolomonEncoder = require('./reed-solomon-encoder');
var Version = require('./version');
var FormatInfo = require('./format-info');
var Mode = require('./mode');
var Segments = require('./segments');
var isArray = require('isarray');

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size;
  var pos = FinderPattern.getPositions(version);

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0];
    var col = pos[i][1];

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size;

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version);

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0];
    var col = pos[i][1];

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size;
  var bits = Version.getEncodedBits(version);
  var row, col, mod;

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = ((bits >> i) & 1) === 1;

    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size;
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  var i, mod;

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size;
  var inc = -1;
  var row = size - 1;
  var bitIndex = 7;
  var byteIndex = 0;

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false;

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
          }

          matrix.set(row, col - c, dark);
          bitIndex--;

          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer();

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version);
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks;
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount);

  var offset = 0;
  var dcData = new Array(ecTotalBlocks);
  var ecData = new Array(ecTotalBlocks);
  var maxDataSize = 0;
  var buffer = new Buffer(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);

    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords);
  var index = 0;
  var i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  var segments;

  if (isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    var estimatedVersion = version;

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version);
  var modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);

  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M;
  var version;
  var mask;

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc);
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
};

},{"../utils/buffer":27,"./alignment-pattern":1,"./bit-buffer":3,"./bit-matrix":4,"./error-correction-code":6,"./error-correction-level":7,"./finder-pattern":8,"./format-info":9,"./mask-pattern":12,"./mode":13,"./reed-solomon-encoder":17,"./segments":19,"./utils":20,"./version":22,"isarray":30}],17:[function(require,module,exports){
var Buffer = require('../utils/buffer');
var Polynomial = require('./polynomial');

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined;
  this.degree = degree;

  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree);
  pad.fill(0);
  var paddedData = Buffer.concat([data, pad], data.length + this.degree);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length;
  if (start > 0) {
    var buff = new Buffer(this.degree);
    buff.fill(0);
    remainder.copy(buff, start);

    return buff
  }

  return remainder
};

module.exports = ReedSolomonEncoder;

},{"../utils/buffer":27,"./polynomial":15}],18:[function(require,module,exports){
var numeric = '[0-9]+';
var alphanumeric = '[A-Z $%*+\\-./:]+';
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');

var TEST_KANJI = new RegExp('^' + kanji + '$');
var TEST_NUMERIC = new RegExp('^' + numeric + '$');
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
};

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
};

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
};

},{}],19:[function(require,module,exports){
var Mode = require('./mode');
var NumericData = require('./numeric-data');
var AlphanumericData = require('./alphanumeric-data');
var ByteData = require('./byte-data');
var KanjiData = require('./kanji-data');
var Regex = require('./regex');
var Utils = require('./utils');
var dijkstra = require('dijkstrajs');

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = [];
  var result;

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    });
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
  var byteSegs;
  var kanjiSegs;

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
    kanjiSegs = [];
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data;
      return acc
    }

    acc.push(curr);
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = [];
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ]);
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ]);
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ]);
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ]);
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {};
  var graph = {'start': {}};
  var prevNodeIds = ['start'];

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i];
    var currentNodeIds = [];

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j];
      var key = '' + i + j;

      currentNodeIds.push(key);
      table[key] = { node: node, lastCount: 0 };
      graph[key] = {};

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n];

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);

          table[prevNodeId].lastCount += node.length;
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds;
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0;
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode;
  var bestMode = Mode.getBestModeForData(data);

  mode = Mode.from(modesHint, bestMode);

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE;
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null));
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode));
    }

    return acc
  }, [])
};

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());

  var nodes = buildNodes(segs);
  var graph = buildGraph(nodes, version);
  var path = dijkstra.find_path(graph.map, 'start', 'end');

  var optimizedSegs = [];
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node);
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
};

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
};

},{"./alphanumeric-data":2,"./byte-data":5,"./kanji-data":11,"./mode":13,"./numeric-data":14,"./regex":18,"./utils":20,"dijkstrajs":29}],20:[function(require,module,exports){
var toSJISFunction;
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0;

  while (data !== 0) {
    digit++;
    data >>>= 1;
  }

  return digit
};

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f;
};

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
};

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
};

},{}],21:[function(require,module,exports){
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
};

},{}],22:[function(require,module,exports){
var Utils = require('./utils');
var ECCode = require('./error-correction-code');
var ECLevel = require('./error-correction-level');
var Mode = require('./mode');
var VersionCheck = require('./version-check');
var isArray = require('isarray');

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
var G18_BCH = Utils.getBCHDigit(G18);

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0;

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version);
    totalBits += reservedBits + data.getBitsLength();
  });

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion);
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
};

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE;

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
};

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg;

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0];
  } else {
    seg = data;
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
};

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12;

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH));
  }

  return (version << 12) | d
};

},{"./error-correction-code":6,"./error-correction-level":7,"./mode":13,"./utils":20,"./version-check":21,"isarray":30}],23:[function(require,module,exports){
var canPromise = require('can-promise');
var QRCode = require('./core/qrcode');
var CanvasRenderer = require('./renderer/canvas');
var SvgRenderer = require('./renderer/svg-tag.js');

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1);
  var argsNum = args.length;
  var isLastArgCb = typeof args[argsNum - 1] === 'function';

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    })
  }

  try {
    var data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}

exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
});

},{"./core/qrcode":16,"./renderer/canvas":24,"./renderer/svg-tag.js":25,"can-promise":28}],24:[function(require,module,exports){
var Utils = require('./utils');

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = size + 'px';
  canvas.style.width = size + 'px';
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options;
  var canvasEl = canvas;

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!canvas) {
    canvasEl = getCanvasElement();
  }

  opts = Utils.getOptions(opts);
  var size = Utils.getImageWidth(qrData.modules.size, opts);

  var ctx = canvasEl.getContext('2d');
  var image = ctx.createImageData(size, size);
  Utils.qrToImageData(image.data, qrData, opts);

  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);

  return canvasEl
};

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options;

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!opts) opts = {};

  var canvasEl = exports.render(qrData, canvas, opts);

  var type = opts.type || 'image/png';
  var rendererOpts = opts.rendererOpts || {};

  return canvasEl.toDataURL(type, rendererOpts.quality)
};

},{"./utils":26}],25:[function(require,module,exports){
var Utils = require('./utils');

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255;
  var str = attrib + '="' + color.hex + '"';

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;

  return str
}

function qrToPath (data, size, margin) {
  var path = '';
  var moveBy = 0;
  var newRow = false;
  var lineLength = 0;

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size);
    var row = Math.floor(i / size);

    if (!col && !newRow) newRow = true;

    if (data[i]) {
      lineLength++;

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0);

        moveBy = 0;
        newRow = false;
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  var opts = Utils.getOptions(options);
  var size = qrData.modules.size;
  var data = qrData.modules.data;
  var qrcodesize = size + opts.margin * 2;

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>';

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

  if (typeof cb === 'function') {
    cb(null, svgTag);
  }

  return svgTag
};

},{"./utils":26}],26:[function(require,module,exports){
function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('');
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }));
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F');

  var hexValue = parseInt(hexCode.join(''), 16);

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {};
  if (!options.color) options.color = {};

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin;

  var width = options.width && options.width >= 21 ? options.width : undefined;
  var scale = options.scale || 4;

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
};

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
};

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale)
};

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size;
  var data = qr.modules.data;
  var scale = exports.getScale(size, opts);
  var symbolSize = Math.floor((size + opts.margin * 2) * scale);
  var scaledMargin = opts.margin * scale;
  var palette = [opts.color.light, opts.color.dark];

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4;
      var pxColor = opts.color.light;

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale);
        var jSrc = Math.floor((j - scaledMargin) / scale);
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
      }

      imgData[posDst++] = pxColor.r;
      imgData[posDst++] = pxColor.g;
      imgData[posDst++] = pxColor.b;
      imgData[posDst] = pxColor.a;
    }
  }
};

},{}],27:[function(require,module,exports){

var isArray = require('isarray');

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }};
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff;

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    });
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length);
    buf.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that;
    if (buf === null) {
      buf = new Buffer(length);
    }
    buf.length = length;
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0;
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0;
  var buf = createBuffer(that, length);

  var actual = buf.write(string);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf);
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(that, len);

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len);
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, offset)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
    } else {
      length = undefined;
    }
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
};

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val);
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = allocUnsafe(null, length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

Buffer.byteLength = byteLength;

Buffer.prototype._isBuffer = true;
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
};

module.exports = Buffer;

},{"isarray":30}],28:[function(require,module,exports){

var G = require('window-or-global');

module.exports = function() {
  return (
    typeof G.Promise === 'function' &&
    typeof G.Promise.prototype.then === 'function'
  )
};

},{"window-or-global":31}],29:[function(require,module,exports){

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (typeof module !== 'undefined') {
  module.exports = dijkstra;
}

},{}],30:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],31:[function(require,module,exports){
(function (global){
module.exports = (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this;

}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

},{}]},{},[23])(23)
});


});

var index = {
  name: 'qrcode',
  props: {
    /**
     * The options for the QR code generator.
     * {@link https://github.com/soldair/node-qrcode#qr-code-options}
     */
    options: Object,

    /**
     * The tag name of the component's root element.
     */
    tag: {
      type: String,
      default: 'canvas'
    },

    /**
     * The value of the QR code.
     */
    value: null
  },
  render: function render(createElement) {
    return createElement(this.tag, this.$slots.default);
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler: function handler() {
        if (this.$el) {
          this.generate();
        }
      }
    }
  },
  methods: {
    /**
     * Generate QR code.
     */
    generate: function generate() {
      var _this = this;

      var options = this.options,
          tag = this.tag;
      var value = String(this.value);

      if (tag === 'canvas') {
        qrcode.toCanvas(this.$el, value, options, function (error) {
          if (error) {
            throw error;
          }
        });
      } else if (tag === 'img') {
        qrcode.toDataURL(value, options, function (error, url) {
          if (error) {
            throw error;
          }

          _this.$el.src = url;
        });
      } else {
        qrcode.toString(value, options, function (error, string) {
          if (error) {
            throw error;
          }

          _this.$el.innerHTML = string;
        });
      }
    }
  },
  mounted: function mounted() {
    this.generate();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("DuR2")))

/***/ }),

/***/ "zZZt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=3.861590b630b8f61dd805.js.map