package _2_ConditionalStatements_2;

import java.util.Scanner;

public class _6_WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double record = Double.parseDouble(scanner.nextLine());
        double distance = Double.parseDouble(scanner.nextLine());
        double time = Double.parseDouble(scanner.nextLine());

        double pb = time * distance;
//        double calculation = distance / 15 * 12.5;
        double delay = Math.floor(distance / 15);
        double totalDelay = delay * 12.5;
        double totalTime = pb + totalDelay;

        if (totalTime < record){
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds." , totalTime);
        } else {
            System.out.printf("No, he failed! He was %.2f seconds slower." , totalTime - record);
        }
    }
}
