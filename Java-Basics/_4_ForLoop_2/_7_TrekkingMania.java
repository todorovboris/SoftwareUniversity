package _4_ForLoop_2;

import java.util.Scanner;

public class _7_TrekkingMania {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countGroups = Integer.parseInt(scanner.nextLine());

        int groupMusala = 0;
        int groupMonblan = 0;
        int groupKilimandjaro = 0;
        int groupK2 = 0;
        int groupEverest = 0;
        int totalClimbers = 0;

        for (int i = 1; i <= countGroups ; i++) {
            int climbers = Integer.parseInt(scanner.nextLine());
            totalClimbers += climbers;

            if (climbers <= 5){
                groupMusala = groupMusala + climbers;
            } else if (climbers <= 12) {
                groupMonblan = groupMonblan + climbers;
            } else if (climbers <= 25) {
                groupKilimandjaro = groupKilimandjaro + climbers;
            } else if (climbers <= 40) {
                groupK2 = groupK2 + climbers;
            } else {
                groupEverest = groupEverest + climbers;
            }
        }

        double percentMusala = groupMusala * 1.0 / totalClimbers * 100;
        double percentMonblan = groupMonblan * 1.0 / totalClimbers * 100;
        double percentKilimandjaro = groupKilimandjaro * 1.0 / totalClimbers * 100;
        double percentK2 = groupK2 * 1.0 / totalClimbers * 100;
        double percentEverest = groupEverest * 1.0 / totalClimbers * 100;

        System.out.printf("%.2f%%%n", percentMusala);
        System.out.printf("%.2f%%%n", percentMonblan);
        System.out.printf("%.2f%%%n", percentKilimandjaro);
        System.out.printf("%.2f%%%n", percentK2);
        System.out.printf("%.2f%%%n", percentEverest);

    }
}
