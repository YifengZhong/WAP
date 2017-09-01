/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package w4d1.util;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author yf_zh
 */
public class DbUtil {
	private String dbUrl="jdbc:mysql://localhost:3306/entries";
	private String dbUserName="root";
	private String dbPassword="root";
	private String jdbcName="com.mysql.jdbc.Driver";  
        public Connection getCon() throws Exception{
            Class.forName(jdbcName);
            Connection con=DriverManager.getConnection(dbUrl,dbUserName,dbPassword);
            return con;
        }   
        public void closeCon(Connection con) throws Exception{
            if(con!=null){
                    con.close();
            }
	}
      
}
