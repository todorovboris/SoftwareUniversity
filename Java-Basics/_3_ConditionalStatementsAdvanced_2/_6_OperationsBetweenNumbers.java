package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _6_OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n1 = Integer.parseInt(scanner.nextLine());
        int n2 = Integer.parseInt(scanner.nextLine());
        String operator = scanner.nextLine();

//        int sum = 0;

        switch (operator){
            case "+":
                int sum = n1 + n2;
                if (sum % 2 ==0){
                    System.out.printf("%d %s %d = %d - even", n1, operator, n2, sum);
                } else {
                    System.out.printf("%d %s %d = %d - odd", n1, operator, n2, sum);
                }
                break;
            case "-":
                int diff = n1 - n2;
                if (diff % 2 ==0){
                    System.out.printf("%d %s %d = %d - even", n1, operator, n2, diff);
                } else {
                    System.out.printf("%d %s %d = %d - odd", n1, operator, n2, diff);
                }
                break;
            case "*":
                int mult = n1 * n2;
                if (mult % 2 ==0){
                    System.out.printf("%d %s %d = %d - even", n1, operator, n2, mult);
                } else {
                    System.out.printf("%d %s %d = %d - odd", n1, operator, n2, mult);
                }
                break;
            case "/":
                if (n2 == 0){
                    System.out.printf("Cannot divide %d by zero", n1);
                } else {
                    double div = n1 * 1.0 / n2;
                    System.out.printf("%d / %d = %.2f", n1, n2, div);
                }
                break;
            case "%":
                if (n2 == 0){
                    System.out.printf("Cannot divide %d by zero", n1);
                } else {
                    int rest = n1 % n2;
                    System.out.printf("%d %% %d = %d", n1, n2, rest);
                }
                break;
        }
    }
}
