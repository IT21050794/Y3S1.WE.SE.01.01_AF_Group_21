import React from 'react'
import './CitizenHome.css'

// import { homeViewImage, homeRegisterImage } from '../../asserts'
// import { register, registerDetails, view, viewDetails } from '../../asserts'

export default function CitizenHome() {

    
    return (
        <>
            <div className='homecontainer'>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/addComplaints">
                        <img className="rounded-t-lg" src="" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="/addComplaints">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Complaint</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You can add Complaints regarding our city</p>
                        <a href="/addComplaints" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add Complaints
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>

                
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/dash">
                        <img className="rounded-t-lg" src="" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="/dash">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">View Complaints</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You can view all your submitted complaints</p>
                        <a href="/dash" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Complaints
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                    
                </div>
                
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/addProposals">
                        <img className="rounded-t-lg" src="" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="/addProposals">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Proposals/Suggestions</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">As a Citizen you can add new Suggestions</p>
                        <a href="/addProposals" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add Proposals
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/addProposals">
                        <img className="rounded-t-lg" src="" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="/addProposals">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">View Proposals/Suggestions</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You can view all your submitted Suggestions</p>
                        <a href="/addProposals" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Proposals
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                
            </div>
        </>
    )
}
