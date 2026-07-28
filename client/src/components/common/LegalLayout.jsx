import { Link } from "react-router-dom";
import LegalFooter from "./LegalFooter";

function LegalLayout({title,children}){

return(
<div className="min-h-screen bg-gray-50 dark:bg-gray-900">


<div className="flex items-center justify-between border-b border-gray-200 px-8 py-5 dark:border-gray-700">


<div className="text-xl font-bold text-blue-600">
PrepForge
</div>


<Link
to="/"
className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300"
>
← Back Home
</Link>


</div>




<div className="mx-auto max-w-4xl px-6 py-10">


<p className="mb-3 text-sm font-semibold text-blue-600">
LEGAL
</p>


<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
{title}
</h1>


<p className="mt-2 text-sm text-gray-500">
Last updated: 28 July 2026
</p>




<div className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">

{children}

</div>


</div>



<LegalFooter />


</div>
);

}

export default LegalLayout;