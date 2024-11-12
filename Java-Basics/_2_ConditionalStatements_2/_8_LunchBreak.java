package _2_ConditionalStatements_2;

import java.util.Scanner;

public class _8_LunchBreak {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int epTime = Integer.parseInt(scanner.nextLine());
        int breakTime = Integer.parseInt(scanner.nextLine());

        double timeLunch = breakTime / 8.0;
        double timeRest = breakTime / 4.0;
//        double timeForWatching = Math.ceil(breakTime - timeRest - timeLunch);
        double timeForWatching = breakTime - timeRest - timeLunch;
        double timeLeft = Math.ceil(Math.abs(timeForWatching - epTime));

        if (timeForWatching >= epTime){
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time." , name , timeLeft);
        } else {
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", name , timeLeft);
        }
    }
}
