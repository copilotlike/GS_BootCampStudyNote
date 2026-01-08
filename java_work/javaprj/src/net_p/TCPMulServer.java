package net_p;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Collections;

public class TCPMulServer {
	ArrayList<DataOutputStream> list;

	TCPMulServer() throws Exception {
		list = new ArrayList<DataOutputStream>();

		Collections.synchronizedList(list);

		ServerSocket server = new ServerSocket(7777);

		while (true) {
			new TCPMulRecive(server.accept()).start();
		}
	}

	void sendToAll(String msg) {
		list.stream().forEach(dd -> {
			try {
				dd.writeUTF(msg);
			} catch (IOException e) {
				// TODO 자동 생성된 catch 블록
				e.printStackTrace();
			}
		});
	}

	class TCPMulRecive extends Thread {
		String name;
		DataOutputStream dos;
		DataInputStream dis;

		public TCPMulRecive(Socket socket) {
			try {
				name = "[" + socket.getInetAddress() + "]";
				dos = new DataOutputStream(socket.getOutputStream());
				dis = new DataInputStream(socket.getInputStream());
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		@Override
		public void run() {
			try {
				sendToAll(name + "입장");
				list.add(dos);
				sendToAll("접속자 수 : " + list.size());

				while (dis!=null) {
					sendToAll(dis.readUTF());
				}
			} catch (Exception e) {
				// TODO: handle exception
			} finally {
				list.remove(dos);
				sendToAll(name + "퇴장");
			}
		}

	}


	public static void main(String[] args) throws Exception {
		// TODO 자동 생성된 메소드 스텁
		new TCPMulServer();
	}

}
