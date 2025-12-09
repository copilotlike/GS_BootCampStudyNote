package inter_p;

/*
스타크래프트를 구현하세요

scv -4기를 이용하여 작업
커맨드센터 : 미네랄 400
팩토리 : 미네랄 200, 가스 100
스타포트 : 미네랄 150, 가스 100

scv 1회 획득량  미네랄 : 8, 가스 : 8


커맨드 센터 --2 짓기
스타포트-1 짓기 1  수리
팩토리-2 짓기
미네랄-500
탱크-2대 수리
탱크 타기 -3
저그 공격 : 5마리


각 작업간 log 기록을 남기고
각 scv 의 작업결과와
전체 상황 log를 기록하세요
*/

interface build {
	void commandCenter();
}

interface repair {
	void repairTank();
}

interface takeAVehicle {
	void takeTank();
}

interface atteckEnermy {
	void zurg();
}

interface mining {
	int resourceOfMineral();

	int resourceOfGas();
}

interface SCV extends build, repair, takeAVehicle, atteckEnermy, mining {

}

class ScvTechnic implements SCV {
	String name;
	int mineral;
	int gas;

	ScvTechnic(String name) {
		this.name = name;
	}

	@Override
	public void commandCenter() {
		System.out.println(this.name + " is building Command Center");
	}

	@Override
	public void takeTank() {
		System.out.println(this.name + " is taking Tank");
	}
	
	@Override
	public void repairTank() {
		System.out.println(this.name + " is repairing Tank");
	}

	@Override
	public void zurg() {
		System.out.println(this.name + " is attacking Zurg");
	}

	@Override
	public int resourceOfMineral() {
		return 8;
	}

	@Override
	public int resourceOfGas() {
		return 8;
	}

}

class ScvLog {
	String techName;
	int buildData = 0;
	int repairDate = 0;
	int attackData = 0;
	int resourceData = 0;

	ScvLog(String techName, int buildData, int repairDate, int attackData, int resourceData) {
		// TODO 자동 생성된 생성자 스텁
		this.techName = techName;
		this.buildData = buildData;
		this.repairDate = repairDate;
		this.attackData = attackData;
		this.resourceData = resourceData;
	}
}

//abstract class Terran implements SCV {
//	public Terran(String name) {
//		// TODO 자동 생성된 생성자 스텁
//	}
//
//	abstract void build();
//
//	abstract void repair();
//
//	abstract void takeAVehicle();
//
//	abstract void atteckEnermy();
//
//	abstract int mining();
//
//}

public class StarCraft {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		ScvTechnic [] scvTechnics = {
			new ScvTechnic("건설"),
			new ScvTechnic("타기"),
			new ScvTechnic("채굴"),
			new ScvTechnic("수리"),
			new ScvTechnic("공격"),
		};

		scvTechnics[0].commandCenter();
		scvTechnics[1].takeTank();
		scvTechnics[4].zurg();
		scvTechnics[3].repairTank();
		scvTechnics[2].resourceOfMineral();
		scvTechnics[2].resourceOfGas();
	}

}
