package pac_1;

import pac_2.GGG;

public class GChild extends GGG {

	void meth() {
		System.out.println("GChild.meth 시작 ------------");

//		System.out.println("a :"+ a);
		System.out.println("b :" + b); // public 가능
		System.out.println("c :" + c); // protected 가능
		// System.out.println("d :"+ d); //private 접근 불가

//		mm1();
		mm2();
		mm3();
		// mm4(); //private 접근 불가

		System.out.println("GChild.meth 끝 ------------");
	}
}