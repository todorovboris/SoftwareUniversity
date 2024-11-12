package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _5_Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();

        String where = "";
        String what = "";

        if (budget <= 100){
            where = "Bulgaria";
            if (season.equals("summer")){
                budget = budget * 0.30;
                what = "Camp";
            } else if (season.equals("winter")) {
                budget = budget * 0.70;
                what = "Hotel";
            }
        } else if (budget <= 1000) {
            where = "Balkans";
            if (season.equals("summer")){
                budget = budget * 0.40;
                what = "Camp";
            } else if (season.equals("winter")) {
                budget = budget * 0.80;
                what = "Hotel";
            }
        } else {
            where = "Europe";
            budget = budget * 0.90;
            what = "Hotel";
        }

        System.out.printf("Somewhere in %s%n", where);
        System.out.printf("%s - %.2f", what, budget);
    }
}
