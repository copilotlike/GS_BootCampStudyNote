package lambda_p;

import java.util.Arrays;

public class ReduceMain {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		int [] arr = {22,55,33,88,77,44};
		int rr = Arrays.stream(arr).sum();
		Arrays.stream(arr);
		
		//수식으로 원하는 대로 처리
		
		rr = Arrays.stream(arr).reduce((a,b)-> (a+b)*2).getAsInt();
		System.out.println("sum : "+rr);
		
		rr=Arrays.stream(arr).reduce((a,b)->{
			int res = (a-b)*2;
			System.out.println(a+","+b+":"+res);
			return res;
			}).getAsInt();
		System.out.println("sum: "+rr);
		
		arr = new int[] {};
		rr = (int) Arrays.stream(arr).average().orElse(0);
		System.out.println("orElse "+rr);
		
//		double rr = Arrays.stream(arr).reduce(2468, (a,b)->a).getAsint();
//		System.out.println("orElse "+rr);
		
		//초기값 : 연산 전에 주는 값 ==> 2468 + arr의 원소율
		rr = Arrays.stream(arr).reduce(2468, (a,b)->a);
		System.out.println("reduce 초기값 "+rr);
		
		
//		arr = new int[] {66,45,2,78,9,12,19,88,34};
//		rr = Arrays.stream(arr).reduce(0, (a,b)->{
//			int res = b%2==0? a+b : a;
//			
//		});
		/*
		   66,45,2,78,9,12,19,88,34
		   
		   reduce를 이용한 짝수들의 합을 구하세요
		   단 filter 사용금지
		 * 
		 * 
		 * */
	}

}
