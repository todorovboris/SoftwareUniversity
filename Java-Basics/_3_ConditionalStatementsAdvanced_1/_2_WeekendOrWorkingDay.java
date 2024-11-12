package _3_ConditionalStatementsAdvanced_1;

import java.util.Scanner;

public class _2_WeekendOrWorkingDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String day = scanner.nextLine();
//        2 Tuesday
//        3 Wednesday
//        4 Thursday
//        5 Friday
//        6 Saturday
//        7 Sunday

        switch (day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                System.out.println("Working day");
                break;
            case "Saturday":
            case "Sunday":
                System.out.println("Weekend");
                break;
            default:
                System.out.println("Error");
                break;
        }
    }
}
