package _4_ForLoop_1;

import java.util.Scanner;

public class _2_NumbersNto1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = Integer.parseInt(scanner.nextLine());

        for (int number = n; number >= 1 ; number=number-1) {
            System.out.println(number);
        }
    }
}
