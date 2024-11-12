package _1_FistStepsInCoding_1;
import java.util.Scanner;

public class _04_InchesToCentimeters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Please add your value: ");
        double value = Double.parseDouble(scanner.nextLine());

        // System.out.print("In inches this value is = ");
        System.out.println(value * 2.54);

    }
}
