package _1_FistStepsInCoding_1;
import java.util.Scanner;

public class _06_ConcatenateData {
    public static void main(String[] args){
    Scanner scanner = new Scanner(System.in);

    //    System.out.print("What is your first name: ");
        String firstName = scanner.nextLine();

    //    System.out.print("What is your last name: ");
        String lastName = scanner.nextLine();

    //    System.out.print("How old are you: ");
        int age = Integer.parseInt(scanner.nextLine());

    //    System.out.print("Where do you live: ");
        String town = scanner.nextLine();


        System.out.printf("You are %s %s, a %d-years old person from %s.", firstName, lastName, age, town);


    }
}
