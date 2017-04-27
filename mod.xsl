<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.smct-msgview">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-smct-msgview" ox-mod="smct-msgview">
            <div class="empty">
            加载中...
            </div>
            <script type="text/tpl" class="J_tpl"><![CDATA[
                <div>
                    时间:{{time}}
                </div>
                <div>
                    理由:{{reason}}
                </div>
                <h3>
                    附图:
                </h3>
                <div class="imgs">
                    {{#imgs}}
                    <p>
                        <img src="http://i.oxm1.cc/uploads/{{.}}@!w360"/>
                    </p>
                    {{/imgs}}
                </div>
                ]]>
            </script>
        </div>

    </xsl:template>
</xsl:stylesheet>
