package _2_ConditionalStatements_2;

import java.util.Scanner;

public class _7_Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int video = Integer.parseInt(scanner.nextLine());
        int processor = Integer.parseInt(scanner.nextLine());
        int ram = Integer.parseInt(scanner.nextLine());

        int videoPrice = video * 250;
        double processorPrice = processor * (0.35 * videoPrice);
        double ramPrice = ram * (0.10 * videoPrice);

        double totalSum = videoPrice + processorPrice + ramPrice;

        if (video > processor){
            totalSum = totalSum - totalSum * 0.15;
        }

        if (totalSum <= budget){
            System.out.printf("You have %.2f leva left!" , budget - totalSum);
        } else {
            System.out.printf("Not enough money! You need %.2f leva more!" , totalSum - budget);
        }
    }
}
