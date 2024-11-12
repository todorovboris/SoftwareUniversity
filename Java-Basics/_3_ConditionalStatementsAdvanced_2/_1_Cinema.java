package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _1_Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String projection = scanner.nextLine();
        int r = Integer.parseInt(scanner.nextLine());
        int c = Integer.parseInt(scanner.nextLine());

        double sum = 0.0;

        if (projection.equals("Premiere")){
            sum = r * c * 12.00;
        } else if (projection.equals("Normal")) {
            sum = r * c * 7.50;
        } else if (projection.equals("Discount")) {
            sum = r * c * 5.00;
        }
        System.out.printf("%.2f leva", sum);
    }
}
