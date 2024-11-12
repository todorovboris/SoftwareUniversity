package _5_WhileLoop_1;

import java.util.Scanner;

public class _8_Graduation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String studentName = scanner.nextLine();
        int grade = 1;
        double sumScore = 0;
        int excluded = 0;

        while(grade <= 12){
            double score = Double.parseDouble(scanner.nextLine());

            if (score < 4){
                excluded++;
                if (excluded == 2){
                    System.out.printf("%s has been excluded at %d grade", studentName, grade);
                    break;
                }

                continue;
            }

            sumScore = sumScore + score;
            grade++;
        }
        double averageScore = sumScore / 12;

        if (excluded < 2){
            System.out.printf("%s graduated. Average grade: %.2f", studentName , averageScore);
        }
    }
}
