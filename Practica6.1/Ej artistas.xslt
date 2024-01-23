<xsl:stylesheet
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        version="1.0">

    <xsl:param name="a-partir-de" select="1500"/>

    <xsl:output method="html" indent="yes" version="5" doctype-system="about:legacy-doctype"/>

    <xsl:template match="@* | node()">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()"/>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="/">
        <html lang="es">
            <head>
                <title>tabla de <xsl:value-of select="local-name(/*)"/></title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="artistas">
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Año de nacimiento</th>
                    <th>Año de fallecimiento</th>
                    <th>País</th>
                    <th>Página web</th>
                </tr>
            </thead>
            <tbody>
                <xsl:apply-templates select="artista[nacimiento > $a-partir-de]">
                    <xsl:sort select="nacimiento" data-type="number"/>
                </xsl:apply-templates>
            </tbody>
        </table>
        <p>Número total de artistas nacidos después de 1500: <xsl:value-of select="count(//artista[nacimiento > 1500])"/></p>
        <p>Número de artistas nacidos en España: <xsl:value-of select="count(//artista[pais = 'España'])"/></p>
        <p>Número de artistas nacidos en el siglo XVI: <xsl:value-of select="count(//artista[starts-with(substring(nacimiento,1,2),'15')])"/></p>
    </xsl:template>

    <xsl:template match="artista">
        <tr>
            <xsl:apply-templates select="@* | *"/>
        </tr>
    </xsl:template>

    <xsl:template match="artista/@* | artista/*" name="celda">
        <td>
            <xsl:value-of select="."/>
        </td>
    </xsl:template>

    <xsl:template match="artista[not(fallecimiento)]/nacimiento">
        <xsl:call-template name="celda"/>
        <td>Desconocido</td>
    </xsl:template>

    <xsl:template match="artista/fichaCompleta">
        <td>
            <a href="{.}" target="_blank">Saber más</a>
        </td>
    </xsl:template>

</xsl:stylesheet>