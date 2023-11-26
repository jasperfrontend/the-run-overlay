<template>
  <div class="container">
    
    <span v-show="posts && posts.self_test === true">
      <div class="winner self-test-kek">
        <img src="https://host.run.city/wp-content/uploads/2023/11/testing-test.gif" alt="">
      </div>
    </span>

    <span v-show="posts && posts.player_1_winner === true">
      <div class="winner winner_p1">
        <div class="overlay">
          <div class="text">            
              <div class="name" v-if="posts && posts.player_1_name">{{ posts && posts.player_1_name }}</div>
              <div class="name" v-else>Player 1</div>            
              <div class="body">
                is the winner!
              </div> <!-- .body -->            
          </div> <!-- .text -->
        </div> <!-- .overlay -->
      </div> <!-- .winner -->
    </span>

    <span v-show="posts && posts.player_2_winner === true">
      <div class="winner winner_p2">
        <div class="overlay">
          <div class="text">
            <div class="name" v-if="posts && posts.player_2_name">{{ posts && posts.player_2_name }}</div>
            <div class="name" v-else>Player 2</div>
            <div class="body">
              is the winner!
            </div> <!-- .body -->
          </div> <!-- .text -->
        </div> <!-- .overlay -->
      </div> <!-- .winner -->
    </span>

    <span v-show="posts && posts.player_1_winner || posts && posts.player_2_winner">
      <div class="fireworks">
        <video autoplay muted loop>
          <source src="https://host.run.city/wp-content/uploads/2023/11/twinkle.webm" type="video/webm">
        </video>
      </div>
    </span>

    <div class="bar">

      <div class="bar-top">

        <div class="col col-player-name col-player-one">
          <h2 v-if="posts && posts.player_1_name" :class="['heading-name', selfTestEnabled]">{{ posts && posts.player_1_name }}</h2>
        </div>

        <div class="col col-hints">
        </div>

        <div class="col col-player-name col-player-two">
          <h2 v-if="posts && posts.player_2_name" :class="['heading-name', selfTestEnabled]">{{ posts && posts.player_2_name }}</h2>
        </div>

      </div> <!-- .bar-top -->

      <div class="bar-bottom">
        <div class="flex row col col-player-icons col-player-one-icons">
          <div class="flex row justify-content-space-between player-one-gates">

            <div class="gate gate-1">
              <img :class="['icon lock', (posts && posts.gates_p2.gate_1_player_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/Assets/P1/G1-P1 LOCK.png" width="60" height="60" alt="G1">
              <img :class="['icon', (posts && posts.gates_p1.gate_1_player_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Gates/G1.svg" width="60" height="60" alt="G1">
            </div> 

            <div class="gate gate-2">
              <img :class="['icon lock', (posts && posts.gates_p2.gate_2_player_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/Assets/P1/G1-P1 LOCK.png" width="60" height="60" alt="G1">
              <img :class="['icon', (posts && posts.gates_p1.gate_2_player_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Gates/G2.svg" width="60" height="60" alt="G2">
            </div>

            <div class="gate gate-3">
              <img :class="['icon lock', (posts && posts.gates_p2.gate_3_player_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/Assets/P1/G1-P1 LOCK.png" width="60" height="60" alt="G1">
              <img :class="['icon', (posts && posts.gates_p1.gate_3_player_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Gates/G3.svg" width="60" height="60" alt="G3">
            </div>
          </div>

          <div class="flex row justify-content-space-between player-one landmarks">
            <div class="landmark landmark-1">
              <img :class="['icon', (posts && posts.lm_p1.landmark_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Landmarks/LM1.svg" width="60" height="60" alt="LM1">
            </div>

            <div class="landmark landmark-2">
              <img :class="['icon', (posts && posts.lm_p1.landmark_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Landmarks/LM2.svg" width="60" height="60" alt="LM2">
            </div>

            <div class="landmark landmark-3">
              <img :class="['icon', (posts && posts.lm_p1.landmark_3 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Landmarks/LM3.svg" width="60" height="60" alt="LM3">
            </div>

          </div>

        </div> <!-- .col-player-one-icons -->

        <div :class="['hint', selfTestEnabled]" class="flex row justify-content-space-between col col-gates">
          <p v-if="posts && posts.hint && posts && posts.self_test === false">{{ posts && posts.hint }}</p>
          <p v-if="posts && posts.self_test === true">Running self-test. Hold tight, don't adjust your screen!</p>
        </div>

        <div class="flex row col col-player-icons col-player-two-icons">
          <div class="flex row justify-content-space-between player-two landmarks">

            <div class="landmark-6">
              <img :class="['icon', (posts && posts.lm_p2.landmark_6 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Landmarks/LM6.svg" width="60" height="60" alt="LM6">
            </div>

            <div class="landmark-5">
              <img :class="['icon', (posts && posts.lm_p2.landmark_5 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Landmarks/LM5.svg" width="60" height="60" alt="LM5">
            </div>

            <div class="landmark-4">
              <img :class="['icon', (posts && posts.lm_p2.landmark_4 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Landmarks/LM4.svg" width="60" height="60" alt="LM4">
            </div>

          </div>

          <div class="flex row justify-content-space-between player-two-gates">

            <div class="gate gate-3">
              <img :class="['icon lock', (posts && posts.gates_p1.gate_3_player_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/Assets/P1/G1-P1 LOCK.png" width="60" height="60" alt="G1">
              <img :class="['icon', (posts && posts.gates_p2.gate_3_player_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Gates/G3.svg" width="60" height="60" alt="G3">
            </div>

            <div class="gate gate-2">
              <img :class="['icon lock', (posts && posts.gates_p1.gate_2_player_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/Assets/P1/G1-P1 LOCK.png" width="60" height="60" alt="G1">
              <img :class="['icon', (posts && posts.gates_p2.gate_2_player_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Gates/G2.svg" width="60" height="60" alt="G2">
            </div>

            <div class="gate gate-1">
              <img :class="['icon lock', (posts && posts.gates_p1.gate_1_player_1 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/Assets/P1/G1-P1 LOCK.png" width="60" height="60" alt="G1">
              <img :class="['icon', (posts && posts.gates_p2.gate_1_player_2 ? '' : 'disabled'), selfTestEnabled]" 
              src="../assets/SVG/Gates/G1.svg" width="60" height="60" alt="G1">
            </div> 

          </div>
        </div> <!-- .col-player-two-icons -->
      </div> <!-- bar.bottom -->
    </div> <!-- .bar -->
  </div> <!-- .container -->
</template>

<script>
export default {
  data() {
    return {
      posts: null,
    };
  },
  created() {
    this.fetchWordPressData();
    setInterval(this.fetchWordPressData, 6000);
  },
  methods: {
    async fetchWordPressData() {
      const wpData = await fetch("https://host.run.city/wp-json/wp/v2/pages/2");
      let retrieved = await wpData.json();
      this.posts = retrieved.acf;
    },
  },
  computed: {
    selfTestEnabled() {
      return (this.posts && (this.posts.self_test === true) ? 'self-test-enabled' : 'self-test-disabled');
    }
  }
};
</script>

<style scoped>

.self-test-enabled {
	-webkit-animation: blink-2 0.9s infinite both;
	        animation: blink-2 0.9s infinite both;
}
/* ----------------------------------------------
 * Generated by Animista on 2023-11-25 0:0:18
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation blink-2
 * ----------------------------------------
 */
 @-webkit-keyframes blink-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

</style>