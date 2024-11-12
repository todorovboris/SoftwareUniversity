package _2_ConditionalStatements_2;

import java.util.Scanner;

public class _1_SumSeconds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int x = Integer.parseInt(scanner.nextLine());
        int y = Integer.parseInt(scanner.nextLine());
        int z = Integer.parseInt(scanner.nextLine());

        int sum = x + y + z;
        int min = sum / 60;
        int sec = sum % 60;

        if (sec < 10) {
            System.out.printf("%d:0%d", min, sec);
        } else {
            System.out.printf("%d:%d", min, sec);
        }

    }
}
