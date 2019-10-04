# Feudal_Conflict
![alt text](https://i.imgur.com/QiC5b7t.png)

This is a turn based worker placement game in which two users compete to build structures and earn points!


Each user has  a resource pool and a building pool
The game has:
- 4 individual buttons with attributed functions
- 1 resource token pool with 3 types of resources (R,G,B)
- 1 container of 8 basic house tokens, 6 complex houses tokens

Play:
Users take 2 turns per round
- within those turns, each user alternates taking 2 placement actions
- each action invokes the function ingrained within the selected button
- on their turn, users may purchase available buildings with resources
  - building's values: basic(1pt), complex(2pt)
  - builing costs:
  basic: 2(R||G||B), 3(S), or 1(RGB)
  complex: basic building token + 2(RGB)


Placement (button) functions:
1. Collect 2 red resource tokens
2. Collect 2 blue resource tokens
3. Collect 2 green resource tokens
4. Collect 3 random resource tokens



Endstate
users race to buy building tokens to earn them points,
- The game will end at reaching 8pts or 6rounds


Future versions of this game will:
 * add addition placement options:
    1. Draw 1 interaction card + collect 1 random resource from game pool
    2. Play 1 interaction card + collect 1 random resource from game pool
 
 * add a new resource:
  * silver: will be used to purchase buildings
 
 * add interaction cards
    Interaction card functions:
      1. Take 1 selected type resource token from opponents pool
      2. Take 2 random resource tokens from game pool
      3. Take 1 extra turn next round
      4. Collect 1 basic building token from game pool
      5. Collect 4 silver resource tokens from game pool
      6. Take 1 of any resource token
      7. Allows 1 button selection which the opponent has already selected
      8. Take 1 interaction card from oppponents hand at random
      9. Collect 1 point
 * add another level of buildings  (Metropolis)
    * metro: complex building token + 4(R||G||B) +6 (S)
    * metro: point value of 4
 * change endstate to higher values
  * endgame set to 10pts or 8 rounds
