     function class1() {
        document.write (`
      <category name="Class1"colour="%{BKY_PROCEDURES_HUE}">
        <block type="screenstart"></block>      
        <block type="getscreen"></block>
        <block type="setcaption"></block>
        <block type="events"></block>
        <block type="waitevent"></block>
        <block type="drawsurfacetext"></block>
        <block type="math_number">
          <field name="NUM">123</field>
        </block>
        <block type="text"></block>
        <block type="text_print">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="colour_picker"></block>
      <sep></sep>
      </category>       
        `)
     }
     function class2() {
        document.write (`
      <category name="Class2"colour="%{BKY_PROCEDURES_HUE}">   
         <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
           <block type="loadimage"></block>
           <block type="drawimage"></block>      
         </category>
         <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
           <block type="getscreen"></block>
           <block type="setcaption"></block>
           <block type="fillsurface"></block>
           <block type="screenstart"></block>           
         </category>      
         <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
           <block type="events"></block>
           <block type="waitevent"></block>
         </category>
         <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
           <block type="text"></block>    
           <block type="text_print">
             <value name="TEXT">
               <shadow type="text">
                 <field name="TEXT">abc</field>
               </shadow>
             </value>
           </block>
           <block type="drawsurfacetext"></block>      
         </category>
         <category name="Values" colour="%{BKY_COLOUR_HUE}">
           <block type="math_number">
             <field name="NUM">123</field>
           </block>
           <block type="colour_picker"></block>
           <block type="position"></block>    
         </category> 
      </category>         
        `)
     }
     function class3() {
        document.write (`
      <category name="Class3 Display an Image"colour="%{BKY_PROCEDURES_HUE}">   
         <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
           <block type="loadimage"></block>
           <block type="drawimage"></block>      
         </category>
         <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
           <block type="screenstart"></block>         
           <block type="getscreen"></block>
           <block type="setcaption"></block>
           <block type="fillsurface"></block>
           <block type="drawline"></block>         
         </category>      
         <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
           <block type="events"></block>
           <block type="waitevent"></block>
         </category>
         <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
           <block type="text"></block>    
           <block type="text_print">
             <value name="TEXT">
               <shadow type="text">
                 <field name="TEXT">abc</field>
               </shadow>
             </value>
           </block>
           <block type="drawsurfacetext"></block>      
         </category>
         <category name="Values" colour="%{BKY_COLOUR_HUE}">
           <block type="math_number">
             <field name="NUM">123</field>
           </block>
           <block type="colour_picker"></block>
           <block type="position"></block>    
         </category> 
      </category>         
        `)
     }
     function class4() {
        document.write (`
      <category name="Class4 Read wasd keys"colour="%{BKY_PROCEDURES_HUE}">  
         <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
           <block type="loadimage"></block>
           <block type="drawimage"></block>      
         </category>
         <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
          <block type="screenstart"></block>         
           <block type="getscreen"></block>
           <block type="setcaption"></block>
           <block type="fillsurface"></block>
           <block type="drawline"></block>         
         </category>      
         <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
           <block type="events"></block>
           <block type="waitevent"></block>
           <block type="pollevent"></block>
           <block type="eventtype"></block>
           <block type="eventkey"></block>
         </category>
         <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
           <block type="text"></block>    
           <block type="text_print">
             <value name="TEXT">
               <shadow type="text">
                 <field name="TEXT">abc</field>
               </shadow>
             </value>
           </block>
           <block type="drawsurfacetext"></block>      
         </category>
         <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
           <block type="controls_repeat_ext">
             <value name="TIMES">
               <shadow type="math_number">
                 <field name="NUM">10</field>
               </shadow>
             </value>
           </block>
           <block type="controls_whileUntil"></block>
           <block type="controls_for">
             <value name="FROM">
               <shadow type="math_number">
                 <field name="NUM">1</field>
               </shadow>
             </value>
             <value name="TO">
               <shadow type="math_number">
                 <field name="NUM">10</field>
               </shadow>
             </value>
             <value name="BY">
               <shadow type="math_number">
                 <field name="NUM">1</field>
               </shadow>
             </value>
           </block>
           <block type="controls_forEach"></block>
           <block type="controls_flow_statements"></block>
         </category>
         <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
           <block type="logic_boolean"></block>
           <block type="controls_if"></block>
           <block type="logic_compare"></block>
           <block type="logic_operation"></block>
           <block type="logic_negate"></block>
           <block type="logic_null"></block>
           <block type="logic_ternary"></block>
         </category>       
         <category name="Values" colour="%{BKY_COLOUR_HUE}">
           <block type="math_number">
             <field name="NUM">123</field>
           </block>
           <block type="colour_picker"></block>
           <block type="position"></block>   
           <block type="isblack"></block>             
         </category> 
      </category>         
        `)
     }
     function class5() {
        document.write (`
      <category name="Class5 Adding rpg blocks"colour="%{BKY_PROCEDURES_HUE}">  
         <category name="rpg" colour="%{BKY_COLOUR_HUE}">
           <block type="wasdpressedreleased"></block>
           <block type="getwasdoffset"></block>
         </category>
         <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
           <block type="loadimage"></block>
           <block type="drawimage"></block>      
         </category>
         <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
           <block type="screenstart"></block>         
           <block type="getscreen"></block>
           <block type="setcaption"></block>
           <block type="fillsurface"></block>
           <block type="drawline"></block>         
         </category>      
         <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
           <block type="events"></block>
           <block type="waitevent"></block>
           <block type="pollevent"></block>
           <block type="eventtype"></block>
           <block type="eventkey"></block>
         </category>
         <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
           <block type="text"></block>    
           <block type="text_print">
             <value name="TEXT">
               <shadow type="text">
                 <field name="TEXT">abc</field>
               </shadow>
             </value>
           </block>
           <block type="drawsurfacetext"></block>      
         </category>
         <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
           <block type="controls_repeat_ext">
             <value name="TIMES">
               <shadow type="math_number">
                 <field name="NUM">10</field>
               </shadow>
             </value>
           </block>
           <block type="controls_whileUntil"></block>
           <block type="controls_for">
             <value name="FROM">
               <shadow type="math_number">
                 <field name="NUM">1</field>
               </shadow>
             </value>
             <value name="TO">
               <shadow type="math_number">
                 <field name="NUM">10</field>
               </shadow>
             </value>
             <value name="BY">
               <shadow type="math_number">
                 <field name="NUM">1</field>
               </shadow>
             </value>
           </block>
           <block type="controls_forEach"></block>
           <block type="controls_flow_statements"></block>
         </category>
         <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
           <block type="logic_boolean"></block>
           <block type="controls_if"></block>
           <block type="logic_compare"></block>
           <block type="logic_operation"></block>
           <block type="logic_negate"></block>
           <block type="logic_null"></block>
           <block type="logic_ternary"></block>
         </category>       
         <category name="Values" colour="%{BKY_COLOUR_HUE}">
           <block type="math_number">
             <field name="NUM">123</field>
           </block>
           <block type="colour_picker"></block>
           <block type="position"></block>   
           <block type="isblack"></block>             
         </category> 
      </category>         
        `)
     }
     function class6() {
        document.write (`
      <category name="Class6 Sprites"colour="%{BKY_PROCEDURES_HUE}">  
         <category name="Sprites" colour="%{BKY_COLOUR_HUE}">
           <block type="makesprite"></block>
           <block type="drawsprite"></block>
           <block type="locatesprite"></block>           
           <block type="spritecolliderect"></block>         
         </category>
         <category name="rpg" colour="%{BKY_COLOUR_HUE}">
           <block type="wasdpressedreleased"></block>
           <block type="getwasdoffset"></block>
         </category>
         <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
           <block type="loadimage"></block>
           <block type="drawimage"></block>      
         </category>
         <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
           <block type="screenstart"></block>         
           <block type="getscreen"></block>
           <block type="setcaption"></block>
           <block type="fillsurface"></block>
           <block type="drawline"></block>         
         </category>      
         <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
           <block type="events"></block>
           <block type="waitevent"></block>
           <block type="pollevent"></block>
           <block type="eventtype"></block>
           <block type="eventkey"></block>
         </category>
         <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
           <block type="text"></block>    
           <block type="text_print">
             <value name="TEXT">
               <shadow type="text">
                 <field name="TEXT">abc</field>
               </shadow>
             </value>
           </block>
           <block type="drawsurfacetext"></block>      
         </category>
         <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
           <block type="controls_repeat_ext">
             <value name="TIMES">
               <shadow type="math_number">
                 <field name="NUM">10</field>
               </shadow>
             </value>
           </block>
           <block type="controls_whileUntil"></block>
           <block type="controls_for">
             <value name="FROM">
               <shadow type="math_number">
                 <field name="NUM">1</field>
               </shadow>
             </value>
             <value name="TO">
               <shadow type="math_number">
                 <field name="NUM">10</field>
               </shadow>
             </value>
             <value name="BY">
               <shadow type="math_number">
                 <field name="NUM">1</field>
               </shadow>
             </value>
           </block>
           <block type="controls_forEach"></block>
           <block type="controls_flow_statements"></block>
         </category>
         <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
           <block type="logic_boolean"></block>
           <block type="controls_if"></block>
           <block type="logic_compare"></block>
           <block type="logic_operation"></block>
           <block type="logic_negate"></block>
           <block type="logic_null"></block>
           <block type="logic_ternary"></block>
         </category>       
         <category name="Values" colour="%{BKY_COLOUR_HUE}">
           <block type="math_number">
             <field name="NUM">123</field>
           </block>
           <block type="colour_picker"></block>
           <block type="position"></block>   
           <block type="isblack"></block>             
         </category> 
         <category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">
           <block type="lists_create_with">
             <mutation items="0"></mutation>
           </block>
           <block type="lists_create_with"></block>
         </category>
         <category name="Time" colour="%{BKY_PROCEDURES_HUE}">
           <block type="currenttime"></block>
           <block type="elapsedtime"></block>
           <block type="wait"></block>
         </category>
      </category>         `)
     }
     function class7() { 
        document.write(`
<category name="Class7 Functions "colour="%{BKY_PROCEDURES_HUE}">  
   <block type="debugcode"></block>
   <category name="Position" colour="%{BKY_COLOR_HUE}">
      <block type="mouseposition"></block>
      <block type="collidepoint"></block>   
      <block type="makerectangle"></block>      
   </category>
   <category name="Sprites" colour="%{BKY_COLOUR_HUE}">
     <block type="spriterect"></block>
     <block type="makesprite"></block>
     <block type="drawsprite"></block>
     <block type="locatesprite"></block>           
     <block type="spritecolliderect"></block>         
   </category>
   <category name="rpg" colour="%{BKY_COLOUR_HUE}">
     <block type="wasdpressedreleased"></block>
     <block type="getwasdoffset"></block>
   </category>
   <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
     <block type="loadimage"></block>
     <block type="drawimage"></block>      
   </category>
   <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
     <block type="screenstart"></block>   
     <block type="getscreen"></block>
     <block type="setcaption"></block>
     <block type="fillsurface"></block>
     <block type="drawline"></block>         
   </category>      
   <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
     <block type="events"></block>
     <block type="waitevent"></block>
     <block type="pollevent"></block>
     <block type="eventtype"></block>
     <block type="eventkey"></block>
   </category>
   <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
     <block type="text"></block>    
     <block type="text_print">
       <value name="TEXT">
         <shadow type="text">
           <field name="TEXT">abc</field>
         </shadow>
       </value>
     </block>
     <block type="drawsurfacetext"></block>      
   </category>
   <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
     </block>
     <block type="controls_whileUntil"></block>
     <block type="controls_for">
       <value name="FROM">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
       <value name="TO">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
       <value name="BY">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
     </block>
     <block type="controls_forEach"></block>
     <block type="controls_flow_statements"></block>
   </category>
   <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
     <block type="logic_boolean"></block>
     <block type="controls_if"></block>
     <block type="logic_compare"></block>
     <block type="logic_operation"></block>
     <block type="logic_negate"></block>
     <block type="logic_null"></block>
     <block type="logic_ternary"></block>
   </category>       
   <category name="Values" colour="%{BKY_COLOUR_HUE}">
     <block type="math_number">
       <field name="NUM">123</field>
     </block>
     <block type="colour_picker"></block>
     <block type="position"></block>   
     <block type="isblack"></block>             
   </category> 
   <category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">
     <block type="lists_create_with">
       <mutation items="0"></mutation>
     </block>
     <block type="lists_create_with"></block>
   </category>
   <category name="Time" colour="%{BKY_PROCEDURES_HUE}">
     <block type="currenttime"></block>
     <block type="elapsedtime"></block>
     <block type="wait"></block>
   </category>
   <category name="%{BKY_CATFUNCTIONS}" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>  
</category>  
`);
     } 
     
          function class8() { 
        document.write(`
<category name="Class8 Functions "colour="%{BKY_PROCEDURES_HUE}">  
   <block type="debugcode"></block>
   <category name="Position" colour="%{BKY_COLOR_HUE}">
      <block type="mouseposition"></block>
      <block type="collidepoint"></block>   
      <block type="makerectangle"></block>      
   </category>
   <category name="Sprites" colour="%{BKY_COLOUR_HUE}">
     <block type="spriterect"></block>
     <block type="makesprite"></block>
     <block type="drawsprite"></block>
     <block type="locatesprite"></block>           
     <block type="spritecolliderect"></block>         
     <block type="rotatesprite"></block>     
   </category>
   <category name="rpg" colour="%{BKY_COLOUR_HUE}">
     <block type="wasdpressedreleased"></block>
     <block type="getwasdoffset"></block>
   </category>
   <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
     <block type="loadimage"></block>
     <block type="drawimage"></block>      
   </category>
   <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
     <block type="screenstart"></block>
     <block type="getscreen"></block>
     <block type="setcaption"></block>
     <block type="fillsurface"></block>
     <block type="drawline"></block>         
   </category>      
   <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
     <block type="events"></block>
     <block type="waitevent"></block>
     <block type="pollevent"></block>
     <block type="eventtype"></block>
     <block type="eventkey"></block>
   </category>
   <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
     <block type="text"></block>    
     <block type="text_print">
       <value name="TEXT">
         <shadow type="text">
           <field name="TEXT">abc</field>
         </shadow>
       </value>
     </block>
     <block type="drawsurfacetext"></block>      
   </category>
   <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
     </block>
     <block type="controls_whileUntil"></block>
     <block type="controls_for">
       <value name="FROM">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
       <value name="TO">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
       <value name="BY">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
     </block>
     <block type="controls_forEach"></block>
     <block type="controls_flow_statements"></block>
   </category>
   <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
     <block type="logic_boolean"></block>
     <block type="controls_if"></block>
     <block type="logic_compare"></block>
     <block type="logic_operation"></block>
     <block type="logic_negate"></block>
     <block type="logic_null"></block>
     <block type="logic_ternary"></block>
   </category>       
   <category name="Values" colour="%{BKY_COLOUR_HUE}">
     <block type="math_number">
       <field name="NUM">123</field>
     </block>
     <block type="colour_picker"></block>
     <block type="position"></block>   
     <block type="isblack"></block>             
   </category> 
   <category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">
     <block type="lists_create_with">
       <mutation items="0"></mutation>
     </block>
     <block type="lists_create_with"></block>
   </category>
   <category name="Time" colour="%{BKY_PROCEDURES_HUE}">
     <block type="currenttime"></block>
     <block type="elapsedtime"></block>
     <block type="wait"></block>
   </category>
   <category name="%{BKY_CATFUNCTIONS}" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>  
</category>  
`);
     } 
     
               function class9() { 
        document.write(`
<category name="Class9 Dictionary Object "colour="%{BKY_PROCEDURES_HUE}">  
   <block type="debugcode"></block>
   <category name="Sound" colour="%{BKY_COLOR_HUE}">
      <block type="playsound"></block>
      <block type="mixerbusy"></block>
      <block type="stopsound"></block>
   </category>
   <category name="Dictionary" colour="%{BKY_COLOR_HUE}">
      <block type="setdictionary"></block>
      <block type="deletedictionary"></block>
      <block type="readdictionary"></block>   
   </category>
   <category name="Position" colour="%{BKY_COLOR_HUE}">
      <block type="mouseposition"></block>
      <block type="collidepoint"></block>   
      <block type="makerectangle"></block>      
   </category>
   <category name="Sprites" colour="%{BKY_COLOUR_HUE}">
     <block type="spriterect"></block>
     <block type="makesprite"></block>
     <block type="drawsprite"></block>
     <block type="locatesprite"></block>           
     <block type="spritecolliderect"></block>         
     <block type="rotatesprite"></block>     
   </category>
   <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
     <block type="loadimage"></block>
     <block type="drawimage"></block>      
   </category>
   <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
     <block type="screenstart"></block>
     <block type="getscreen"></block>
     <block type="setcaption"></block>
     <block type="fillsurface"></block>
     <block type="drawline"></block>         
   </category>      
   <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
     <block type="events"></block>
     <block type="waitevent"></block>
     <block type="pollevent"></block>
     <block type="eventtype"></block>
     <block type="eventkey"></block>
   </category>
   <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
     <block type="text"></block>    
     <block type="text_print">
       <value name="TEXT">
         <shadow type="text">
           <field name="TEXT">abc</field>
         </shadow>
       </value>
     </block>
     <block type="drawsurfacetext"></block>      
   </category>
   <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
     </block>
     <block type="controls_whileUntil"></block>
     <block type="controls_for">
       <value name="FROM">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
       <value name="TO">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
       <value name="BY">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
     </block>
     <block type="controls_forEach"></block>
     <block type="controls_flow_statements"></block>
   </category>
   <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
     <block type="logic_boolean"></block>
     <block type="controls_if"></block>
     <block type="logic_compare"></block>
     <block type="logic_operation"></block>
     <block type="logic_negate"></block>
     <block type="logic_null"></block>
     <block type="logic_ternary"></block>
   </category>       
   <category name="Values" colour="%{BKY_COLOUR_HUE}">
     <block type="math_number">
       <field name="NUM">123</field>
     </block>
     <block type="colour_picker"></block>
     <block type="position"></block>   
     <block type="isblack"></block>             
   </category> 
   <category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">
     <block type="lists_create_with">
       <mutation items="0"></mutation>
     </block>
     <block type="lists_create_with"></block>
   </category>
   <category name="Time" colour="%{BKY_PROCEDURES_HUE}">
     <block type="currenttime"></block>
     <block type="elapsedtime"></block>
     <block type="wait"></block>
   </category>
   <category name="%{BKY_CATFUNCTIONS}" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>  
</category>  
`);
     } 

               function class10() { 
        document.write(`
<category name="Class10 Object "colour="%{BKY_PROCEDURES_HUE}">  
   <block type="debugcode"></block>
   <category name="Sound" colour="%{BKY_COLOR_HUE}">
      <block type="playsound"></block>
      <block type="mixerbusy"></block>
      <block type="stopsound"></block>
   </category>
   <category name="Dictionary" colour="%{BKY_COLOR_HUE}">
      <block type="setdictionary"></block>
      <block type="deletedictionary"></block>
      <block type="readdictionary"></block>   
      <block type="countdictionary"></block>
   </category>
   <category name="Position" colour="%{BKY_COLOR_HUE}">
      <block type="mouseposition"></block>
      <block type="collidepoint"></block>   
      <block type="makerectangle"></block>      
   </category>
   <category name="Sprites" colour="%{BKY_COLOUR_HUE}">
     <block type="spriterect"></block>
     <block type="makesprite"></block>
     <block type="drawsprite"></block>
     <block type="locatesprite"></block>           
     <block type="spritecolliderect"></block>         
     <block type="rotatesprite"></block>     
     <block type="flipsurface"></block>     
   </category>
   <category name="Image" colour="%{BKY_PROCEDURES_HUE}">
     <block type="loadimage"></block>
     <block type="drawimage"></block> 
   </category>
   <category name="Surface" colour="%{BKY_PROCEDURES_HUE}">
     <block type="screenstart"></block>
     <block type="getscreen"></block>
     <block type="setcaption"></block>
     <block type="fillsurface"></block>
     <block type="drawline"></block>         
   </category>
   <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
     <block type="events"></block>
     <block type="waitevent"></block>
     <block type="pollevent"></block>
     <block type="eventtype"></block>
     <!block type="eventkey"><!/block>
     <block type="anykeypressed"></block>
     <block type="keypressed"></block>
   </category>
   <category name="%{BKY_CATTEXT}" colour="%{BKY_TEXTS_HUE}">
     <block type="text"></block>    
     <block type="text_print">
       <value name="TEXT">
         <shadow type="text">
           <field name="TEXT">abc</field>
         </shadow>
       </value>
     </block>
     <block type="drawsurfacetext"></block>      
   </category>
   <category name="%{BKY_CATLOOPS}" colour="%{BKY_LOOPS_HUE}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
     </block>
     <block type="controls_whileUntil"></block>
     <block type="controls_for">
       <value name="FROM">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
       <value name="TO">
         <shadow type="math_number">
           <field name="NUM">10</field>
         </shadow>
       </value>
       <value name="BY">
         <shadow type="math_number">
           <field name="NUM">1</field>
         </shadow>
       </value>
     </block>
     <block type="controls_forEach"></block>
     <block type="controls_flow_statements"></block>
   </category>
   <category name="%{BKY_CATLOGIC}" colour="%{BKY_LOGIC_HUE}">
     <block type="logic_boolean"></block>
     <block type="controls_if"></block>
     <block type="logic_compare"></block>
     <block type="logic_operation"></block>
     <block type="logic_negate"></block>
     <block type="logic_null"></block>
     <block type="logic_ternary"></block>
   </category>       
   <category name="Values" colour="%{BKY_COLOUR_HUE}">
     <block type="math_number">
       <field name="NUM">123</field>
     </block>
     <block type="colour_picker"></block>
     <block type="position"></block>   
     <block type="isblack"></block>             
   </category> 
   <category name="%{BKY_CATLISTS}" colour="%{BKY_LISTS_HUE}">
     <block type="lists_create_with">
       <mutation items="0"></mutation>
     </block>
     <block type="lists_create_with"></block>
   </category>
   <category name="Time" colour="%{BKY_PROCEDURES_HUE}">
     <block type="currenttime"></block>
     <block type="elapsedtime"></block>
     <block type="wait"></block>
   </category>
   <category name="%{BKY_CATFUNCTIONS}" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>  
</category>  
`);
     } 
