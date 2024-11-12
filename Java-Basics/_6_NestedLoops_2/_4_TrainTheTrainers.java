package _6_NestedLoops_2;

import java.util.Scanner;

public class _4_TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();

        int countPresentation = 0;
        double totalGrade = 0;

        while(!input.equals("Finish")){
            countPresentation++;
            double totalGradeForOnePres = 0;

            for (int i = 1; i <= n ; i++) {
                double grade = Double.parseDouble(scanner.nextLine());
                totalGradeForOnePres += grade;
            }

            double avgForOnePres = totalGradeForOnePres / n;
            System.out.printf("%s - %.2f.%n" , input , avgForOnePres);

            totalGrade += avgForOnePres;
            input = scanner.nextLine();
        }
        System.out.printf("Student's final assessment is %.2f." , totalGrade / countPresentation);
    }
}
