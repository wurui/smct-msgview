<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.smct-msgview">
        
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-smct-msgview" ox-mod="smct-msgview">
            <xsl:variable name="msg" select="data/user-comment/i[1]"/>
            <xsl:choose>
                <xsl:when test="$msg">
                    <div class="msg-box">
                        <h3>扫码车贴通知:</h3>

                        您的爱车因<big><xsl:value-of select="$msg/content"/></big>,请速至现场处理!
                        <p class="time"><xsl:value-of select="$msg/time/y"/>年<xsl:value-of select="$msg/time/M"/>月<xsl:value-of select="$msg/time/d"/>日&#160;<xsl:value-of select="$msg/time/H"/>:<xsl:value-of select="$msg/time/m"/></p>

                    </div>

                    <div class="imgs">
                        
                        <xsl:for-each select="$msg/media/i[type='image']">
                            <p>
                                <a href="{src}"><img src="{src}"/></a>
                            </p>
                        </xsl:for-each>
                    </div>
                    
                </xsl:when>
                <xsl:otherwise>
                    <div class="empty">
                    消息不存在或已过期</div>
                </xsl:otherwise>
            </xsl:choose>
            
        </div>

    </xsl:template>
</xsl:stylesheet>
