/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package w4d1.util;

/**
 *
 * @author yf_zh
 */
public class StringUtil {
    public static boolean isEmpty(String str){
        if(str==null||"".equals(str.trim())){
                return true;
        }else{
                return false;
        }
    }
    public static boolean isNotEmpty(String str){
        if((str!=null)&&!"".equals(str.trim())){
                return true;
        }else{
                return false;
        }
    }    
}
