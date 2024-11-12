package _2_ConditionalStatements_2;

import java.util.Scanner;

public class _4_ToyShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double vacation = Double.parseDouble(scanner.nextLine());

//        · Пъзел - 2.60 лв.
//        · Говореща кукла - 3 лв.
//        · Плюшено мече - 4.10 лв.
//        · Миньон - 8.20 лв.
//        · Камионче - 2 лв.

        int puzzle = Integer.parseInt(scanner.nextLine());
        int doll = Integer.parseInt(scanner.nextLine());
        int bear = Integer.parseInt(scanner.nextLine());
        int minion = Integer.parseInt(scanner.nextLine());
        int truck = Integer.parseInt(scanner.nextLine());

        double totalPrice = puzzle*2.6 + doll*3 + bear*4.1 + minion*8.2 + truck*2;
        int countToys = puzzle + doll + bear + minion + truck;

        if (countToys >= 50) {
            totalPrice = totalPrice - totalPrice * 0.25;
        }
        totalPrice = totalPrice - totalPrice*0.1;

        if (totalPrice >= vacation){
            System.out.printf("Yes! %.2f lv left." , totalPrice - vacation);
        } else {
            System.out.printf("Not enough money! %.2f lv needed." , vacation - totalPrice);
        }
    }
}
