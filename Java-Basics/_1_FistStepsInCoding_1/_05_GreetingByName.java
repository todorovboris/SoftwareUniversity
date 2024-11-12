package _1_FistStepsInCoding_1;
import java.util.Scanner;

public class _05_GreetingByName {
    public static void main (String[] args){
        Scanner scanner = new Scanner(System.in);

        // System.out.println("What is your name?");
        // System.out.print("My name is: ");
        String name = scanner.nextLine();
        // System.out.println(name);

        System.out.println("Hello, " + name + "!");

    }
}
