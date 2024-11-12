package _5_WhileLoop_2;

import java.util.Scanner;

public class _7_Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int high = Integer.parseInt(scanner.nextLine());
        int freeSpace = width * length * high;

        String input = scanner.nextLine();

        while(!input.equals("Done")){
            int currentSpace = Integer.parseInt(input);
            freeSpace -= currentSpace;

            if (freeSpace <= 0){
                System.out.printf("No more free space! You need %d Cubic meters more.", Math.abs(freeSpace));
                break;
            }

            input = scanner.nextLine();
        }

        if (freeSpace > 0){
            System.out.printf("%d Cubic meters left." , freeSpace);
        }
    }
}
