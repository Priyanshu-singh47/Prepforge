import { Link } from "react-router-dom";

function LegalFooter(){

return(
<footer className="mt-16 border-t border-gray-200 bg-gray-50 py-10 dark:border-gray-700 dark:bg-gray-900">


<div className="flex flex-col items-center gap-5">


<div className="flex items-center gap-2">

<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
P
</div>

<span className="text-lg font-semibold text-gray-900 dark:text-white">
PrepForge
</span>

</div>



<div className="flex gap-8 text-sm text-gray-500">

<Link
to="/terms"
className="hover:text-blue-600"
>
Terms
</Link>


<Link
to="/privacy-policy"
className="hover:text-blue-600"
>
Privacy
</Link>


<Link
to="/contact"
className="hover:text-blue-600"
>
Contact
</Link>


<Link
to="/"
className="hover:text-blue-600"
>
Home
</Link>


</div>



<p className="text-sm text-gray-400">
© 2026 PrepForge
</p>


</div>


</footer>
);

}

export default LegalFooter;