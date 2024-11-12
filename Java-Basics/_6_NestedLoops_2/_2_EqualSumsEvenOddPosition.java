package _6_NestedLoops_2;

import java.util.Scanner;

public class _2_EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int firstNumber = Integer.parseInt(scanner.nextLine());
        int secondNumber = Integer.parseInt(scanner.nextLine());



        for (int i = firstNumber; i <= secondNumber ; i++) {
            String numberText = i + "";
            int sumEven = 0; //сума четни
            int sumOdd = 0; //сума нечетни


            for (int position = 0; position < numberText.length() ; position++) {
                char positionChar = numberText.charAt(position);
                String positionString = positionChar + "";
                int positionInt = Integer.parseInt(positionString);

                if (position % 2 == 0){
                    sumEven += positionInt;
                } else {
                    sumOdd += positionInt;
                }
            }

            if (sumOdd == sumEven){
                System.out.print(i + " ");
            }
        }
    }
}
