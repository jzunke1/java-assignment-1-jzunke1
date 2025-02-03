package edu.wctc;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        System.out.println("Preference Quiz");
        System.out.println("---------------");

        String[] prompts = {
                "Do you prefer mild or spicy? (0 for mild, 1 for spicy): ",
                "Do you prefer tea or coffee? (0 for tea, 1 for coffee): ",
                "Do you prefer breakfast or brunch? (0 for breakfast, 1 for brunch): ",
                "Do you prefer summer or winter? (0 for summer, 1 for winter): ",
                "Do you prefer paper or plastic? (0 for paper, 1 for plastic): "
        };
        int[] userInput = new int[prompts.length];
        boolean runAgain = true;
        Scanner scanner = new Scanner(System.in);

        while (runAgain) {
            int score = 0;
            for (int i = 0; i < prompts.length; i++) {
                System.out.print(prompts[i]);
                userInput[i] = scanner.nextInt();
                score += userInput[i];
            }

            printPersonalityMessage(score);

            System.out.print("Do you want to run the program again? (1 for yes, any other key for no): ");
            runAgain = scanner.nextInt() == 1;
        }
    }

    private static void printPersonalityMessage(int score) {
        if (score < 3) {
            System.out.println("You prefer life to be calm and organized.");
        } else if (score == 3) {
            System.out.println("You prefer a good balance in life.");
        } else {
            System.out.println("You prefer life to be spontaneous and active.");
        }
    }


}