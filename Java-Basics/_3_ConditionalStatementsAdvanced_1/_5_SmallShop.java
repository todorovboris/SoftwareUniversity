package _3_ConditionalStatementsAdvanced_1;

import java.util.Scanner;

public class _5_SmallShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String product = scanner.nextLine();
        String town = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        if (town.equals("Sofia")){
            if (product.equals("coffee")){
                System.out.println(quantity * 0.5);
            }
            if (product.equals("water")){
                System.out.println(quantity * 0.8);
            }
            if (product.equals("beer")){
                System.out.println(quantity * 1.2);
            }
            if (product.equals("sweets")){
                System.out.println(quantity * 1.45);
            }
            if (product.equals("peanuts")){
                System.out.println(quantity * 1.6);
            }
        } else if (town.equals("Plovdiv")){
            if (product.equals("coffee")){
                System.out.println(quantity * 0.4);
            }
            if (product.equals("water")){
                System.out.println(quantity * 0.7);
            }
            if (product.equals("beer")){
                System.out.println(quantity * 1.15);
            }
            if (product.equals("sweets")){
                System.out.println(quantity * 1.3);
            }
            if (product.equals("peanuts")){
                System.out.println(quantity * 1.5);
            }
        } else if (town.equals("Varna")){
            if (product.equals("coffee")){
                System.out.println(quantity * 0.45);
            }
            if (product.equals("water")){
                System.out.println(quantity * 0.7);
            }
            if (product.equals("beer")){
                System.out.println(quantity * 1.10);
            }
            if (product.equals("sweets")){
                System.out.println(quantity * 1.35);
            }
            if (product.equals("peanuts")){
                System.out.println(quantity * 1.55);
            }
        }
    }
}
