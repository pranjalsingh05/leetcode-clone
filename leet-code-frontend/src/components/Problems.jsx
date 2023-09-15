import {useState,useEffect} from "react"
import { get } from "../lib/util.js";
// import { problems } from "../utils/problems"
import {Difficulty} from "./index"



const Problems = () => {
 const [currentPage,SetCurrentPage]=useState(1)
  const [problems, setProblems] = useState([]);
 const itemsperPage=4;
 const indexLast=currentPage*itemsperPage;
 const indexFirst=indexLast-itemsperPage;
 

  

  const init = async () => {
    const response = await get("/questions");
    const responseJson = await response.json();
    setProblems(responseJson.data);
    console.log(responseJson.data)
  };

  useEffect(() => {
    init();
  }, []);

  const currentProblems = problems.slice(indexFirst, indexLast);

  const handlePageChange = (pageNumber) => {
    SetCurrentPage(pageNumber);
  };
   

  const onProblemClick = (problemId) => () => {
    window.location.href = `/problems/:${problemId}`;
  };
 
  return (
    <>
    <div className=" h-full ">
    <table className="w-full h-full  flex flex-col">
      <thread>
        <tr className="grid grid-cols-4 px-4 py-6 border-b">
          <th>Id</th>
          <th>Title</th>
          <th>Difficulty</th>
          <th>Acceptance</th>
        </tr>
      </thread>
       <tbody className=" flex-grow">
      {currentProblems.map((problem,index)=>
      
       
       
          <tr key={index}  onClick={onProblemClick(problem.id)} className="hover:bg-sky-50 text-slate-600 text-sm cursor-pointer text-center grid grid-cols-4 px-4 py-6 border-b" >
            <td>{problem.id}</td>
            <td >{problem.title}</td>
            <td><Difficulty difficulty={problem.difficulty} /></td>
            <td>{problem.acceptance}</td>
           </tr>
      
      
      
      )}

      </tbody>
      </table>
      </div>
      
      
          


      <div className="mt-4 flex justify-center">
        <button
          className=" hover:bg-sky-100 p-4 bg-sky-50 shadow-sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1} // Disable the "Previous" button on the first page
        >
          Back
        </button>
        <span className="bg-white p-4 text-gray-700 py-2 px-4">
          Page {currentPage}
        </span>
        <button
          className=" hover:bg-sky-100 p-4 bg-sky-50 shadow-sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentProblems.length < itemsperPage} 
        >
          Next
        </button>
      </div>

     
    </>
   
  )
}

export default Problems;