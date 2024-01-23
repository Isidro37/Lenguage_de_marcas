<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="/">
        <resultados>
            <xsl:for-each select="rusia2018/partidos">
                <xsl:sort select="@jornada" data-type="number" order="ascending"/>
                <jornada>
                    <xsl:attribute name="numero">
                        <xsl:value-of select="@jornada"/>
                    </xsl:attribute>

                    <xsl:for-each select="partido">
                        <xsl:sort select="concat(@equi1, @equi2)" data-type="text" order="ascending"/>
                        <partido>
                            <selecciones>
                                <xsl:value-of select="@equi1"/>-<xsl:value-of select="@equi2"/>
                            </selecciones>

                            <resultado>
                                <xsl:value-of select="count(gol[@equipo=./../@equi1])"/>-<xsl:value-of select="count(gol[@equipo=./../@equi2])"/>
                            </resultado>
                        </partido>
                    </xsl:for-each>
                </jornada>
            </xsl:for-each>
        </resultados>
    </xsl:template>
</xsl:stylesheet>