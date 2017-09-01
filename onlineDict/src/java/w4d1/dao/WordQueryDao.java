/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package w4d1.dao;
import java.sql.Connection;
import java.util.ArrayList;
import w4d1.model.Word;
import java.util.List;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author yf_zh
 */
public class WordQueryDao {
    public List<Word> showWordQueryList(Connection con,String wordName)throws Exception{
        List<Word> wordList = new ArrayList<Word>();
        String sql = "select * from entries where word=?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, wordName);
        ResultSet rs = pstmt.executeQuery();
        while (rs.next()) { 
            String wordname2 = rs.getString("word");      
            String wordtype = rs.getString("wordtype");      
            String definition = rs.getString("definition");  
            Word word=new Word(wordname2, wordtype, definition);
            wordList.add(word);
        }
        return wordList;        
    }
}
