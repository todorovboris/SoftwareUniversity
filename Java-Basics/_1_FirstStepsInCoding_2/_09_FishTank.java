package _1_FirstStepsInCoding_2;

import java.util.Scanner;

public class _09_FishTank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int x = Integer.parseInt(scanner.nextLine()); //дължина
        int y = Integer.parseInt(scanner.nextLine()); //широчина
        int z = Integer.parseInt(scanner.nextLine()); //височина
        double perc = Double.parseDouble(scanner.nextLine()); //процент заетост в аквариума

        double obem = (x * y * z); //обем на аквариума
        double total = (obem / 1000); //обем на аквариума в литри
        double need = (total - total * perc / 100);

        System.out.println(need);

    }
}
