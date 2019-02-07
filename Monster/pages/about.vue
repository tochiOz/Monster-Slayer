
<template>
  <section class="body container">

    <section class="title mb-2">
      <b-card 
      title="MONSTER SLAYER" 
      class="text-center"
      style="font-size: 20px;"></b-card>
    </section>

    <section class="show">
      <b-card class="p-2">
        <b-row>
          <b-col>
            <div class="showdiv">
              <div class="healthbar"
              :style="{ width: playerHealth + '%'}">
                {{ playerHealth }}
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="showdiv">
              <div class="healthbar"
              :style="{ width: monsterHealth + '%'}">
                {{ monsterHealth }}
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </section>

    <section class="start-game mt-3" v-if="!startGame">
      <b-card class="text-center p-0">
        <b-button id="start" variant="success" @click="initiateGame">Start New Game</b-button>
      </b-card>
    </section>

    <section class="btnS mt-3" v-else>
      <b-card class="text-center">
        <b-button id="attack" variant="outline-secondary" @click="attack">Attack</b-button>
        <b-button id="special-attack" variant="outline-primary" @click="specialAttack">SPECIAL ATTACK</b-button>
        <b-button id="heal" variant="outline-success" @click="heal">Heal</b-button>
        <b-button id="give-up" variant="danger" @click="giveUp">GIVE UP</b-button>
      </b-card>
    </section> 

    <section class="mt-4 " v-if="rounds.length > 0">
      <b-card class="log text-center">
        <ul>
          <li 
          v-for="round in rounds" 
          :key="round.id"
          :class="{ 'player-turn': round.isPlayer, 'monster-turn': !round.isPlayer}">
            {{ round.text }}
          </li>
        </ul>
      </b-card>
    </section>

  </section>
</template>

<script>
export default {
  data () {
    return {
        playerHealth: 80,
        monsterHealth: 60,
        startGame: false,
        rounds: []
    }
  },
  methods: {

    initiateGame () {
        this.startGame = true
        this.playerHealth = 100
        this.monsterHealth = 100
    },

    attack () {

        let kill = this.calculateRand(3, 10)
        this.monsterHealth -= kill
        this.rounds.unshift({
            isPlayer: true,
            text: 'Player Hits slightly with ' + kill + ' points'
        })

        if (this.checkWin()) {
            return
        }
        
        this.monsterAttacks()
    },

    specialAttack () {

        let kill = this.calculateRand(9, 18)
        this.monsterHealth -= kill
        this.rounds.unshift({
            isPlayer: true,
            text: 'Player Hits Hard with ' + kill + ' points'
        })
        if (this.checkWin()) {
            return
        }

        this.monsterAttacks()
    },

    heal ()  {
        let rand = 10
        if (this.playerHealth <= 90) {
            this.playerHealth += rand
            this.rounds.unshift({
            isPlayer: true,
            text: 'Player Heals by ' + rand + ' points'
            })
        }else {
            this.playerHealth = 100
        }

      this.monsterAttacks()
    },

    giveUp () {
        this.rounds = []
        this.startGame = false
    },

    calculateRand (min, max) {
        return Math.floor((Math.random()*(max+1-min))+min)
    },

    monsterAttacks () {

        let kill = this.calculateRand(5, 12)
        this.playerHealth -=kill
        this.rounds.unshift({
            isPlayer: false,
            text: 'Monster Hits slightly with ' + kill + ' points'
        })
        this.checkWin()

    },
    checkWin () {
        if (this.monsterHealth <= 0) {
            if (confirm('You Won, New Game?')) {
            this.initiateGame()
            } else {
            this.startGame = false
            }
            return true
        }else if (this.playerHealth <= 0) {
            if (confirm('You Lost, New Game?')) {
            this.initiateGame()
            } else {
            this.startGame = false
            }
            return true
        }
        return false
    }

  } 
}
</script>

<style scoped>
  .showdiv { 
    width: 100%;
    height: 40px;
    background-color: #ccc;
    margin: auto;
    transition: width 500ms;
  } 

  .healthbar{
    background-color: rgb(46, 173, 121);
    margin: 0; color: white;
    height: 40px;
    text-align: center;
    padding: 6px 0;
  }

  #start {
    width: 180px;
    height: 50px;
    border-radius: 0;
  }

  #attack {
    width: 180px;
    height: 50px;
    border-radius: 0;
    padding: 0 3px;
  }

  #special-attack {
    width: 180px;
    height: 50px;
    border-radius: 0;
  }

  #heal {
    width: 180px;
    height: 50px;
    border-radius: 0;
  }

  #give-up{
    width: 180px;
    height: 50px;
    border-radius: 0;
  }

  .log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
  }

  .log ul li {
    margin: 5px;
  }

  .log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
  }

  .log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
  }

</style>

