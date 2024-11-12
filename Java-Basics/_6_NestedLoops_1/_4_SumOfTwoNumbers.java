package _6_NestedLoops_1;

import java.util.Scanner;

public class _4_SumOfTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int startNumber = Integer.parseInt(scanner.nextLine());
        int endNumber = Integer.parseInt(scanner.nextLine());
        int magicNumber = Integer.parseInt(scanner.nextLine());

        int counter = 0;
        boolean isMagic = false;

        for (int start = startNumber; start <= endNumber ; start++) {
            for (int end = startNumber; end <= endNumber ; end++) {
                counter++;

                if (start + end == magicNumber){
                    System.out.printf("Combination N:%d (%d + %d = %d)", counter , start, end , magicNumber);

                    isMagic = true;
                    break;
                }
            }

            if (isMagic){
            break;
            }
        }

        if (!isMagic)
        System.out.printf("%d combinations - neither equals %d", counter , magicNumber);
        
    }
}
