/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package w4d1;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import w4d1.dao.WordQueryDao;
import w4d1.util.DbUtil;
import w4d1.model.Word;



/**
 *
 * @author yf_zh
 */
public class dictServlet extends HttpServlet {
    
    private WordQueryDao wordQueryDao=new WordQueryDao();
    private DbUtil dbUtil = new DbUtil();

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("in do Get!");
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String word = request.getParameter("word");
        JSONObject jsonObject=new JSONObject();
        PrintWriter out=response.getWriter();  
        
        
        Connection con=null;
        try {
            con=dbUtil.getCon();
            List<Word> wordlist=wordQueryDao.showWordQueryList(con, word);
            jsonObject.put("wordlist", wordlist);
            out.println(jsonObject);
            out.flush();
            out.close();
        } catch (Exception e) {
          e.printStackTrace();  
        }

    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
