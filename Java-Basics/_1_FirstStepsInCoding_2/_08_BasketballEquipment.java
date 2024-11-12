package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _08_BasketballEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tax = Integer.parseInt(scanner.nextLine());

        double shoes = (tax - (tax * 0.4));
        double equip = (shoes - (shoes * 0.2));
        double ball = (equip / 4);
        double access = (ball / 5);

        System.out.println(tax + shoes + equip + ball + access);
    }
}
