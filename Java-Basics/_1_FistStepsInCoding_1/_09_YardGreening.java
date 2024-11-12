package _1_FistStepsInCoding_1;
import java.util.Scanner;

public class _09_YardGreening {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double area = Double.parseDouble(scanner.nextLine());
        double price = (area * 7.61);
        double discount = (price * 18/100);
        double totPrice = (price - discount);

        System.out.printf("The final price is: %f lv. %n", totPrice);
        System.out.printf("The discount is: %f lv. %n", discount);
    }
}
