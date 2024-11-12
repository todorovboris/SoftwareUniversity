package _5_WhileLoop_2;

import java.util.Scanner;

public class _5_Coins {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double sum = Double.parseDouble(scanner.nextLine());
        double sumCoins = Math.floor(sum * 100);

        int countCoins = 0;

        while(sumCoins > 0){
            if(sumCoins >= 200){
                sumCoins -= 200;
                countCoins++;
            } else if (sumCoins >= 100) {
                sumCoins -= 100;
                countCoins++;
            }else if (sumCoins >= 50) {
                sumCoins -= 50;
                countCoins++;
            }else if (sumCoins >= 20) {
                sumCoins -= 20;
                countCoins++;
            }else if (sumCoins >= 10) {
                sumCoins -= 10;
                countCoins++;
            }else if (sumCoins >= 5) {
                sumCoins -= 5;
                countCoins++;
            }else if (sumCoins >= 2) {
                sumCoins -= 2;
                countCoins++;
            }else if (sumCoins >= 1) {
                sumCoins -= 1;
                countCoins++;
            }

        }

        System.out.println(countCoins);
    }
}
