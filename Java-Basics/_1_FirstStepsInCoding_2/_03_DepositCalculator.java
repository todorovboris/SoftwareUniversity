package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _03_DepositCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

        double deposit = Double.parseDouble(scanner.nextLine());
        int months = Integer.parseInt(scanner.nextLine());
        double pers = Double.parseDouble(scanner.nextLine());

        System.out.println(deposit + months * ((deposit * pers / 100) / 12));

    }
}
