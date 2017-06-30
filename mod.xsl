<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.smct-msgview">
        <xsl:param name="operation"/>
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-smct-msgview" ox-mod="smct-msgview" data-op="{$operation}">
            <div class="empty">
            加载中...
            </div>
            <script type="text/tpl" class="J_tpl"><![CDATA[
                <div class="msg-box">
                    <h3>扫码车贴通知:</h3>

                    您的爱车因<big>{{reason}}</big>,请速至现场处理!
                    <p class="time">{{time}}</p>

                </div>

                <div class="imgs">
                    {{#imgs}}
                    <p>
                        <a href="http://i.oxm1.cc/uploads/{{.}}"><img src="http://i.oxm1.cc/uploads/{{.}}@!w360"/></a>
                    </p>
                    {{/imgs}}
                </div>
                <div class="echo">
                    {{#echo}}
                    <span class="{{.}}"></span><br/>
                    {{/echo}}
                </div>
                {{#shortcuts}}
                <div class="shortcuts">
                    快捷回应:
                    <button data-role="sendno">发送车主手机号给对方</button>
                    <button data-role="msd">马上到</button>
                </div>
                {{/shortcuts}}
                ]]>
            </script>
        </div>

    </xsl:template>
</xsl:stylesheet>
