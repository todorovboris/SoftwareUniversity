package _6_NestedLoops_2;

import java.util.Scanner;

public class _1NumberPyramid {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int curr = 1;

        for (int rows = 1; rows <= n ; rows++) {
            for (int cols = 1; cols <= rows ; cols++) {
                System.out.print(curr + " ");
                curr++;

                if (curr > n){
                    return;
                }
            }
            System.out.println();
        }
    }
}
