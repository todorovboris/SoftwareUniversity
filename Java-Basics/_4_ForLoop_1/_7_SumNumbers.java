package _4_ForLoop_1;

import java.util.Scanner;

public class _7_SumNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
//        int value = Integer.parseInt(scanner.nextLine());

        int sum = 0;

        for (int i = 1; i <= n ; i++) {
            int value = Integer.parseInt(scanner.nextLine());
            sum = sum + value;
        }

        System.out.println(sum);
    }
}
