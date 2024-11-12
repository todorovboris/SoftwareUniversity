package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _3_NewHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String flower = scanner.nextLine();
        int count = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());

        double sum = 0.0;

        switch (flower){
            case "Roses":
                sum = count * 5;
                if (count > 80){
                    sum = sum * 0.9;
                }
                break;
            case "Dahlias":
                sum = count * 3.80;
                if (count > 90){
                    sum = sum * 0.85;
                }
                break;
            case "Tulips":
                sum = count * 2.80;
                if (count > 80){
                    sum = sum * 0.85;
                }
                break;
            case "Narcissus":
                sum = count * 3;
                if (count < 120){
                    sum = sum * 1.15;
                }
                break;
            case "Gladiolus":
                sum = count * 2.50;
                if (count < 80){
                    sum = sum * 1.20;
                }
                break;
        }

        if (budget >= sum){
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", count, flower, budget - sum);
        } else {
            System.out.printf("Not enough money, you need %.2f leva more.", sum - budget);
        }
    }
}
