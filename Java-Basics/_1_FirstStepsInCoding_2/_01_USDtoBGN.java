package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _01_USDtoBGN {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("BGN=");
        double bgn = Double.parseDouble(scanner.nextLine());
        // double usd = (bgn * 1.79549);
        System.out.println(bgn * 1.79549);

    }
}
