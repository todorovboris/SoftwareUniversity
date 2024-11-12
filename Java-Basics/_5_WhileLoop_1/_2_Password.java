package _5_WhileLoop_1;

import java.util.Scanner;

public class _2_Password {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String userName = scanner.nextLine();
        String password = scanner.nextLine();

        String input = scanner.nextLine();

        while (!input.equals(password)){
            input=scanner.nextLine();
        }

        if (input.equals(password)){
            System.out.printf("Welcome %s!", userName);
        }
    }
}
