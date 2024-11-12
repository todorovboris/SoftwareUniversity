package _6_NestedLoops_1;

import java.util.Scanner;

public class _3_Combinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int counter = 0;

        for (int firstNumber = 0; firstNumber <=n ; firstNumber++) {
            for (int secondNumber = 0; secondNumber <= n ; secondNumber++) {
                for (int thirdNumber = 0; thirdNumber <= n ; thirdNumber++) {

                    if (firstNumber + secondNumber + thirdNumber == n){
                        counter++;
                    }
                }

            }
        }

        System.out.println(counter);
    }
}
