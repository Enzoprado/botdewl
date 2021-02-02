@echo off
Title Dragon Resources Bot Menu
goto :menu
color 09


:menu
color 09
echo.  __________________________________________________________
echo.                Dragon Resources Menu                       
echo.    DDDDDDDDDDDDDD            RRRRRRRRRRRRRR                
echo.    D             D           R             R               
echo.    D    DDDDD     D          R  RRRRRR      R              
echo.    D    D    D     D         R  R     R      R             
echo.    D    D      D     D       R  RRRRRRR     R              
echo.    D    D       D     D      R            RR               
echo.    D    D      D    D        R     R       R               
echo.    D    DDDDDD     D         R     R R       R             
echo.    D             D           R     R   R       R           
echo.    D           D             R     R      R      R           
echo.    DDDDDDDDDDD               RRRRRRR        RRRRRRR        
echo. ___________________________________________________________
echo.                                                           
echo.             1 - Ligar Bot                                 
echo.             2 - Instalar Recursos Pro Bot                 
echo.             3 - Sair do Menu                              
echo. __________________________________________________________
echo.
set /p choice=Digite uma opcao:
if '%choice%'=='1' goto :iniciarbot
if '%choice%'=='2' goto :instalarbot
if '%choice%'=='3' goto :sair 
:iniciarbot
cls
echo. ___________________________________________________________

node .

pause .

:sair
exit

:instalarbot
npm install