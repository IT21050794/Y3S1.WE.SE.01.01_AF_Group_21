import React from "react";


function card() {
    return(
        
<div className="min-h-screen text-gray-100">
  <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row gap-6 p-6">
    {/* card start */}
    <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2">
      <img
        className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
        src="https://png.pngtree.com/background/20211215/original/pngtree-business-woman-daytime-professional-girl-office-at-work-picture-image_1504108.jpg"
        alt="Construction work"
      />
      <div className="text-center space-y-3 md:text-left flex flex-col">
        <p className="text-lg text-black font-semibold">
          <a href="#" title="Visite site">
            <span className="capitalize">MAYOR</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            </svg>
          </a>
        </p>
        <p className="text-gray-500 font-medium">
          <a href="#" title="Source code">
            <span className="normal-case">MRS. ROSY SENANAYAKE J.P., U.M.</span>
          </a>
          <p>
          Office011-2691849 <br />
          Mobile077-3004444 <br />
          Fax011-2698067 <br />
          Emailmayor@colombo.mc.gov.lk <br />
          </p>
        </p>
      </div>
    </div>
    <div className="py-6 px-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2">
      <img
        className="block mx-auto max-h-72 rounded-md rounded-bl-none rounded-br-none"
        src="https://img.freepik.com/premium-photo/portrait-business-woman-holding-laptop-wearing-black-suit-studio-shot-isolated-white-background-pretty-female-model-confident-professional-office-worker_119653-1078.jpg"
        alt="Construction work"
      />
      <div className="text-center space-y-3 md:text-left flex flex-col">
        <p className="text-lg text-black font-semibold">
          <a href="#" title="Visite site">
            <span className="capitalize">SECRETARY</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            </svg>
          </a>
        </p>
        <p className="text-gray-500 font-medium">
          <a href="#" title="Source code">
            <span className="normal-case">MS. S. MASSILLAMANI</span>
          </a>
          <p>
          Office011-2691849 <br />
          Mobile077-3004444 <br />
          Fax011-2698067 <br />
          Emailmayor@colombo.mc.gov.lk <br />
          </p>
        </p>
      </div>
    </div>
  </div>
</div>



    );
}

export default card