package _2_ConditionalStatements_1;

import java.util.Scanner;

public class _7_AreaOfFigures {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String type = scanner.nextLine();
        
        if (type.equals("square")){
            double a = Double.parseDouble(scanner.nextLine());
            System.out.printf("%.3f", a * a);
        } else if (type.equals("rectangle")) {
            double a = Double.parseDouble(scanner.nextLine());
            double b = Double.parseDouble(scanner.nextLine());
            System.out.printf("%.3f", a * b);
        } else if (type.equals("circle")) {
            double r = Double.parseDouble(scanner.nextLine());
            System.out.printf("%.3f", r * r * Math.PI);
        } else if (type.equals("triangle")) {
            double a = Double.parseDouble(scanner.nextLine());
            double h = Double.parseDouble(scanner.nextLine());
            System.out.printf("%.3f", (a * h) / 2);;
        }


    }
}
