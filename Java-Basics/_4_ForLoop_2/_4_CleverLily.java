package _4_ForLoop_2;

import java.util.Scanner;

public class _4_CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int age = Integer.parseInt(scanner.nextLine());
        double priceWashingMachine = Double.parseDouble(scanner.nextLine());
        int priceToy = Integer.parseInt(scanner.nextLine());

        int sum = 0;
        int countToys = 0;

        for (int i = 1; i <= age; i++) {
            if (i % 2 == 1){
                countToys++;
            } else if ( i % 2 == 0) {
                sum = sum + ((i * 10) / 2) - 1;
            }
        }

        sum = sum + priceToy * countToys;
        double diff = Math.abs(sum - priceWashingMachine);

        if (sum >= priceWashingMachine){
            System.out.printf("Yes! %.2f", diff);
        } else {
            System.out.printf("No! %.2f", diff);
        }
    }
}
