const TrackingCard = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">
                  Track Your Friend Journey!
                </h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    We are helping our lovely friend getting ready{" "}
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    20 Dec 2020
                  </time>
                  <p className="mt-3">
                    They are so exicted to meet you, so we are just making sure
                    they have all the needs they need for this big journey. We
                    put lots of snacks and toys to keep them entertained!
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    They are on their way!
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    23 Dec 2020
                  </time>
                  <p className="mt-3">
                    He is on his way! Make sure to keep an eye on his Journey
                    and be prepared for their arrival!
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Home Sweet Home!
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    25 Dec 2020
                  </time>
                  <p className="mt-3">
                    Congratulations for the new member of family! Glad to help
                    him find his forever home!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TrackingCard;
