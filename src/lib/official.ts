import SvelteLogo from "../icons/svelte-logo.svg";
import PHPLogo from "../icons/php-logo.svg";
import ZigLogo from "../icons/zig-logo.png";

export interface Docset {
  description: string;
  title: string;
  name: string;
  version: string;
  remote: string;
	icon: any,
	link: string
}

export default [{
	"description": "A comprehensive guide to the Svelte JavaScript framework. It includes detailed information on components, syntax, and usage, as well as examples and best practices for building fast and efficient web applications.",
	"title": "Svelte",
	"name": "official:svelte",
	"version": "0.0.1",
	"remote": "",
	"icon": SvelteLogo,
	"link": "/dock/svelte"
},
{
	"description": "A comprehensive guide to the PHP programming language. It includes detailed information on syntax, functions, and usage, as well as examples and best practices.",
	"title": "PHP",
	"name": "official:php",
	"version": "0.0.1",
	"remote": "",
	"icon": PHPLogo,
	"link": "/dock/php"
},
{
	"description": "Detailed information on syntax, data types, standard library functions, and usage of the Zig programming language. It includes examples and best practices to help developers become proficient in writing efficient, safe, and elegant code with Zig.",
	"title": "Zig",
	"name": "official:zig",
	"version": "0.0.1",
	"remote": "",
	"icon": ZigLogo,
	"link": "/dock/zig"
}]