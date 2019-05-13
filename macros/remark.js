/**
 * Returns an img tag using the parameter as either percentage or exact value
 * Credits to percona/training-material/share/percona-remark-macros.js
 *
 * @param {int} scale - value of scale
 * @object {this} content - path to image.
 */
remark.macros.image = function (xscale, yscale)
{
	var url = this;
	var img = document.createElement('img');
	img.src = url;
	
	if (xscale != undefined && xscale != "")
		img.style.width = xscale;

	if (yscale != undefined && yscale != "")
		img.style.height = yscale;
	
	return img.outerHTML;
}