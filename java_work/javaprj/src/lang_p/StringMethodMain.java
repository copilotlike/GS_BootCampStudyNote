package lang_p;

import java.util.Iterator;

public class StringMethodMain {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		String a = "아기상어 뚜루루뚜루 aBCd EfG JavA 만세 ja 12a3a4";
		System.out.println(a);
		System.out.println(a.length());
		char ch = a.charAt(2);
		System.out.println(ch);
		
		String b = "a2023LSH";
		int yy =0;
		for (int i = 1; i < 4; i++) {
			
			yy*=10;
			int c = b.charAt(i)-'0';
			yy +=c;
			System.out.println(c + ","+ b.charAt(i)+","+yy);
		}
		
		String d = a.substring(7);
		System.out.println(d);
		d = a.substring(7,13);
		System.out.println(d);
		
		int pos = a.indexOf("a");
		System.out.println(pos);
		pos = a.indexOf("a",11);
		System.out.println(pos);
		pos = a.indexOf("a",12);
		System.out.println(pos);
		
		pos = a.indexOf("a",12,22);
		System.out.println(pos);
		pos = a.indexOf("a",12,21); //12-21
		System.out.println(pos);
		pos = a.indexOf("k");
		System.out.println(pos);
		pos = a.indexOf("av");
		System.out.println(pos);
		pos = a.indexOf("A");
		System.out.println(pos);
		
		pos = a.lastIndexOf("a");
		System.out.println(pos);
		pos = a.lastIndexOf("a",34);
//		public  int  lastIndexOf( 문자열  str, 정수 fromIndex);
//		public  int  lastIndexOf( 검색할부분 문자열, 정수 검색시작할 문자열);
		System.out.println(pos);
		
		String fff ="aasseedd.파일.최종.진짜.마지막.끝.수정.1.ppt";
		String pos1 = fff.substring(29,32);
		System.out.println(pos1);
		
		
		String fff1 ="aasseedd.파일.최종.진짜.마지막.끝.수정.1.ppt";
		pos = fff1.lastIndexOf(".");
		String ext = fff1.substring(pos+1);
		System.out.println(ext);
		
//		for (String string : fff.split(";")) {
//			System.out.println(string);
//		}
//		pos = fff.substring();
		
		
		System.out.println(a.contains("fG"));
		System.out.println(a.contains("나는무너"));
		System.out.println(a.startsWith("아기"));
		System.out.println(a.startsWith("상어"));
		System.out.println(a.endsWith("3a4"));
		System.out.println(a.endsWith("aBCd"));
		
		a = "농구,축구,배구,탁구, ,야구,족구";
		String [] arr = a.split(",");
		for (String tt : arr) {
			System.out.println(tt);
		}
		for (String tt : a.split(",-")) {
			System.out.println(tt);
		}
		System.out.println("-------------------------------");
		for (String tt : a.split(".")) {
			System.out.println(tt);
		}
		System.out.println("-------------------------------");
		for (String tt : a.split("[.]")) {
			System.out.println(tt);
		}
		System.out.println("-------------------------------");
		for (String tt : a.split("[.,-]")) {
			System.out.println(tt);
		}
		
		String [] arr2 = {"달리기","줄다리기","줄넘기","기러기"};
		d = String.join("연결",arr2);
		System.out.println(d);
		
		a = "아기상어 뚜루루뚜루 aBCd EfG JavA 만세 ja 12a3a4";
		d = a.replace(a, "에어");
		System.out.println(d);
		d = a.replaceAll(a, "에어");
		System.out.println(d);
		System.out.println(a.toLowerCase());
		System.out.println(a.toUpperCase());
		
		
		a = "레고";
		System.out.println(a.repeat(5));
		d = a.concat("높이"); 
		System.out.println(d);
		a = "      onop 12기     ";
		System.out.println(a+","+d.length());
	}

}
