package _5_WhileLoop_1;

import java.util.Scanner;

public class _5_AccountBalance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String payment = scanner.nextLine();
        double sum=0;

        while(!payment.equals("NoMoreMoney")){
            double paymentDouble = Double.parseDouble(payment);

            if (paymentDouble < 0){
                System.out.println("Invalid operation!");
                break;
            }

            System.out.printf("Increase: %.2f%n" , paymentDouble);
            sum += paymentDouble;
            payment=scanner.nextLine();
        }
        System.out.printf("Total: %.2f%n" , sum);
    }
}
