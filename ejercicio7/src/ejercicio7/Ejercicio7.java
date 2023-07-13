package ejercicio7;
import java.util.ArrayList;
import java.util.Scanner;


public class Ejercicio7 {
	
	public static int minutosSemana = 24*60*5;
	public static int minutosXDia = 24*60;
	public static int minutosViernes = 60*15;
	
	public static ArrayList<String> dias = new ArrayList<String>();

	public static void main(String[] args) {
		dias.add("lunes");
		dias.add("martes");
		dias.add("miercoles");
		dias.add("jueves");
		dias.add("viernes");
		Scanner entrada = new Scanner(System.in);
		System.out.println("Seleccione un día de Lunes a Viernes");
		String diaSemana = entrada.nextLine().toLowerCase();
		System.out.println("Introduzca una hora de 01 al 23");
		String hora = entrada.nextLine();
		System.out.println("Introduzca los minutos del 01 al 59");
		String minuto = entrada.nextLine();
		entrada.close();
		System.out.println(cuantoFalta(obtenerDia(diaSemana), hora,minuto));
		
	}
	
	//*************************
	public static int obtenerDia(String respuesta) {
		int dia=-1;
		for(int i=0; i<dias.size();i++) {
			if(dias.get(i).equals(respuesta)) {
				dia=i;
			}
		}
		if(dia==-1) {
			System.out.println("Entrada inválida");
		}
		return dia;
	}
	//*************************
	public static String cuantoFalta(int indice, String hora, String minuto) {
		String respuesta ="";
		int intHora = Integer.parseInt(hora);
		int intMinuto = Integer.parseInt(minuto);
		int diasQueFaltan = 3 - indice;
		
		int tiempoParaAcabarDia = (24*60)-(intMinuto+(intHora*60)); 
		
		int diasAMinutos = tiempoParaAcabarDia+(diasQueFaltan*minutosXDia)+minutosViernes;
		respuesta = String.valueOf(diasAMinutos);		
		return respuesta;
	}

}
