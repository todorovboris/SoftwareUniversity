package _5_WhileLoop_1;

import java.util.Scanner;

public class _3_Password {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());
        int sum=0;

        while (sum<number){
            int n = Integer.parseInt(scanner.nextLine());
            sum=sum+n;
        }

        System.out.println(sum);
    }
}
