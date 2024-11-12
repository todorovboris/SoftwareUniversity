package _2_ConditionalStatements_1;

import java.util.Scanner;

public class _3_EvenOrOdd {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numb = Integer.parseInt(scanner.nextLine());

        if ( numb % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
    }
}
