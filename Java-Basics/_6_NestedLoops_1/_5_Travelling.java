package _6_NestedLoops_1;

import java.util.Scanner;

public class _5_Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();


        while(!input.equals("End")){
            double neededMoney = Double.parseDouble(scanner.nextLine());
            double savedMoney = Double.parseDouble(scanner.nextLine());

            while(savedMoney < neededMoney){
                double payment = Double.parseDouble(scanner.nextLine());
                savedMoney += payment;
            }

            System.out.printf("Going to %s!%n" , input);

            input = scanner.nextLine();
        }
    }
}
