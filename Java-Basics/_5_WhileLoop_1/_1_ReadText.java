package _5_WhileLoop_1;

import java.util.Scanner;

public class _1_ReadText {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();

        while (!text.equals("Stop")){
            System.out.println(text);
            text=scanner.nextLine();
        }
    }
}
