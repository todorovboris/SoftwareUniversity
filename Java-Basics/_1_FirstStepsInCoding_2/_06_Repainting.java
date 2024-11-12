package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _06_Repainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int intNylon = Integer.parseInt(scanner.nextLine());
        int intPaint = Integer.parseInt(scanner.nextLine());
        int intRazr = Integer.parseInt(scanner.nextLine());
        int hours = Integer.parseInt(scanner.nextLine());

        double finPaint = ((intPaint + 0.1 * intPaint) * 14.5);
        double finNylon = ((intNylon + 2) * 1.5);
        double finRaz = (intRazr * 5);
        double totMaterials = (finNylon + finPaint + finRaz + 0.4);

        double salary = (totMaterials * 0.3);
        double totSalary = (salary * hours);

        System.out.println(totMaterials + totSalary);
    }
}
