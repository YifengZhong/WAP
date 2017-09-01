/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package w4d1.util;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletResponse;
/**
 *
 * @author yf_zh
 */
public class ResponseUtil {
	public static void write(Object o,HttpServletResponse response)throws Exception{
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out=response.getWriter();
		out.println(o.toString());
		out.flush();
		out.close();
	}    
}
