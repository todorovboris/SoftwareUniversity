package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _02_RadiansToDegrees {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // System.out.print("Radians=");
        double radians = Double.parseDouble(scanner.nextLine());
        // double degrees = (radians * 180 / Math.PI);

        System.out.println(radians * 180 / Math.PI);
    }
}
