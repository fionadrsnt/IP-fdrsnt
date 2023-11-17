const FaqPage = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-8 max-w-2xl bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-8">
          Frequently Asked Questions
        </h1>
        {/* FAQ Section */}
        <div className="accordion">
          {/* FAQ Item 1 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq1" className="hidden" />
            <label
              htmlFor="faq1"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                How Do I Search For a Pet?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                WhiskerWonder is a searchable list of pets from over 11,000
                shelters and rescue groups across the US, Canada, and Mexico. To
                find an adoptable pet, you can begin your search using “Find a
                Pet” located above. Since WhiskerWonder is updated regularly, we
                recommend that you keep checking back or create a saved search
                email alert to be notified when new pets matching your search
                criteria are added to the site.
              </p>
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                How Do I Adopt a Pet I See On WhiskerWonder?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                WhiskerWonder is a website and searchable database for over
                11,000 animal shelters and rescue groups across the US, Canada
                and Mexico to post their adoptable pets. While WhiskerWonder
                does provide a web-based adoption platform for groups across
                North America, we are not involved in any of our members pet
                adoptions. Each adoption group using our site has its own
                adoption policies and procedures and solely handles its own pet
                adoptions. To adopt a pet you see listed on WhiskerWonder,
                please click the “Ask About” button on the pets profile. You
                will then be given the groups contact information and, if an
                email is available for that group, you will be able to email
                that group using our form.
              </p>
            </div>
          </div>
          {/* FAQ Item 3 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                How Can I Adopt a Pet I See On WhiskerWonder?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                WhiskerWonder is a website and searchable database for nearly
                14,000 animal shelters and rescue groups across the US, Canada
                and Mexico to post their adoptable pets. While WhiskerWonder
                does provide a web-based adoption platform for groups across
                North America, we are not involved in any of our members pet
                adoptions. Each adoption group using our site has its own
                adoption policies and procedures and solely handles its own pet
                adoptions. To adopt a pet you see listed on WhiskerWonder,
                please click the "Adopt Me" button or the "Contact this
                Organization" button on the pet's profile. You will then be
                given the group's contact information and, if an email is
                available for that group, you will be able to email that group
                using our form.
              </p>
            </div>
          </div>
          {/* FAQ Item 4 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                What Are The Requirements For Adopting A Pet?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                Each adoption group that lists its pets on WhiskerWonder has its
                own rules and requirements for adopting pets. If you are
                interested in a specific pet, please reach out to the adoption
                group that created the pet listing to find out what their
                policies are.
              </p>
            </div>
          </div>
          {/* FAQ Item 5 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                Why Wasn't I Selected to Adopt?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                Thank you for thinking adoption first! Each shelter and rescue
                group has its own adoption process. We do not dictate adoption
                procedures to our WhiskerWonder members, although we do
                encourage them to do everything possible to facilitate finding
                good homes for their adoptable pets. We hope you wont let this
                one experience change your mind about providing a loving home to
                a pet in need. There are many animal shelters and rescue groups
                with many more adoptable pets waiting for their forever homes!
                Thank you for helping an adoptable pet and we wish you the best
                of luck in your search to find a new member of your family. If
                you have specific questions or concerns about a shelter, please
                contact us below
              </p>
            </div>
          </div>
          {/* FAQ Item 6 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                How Can I Tell If a Rescue Group is Real or a Scam?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                All the adoption groups that list their pets on WhiskerWonder
                have been carefully screened by our shelter outreach staff. If
                you have concerns about a shelter or rescue group listed on
                WhiskerWonder, please contact us. If youre looking outside of
                WhiskerWonder for a pet to adopt, there are some red flags to
                keep an eye out for. No one point alone proves whether a group
                is or is not legitimate. If you find several of these warning
                signs, you might want to look for your adoptable pet elsewhere.
                Learn the warning signs that a rescue group could be a scam.
              </p>
            </div>
          </div>
          {/* FAQ Item 7 */}
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="accordion-title cursor-pointer bg-white rounded-md p-4 mb-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-lg font-semibold">
                How Do I Make a Complaint About a Shelter or Rescue Group?
              </span>
              <span className="ml-auto">▼</span>
            </label>
            <div className="accordion-content p-4">
              <p>
                All of the animal shelters and rescue groups on our site undergo
                an application and screening process prior to being able to post
                their groups adoptable pets. They must also provide a letter of
                reference from their primary veterinarian. If you have concerns
                about a particular shelter or rescue group posting on our site,
                you are welcome to contact us. Its important to us that our
                member shelters and rescue groups remain in good standing in the
                animal welfare community. Please be sure to include the full
                name, city, and state of the group you are referring to. Note:
                Specific complaints about rescue groups included in the comments
                below will be deleted. Please be sure to email us any concerns.
              </p>
            </div>
          </div>
        </div>
        {/* End FAQ Section */}
      </div>
    </>
  );
};
export default FaqPage;
