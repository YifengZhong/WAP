/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mum.cs472;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author yf_zh
 */
public class ChooseServlet extends HttpServlet {
 protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException
 {
    RequestDispatcher dispatch = request.getRequestDispatcher("Choose.jsp");
    dispatch.forward(request, response);
 }

 protected void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException
 {
    String choice = request.getParameter("radioJSPCool");
    if (choice != null) {
        System.out.println ("choice= "+ choice);
        request.getSession().setAttribute("radioJSPCool", choice);
    } else {
        System.out.println("No choice made");
    }
    String choice1 = request.getParameter("JSFwayCool");
    if (choice1 != null) {
        System.out.println ("choice= "+ choice1);
        request.getSession().setAttribute("JSFwayCool", choice1);
    } else {
        System.out.println("No choice made");
    }   
    String choice2 = request.getParameter("moonCheese");
    if (choice2 != null) {
        System.out.println ("choice= "+ choice2);
        request.getSession().setAttribute("moonCheese", choice2);
    } else {
        System.out.println("No choice made");
    } 
    RequestDispatcher dispatch = request.getRequestDispatcher("Choose.jsp");
    dispatch.forward(request, response);
 }


}
