package Chapter4;

import java.util.Scanner;

public class ch4_7 {
  public static void main(String[] args) {
    int select =0, balance = 0 , deposit = 0 ,withdraw = 0; 
    do {
      System.out.println("-------------------------------");
      System.out.println("1.예금 | 2.출금 | 3.잔고 | 4.종료");
      System.out.println("-------------------------------");
      System.out.print("선택> ");
      Scanner sc = new Scanner(System.in);

      select = sc.nextInt();
      switch (select) {
        case 1 -> {
          System.out.print("예금액> ");
          deposit = sc.nextInt();
          balance += deposit;
        }
        case 2 -> {
          System.out.print("출금액> ");
          withdraw = sc.nextInt();
          balance -= withdraw;
        }
        case 3 -> {
          System.out.print("잔고> ");
          System.out.println(balance);
        }
        case 4 -> {
          System.out.print("프로그램 종료");
          break;
        }
        default -> {
          System.out.println("잘못된 선택입니다.");
        }
      }
    } while (select != 4);
  }
}
