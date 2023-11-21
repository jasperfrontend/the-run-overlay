<template>
  <div class="container">

    <div v-if="posts.acf.player_1_winner" class="winner winner_p1">
      <div class="overlay">
        <div class="text">
          <div class="name">{{ posts.acf.player_1_name }}</div>
          <div class="avatar"></div>
          <div class="body">
            is the winner!
          </div> <!-- .body -->
        </div> <!-- .text -->
        <div class="fireworks"></div>
      </div> <!-- .overlay -->
    </div> <!-- .winner -->
    
    <div v-if="posts.acf.player_2_winner" class="winner winner_p1">
      <div class="overlay">
        <div class="text">
          <div class="name">{{ posts.acf.player_2_name }}</div>
          <div class="avatar"></div>
          <div class="body">
            is the winner!
          </div> <!-- .body -->
        </div> <!-- .text -->
        <div class="fireworks"></div>
      </div> <!-- .overlay -->
    </div> <!-- .winner -->

    <div class="bar">
      <div class="bar-top">
        <div class="col col-player-name col-player-one">
          <h2 v-if="posts.acf.player_1_name">{{ posts.acf.player_1_name }}</h2>
          <h2 v-else="posts.acf.player_1_name">Loading name&hellip;</h2>
        </div>
        <div class="col col-hints">
          <p>{{ posts.acf.hint }}</p>
        </div>
        <div class="col col-player-name col-player-two">
          <h2 v-if="posts.acf.player_2_name">{{ posts.acf.player_2_name }}</h2>
          <h2 v-else="posts.acf.player_2_name">Loading name&hellip;</h2>
        </div>
      </div> <!-- .bar-top -->
        <div class="bar-bottom">
          <div class="flex row col col-player-icons col-player-one-icons">
            <div class="flex row justify-content-space-between player-one-gates">
              <div class="gate gate-1">
                <Transition>
                  <img :class="posts.acf.gates_p1.gate_1_player_1 ? 'icon' : 'icon disabled'" src="./assets/Gates/G1.png" alt="G1">
                </Transition>
              </div>
              <div class="gate gate-2">
                <Transition>
                  <img :class="posts.acf.gates_p1.gate_2_player_1 ? 'icon' : 'icon disabled'" src="./assets/Gates/G2.png" alt="G2">
                </Transition>
              </div>
              <div class="gate gate-3">
                <Transition>
                  <img :class="posts.acf.gates_p1.gate_3_player_1 ? 'icon' : 'icon disabled'" src="./assets/Gates/G3.png" alt="G3">
                </Transition>
              </div>
            </div>
            <div class="flex row justify-content-space-between player-one landmarks">
              <div class="landmark landmark-1">
                <Transition>
                  <img :class="posts.acf.lm_p1.landmark_1 ? 'icon' : 'icon disabled'" src="./assets/Landmarks/LM1.png" alt="LM1">
                </Transition>
              </div>
              <div class="landmark landmark-2">
                <Transition>
                  <img :class="posts.acf.lm_p1.landmark_2 ? 'icon' : 'icon disabled'" src="./assets/Landmarks/LM2.png" alt="LM2">
                </Transition>
              </div>
              <div class="landmark landmark-3">
                <Transition>
                  <img :class="posts.acf.lm_p1.landmark_3 ? 'icon' : 'icon disabled'" src="./assets/Landmarks/LM3.png" alt="LM3">
                </Transition>
              </div>
            </div>
          </div>
            <div class="flex row justify-content-space-between col col-gates">
            </div>
            <div class="flex row col col-player-icons col-player-two-icons">
              <div class="flex row justify-content-space-between player-two landmarks">
                <div class="landmark-6">
                  <Transition>
                    <img :class="posts.acf.lm_p2.landmark_6 ? 'icon' : 'icon disabled'" src="./assets/Landmarks/LM6.png" alt="LM6">
                  </Transition>
                </div>
                <div class="landmark-5">
                  <Transition>
                    <img :class="posts.acf.lm_p2.landmark_5 ? 'icon' : 'icon disabled'" src="./assets/Landmarks/LM5.png" alt="LM5">
                  </Transition>
                </div>
                <div class="landmark-4">
                  <Transition>
                    <img :class="posts.acf.lm_p2.landmark_4 ? 'icon' : 'icon disabled'" src="./assets/Landmarks/LM4.png" alt="LM4">
                  </Transition>
                </div>
              </div>
              <div class="flex row justify-content-space-between player-two-gates">
                <div class="gate gate-3">
                  <Transition>
                    <img :class="posts.acf.gates_p2.gate_3_player_2 ? 'icon' : 'icon disabled'" src="./assets/Gates/G3.png" alt="G3">
                  </Transition>
                </div>
                <div class="gate gate-2">
                  <Transition>
                    <img :class="posts.acf.gates_p2.gate_2_player_2 ? 'icon' : 'icon disabled'" src="./assets/Gates/G2.png" alt="G2">
                  </Transition>
                </div>
                <div class="gate gate-1">
                  <Transition>
                    <img :class="posts.acf.gates_p2.gate_1_player_2 ? 'icon' : 'icon disabled'" src="./assets/Gates/G1.png" alt="G1">
                  </Transition>
                </div>
              </div>
            </div>
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
    setInterval(this.fetchWordPressData, 10000);
  },
  methods: {
    async fetchWordPressData() {
      const response = await fetch('https://host.run.city/wp-json/wp/v2/pages/2');
      this.posts = await response.json();
    },
  },
};
</script>