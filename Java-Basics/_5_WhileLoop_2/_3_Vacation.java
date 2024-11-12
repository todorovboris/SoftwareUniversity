package _5_WhileLoop_2;

import java.util.Scanner;

public class _3_Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countSpend = 0;
        int countDays = 0;

        double neededMoney = Double.parseDouble(scanner.nextLine());
        double savedMoney = Double.parseDouble(scanner.nextLine());

        while(savedMoney < neededMoney){
            countDays++;
            String action = scanner.nextLine();
            double currentSum = Double.parseDouble(scanner.nextLine());

            if (action.equals("spend")){
                countSpend++;
                savedMoney -= currentSum;
                if(savedMoney < 0){
                    savedMoney = 0;
                }
            } else if (action.equals("save")) {
                countSpend = 0;
                savedMoney += currentSum;
            }

            if (countSpend == 5){
                System.out.println("You can't save the money.");
                System.out.println(countDays);
                break;
            }

        }

        if (savedMoney >= neededMoney){
            System.out.printf("You saved the money for %d days.", countDays);
        }
    }
}
