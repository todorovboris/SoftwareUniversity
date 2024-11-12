package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _05_SuppliesForSchool {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double pencils = Double.parseDouble(scanner.nextLine());
        double totPen = (pencils * 5.8);

        double markers = Double.parseDouble(scanner.nextLine());
        double totMark = (markers * 7.2);

        double liquid = Double.parseDouble(scanner.nextLine());
        double totLiq = (liquid * 1.2);

        int percentages = Integer.parseInt(scanner.nextLine());

        double discount = ((totPen + totMark + totLiq) * percentages / 100);

        System.out.println((totPen + totMark + totLiq) - discount);
    }
}


