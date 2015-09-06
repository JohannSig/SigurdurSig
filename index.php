<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="description" content='Lögfræðiþjónusta Sigurðar Sigurjónssonar hrl. ehf, Kringlunni, Reykjavík. Sigurður Sigurjónsson lögfræðingur og hæstaréttar-lögmaður í Reykjavík.' />
        <title>Sigurður Sigurjónsson hrl.</title>
        <LINK REL="StyleSheet" HREF="css/default.css" TYPE="text/css" MEDIA="screen" >        
        <script type="text/javascript" src="scripts/jquery-1.7.2.js"></script>                
    </head>
    
    <body>
        
        <script>
            
            $j = jQuery.noConflict();
            $j.ajaxSetup({ 
                cache: false
            });           
            
            function setContentTo(menuItem) {
                var contentItem = $j(menuItem).attr('id').substring('menu_'.length, $j(menuItem).attr('id').length);
                $j('.menuItem').removeClass('selectedMenuItem').filter('#menu_' + contentItem).addClass('selectedMenuItem');
                $j('.content').hide().filter('#content_' + contentItem).show();
            }
        </script>

        <div id="outerContainer" style="border-radius: 4px;">
        
            <div id="innerContainer">
                 
                <div id="header" style="border-radius: 4px;"><!--
                 --><div class="inline threeQuarters"><div id="headerBanner"><img class="middle" src="images/company_logo.png" /><div class="inline middle">Lögfræðiþjónusta <br/>Sigurðar Sigurjónssonar hrl.</div></div></div><!--
                 --><div class="inline" style="position: relative; vertical-align: top; height:100%;">
                     <div id="headerLawyer">
                         <div id="headerLawyerPic"></div>
                         <div id="headerLawyerLinks">
                             <a href="mailto:sigurdursig@gmail.com"><img title="Smelltu hér til að senda tölvupóst" src="images/icon_gmail_small.gif" /></a>
                             <a href="http://www.linkedin.com/profile/view?id=85139420"><img title="Sigurður á LinkedIn" src="images/linkedin-icon-small.jpg" /></a>
                             <a href="http://www.facebook.com/SigurdurSighrl"><img title="Sigurður á Facebook" src="images/small-facebook-icon.png" /></a>
                         </div>
                     </diV>
                    </div><!--
             --></div>
                
                <div class="menu" style="margin-top: 10px;"><!--
                 --><div class="inline threeQuarters"><!--
                     --><div id="menu_forsida"      class="menuItem selectedMenuItem" onClick="setContentTo(this);">Forsíða</div><!--
                     --><div id="menu_ferilskra"    class="menuItem center" onClick="setContentTo(this);">Ferilskrá</div><!--
                     --><div id="menu_mal"          class="menuItem center" onClick="setContentTo(this);">Mál</div><!--
                     --><!--<div id="menu_hafasamband"  class="menuItem center" onClick="setContentTo(this);">Hafa samband</div>--><!--
                     --><div id="menu_stadsetning"  class="menuItem center" onClick="setContentTo(this);">Staðsetning</div><!--
                 --></div><!--
             --></div>

                <div id="mainContent">
                    <div id="content_forsida" class="content">
                        <p class="contentHeader hidden">Velkomin</p>
                        <p class="contentHeader">Sigurður Sigurjónsson, hæstaréttarlögmaður í Reykjavík</p>
                        <p><b>Farsími:</b> 892-1303</p>
                        <p><b>Vinnusímar:</b> 578-7805 og 578-7806</p>
                        <p><b>Tölvupóstur:</b> SigurdurSig (hjá) gmail.com - <a href="mailto:sigurdursig@gmail.com"><img class="middle" title="Smelltu hér til að senda tölvupóst" src="/images/icon_gmail_small.gif" /></a></p>
                        <p><b>Pósthólf:</b><br/>
                            &nbsp;&nbsp;&nbsp;Lögfræðiþjónusta Sigurðar Sigurjónssonar hrl.<br/>
                            &nbsp;&nbsp;&nbsp;Box 8225<br/>
                            &nbsp;&nbsp;&nbsp;128 Reykjavík
                        </p>
                    </div>

                    <div id="content_hafasamband" class="content hidden">
                        <p class="contentHeader">Hafa samband</p>
                        <p><b>Farsími:</b> 892-1303</p>
                        <p><b>Vinnusímar:</b> 578-7805 og 578-7806</p>
                        <p><b>Tölvupóstur:</b> SigurdurSig (hjá) gmail.com - <a href="mailto:sigurdursig@gmail.com"><img class="middle" title="Smelltu hér til að senda tölvupóst" src="/images/icon_gmail_small.gif" /></a></p>
                        <p><b>Pósthólf:</b><br/>
                            &nbsp;&nbsp;&nbsp;Lögfræðiþjónusta Sigurðar Sigurjónssonar hrl.<br/>
                            &nbsp;&nbsp;&nbsp;Box 8225<br/>
                            &nbsp;&nbsp;&nbsp;128 Reykjavík
                        </p>
                    </div>

                    <div id="content_stadsetning" class="content hidden"><!--
                     --><div class="inline half">
                            <p class="contentHeader">Staðsetning</p>
                            <p>Heimilisfang Lögfræðiþjónustu Sigurðar Sigurjónssonar hrl. er eftirfarandi:</p>
                            <p style="margin-left: 40px;">
                                Kringlunni 4-12<br/>
                                9. hæð (stóri turn)<br/>
                                103 Reykjavík
                            <p/>
                            <p>Aðgengi er frá lyftum við Íslandsbanka á 2. hæð Kringlunnar, eða bílakjallara 1 og 2.</p>
                        </div><!--
                     --><div class="inline half right middle fullHeight">
                            <img alt="[Mynd frá Já.is]" src="images/ja_kort.png">
                        </div><!--
                 --></div>

                    <div id="content_mal" class="content hidden">
                        <p class="contentHeader">Mál</p>
                        <p></p>
                    </div>

                    <div id="content_ferilskra" class="content hidden">
                        <p class="contentHeader">Ferilskrá</p>
                        <p></p>
                    </div>

                </div>

                <div id="footer"><p>Lögfræðiþjónusta Sigurðar Sigurjónssonar hrl ehf - Kt. 570800-2560 - Banki 0318-26-13000 - Tölvupóstur: <b>SigurdurSig (hjá) gmail.com</b></p></div>
            </div>        
        </div>
        
        <div class="small center gray" style="margin-top:10px;">Vefur e. Jóhann Sigurðsson / Frozen Forge Studios, Reykjavík 2013</div>
    </body>
</html>
