import { Link } from "react-router-dom";

function Footer(){

return(
<footer className="mt-8 border-t border-gray-200 py-6 dark:border-gray-700">

<div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs text-gray-500">

<p>
© 2026 PrepForge
</p>


<div className="flex gap-6">

<Link
to="/privacy-policy"
className="hover:text-blue-600"
>
Privacy Policy
</Link>


<Link
to="/terms"
className="hover:text-blue-600"
>
Terms
</Link>


<Link
to="/contact"
className="hover:text-blue-600"
>
Contact
</Link>


</div>


</div>

</footer>
);

}

export default Footer;