package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _04_VacationBooksList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        // общо 100 стр

        // трябва да ги прочета за 5 дни

        // на час чета по 10 стр

        int pages = Integer.parseInt(scanner.nextLine());
        int pagesPerHour = Integer.parseInt(scanner.nextLine());
        int days = Integer.parseInt(scanner.nextLine());

        int totalHours = (pages / pagesPerHour); //общо часовете, за които трябва да се прочете
        int hoursPerDay = (totalHours / days);

        System.out.println(hoursPerDay);

    }
}
