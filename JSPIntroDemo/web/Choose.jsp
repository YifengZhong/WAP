<%-- 
    Document   : Choose
    Created on : Jun 5, 2017, 8:45:32 PM
    Author     : yf_zh
--%>

<%@page import="java.io.PrintWriter"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Choose</title>
    </head>
    <body>
        <form method='post' action='Choose'>
           <p>Is JSP cool?</p>

           <% String Choose= (String)request.getSession().getAttribute("radioJSPCool");
              if(Choose != null) {
                if(Choose.equals("1")) { %>
                    <input type='radio' value='1' name='radioJSPCool' checked><span>Yes</span><br/>
                    <input type='radio' value='0' name='radioJSPCool'><span>No</span><br/>
           <%        
                } else if(Choose.equals("0")) {
           %>
                    <input type='radio' value='1' name='radioJSPCool'><span>Yes</span><br/>
                    <input type='radio' value='0' name='radioJSPCool' checked><span>No</span><br/>
           <%         
                } 
              } else {
            %>
                  <input type="radio" value="1" name="radioJSPCool"><span>Yes</span><br/>
                  <input type="radio" value="0" name="radioJSPCool"><span>No</span><br/>
            <%
              }
            %>
              <input type='submit' name='btnSubmit' value='Submit'/>        
           
           <p>Is JSF way cool?</p>
           <% String ChooseJSFwayCool= (String)request.getSession().getAttribute("JSFwayCool");
              if(ChooseJSFwayCool != null) {
                if(ChooseJSFwayCool.equals("1")) { %>
                    <input type='radio' value='1' name='JSFwayCool' checked><span>Yes</span><br/>
                    <input type='radio' value='0' name='JSFwayCool'><span>No</span><br/>
            <%        
                } else if(ChooseJSFwayCool.equals("0")) {
           %>        
                    <input type='radio' value='1' name='JSFwayCool'><span>Yes</span><br/>
                    <input type='radio' value='0' name='JSFwayCool' checked><span>No</span><br/>   
           <%         
                } 
              } else {
            %>
                    <input type='radio' value='1' name='JSFwayCool'><span>Yes</span><br/>
                    <input type='radio' value='0' name='JSFwayCool'><span>No</span><br/>  
            <%
              }
            %>  
            <input type='submit' name='btnSubmit' value='Submit'/>  
            <p>Is the moon made of cheese?</p>
           <% String ChoosemoonCheese= (String)request.getSession().getAttribute("moonCheese");
              if(ChoosemoonCheese != null) {
                if(ChoosemoonCheese.equals("1")) { %>
                    <input type='radio' value='1' name='moonCheese' checked><span>Yes</span><br/>
                    <input type='radio' value='0' name='moonCheese'><span>No</span><br/>
            <%        
                } else if(ChoosemoonCheese.equals("0")) {
           %>        
                    <input type='radio' value='1' name='moonCheese'><span>Yes</span><br/>
                    <input type='radio' value='0' name='moonCheese' checked><span>No</span><br/>   
           <%         
                } 
              } else {
            %>
                    <input type='radio' value='1' name='moonCheese'><span>Yes</span><br/>
                    <input type='radio' value='0' name='moonCheese'><span>No</span><br/>  
            <%
              }
            %>  
            <input type='submit' name='btnSubmit' value='Submit'/>  
     
        </form>
    </body>
</html>
