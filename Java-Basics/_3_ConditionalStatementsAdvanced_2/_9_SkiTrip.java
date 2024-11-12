package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _9_SkiTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        String room = scanner.nextLine();
        String rating = scanner.nextLine();

        double price = 0.0;

        switch (room){
            case "room for one person":
                price = (days - 1) * 18.00;
                break;
            case "apartment":
                price = (days - 1) * 25.00;
                if (days < 10){
                    price = price * 0.7;
                } else if (days >= 10 && days <= 15) {
                    price = price * 0.65;
                } else {
                    price = price * 0.50;
                }
                break;
            case "president apartment":
                price = (days - 1) * 35.00;
                if (days < 10){
                    price = price * 0.90;
                } else if (days >= 10 && days <= 15) {
                    price = price * 0.85;
                } else {
                    price = price * 0.80;
                }
                break;
        }

        if (rating.equals("positive")){
            price = price * 1.25;
        } else if (rating.equals("negative")){
            price = price * 0.90;
        }

        System.out.printf("%.2f", price);
    }
}
