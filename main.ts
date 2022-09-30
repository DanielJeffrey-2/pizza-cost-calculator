/**
 * Created by: Daniel Jeffrey
 * 
 * Created on: Sept 30, 2022
 * 
 * This program calculates the cost of a pizza at $0.50 per inch, $0.75 labour cost, $1 per pizza and 13% HST
 */
game.splash("Today we are calculating the cost of a pizza!")
game.splash("For this calculator, we are using $0.75 (labor cost) + $1 per pizza, + $0.50 / diameter inch of pizza")
let Diameter_of_Pizza = game.askForNumber("The diameter of the pizza in inches")
let $_of_pizza = Diameter_of_Pizza * 0.5
let Cost_of_pizza = $_of_pizza + 1.75
let Total_Cost = Cost_of_pizza * 1.13
Total_Cost = Total_Cost * 100
Total_Cost = Math.round(Total_Cost)
Total_Cost = Total_Cost / 100
game.splash("The cost of the " + Diameter_of_Pizza + "\" pizza is $" + Total_Cost)
