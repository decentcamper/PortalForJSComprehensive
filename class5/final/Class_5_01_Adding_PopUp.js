/**
 * Created by viveksh2 on 5/18/17.
 */


window.onload = function () {
    document.getElementById('speakerImg').addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            var myPopup = window.open('', 'name', 'height=600,width=600');
            var myPopupDoc = myPopup.document;
            myPopupDoc.write('<html><head><title>popup</title>');
            myPopupDoc.write('<link rel="stylesheet" href="js.css">');
            myPopupDoc.write('</head><body><p>this is once again a popup.</p>');
            myPopupDoc.write('<p><a href="javascript:alert(self.location.href)">view location</a>.</p>');
            myPopupDoc.write('<p><a href="javascript:self.close()">close</a> the popup.</p>');
            myPopupDoc.write('</body></html>');
            myPopupDoc.close();
        }
    })
};
