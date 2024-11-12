package _4_ForLoop_1;

import java.util.Scanner;

public class _9_LeftRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int leftSum = 0;
        int rightSum = 0;


        for (int i = 1; i <= n ; i++) {
            int lNumber = Integer.parseInt(scanner.nextLine());
            leftSum += lNumber;
        }

        for (int i = 1; i <= n; i++) {
            int rNumber = Integer.parseInt(scanner.nextLine());
            rightSum += rNumber;
        }


        if (leftSum == rightSum){
            System.out.println("Yes, sum = " + leftSum);
        } else {
            int diff = Math.abs(leftSum - rightSum);
            System.out.println("No, diff = " + diff);
        }
    }
}


