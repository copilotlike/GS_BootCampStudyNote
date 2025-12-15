package Chapter5;

import java.util.Scanner;

public class ch5_9 {
  public static void main(String[] args) {
    int studentNum = 0;
    int[] scores = null;
    int maxScore = 0;
    int sumScore = 0;
    float avgScore = 0;
    String select = "true";

    do {
      System.out.println("----------------------------------------------------");
      System.out.println("1.학생수 | 2.점수입력 | 3.점수리스트 | 4.분석 | 5.종료");
      System.out.println("----------------------------------------------------");
      System.out.print("선택>");
      Scanner sc = new Scanner(System.in);
      select = sc.nextLine();
      
      switch (select) {
        case "1" -> {
          System.out.print("학생수>");
          studentNum = sc.nextInt();
          scores = new int[studentNum];
        }
        case "2" -> {
          for (int i = 0; i < scores.length; i++) {
              System.out.print("Score[i]>");
              scores[i] = sc.nextInt();
          }
        }
        case "3" -> {
          for (int i = 0; i < scores.length; i++) {
            System.out.println("Score[" + i + "] = " + scores[i]);
          }
        }
        case "4" -> {
          for (int i =0; i < scores.length; i++) {
            if (maxScore < scores[i]) {
              maxScore = scores[i];
            }
          }
          System.out.println("최고 점수 : " + maxScore);

          int count=0;
          for (int i = 0; i < scores.length; i++) {
            sumScore += scores[i];
            count++;
          }
          avgScore = (float) (sumScore/scores.length);
          System.out.println("평균 점수 : "+ avgScore);
        }
        case "5" -> {
          select = "false";
          System.out.println("프로그램 종료");
        }
      }
    } while (select == "5");

  }
}
