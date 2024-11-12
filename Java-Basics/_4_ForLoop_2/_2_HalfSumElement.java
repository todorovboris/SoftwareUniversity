package _4_ForLoop_2;

import java.util.Scanner;

public class _2_HalfSumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int maxNumber = Integer.MIN_VALUE;

        int totalSum = 0;

        for (int i = 1; i <= n; i++) {
            int number = Integer.parseInt(scanner.nextLine());
            totalSum += number;

            if (number > maxNumber){
                maxNumber = number;
            }
        }

        int sumWithoutMax = totalSum - maxNumber;
        int diff = Math.abs(maxNumber - sumWithoutMax);

        if (maxNumber == sumWithoutMax){
            System.out.println("Yes");
            System.out.println("Sum = " + maxNumber);
        } else {
            System.out.println("No");
            System.out.println("Diff = " + diff);
        }
    }
}
