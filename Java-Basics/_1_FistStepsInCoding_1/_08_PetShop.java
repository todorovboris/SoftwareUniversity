package _1_FistStepsInCoding_1;
import java.util.Scanner;

public class _08_PetShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double dogFood = Double.parseDouble(scanner.nextLine());
        double catFood = Double.parseDouble(scanner.nextLine());

        System.out.print((dogFood * 2.5) + (catFood * 4) + " lv.");
    }
}
