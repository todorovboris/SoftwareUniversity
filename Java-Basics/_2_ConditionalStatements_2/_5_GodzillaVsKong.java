package _2_ConditionalStatements_2;

import java.util.Scanner;

public class _5_GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int people = Integer.parseInt(scanner.nextLine());
        double clothes = Double.parseDouble(scanner.nextLine());

        double decor = budget * 0.1;
        if (people > 150) {
            clothes = clothes - clothes * 0.1;
        }

        double sum = decor + clothes * people;

        if (sum > budget){
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more." , sum - budget);
        } else {
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left." , budget - sum);
        }
    }
}
