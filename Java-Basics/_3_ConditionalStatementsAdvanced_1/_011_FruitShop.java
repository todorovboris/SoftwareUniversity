package _3_ConditionalStatementsAdvanced_1;

import java.util.Scanner;

public class _011_FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String fruit = scanner.nextLine();
        String day = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        double price = 0.0;

        boolean workingDay = day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday")  || day.equals("Thursday") || day.equals("Friday");
        boolean weekend = day.equals("Saturday") || day.equals("Sunday");

        if (workingDay) {
            if (fruit.equals("banana")) {
                price = 2.5;
            } else if (fruit.equals("apple")) {
                price = 1.2;
            } else if (fruit.equals("orange")) {
                price = 0.85;
            } else if (fruit.equals("grapefruit")) {
                price = 1.45;
            } else if (fruit.equals("kiwi")) {
                price = 2.7;
            } else if (fruit.equals("pineapple")) {
                price = 5.5;
            } else if (fruit.equals("grapes")) {
                price = 3.85;
            }
        } else if (weekend) {
            if (fruit.equals("banana")) {
                price = 2.7;
            } else if (fruit.equals("apple")) {
                price = 1.25;
            } else if (fruit.equals("orange")) {
                price = 0.9;
            } else if (fruit.equals("grapefruit")) {
                price = 1.6;
            } else if (fruit.equals("kiwi")) {
                price = 3.00;
            } else if (fruit.equals("pineapple")) {
                price = 5.6;
            } else if (fruit.equals("grapes")) {
                price = 4.2;
            }
        } else {
            System.out.println("error");
        }

        if (price > 0){
            double result = price * quantity;
            System.out.printf("%.2f", result);
        }else {
            System.out.println("error");
        }
    }
}
