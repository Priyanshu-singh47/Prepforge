import LegalLayout from "../components/common/LegalLayout";

function Contact(){

return(
<LegalLayout title="Contact Us">


<p>
Have questions, feedback, or need assistance? We would love to hear from you.
The PrepForge team is always open to suggestions and support requests.
</p>


<p>
Whether you found a bug, need help with your account, or want to share
feedback about the platform, feel free to reach out to us.
</p>



<section>

<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
Support Email
</h2>


<div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">

<p className="font-medium text-gray-900 dark:text-white">
PrepForge Team
</p>


<a
href="mailto:prepforge.team@gmail.com"
className="mt-2 block text-blue-600 hover:underline"
>
prepforge.team@gmail.com
</a>


</div>


</section>



<section>

<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
Response Time
</h2>


<p>
We try to respond to support queries as soon as possible.
Please include relevant details when contacting us so we can assist you better.
</p>


</section>



<section>

<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
Feedback
</h2>


<p>
Your feedback helps us improve PrepForge and build a better preparation
experience for students.
</p>


</section>



</LegalLayout>
);

}

export default Contact;