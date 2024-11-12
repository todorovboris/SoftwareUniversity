package _2_ConditionalStatements_1;

import java.util.Scanner;

public class _1_ExcellentResult {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = Integer.parseInt(scanner.nextLine());
        if (a >= 5){
            System.out.println("Excellent!");
        }
    }
}
