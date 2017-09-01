/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package w4d1.model;

/**
 *
 * @author yf_zh
 */
public class Word {
    private String wordname;
    private String wordtype;
    private String definition;

    public Word(String wordname, String wordtype, String definition) {
        this.wordname = wordname;
        this.wordtype = wordtype;
        this.definition = definition;
    }

    public String getWordname() {
        return wordname;
    }

    public String getWordtype() {
        return wordtype;
    }

    public String getDefinition() {
        return definition;
    }

    public void setWordname(String wordname) {
        this.wordname = wordname;
    }

    public void setWordtype(String wordtype) {
        this.wordtype = wordtype;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
    
}
