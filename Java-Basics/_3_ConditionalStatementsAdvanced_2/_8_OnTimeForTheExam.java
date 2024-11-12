package _3_ConditionalStatementsAdvanced_2;

import java.util.Scanner;

public class _8_OnTimeForTheExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hourExam = Integer.parseInt(scanner.nextLine());
        int minuteExam = Integer.parseInt(scanner.nextLine());
        int hourArrival = Integer.parseInt(scanner.nextLine());
        int minuteArrival = Integer.parseInt(scanner.nextLine());

        int totalExam = hourExam * 60 + minuteExam;
        int totalArrival = hourArrival * 60 + minuteArrival;
        int diff = totalArrival - totalExam;

        int hh = 0;
        int mm = 0;


        if (diff > 0 && diff < 60){
            System.out.println("Late");
            System.out.printf("%d minutes after the start", diff);
        } else if (diff >= 60){
            hh = diff / 60;
            mm = diff % 60;
            if (mm < 10){
                System.out.println("Late");
                System.out.printf("%d:0%d hours after the start", hh, mm);
            } else {
                System.out.println("Late");
                System.out.printf("%d:%d hours after the start", hh, mm);
            }
        } else if (diff == 0) {
            System.out.println("On time");
        } else if (diff < 0 && diff >= -30) {
            System.out.println("On time");
            System.out.printf("%d minutes before the start", Math.abs(diff));
        } else if (diff < -30 && diff > -60){
            System.out.println("Early");
            System.out.printf("%d minutes before the start", Math.abs(diff));
        } else if (diff <= - 60) {
            hh = Math.abs(diff) / 60;
            mm = Math.abs(diff) % 60;
            if (mm < 10){
                System.out.println("Early");
                System.out.printf("%d:0%d hours before the start", hh, mm);
            }else {
                System.out.println("Early");
                System.out.printf("%d:%d hours before the start", hh, mm);
            }
        }
    }
}
