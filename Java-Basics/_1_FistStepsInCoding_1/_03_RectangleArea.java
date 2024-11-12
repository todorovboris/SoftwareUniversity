package _1_FistStepsInCoding_1;

import java.util.Scanner;

public class _03_RectangleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("a=");
        int a = Integer.parseInt(scanner.nextLine());
        System.out.print("b=");
        int b = Integer.parseInt(scanner.nextLine());

        System.out.print("a*b=");
        System.out.println(a * b);
    }
}
