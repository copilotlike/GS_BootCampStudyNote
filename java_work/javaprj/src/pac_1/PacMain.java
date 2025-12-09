package pac_1;

//			클래스내부		같은 패키지 	다른패키지,자손클래스		   전체

//public			o			o				o				o
//protected		o			o				o
//default		o			o
//private		o

/*
 * 우선순위
 * 1. 선언 및 생성시 직접명시
 * pac.pac_1.CCC p1c = new pac.pac_1.CCC();
 * 
 * 2. import 시 클래스 직접호출
 *  import pac.pac_2.CCC;
 *  
 * 3. 같은 패키지 내 클래스 호출
 * 
 * 4. import 시 패키지내 클래스 사용 호출
 * import pa_2.*;
 * 
 */

import pac_2.CCC;
import pac_1.*;
//import pac_2.EEE; //The type pac_2.EEE is not visible
//다른 패키지의 기본 클래스 import 불가;
//import pac_2.FFF;
import pac_2.*; //pac_2의 접근 가능한 모든 클래스 허용

class AAA {
	String a = "p1.AAA.a";
	public String b;
	private String d = "p1.AAA.private_d";

	void mm1() {
		System.out.println("p1.AAA.mm1()실행");
	}

	private void mm4() {
		System.out.println("p1.AAA.private_mm4() 실행");
	}

	void meth() {
		System.out.println("AAA.meth 시작 ------------");
		System.out.println(a + "," + d);
		mm1();
		mm4();
		System.out.println("AAA.meth 끝 ------------");
	}
}

public class PacMain {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		System.out.println("메인시작 -------");

		AAA pla = new AAA();
		BBB plb = new BBB();// 같은 패키지 내 정의된 클래스 사용가능
		pac_1.CCC p1c = new pac_1.CCC();// 다른 패키지의 클래스 사용시 import 필요
		CCC p2c = new CCC();
		FFF p2f = new FFF();

		System.out.println("pla.a : " + pla.a);
		pla.mm1();
		System.out.println("pla.a : " + pla.a);
		plb.mm1();

		// private explain
//		System.out.println("pla.a : " + pla.d);
//		plb.mm4();
		pla.meth();

		System.out.println("p1c : " + p1c);
		System.out.println("plc.a : " + pla.a); // 다른패키지 클래스의 기본 멤버접근 불가
		p2c.mm1();
		System.out.println("plc.b : " + pla.b); // 다른패키지 클래스의 public 멤버접근 불가
		p2c.mm2();

		System.out.println("p2c : " + p2c);
		System.out.println("p2c.a : " + p2c.a); // 다른패키지 클래스의 기본 멤버접근 불가
		p2c.mm1();
		System.out.println("p2c.b : " + p2c.b); // 다른패키지 클래스의 public 멤버접근 가능
		p2c.mm2();
		System.out.println("p2f.b : " + p2f.b); // 다른패키지 클래스의 public 멤버접근 가능
		p2f.mm2();

		GChild gc = new GChild();
//		System.out.println("gc.a :"+ gc.a);
		System.out.println("gc.a :" + gc.b); // public
//		System.out.println("gc.a :"+ gc.c); //protect
//		System.out.println("gc.a :"+ gc.d); //private

//		gc.mm1();
		gc.mm2();
//		gc.mm3();
//		gc.mm4();//private-> not visible.
		gc.meth();
	}

}
