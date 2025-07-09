<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:html="http://www.w3.org/TR/REC-html40">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="atom:feed">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Atom Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0;" />
        <style>
          :root {
            --c-bg: #f8f8f8;
            --c-bg-elv: #fff;
            --c-text: #2c3e50;
            --c-border: #eaecef;
            --c-border-dark: #cfd4db;
            --c-accent: #3eaf7c;
            --code-c-bg: #ecf4fa;
            --code-c-text: #383a42;
            --mono-font-family: consolas, monaco, "Andale Mono", "Ubuntu Mono", monospace;

            color-scheme: light dark;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --c-bg: #0d1117;
              --c-bg-elv: #161b22;
              --c-text: #ccc;
              --c-border: #30363d;
              --c-border-dark: #394048;
              --code-c-bg: #282c34;
              --code-c-text: #abb2bf;
            }
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: var(--c-bg);
          }

          body {
            min-height: 100vh;
            color: var(--c-text);
          }

          a {
            color: var(--c-accent);
            font-weight: 500;
            text-decoration: none;
            overflow-wrap: break-word;
          }

          kbd {
            display: inline-block;

            min-width: 1em;
            margin-inline: 0.125rem;
            padding: 0.25em;
            border: 1px solid var(--c-border-dark);
            border-radius: 0.25em;

            background: var(--c-bg);
            box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 15%);

            font-family: var(--mono-font-family);
            line-height: 1;
            letter-spacing: -0.1em;
            text-align: center;
          }

          pre {
            overflow: auto;

            padding: 1rem;
            border-radius: 6px;

            background: var(--code-c-bg);
            color: var(--code-c-text);

            direction: ltr;
          }

          code {
            margin: 0;
            padding: 0.2rem 0.4rem;
            border-radius: 5px;

            background: rgba(127 127 127 / 12%);

            font-size: 0.85em;
            font-family: var(--mono-font-family);
            overflow-wrap: break-word;
          }

          @media (prefers-color-scheme: dark) {
            code {
              background: #333;
            }
          }

          pre code {
            background: transparent;
          }

          table code {
            padding: 0.1rem 0.4rem;
          }

          p a code {
            color: var(--c-accent);
            font-weight: 400;
          }

          strong {
            font-weight: 600;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 500;
            line-height: 1.25;
            overflow-wrap: break-word;
          }

          h1 {
            font-size: 2rem;

            @media (max-width: 419px) {
              font-size: 1.9rem;
            }
          }

          h2 {
            padding-bottom: 0.3rem;
            border-bottom: 1px solid var(--c-border);
            font-size: 1.65rem;
          }

          h3 {
            font-size: 1.35rem;
          }

          h4 {
            font-size: 1.15rem;
          }

          h5 {
            font-size: 1.05rem;
          }

          h6 {
            font-size: 1rem;
          }

          p,
          ul,
          ol {
            line-height: 1.5;
            overflow-wrap: break-word;
          }

          ul,
          ol {
            padding-inline-start: 1.2em;
          }

          img {
            max-width: 100%;
          }

          blockquote {
            margin: 1rem 0;
            padding: 0.25rem 0 0.25rem 1rem;
            border-inline-start: 0.2rem solid #ddd;

            color: #666;

            font-size: 1rem;
            overflow-wrap: break-word;
          }

          blockquote p {
            margin: 0;
          }

          hr {
            border: 0;
            border-top: 1px solid var(--c-border);
          }

          table {
            display: block;
            overflow-x: auto;
            margin: 1rem 0;
            border-collapse: collapse;
          }

          tr:nth-child(odd) {
            background: var(--c-bg);
          }

          th,
          td {
            padding: 0.6em 1em;
            border: 1px solid var(--c-border-dark);
          } div[class*="language-"] {
            position: relative;
            border-radius: 6px;
          } div[class*='language-'']::before {
            content: attr(data-title);

            position: absolute;
            top: 0.8em;
            right: 1em;
            z-index: 3;

            font-size: 0.75rem;
          }
        </style>
        <style>
          .feed-info {
            margin-top: 1rem;
            padding: 0 2rem;
            text-align: center;
          }

          .feed-title {
            font-weight: bold;
          }

          .feed-subtitle {
            border: none;
            font-size: 1.5rem;
          }

          .feed-detail {
            display: inline-block;

            max-width: 960px;
            margin: 0.5rem auto;
            border: 1px solid #fff;
            border-collapse: collapse;
            border-radius: 0.5rem;

            text-align: start;
          }

          .feed-detail tr {
            border: none;
            background: transparent;
          }

          .feed-detail th,
          .feed-detail td {
            padding: 0.25rem 0.5rem;
            border: none;
          }

          .feed-detail td:first-child {
            font-weight: bold;
            text-align: right;
          }

          .atom-logo {
            height: 8rem;
          }

          .atom-icon {
            height: 1em;
            margin-inline-end: 1rem;
          }

          .atom-item-wrapper {
            margin: 0 1rem;
            text-align: center;
          }

          @media (max-width: 419px) {
            .atom-item-wrapper {
              margin: 0;
            }
          }

          .atom-item {
            overflow: hidden;

            max-width: 960px;
            margin: 16px auto;
            border-radius: 0.5rem;

            background: var(--c-bg-elv);
            box-shadow: 2px 4px 8px rgba(0 0 0 / 15%);

            text-align: start;
          }

          @media (max-width: 419px) {
            .atom-item {
              border-radius: 0;
            }
          }

          @media (prefers-color-scheme: dark) {
            .atom-item {
              box-shadow: 2px 4px 8px rgba(0 0 0 / 30%);
            }
          }

          .atom-header {
            padding: 8px 16px;
            background-color: var(--c-accent);
            color: var(--c-bg-elv);
          }

          .atom-title {
            border-bottom: 1px solid var(--c-bg-elv);
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 1.75;
          }

          .atom-info {
            margin-top: 0.25rem;
            font-size: 0.875rem;
          }

          .atom-info > span {
            display: inline-block;
            margin: 0.25em 0.5em 0.25em 0;
          }

          .atom-info > span:last-child {
            margin-inline-end: 0;
          }

          .atom-info label {
            display: inline-block;
            margin-inline-end: 0.5em;
          }

          .atom-body {
            padding: 0.25rem 1rem;
          }

          .atom-footer {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .atom-footer label {
            margin-inline-end: 0.5em;
          }

          .atom-link {
            display: inline-block;

            padding: 0.375em 0.75em;
            border-radius: 0.5em;

            background: var(--c-accent);
            color: var(--c-bg-elv);
          }

          footer {
            margin-top: 0.75rem;
            padding: 0.25rem;

            color: #888;

            font-size: 0.75rem;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="feed-info">
          <xsl:if test="atom:logo">
            <img class="feed-logo" src="{atom:logo}" alt="atom logo" />
          </xsl:if>
          <h1 class="feed-title">
            <xsl:if test="atom:icon and not(atom:logo)">
              <img class="feed-icon" src="{atom:icon}" alt="atom logo" />
            </xsl:if>
            <xsl:value-of select="atom:title"></xsl:value-of>
          </h1>
          <h2 class="feed-subtitle">
            <xsl:value-of select="atom:subtitle" />
          </h2>

          <table class="feed-detail">
            <tbody>
              <tr>
                <td>Last update time:</td>
                <td>
                  <xsl:value-of select="concat(substring(atom:updated,0,11),concat(' ', substring(atom:updated,12,5)))" />
                </td>
              </tr>
              <xsl:if test="atom:author/atom:name">
                <tr>
                  <td>Author:</td>
                  <td>
                    <xsl:for-each select="atom:author/atom:name">
                      <xsl:if test="position() != 1">, </xsl:if>
                      <xsl:value-of select="current()" />
                    </xsl:for-each>
                  </td>
                </tr>
              </xsl:if>
              <xsl:if test="atom:contributor/atom:name">
                <tr>
                  <td>Contributor:</td>
                  <td>
                    <xsl:for-each select="atom:contributor/atom:name">
                      <xsl:if test="position() != 1">, </xsl:if>
                      <xsl:value-of select="current()" />
                    </xsl:for-each>

                  </td>
                </tr>
              </xsl:if>
              <xsl:if test="atom:category">
                <tr>
                  <td>Categories:</td>
                  <td>
                    <xsl:for-each select="atom:category">
                      <xsl:if test="position() != 1">, </xsl:if>
                      <xsl:value-of select="current()/@term" />
                    </xsl:for-each>
                  </td>
                </tr>
              </xsl:if>
              <xsl:if test="atom:rights">
                <tr>
                  <td>Copyright:</td>
                  <td>
                    <xsl:value-of select="atom:rights" />
                  </td>
                </tr>
              </xsl:if>
            </tbody>
          </table>
        </div>

        <div class="atom-item-wrapper">
          <xsl:for-each select="atom:entry">
            <xsl:variable name="feed-index" select="position()" />
            <div class="atom-item">
              <div class="atom-header">
                <div class="atom-title">
                  <xsl:value-of select="atom:title" />
                </div>
                <div class="atom-info">
                  <xsl:if test="atom:author">
                    <span>
                      <label for="author-{$feed-index}">Author:</label>
                      <span id="author-{$feed-index}">
                        <xsl:for-each select="atom:author">
                          <xsl:if test="position() != 1">, </xsl:if>
                          <xsl:value-of select="current()/atom:name" />
                        </xsl:for-each>
                      </span>
                    </span>
                  </xsl:if>
                  <xsl:if test="atom:contributor">
                    <span>
                      <label for="contributor-{$feed-index}">Contributor:</label>
                      <span id="contributor-{$feed-index}">
                        <xsl:for-each select="atom:contributor">
                          <xsl:if test="position() != 1">, </xsl:if>
                          <xsl:value-of select="current()/atom:name" />
                        </xsl:for-each>
                      </span>
                    </span>
                  </xsl:if>
                  <xsl:if test="atom:published">
                    <span>
                      <label for="date-{$feed-index}">Date:</label>
                      <span id="date-{$feed-index}">
                        <xsl:value-of select="concat(substring(atom:updated,0,11),concat(' ', substring(atom:updated,12,5)))" />
                      </span>
                    </span>
                  </xsl:if>
                  <xsl:if test="atom:updated">
                    <span>
                      <label for="update-{$feed-index}">Updated time:</label>
                      <span id="update-{$feed-index}">
                        <xsl:value-of select="concat(substring(atom:updated,0,11),concat(' ', substring(atom:updated,12,5)))" />
                      </span>
                    </span>
                  </xsl:if>
                </div>
              </div>
              <div class="atom-body">
                <xsl:value-of select="atom:summary" disable-output-escaping="yes" />
              </div>
              <div class="atom-footer">
                <a class="atom-link" href="{atom:link/@href}" target="_blank">
                  Visit
                </a>
                <span>
                  <xsl:if test="atom:rights">
                    <label for="copyright-{$feed-index}">Copyright:</label>
                    <span id="copyright-{$feed-index}">
                      <xsl:value-of select="atom:rights" />
                    </span>
                  </xsl:if>
                </span>
              </div>
            </div>
          </xsl:for-each>
        </div>
        <footer>
          Generatd by <a href="https://ecosystem.vuejs.press/plugins/feed/">@vuepress/plugin-feed</a>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
