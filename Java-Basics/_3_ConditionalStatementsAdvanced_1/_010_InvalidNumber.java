package _3_ConditionalStatementsAdvanced_1;

import java.util.Scanner;

public class _010_InvalidNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

//        boolean valid = num >= 100 && num <= 200 || num == 0;
        if (!(num >= 100 && num <= 200 || num == 0)){
            System.out.println("invalid");
        }
    }
}
