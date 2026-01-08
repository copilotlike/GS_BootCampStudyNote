package lambda_p;

import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Collectors;

public class TransformTooBox {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁

		int[] arr1 = { 33, 44, 11, 77, 22, 33, 55, 11, 88, 22 };
		String name = "장동건, 장서건, 장남건, 장북건" ;
		
		

//				java 16 이전
		List<Integer> list1 = Arrays.stream(arr1).boxed() // xxxStream -> Stream<xxx> 변환
															// 기본형(전용) stream -> 객체 Stream
				.collect(Collectors.toList());

		System.out.println("collec6t : " + list1);

//				java 16 이후
		list1 = Arrays.stream(arr1).boxed().toList();

		System.out.println("toList : " + list1);

		Set<Integer> set1 = Arrays.stream(arr1).boxed().collect(Collectors.toSet());

		System.out.println("Collectors.toSet : " + set1);

		Set<Integer> set2 = Arrays.stream(arr1).boxed()
//						.collect(Collectors.toCollection(()->new LinkedHashSet<Integer>()));
				// 아래와 같음.
				.collect(Collectors.toCollection(LinkedHashSet<Integer>::new));

		System.out.println("toCollection(linkedHashSet) : " + set2);

		// TreeSet-오름차순;
		set2 = Arrays.stream(arr1).boxed().collect(Collectors.toCollection(TreeSet::new));

		System.out.println("toCollection(TreeSet) : " + set2);

		// TreeSet-내림차순;
		set2 = Arrays.stream(arr1).boxed()
				.collect(Collectors.toCollection(() -> new TreeSet(Comparator.reverseOrder())));

		System.out.println("tTreeSet(Comparator.reverseOrder()) : " + set2);

	}

}
