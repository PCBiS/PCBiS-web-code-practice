$(document).ready(function() {
    var sites = "";

    sites += "<sites>"
    sites += "  <site>"
    sites += "      <name>NAVER</name>"
    sites += "      <url>http://www.naver.com</url>"
    sites += "  </site>"
    sites += "  <site>"
    sites += "      <name>DAUM</name>"
    sites += "      <url>http://www.daum.net</url>"
    sites += "  </site>"
    sites += "  <site>"
    sites += "      <name>Google</name>"
    sites += "      <url>http://www.google.com</url>"
    sites += "  </site>"
    sites += "</sites>"

    var xmlDoc = $.parseXML(sites);
    console.log(xmlDoc);
    var siteHTML = '';

    $(xmlDoc).find('site').each(function(idx) {
        var name = $(this).find('name').text();
        var url = $(this).find('url').text();

        siteHTML += '<div class="site">'
        siteHTML += "   <h3>" + name + "</h3>"
        siteHTML += "   <p>" + url + "</p>"
        siteHTML += "</div>"
    });



    $('.sites').html(siteHTML);
});