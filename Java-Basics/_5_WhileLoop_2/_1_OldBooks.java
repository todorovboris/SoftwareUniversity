package _5_WhileLoop_2;

import java.util.Scanner;

public class _1_OldBooks {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String favoriteBook = scanner.nextLine();
        String checkingBook = scanner.nextLine();

        int checkedBook = 0;

        while(!checkingBook.equals("No More Books")){

            if (checkingBook.equals(favoriteBook)){
                System.out.printf("You checked %d books and found it.", checkedBook);
                break;
            }

            checkedBook++;
            checkingBook= scanner.nextLine();
        }

        if (checkingBook.equals("No More Books")) {
            System.out.println("The book you search is not here!");
            System.out.printf("You checked %d books.", checkedBook);
        }
    }
}
