package _4_ForLoop_1;

import java.util.Scanner;

public class _10_OddEvenSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numbers = Integer.parseInt(scanner.nextLine());

        int sumEven = 0;
        int sumOdd = 0;

        for (int position = 1; position <= numbers ; position++) {

            int number = Integer.parseInt(scanner.nextLine());
            if (position % 2 == 0){
                sumEven += number;
            }else {
                sumOdd += number;
            }
        }

        if (sumEven == sumOdd){
            System.out.println("Yes");
            System.out.println("Sum = " + sumOdd);
        } else {
            int diff = Math.abs(sumOdd - sumEven);
            System.out.println("No");
            System.out.println("Diff = " + diff);
        }
    }
}
