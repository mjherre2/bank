function confirm(cN, tI, bP, e, bT, oN, p, dob, pO, lT, a, g, t) {
    var cNs = "Thank you " + oN + " owner of " + cN + " for the application. <br>"
    document.getElementById("confirmation").innerHTML = cNs;
    var infoo = "This was the info you submitted: <br> TaxId: " + tI + "<br> Business Phone: " + bP + "<br> Business Type: " + bT + "<br> Email: " + e + "<br> Owner Phone: " + p + "<br> Birthday: " + dob + "<br> Percent Owned: " + pO + "<br> Loan Type: " + lT + "<br> Loan Amount: " + a + "<br> Gross Anual Income: " + g + "<br> Term Type: " + t;
    document.getElementById("info").innerHTML = infoo;

    var body = "Owner Name: " + oN + "\r\n" + "Company Name: " + cN + "\r\n" + "Tax Id: " + tI + "\r\n" + "Business Phone: " + bP + "\r\n" + "Business Type: " + bT + "\r\n" + "Email: " + e + "\r\n" + "Owner Phone: " + p + "\r\n" + "Birthday: " + dob + "\r\n" + "Percent Owned: " + pO + "\r\n" + "Loan Type: " + lT + "\r\n" + "Loan Amount: " + a + "\r\n" + "Gross Anual Income: " + g + "\r\n" + "Term Type: " + t;
    body = encodeURIComponent(body);
    // this code was found from the stackedoverflow link in my readme
    var em = 'mailto:some@example.com?subject=Interview&body=' + body;
    window.open(em);
}