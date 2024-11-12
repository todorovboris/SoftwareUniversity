package _5_WhileLoop_2;

import java.util.Scanner;

public class _2_ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int unsatisfactoryRate = Integer.parseInt(scanner.nextLine());

        double averageScore = 0;
        int countProblems = 0;
        int totalRate = 0;
        int countBadRate = 0;
        String lastProblem = "";



        String nameProblem = scanner.nextLine();

        while(!nameProblem.equals("Enough")){
            int rate = Integer.parseInt(scanner.nextLine());

            lastProblem = nameProblem;
            countProblems++;
            totalRate += rate;

            if(rate <= 4){
                countBadRate++;
            }

            if (countBadRate == unsatisfactoryRate){
                System.out.printf("You need a break, %d poor grades." , unsatisfactoryRate);
                break;
            }


            nameProblem = scanner.nextLine();
        }

        if (nameProblem.equals("Enough")) {
            System.out.printf("Average score: %.2f%n", totalRate * 1.0 / countProblems);
            System.out.printf("Number of problems: %d%n", countProblems);
            System.out.printf("Last problem: %s%n", lastProblem);
        }

    }
}
