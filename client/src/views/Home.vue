<template>
  <div class="home">
    <NavBar />
    <!-- Main header -->
    <div class="escape-gutters overflow-hidden" style="height:25rem; position:relative;">
      <img
        style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);height:100%;"
        src="~assets/undraw_big_phone.svg"
        alt="a big phone that every comes together on"
      />
    </div>
    <div class="container py-1">
      <div class="jumbotron text-center bg-transparent mb-0 pb-2 pt-1">
        <h1 class="font-weight-bold">
          Play Games Together
          <br />Anywhere You Are
        </h1>
        <p class="lead">
          With access to dozens of games you can play when you’re sitting on the couch, on the road, or waiting in line with your family and friends.
          Stop staring at your phones silently and play together.
          With virtually unlimited players per game, it’s fun for everyone.
        </p>
        <br />
        <div class="btn-group btn-block" role="group" aria-label="Basic example" v-if="games_ready">
          <router-link class="btn btn-primary btn-lg" to="/host" role="button">Host a Game</router-link>
          <router-link class="btn btn-success btn-lg" to="/join" role="button">Join a Game</router-link>
        </div>
        <div v-else class="jumbotron">
          <h3>Get started!</h3>
          <button class="btn btn-info btn-xl btn-block" role="button" data-toggle="modal" data-target="#newsletter_modal">Play a Game</button>
          <div class="modal fade" id="newsletter_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">We're not ready</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h3>
                    PadGames isn't quite ready yet.
                    <br/><small>Want to be the first to hear about it?</small>
                  </h3>
                  <div> Sign up for our newsletter to get updates and submit feedback!</div>
                  <NewsLetter :showText="false" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <!-- Games that get your friends and family talking -->
    <div class="bg-primary escape-gutters text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-lg-4 col-sm-12 order-2 order-md-1">
            <img
              src="~assets/undraw_family_couch.svg"
              class="img-fluid img-center"
              alt="family playing together"
            />
          </div>
          <div class="col-md-7 col-lg-8 col-sm-12 order-1 order-md-2">
            <br class />
            <p class="lead font-weight-bold">Games that get your family or friends talking</p>
            <p>Most games work with a central tablet or two that everyone can see and then their phones act as controllers. Some games only require one phone per team.</p>
            <p>Games are flexible for your situation and some can be played with just phones or just the tablet in the middle.</p>
            <p>Since it is hosted on the internet, people can join from anywhere! You’ll need to be able to communicate with your teammates, so a phone call, discord, or being in person is recommended.</p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <!-- Game choices -->
    <div class="container-fluid" style="overflow:hidden">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-4 col-lg-6 col-sm-12">
            <h2 class="font-weight-bold">A wide choice of games</h2>
          </div>
          <div
            class="col-md-8 col-lg-6 col-sm-12 text-muted"
          >Ever been sitting around with your family or friends in the room, all on your phones, not talking? Padgames is designed to help you communicate and have fun together.</div>
        </div>
        <br />
        <div class="row" style="position:relative">
          <div class="side-button align-middle position-absolute">
            <router-link tag="span" class="fa-stack fa-2x" to="/games" style="vertical-align: top;">
              <i class="far fa-circle fa-stack-2x hidden"></i>
              <i class="fas fa-arrow-right fa-stack-1x"></i>
            </router-link>
          </div>
          <!-- TODO move all this into CSS classes -->
          <!-- TODO make this a component? -->
          <div v-for="game in games" :key="game.name" class="col-sm-3 col-xs-6 p-1">
            <router-link
              tag="div"
              class="rounded p-2 game-logo"
              :to="game.url"
              v-bind:style="{ backgroundColor: game.color}"
            >
              <img :src="game.logo" alt="game logo" class="game-logo" />
              <span class="text-white">{{game.name}}</span>
            </router-link>
          </div>
        </div>
        <router-link to="/games">
          See more games or suggest a game yourself
          <i class="fas fa-arrow-right"></i>
        </router-link>
        <br />
      </div>
    </div>
    <div class="bg-dark escape-gutters py-5">
      <div class="container">
        <h3>Watch a family play padgames!</h3>
      </div>
    </div>
    <!-- cost -->
    <!-- TODO rework this section -->
    <div class="bg-secondary escape-gutters py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-sm-12 text-center">
            <h2>What does it cost?</h2>
            <h2 class="font-weight-bold">
              <span class="text-success">Free</span> to join
            </h2>
            <h2 class="font-weight-bold">
              <span class="text-success">Free</span> to host
              <span class="small">(For now)</span>
            </h2>
            <br />
            <p>
              Joining games will always be free.
              <router-link to="/pricing">See how pricing works</router-link>
            </p>
            <p class="secondary-text">
              The prices are really low just to keep the lights on.
              If you love padgames,
              <a
                href="/donate"
              >consider donating!</a>
            </p>
          </div>
          <div class="col-md-6 col-sm-12">
            <img
              src="~assets/undraw_make_it_rain.svg"
              class="img-fluid img-center"
              alt="family playing together"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ -->
    <div class="bg-info escape-gutters py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3 col-sm-12">
            <!--div class="faq_q">
              <div class="lead">Why not, you know, make it free?</div>
              <p>
                Well, I origionally did. I don't think anybody besides my family and friends ever played.
                But if I wanted to start advertising and creating new games, I would probably need to charge.
                If you want to buy me a bagel, feel free to donate
                <a
                  href="https://ko-fi.com/padgames"
                >here</a>. I would be very grateful.
              </p>
            </div-->
            <div class="faq_q">
              <div class="lead">How many players can be in a game?</div>
              <p>Unlimited though some games might get a little weird. Games here have two rules: they have to allow for unlimited players and they have to use two devices (like two phones or a tablet and a phone).</p>
            </div>
            <div class="faq_q">
              <div class="lead">Will I have my games forever?</div>
              <p>In the sad event that padgames has to close it's doors, all code will be uploaded to Github so you can host your own!</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <h1>
              <i class="fas fa-comments fa-3x"></i>FAQ
            </h1>
            <div class="faq_q">
              <div class="lead">Why did you start padgames?</div>
              <p>
                I was sitting around one christmas with my family and we were all on our phones in the same room.
                A few people asked if we could play some board games but no one was willing to setup the new board games we had just gotten.
                I wished that there was a way we could play our new games from our phones without having to setup the game.
                I happened to have my laptop nearby and started coding up a small web version.
              </p>
            </div>
            <!--div class="faq_q">
              <div class="lead">Why charge money?</div>
              <p>
                Servers don't grow on trees sadly (though a server farm of trees sounds awesome).
                The cost is to help pay for servers and to encourage me to develop more games!
              </p>
            </div-->
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="faq_q">
              <div class="lead">What parts of padgames are opensource?</div>
              <p>
                The main pages, the game engine itself, and other parts are open source.
                Check it out
                <a
                  href="/github"
                >on github!</a>
                The only closed source part of padgames is the actual games themselves.
              </p>
            </div>
            <div class="faq_q">
              <div class="lead">What sort of data do you collect?</div>
              <p>
                I'm happy to report that I'm 100% GDPR compliant because I collect no PII (Personally identifying information).
                I do technically collect enough information to make user accounts (to keep track of who has paid and whatnot) and aggregated statistics about games played.
                To see more information about what is collected see
                <router-link to="privacy">the privacy page</router-link>
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <!--div class="faq_q">
              <div class="lead">What does it mean to pay $1 to host games?</div>
              <p>
                To be to host a game for friends or strangers if you swing that way, you need to pay $1.
                Once you've paid for this, you will be host as many games with as many players are you want!
              </p>
            </div-->
            <div class="faq_q">
              <div class="lead">I found a bug or have an idea!</div>
              <router-link to="/contact">Contact us</router-link>or open a
              <a href="/issues">github issue</a>
              I'd love to hear from you.
              Alternatively, if you have a fully formed game that you want on the padgames platforms (I will need to vet the quality of the code), you can submit a PR to padgames. Your game will be free as I don't want to charge for other's work.
            </div>
            <div class="faq_q">
              <div class="lead">There's no ads?</div>
              <p>Nope. I hate ads. My goal is never to have any ads.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer show-newsletter="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "../components/NavBar.vue"; // @ is an alias to /src
import Footer from "../components/Footer.vue";
import NewsLetter from "../components/NewsLetter.vue";
import { AllGames } from "../routes.dynamic";

@Component({
  components: {
    NavBar,
    Footer,
    NewsLetter
  }
})
export default class Home extends Vue {
  games_ready = false;

  get games() {
    return AllGames.slice(0, 4); //create a copy of the first four games
  }
}
</script>

<style scoped lang="css">
.game-logo {
  min-height: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.game-logo > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}
.game-logo > span {
  position: absolute;
  bottom: 0;
  font-size: 1.5em;
}
* > .side-button {
  position: relative;
}
.side-button {
  position: absolute;
  right: 0;
  transform: translateX(100%) translateY(-50%);
  top: 50%;
  cursor:pointer;
}
.side-button .hidden {
  opacity: 0;
  transition: opacity 0.2s;
}
.side-button:hover .hidden {
  opacity: 1;
}
</style>