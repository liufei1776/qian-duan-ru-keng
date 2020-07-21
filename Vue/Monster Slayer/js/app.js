let app = new Vue({
    el: "#app",
    data: {
        gameIsRunning: false,
        playerHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        startGame : function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            // You attack monster
            this.playerAttacks(3,10);
            if(this.checkWin()) 
            {   
                // Player win first?
                return; 
            } 

            // Monster attacks you
            this.monsterAttacks(5,12); 
        },
        specialAttack: function(){
            this.playerAttacks(10,20);
            if(this.checkWin()) { return; }

            // same monster attack
            this.monsterAttacks(5,12); 
        },
        heal: function(){
            // Heal, no attack
            let healValue = 10;
            if(this.playerHealth <= 90)
            {
                this.playerHealth += healValue;
                this.turns.unshift({
                    isPlayer: true,
                    text: "Player heals himself for " + healValue
                });
            }
            else
            {
                this.playerHealth = 100;
                this.turns.unshift({
                    isPlayer: true,
                    text: "Player is full health now"
                });
            }
            
            // Monster continues attack
            this.monsterAttacks(5,12); 
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        calculateDamage : function(minDamage, maxDamage){
            return Math.floor( minDamage + (maxDamage - minDamage + 1)*Math.random() ); 
        },
        monsterAttacks: function(minDamage, maxDamage){
            let damage = this.calculateDamage(minDamage,maxDamage);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            });
            this.checkWin();
        },
        playerAttacks: function(minDamage, maxDamage){
            let damage = this.calculateDamage(minDamage,maxDamage);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits monster for " + damage
            });
        },
        checkWin: function(){
            // Who wins first ?
            if(this.monsterHealth <= 0)
            {
                if(confirm('You won! New Game?'))
                {
                    this.startGame();
                }
                else
                {
                    this.monsterHealth = 0;
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHealth <= 0)
            {
                if(confirm('You lost! New Game?'))
                {
                    this.startGame();
                }
                else
                {
                    this.playerHealth = 0;
                    this.gameIsRunning = false;
                }
                return true;
            }

            // No one wins
            return false;
        }
    }
});


