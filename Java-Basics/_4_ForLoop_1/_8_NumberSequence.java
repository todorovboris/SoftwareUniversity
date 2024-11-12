package _4_ForLoop_1;

import java.util.Scanner;

public class _8_NumberSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int maxNumber = Integer.MIN_VALUE;
        int minNumber = Integer.MAX_VALUE;

        for (int i = 1; i <= n ; i++) {

            int value = Integer.parseInt(scanner.nextLine());

            if (value < minNumber) {
                minNumber = value;
            }

            if (value > maxNumber ) {
                maxNumber = value;
            }
        }

        System.out.println("Max number: " + maxNumber);
        System.out.println("Min number: " + minNumber);
    }
}
