package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _4_FishingBoat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int group = Integer.parseInt(scanner.nextLine());

        double price = 0.0;

        switch (season){
            case "Spring":
                if (group <= 6){
                    price = 3000 * 0.90;
                } else if (group <= 11) {
                    price = 3000 * 0.85;
                } else {
                    price = 3000 * 0.75;
                }
                break;
            case "Summer":
            case "Autumn":
                if (group <= 6){
                    price = 4200 * 0.90;
                } else if (group <= 11) {
                    price = 4200 * 0.85;
                } else {
                    price = 4200 * 0.75;
                }
                break;
            case "Winter":
//                price = 2600;
                if (group <= 6 ){
                    price = 2600 * 0.90;
                } else if (group <= 11) {
                    price = 2600 * 0.85;
                } else {
                    price = 2600 * 0.75;
                }
                break;
        }

        if (group % 2 ==0 && !season.equals("Autumn")){
            price = price * 0.95;
        }

        if (budget >= price){
            System.out.printf("Yes! You have %.2f leva left.", budget - price);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", price - budget);
        }
    }
}
