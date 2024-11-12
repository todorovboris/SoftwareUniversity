package _5_WhileLoop_2;

import java.util.Scanner;

public class _6_Cake {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int totalPieces = width * length; ///общо парчета

        String input = scanner.nextLine();

        while(!input.equals("STOP")){
            int currentPieces = Integer.parseInt(input);
            totalPieces -= currentPieces;

            if (totalPieces <= 0){
                System.out.printf("No more cake left! You need %d pieces more.", Math.abs(totalPieces));
                break;
            }

            input = scanner.nextLine();
        }

        if (totalPieces > 0){
            System.out.printf("%d pieces are left.", totalPieces);
        }

    }
}
