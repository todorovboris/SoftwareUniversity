package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _07_FoodDelivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int chicken = Integer.parseInt(scanner.nextLine());
        int fish = Integer.parseInt(scanner.nextLine());
        int vegetarian = Integer.parseInt(scanner.nextLine());

        double totChicke = (10.35 * chicken);
        double totFish = (12.4 * fish);
        double totVegetarian = (8.15 * vegetarian);
        double totMenu = (totChicke + totFish + totVegetarian);
        double desert = (0.2 * totMenu);

        System.out.println(2.5 + desert + totMenu);
    }
}
