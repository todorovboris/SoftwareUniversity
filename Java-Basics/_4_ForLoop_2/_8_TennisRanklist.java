package _4_ForLoop_2;

import java.util.Scanner;

public class _8_TennisRanklist {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countTournaments = Integer.parseInt(scanner.nextLine());
        int initialPoints = Integer.parseInt(scanner.nextLine());

        int points = 0;
        int wins = 0;

        for (int i = 1; i <= countTournaments ; i++) {
            String stage = scanner.nextLine();

            if (stage.equals("W")){
                points += 2000;
                wins++;
            } else if (stage.equals("F")) {
                points += 1200;
            } else if (stage.equals("SF")) {
                points += 720;
            }

        }

        double percentWins = wins * 1.0 / countTournaments * 100;

        System.out.printf("Final points: %d%n" , initialPoints + points);
        System.out.printf("Average points: %d%n", points / countTournaments);
        System.out.printf("%.2f%%", percentWins);
    }
}
