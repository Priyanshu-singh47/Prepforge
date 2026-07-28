import LegalLayout from "../components/common/LegalLayout";

function PrivacyPolicy(){

return(
<LegalLayout title="Privacy & User Policy">


<p>
Your privacy matters. This policy explains what information PrepForge collects,
how we use it, and how we protect your data while providing learning and
preparation tracking services.
</p>


<section>
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
1. Information We Collect
</h2>

<p>
We collect account information such as your name, email address, and branch.
We also store learning data including solved questions, progress tracking,
bookmarks, notes, and planner tasks.
</p>

</section>


<section>
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
2. How We Use Your Information
</h2>

<p>
Your information is used to provide personalized dashboards, track preparation
progress, manage your account, and improve the overall PrepForge experience.
</p>

</section>


<section>
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
3. Authentication & Security
</h2>

<p>
Passwords are securely encrypted using bcrypt. Authentication uses secure JWT
tokens and email OTP verification for account security.
</p>

</section>


<section>
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
4. Data Sharing
</h2>

<p>
PrepForge does not sell or share your personal information with third parties.
Your data is only used for providing platform functionality.
</p>

</section>


<section>
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
5. Data Deletion
</h2>

<p>
Users may request account deletion or correction of their information by
contacting the PrepForge team.
</p>

</section>


<section>
<h2 className="text-xl font-semibold text-gray-900 dark:text-white">
6. Contact
</h2>

<p>
For privacy related queries contact:
<br/>
prepforge.team@gmail.com
</p>

</section>


</LegalLayout>
);

}

export default PrivacyPolicy;